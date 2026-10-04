import { finite, type Weather, type Place } from './model';

// Bounded, short-lived request coalescing. CDN caching also covers separate instances.
const cache = new Map<string, { expires: number; value: Promise<unknown> }>();
export function cached<T>(
  key: string,
  ttl: number,
  fn: () => Promise<T>
): Promise<T> {
  const found = cache.get(key);
  if (found && found.expires > Date.now()) return found.value as Promise<T>;
  if (cache.size >= 100) cache.delete(cache.keys().next().value!);
  const value = fn().catch((error) => {
    if (cache.get(key)?.value === value) cache.delete(key);
    throw error;
  });
  cache.set(key, { expires: Date.now() + ttl, value });
  return value;
}
export async function fetchJSON(url: string, timeout = 12000) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'DomWeatherJournal/1.0 (https://dominicklee.net)',
      Accept: 'application/json',
    },
    signal: AbortSignal.timeout(timeout),
  });
  if (!response.ok)
    throw new Error(`Weather provider returned ${response.status}`);
  return response.json();
}
export function coordinates(request: Request) {
  const q = new URL(request.url).searchParams;
  const lat = q.get('lat'),
    lon = q.get('lon');
  const latitude = Number(lat),
    longitude = Number(lon);
  if (
    lat === null ||
    lon === null ||
    lat.trim() === '' ||
    lon.trim() === '' ||
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude) ||
    Math.abs(latitude) > 90 ||
    Math.abs(longitude) > 180
  )
    throw new Response('Invalid coordinates', { status: 400 });
  return {
    latitude: Number(latitude.toFixed(3)),
    longitude: Number(longitude.toFixed(3)),
  };
}
const val = (n: unknown) => (finite(n) ? n : null);
export async function forecast(
  place: Pick<Place, 'latitude' | 'longitude'>
): Promise<Weather> {
  const params = new URLSearchParams({
    latitude: String(place.latitude),
    longitude: String(place.longitude),
    timezone: 'auto',
    timeformat: 'unixtime',
    forecast_days: '10',
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m',
    hourly:
      'temperature_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,wind_speed_10m,relative_humidity_2m,uv_index,visibility,dew_point_2m,is_day',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,precipitation_sum,uv_index_max,wind_speed_10m_max,daylight_duration',
    minutely_15: 'precipitation',
    forecast_minutely_15: '12',
  });
  const airParams = new URLSearchParams({
    latitude: params.get('latitude')!,
    longitude: params.get('longitude')!,
    current: 'us_aqi,pm2_5,pm10,grass_pollen',
    timeformat: 'unixtime',
  });
  const [data, air] = await Promise.all([
    fetchJSON(`https://api.open-meteo.com/v1/forecast?${params}`),
    fetchJSON(
      `https://air-quality-api.open-meteo.com/v1/air-quality?${airParams}`,
      6500
    ).catch(() => null),
  ]);
  if (
    !finite(data.current?.temperature_2m) ||
    !finite(data.current?.time) ||
    typeof data.timezone !== 'string' ||
    !Array.isArray(data.hourly?.time) ||
    !data.hourly.time.length ||
    !data.hourly.time.every(finite) ||
    !Array.isArray(data.daily?.time) ||
    !data.daily.time.length ||
    !data.daily.time.every(finite)
  )
    throw new Error('Incomplete forecast');
  const c = data.current,
    h = data.hourly,
    d = data.daily;
  // Validate the timezone rather than allowing malformed provider data into Intl.
  new Intl.DateTimeFormat('en-US', { timeZone: data.timezone }).format();
  return {
    timezone: data.timezone,
    fetchedAt: Date.now(),
    current: {
      time: c.time,
      temperature: c.temperature_2m,
      feels: val(c.apparent_temperature),
      humidity: val(c.relative_humidity_2m),
      code: c.weather_code ?? -1,
      day: c.is_day === 1,
      wind: val(c.wind_speed_10m),
      direction: val(c.wind_direction_10m),
      gust: val(c.wind_gusts_10m),
      pressure: val(c.pressure_msl),
      cloud: val(c.cloud_cover),
    },
    hours: h.time.map((time: number, i: number) => ({
      time,
      temperature: val(h.temperature_2m?.[i]),
      feels: val(h.apparent_temperature?.[i]),
      rain: val(h.precipitation_probability?.[i]),
      precipitation: val(h.precipitation?.[i]),
      wind: val(h.wind_speed_10m?.[i]),
      code: h.weather_code?.[i] ?? -1,
      day: h.is_day?.[i] === 1,
      humidity: val(h.relative_humidity_2m?.[i]),
      uv: val(h.uv_index?.[i]),
      visibility: val(h.visibility?.[i]),
      dew: val(h.dew_point_2m?.[i]),
    })),
    days: d.time.map((time: number, i: number) => ({
      time,
      code: d.weather_code?.[i] ?? -1,
      high: val(d.temperature_2m_max?.[i]),
      low: val(d.temperature_2m_min?.[i]),
      sunrise: val(d.sunrise?.[i]),
      sunset: val(d.sunset?.[i]),
      rain: val(d.precipitation_probability_max?.[i]),
      precipitation: val(d.precipitation_sum?.[i]),
      uv: val(d.uv_index_max?.[i]),
      wind: val(d.wind_speed_10m_max?.[i]),
      daylight: val(d.daylight_duration?.[i]),
    })),
    rain: (data.minutely_15?.time ?? []).map((time: number, i: number) => ({
      time,
      amount: val(data.minutely_15.precipitation?.[i]),
    })),
    air: finite(air?.current?.time)
      ? {
          time: air.current.time,
          aqi: val(air.current.us_aqi),
          pm25: val(air.current.pm2_5),
          pm10: val(air.current.pm10),
          pollen: val(air.current.grass_pollen),
        }
      : null,
  };
}
