export type Place = {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  region?: string;
};
export type Units = 'us' | 'metric';
export type Hour = {
  time: number;
  temperature: number | null;
  feels: number | null;
  rain: number | null;
  precipitation: number | null;
  wind: number | null;
  code: number;
  day: boolean;
  humidity: number | null;
  uv: number | null;
  visibility: number | null;
  dew: number | null;
};
export type Day = {
  time: number;
  code: number;
  high: number | null;
  low: number | null;
  sunrise: number | null;
  sunset: number | null;
  rain: number | null;
  precipitation: number | null;
  uv: number | null;
  wind: number | null;
  daylight: number | null;
};
export type Weather = {
  timezone: string;
  fetchedAt: number;
  current: {
    time: number;
    temperature: number;
    feels: number | null;
    humidity: number | null;
    code: number;
    day: boolean;
    wind: number | null;
    direction: number | null;
    gust: number | null;
    pressure: number | null;
    cloud: number | null;
  };
  hours: Hour[];
  days: Day[];
  rain: { time: number; amount: number | null }[];
  air: {
    time: number;
    aqi: number | null;
    pm25: number | null;
    pm10: number | null;
    pollen: number | null;
  } | null;
};
export type Alert = {
  id: string;
  event: string;
  headline: string;
  severity: string;
  description: string;
  instruction: string;
  expires: string;
  url: string;
};
export const SEATTLE: Place = {
  name: 'Seattle',
  region: 'Washington',
  country: 'US',
  latitude: 47.6062,
  longitude: -122.3321,
};
export const placeKey = (p: Place) =>
  `${p.latitude.toFixed(3)},${p.longitude.toFixed(3)}`;
export const finite = (n: unknown): n is number =>
  typeof n === 'number' && Number.isFinite(n);
export function validPlace(p: unknown): p is Place {
  if (!p || typeof p !== 'object') return false;
  const x = p as Place;
  return (
    typeof x.name === 'string' &&
    x.name.length > 0 &&
    x.name.length <= 120 &&
    finite(x.latitude) &&
    Math.abs(x.latitude) <= 90 &&
    finite(x.longitude) &&
    Math.abs(x.longitude) <= 180
  );
}
export function condition(code: number) {
  if (code === 0) return { label: 'Clear skies', kind: 'sun' };
  if (code === 1) return { label: 'Mostly clear', kind: 'partly' };
  if (code === 2) return { label: 'Partly cloudy', kind: 'partly' };
  if (code === 3) return { label: 'Cloudy', kind: 'cloud' };
  if (code === 3) return { label: 'Cloudy', kind: 'cloud' };
  if ([45, 48].includes(code)) return { label: 'A little foggy', kind: 'fog' };
  if ([51, 53, 55].includes(code)) return { label: 'Drizzle', kind: 'rain' };
  if ([56, 57, 66, 67].includes(code))
    return { label: 'Freezing rain', kind: 'rain' };
  if ([61, 63, 65, 80, 81, 82].includes(code))
    return {
      label: code === 65 || code === 82 ? 'Heavy rain' : 'Rainy skies',
      kind: 'rain',
    };
  if ([71, 73, 75, 77, 85, 86].includes(code))
    return { label: 'Snowfall', kind: 'snow' };
  if ([95, 96, 99].includes(code))
    return { label: 'Thunderstorms', kind: 'storm' };
  return { label: 'Sky conditions unavailable', kind: 'cloud' };
}
export const temperature = (n: number | null | undefined, units: Units) =>
  finite(n) ? `${Math.round(units === 'us' ? (n * 9) / 5 + 32 : n)}°` : '—';
export const speed = (n: number | null | undefined, units: Units) =>
  finite(n)
    ? `${Math.round(units === 'us' ? n / 1.609344 : n)} ${units === 'us' ? 'mph' : 'km/h'}`
    : '—';
export const amount = (n: number | null | undefined, units: Units) =>
  finite(n)
    ? `${(units === 'us' ? n / 25.4 : n).toFixed(units === 'us' ? 2 : 1)} ${units === 'us' ? 'in' : 'mm'}`
    : '—';
export const percent = (n: number | null | undefined) =>
  finite(n) ? `${Math.round(n)}%` : '—';
export const clockTime = (time: number, zone: string, compact = false) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: zone,
    hour: 'numeric',
    ...(compact ? {} : { minute: '2-digit' }),
  }).format(new Date(time * 1000));
export const dateKey = (time: number, zone: string) =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: zone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(time * 1000));
export function dayName(time: number, zone: string, now: number) {
  return dateKey(time, zone) === dateKey(now, zone)
    ? 'Today'
    : new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        weekday: 'short',
      }).format(new Date(time * 1000));
}
export const compass = (degrees: number | null) =>
  finite(degrees)
    ? [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
      ][Math.round(degrees / 22.5) % 16]
    : '—';
export function aqiLabel(n: number | null | undefined) {
  if (!finite(n)) return 'Unavailable';
  return n <= 50
    ? 'Good'
    : n <= 100
      ? 'Moderate'
      : n <= 150
        ? 'Unhealthy for sensitive groups'
        : n <= 200
          ? 'Unhealthy'
          : n <= 300
            ? 'Very unhealthy'
            : 'Hazardous';
}
export const uvLabel = (n: number | null) =>
  !finite(n)
    ? 'Unavailable'
    : n < 3
      ? 'Low'
      : n < 6
        ? 'Moderate'
        : n < 8
          ? 'High'
          : n < 11
            ? 'Very high'
            : 'Extreme';
export { moonPhase } from './moon';
export function isDayAt(w: Weather, now: number) {
  const d = w.days.find(
    (d) => dateKey(d.time, w.timezone) === dateKey(now, w.timezone)
  );
  if (
    d &&
    finite(d.sunrise) &&
    finite(d.sunset) &&
    d.sunrise > 0 &&
    d.sunset > d.sunrise
  )
    return now >= d.sunrise && now < d.sunset;
  return (
    w.hours.find((h) => h.time <= now && h.time + 3600 > now)?.day ??
    w.current.day
  );
}
export function outingWindow(hours: Hour[], now: number) {
  const next = hours.filter((h) => h.time >= now && h.time < now + 24 * 3600);
  const pairs = next
    .slice(0, -1)
    .map((h, i) => [h, next[i + 1]])
    .filter(
      (pair) =>
        pair[1].time - pair[0].time === 3600 &&
        pair.every(
          (h) =>
            h.day &&
            finite(h.rain) &&
            h.rain < 35 &&
            finite(h.wind) &&
            h.wind < 25 &&
            finite(h.temperature) &&
            !['storm', 'snow'].includes(condition(h.code).kind)
        )
    );
  return (
    pairs.sort(
      (a, b) =>
        a.reduce(
          (s, h) => s + Math.abs(h.temperature! - 20) + h.rain! / 10,
          0
        ) -
        b.reduce((s, h) => s + Math.abs(h.temperature! - 20) + h.rain! / 10, 0)
    )[0] ?? null
  );
}
