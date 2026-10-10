import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import {
  airDataTas,
  altitudeFromPressure,
  analyze,
  compareClimbRates,
  defaultOptions,
  defaultUnits,
  derive,
  isaPressure,
  normalize,
  parseCsv,
  parseTime,
  regression,
  sampleCsv,
  summary,
  weighted,
  windTas,
  type Sample,
} from '../app/flight/model';
import { interpolateWeather, type WeatherHourly } from '../app/flight/weather';

test('wind correction uses FROM directions and handles crosswind as a vector', () => {
  expect(windTas(100, 0, 20, 0).tas).toBeCloseTo(120, 8);
  expect(windTas(100, 0, 20, 180).tas).toBeCloseTo(80, 8);
  expect(windTas(100, 0, 20, 90).tas).toBeCloseTo(Math.sqrt(10400), 8);
  expect(windTas(100, 0, 0, 270).tas).toBeCloseTo(100, 8);
  expect(windTas(100, 0, 10, 359).tas).toBeCloseTo(
    windTas(100, 0, 10, 1).tas,
    8
  );
});
test('air data recovers standard sea-level CAS and ISA pressure altitude', () => {
  expect(airDataTas(100, 101325, 15)).toBeCloseTo(100, 3);
  expect(airDataTas(100, isaPressure(10000), -5)).toBeGreaterThan(110);
  expect(altitudeFromPressure(isaPressure(6500))).toBeCloseTo(6500, 5);
  const s: Sample = {
    t: 0,
    absolute: false,
    row: 1,
    altitude: 5000,
    ias: 100,
    oat: 5,
  };
  expect(derive(s, { source: 'manual' }).tas).toBeUndefined();
  expect(
    derive({ ...s, pressureAltitude: 5000 }, { source: 'manual' }).method
  ).toContain('IAS ≈ CAS');
  expect(
    derive({ ...s, gs: 105, track: 90 }, { source: 'manual' }).tas
  ).toBeUndefined();
  expect(
    derive({ ...s, gs: 105, track: 90 }, { source: 'manual', windSpeed: 0 }).tas
  ).toBe(105);
});
test('ForeFlight scientific epoch timestamps and metadata headers import without consuming personal metadata', () => {
  const text =
    'Pilot,Tail Number,Start Time\n"",N123,1735689600123\nTimestamp,Latitude,Longitude,Altitude,Course,Speed,Horizontal Error,Vertical Error\n1.735689600123E9,47.5,-122.3,5000,90,95,4,7\n1.735689601123E9,47.5,-122.3,5001,90,95,4,7';
  const csv = parseCsv(text);
  expect(csv.headers[0]).toBe('Timestamp');
  expect(csv.rows).toHaveLength(2);
  const result = normalize(csv, csv.mapping, csv.units, 0, false, 0);
  expect(result.samples).toHaveLength(2);
  expect(result.samples[0].t).toBeCloseTo(1735689600.123, 5);
  expect(result.samples[0].absolute).toBe(true);
  expect(result.samples[0].altitude).toBe(5000);
  expect(result.samples[0].gs).toBe(95);
  expect(csv.notes.join(' ')).toContain('ForeFlight');
});
test('CSV parser supports preambles, units, delimiters, quotes, blanks and malformed files', () => {
  const csv = parseCsv(
    '# Garmin flight data\nLcl Date;Lcl Time;Altitude (m);Speed (km/h);note\nyyyy-mm-dd;hh:mm:ss;m;km/h;\n2026-09-01;12:00:00;1000;180;"quoted; field"\n2026-09-01;12:00:10;1001;181;"two ""quotes"""'
  );
  expect(csv.rows).toHaveLength(2);
  expect(csv.units.altitude).toBe('m');
  expect(csv.units.speed).toBe('kmh');
  expect(csv.rows[0][4]).toBe('quoted; field');
  expect(csv.rows[1][4]).toBe('two "quotes"');
  const ss = normalize(csv, csv.mapping, csv.units, 0, false, 0).samples;
  expect(ss[0].altitude).toBeCloseTo(3280.839895, 5);
  expect(ss[0].gs).toBeCloseTo(97.19226, 4);
  expect(() => parseCsv('time,altitude\n"1,100')).toThrow('unclosed');
  expect(
    parseCsv('timestamp,altitude,fuel flow\n0,1000,\n5,1000,').rows[0][2]
  ).toBe('');
});
test('time zone offsets, milliseconds, midnight and duplicate timestamps are explicit', () => {
  expect(parseTime('12:00:00', '2026-09-01', '-07:00', 'auto', 0)?.t).toBe(
    Date.UTC(2026, 8, 1, 19) / 1000
  );
  expect(parseTime('2026-09-01T12:00:00-07:00', '', '', 'auto', 0)?.t).toBe(
    Date.UTC(2026, 8, 1, 19) / 1000
  );
  expect(parseTime('1735689600123', '', '', 'auto', 0)?.t).toBeCloseTo(
    1735689600.123,
    5
  );
  expect(parseTime('60000', '', '', 'milliseconds', 0)).toEqual({
    t: 60,
    absolute: false,
  });
  const csv = parseCsv(
    'time,altitude,groundspeed\n23:59:55,1000,90\n00:00:00,1010,90\n00:00:00,1010,90\n00:00:05,1020,90'
  );
  const r = normalize(csv, csv.mapping, csv.units, 0, false, 0);
  expect(r.samples).toHaveLength(3);
  expect(r.samples[2].t - r.samples[0].t).toBe(10);
});
test('irregular sampling preserves climb slope and integrates fuel by time without bridging missing measurements', () => {
  const ss: Sample[] = [0, 10, 30, 60, 100, 120].map((t) => ({
    t,
    absolute: false,
    row: 1,
    altitude: 1000 + 10 * t,
    gs: 90,
    track: 90,
    fuel: 6,
  }));
  expect(regression(ss).rate).toBeCloseTo(600, 8);
  expect(compareClimbRates(ss)?.endpoint).toBeCloseTo(600, 8);
  expect(
    weighted(
      ss,
      ss.map((s) => s.fuel),
      60
    ).integral / 3600
  ).toBeCloseTo(0.2, 8);
  expect(
    weighted(ss, [6, 6, undefined, undefined, 6, 6], 60).value
  ).toBeUndefined();
});
test('both departures retain well-resolved climbs despite turns and changing groundspeed, while cruise still requires stability', () => {
  const ss: Sample[] = Array.from({ length: 121 }, (_, i) => {
    const t = i * 5;
    return {
      t,
      absolute: false,
      row: i + 1,
      altitude:
        t <= 120
          ? 500 + t * 8
          : t <= 240
            ? 1460
            : t <= 480
              ? 1460 + (t - 240) * 9
              : 3620,
      gs: t <= 120 ? 70 : 55 + (t % 120) * 0.2,
      track: t <= 120 ? 90 : (90 + (t % 120) * 0.5) % 360,
    };
  });
  const segments = analyze(ss, defaultOptions);
  const first = segments.find((s) => s.start === 0)!;
  const returnClimbs = segments.filter((s) => s.start >= 240 && s.end <= 480);
  expect(first.kind).toBe('climb');
  expect(first.quality).toBe('steady');
  expect(returnClimbs).toHaveLength(2);
  for (const s of returnClimbs) {
    expect(s.kind).toBe('climb');
    expect(s.quality).toBe('variable');
    expect(s.rate).toBeCloseTo(540, 8);
    expect(s.reason).toEqual([]);
    expect(s.cautions.join(' ')).toContain('Turning');
    expect(s.cautions.join(' ')).toContain('Speed varies');
    expect(s.fuel).toBeUndefined();
  }
  expect(segments.find((s) => s.start === 120)?.kind).toBe('excluded');
});
test('altitude jumps and poor GPS accuracy remain excluded even during an apparent climb', () => {
  const ss: Sample[] = Array.from({ length: 25 }, (_, i) => ({
    t: i * 5,
    absolute: false,
    row: i + 1,
    altitude: 1000 + i * 45 + (i === 12 ? 1400 : 0),
    gs: 75,
    track: 90,
  }));
  const noisy = analyze(ss, defaultOptions)[0];
  expect(noisy.kind).toBe('excluded');
  expect(noisy.reason.join(' ')).toContain('Altitude trend');
  const badGps = analyze(
    ss.map((s, i) => ({
      ...s,
      altitude: 1000 + i * 45,
      verticalError: i === 12 ? 80 : 5,
    })),
    defaultOptions
  )[0];
  expect(badGps.kind).toBe('excluded');
  expect(badGps.reason.join(' ')).toContain('vertical error');
});
test('regression, endpoints and overlapping local regressions agree for a linear climb and reveal an endpoint error', () => {
  const ss: Sample[] = Array.from({ length: 121 }, (_, i) => ({
    t: i,
    absolute: false,
    row: i + 1,
    altitude: 1000 + i * 10,
  }));
  const comparison = compareClimbRates(ss)!;
  expect(regression(ss).rate).toBeCloseTo(600, 8);
  expect(comparison.endpoint).toBeCloseTo(600, 8);
  expect(comparison.rolling?.median).toBeCloseTo(600, 8);
  expect(comparison.rolling?.min).toBeCloseTo(600, 8);
  expect(comparison.rolling?.max).toBeCloseTo(600, 8);
  const perturbed = ss.map((s, i) => ({
    ...s,
    altitude: s.altitude + (i === 120 ? 120 : 0),
  }));
  expect(compareClimbRates(perturbed)?.endpoint).toBeCloseTo(660, 8);
  expect(regression(perturbed).rate).toBeLessThan(610);
});
test('GPS-only analysis produces measured climb and groundspeed, leaves TAS and fuel unknown, and flags turning climbs', () => {
  const csv = parseCsv(sampleCsv(true)),
    ss = normalize(csv, csv.mapping, csv.units, 0, false, 0).samples;
  const segments = analyze(ss, defaultOptions);
  const accepted = segments.filter((s) => s.kind !== 'excluded');
  expect(accepted.some((s) => s.kind === 'cruise')).toBe(true);
  expect(accepted.some((s) => s.kind === 'climb')).toBe(true);
  // Four 540 ft/min climbs and one 420 ft/min turning climb, equal durations.
  expect(summary(segments, 'rate', 'climb')).toBeCloseTo(516, 0);
  expect(accepted.every((s) => s.tas == null && s.fuel == null)).toBe(true);
  expect(
    segments.some(
      (s) =>
        s.kind === 'climb' &&
        s.quality === 'variable' &&
        s.cautions.some((r) => r.includes('Turning'))
    )
  ).toBe(true);
  const corrected = analyze(ss, {
    ...defaultOptions,
    manual: { source: 'manual', windSpeed: 12, windDirection: 45 },
  });
  expect(summary(corrected, 'tas', 'cruise')).toBeGreaterThan(110);
  expect(corrected.every((s) => s.fuel == null)).toBe(true);
});
test('recorded avionics TAS takes priority and partial wind pairs never mix sources', () => {
  const base: Sample = {
    t: 0,
    absolute: false,
    row: 1,
    altitude: 1000,
    gs: 100,
    track: 0,
    tas: 130,
    windSpeed: 5,
  };
  expect(
    derive(base, { source: 'manual', windSpeed: 20, windDirection: 0 }).tas
  ).toBe(130);
  const result = derive(
    { ...base, tas: undefined },
    { source: 'manual', windSpeed: 20, windDirection: 0 }
  );
  expect(result.tas).toBe(120);
  expect(result.method).toBe('GPS + manual wind');
});
test('instrument-only logs work without GPS speed and multi-engine fuel is never inferred from E1 alone', () => {
  const csv = parseCsv(
    'time,altitude,TAS,E1 FFlow,E2 FFlow\n0,5000,110,6,6\n1,5000,110,6,6'
  );
  expect(csv.mapping.fuel).toBeUndefined();
  const total = parseCsv(
    'time,altitude,TAS,E1 FFlow,E2 FFlow,Total Fuel Flow\n0,5000,110,6,6,12\n1,5000,110,6,6,12'
  );
  expect(total.mapping.fuel).toBe(5);
  const ss: Sample[] = Array.from({ length: 25 }, (_, i) => ({
    t: i * 5,
    absolute: false,
    row: i + 1,
    altitude: 5000,
    tas: 110,
  }));
  const result = analyze(ss, defaultOptions);
  expect(result[0].kind).toBe('cruise');
  expect(result[0].tas).toBe(110);
  expect(result[0].gs).toBeUndefined();
  expect(parseTime('1e100', '', '', 'auto', 0)).toBeUndefined();
});
test('pressure-level weather interpolates height and time, including wrapped wind directions, without extrapolation', () => {
  const hourly: WeatherHourly = { time: [0, 3600] };
  for (const [p, height] of [
    [1000, 0],
    [900, 1000],
  ]) {
    hourly[`geopotential_height_${p}hPa`] = [height, height];
    hourly[`temperature_${p}hPa`] = [20, 10];
    hourly[`wind_speed_${p}hPa`] = [10, 10];
    hourly[`wind_direction_${p}hPa`] = [359, 1];
  }
  const w = interpolateWeather(hourly, 1800, 500 / 0.3048);
  expect(w.windSpeed).toBeCloseTo(9.99847695, 5);
  expect(Math.min(w.windDirection!, 360 - w.windDirection!)).toBeLessThan(0.01);
  expect(w.oat).toBe(15);
  expect(w.pressure).toBeCloseTo(Math.sqrt(100000 * 90000), 5);
  expect(() => interpolateWeather(hourly, 4000, 500)).toThrow('timestamp');
  expect(() => interpolateWeather(hourly, 1800, 10000)).toThrow('altitude');
});
test('private supplied track log can be checked locally without becoming a public fixture', () => {
  test.skip(
    !process.env.FLIGHT_TEST_CSV,
    'Optional private local flight fixture.'
  );
  const csv = parseCsv(readFileSync(process.env.FLIGHT_TEST_CSV!, 'utf8'));
  const n = normalize(csv, csv.mapping, csv.units, 0, false, 0),
    ss = analyze(n.samples, defaultOptions);
  expect(n.samples.length).toBeGreaterThan(7000);
  expect(ss.some((s) => s.kind === 'cruise')).toBe(true);
  expect(ss.some((s) => s.kind === 'climb')).toBe(true);
  const start = n.samples[0].t;
  const returnClimbs = ss.filter(
    (s) => s.kind === 'climb' && s.start - start > 3600
  );
  expect(returnClimbs.length).toBeGreaterThanOrEqual(3);
  expect(returnClimbs.some((s) => s.quality === 'variable')).toBe(true);
  expect(ss.every((s) => s.tas == null && s.fuel == null)).toBe(true);
  console.log(
    JSON.stringify(
      {
        rows: n.samples.length,
        notes: n.notes,
        accepted: ss
          .filter((s) => s.kind !== 'excluded')
          .map((s) => ({
            id: s.id,
            phase: s.kind,
            start: new Date(s.start * 1000).toISOString(),
            altitude: s.altitude,
            groundspeed: s.gs,
            rate: s.rate,
            lat: s.samples[Math.floor(s.samples.length / 2)].latitude,
            lon: s.samples[Math.floor(s.samples.length / 2)].longitude,
          })),
        cruiseGS:
          ss
            .filter((s) => s.kind === 'cruise')
            .reduce((n, s) => n + s.gs! * s.duration, 0) /
          ss
            .filter((s) => s.kind === 'cruise')
            .reduce((n, s) => n + s.duration, 0),
        climb: summary(ss, 'rate', 'climb'),
      },
      null,
      2
    )
  );
});
