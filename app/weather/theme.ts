import type { Weather } from './model';

// This function also runs inline in the document head. Keep it self-contained
// so the saved appearance is available before CSS, hydration, or a forecast.
export function initialWeatherTheme(): 'light' | 'dark' {
  const now = Date.now();
  const hour = new Date(now).getHours();
  const fallback =
    matchMedia('(prefers-color-scheme: dark)').matches || hour < 6 || hour >= 18
      ? 'dark'
      : 'light';
  try {
    const prefs = JSON.parse(
      localStorage.getItem('weather-journal:preferences:v1') || '{}'
    );
    if (prefs.theme === 'light' || prefs.theme === 'dark') return prefs.theme;
    const place = prefs.place;
    const key =
      Number.isFinite(place?.latitude) && Number.isFinite(place?.longitude)
        ? `${place.latitude.toFixed(3)},${place.longitude.toFixed(3)}`
        : '47.606,-122.332';
    const snapshots = JSON.parse(
      localStorage.getItem('weather-journal:forecasts:v1') || '[]'
    );
    const weather: Weather | undefined = snapshots.find(
      (s: { key: string; weather: Weather }) =>
        s?.key === key && now - s.weather?.fetchedAt < 48 * 3600000
    )?.weather;
    if (!weather?.current || !Array.isArray(weather.days)) return fallback;
    const date = (time: number) =>
      new Intl.DateTimeFormat('en-CA', {
        timeZone: weather.timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(time * 1000);
    const time = now / 1000;
    const day = weather.days.find((d) => date(d.time) === date(time));
    const daylight =
      day &&
      Number.isFinite(day.sunrise) &&
      Number.isFinite(day.sunset) &&
      day.sunrise! > 0 &&
      day.sunset! > day.sunrise!
        ? time >= day.sunrise! && time < day.sunset!
        : (weather.hours?.find((h) => h.time <= time && h.time + 3600 > time)
            ?.day ?? weather.current.day);
    return daylight ? 'light' : 'dark';
  } catch {
    // Storage can be blocked, full, or contain an older malformed snapshot.
    return fallback;
  }
}

export const weatherThemeStyles = `
html { background: #2b3034; color-scheme: dark; }
html[data-weather-theme="light"] { background: #efe7d7; color-scheme: light; }
body { margin: 0; background: inherit; }
`;

export const weatherThemeScript = `
document.documentElement.dataset.weatherTheme = (${initialWeatherTheme.toString()})();
`;
