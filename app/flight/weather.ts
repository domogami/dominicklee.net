import { windVector, type Conditions } from './model';
export const levels = [
  1000, 975, 950, 925, 900, 850, 800, 700, 600, 500, 400, 300, 250, 200,
];
export interface Profile {
  height: number;
  pressure: number;
  temperature: number;
  east: number;
  north: number;
}
export interface WeatherHourly {
  time: number[];
  [key: string]: (number | null)[];
}
function blend(a: Profile, b: Profile, f: number): Profile {
  return {
    height: a.height + (b.height - a.height) * f,
    pressure: Math.exp(
      Math.log(a.pressure) + (Math.log(b.pressure) - Math.log(a.pressure)) * f
    ),
    temperature: a.temperature + (b.temperature - a.temperature) * f,
    east: a.east + (b.east - a.east) * f,
    north: a.north + (b.north - a.north) * f,
  };
}
function atHeight(hourly: WeatherHourly, index: number, height: number) {
  const profiles: Profile[] = [];
  for (const p of levels) {
    const z = hourly[`geopotential_height_${p}hPa`]?.[index],
      temp = hourly[`temperature_${p}hPa`]?.[index],
      speed = hourly[`wind_speed_${p}hPa`]?.[index],
      direction = hourly[`wind_direction_${p}hPa`]?.[index];
    if (
      [z, temp, speed, direction].some((v) => v == null || !Number.isFinite(v))
    )
      continue;
    const v = windVector(speed!, direction!);
    profiles.push({ height: z!, pressure: p * 100, temperature: temp!, ...v });
  }
  profiles.sort((a, b) => a.height - b.height);
  for (let i = 1; i < profiles.length; i++)
    if (height >= profiles[i - 1].height && height <= profiles[i].height)
      return blend(
        profiles[i - 1],
        profiles[i],
        (height - profiles[i - 1].height) /
          (profiles[i].height - profiles[i - 1].height)
      );
  throw new Error(
    'Flight altitude is outside the model pressure-level coverage. Use measured or manual winds aloft.'
  );
}
export function interpolateWeather(
  hourly: WeatherHourly,
  time: number,
  altitudeFeet: number
): Conditions {
  const upper = hourly.time.findIndex((t) => t >= time);
  if (upper < 0 || (upper === 0 && hourly.time[0] !== time))
    throw new Error('Weather does not cover this timestamp.');
  const lower = Math.max(0, upper - 1);
  if (hourly.time[upper] - hourly.time[lower] > 10800)
    throw new Error('Weather time gap is too large.');
  const a = atHeight(hourly, lower, altitudeFeet * 0.3048),
    b = atHeight(hourly, upper, altitudeFeet * 0.3048);
  const f =
    upper === lower
      ? 0
      : (time - hourly.time[lower]) / (hourly.time[upper] - hourly.time[lower]);
  const p = blend(a, b, f),
    windSpeed = Math.hypot(p.east, p.north),
    windDirection =
      ((Math.atan2(-p.east, -p.north) * 180) / Math.PI + 360) % 360;
  return {
    source: 'model',
    windSpeed,
    windDirection,
    oat: p.temperature,
    pressure: p.pressure,
  };
}
