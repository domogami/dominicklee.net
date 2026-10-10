import type { ActionFunctionArgs } from 'react-router';
import {
  interpolateWeather,
  levels,
  type WeatherHourly,
} from '~/flight/weather';
const cache = new Map<string, { expires: number; hourly: WeatherHourly }>();
export function loader() {
  return Response.json(
    { error: 'Use the flight page to request winds aloft.' },
    { status: 405 }
  );
}
export async function action({ request }: ActionFunctionArgs) {
  const headers = { 'Cache-Control': 'no-store' };
  if (request.method !== 'POST')
    return Response.json({ error: 'POST required.' }, { status: 405, headers });
  const origin = request.headers.get('Origin');
  if (origin && origin !== new URL(request.url).origin)
    return Response.json(
      { error: 'Use this site to request weather.' },
      { status: 403, headers }
    );
  let points: {
    id: string;
    latitude: number;
    longitude: number;
    time: number;
    altitude: number;
  }[];
  try {
    const text = await request.text();
    if (text.length > 8000) throw new Error();
    points = JSON.parse(text).points;
    if (!Array.isArray(points) || !points.length || points.length > 12)
      throw new Error();
    for (const p of points)
      if (
        typeof p.id !== 'string' ||
        !/^S\d{2,6}$/.test(p.id) ||
        ![p.latitude, p.longitude, p.time, p.altitude].every(
          (v) => typeof v === 'number' && Number.isFinite(v)
        ) ||
        Math.abs(p.latitude) > 90 ||
        Math.abs(p.longitude) > 180 ||
        p.altitude < -1000 ||
        p.altitude > 45000 ||
        p.time < Date.UTC(2021, 2, 23) / 1000 ||
        p.time > Date.now() / 1000
      )
        throw new Error();
  } catch {
    return Response.json(
      {
        error:
          'Provide up to 12 valid flight points, dated after March 23, 2021 and in the past.',
      },
      { status: 400, headers }
    );
  }
  const matches = [],
    errors: string[] = [];
  for (let i = 0; i < points.length; i += 3) {
    const batch = await Promise.all(
      points.slice(i, i + 3).map(async (p) => {
        const date = new Date(p.time * 1000).toISOString().slice(0, 10),
          next = new Date(p.time * 1000 + 86400000).toISOString().slice(0, 10);
        const lat = Math.round(p.latitude * 100) / 100,
          lon = Math.round(p.longitude * 100) / 100;
        const key = `${lat},${lon},${date}`;
        try {
          let hourly =
            cache.get(key)?.expires > Date.now()
              ? cache.get(key)!.hourly
              : undefined;
          if (!hourly) {
            const q = new URLSearchParams({
              latitude: String(lat),
              longitude: String(lon),
              start_date: date,
              end_date: next,
              hourly: levels
                .flatMap((level) =>
                  [
                    'temperature',
                    'wind_speed',
                    'wind_direction',
                    'geopotential_height',
                  ].map((v) => `${v}_${level}hPa`)
                )
                .join(','),
              wind_speed_unit: 'kn',
              timeformat: 'unixtime',
              timezone: 'UTC',
              models: 'gfs_seamless',
            });
            const res = await fetch(
              `https://historical-forecast-api.open-meteo.com/v1/forecast?${q}`,
              { signal: AbortSignal.timeout(18000) }
            );
            if (!res.ok)
              throw new Error(
                'The weather provider is unavailable or has no archive for this date.'
              );
            const data = await res.json();
            hourly = data.hourly;
            if (!hourly?.time?.length)
              throw new Error('The model returned no hourly data.');
            if (cache.size >= 100) cache.delete(cache.keys().next().value!);
            cache.set(key, { hourly, expires: Date.now() + 3600000 });
          }
          return { ...p, ...interpolateWeather(hourly, p.time, p.altitude) };
        } catch (e) {
          errors.push(
            `${p.id}: ${e instanceof Error ? e.message : 'Weather lookup failed.'}`
          );
          return undefined;
        }
      })
    );
    matches.push(...batch.filter(Boolean));
  }
  return Response.json(
    {
      matches,
      errors,
      provider:
        'Open-Meteo / NOAA GFS historical forecast; hourly model estimates, ~25 km pressure-level grid. Coordinates rounded to 0.01°.',
    },
    { headers }
  );
}
