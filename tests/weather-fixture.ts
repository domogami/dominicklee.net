import type { Weather } from '../app/weather/model';

export const weatherNow = Date.parse('2026-10-03T19:00:00Z');
const midnight = Date.parse('2026-10-03T07:00:00Z') / 1000;
export function weatherFixture(): Weather {
  return {
    timezone: 'America/Los_Angeles',
    fetchedAt: weatherNow,
    current: {
      time: weatherNow / 1000,
      temperature: 18,
      feels: 17,
      humidity: 74,
      code: 61,
      day: true,
      wind: 12,
      direction: 225,
      gust: 22,
      pressure: 1014,
      cloud: 85,
    },
    hours: Array.from({ length: 240 }, (_, i) => ({
      time: midnight + i * 3600,
      temperature: 16 + Math.sin(i / 3) * 5,
      feels: 15 + Math.sin(i / 3) * 5,
      rain: i % 24 < 14 ? 80 : 10,
      precipitation: i % 24 < 14 ? 0.4 : 0,
      wind: 12,
      code: i % 24 < 14 ? 61 : 2,
      day: i % 24 >= 7 && i % 24 < 19,
      humidity: 74,
      uv: 3,
      visibility: 24000,
      dew: 10,
    })),
    days: Array.from({ length: 10 }, (_, i) => ({
      time: midnight + i * 86400,
      code: [61, 2, 3, 0, 71, 95, 45][i % 7],
      high: 22 + (i % 4),
      low: 12 + (i % 3),
      sunrise: midnight + i * 86400 + 7 * 3600,
      sunset: midnight + i * 86400 + 19 * 3600,
      rain: i === 0 ? 80 : 20,
      precipitation: i === 0 ? 4 : 0.1,
      uv: 4,
      wind: 18,
      daylight: 43200,
    })),
    rain: Array.from({ length: 12 }, (_, i) => ({
      time: weatherNow / 1000 + i * 900,
      amount: i < 4 ? 0.4 - i * 0.1 : 0,
    })),
    air: { time: weatherNow / 1000, aqi: 32, pm25: 6, pm10: 9, pollen: null },
  };
}
