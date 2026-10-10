import { useMemo, useRef, useState } from 'react';
import FlightPlane, { PlaneMark } from './FlightPlane';
import { Appearance, useFlightAppearance } from './Appearance';
import { InfoTip } from './InfoTip';
import {
  analyze,
  compareClimbRates,
  defaultOptions,
  defaultUnits,
  fields,
  normalize,
  parseCsv,
  sampleCsv,
  summary,
  windTas,
  type Conditions,
  type Csv,
  type Field,
  type Mapping,
  type Segment,
  type Units,
  type WeatherMatch,
} from '~/flight/model';
import {
  elapsed,
  FlightTimeline,
  fmt,
  PerformanceChart,
} from './PerformanceChart';
const optionalNumber = (s: string) =>
  s.trim() !== '' && Number.isFinite(Number(s)) ? Number(s) : undefined;
function download(name: string, content: string) {
  const url = URL.createObjectURL(
    new Blob([content], { type: 'text/csv;charset=utf-8' })
  );
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const csvCell = (v: unknown) => {
  const value = String(v ?? '');
  const safe =
    typeof v === 'string' ? value.replace(/^[=+@\-\t\r]/, "'$&") : value;
  return `"${safe.replace(/"/g, '""')}"`;
};
function exportSegments(
  segments: Segment[],
  aircraft: string,
  weight: string,
  configuration: string
) {
  const headers = [
    'aircraft',
    'reported_weight_lb',
    'reported_configuration',
    'segment',
    'phase',
    'flight_stability',
    'accepted',
    'start_time',
    'end_time',
    'duration_s',
    'recorded_altitude_ft',
    'pressure_altitude_ft',
    'density_altitude_ft',
    'groundspeed_kt',
    'TAS_kt',
    'climb_rate_fpm',
    'endpoint_climb_rate_fpm',
    'fuel_flow_US_gph',
    'fuel_used_US_gal',
    'still_air_nm_per_US_gal',
    'OAT_C',
    'RPM',
    'manifold_pressure_as_recorded',
    'TAS_method',
    'TAS_coverage',
    'fuel_coverage',
    'weather_source',
    'wind_from_true_deg',
    'wind_kt',
    'weather_OAT_C',
    'static_pressure_Pa',
    'quality_notes',
  ];
  const rows = segments.map((s) => [
    aircraft,
    weight,
    configuration,
    s.id,
    s.kind,
    s.quality,
    s.kind !== 'excluded',
    s.samples[0].absolute ? new Date(s.start * 1000).toISOString() : s.start,
    s.samples[0].absolute ? new Date(s.end * 1000).toISOString() : s.end,
    s.duration,
    s.altitude,
    s.pressureAltitude,
    s.densityAltitude,
    s.gs,
    s.tas,
    s.rate,
    compareClimbRates(s.samples)?.endpoint,
    s.fuel,
    s.fuelUsed,
    s.efficiency,
    s.oat,
    s.rpm,
    s.map,
    s.methods.join('; '),
    s.tasCoverage,
    s.fuelCoverage,
    s.conditions.source,
    s.conditions.windDirection,
    s.conditions.windSpeed,
    s.conditions.oat,
    s.conditions.pressure,
    [...s.reason, ...s.cautions].join('; '),
  ]);
  download(
    'flight-performance-segments.csv',
    [headers, ...rows].map((r) => r.map(csvCell).join(',')).join('\n')
  );
}
function NumericInput({
  label,
  value,
  set,
  unit,
  min,
  max,
  step = 'any',
  describedBy,
}: {
  label: string;
  value: string | number;
  set: (v: string) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: string;
  describedBy?: string;
}) {
  return (
    <label className='fp-field'>
      <span>{label}</span>
      <div className='fp-input-unit'>
        <input
          type='number'
          aria-label={label}
          aria-describedby={describedBy}
          value={value}
          onChange={(e) => set(e.target.value)}
          min={min}
          max={max}
          step={step}
        />
        {unit && <span>{unit}</span>}
      </div>
    </label>
  );
}
export default function FlightPerformance() {
  const appearance = useFlightAppearance();
  const [csv, setCsv] = useState<Csv>();
  const [name, setName] = useState('');
  const [demo, setDemo] = useState(false);
  const [mapping, setMapping] = useState<Mapping>({});
  const [units, setUnits] = useState<Units>(defaultUnits);
  const [aircraft, setAircraft] = useState('Cessna 152'),
    [weight, setWeight] = useState(''),
    [configuration, setConfiguration] = useState('');
  const [offset, setOffset] = useState('0'),
    [magnetic, setMagnetic] = useState(false),
    [variation, setVariation] = useState('0');
  const [windSpeed, setWindSpeed] = useState(''),
    [windDirection, setWindDirection] = useState(''),
    [oat, setOat] = useState('');
  const [minDuration, setMinDuration] = useState(60),
    [minSpeed, setMinSpeed] = useState(40);
  const [weather, setWeather] = useState<WeatherMatch[]>([]),
    [weatherStatus, setWeatherStatus] = useState(''),
    [busy, setBusy] = useState(false);
  const [error, setError] = useState(''),
    [selected, setSelected] = useState(''),
    [showExcluded, setShowExcluded] = useState(false);
  const [altitudeAxis, setAltitudeAxis] = useState<
    'altitude' | 'pressureAltitude' | 'densityAltitude'
  >('altitude');
  const revision = useRef(0),
    input = useRef<HTMLInputElement>(null);
  function invalidate() {
    revision.current++;
    setWeather([]);
    setWeatherStatus('');
  }
  function load(text: string, fileName: string, isDemo = false) {
    try {
      const parsed = parseCsv(text);
      invalidate();
      setCsv(parsed);
      setName(fileName);
      setMapping(parsed.mapping);
      setUnits(parsed.units);
      setDemo(isDemo);
      setError('');
      setSelected('');
      setWindSpeed('');
      setWindDirection('');
      setOat('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'This file could not be read.');
    }
  }
  async function readFile(file: File | undefined) {
    if (!file) return;
    if (file.size > 15_000_000) {
      setError(
        'Choose a CSV under 15 MB. Split long logs into individual flights.'
      );
      return;
    }
    try {
      load(await file.text(), file.name);
    } catch {
      setError('This file could not be read. Choose it again.');
    }
  }
  const normalized = useMemo(
    () =>
      csv
        ? normalize(
            csv,
            mapping,
            units,
            Number(offset) || 0,
            magnetic,
            Number(variation) || 0
          )
        : { samples: [], notes: [] },
    [csv, mapping, units, offset, magnetic, variation]
  );
  const manual: Conditions = useMemo(
    () => ({
      source: 'manual',
      windSpeed: optionalNumber(windSpeed),
      windDirection: optionalNumber(windDirection),
      oat: optionalNumber(oat),
    }),
    [windSpeed, windDirection, oat]
  );
  const invalidConditions =
    (manual.windSpeed != null &&
      (manual.windSpeed < 0 || manual.windSpeed > 200)) ||
    (manual.windDirection != null &&
      (manual.windDirection < 0 || manual.windDirection > 360)) ||
    (manual.oat != null && (manual.oat < -90 || manual.oat > 60));
  const segments = useMemo(
    () =>
      analyze(normalized.samples, {
        minDuration,
        minSpeed,
        manual: invalidConditions ? { source: 'manual' } : manual,
        weather,
      }),
    [normalized, minDuration, minSpeed, manual, weather, invalidConditions]
  );
  const accepted = segments.filter((s) => s.kind !== 'excluded'),
    cruise = accepted.filter((s) => s.kind === 'cruise'),
    climb = accepted.filter((s) => s.kind === 'climb');
  const active = segments.find((s) => s.id === selected) ?? accepted[0];
  const start = normalized.samples[0]?.t ?? 0;
  const axisLabel = {
    altitude: 'Recorded altitude · ft',
    pressureAltitude: 'Pressure altitude · ft',
    densityAltitude: 'Density altitude · ft',
  }[altitudeAxis];
  const points = (
    list: Segment[],
    x: 'tas' | 'rate' | 'fuel' | 'gs',
    y: 'tas' | 'fuel' | 'altitude' | 'pressureAltitude' | 'densityAltitude'
  ) =>
    list
      .filter((s) => s[x] != null && s[y] != null)
      .map((s) => ({ x: s[x]!, y: s[y]!, segment: s }));
  async function fetchWeather() {
    const eligible = accepted.filter(
      (s) =>
        s.samples.every((p) => p.absolute) &&
        s.samples.some((p) => p.latitude != null && p.longitude != null)
    );
    const picks =
      eligible.length > 12
        ? Array.from(
            { length: 12 },
            (_, i) => eligible[Math.round((i * (eligible.length - 1)) / 11)]
          )
        : eligible;
    if (!picks.length) {
      setWeatherStatus(
        'Historical winds need a full date / timestamp and GPS coordinates in accepted segments. Use manual winds aloft instead.'
      );
      return;
    }
    const points = picks.map((s) => {
      const p = s.samples.filter(
        (p) => p.latitude != null && p.longitude != null
      );
      const mid = p[Math.floor(p.length / 2)];
      return {
        id: s.id,
        latitude: mid.latitude,
        longitude: mid.longitude,
        time: mid.t,
        altitude: mid.altitude,
      };
    });
    const version = revision.current;
    setBusy(true);
    setWeatherStatus(
      'Matching the flight time and altitude to historical winds aloft…'
    );
    try {
      const res = await fetch('/flight-performance/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ points }),
        signal: AbortSignal.timeout(90000),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Weather lookup failed.');
      if (version !== revision.current) return;
      setWeather(data.matches);
      setWeatherStatus(
        `${data.matches.length} of ${accepted.length} accepted segments matched. ${data.provider} ${data.errors?.join(' ') ?? ''} ${eligible.length > 12 ? 'Up to 12 segments spread across the flight are matched per lookup; unmatched windows use CSV or manual conditions.' : ''}`
      );
    } catch (e) {
      if (version === revision.current)
        setWeatherStatus(
          e instanceof Error
            ? e.message
            : 'Weather lookup failed. Use manual conditions or try again.'
        );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div
      className='flight-app'
      data-theme={appearance.theme}
      data-motion={appearance.animated ? 'on' : 'off'}
    >
      <header className='fp-header'>
        <a href='/flight-performance/' className='fp-brand'>
          <PlaneMark />
          <span>
            FLIGHT NOTES<small>the performance notebook</small>
          </span>
        </a>
        <nav aria-label='Flight tool'>
          <a href='#analysis'>Analysis</a>
          <a href='#method'>The math</a>
          <a href='/' className='fp-home'>
            Dom’s notebook ↗
          </a>
        </nav>
        <Appearance {...appearance} />
      </header>
      <main className='fp-shell'>
        <section className='fp-hero'>
          <div>
            <p className='fp-eyebrow'>
              FIELD NOTES / 01 — AIRCRAFT PERFORMANCE
            </p>
            <h1>
              Know your
              <br />
              <em>airplane.</em>
            </h1>
            <p className='fp-lead'>
              A flight log, a little weather, and the numbers behind the way you
              fly.
            </p>
          </div>
          <FlightPlane motion={appearance.animated} phase={active?.kind} />
        </section>
        <div className='fp-workspace' id='analysis'>
          <aside className='fp-controls' aria-label='Flight analysis settings'>
            <section className='fp-panel fp-upload'>
              <div className='fp-section-heading'>
                <span>01</span>
                <h2>Bring a flight</h2>
              </div>
              <div
                className='fp-drop'
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  void readFile(e.dataTransfer.files[0]);
                }}
              >
                <span className='fp-upload-icon' aria-hidden='true'>
                  ↥
                </span>
                <p>
                  {csv
                    ? 'Choose another flight log'
                    : 'Your flight starts here'}
                </p>
                <button
                  className='fp-button'
                  onClick={() => input.current?.click()}
                >
                  Upload CSV <span>↗</span>
                </button>
                <input
                  ref={input}
                  type='file'
                  accept='.csv,.tsv,text/csv,text/tab-separated-values'
                  className='fp-file'
                  aria-label='Upload flight CSV'
                  onChange={(e) => {
                    void readFile(e.target.files?.[0]);
                    e.target.value = '';
                  }}
                />
                <small>or drop a file · up to 15 MB</small>
              </div>
              <p className='fp-small'>
                Your CSV stays in this browser. Weather lookup shares only
                selected coordinates, flight times, and altitudes.
              </p>
              <div className='fp-demo-buttons'>
                <button
                  onClick={() =>
                    load(sampleCsv(true), 'GPS-only example.csv', true)
                  }
                >
                  Try a GPS-only example ↗
                </button>
                <button
                  onClick={() =>
                    load(sampleCsv(), 'Instrument-log example.csv', true)
                  }
                >
                  Try an instrument log ↗
                </button>
              </div>
              {error && (
                <p className='fp-error' role='alert'>
                  {error}
                </p>
              )}
              {csv && (
                <div className='fp-file-info'>
                  <strong>{name}</strong>
                  <span>
                    {csv.rows.length.toLocaleString()} data rows ·{' '}
                    {csv.headers.length} columns
                    {demo ? ' · illustrative data' : ''}
                  </span>
                  <button
                    onClick={() => {
                      invalidate();
                      setCsv(undefined);
                      setName('');
                      setError('');
                    }}
                  >
                    Clear flight ×
                  </button>
                </div>
              )}
            </section>
            <section className='fp-panel'>
              <div className='fp-section-heading'>
                <span>02</span>
                <h2>Set the context</h2>
              </div>
              <label className='fp-field'>
                <span>Aircraft</span>
                <input
                  value={aircraft}
                  onChange={(e) => setAircraft(e.target.value)}
                  placeholder='e.g. Cessna 152'
                />
              </label>
              <div className='fp-fields-pair'>
                <NumericInput
                  label='Flight weight'
                  value={weight}
                  set={setWeight}
                  unit='lb'
                  min={0}
                />
                <NumericInput
                  label='Minimum segment length'
                  value={minDuration}
                  set={(v) => {
                    invalidate();
                    setMinDuration(
                      Math.max(30, Math.min(300, Number(v) || 60))
                    );
                  }}
                  unit='s'
                  min={30}
                  max={300}
                  describedBy='fp-window-help'
                />
              </div>
              <p className='fp-small fp-window-help' id='fp-window-help'>
                The shortest stretch of flight data a segment needs before it
                can be used: {minDuration} seconds. We normally examine{' '}
                {Math.max(120, minDuration)}-second windows, with at least 6
                samples, and check for steady cruise or a clear altitude gain in
                climb. Turning climbs remain visible with a conditions flag.
                Longer minimums may leave fewer usable segments.{' '}
                <InfoTip label='Minimum segment length'>
                  The minimum is {minDuration} seconds; target windows are{' '}
                  {Math.max(120, minDuration)} seconds. Short windows or fewer
                  than six samples are rejected. Raising this setting can miss a
                  brief climb; lowering it can expose more GPS noise.
                </InfoTip>
              </p>
              <label className='fp-field'>
                <span>Power / configuration notes</span>
                <input
                  value={configuration}
                  onChange={(e) => setConfiguration(e.target.value)}
                  placeholder='e.g. 2,400 RPM · leaned · flaps up'
                />
              </label>
              <p className='fp-small'>
                Weight and configuration annotate the report. Results are
                observed at those conditions; no power percentage or
                standard-weight correction is assumed.
              </p>
              {csv && (
                <details className='fp-details'>
                  <summary>
                    Columns & units{' '}
                    <span>{Object.keys(mapping).length} mapped</span>
                  </summary>
                  <p className='fp-small'>
                    Review inferred columns and units. Blank fields stay
                    unavailable. Fuel flow must be the total for all engines;
                    track and wind must reference true north.
                  </p>
                  <div className='fp-mapping'>
                    {(Object.keys(fields) as Field[]).map((f) => (
                      <label key={f} className='fp-field'>
                        <span>
                          {fields[f]}
                          {f === 'time' || f === 'altitude' ? ' *' : ''}
                        </span>
                        <select
                          value={mapping[f] ?? ''}
                          onChange={(e) => {
                            invalidate();
                            setMapping((m) => ({
                              ...m,
                              [f]:
                                e.target.value === ''
                                  ? undefined
                                  : Number(e.target.value),
                            }));
                          }}
                        >
                          <option value=''>Not in this file</option>
                          {csv.headers.map((h, i) => (
                            <option key={i} value={i}>
                              {h || `Column ${i + 1}`}
                            </option>
                          ))}
                        </select>
                      </label>
                    ))}
                  </div>
                  {(
                    [
                      [
                        'altitude',
                        'All altitude columns',
                        [
                          ['ft', 'Feet'],
                          ['m', 'Meters'],
                        ],
                      ],
                      [
                        'speed',
                        'All speed columns',
                        [
                          ['kt', 'Knots'],
                          ['mph', 'Miles / hour'],
                          ['kmh', 'Kilometers / hour'],
                          ['ms', 'Meters / second'],
                        ],
                      ],
                      [
                        'temperature',
                        'Temperature',
                        [
                          ['C', 'Celsius'],
                          ['F', 'Fahrenheit'],
                        ],
                      ],
                      [
                        'fuel',
                        'Fuel flow',
                        [
                          ['gph', 'US gallons / hour'],
                          ['lph', 'Liters / hour'],
                        ],
                      ],
                      [
                        'pressure',
                        'Static pressure',
                        [
                          ['hPa', 'hPa / millibars'],
                          ['Pa', 'Pascals'],
                          ['inHg', 'Inches Hg'],
                        ],
                      ],
                      [
                        'time',
                        'Time encoding',
                        [
                          ['auto', 'Auto: ISO / epoch / clock'],
                          ['seconds', 'Elapsed seconds'],
                          ['milliseconds', 'Elapsed milliseconds'],
                        ],
                      ],
                    ] as [keyof Units, string, string[][]][]
                  ).map(([key, label, options]) => (
                    <label key={key} className='fp-field'>
                      <span>{label}</span>
                      <select
                        value={units[key]}
                        onChange={(e) => {
                          invalidate();
                          setUnits((u) => ({ ...u, [key]: e.target.value }));
                        }}
                      >
                        {options.map(([v, l]) => (
                          <option key={v} value={v}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </label>
                  ))}
                  <NumericInput
                    label='UTC offset for unzoned dates'
                    value={offset}
                    set={(v) => {
                      invalidate();
                      setOffset(v);
                    }}
                    unit='hours'
                    min={-12}
                    max={14}
                  />
                  <p className='fp-small'>
                    Local time = UTC + offset. Example: PDT −7. Explicit time
                    zones and CSV UTC offsets take precedence.
                  </p>
                  <label className='fp-checkbox'>
                    <input
                      type='checkbox'
                      checked={magnetic}
                      onChange={(e) => {
                        invalidate();
                        setMagnetic(e.target.checked);
                      }}
                    />{' '}
                    Track is magnetic
                  </label>
                  {magnetic && (
                    <NumericInput
                      label='Magnetic variation (east +)'
                      value={variation}
                      set={(v) => {
                        invalidate();
                        setVariation(v);
                      }}
                      unit='°'
                      min={-180}
                      max={180}
                    />
                  )}
                  <NumericInput
                    label='Minimum flight speed'
                    value={minSpeed}
                    set={(v) => {
                      invalidate();
                      setMinSpeed(Math.max(10, Math.min(150, Number(v) || 40)));
                    }}
                    unit='kt'
                    min={10}
                    max={150}
                  />
                  <p className='fp-small'>
                    Shared unit settings apply to every mapped column of that
                    type. Convert mixed-unit columns before importing. Manifold
                    pressure is retained in the file’s units.
                  </p>
                </details>
              )}
            </section>
            <section className='fp-panel'>
              <div className='fp-section-heading'>
                <span>03</span>
                <h2>Add the atmosphere</h2>
              </div>
              <p className='fp-small'>
                Use winds at flight altitude. Recorded conditions take priority;
                model estimates fill matched windows, and manual conditions fill
                the rest.
              </p>
              <button
                className='fp-button fp-button-light'
                disabled={!accepted.length || busy}
                onClick={() => void fetchWeather()}
              >
                {busy ? 'Finding winds…' : 'Fetch historical winds aloft'}{' '}
                <span>↗</span>
              </button>
              <p className='fp-small'>
                Open-Meteo / NOAA GFS · hourly pressure levels · archived from
                March 2021. GPS altitude is used as an approximate MSL height;
                confirm the datum for your logger.
              </p>
              {weatherStatus && (
                <p
                  className='fp-weather-status'
                  role='status'
                  aria-label='Historical weather lookup'
                >
                  {weatherStatus}
                </p>
              )}
              <details
                className='fp-details'
                open={windSpeed !== '' || windDirection !== '' || oat !== ''}
              >
                <summary>Manual winds aloft & OAT</summary>
                <div className='fp-fields-pair'>
                  <NumericInput
                    label='Wind speed'
                    value={windSpeed}
                    set={setWindSpeed}
                    unit='kt'
                    min={0}
                    max={200}
                  />
                  <NumericInput
                    label='Wind FROM (true)'
                    value={windDirection}
                    set={setWindDirection}
                    unit='°'
                    min={0}
                    max={360}
                  />
                </div>
                <NumericInput
                  label='Outside air temperature'
                  value={oat}
                  set={setOat}
                  unit='°C'
                  min={-90}
                  max={60}
                />
                <p className='fp-small'>
                  Apply one set of conditions to unmatched windows. Enter 0 kt
                  explicitly for calm air. Surface wind is not a substitute for
                  winds aloft.
                </p>
              </details>
              {invalidConditions && (
                <p role='alert' className='fp-error'>
                  Check manual conditions: wind 0–200 kt, direction 0–360°, OAT
                  −90 to 60 °C.
                </p>
              )}
            </section>
          </aside>
          <div className='fp-results'>
            <div className='fp-results-heading'>
              <div>
                <p className='fp-eyebrow'>OBSERVED PERFORMANCE</p>
                <h2>
                  {csv
                    ? aircraft || 'Your flight'
                    : 'A handbook, from your own flying.'}
                </h2>
              </div>
              <span className='fp-badge'>
                {csv
                  ? demo
                    ? 'EXAMPLE FLIGHT'
                    : 'FLIGHT LOADED'
                  : 'READY WHEN YOU ARE'}
              </span>
            </div>
            <div className='fp-metrics'>
              <Metric
                label='Cruise true airspeed'
                explanation='A duration-weighted mean of steady cruise windows with enough airspeed data. Recorded TAS takes priority, followed by GPS minus the wind vector, then instrument airspeed with pressure and temperature. Missing wind is never treated as calm. Cruise windows that turn or change speed or power are excluded.'
                value={summary(accepted, 'tas', 'cruise')}
                unit='kt'
                detail={
                  cruise.some((s) => s.tas != null)
                    ? `${cruise.filter((s) => s.tas != null).length} cruise windows · mean`
                    : 'Needs TAS or wind correction'
                }
              />
              <Metric
                label='Observed climb rate'
                explanation='Altitude versus time is fitted with the regression formula in the math overview. A clear climb needs at least 150 ft/min, R² of 0.90, and residual RMS at most 80 ft. Turning or changing speed or power flags a climb as variable conditions instead of hiding it. This mean includes those windows and is not a best-rate-of-climb claim.'
                value={summary(accepted, 'rate', 'climb')}
                unit='ft/min'
                detail={
                  climb.length
                    ? `${climb.length} climb windows · ${climb.filter((s) => s.quality === 'variable').length} with variable conditions`
                    : 'Needs a clear climb trend'
                }
              />
              <Metric
                label='Cruise fuel flow'
                explanation='This mean requires measured total fuel flow over at least 90% of each steady cruise window. GPS, weather and Hobbs hours cannot supply fuel flow. A full-to-full refill can give a whole-interval average; aircraft POH tables can give estimates when the power setting and conditions are known.'
                value={summary(accepted, 'fuel', 'cruise')}
                unit='US gal/h'
                decimals={1}
                detail={
                  cruise.some((s) => s.fuel != null)
                    ? 'Recorded total fuel flow'
                    : 'Needs fuel-flow measurement'
                }
              />
            </div>
            <section className='fp-panel fp-profile-panel'>
              <div className='fp-profile-heading'>
                <div>
                  <p className='fp-eyebrow'>THE FLIGHT, AT A GLANCE</p>
                  <div className='fp-chart-title'>
                    <h3>Find the useful stretches.</h3>
                    <InfoTip label='Flight profile and stability'>
                      Colored bands mark accepted cruise and climb windows. Gray
                      stretches can be ground time, descent, short windows, poor
                      GPS data, or unstable cruise. A changing ground track or
                      speed flags an otherwise clear climb as variable
                      conditions. Selecting a window shows its exact reasons and
                      math.
                    </InfoTip>
                  </div>
                </div>
                <div className='fp-legend'>
                  <span className='cruise'>Cruise</span>
                  <span className='climb'>Climb</span>
                  <span className='excluded'>Other / excluded</span>
                </div>
              </div>
              {normalized.samples.length > 1 ? (
                <>
                  <FlightTimeline
                    samples={normalized.samples}
                    segments={segments}
                    selected={active?.id}
                    onSelect={setSelected}
                  />
                  <div className='fp-profile-stats'>
                    <span>
                      <strong>
                        {fmt((normalized.samples.at(-1)!.t - start) / 60, 1)}
                      </strong>{' '}
                      min in log
                    </span>
                    <span>
                      <strong>{accepted.length}</strong> accepted windows
                    </span>
                    <span>
                      <strong>{segments.length - accepted.length}</strong>{' '}
                      excluded windows
                    </span>
                    <span>
                      {normalized.samples[0].absolute
                        ? `${new Date(start * 1000).toISOString().slice(0, 10)} · UTC`
                        : 'Elapsed / clock-only log'}
                    </span>
                  </div>
                </>
              ) : (
                <div className='fp-profile-empty'>
                  <PlaneMark />
                  <p>
                    Upload a flight or try an example.
                    <br />
                    We’ll find the climbs and quiet stretches of cruise.
                  </p>
                </div>
              )}
              {csv && (
                <details className='fp-details'>
                  <summary>Import & quality notes</summary>
                  <ul>
                    {[...csv.notes, ...normalized.notes].map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                  <p>
                    GPS altitude can be noisy. Climb rate is the recorded
                    altitude trend; vertical air movement is not removed. Winds
                    do not establish aircraft power, weight, mixture, or
                    configuration.
                  </p>
                </details>
              )}
            </section>
            <div className='fp-chart-heading'>
              <div>
                <p className='fp-eyebrow'>PERFORMANCE PLATES</p>
                <h3>The shape of your flight.</h3>
              </div>
              <div className='fp-altitude-controls'>
                <label className='fp-axis-select'>
                  Altitude axis
                  <select
                    aria-label='Chart altitude axis'
                    value={altitudeAxis}
                    onChange={(e) =>
                      setAltitudeAxis(e.target.value as typeof altitudeAxis)
                    }
                  >
                    <option value='altitude'>Recorded altitude</option>
                    <option value='pressureAltitude'>Pressure altitude</option>
                    <option value='densityAltitude'>Density altitude</option>
                  </select>
                </label>
                <InfoTip label='Altitude axis'>
                  Recorded altitude uses the file’s altitude, often GPS height.
                  Pressure altitude needs static pressure or a mapped
                  pressure-altitude field. Density altitude also needs
                  temperature. A missing atmospheric value hides that point on
                  that axis; GPS height is not silently substituted.
                </InfoTip>
              </div>
            </div>
            <div className='fp-charts'>
              <PerformanceChart
                title='Cruise performance'
                number='01'
                xLabel='True airspeed · kt'
                yLabel={axisLabel}
                points={points(cruise, 'tas', altitudeAxis)}
                selected={active?.id}
                onSelect={setSelected}
                empty='Cruise TAS appears when you add wind data or upload an instrument log with TAS.'
                explanation='Each point is one steady cruise window, with true airspeed on the horizontal axis and its mean altitude on the vertical axis. Turns, excessive speed variation, or changing recorded power exclude cruise windows. TAS needs an instrument value or sufficient wind/atmospheric inputs. Different power, weight, and temperature can shift points; this is an observed comparison, not a fitted POH curve.'
              />
              <PerformanceChart
                title='Rate of climb'
                number='02'
                xLabel='Climb rate · ft/min'
                yLabel={axisLabel}
                points={points(climb, 'rate', altitudeAxis)}
                selected={active?.id}
                onSelect={setSelected}
                empty='Climbs with a clear altitude trend appear here. Pressure and density altitude need atmospheric data.'
                explanation='Each point shows the full-window altitude/time regression in ft/min at the window’s mean altitude. Hollow points are clear climbs with turning, speed variation, or changing recorded power. They remain useful observations, but do not establish steady climb performance. Poor altitude fits or excessive recorded GPS error are still excluded. Select a point to compare regression, altitude gain/time, and rolling rates.'
              />
              <PerformanceChart
                title='Cruise fuel economy'
                number='03'
                xLabel='True airspeed · kt'
                yLabel='Total fuel flow · US gal/h'
                points={points(cruise, 'tas', 'fuel')}
                selected={active?.id}
                onSelect={setSelected}
                empty='This chart needs both TAS and a measured total fuel-flow column. GPS alone cannot provide fuel burn.'
                explanation='Each point pairs time-weighted true airspeed with measured total fuel flow from the same steady cruise window. Both need at least 90% time coverage. No fuel-flow column means no point; zero is not substituted. Still-air economy is TAS divided by fuel flow, in nautical miles per US gallon. Refill averages and POH estimates describe different evidence and are not plotted as sensor measurements.'
              />
              <PerformanceChart
                title='Speed over the ground'
                number='04'
                xLabel='Groundspeed · kt'
                yLabel={axisLabel}
                points={points(cruise, 'gs', altitudeAxis)}
                selected={active?.id}
                onSelect={setSelected}
                empty='Accepted level cruise appears here directly from GPS, before wind correction.'
                explanation='Groundspeed measures travel over the earth, before wind correction. A tailwind can raise it and a headwind can lower it without an engine-performance change. Points use steady cruise windows and the selected altitude axis. Compare this graph with cruise TAS to understand the wind effect; groundspeed is not interchangeable with airspeed.'
              />
            </div>
            <p className='fp-observation-note'>
              Observed flight data, presented in a handbook-style grid. Points
              retain their actual conditions; no curves are extrapolated. Use
              the aircraft’s approved POH for flight planning and operating
              limits.
            </p>
            {csv && (
              <section className='fp-panel fp-segments'>
                <div className='fp-profile-heading'>
                  <div>
                    <p className='fp-eyebrow'>THE EVIDENCE</p>
                    <h3>Pick a segment. Follow the numbers.</h3>
                  </div>
                  <label className='fp-checkbox'>
                    <input
                      type='checkbox'
                      checked={showExcluded}
                      onChange={(e) => setShowExcluded(e.target.checked)}
                    />{' '}
                    Show excluded
                  </label>
                </div>
                {segments.length ? (
                  <div className='fp-table-scroll'>
                    <table>
                      <thead>
                        <tr>
                          <th>Segment / phase</th>
                          <th>Elapsed</th>
                          <th>Altitude</th>
                          <th>TAS</th>
                          <th>Climb</th>
                          <th>Fuel</th>
                          <th>
                            Basis / quality{' '}
                            <InfoTip label='Stability flags'>
                              Cruise is excluded if speed range exceeds the
                              larger of 10 kt or 12% of its mean, track changes
                              by more than 12° from its first value, or recorded
                              RPM, manifold pressure, or fuel flow varies by
                              more than 10%. In a clear climb these become
                              variable-condition flags. Missing engine data
                              means power stability is unverified.
                            </InfoTip>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(showExcluded ? segments : accepted).map((s) => (
                          <tr
                            key={s.id}
                            className={active?.id === s.id ? 'active' : ''}
                          >
                            <td>
                              <button
                                onClick={() => setSelected(s.id)}
                                aria-pressed={active?.id === s.id}
                              >
                                <strong>{s.id}</strong>{' '}
                                <span className={`fp-phase ${s.kind}`}>
                                  {s.kind}
                                </span>
                              </button>
                            </td>
                            <td>
                              {elapsed(s.start - start)}–
                              {elapsed(s.end - start)}
                            </td>
                            <td>{fmt(s.altitude)} ft</td>
                            <td>{fmt(s.tas, 1)} kt</td>
                            <td>{fmt(s.rate)} fpm</td>
                            <td>{fmt(s.fuel, 1)}</td>
                            <td className='fp-basis'>
                              {s.kind === 'excluded'
                                ? s.reason.join(' ')
                                : s.methods.join(' / ') ||
                                  'GPS altitude / groundspeed'}
                              {s.kind !== 'excluded' && (
                                <small>
                                  {s.cautions.length
                                    ? s.quality === 'variable'
                                      ? 'Variable conditions · observed climb'
                                      : 'Conditions need review'
                                    : 'Measured inputs'}
                                </small>
                              )}
                              {!!(s.reason.length || s.cautions.length) && (
                                <InfoTip label={`${s.id} quality details`}>
                                  {[...s.reason, ...s.cautions].join(' ')}{' '}
                                  {s.quality === 'variable' &&
                                    'This climb passes the altitude-trend checks and remains in the observed mean.'}
                                </InfoTip>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className='fp-small'>
                    Map time and altitude, and provide enough samples to form a
                    window.
                  </p>
                )}
                {!!segments.length && !accepted.length && !showExcluded && (
                  <p className='fp-small'>
                    No windows meet the flight-data criteria. Show excluded
                    windows to see the reasons, then review the mapping and
                    units.
                  </p>
                )}
                <div className='fp-export'>
                  <button
                    className='fp-button fp-button-light'
                    onClick={() =>
                      exportSegments(segments, aircraft, weight, configuration)
                    }
                    disabled={!segments.length}
                  >
                    Export results CSV ↧
                  </button>
                  <button
                    className='fp-text-button'
                    onClick={() => window.print()}
                  >
                    Print / save report ↗
                  </button>
                </div>
              </section>
            )}
            <section className='fp-panel fp-method' id='method'>
              <div className='fp-section-heading'>
                <span>i</span>
                <h2>The math, in the open.</h2>
              </div>
              <p className='fp-small'>
                Every result starts with an identifiable measurement. Here’s
                what we calculate, what we check, and what remains unknown.
              </p>
              {active && <WorkedMath segment={active} start={start} />}
              <details className='fp-details' open={!active}>
                <summary>How useful flight segments are found</summary>
                <p>
                  The log is split at gaps greater than 4× the median sample
                  interval (minimum 15 s). Non-overlapping windows target{' '}
                  {Math.max(120, minDuration)} s and must contain at least 6
                  samples over {minDuration} s. Sampling slower than 30 s is
                  excluded. Adjacent windows share one endpoint; a short final
                  window is checked separately.
                </p>
                <ul>
                  <li>
                    Cruise: altitude regression slope within ±100 ft/min,
                    altitude range ≤200 ft, and residual RMS ≤40 ft.
                  </li>
                  <li>
                    Climb: slope ≥150 ft/min, R² ≥0.90, and residual RMS ≤80 ft.
                    Turns and changing speed or power are flagged as variable
                    conditions; they do not discard a clear climb trend.
                  </li>
                  <li>
                    Both: mean flight speed ≥{minSpeed} kt. Steady cruise also
                    requires speed range ≤the larger of 10 kt or 12% of the
                    mean, and track within 12° of its first value when coverage
                    permits.
                  </li>
                  <li>
                    RPM, manifold pressure, and fuel-flow ranges must each be
                    ≤10% of their mean for steady cruise when recorded with
                    sufficient coverage. GPS vertical error above 50 m excludes
                    either phase.
                  </li>
                </ul>
                <p>
                  These are candidate windows, not verified flight-test runs.
                  Without engine data, power stability remains unknown. Wind
                  shear, turbulence, GPS bias, and pilot technique can affect a
                  steady-looking section.
                </p>
                <p>
                  The observed-climb mean includes variable-condition windows.
                  These describe what happened on this flight, including
                  maneuvering; they do not establish straight-flight or
                  constant-power climb performance. Hollow chart points mark
                  these windows. Review the per-window flags before comparing
                  aircraft or flights.
                </p>
                <p>
                  Flight detection uses groundspeed first, then IAS, CAS, or
                  recorded TAS if GPS speed is unavailable. It does not treat
                  airspeed as groundspeed.
                </p>
              </details>
              <details className='fp-details'>
                <summary>Groundspeed → true airspeed</summary>
                <p>
                  For groundspeed G and true ground track θ, the ground vector
                  is Gₑ = G sin θ and Gₙ = G cos θ. A wind of speed W FROM
                  direction φ has Wₑ = −W sin φ and Wₙ = −W cos φ.
                </p>
                <div className='fp-equation'>
                  TAS = √[(Gₑ − Wₑ)² + (Gₙ − Wₙ)²]
                </div>
                <p>
                  The result is horizontal airspeed. It approximates TAS during
                  level cruise; in climbs it omits the vertical component. Wind
                  direction must be relative to true north, and a missing wind
                  is never assumed to be calm.
                </p>
              </details>
              <details className='fp-details'>
                <summary>
                  Instrument airspeed → true airspeed & density altitude
                </summary>
                <p>
                  Recorded TAS is used first, then GPS + wind, then calibrated
                  airspeed with pressure and temperature. If only IAS exists,
                  IAS ≈ CAS is explicitly marked as an approximation; instrument
                  and position errors remain unknown.
                </p>
                <div className='fp-equation'>
                  q꜀ = p₀ [(1 + 0.2 (CAS / a₀)²)³·⁵ − 1]
                  <br />M = √[5 ((1 + q꜀ / p)²⁄⁷ − 1)]
                  <br />
                  TAS = M √(1.4 R T)
                </div>
                <p>
                  Convert knots to m/s using 0.514444. p₀ = 101,325 Pa, a₀ =
                  340.294 m/s, R = 287.05287 J/(kg·K), T = OAT + 273.15 K. This
                  subsonic pitot relation is limited here to CAS / IAS below 300
                  kt.
                </p>
                <div className='fp-equation'>
                  p = 101325 (1 − 0.0065 h / 288.15)⁵·²⁵⁵⁸⁸
                  <br />ρ = p / (R T)
                  <br />
                  DA = (288.15 / 0.0065) [1 − (ρ / 1.225)¹⁄⁴·²⁵⁵⁸⁸]
                </div>
                <p>
                  h and density altitude (DA) are in meters; divide by 0.3048
                  for feet. Pressure comes from recorded static pressure,
                  recorded pressure altitude (ISA conversion), or matched model
                  pressure. GPS altitude is never treated as pressure altitude.
                  Dry air is assumed; humidity and sensor calibration are not
                  corrected.
                </p>
              </details>
              <details className='fp-details'>
                <summary>Climb, fuel burn & averaging</summary>
                <div className='fp-equation'>
                  ROC = 60 Σ[(tᵢ − t̄)(hᵢ − h̄)] / Σ[(tᵢ − t̄)²]
                  <br />
                  Endpoint ROC = 60 (h_last − h_first) / (t_last − t_first)
                  <br />
                  Fuel used = Σ[(Fᵢ + Fᵢ₊₁) / 2 × Δtᵢ] / 3600
                  <br />
                  Still-air economy = TAS / fuel flow
                </div>
                <p>
                  Time is in seconds, altitude in feet, fuel flow in US gal/h.
                  Regression fits all altitude samples. Endpoint ROC uses only
                  the first and last readings, so noise at either end can change
                  it. We also show the range and median of overlapping roughly
                  30-second regression windows to reveal variation within the
                  segment. These are comparisons of observed vertical speed, not
                  different ways to identify engine power. Fuel integration and
                  metric means use trapezoids weighted by the actual time
                  between samples; missing measurements are not interpolated
                  across gaps. At least 90% of a window’s duration must be
                  covered to report TAS or fuel flow.
                </p>
                <p>
                  Top-line means weight accepted windows by duration. Cruise TAS
                  and fuel means may cover different windows; inspect the
                  per-window data before comparing. Economy is in still-air
                  nautical miles per US gallon. GPS cannot reveal fuel flow or
                  engine power. No Vy, Vx, best-power cruise, service ceiling,
                  or aircraft-wide performance envelope is inferred from a
                  single track log.
                </p>
              </details>
              <details className='fp-details'>
                <summary>Fuel burn without a flow sensor</summary>
                <p>
                  A GPS track and weather cannot determine fuel burn. The most
                  direct alternative is to start and finish with the tanks at
                  the same verified level: gallons added to restore that level,
                  plus any fuel added in between, divided by elapsed Hobbs hours
                  gives average engine fuel burn over that interval. Hobbs
                  readings alone only measure elapsed meter time.
                </p>
                <div className='fp-equation'>
                  Average burn = refill gallons / elapsed Hobbs hours
                </div>
                <p>
                  This average includes taxi, climb, cruise, and descent; it
                  cannot identify each segment’s fuel flow. Fuel removed, leaks,
                  inconsistent fill levels, or a Hobbs meter that does not
                  follow engine running time affect the comparison.
                </p>
                <p>
                  For a segment estimate, use the aircraft’s applicable POH
                  fuel-consumption tables with known power setting, altitude,
                  temperature, and the specified mixture procedure. That is a
                  book estimate, not a measured result. This page leaves the
                  measured fuel metric blank when fuel-flow data is absent.
                </p>
              </details>
              <details className='fp-details'>
                <summary>Historical weather: source & limitations</summary>
                <p>
                  Open-Meteo’s historical forecast archive supplies NOAA GFS
                  pressure-level wind, temperature, and geopotential height. The
                  page samples each selected window near its midpoint. Up to 12
                  windows are selected evenly across the flight.
                </p>
                <p>
                  Wind is interpolated as east / north components in time and
                  height, avoiding 359° / 1° direction errors. Temperature is
                  interpolated linearly and pressure logarithmically between
                  model levels. Conditions are held constant within that short
                  window. Data outside the vertical or time coverage is rejected
                  rather than extrapolated.
                </p>
                <p>
                  Hourly models and the roughly 25 km pressure-level grid cannot
                  resolve every local gust, thermal, or terrain effect. GPS
                  WGS84 altitude and model MSL geopotential height have
                  different datums; an uncorrected height offset adds
                  uncertainty. Imported CSV measurements take priority over
                  model or manual inputs. Flight data and results are not saved
                  on the server.
                </p>
              </details>
              <div className='fp-sources'>
                <span className='fp-eyebrow'>REFERENCES</span>
                <a
                  href='https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak'
                  target='_blank'
                  rel='noreferrer'
                >
                  FAA · performance & instruments ↗
                </a>
                <a
                  href='https://www.itl.nist.gov/div898/handbook/pmd/section4/pmd431.htm'
                  target='_blank'
                  rel='noreferrer'
                >
                  NIST · least-squares regression ↗
                </a>
                <a
                  href='https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/equation-of-state/'
                  target='_blank'
                  rel='noreferrer'
                >
                  NASA · air density ↗
                </a>
                <a
                  href='https://www.grc.nasa.gov/www/k-12/airplane/isentrop.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  NASA · pitot / Mach relation ↗
                </a>
                <a
                  href='https://open-meteo.com/en/docs/historical-forecast-api'
                  target='_blank'
                  rel='noreferrer'
                >
                  Open-Meteo · archive & pressure levels ↗
                </a>
                <a
                  href='https://support.foreflight.com/hc/en-us/articles/214400218-What-format-or-units-are-displayed-within-the-Track-Log-CSV-file'
                  target='_blank'
                  rel='noreferrer'
                >
                  ForeFlight · CSV units ↗
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className='fp-footer'>
        <span>
          FLIGHT NOTES <span>·</span> A little room to work things out.
        </span>
        <a href='/'>Made in Dom’s notebook ↗</a>
      </footer>
    </div>
  );
}
function Metric({
  label,
  value,
  unit,
  detail,
  decimals = 0,
  explanation,
}: {
  label: string;
  value?: number;
  unit: string;
  detail: string;
  decimals?: number;
  explanation: string;
}) {
  return (
    <div className='fp-metric'>
      <span className='fp-metric-label'>
        <span className='fp-eyebrow'>{label}</span>
        <InfoTip label={label}>{explanation}</InfoTip>
      </span>
      <div>
        <strong>{fmt(value, decimals)}</strong>
        <span>{unit}</span>
      </div>
      <p>{detail}</p>
    </div>
  );
}
function WorkedMath({
  segment: s,
  start,
}: {
  segment: Segment;
  start: number;
}) {
  let index = Math.floor(s.samples.length / 2);
  if (s.derived[index].tas == null) {
    const valid = s.derived.findIndex((d) => d.tas != null);
    if (valid >= 0) index = valid;
  }
  const sample = s.samples[index],
    d = s.derived[index],
    c = d.conditions;
  const comparison = compareClimbRates(s.samples);
  const vector =
    sample.gs != null &&
    sample.track != null &&
    c.windSpeed != null &&
    (c.windDirection != null || c.windSpeed === 0)
      ? windTas(sample.gs, sample.track, c.windSpeed, c.windDirection ?? 0)
      : undefined;
  return (
    <div className='fp-worked'>
      <div className='fp-worked-heading'>
        <span className='fp-badge'>
          {s.id} / {s.kind.toUpperCase()}
        </span>
        <span>
          {elapsed(s.start - start)}–{elapsed(s.end - start)} ·{' '}
          {fmt(s.duration, 1)} s · {s.samples.length} samples
        </span>
      </div>
      <h3>
        {s.kind === 'excluded'
          ? 'Why this window was excluded'
          : 'This window, worked through.'}
      </h3>
      {s.kind === 'excluded' && (
        <ul className='fp-error'>
          {s.reason.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      {s.quality === 'variable' && (
        <p className='fp-quality-note'>
          <strong>Observed climb · variable conditions.</strong> The altitude
          trend supports a climb, but heading, speed, or power changed. This
          window is included in the observed-climb mean; use its flags below
          when comparing performance.
        </p>
      )}
      <div className='fp-worked-facts'>
        <span>
          Recorded altitude <strong>{fmt(s.altitude)} ft</strong>
        </span>
        <span>
          Pressure altitude <strong>{fmt(s.pressureAltitude)} ft</strong>
        </span>
        <span>
          Density altitude <strong>{fmt(s.densityAltitude)} ft</strong>
        </span>
        <span>
          OAT <strong>{fmt(s.oat, 1)} °C</strong>
        </span>
        <span>
          RPM <strong>{fmt(s.rpm)}</strong>
        </span>
        <span>
          Manifold pressure <strong>{fmt(s.map, 1)} (file units)</strong>
        </span>
      </div>
      <p>
        <strong>Rate of climb.</strong> The altitude / time regression gives 60
        × {fmt(s.fit.numerator, 1)} / {fmt(s.fit.denominator, 1)} ={' '}
        <strong>{fmt(s.rate, 1)} ft/min</strong>. Fit R² = {fmt(s.fit.r2, 3)};
        residual RMS = {fmt(s.fit.residual, 1)} ft. This is an observed climb
        rate, not a best-rate-of-climb claim.
      </p>
      {comparison && (
        <p>
          <strong>Compare climb methods.</strong> Endpoint calculation: 60 ×{' '}
          {fmt(comparison.gain, 1)} ft / {fmt(comparison.duration, 1)} s ={' '}
          <strong>{fmt(comparison.endpoint, 1)} ft/min</strong>.
          {comparison.rolling && (
            <>
              {' '}
              Roughly 30-second rolling regressions: median{' '}
              {fmt(comparison.rolling.median, 1)} ft/min, range{' '}
              {fmt(comparison.rolling.min, 1)}–{fmt(comparison.rolling.max, 1)}{' '}
              ft/min ({comparison.rolling.count} overlapping windows). The
              full-window regression above remains the reported rate.
            </>
          )}
        </p>
      )}
      <p>
        <strong>Airspeed basis.</strong>{' '}
        {s.methods.join(' / ') || 'No supported TAS inputs.'} TAS coverage:{' '}
        {fmt(s.tasCoverage * 100)}%. The segment’s time-weighted TAS is{' '}
        <strong>{fmt(s.tas, 1)} kt</strong>; groundspeed is {fmt(s.gs, 1)} kt.
      </p>
      {vector && d.method?.startsWith('GPS') && (
        <>
          <p>
            One representative sample at {elapsed(sample.t - start)}:
            groundspeed {fmt(sample.gs, 2)} kt, track {fmt(sample.track, 1)}°
            true; wind {fmt(c.windSpeed, 2)} kt FROM{' '}
            {fmt(c.windDirection ?? 0, 1)}° true. Source: {d.method}.
          </p>
          <div className='fp-equation'>
            G = ({fmt(vector.groundEast, 2)}, {fmt(vector.groundNorth, 2)}) kt
            <br />W = ({fmt(vector.windEast, 2)}, {fmt(vector.windNorth, 2)}) kt
            <br />G − W = ({fmt(vector.east, 2)}, {fmt(vector.north, 2)}) kt
            <br />
            TAS = √({fmt(vector.east, 2)}² + {fmt(vector.north, 2)}²) ={' '}
            {fmt(vector.tas, 2)} kt
          </div>
          <p className='fp-small'>
            The representative sample illustrates the vector calculation; the
            displayed segment mean uses all covered sample intervals.
          </p>
        </>
      )}
      {d.method?.includes('atmosphere') && (
        <p>
          Representative sample: {sample.cas != null ? 'CAS' : 'IAS ≈ CAS'}{' '}
          {fmt(sample.cas ?? sample.ias, 2)} kt; static pressure{' '}
          {fmt(d.pressure, 1)} Pa; OAT {fmt(c.oat, 1)} °C → TAS {fmt(d.tas, 2)}{' '}
          kt using the pitot relation below.
        </p>
      )}
      {d.method === 'Recorded TAS' && (
        <p>
          Representative sample at {elapsed(sample.t - start)}: recorded TAS{' '}
          {fmt(sample.tas, 2)} kt. The supplied avionics TAS is used directly.
        </p>
      )}
      <p>
        <strong>Fuel.</strong>{' '}
        {s.fuel != null ? (
          <>
            Time-weighted flow {fmt(s.fuel, 2)} US gal/h; trapezoid-integrated
            fuel {fmt(s.fuelUsed, 3)} US gal over the covered portion of this
            window. Still-air economy {fmt(s.efficiency, 2)} nm/US gal.
          </>
        ) : (
          'Unavailable. This window has no total fuel-flow measurement with sufficient coverage.'
        )}{' '}
        Fuel coverage: {fmt(s.fuelCoverage * 100)}%.
      </p>
      {s.cautions.length > 0 && (
        <div className='fp-cautions'>
          <strong>Keep with this result</strong>
          <ul>
            {s.cautions.map((caution) => (
              <li key={caution}>{caution}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
