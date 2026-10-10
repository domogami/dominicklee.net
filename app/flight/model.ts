export const fields = {
  time: 'Time / timestamp',
  date: 'Date (if separate)',
  utcOffset: 'UTC offset',
  altitude: 'Recorded altitude',
  pressureAltitude: 'Pressure altitude',
  pressure: 'Static pressure',
  latitude: 'Latitude',
  longitude: 'Longitude',
  gs: 'Groundspeed',
  track: 'Ground track',
  tas: 'True airspeed',
  cas: 'Calibrated airspeed',
  ias: 'Indicated airspeed',
  oat: 'Outside air temperature',
  fuel: 'Total engine fuel flow',
  rpm: 'Engine RPM',
  map: 'Manifold pressure',
  windSpeed: 'Wind speed',
  windDirection: 'Wind direction (from)',
  verticalError: 'GPS vertical error (m)',
} as const;
export type Field = keyof typeof fields;
export type Mapping = Partial<Record<Field, number>>;
export type Units = Record<
  'altitude' | 'speed' | 'temperature' | 'fuel' | 'pressure' | 'time',
  string
>;
export const defaultUnits: Units = {
  altitude: 'ft',
  speed: 'kt',
  temperature: 'C',
  fuel: 'gph',
  pressure: 'hPa',
  time: 'auto',
};
export interface Csv {
  headers: string[];
  rows: string[][];
  mapping: Mapping;
  units: Units;
  notes: string[];
}
const aliases: Record<Field, string[]> = {
  time: [
    'timestamp',
    'datetime',
    'timeutc',
    'utctime',
    'lcltime',
    'time',
    'elapsed',
    'elapsedtime',
    'seconds',
  ],
  date: ['lcldate', 'date', 'utcdate'],
  utcOffset: ['utcofst', 'utcoffset'],
  altitude: [
    'altmsl',
    'altgps',
    'gpsaltitude',
    'altitude',
    'alt',
    'altb',
    'baroaltitude',
    'altitudemsl',
  ],
  pressureAltitude: ['pressurealtitude', 'pressurealt', 'palt', 'pa'],
  pressure: ['staticpressure', 'airpressure'],
  latitude: ['latitude', 'lat'],
  longitude: ['longitude', 'lon', 'long', 'lng'],
  gs: ['gndspd', 'groundspeed', 'gs', 'speed'],
  track: ['trk', 'track', 'groundtrack', 'course', 'coursetrue'],
  tas: ['tas', 'trueairspeed'],
  cas: ['cas', 'calibratedairspeed'],
  ias: ['ias', 'indicatedairspeed', 'airspeed'],
  oat: ['oat', 'outsideairtemperature', 'temperature', 'temp'],
  fuel: ['totalfuelflow', 'e1fflow', 'fflow', 'fuelflow', 'fuelburn', 'ff'],
  rpm: ['e1rpm', 'rpm', 'enginerpm'],
  map: ['e1map', 'map', 'manifoldpressure'],
  windSpeed: ['wndspd', 'windspeed', 'windspd'],
  windDirection: ['wnddr', 'winddirection', 'winddir'],
  verticalError: ['verticalerror', 'gpsverticalerror'],
};
const clean = (s: string) =>
  s
    .toLowerCase()
    .replace(/\([^)]*\)|\[[^\]]*\]/g, '')
    .replace(/[^a-z0-9]/g, '');
