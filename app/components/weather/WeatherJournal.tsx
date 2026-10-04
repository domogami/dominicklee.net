import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { InkSwitch, TouchFeedbackSetting } from '~/components/TouchFeedback';
import SketchArrow from '~/components/notebook/SketchArrow';
import {
  AppPanel,
  AppTabs,
  SettingsGlyph,
  SketchHome,
} from '~/components/notebook/PocketChrome';
import MoonDrawing from './MoonDrawing';
import {
  DailyForecastGraph,
  ForecastStrip,
  HourlyForecast,
  type ForecastSelection,
} from './Forecast';
import WeatherArt, { WeatherIcon } from './WeatherArt';
import { useWeather } from '~/weather/useWeather';
import {
  SEATTLE,
  amount,
  aqiLabel,
  clockTime,
  compass,
  condition,
  dateKey,
  dayName,
  finite,
  isDayAt,
  moonPhase,
  outingWindow,
  percent,
  placeKey,
  speed,
  temperature,
  uvLabel,
  validPlace,
  type Place,
  type Units,
  type Weather,
} from '~/weather/model';

function Sheet({
  title,
  children,
  close,
}: {
  title: string;
  children: ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const opener = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    return () => {
      dialog?.close();
      opener?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      className='weather-sheet'
      ref={ref}
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      aria-labelledby='sheet-title'
    >
      <div className='sheet-heading'>
        <h2 id='sheet-title'>{title}</h2>
        <button
          className='icon-button'
          onClick={close}
          aria-label='Close dialog'
        >
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}
function WeatherMark({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    wind: 'M3 8h13c6 0 5-7 1-5M2 13h20c6 0 5 8 0 6M6 18h7',
    rain: 'M12 2C10 7 4 11 4 16a8 8 0 0 0 16 0c0-5-6-9-8-14ZM8 16q0 4 4 4',
    drop: 'M12 2C10 7 4 11 4 16a8 8 0 0 0 16 0c0-5-6-9-8-14ZM8 16q0 4 4 4',
    air: 'M3 10q4-6 9 0t11-1M2 17q5-6 10 0t11-1',
    sun: 'M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2',
    pressure: 'M4 19a10 10 0 1 1 16 0M12 15l5-7M8 19h8M4 12h2m6-8v2m6 6h2',
    eye: 'M1 12Q12-2 23 12 12 26 1 12ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  };
  return (
    <svg
      className='weather-annotation-icon'
      viewBox='0 0 26 26'
      aria-hidden='true'
    >
      <path d={paths[kind] ?? paths.wind} />
    </svg>
  );
}

function PlaceSearch({
  choose,
  favorites,
  locate,
  locating,
}: {
  choose: (p: Place) => void;
  favorites: Place[];
  locate: () => void;
  locating: boolean;
}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Place[]>([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    setResults([]);
    if (query.trim().length < 2) {
      setStatus('');
      return;
    }
    setStatus('Looking through the atlas…');
    const timer = setTimeout(() => {
      fetch(`/weather/search?q=${encodeURIComponent(query.trim())}`, {
        signal: controller.signal,
      })
        .then((r) => {
          if (!r.ok) throw new Error();
          return r.json();
        })
        .then((r) => {
          if (controller.signal.aborted) return;
          const found = (r.results ?? []).filter(validPlace);
          setResults(found);
          setStatus(
            found.length
              ? ''
              : 'No places found. Try a nearby city or postal code.'
          );
        })
        .catch(() => {
          if (!controller.signal.aborted)
            setStatus('Search is resting. Try again in a moment.');
        });
    }, 350);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);
  return (
    <div className='place-search'>
      <label htmlFor='place-query'>City or postal code</label>
      <input
        id='place-query'
        type='search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Somewhere in the world…'
        autoComplete='off'
        autoFocus
        maxLength={80}
      />
      <p role='status' className='muted'>
        {status}
      </p>
      <ul className='place-results'>
        {results.map((p) => (
          <li key={placeKey(p)}>
            <button onClick={() => choose(p)}>
              <strong>{p.name}</strong>
              <span>{[p.region, p.country].filter(Boolean).join(', ')}</span>
              <SketchArrow />
            </button>
          </li>
        ))}
      </ul>
      <button
        className='paper-button location-action'
        onClick={locate}
        disabled={locating}
        aria-label={locating ? 'Finding your location' : 'Use my location'}
      >
        ◎ {locating ? 'Finding you…' : 'Use my location'}
      </button>
      <p className='fine-print'>
        Only when you ask. Your approximate coordinates are sent to the weather
        providers to find your forecast.
      </p>
      {!!favorites.length && (
        <>
          <h3>Bookmarked places</h3>
          <div className='saved-places'>
            {favorites.map((p) => (
              <button
                className='paper-button'
                key={placeKey(p)}
                onClick={() => choose(p)}
              >
                {p.name} <SketchArrow />
              </button>
            ))}
          </div>
        </>
      )}
      <p className='fine-print'>
        Or start with{' '}
        <button className='text-button' onClick={() => choose(SEATTLE)}>
          Seattle
        </button>
        .
      </p>
    </div>
  );
}
function Week({
  weather: w,
  units,
  now,
  selected,
  onSelect,
  onPreview,
}: {
  weather: Weather;
  units: Units;
  now: number;
  selected: ForecastSelection | null;
  onSelect: (selection: ForecastSelection) => void;
  onPreview: () => void;
}) {
  const [all, setAll] = useState(false);
  const days = w.days.filter(
    (d) => dateKey(d.time, w.timezone) >= dateKey(now, w.timezone)
  );
  const low = Math.min(...days.map((d) => d.low).filter(finite)),
    high = Math.max(...days.map((d) => d.high).filter(finite));
  return (
    <section
      className='weather-section week-section'
      id='week'
      aria-labelledby='week-title'
    >
      <div className='section-heading'>
        <div>
          <h2 id='week-title'>The week ahead</h2>
        </div>
      </div>
      <DailyForecastGraph
        weather={w}
        units={units}
        now={now}
        selected={selected}
        onSelect={onSelect}
        onPreview={onPreview}
      />
      <div className='day-list'>
        {days.slice(0, all ? 10 : 7).map((d) => (
          <details
            key={d.time}
            className='forecast-day'
            data-selected={
              selected?.kind === 'day' && selected.day.time === d.time
            }
          >
            <summary onClick={() => onSelect({ kind: 'day', day: d })}>
              <strong>{dayName(d.time, w.timezone, now)}</strong>
              <WeatherIcon code={d.code} />
              <span className='day-rain'>{percent(d.rain)}</span>
              <span className='temp-low'>{temperature(d.low, units)}</span>
              <span className='range-track' aria-hidden='true'>
                {finite(d.low) && finite(d.high) && (
                  <span
                    style={{
                      left: `${((d.low - low) / Math.max(1, high - low)) * 80}%`,
                      width: `${Math.max(12, ((d.high - d.low) / Math.max(1, high - low)) * 80)}%`,
                    }}
                  />
                )}
              </span>
              <span>{temperature(d.high, units)}</span>
              <span className='expand-mark' aria-hidden='true'>
                +
              </span>
            </summary>
            <div className='day-detail'>
              <p className='hand'>{condition(d.code).label}</p>
              <dl>
                <div>
                  <dt>Rain / snow water</dt>
                  <dd>{amount(d.precipitation, units)}</dd>
                </div>
                <div>
                  <dt>Peak wind</dt>
                  <dd>{speed(d.wind, units)}</dd>
                </div>
                <div>
                  <dt>UV maximum</dt>
                  <dd>
                    {finite(d.uv) ? d.uv.toFixed(1) : '—'} · {uvLabel(d.uv)}
                  </dd>
                </div>
                <div>
                  <dt>Sunrise / sunset</dt>
                  <dd>
                    {d.sunrise ? clockTime(d.sunrise, w.timezone) : '—'} /{' '}
                    {d.sunset ? clockTime(d.sunset, w.timezone) : '—'}
                  </dd>
                </div>
              </dl>
              <button
                className='forecast-preview'
                onClick={() => {
                  onSelect({ kind: 'day', day: d });
                  onPreview();
                }}
              >
                See this day <SketchArrow />
              </button>
            </div>
          </details>
        ))}
      </div>
      {days.length > 7 && (
        <button
          className='text-button more-days'
          onClick={() => setAll((v) => !v)}
        >
          {all ? 'Fold back to 7 days −' : 'Unfold the next 3 days +'}
        </button>
      )}
    </section>
  );
}
function Rain({
  weather: w,
  units,
  now,
}: {
  weather: Weather;
  units: Units;
  now: number;
}) {
  const slots = w.rain.filter(
    (r) => r.time >= now - 900 && r.time < now + 7200
  );
  const known = slots.filter((r) => finite(r.amount));
  const max = Math.max(0.5, ...known.map((r) => r.amount!));
  const wet = known.filter((r) => r.amount! >= 0.1);
  const first = wet[0];
  const full = known.length >= 8;
  const title = !known.length
    ? 'Rain timing is unavailable'
    : !wet.length
      ? full
        ? 'A little dry spell'
        : 'Looking dry, for now'
      : first.time <= now + 900
        ? 'Keep an umbrella close'
        : `Rain around ${clockTime(first.time, w.timezone)}`;
  return (
    <section className='rain-note paper-card' aria-labelledby='rain-title'>
      <span className='eyebrow'>The next two hours</span>
      <h2 id='rain-title'>{title}</h2>
      <div
        className='rain-bars'
        role='img'
        aria-label={
          known.length
            ? slots
                .map(
                  (r) =>
                    `${clockTime(r.time, w.timezone)}: ${amount(r.amount, units)}`
                )
                .join('; ')
            : 'Rain forecast unavailable'
        }
      >
        {slots.map((r) => (
          <div key={r.time}>
            <span
              style={{
                height: finite(r.amount)
                  ? `${Math.max(4, (r.amount / max) * 66)}px`
                  : '0px',
              }}
            />
            <small>{clockTime(r.time, w.timezone)}</small>
          </div>
        ))}
      </div>
      <p className='fine-print'>
        {known.length
          ? `${amount(
              known.reduce((s, r) => s + r.amount!, 0),
              units
            )} forecast in this window. `
          : ''}
        15-minute model estimates, not live radar. Timing can shift; some
        regions interpolate hourly forecasts.
      </p>
    </section>
  );
}
function Almanac({
  weather: w,
  now,
  latitude,
}: {
  weather: Weather;
  now: number;
  latitude: number;
}) {
  const today = w.days.find(
    (d) => dateKey(d.time, w.timezone) === dateKey(now, w.timezone)
  );
  const validSun =
    today?.sunrise && today?.sunset && today.sunset > today.sunrise;
  const progress = validSun
    ? Math.max(
        0,
        Math.min(1, (now - today.sunrise!) / (today.sunset! - today.sunrise!))
      )
    : 0;
  const moon = moonPhase(now);
  return (
    <section className='sun-note paper-card' aria-labelledby='sun-title'>
      <span className='eyebrow'>The daily almanac</span>
      <h2 id='sun-title'>Chasing the light</h2>
      <svg
        viewBox='0 0 320 130'
        className='sun-arc'
        role='img'
        aria-label={
          validSun
            ? `${Math.round(progress * 100)} percent through daylight`
            : 'Sunrise and sunset unavailable'
        }
      >
        <path
          d='M25 108Q160-70 295 108'
          fill='none'
          stroke='var(--rule)'
          strokeWidth='2'
          strokeDasharray='4 6'
        />
        <path d='M15 108H305' stroke='var(--rule)' />
        {validSun && (
          <circle
            cx={25 + 270 * progress}
            cy={108 - 356 * progress * (1 - progress)}
            r='12'
            fill='var(--sun)'
            stroke='var(--sun-ink)'
            strokeWidth='2'
          />
        )}
      </svg>
      <div className='sun-times'>
        <span>
          <small>Sunrise</small>
          {today?.sunrise ? clockTime(today.sunrise, w.timezone) : '—'}
        </span>
        <span>
          <small>Daylight</small>
          {finite(today?.daylight)
            ? `${Math.floor(today.daylight / 3600)}h ${Math.round((today.daylight % 3600) / 60)}m`
            : '—'}
        </span>
        <span>
          <small>Sunset</small>
          {today?.sunset ? clockTime(today.sunset, w.timezone) : '—'}
        </span>
      </div>
      <p className='moon-note'>
        <svg className='almanac-moon' viewBox='0 0 200 200' aria-hidden='true'>
          <MoonDrawing phase={moon} south={latitude < 0} simple />
        </svg>{' '}
        {moon.name} <small>~{moon.light}% illuminated</small>
      </p>
    </section>
  );
}
function Details({
  weather: w,
  units,
  now,
}: {
  weather: Weather;
  units: Units;
  now: number;
}) {
  const h = w.hours.find((h) => h.time <= now && h.time + 3600 > now);
  const uv = h?.uv ?? null;
  const metrics = [
    {
      title: 'Wind',
      value: speed(w.current.wind, units),
      note: `From ${compass(w.current.direction)} · gusts ${speed(w.current.gust, units)}`,
      icon: 'wind',
      detail:
        'Wind is measured 10 meters above ground. Buildings, trees, and hills can make your corner feel different.',
    },
    {
      title: 'Air quality',
      value: finite(w.air?.aqi) ? String(Math.round(w.air.aqi)) : '—',
      note: aqiLabel(w.air?.aqi),
      icon: 'air',
      detail: w.air
        ? `US AQI scale. PM2.5: ${w.air.pm25 ?? '—'} µg/m³ · PM10: ${w.air.pm10 ?? '—'} µg/m³. Modeled by CAMS, updated ${clockTime(w.air.time, w.timezone)}. ${finite(w.air.pollen) ? `Grass pollen: ${Math.round(w.air.pollen)} grains/m³.` : 'Pollen estimates are available in parts of Europe during the season.'}`
        : 'Air-quality data is temporarily unavailable. Your weather forecast is still available.',
    },
    {
      title: 'UV index',
      value: finite(uv) ? uv.toFixed(1) : '—',
      note: uvLabel(uv),
      icon: 'sun',
      detail:
        'The UV index estimates the strength of sunburn-producing radiation. It can be high even when it feels cool.',
    },
    {
      title: 'Humidity',
      value: percent(w.current.humidity),
      note: `Dew point ${temperature(h?.dew, units)}`,
      icon: 'drop',
      detail:
        'Relative humidity describes how close the air is to saturation. A higher dew point generally feels more muggy.',
    },
    {
      title: 'Pressure',
      value: finite(w.current.pressure)
        ? String(Math.round(w.current.pressure))
        : '—',
      note: 'hPa · at sea level',
      icon: 'pressure',
      detail:
        'Sea-level pressure lets you compare places at different elevations. A single pressure reading does not predict the weather on its own.',
    },
    {
      title: 'Visibility',
      value: finite(h?.visibility)
        ? `${(h.visibility / (units === 'us' ? 1609.344 : 1000)).toFixed(1)}`
        : '—',
      note: `${units === 'us' ? 'miles' : 'kilometers'} · cloud cover ${percent(w.current.cloud)}`,
      icon: 'eye',
      detail:
        'A modeled estimate of how far you can see horizontally. Local fog, smoke, or precipitation can reduce actual visibility.',
    },
  ];
  return (
    <section
      className='weather-section details-section'
      id='details'
      aria-labelledby='details-title'
    >
      <div className='section-heading'>
        <div>
          <h2 id='details-title'>Details</h2>
        </div>
      </div>
      <div className='metric-grid'>
        {metrics.map((m) => (
          <details className='metric' key={m.title}>
            <summary>
              <span className='metric-label'>
                <span className='metric-title'>
                  <WeatherMark kind={m.icon} />
                  {m.title}
                </span>
                <span aria-hidden='true'>+</span>
              </span>
              <strong>{m.value}</strong>
              <span className='metric-note'>{m.note}</span>
            </summary>
            <p>{m.detail}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

type WeatherTab = 'now' | 'hours' | 'week' | 'details';
const weatherTabs: { id: WeatherTab; label: string }[] = [
  { id: 'now', label: 'Now' },
  { id: 'hours', label: 'Hours' },
  { id: 'week', label: 'Week' },
  { id: 'details', label: 'Details' },
];

export default function WeatherJournal() {
  const state = useWeather();
  const {
    prefs,
    setPrefs,
    weather: w,
    now,
    loading,
    error,
    offline,
    alerts,
    locating,
    geoStatus,
    locate,
  } = state;
  const [sheet, setSheet] = useState<
    'places' | 'settings' | 'alerts' | 'rain' | null
  >(null);
  const [tab, setTab] = useState<WeatherTab>('now');
  const [requested, setSelected] = useState<ForecastSelection | null>(null);
  const selected = useMemo<ForecastSelection | null>(() => {
    if (!requested || !w) return null;
    if (requested.kind === 'hour') {
      const hour = w.hours.find((h) => h.time === requested.hour.time);
      return hour ? { kind: 'hour', hour } : null;
    }
    const day = w.days.find((d) => d.time === requested.day.time);
    return day ? { kind: 'day', day } : null;
  }, [requested, w]);
  const [play, setPlay] = useState(0);
  const [systemReduced, setSystemReduced] = useState(false);
  const key = placeKey(prefs.place);
  useEffect(() => {
    setSelected(null);
  }, [key]);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSystemReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const naturalDay = w ? isDayAt(w, now) : true;
  const dark = prefs.theme === 'auto' ? !naturalDay : prefs.theme === 'dark';
  const motion = prefs.motion && !systemReduced;
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    const original = meta?.getAttribute('content');
    meta?.setAttribute('content', dark ? '#2b3034' : '#efe7d7');
    return () => {
      if (original) meta?.setAttribute('content', original);
    };
  }, [dark]);
  const choose = (place: Place) => {
    setPrefs((p) => ({ ...p, place }));
    setSheet(null);
    setTab('now');
  };
  const saved = prefs.favorites.some((p) => placeKey(p) === key);
  const bookmark = () =>
    setPrefs((p) => ({
      ...p,
      favorites: saved
        ? p.favorites.filter((f) => placeKey(f) !== key)
        : [...p.favorites.slice(-5), p.place],
    }));
  const selectedHour = selected?.kind === 'hour' ? selected.hour : null;
  const selectedDay = selected?.kind === 'day' ? selected.day : null;
  // Daily conditions summarize a whole day, illustrated in daylight. Only an
  // hourly preview supplies a specific temperature, feels-like, and moon phase.
  const previewTime =
    selectedHour?.time ?? (selectedDay ? selectedDay.time + 12 * 3600 : now);
  const sky = selectedHour ?? w?.current;
  const skyDay = selectedDay
    ? true
    : selectedHour
      ? selectedHour.day
      : naturalDay;
  const lunar = moonPhase(previewTime);
  const today =
    selectedDay ??
    w?.days.find(
      (d) => dateKey(d.time, w.timezone) === dateKey(previewTime, w.timezone)
    );
  const c = condition(selectedDay?.code ?? sky?.code ?? 0);
  const stale = !!w && now * 1000 - w.fetchedAt > 30 * 60000;
  const outside = w && outingWindow(w.hours, now);
  const nextSun = w?.days
    .flatMap((d) => [
      { time: d.sunrise, label: 'Sunrise' },
      { time: d.sunset, label: 'Sunset' },
    ])
    .filter((event) => event.time && event.time > previewTime)
    .sort((a, b) => a.time! - b.time!)[0];
  return (
    <main
      className='weather-journal pocket-app'
      data-theme={dark ? 'dark' : 'light'}
      data-motion={motion ? 'on' : 'off'}
    >
      <h1 className='pocket-sr'>Weather</h1>
      <div className='pocket-frame'>
        <header className='pocket-header'>
          <SketchHome />
          <button
            className='weather-place'
            onClick={() => setSheet('places')}
            aria-label={`Change place, ${prefs.place.name}`}
          >
            <svg
              className='place-pointer'
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path d='m3 9 14-6-6 14-2-6Z' />
            </svg>
            <span>{prefs.place.name}</span>
            <SketchArrow direction='chevron' className='place-chevron' />
          </button>
          <div className='weather-header-tools'>
            <button
              className='weather-unit'
              aria-label={`Switch to ${prefs.units === 'us' ? 'Celsius' : 'Fahrenheit'}`}
              onClick={() =>
                setPrefs((p) => ({
                  ...p,
                  units: p.units === 'us' ? 'metric' : 'us',
                }))
              }
            >
              {prefs.units === 'us' ? '°F' : '°C'}
            </button>
            <button
              className='pocket-settings'
              aria-label='Weather settings'
              onClick={() => setSheet('settings')}
            >
              <SettingsGlyph />
            </button>
          </div>
        </header>
        {!!alerts?.alerts.length && (
          <button
            className='weather-alert-strip'
            onClick={() => setSheet('alerts')}
          >
            <span aria-hidden='true'>!</span>
            <span>{alerts.alerts[0].event}</span>
            <small>
              {alerts.alerts.length > 1 ? (
                `+${alerts.alerts.length - 1}`
              ) : (
                <SketchArrow />
              )}
            </small>
          </button>
        )}
        {(error || offline || stale) && (
          <div className='weather-connection' role='status'>
            <span>
              {offline
                ? w
                  ? 'Offline · saved forecast'
                  : 'Offline · connect to load a forecast'
                : error || 'Forecast over 30 minutes old'}
            </span>
            <button
              className='text-button'
              onClick={state.refresh}
              disabled={loading}
            >
              {loading ? 'Updating…' : 'Retry'}
            </button>
          </div>
        )}
        <div className='pocket-body'>
          <AppPanel
            prefix='weather'
            id='now'
            active={tab}
            className='weather-now-panel'
          >
            {w && sky ? (
              <section
                className='weather-now'
                aria-label={selected ? 'Forecast preview' : 'Current weather'}
              >
                <div className='weather-peek'>
                  {selected && (
                    <button
                      onClick={() => setSelected(null)}
                      className='text-button'
                      aria-label='Back to now'
                    >
                      {dayName(previewTime, w.timezone, now)}{' '}
                      {selectedDay
                        ? '· day forecast'
                        : clockTime(previewTime, w.timezone)}{' '}
                      · Back to now <SketchArrow direction='undo' />
                    </button>
                  )}
                </div>
                <div className='weather-art-space'>
                  {tab === 'now' && (
                    <WeatherArt
                      code={selectedDay?.code ?? sky.code}
                      time={previewTime}
                      latitude={prefs.place.latitude}
                      day={skyDay}
                      playing={play}
                      onPlay={() => setPlay((v) => v + 1)}
                    />
                  )}
                </div>
                <div className='weather-reading'>
                  <h2
                    className='current-temperature'
                    aria-label={
                      selectedDay
                        ? `Daily forecast high ${temperature(selectedDay.high, prefs.units)}, low ${temperature(selectedDay.low, prefs.units)}`
                        : `${selected ? 'Forecast' : 'Current'} temperature ${temperature(sky.temperature, prefs.units)}`
                    }
                  >
                    {selectedDay && (
                      <span className='forecast-high-label'>high </span>
                    )}
                    {temperature(
                      selectedDay ? selectedDay.high : sky.temperature,
                      prefs.units
                    )}
                  </h2>
                  <p className='current-condition'>{c.label}</p>
                  <p className='feels-like'>
                    {!selectedDay && (
                      <>
                        Feels {temperature(sky.feels, prefs.units)}{' '}
                        <span aria-hidden='true'>·</span>{' '}
                      </>
                    )}
                    H {temperature(today?.high, prefs.units)} / L{' '}
                    {temperature(today?.low, prefs.units)}
                  </p>
                </div>
                <div className='weather-quick-look'>
                  <button
                    onClick={() => setTab(selectedDay ? 'week' : 'hours')}
                    aria-label='See rain forecast'
                  >
                    <WeatherMark kind='rain' />
                    <span>
                      {percent(
                        selectedDay
                          ? selectedDay.rain
                          : selectedHour
                            ? selectedHour.rain
                            : w.hours.find(
                                (h) => h.time <= now && h.time + 3600 > now
                              )?.rain
                      )}
                    </span>
                  </button>
                  <span
                    className='weather-sun-note'
                    title={!skyDay ? `${lunar.light}% illuminated` : undefined}
                  >
                    {!skyDay
                      ? lunar.name
                      : nextSun && (
                          <>
                            {nextSun.label}{' '}
                            {clockTime(nextSun.time!, w.timezone)}
                          </>
                        )}
                  </span>
                  <button
                    onClick={() => setTab(selectedDay ? 'week' : 'details')}
                    aria-label='See wind details'
                  >
                    <WeatherMark kind='wind' />
                    <span>
                      {speed(
                        selectedDay ? selectedDay.wind : sky.wind,
                        prefs.units
                      )}
                    </span>
                  </button>
                </div>
                <ForecastStrip
                  weather={w}
                  units={prefs.units}
                  now={now}
                  latitude={prefs.place.latitude}
                  selected={selected}
                  onSelect={setSelected}
                />
              </section>
            ) : (
              <section className='weather-empty' aria-busy={loading}>
                <WeatherIcon code={2} />
                <h2>{loading ? 'Loading the sky…' : 'No forecast yet'}</h2>
                <p>
                  {loading
                    ? `Finding weather for ${prefs.place.name}.`
                    : 'Refresh or choose another place.'}
                </p>
                {!loading && (
                  <button className='paper-button' onClick={state.refresh}>
                    Try again <SketchArrow direction='refresh' />
                  </button>
                )}
              </section>
            )}
          </AppPanel>
          <AppPanel prefix='weather' id='hours' active={tab}>
            {w ? (
              <>
                <HourlyForecast
                  weather={w}
                  units={prefs.units}
                  now={now}
                  latitude={prefs.place.latitude}
                  selected={selected}
                  onSelect={setSelected}
                  onPreview={() => setTab('now')}
                  onRain={() => setSheet('rain')}
                />
              </>
            ) : (
              <p>Load a forecast to see the hours ahead.</p>
            )}
          </AppPanel>
          <AppPanel prefix='weather' id='week' active={tab}>
            {w ? (
              <Week
                weather={w}
                units={prefs.units}
                now={now}
                selected={selected}
                onSelect={setSelected}
                onPreview={() => setTab('now')}
              />
            ) : (
              <p>Load a forecast to see the week ahead.</p>
            )}
          </AppPanel>
          <AppPanel prefix='weather' id='details' active={tab}>
            {w && (
              <>
                <Details weather={w} units={prefs.units} now={now} />
                <Almanac
                  weather={w}
                  now={now}
                  latitude={prefs.place.latitude}
                />
                <section className='outing-note paper-card'>
                  <h2>A little time outside</h2>
                  <p className='outing-window'>
                    {outside
                      ? `${dayName(outside[0].time, w.timezone, now)} · ${clockTime(outside[0].time, w.timezone)} – ${clockTime(outside[1].time + 3600, w.timezone)}`
                      : 'No clear two-hour window in the next day.'}
                  </p>
                  <p className='fine-print'>
                    Daylight, lighter wind, and a lower chance of rain. A
                    forecast suggestion, not a guarantee.
                  </p>
                </section>
                <div className='forecast-status'>
                  <span>
                    {loading
                      ? 'Updating…'
                      : `Forecast fetched ${new Intl.DateTimeFormat('en-US', { timeZone: w.timezone, month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(w.fetchedAt)}`}
                  </span>
                  <button
                    className='text-button'
                    onClick={state.refresh}
                    disabled={loading}
                  >
                    Refresh
                  </button>
                </div>
              </>
            )}
            <details className='journal-colophon'>
              <summary>
                Sources & privacy <span aria-hidden='true'>+</span>
              </summary>
              <div>
                <p>
                  Made by Dom, for the everyday. Weather comes from{' '}
                  <a
                    href='https://open-meteo.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Open-Meteo
                  </a>
                  , which selects regional forecast models automatically.
                  Current conditions are model estimates, not a live sensor at
                  your address. No single forecast wins everywhere.
                </p>
                <p>
                  Air quality:{' '}
                  <a
                    href='https://open-meteo.com/en/docs/air-quality-api'
                    target='_blank'
                    rel='noreferrer'
                  >
                    CAMS via Open-Meteo
                  </a>
                  . Place names:{' '}
                  <a
                    href='https://www.geonames.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GeoNames
                  </a>
                  . Data under{' '}
                  <a
                    href='https://creativecommons.org/licenses/by/4.0/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    CC BY 4.0
                  </a>
                  ; values are rounded and illustrated here. Moon phase and
                  illumination are calculated locally with{' '}
                  <a
                    href='https://github.com/cosinekitty/astronomy'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Astronomy Engine
                  </a>
                  .
                </p>
                <p>
                  U.S. alerts:{' '}
                  <a
                    href='https://www.weather.gov/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    National Weather Service
                  </a>
                  .{' '}
                  {alerts?.status === 'ok'
                    ? alerts.alerts.length
                      ? 'Active alerts are available from the warning at the top.'
                      : 'No active alerts were returned at the last check.'
                    : 'Alert coverage is unavailable for this place or the service couldn’t be reached.'}{' '}
                  Alerts refresh while this page is open; this app does not send
                  emergency notifications.
                </p>
                <p>
                  Places, preferences, and up to five forecasts are saved only
                  in this browser. Location access is optional. The forecast
                  request sends rounded coordinates through this site to the
                  providers. Offline pages always show when the forecast was
                  fetched.
                </p>
              </div>
            </details>
          </AppPanel>
        </div>
        <AppTabs<WeatherTab>
          tabs={weatherTabs}
          active={tab}
          select={setTab}
          label='Weather navigation'
          prefix='weather'
        />
        <noscript>
          <p>
            Enable JavaScript for forecasts, or visit{' '}
            <a href='https://www.weather.gov/'>weather.gov</a>.
          </p>
        </noscript>
      </div>
      {sheet === 'places' && (
        <Sheet title='Places' close={() => setSheet(null)}>
          <div className='weather-save-place'>
            <span>{prefs.place.name}</span>
            <button
              className='text-button'
              onClick={bookmark}
              aria-label={saved ? 'Remove saved place' : 'Save this place'}
              aria-pressed={saved}
            >
              {saved ? '★ Saved' : '☆ Save place'}
            </button>
          </div>
          <PlaceSearch
            choose={choose}
            favorites={prefs.favorites}
            locate={locate}
            locating={locating}
          />
          {geoStatus && (
            <p className='status-note' role='status'>
              {geoStatus}
            </p>
          )}
        </Sheet>
      )}
      {sheet === 'alerts' && (
        <Sheet title='Weather alerts' close={() => setSheet(null)}>
          <section
            className='weather-alerts'
            aria-label='Official weather alerts'
          >
            {alerts?.alerts.map((a) => (
              <article key={a.id}>
                <h3>{a.event}</h3>
                <p>
                  <strong>{a.headline}</strong>
                </p>
                <p>{a.description}</p>
                {a.instruction && <p>{a.instruction}</p>}
                <a href={a.url} target='_blank' rel='noreferrer'>
                  National Weather Service <SketchArrow />
                </a>
              </article>
            ))}
          </section>
        </Sheet>
      )}
      {sheet === 'rain' && w && (
        <Sheet title='Rain in the next two hours' close={() => setSheet(null)}>
          <Rain weather={w} units={prefs.units} now={now} />
        </Sheet>
      )}
      {sheet === 'settings' && (
        <Sheet title='Make yourself at home' close={() => setSheet(null)}>
          <div className='settings-content'>
            <fieldset>
              <legend>Temperature & measurements</legend>
              <div className='segmented'>
                {(['us', 'metric'] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => setPrefs((p) => ({ ...p, units: u }))}
                    aria-pressed={prefs.units === u}
                  >
                    {u === 'us' ? '°F · mph · inches' : '°C · km/h · mm'}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Paper & light</legend>
              <div className='segmented'>
                {(['auto', 'light', 'dark'] as const).map((t) => (
                  <button
                    key={t}
                    aria-pressed={prefs.theme === t}
                    onClick={() => setPrefs((p) => ({ ...p, theme: t }))}
                  >
                    {t === 'auto'
                      ? 'Follow the sun'
                      : t === 'light'
                        ? 'Day'
                        : 'Night'}
                  </button>
                ))}
              </div>
              <p className='fine-print'>
                Automatic mode follows sunrise and sunset at your selected
                place.
              </p>
            </fieldset>
            <label className='motion-setting'>
              <span>
                Let the drawings move
                <small>
                  {systemReduced
                    ? 'Your device’s reduced-motion setting is respected.'
                    : 'Skies draw themselves, one pencil stroke at a time.'}
                </small>
              </span>
              <InkSwitch
                checked={prefs.motion}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, motion: e.target.checked }))
                }
              />
            </label>
            <TouchFeedbackSetting />
            <section className='install-note'>
              <h3>A little sky on your Home Screen</h3>
              <p>
                On iPhone or iPad, open this page in Safari. Tap{' '}
                <strong>Share</strong>, then <strong>Add to Home Screen</strong>
                , and choose <strong>Open as Web App</strong> if offered.
              </p>
              <p>
                On desktop, use your browser’s install option when available, or
                bookmark this page. Once opened online, this journal can keep
                your last forecast for offline reading.
              </p>
            </section>
            {prefs.favorites.length > 0 && (
              <>
                <h3>Your bookmarks</h3>
                <ul className='bookmark-list'>
                  {prefs.favorites.map((p) => (
                    <li key={placeKey(p)}>
                      {p.name}
                      <button
                        className='text-button'
                        onClick={() =>
                          setPrefs((s) => ({
                            ...s,
                            favorites: s.favorites.filter(
                              (f) => placeKey(f) !== placeKey(p)
                            ),
                          }))
                        }
                        aria-label={`Remove ${p.name}`}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className='pocket-links'>
              <a href='/'>Back to the notebook</a>
              <a href='/calculator/'>Calculator</a>
            </div>
          </div>
        </Sheet>
      )}
    </main>
  );
}
