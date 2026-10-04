import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SEATTLE,
  placeKey,
  validPlace,
  type Place,
  type Units,
  type Weather,
  type Alert,
} from './model';
type Preferences = {
  place: Place;
  units: Units;
  theme: 'auto' | 'light' | 'dark';
  motion: boolean;
  favorites: Place[];
};
const defaults: Preferences = {
  place: SEATTLE,
  units: 'us',
  theme: 'auto',
  motion: true,
  favorites: [],
};
const PREFS = 'weather-journal:preferences:v1';
const CACHE = 'weather-journal:forecasts:v1';
type Snapshot = { key: string; weather: Weather };
function read<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Private browsing / full storage: the app still works. */
  }
}
function snapshots(): Snapshot[] {
  const value = read<Snapshot[]>(CACHE, []);
  return Array.isArray(value)
    ? value
        .filter(
          (s) =>
            s?.weather?.current &&
            Array.isArray(s.weather.hours) &&
            Array.isArray(s.weather.days) &&
            Date.now() - s.weather.fetchedAt < 48 * 3600000
        )
        .slice(0, 5)
    : [];
}
export function useWeather() {
  const [prefs, setPrefs] = useState<Preferences>(defaults);
  const [ready, setReady] = useState(false);
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [offline, setOffline] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [alerts, setAlerts] = useState<{
    key: string;
    status: string;
    alerts: Alert[];
  } | null>(null);
  const [geoStatus, setGeoStatus] = useState('');
  const [locating, setLocating] = useState(false);
  const [now, setNow] = useState(() => Math.floor(Date.now() / 1000));
  const mounted = useRef(true);
  const key = placeKey(prefs.place);
  const weather = snapshot?.key === key ? snapshot.weather : null;
  useEffect(() => {
    mounted.current = true;
    const saved = read<Partial<Preferences>>(PREFS, {});
    setPrefs({
      place: validPlace(saved.place) ? saved.place : SEATTLE,
      units: saved.units === 'metric' ? 'metric' : 'us',
      theme: ['auto', 'light', 'dark'].includes(saved.theme)
        ? saved.theme!
        : 'auto',
      motion: saved.motion !== false,
      favorites: Array.isArray(saved.favorites)
        ? saved.favorites.filter(validPlace).slice(0, 6)
        : [],
    });
    setOffline(!navigator.onLine);
    setReady(true);
    const online = () => {
      setOffline(false);
      setRefresh((v) => v + 1);
    };
    const lost = () => setOffline(true);
    const visible = () => {
      if (document.visibilityState === 'visible') {
        setNow(Math.floor(Date.now() / 1000));
        setRefresh((v) => v + 1);
      }
    };
    window.addEventListener('online', online);
    window.addEventListener('offline', lost);
    document.addEventListener('visibilitychange', visible);
    const tick = window.setInterval(
      () => setNow(Math.floor(Date.now() / 1000)),
      60000
    );
    const poll = window.setInterval(() => {
      if (document.visibilityState === 'visible') setRefresh((v) => v + 1);
    }, 15 * 60000);
    if ('serviceWorker' in navigator && !import.meta.env.DEV) {
      navigator.serviceWorker
        .register('/weather/sw.js', { scope: '/weather/' })
        .then(async (registration) => {
          await navigator.serviceWorker.ready;
          await document.fonts.ready;
          const urls = performance
            .getEntriesByType('resource')
            .map((r) => r.name)
            .filter((name) => {
              const url = new URL(name);
              return (
                url.origin === location.origin &&
                (url.pathname.startsWith('/assets/') ||
                  url.pathname.startsWith('/fonts/'))
              );
            });
          registration.active?.postMessage({ type: 'CACHE_ASSETS', urls });
        })
        .catch(() => {});
    }
    return () => {
      mounted.current = false;
      clearInterval(tick);
      clearInterval(poll);
      window.removeEventListener('online', online);
      window.removeEventListener('offline', lost);
      document.removeEventListener('visibilitychange', visible);
    };
  }, []);
  useEffect(() => {
    if (ready) write(PREFS, prefs);
  }, [prefs, ready]);
  useEffect(() => {
    if (!ready) return;
    const controller = new AbortController();
    const saved = snapshots().find((s) => s.key === key);
    setSnapshot(saved ?? null);
    setError('');
    setLoading(!saved);
    if (
      saved &&
      Date.now() - saved.weather.fetchedAt < 15 * 60000 &&
      refresh === 0
    )
      return () => controller.abort();
    setLoading(true);
    const query = new URLSearchParams({
      lat: prefs.place.latitude.toFixed(3),
      lon: prefs.place.longitude.toFixed(3),
    });
    fetch(`/weather/api?${query}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error();
        const w: Weather = await response.json();
        if (!w.current || !w.hours?.length || !w.days?.length)
          throw new Error();
        return w;
      })
      .then((w) => {
        if (controller.signal.aborted) return;
        const next = { key, weather: w };
        setSnapshot(next);
        write(
          CACHE,
          [next, ...snapshots().filter((s) => s.key !== key)].slice(0, 5)
        );
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setError(
            saved
              ? 'Couldn’t refresh. Showing your saved forecast.'
              : 'The forecast couldn’t reach this page. Check your connection and try again.'
          );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [key, ready, refresh]);
  useEffect(() => {
    if (!ready) return;
    const controller = new AbortController();
    setAlerts(null);
    if (prefs.place.country && prefs.place.country !== 'US') {
      setAlerts({ key, status: 'unavailable', alerts: [] });
      return;
    }
    fetch(
      `/weather/alerts?lat=${prefs.place.latitude.toFixed(3)}&lon=${prefs.place.longitude.toFixed(3)}`,
      { signal: controller.signal }
    )
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((r) => {
        if (!controller.signal.aborted)
          setAlerts({
            key,
            status: r.status,
            alerts: Array.isArray(r.alerts) ? r.alerts : [],
          });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setAlerts({ key, status: 'unavailable', alerts: [] });
      });
    return () => controller.abort();
  }, [key, ready, refresh]);
  const locate = useCallback(() => {
    if (!navigator.geolocation) {
      setGeoStatus('Location isn’t available here. Search for a city instead.');
      return;
    }
    setLocating(true);
    setGeoStatus('Finding your little corner of the world…');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!mounted.current) return;
        setPrefs((p) => ({
          ...p,
          place: {
            name: 'Near you',
            latitude: Number(position.coords.latitude.toFixed(3)),
            longitude: Number(position.coords.longitude.toFixed(3)),
          },
        }));
        setGeoStatus('Using your current location.');
        setLocating(false);
      },
      (e) => {
        if (!mounted.current) return;
        setGeoStatus(
          e.code === 1
            ? 'Location permission is off. You can enable it in your browser, or search for a city.'
            : 'Couldn’t find your location. Try again or search for a city.'
        );
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 }
    );
  }, []);
  return {
    prefs,
    setPrefs,
    ready,
    weather,
    loading,
    error,
    offline,
    now,
    alerts:
      !offline && alerts?.key === key
        ? {
            ...alerts,
            alerts: alerts.alerts.filter(
              (a) => !a.expires || Date.parse(a.expires) > now * 1000
            ),
          }
        : null,
    locating,
    geoStatus,
    locate,
    refresh: () => setRefresh((v) => v + 1),
  };
}