export function identify(headers: string[]): Mapping {
  const result: Mapping = {};
  for (const f of Object.keys(fields) as Field[]) {
    for (const alias of aliases[f]) {
      const index = headers.findIndex(
        (h) =>
          clean(h) === alias ||
          clean(h) === alias + 'ft' ||
          clean(h) === alias + 'kt' ||
          clean(h) === alias + 'kts'
      );
      if (index >= 0) {
        result[f] = index;
        break;
      }
    }
  }
  return result;
}
export function parseCsv(input: string): Csv {
  if (input.length > 15_000_000)
    throw new Error(
      'Choose a CSV under 15 MB. Split longer logs into individual flights.'
    );
  const firstLines = input
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .slice(0, 25);
  const delimiter = [',', ';', '\t'].sort(
    (a, b) =>
      Math.max(...firstLines.map((l) => l.split(b).length)) -
      Math.max(...firstLines.map((l) => l.split(a).length))
  )[0];
  const records: string[][] = [];
  let row: string[] = [],
    cell = '',
    quoted = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '"') {
      if (quoted && input[i + 1] === '"') {
        cell += '"';
        i++;
      } else quoted = !quoted;
    } else if (c === delimiter && !quoted) {
      row.push(cell.trim());
      cell = '';
    } else if ((c === '\n' || c === '\r') && !quoted) {
      if (c === '\r' && input[i + 1] === '\n') i++;
      row.push(cell.trim());
      if (row.some(Boolean)) records.push(row);
      row = [];
      cell = '';
    } else cell += c;
    if (records.length > 100_000)
      throw new Error(
        'This log exceeds 100,000 rows. Split it into individual flights.'
      );
  }
  if (quoted)
    throw new Error(
      'The CSV contains an unclosed quoted cell. Re-export or repair the file.'
    );
  row.push(cell.trim());
  if (row.some(Boolean)) records.push(row);
  if (records.length < 2)
    throw new Error('The CSV needs a header and at least one data row.');
  const scores = records
    .slice(0, 25)
    .map((r) => Object.keys(identify(r)).length);
  let headerIndex = scores.indexOf(Math.max(...scores));
  if (Math.max(...scores) < 2)
    headerIndex = records.findIndex(
      (r) => !r[0].startsWith('#') && r.length > 1
    );
  if (headerIndex < 0)
    throw new Error(
      'No tabular header found. Use comma, semicolon or tab-separated data.'
    );
  const headers = records[headerIndex].map((h) => h.replace(/^\uFEFF/, ''));
  const mapping = identify(headers);
  const units = { ...defaultUnits };
  const notes: string[] = [];
  if (headerIndex)
    notes.push(
      `Skipped ${headerIndex} metadata / units line(s) before the header.`
    );
  const unitRow = records[headerIndex + 1];
  const isUnitRow =
    unitRow &&
    unitRow.some((c) =>
      /^(ft|kt|kts|deg|gph|rpm|hh:mm:ss|yyyy-mm-dd|m\/s|in hg|°c)$/i.test(c)
    ) &&
    unitRow.filter((c) => Number.isFinite(Number(c)) && c !== '').length < 2;
  function hint(f: Field) {
    const i = mapping[f];
    return i == null
      ? ''
      : `${headers[i]} ${isUnitRow ? unitRow[i] : ''}`.toLowerCase();
  }
  const alt = hint('altitude'),
    speed = hint('gs') || hint('tas'),
    temp = hint('oat'),
    fuel = hint('fuel'),
    pressure = hint('pressure');
  if (/\(m\)|\[m\]|meters|metres|\s+m$/.test(alt)) units.altitude = 'm';
  if (/km\/h|kph/.test(speed)) units.speed = 'kmh';
  else if (/mph/.test(speed)) units.speed = 'mph';
  else if (/m\/s/.test(speed)) units.speed = 'ms';
  if (/fahrenheit|°f|\(f\)|\[f\]/.test(temp)) units.temperature = 'F';
  if (/l\/h|lph|liters|litres/.test(fuel)) units.fuel = 'lph';
  if (/in.?hg/.test(pressure)) units.pressure = 'inHg';
  else if (/\(pa\)|\[pa\]/.test(pressure)) units.pressure = 'Pa';
  let rows = records.slice(headerIndex + 1 + (isUnitRow ? 1 : 0));
  const malformed = rows.filter((r) => r.length !== headers.length).length;
  rows = rows.filter(
    (r) => r.length === headers.length && !r[0]?.startsWith('#')
  );
  if (malformed)
    notes.push(
      `${malformed} row(s) skipped because their cell count differs from the header.`
    );
  if (headers.some((h) => /^e2.*f.?flow/i.test(h.replace(/\s/g, '')))) {
    if (
      mapping.fuel != null &&
      clean(headers[mapping.fuel]) !== 'totalfuelflow'
    )
      delete mapping.fuel;
    notes.push(
      'Multiple engines detected: map a TOTAL fuel-flow column. E1 alone is not aircraft total fuel burn.'
    );
  }
  if (
    headers.includes('Horizontal Error') &&
    headers.includes('Course') &&
    headers.includes('Timestamp')
  )
    notes.push(
      'ForeFlight track log detected: GPS altitude in feet (WGS84), speed in knots, course from true north, epoch timestamps. GPS / model altitude datums may differ.'
    );
  return { headers, rows, mapping, units, notes };
}
export interface Sample {
  t: number;
  absolute: boolean;
  row: number;
  altitude: number;
  pressureAltitude?: number;
  pressure?: number;
  latitude?: number;
  longitude?: number;
  gs?: number;
  track?: number;
  tas?: number;
  cas?: number;
  ias?: number;
  oat?: number;
  fuel?: number;
  rpm?: number;
  map?: number;
  windSpeed?: number;
  windDirection?: number;
  verticalError?: number;
}
const radians = (v: number) => (v * Math.PI) / 180;
export const angleDifference = (a: number, b: number) =>
  ((a - b + 540) % 360) - 180;
