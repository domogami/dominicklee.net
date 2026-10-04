import { test, expect } from '@playwright/test';
import {
  condition,
  isDayAt,
  temperature,
  speed,
  percent,
  dateKey,
  outingWindow,
} from '../app/weather/model';
import { cached, coordinates, forecast } from '../app/weather/api.server';
import { weatherFixture, weatherNow } from './weather-fixture';

test('weather codes, missing measurements, and unit conversions stay distinct', () => {
  expect(condition(3)).toEqual({ label: 'Cloudy', kind: 'cloud' });
  expect(condition(67).label).toBe('Freezing rain');
  expect(condition(99).kind).toBe('storm');
  expect(condition(-1).label).toContain('unavailable');
  expect(temperature(null, 'us')).toBe('—');
  expect(temperature(0, 'us')).toBe('32°');
  expect(speed(16.09344, 'us')).toBe('10 mph');
  expect(percent(null)).toBe('—');
  expect(percent(0)).toBe('0%');
});

test('day and night follow forecast sunrise, sunset, and polar day flags', () => {
  const w = weatherFixture();
  const day = w.days[0];
  expect(isDayAt(w, day.sunrise! - 1)).toBe(false);
  expect(isDayAt(w, day.sunrise!)).toBe(true);
  expect(isDayAt(w, day.sunset! - 1)).toBe(true);
  expect(isDayAt(w, day.sunset!)).toBe(false);
  expect(dateKey(Date.parse('2026-10-04T02:00:00Z') / 1000, w.timezone)).toBe(
    '2026-10-03'
  );
  day.sunrise = 0;
  day.sunset = 0;
  w.hours.forEach((h) => {
    h.day = false;
  });
  expect(isDayAt(w, weatherNow / 1000)).toBe(false);
  w.hours.forEach((h) => {
    h.day = true;
  });
  expect(isDayAt(w, weatherNow / 1000)).toBe(true);
});

test('outdoor suggestions need consecutive, known daylight conditions', () => {
  const w = weatherFixture();
  const result = outingWindow(w.hours, weatherNow / 1000);
  expect(result).not.toBeNull();
  expect(result![1].time - result![0].time).toBe(3600);
  expect(result!.every((h) => h.day && h.rain! < 35 && h.wind! < 25)).toBe(
    true
  );
  expect(
    outingWindow(
      w.hours.map((h) => ({ ...h, rain: null })),
      weatherNow / 1000
    )
  ).toBeNull();
  expect(
    outingWindow(
      w.hours.map((h) => ({ ...h, code: 95 })),
      weatherNow / 1000
    )
  ).toBeNull();
});

test('upstream normalization preserves missing data and tolerates an air-quality outage', async () => {
  const original = globalThis.fetch;
  const requests: string[] = [];
  globalThis.fetch = async (input) => {
    requests.push(String(input));
    if (String(input).includes('air-quality'))
      throw new Error('Air service down');
    return Response.json({
      timezone: 'Asia/Kathmandu',
      current: {
        time: 1791038700,
        temperature_2m: 0,
        weather_code: 3,
        is_day: 1,
      },
      hourly: {
        time: [1791036900],
        temperature_2m: [0],
        precipitation_probability: [null],
      },
      daily: { time: [1790964900], temperature_2m_max: [null] },
      minutely_15: { time: [1791038700], precipitation: [null] },
    });
  };
  try {
    const w = await forecast({ latitude: 27.717, longitude: 85.324 });
    expect(w.current.temperature).toBe(0);
    expect(w.hours[0].rain).toBeNull();
    expect(w.days[0].high).toBeNull();
    expect(w.rain[0].amount).toBeNull();
    expect(w.air).toBeNull();
    expect(w.timezone).toBe('Asia/Kathmandu');
    expect(requests).toHaveLength(2);
    expect(requests.every((url) => !url.includes('apikey'))).toBe(true);
  } finally {
    globalThis.fetch = original;
  }
});

test('requests share in-flight cache work and failed requests can recover', async () => {
  let calls = 0;
  const fetcher = async () => {
    calls++;
    return 7;
  };
  const key = 'test-cache-coalescing';
  expect(
    await Promise.all([cached(key, 1000, fetcher), cached(key, 1000, fetcher)])
  ).toEqual([7, 7]);
  expect(calls).toBe(1);
  await expect(
    cached('test-cache-failure', 1000, async () => {
      throw new Error('Temporary outage');
    })
  ).rejects.toThrow();
  expect(await cached('test-cache-failure', 1000, fetcher)).toBe(7);
  expect(
    coordinates(
      new Request('http://localhost/weather/api?lat=47.60625&lon=-122.33212')
    )
  ).toEqual({ latitude: 47.606, longitude: -122.332 });
});