export const mean = (values: number[]) =>
  values.reduce((a, b) => a + b, 0) / values.length;
export function median(values: number[]) {
  const s = [...values].sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)] : 0;
}
function numeric(s: string | undefined): number | undefined {
  if (!s || /^(null|nan|n\/a|--|invalid)$/i.test(s)) return undefined;
  const n = Number(s.replace(/,/g, ''));
  return Number.isFinite(n) ? n : undefined;
}
export function parseTime(
  value: string,
  date: string,
  offset: string,
  mode: string,
  utcOffset: number
): { t: number; absolute: boolean } | undefined {
  if (!value) return undefined;
  if (
    mode === 'seconds' ||
    mode === 'milliseconds' ||
    /^\d+(\.\d+)?(?:e[+-]?\d+)?$/i.test(value)
  ) {
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0) return undefined;
    const epoch = mode === 'auto' && n > 100_000_000;
    const t =
      mode === 'milliseconds' || (epoch && n > 100_000_000_000) ? n / 1000 : n;
    if (t > (epoch ? 8_640_000_000_000 : 31_536_000)) return undefined;
    return { t, absolute: epoch };
  }
  if (/^\d{1,2}:\d{2}:\d{2}(\.\d+)?$/.test(value) && !date) {
    const [h, m, s] = value.split(':').map(Number);
    if (h > 23 || m > 59 || s >= 60) return undefined;
    return { t: h * 3600 + m * 60 + s, absolute: false };
  }
  const datePart = date ? `${date}T` : '';
  let combined = `${datePart}${value}`.replace(' ', 'T');
  if (date && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
    const [m, d, y] = date.split('/');
    combined = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${value}`;
  }
  if (!/^\d{4}-\d{2}-\d{2}T/.test(combined)) return undefined;
  const explicitZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(combined);
  let seconds = utcOffset * 3600;
  if (offset) {
    if (/^[+-]?\d{1,2}:\d{2}$/.test(offset)) {
      const [h, m] = offset.replace(/^[+-]/, '').split(':').map(Number);
      seconds = (h * 3600 + m * 60) * (offset.startsWith('-') ? -1 : 1);
    } else {
      const n = numeric(offset);
      if (n != null) seconds = n * 3600;
    }
  }
  const t =
    Date.parse(explicitZone ? combined : combined + 'Z') / 1000 -
    (explicitZone ? 0 : seconds);
  return Number.isFinite(t) ? { t, absolute: true } : undefined;
}
export function geodesic(a: Sample, b: Sample) {
  const lat1 = radians(a.latitude!),
    lat2 = radians(b.latitude!),
    dlat = lat2 - lat1,
    dlon = radians(angleDifference(b.longitude!, a.longitude!));
  const hav =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
  const nm = 3440.065 * 2 * Math.asin(Math.sqrt(Math.min(1, hav)));
  const track =
    ((Math.atan2(
      Math.sin(dlon) * Math.cos(lat2),
      Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(dlon)
    ) *
      180) /
      Math.PI +
      360) %
    360;
  return { nm, track };
}
export function normalize(
  csv: Csv,
  mapping: Mapping,
  units: Units,
  utcOffset: number,
  magneticTrack: boolean,
  variation: number
) {
  if (mapping.time == null || mapping.altitude == null)
    return {
      samples: [] as Sample[],
      notes: ['Map a time column and recorded altitude to analyze the flight.'],
    };
  let invalid = 0,
    badValues = 0,
    duplicate = 0,
    rollover = 0,
    lastClock = 0;
  const speedFactor = (
    { kt: 1, mph: 0.868976, kmh: 0.539957, ms: 1.943844 } as Record<
      string,
      number
    >
  )[units.speed];
  const altFactor = units.altitude === 'm' ? 3.280839895 : 1;
  const samples: Sample[] = [];
  csv.rows.forEach((r, row) => {
    const get = (f: Field) => (mapping[f] == null ? '' : r[mapping[f]!]);
    const time = parseTime(
      get('time'),
      get('date'),
      get('utcOffset'),
      units.time,
      utcOffset
    );
    const altitude = numeric(get('altitude'));
    if (
      !time ||
      altitude == null ||
      altitude * altFactor < -2000 ||
      altitude * altFactor > 60000
    ) {
      invalid++;
      return;
    }
    if (!time.absolute && /^\d{1,2}:/.test(get('time'))) {
      if (lastClock - time.t > 43200) rollover += 86400;
      lastClock = time.t;
      time.t += rollover;
    }
    const s: Sample = { ...time, altitude: altitude * altFactor, row: row + 1 };
    for (const f of Object.keys(fields) as Field[]) {
      if (['time', 'date', 'utcOffset', 'altitude'].includes(f)) continue;
      let n = numeric(get(f));
      if (n == null) continue;
      if (['gs', 'tas', 'ias', 'cas', 'windSpeed'].includes(f))
        n *= speedFactor;
      if (f === 'pressureAltitude') n *= altFactor;
      if (f === 'fuel' && units.fuel === 'lph') n /= 3.785411784;
      if (f === 'oat' && units.temperature === 'F') n = ((n - 32) * 5) / 9;
      if (f === 'pressure')
        n *=
          units.pressure === 'inHg'
            ? 3386.389
            : units.pressure === 'hPa'
              ? 100
              : 1;
      if (
        (['gs', 'tas', 'ias', 'cas', 'windSpeed'].includes(f) &&
          (n < 0 || n > 600)) ||
        (f === 'latitude' && Math.abs(n) > 90) ||
        (f === 'longitude' && Math.abs(n) > 180) ||
        (f === 'oat' && (n < -90 || n > 60)) ||
        (f === 'fuel' && (n < 0 || n > 500)) ||
        (f === 'pressure' && (n < 5000 || n > 110000)) ||
        (['track', 'windDirection'].includes(f) && (n < 0 || n > 360))
      ) {
        badValues++;
        continue;
      }
      if (f === 'track' && magneticTrack)
        n = (((n + variation) % 360) + 360) % 360;
      (s as unknown as Record<string, number>)[f] = n;
    }
    samples.push(s);
  });
  samples.sort((a, b) => a.t - b.t);
  const unique = samples.filter((s, i) => {
    if (i && s.t === samples[i - 1].t) {
      duplicate++;
      return false;
    }
    return true;
  });
  const cadence = median(unique.slice(1).map((s, i) => s.t - unique[i].t));
  for (let i = 1; i < unique.length - 1; i++) {
    const s = unique[i],
      a = unique[i - 1],
      b = unique[i + 1];
    if (
      [a.latitude, a.longitude, b.latitude, b.longitude].some(
        (v) => v == null
      ) ||
      b.t - a.t > Math.max(30, cadence * 5)
    )
      continue;
    const { nm, track } = geodesic(a, b),
      gs = (nm / (b.t - a.t)) * 3600;
    if (gs <= 600) {
      if (s.gs == null) s.gs = gs;
      if (s.track == null && nm > 0.001) s.track = track;
    }
  }
  const notes = [
    `${unique.length.toLocaleString()} valid samples; median sampling interval ${cadence.toFixed(1)} s.`,
  ];
  if (invalid)
    notes.push(`${invalid} rows excluded for invalid time or altitude.`);
  if (duplicate)
    notes.push(
      `${duplicate} duplicate timestamps removed; out-of-order rows sorted.`
    );
  if (badValues)
    notes.push(
      `${badValues} implausible field values removed (units may need adjustment).`
    );
  if (mapping.gs == null || mapping.track == null)
    notes.push(
      'Missing groundspeed / track is derived from adjacent GPS positions where possible.'
    );
  if (!unique.every((s) => s.absolute))
    notes.push(
      'Elapsed / clock-only timestamps cannot be matched to historical weather. Add a date or use manual conditions.'
    );
  return { samples: unique, notes };
}
export interface Conditions {
  windSpeed?: number;
  windDirection?: number;
  oat?: number;
  pressure?: number;
  source: 'CSV' | 'manual' | 'model';
}
export interface WeatherMatch extends Conditions {
  id: string;
  latitude: number;
  longitude: number;
  time: number;
  altitude: number;
}
export interface Options {
  minDuration: number;
  minSpeed: number;
  manual: Conditions;
  weather: WeatherMatch[];
}
export const defaultOptions: Options = {
  minDuration: 60,
  minSpeed: 40,
  manual: { source: 'manual' },
  weather: [],
};
export function windVector(speed: number, from: number) {
  return {
    east: -speed * Math.sin(radians(from)),
    north: -speed * Math.cos(radians(from)),
  };
}
export function windTas(
  gs: number,
  track: number,
  speed: number,
  from: number
) {
  const wind = windVector(speed, from);
  const east = gs * Math.sin(radians(track)) - wind.east,
    north = gs * Math.cos(radians(track)) - wind.north;
  return {
    tas: Math.hypot(east, north),
    groundEast: gs * Math.sin(radians(track)),
    groundNorth: gs * Math.cos(radians(track)),
    windEast: wind.east,
    windNorth: wind.north,
    east,
    north,
  };
}
export const isaPressure = (feet: number) =>
  101325 * (1 - (0.0065 * feet * 0.3048) / 288.15) ** 5.25588;
export const altitudeFromPressure = (p: number) =>
  ((288.15 / 0.0065) * (1 - (p / 101325) ** (1 / 5.25588))) / 0.3048;
export function airDataTas(cas: number, pressure: number, oat: number) {
  const qc =
    101325 * ((1 + 0.2 * ((cas * 0.514444) / 340.294) ** 2) ** 3.5 - 1);
  const mach = Math.sqrt(5 * ((1 + qc / pressure) ** (2 / 7) - 1));
  return (mach * Math.sqrt(1.4 * 287.05287 * (oat + 273.15))) / 0.514444;
}
export interface Derived {
  tas?: number;
  method?: string;
  conditions: Conditions;
  pressure?: number;
  densityAltitude?: number;
}
export function derive(s: Sample, fallback: Conditions): Derived {
  const conditions: Conditions = {
    source: fallback.source,
    windSpeed: s.windSpeed ?? fallback.windSpeed,
    windDirection: s.windDirection ?? fallback.windDirection,
    oat: s.oat ?? fallback.oat,
    pressure: s.pressure ?? fallback.pressure,
  };
  // Wind speed and direction must come from the same source; never combine a partial CSV pair with a model pair.
  if (s.windSpeed != null && (s.windDirection != null || s.windSpeed === 0)) {
    conditions.windSpeed = s.windSpeed;
    conditions.windDirection = s.windDirection ?? 0;
  } else {
    conditions.windSpeed = fallback.windSpeed;
    conditions.windDirection = fallback.windDirection;
  }
  const p =
    s.pressure ??
    (s.pressureAltitude != null && s.pressureAltitude <= 36000
      ? isaPressure(s.pressureAltitude)
      : conditions.pressure);
  let tas: number | undefined, method: string | undefined;
  if (s.tas != null && s.tas > 0) {
    tas = s.tas;
    method = 'Recorded TAS';
  } else if (
    s.gs != null &&
    s.track != null &&
    conditions.windSpeed != null &&
    (conditions.windDirection != null || conditions.windSpeed === 0)
  ) {
    tas = windTas(
      s.gs,
      s.track,
      conditions.windSpeed,
      conditions.windDirection ?? 0
    ).tas;
    method = `GPS + ${s.windSpeed != null && (s.windDirection != null || s.windSpeed === 0) ? 'CSV' : fallback.source} wind`;
  } else if (
    (s.cas ?? s.ias) != null &&
    p != null &&
    conditions.oat != null &&
    (s.cas ?? s.ias)! < 300
  ) {
    tas = airDataTas(s.cas ?? s.ias!, p, conditions.oat);
    method = s.cas != null ? 'CAS + atmosphere' : 'IAS ≈ CAS + atmosphere';
  }
  let densityAltitude: number | undefined;
  if (p != null && conditions.oat != null) {
    const rho = p / (287.05287 * (conditions.oat + 273.15));
    densityAltitude =
      ((288.15 / 0.0065) * (1 - (rho / 1.225) ** (1 / 4.25588))) / 0.3048;
  }
  return { tas, method, conditions, pressure: p, densityAltitude };
}
export function regression(samples: Sample[]) {
  const start = samples[0].t,
    xs = samples.map((s) => s.t - start),
    ys = samples.map((s) => s.altitude);
  const xbar = mean(xs),
    ybar = mean(ys),
    denom = xs.reduce((n, x) => n + (x - xbar) ** 2, 0);
  const slope = denom
    ? xs.reduce((n, x, i) => n + (x - xbar) * (ys[i] - ybar), 0) / denom
    : 0;
  const sse = xs.reduce(
      (n, x, i) => n + (ys[i] - (ybar + slope * (x - xbar))) ** 2,
      0
    ),
    sst = ys.reduce((n, y) => n + (y - ybar) ** 2, 0);
  return {
    rate: slope * 60,
    residual: Math.sqrt(sse / samples.length),
    r2: sst ? Math.max(0, 1 - sse / sst) : 1,
    xbar,
    ybar,
    numerator: xs.reduce((n, x, i) => n + (x - xbar) * (ys[i] - ybar), 0),
    denominator: denom,
  };
}
export function weighted(
  samples: Sample[],
  values: (number | undefined)[],
  maxGap: number
) {
  let integral = 0,
    duration = 0;
  const total = samples.at(-1)!.t - samples[0].t;
  for (let i = 1; i < samples.length; i++) {
    const dt = samples[i].t - samples[i - 1].t;
    if (values[i] != null && values[i - 1] != null && dt <= maxGap) {
      integral += ((values[i]! + values[i - 1]!) / 2) * dt;
      duration += dt;
    }
  }
  return {
    value:
      duration && duration / total >= 0.9 ? integral / duration : undefined,
    coverage: total ? duration / total : 0,
    integral,
    duration,
  };
}
export interface Segment {
  id: string;
  kind: 'cruise' | 'climb' | 'excluded';
  reason: string[];
  cautions: string[];
  samples: Sample[];
  start: number;
  end: number;
  duration: number;
  altitude: number;
  pressureAltitude?: number;
  densityAltitude?: number;
  rate: number;
  fit: ReturnType<typeof regression>;
  tas?: number;
  gs?: number;
  fuel?: number;
  fuelUsed?: number;
  efficiency?: number;
  oat?: number;
  rpm?: number;
  map?: number;
  methods: string[];
  derived: Derived[];
  tasCoverage: number;
  fuelCoverage: number;
  conditions: Conditions;
}
export function analyze(samples: Sample[], options: Options): Segment[] {
  if (samples.length < 3) return [];
  const cadence = median(samples.slice(1).map((s, i) => s.t - samples[i].t));
  const maxGap = Math.max(15, cadence * 4);
  const blocks: Sample[][] = [];
  let block: Sample[] = [];
  const target = Math.max(120, options.minDuration);
  for (const s of samples) {
    if (block.length && s.t - block.at(-1)!.t > maxGap) {
      blocks.push(block);
      block = [];
    }
    block.push(s);
    if (s.t - block[0].t >= target) {
      blocks.push(block);
      block = [s];
    }
  }
  if (block.length > 1) blocks.push(block);
  return blocks.map((ss, i) => {
    const id = `S${String(i + 1).padStart(2, '0')}`,
      start = ss[0].t,
      end = ss.at(-1)!.t,
      duration = end - start;
    const fit = regression(ss),
      reason: string[] = [],
      cautions: string[] = [];
    const gs = weighted(
      ss,
      ss.map((s) => s.gs),
      maxGap
    );
    const flightSpeed = weighted(
      ss,
      ss.map((s) => s.gs ?? s.ias ?? s.cas ?? s.tas),
      maxGap
    );
    if (duration < options.minDuration || ss.length < 6)
      reason.push(`Too short: need ${options.minDuration} s and 6 samples.`);
    if (cadence > 30)
      reason.push('Sampling interval exceeds 30 s; insufficient resolution.');
    if (flightSpeed.value == null || flightSpeed.value < options.minSpeed)
      reason.push(`Flight speed missing or below ${options.minSpeed} kt.`);
    if (gs.value == null && flightSpeed.value != null)
      cautions.push(
        'Flight detection uses recorded airspeed because groundspeed is unavailable.'
      );
    const speeds = ss
      .map((s) => s.gs ?? s.ias ?? s.cas ?? s.tas)
      .filter((v): v is number => v != null);
    if (
      speeds.length &&
      Math.max(...speeds) - Math.min(...speeds) >
        Math.max(10, (flightSpeed.value ?? 0) * 0.12)
    )
      reason.push('Speed varies too much for steady performance.');
    const tracks = ss.map((s) => s.track).filter((v): v is number => v != null);
    if (tracks.length >= ss.length * 0.9) {
      if (
        Math.max(
          ...tracks.map((v) => Math.abs(angleDifference(v, tracks[0])))
        ) > 12
      )
        reason.push('Turning: track varies by more than 12°.');
    } else
      cautions.push(
        'Track coverage is incomplete; straight flight cannot be fully checked.'
      );
    for (const key of ['rpm', 'map', 'fuel'] as const) {
      const values = ss
        .map((s) => s[key])
        .filter((v): v is number => v != null);
      if (
        values.length >= ss.length * 0.9 &&
        mean(values) > 0 &&
        (Math.max(...values) - Math.min(...values)) / mean(values) > 0.1
      )
        reason.push(
          `${key === 'map' ? 'Manifold pressure' : key === 'rpm' ? 'RPM' : 'Fuel flow'} varies by more than 10%.`
        );
    }
    if (!ss.some((s) => s.rpm != null || s.map != null))
      cautions.push(
        'Engine power is unverified; compare only known matching power settings.'
      );
    if (ss.some((s) => s.verticalError != null && s.verticalError > 50))
      reason.push('GPS reports vertical error greater than 50 m.');
    let kind: Segment['kind'] = 'excluded';
    if (
      Math.abs(fit.rate) <= 100 &&
      Math.max(...ss.map((s) => s.altitude)) -
        Math.min(...ss.map((s) => s.altitude)) <=
        200 &&
      fit.residual <= 40
    )
      kind = 'cruise';
    else if (fit.rate >= 150 && fit.r2 >= 0.9 && fit.residual <= 80)
      kind = 'climb';
    else
      reason.push(
        fit.rate <= -150
          ? 'Descent; excluded from cruise and climb.'
          : 'Altitude trend is not steady cruise or climb.'
      );
    if (reason.length) kind = 'excluded';
    const weather = options.weather.find((w) => w.id === id);
    const conditions: Conditions = weather ?? options.manual;
    const derived = ss.map((s) => derive(s, conditions));
    const tas = weighted(
        ss,
        derived.map((d) => d.tas),
        maxGap
      ),
      fuel = weighted(
        ss,
        ss.map((s) => s.fuel),
        maxGap
      );
    const metric = (values: (number | undefined)[]) =>
      weighted(ss, values, maxGap).value;
    const methods = [
      ...new Set(derived.map((d) => d.method).filter((v): v is string => !!v)),
    ];
    if (tas.value == null)
      cautions.push(
        'TAS unavailable: need recorded TAS, GPS + wind, or airspeed + pressure + OAT (90% coverage).'
      );
    if (fuel.value == null)
      cautions.push(
        'Fuel burn unavailable: need measured total fuel flow with 90% coverage.'
      );
    if (methods.some((m) => /model|manual|IAS ≈/.test(m)))
      cautions.push(
        'TAS includes estimated conditions or uncalibrated IAS; validate against measured data.'
      );
    return {
      id,
      kind,
      reason,
      cautions,
      samples: ss,
      start,
      end,
      duration,
      altitude:
        metric(ss.map((s) => s.altitude)) ?? mean(ss.map((s) => s.altitude)),
      pressureAltitude: metric(
        derived.map((d) =>
          d.pressure != null ? altitudeFromPressure(d.pressure) : undefined
        )
      ),
      densityAltitude: metric(derived.map((d) => d.densityAltitude)),
      rate: fit.rate,
      fit,
      tas: tas.value,
      gs: gs.value,
      fuel: fuel.value,
      fuelUsed: fuel.value != null ? fuel.integral / 3600 : undefined,
      efficiency:
        tas.value != null && fuel.value! > 0
          ? tas.value / fuel.value!
          : undefined,
      oat: metric(derived.map((d) => d.conditions.oat)),
      rpm: metric(ss.map((s) => s.rpm)),
      map: metric(ss.map((s) => s.map)),
      methods,
      derived,
      tasCoverage: tas.coverage,
      fuelCoverage: fuel.coverage,
      conditions,
    };
  });
}
export function summary(
  segments: Segment[],
  key: 'tas' | 'fuel' | 'rate',
  kind: 'cruise' | 'climb'
) {
  const valid = segments.filter((s) => s.kind === kind && s[key] != null);
  const duration = valid.reduce((n, s) => n + s.duration, 0);
  return duration
    ? valid.reduce((n, s) => n + s[key]! * s.duration, 0) / duration
    : undefined;
}
export function sampleCsv(gpsOnly = false) {
  const headers = gpsOnly
    ? 'timestamp,altitude (ft),groundspeed (kt),track (deg),latitude,longitude'
    : 'timestamp,altitude (ft),pressure altitude (ft),groundspeed (kt),track (deg),TAS (kt),OAT (C),fuel flow (gph),RPM,wind speed (kt),wind direction (deg),latitude,longitude';
  const lines = [headers];
  for (let t = 0; t <= 1800; t += 5) {
    let alt: number,
      gs: number,
      tas: number,
      track = 45,
      fuel = 8.3,
      rpm = 2400;
    if (t < 120) {
      alt = 350;
      gs = t / 4;
      tas = gs;
      fuel = 3;
      rpm = 1000;
    } else if (t < 600) {
      alt = 350 + (t - 120) * 9;
      tas = 83;
      gs = 75;
      fuel = 10.4;
      rpm = 2650;
    } else if (t < 1080) {
      alt = 4670 + Math.sin(t / 24) * 8;
      tas = 112;
      gs = 104;
    } else if (t < 1200) {
      alt = 4670 + (t - 1080) * 7;
      tas = 90;
      gs = 82;
      track = 45 + (t - 1080) / 2;
      fuel = 10;
      rpm = 2650;
    } else if (t < 1560) {
      alt = 5510 + Math.sin(t / 24) * 8;
      tas = 116;
      gs = 108;
      fuel = 8.8;
      rpm = 2450;
    } else {
      alt = 5510 - (t - 1560) * 12;
      tas = 110;
      gs = 102;
      fuel = 5;
      rpm = 1800;
    }
    const timestamp = new Date(
      Date.UTC(2026, 8, 15, 18) + t * 1000
    ).toISOString();
    const common = [timestamp, alt.toFixed(1)];
    lines.push(
      (gpsOnly
        ? [
            ...common,
            gs.toFixed(1),
            track.toFixed(1),
            47.45 + t / 150000,
            -122.31 + t / 150000,
          ]
        : [
            ...common,
            (alt - 80).toFixed(1),
            gs.toFixed(1),
            track.toFixed(1),
            tas.toFixed(1),
            (15 - alt * 0.002).toFixed(1),
            fuel,
            rpm,
            12,
            45,
            47.45 + t / 150000,
            -122.31 + t / 150000,
          ]
      ).join(',')
    );
  }
  return lines.join('\n');
}
