import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import {
  clockTime,
  condition,
  dateKey,
  dayName,
  finite,
  percent,
  speed,
  temperature,
  type Day,
  type Hour,
  type Units,
  type Weather,
} from '~/weather/model';
import { WeatherIcon } from './WeatherArt';
import SketchArrow from '~/components/notebook/SketchArrow';
import { haptic } from '~/components/TouchFeedback';

export type ForecastSelection =
  { kind: 'hour'; hour: Hour } | { kind: 'day'; day: Day };
type Metric = 'temperature' | 'rain' | 'wind';
const nextHours = (w: Weather, now: number) =>
  w.hours.filter((h) => h.time + 3600 > now).slice(0, 24);
const nextDays = (w: Weather, now: number) =>
  w.days
    .filter((d) => dateKey(d.time, w.timezone) >= dateKey(now, w.timezone))
    .slice(0, 7);
const metricValue = (value: number | null, metric: Metric, units: Units) =>
  metric === 'temperature'
    ? temperature(value, units)
    : metric === 'rain'
      ? percent(value)
      : speed(value, units);
const hourLabel = (h: Hour, w: Weather, now: number) =>
  h.time <= now ? 'Now' : clockTime(h.time, w.timezone, true);
const hourDescription = (h: Hour, w: Weather, units: Units, now: number) =>
  `${dayName(h.time, w.timezone, now)}, ${clockTime(h.time, w.timezone)}: ${condition(h.code).label}, ${temperature(h.temperature, units)}, rain ${percent(h.rain)}, wind ${speed(h.wind, units)}`;
const dayDescription = (d: Day, w: Weather, units: Units, now: number) =>
  `${dayName(d.time, w.timezone, now)}: ${condition(d.code).label}, high ${temperature(d.high, units)}, low ${temperature(d.low, units)}, rain ${percent(d.rain)}`;

function PageArrow({
  forward,
  disabled,
  onClick,
}: {
  forward?: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className='forecast-page-arrow'
      aria-label={forward ? 'Next six hours' : 'Previous six hours'}
      disabled={disabled}
      onClick={onClick}
    >
      <SketchArrow direction={forward ? 'right' : 'left'} />
    </button>
  );
}

export function ForecastStrip({
  weather: w,
  units,
  now,
  latitude,
  selected,
  onSelect,
}: {
  weather: Weather;
  units: Units;
  now: number;
  latitude: number;
  selected: ForecastSelection | null;
  onSelect: (selection: ForecastSelection | null) => void;
}) {
  const [mode, setMode] = useState<'days' | 'hours'>('days');
  const [page, setPage] = useState(0);
  const hours = nextHours(w, now);
  const days = nextDays(w, now);
  const lastPage = Math.max(0, Math.ceil(hours.length / 6) - 1);
  const safePage = Math.min(page, lastPage);
  const visible = hours.slice(safePage * 6, safePage * 6 + 6);
  useEffect(() => {
    if (selected?.kind !== 'hour') return;
    const index = hours.findIndex((h) => h.time === selected.hour.time);
    if (index >= 0) setPage(Math.floor(index / 6));
  }, [selected]);
  return (
    <section className='forecast-glance' aria-label='Forecast at a glance'>
      <div className='forecast-glance-tools'>
        <button
          className='forecast-toggle'
          data-haptic='selection'
          aria-label={
            mode === 'days' ? 'Show hourly forecast' : 'Show daily forecast'
          }
          onClick={() => setMode((m) => (m === 'days' ? 'hours' : 'days'))}
        >
          <span>{mode === 'days' ? 'The week' : 'Next hours'}</span>
          <SketchArrow direction='swap' />
        </button>
        {mode === 'hours' ? (
          <div className='forecast-pages'>
            <PageArrow
              disabled={safePage === 0}
              onClick={() => setPage(safePage - 1)}
            />
            <span className='pocket-sr' aria-live='polite'>
              Hours {safePage * 6 + 1} to{' '}
              {Math.min((safePage + 1) * 6, hours.length)}
            </span>
            <PageArrow
              forward
              disabled={safePage === lastPage}
              onClick={() => setPage(safePage + 1)}
            />
          </div>
        ) : (
          <span className='forecast-glance-hint'>tap to peek</span>
        )}
      </div>
      <div className={`forecast-glance-items ${mode}`}>
        {mode === 'days'
          ? days.map((d) => {
              const active =
                selected?.kind === 'day' && selected.day.time === d.time;
              return (
                <button
                  key={d.time}
                  data-haptic='selection'
                  aria-pressed={active}
                  aria-label={`Preview ${dayDescription(d, w, units, now)}`}
                  onClick={() =>
                    onSelect(active ? null : { kind: 'day', day: d })
                  }
                >
                  <span className='forecast-glance-time'>
                    {dayName(d.time, w.timezone, now)}
                  </span>
                  <WeatherIcon code={d.code} />
                  <strong>{temperature(d.high, units)}</strong>
                  <small>{temperature(d.low, units)}</small>
                </button>
              );
            })
          : visible.map((h) => {
              const active =
                selected?.kind === 'hour' && selected.hour.time === h.time;
              return (
                <button
                  key={h.time}
                  aria-pressed={active}
                  aria-label={`Preview ${hourDescription(h, w, units, now)}`}
                  onClick={() =>
                    onSelect(active ? null : { kind: 'hour', hour: h })
                  }
                >
                  <span className='forecast-glance-time'>
                    {hourLabel(h, w, now)}
                  </span>
                  <WeatherIcon
                    code={h.code}
                    day={h.day}
                    time={h.time}
                    latitude={latitude}
                  />
                  <strong>{temperature(h.temperature, units)}</strong>
                  <small className='forecast-glance-rain'>
                    {percent(h.rain)}
                  </small>
                </button>
              );
            })}
      </div>
      {!(mode === 'days' ? days.length : hours.length) && (
        <p className='fine-print'>Refresh to see the next forecast.</p>
      )}
    </section>
  );
}

// One plot contains the whole forecast. Touch, mouse, and keyboard all select
// the nearest real sample; missing samples break the line rather than becoming 0.
function ForecastGraph({
  values,
  lows,
  labels,
  selected,
  onSelect,
  metric,
  units,
  description,
  label,
}: {
  values: (number | null)[];
  lows?: (number | null)[];
  labels: string[];
  selected: number;
  onSelect: (index: number) => void;
  metric: Metric;
  units: Units;
  description: string;
  label: string;
}) {
  const numbers = [...values, ...(lows ?? [])].filter(finite);
  const min =
    numbers.length && metric === 'temperature'
      ? Math.floor(Math.min(...numbers) - 2)
      : 0;
  const max =
    metric === 'rain'
      ? 100
      : Math.max(
          min + 4,
          Math.ceil((numbers.length ? Math.max(...numbers) : 0) + 2)
        );
  const x = (i: number) =>
    values.length === 1 ? 300 : 14 + (i / (values.length - 1)) * 572;
  const y = (v: number) => 140 - ((v - min) / (max - min)) * 120;
  const segments = (data: (number | null)[]) => {
    const result: { x: number; y: number; i: number }[][] = [[]];
    data.forEach((v, i) => {
      if (finite(v)) result[result.length - 1].push({ x: x(i), y: y(v), i });
      else result.push([]);
    });
    return result.filter((s) => s.length);
  };
  const point = (p: { x: number; y: number }) => `${p.x},${p.y}`;
  const touchedIndex = useRef<number | null>(null);
  const pick = (e: PointerEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const position = Math.max(
      0,
      Math.min(1, (((e.clientX - box.left) / box.width) * 600 - 14) / 572)
    );
    const index = Math.round(position * (values.length - 1));
    if (index === touchedIndex.current) return;
    touchedIndex.current = index;
    if (e.pointerType === 'touch' || e.pointerType === 'pen')
      haptic('selection');
    onSelect(index);
  };
  const keys = (e: KeyboardEvent<HTMLDivElement>) => {
    const index =
      e.key === 'Home'
        ? 0
        : e.key === 'End'
          ? values.length - 1
          : ['ArrowRight', 'ArrowUp'].includes(e.key)
            ? selected + 1
            : ['ArrowLeft', 'ArrowDown'].includes(e.key)
              ? selected - 1
              : e.key === 'PageDown'
                ? selected + 6
                : e.key === 'PageUp'
                  ? selected - 6
                  : null;
    if (index === null) return;
    e.preventDefault();
    onSelect(Math.max(0, Math.min(values.length - 1, index)));
  };
  const ticks =
    values.length <= 7
      ? labels.map((text, i) => ({ text, i }))
      : [
          ...new Set(
            [0, 6, 12, 18, values.length - 1].filter((i) => i < values.length)
          ),
        ].map((i) => ({ text: labels[i], i }));
  return (
    <div className='forecast-chart'>
      <div className='forecast-axis' aria-hidden='true'>
        {[max, (max + min) / 2, min].map((value, i) => (
          <span key={i}>
            {numbers.length ? metricValue(value, metric, units) : '—'}
          </span>
        ))}
      </div>
      <div className='forecast-plot-wrap'>
        <div
          className='forecast-plot'
          role='slider'
          tabIndex={0}
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={values.length - 1}
          aria-valuenow={selected}
          aria-valuetext={description}
          onKeyDown={keys}
          onPointerDown={(e) => {
            if (e.button !== 0) return;
            e.currentTarget.focus({ preventScroll: true });
            e.currentTarget.setPointerCapture(e.pointerId);
            touchedIndex.current = null;
            pick(e);
          }}
          onPointerMove={(e) => {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) pick(e);
          }}
          onPointerUp={(e) => {
            touchedIndex.current = null;
            if (e.currentTarget.hasPointerCapture(e.pointerId))
              e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          onPointerCancel={() => {
            touchedIndex.current = null;
          }}
        >
          <svg
            viewBox='0 0 600 160'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            {[20, 80, 140].map((line) => (
              <path
                key={line}
                d={`M0 ${line}H600`}
                className='forecast-guide'
              />
            ))}
            {!lows &&
              segments(values).map((s, i) => (
                <path
                  key={`wash-${i}`}
                  d={`M${s[0].x} 140L${s.map(point).join('L')}L${s[s.length - 1].x} 140Z`}
                  className='forecast-wash'
                />
              ))}
            {lows &&
              segments(
                values.map((v, i) => (finite(v) && finite(lows[i]) ? v : null))
              ).map((s, i) => (
                <path
                  key={`range-${i}`}
                  d={`M${s.map(point).join('L')}L${[...s]
                    .reverse()
                    .map((p) => `${p.x},${y(lows[p.i]!)}`)
                    .join('L')}Z`}
                  className='forecast-wash'
                />
              ))}
            {metric === 'rain'
              ? values.map(
                  (v, i) =>
                    finite(v) && (
                      <path
                        key={i}
                        d={`M${x(i)} 140V${y(v)}`}
                        className='forecast-rain-stroke'
                      />
                    )
                )
              : segments(values).map((s, i) => (
                  <polyline
                    key={`${metric}-${i}`}
                    points={s.map(point).join(' ')}
                    className='forecast-stroke'
                    pathLength='1'
                  />
                ))}
            {lows &&
              segments(lows).map((s, i) => (
                <polyline
                  key={i}
                  points={s.map(point).join(' ')}
                  className='forecast-low-stroke'
                />
              ))}
            {values.map(
              (v, i) =>
                finite(v) && (
                  <circle
                    key={i}
                    cx={x(i)}
                    cy={y(v)}
                    r='2.4'
                    className='forecast-dot'
                  />
                )
            )}
            <path d={`M${x(selected)} 8V149`} className='forecast-cursor' />
            {finite(values[selected]) && (
              <circle
                cx={x(selected)}
                cy={y(values[selected]!)}
                r='6'
                className='forecast-selected-dot'
              />
            )}
            {lows && finite(lows[selected]) && (
              <circle
                cx={x(selected)}
                cy={y(lows[selected]!)}
                r='4'
                className='forecast-selected-low'
              />
            )}
          </svg>
          {!numbers.length && (
            <span className='forecast-unavailable'>
              Forecast values unavailable
            </span>
          )}
        </div>
        <div className='forecast-ticks' aria-hidden='true'>
          {ticks.map(({ text, i }) => (
            <span key={i} style={{ left: `${x(i) / 6}%` }}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HourlyForecast({
  weather: w,
  units,
  now,
  selected,
  onSelect,
  onPreview,
  onRain,
  latitude,
}: {
  weather: Weather;
  units: Units;
  now: number;
  selected: ForecastSelection | null;
  onSelect: (selection: ForecastSelection) => void;
  onPreview: () => void;
  onRain: () => void;
  latitude: number;
}) {
  const [metric, setMetric] = useState<Metric>('temperature');
  const [focus, setFocus] = useState(0);
  const hours = nextHours(w, now);
  const selectedIndex =
    selected?.kind === 'hour'
      ? hours.findIndex((h) => h.time === selected.hour.time)
      : -1;
  const index =
    selectedIndex >= 0
      ? selectedIndex
      : Math.min(focus, Math.max(0, hours.length - 1));
  const h = hours[index];
  const page = Math.floor(index / 6);
  const visible = hours.slice(page * 6, page * 6 + 6);
  const pick = (i: number) => {
    setFocus(i);
    onSelect({ kind: 'hour', hour: hours[i] });
  };
  return (
    <section
      className='weather-section hourly-section'
      aria-labelledby='hourly-title'
    >
      <div className='section-heading'>
        <h2 id='hourly-title'>Hour by hour</h2>
        <button className='forecast-rain-link' onClick={onRain}>
          Rain timing <SketchArrow />
        </button>
      </div>
      <div className='segmented' aria-label='Forecast chart'>
        {(['temperature', 'rain', 'wind'] as const).map((m) => (
          <button
            key={m}
            aria-pressed={metric === m}
            onClick={() => setMetric(m)}
          >
            {m === 'temperature'
              ? 'Temperature'
              : m === 'rain'
                ? 'Rain chance'
                : 'Wind'}
          </button>
        ))}
      </div>
      {h ? (
        <>
          <div className='forecast-readout'>
            <WeatherIcon
              code={h.code}
              day={h.day}
              time={h.time}
              latitude={latitude}
            />
            <div className='forecast-readout-copy' aria-live='polite'>
              <span>
                {dayName(h.time, w.timezone, now)} ·{' '}
                {clockTime(h.time, w.timezone)}
              </span>
              <strong>{metricValue(h[metric], metric, units)}</strong>
              <small>{condition(h.code).label}</small>
            </div>
            <button
              className='forecast-preview'
              onClick={() => {
                pick(index);
                onPreview();
              }}
            >
              See this sky <SketchArrow />
            </button>
          </div>
          <ForecastGraph
            values={hours.map((hour) => hour[metric])}
            labels={hours.map((hour) => clockTime(hour.time, w.timezone, true))}
            selected={index}
            onSelect={pick}
            metric={metric}
            units={units}
            label='Select forecast hour'
            description={hourDescription(h, w, units, now)}
          />
          <div className='forecast-hour-pages'>
            <span>
              {clockTime(visible[0].time, w.timezone, true)} –{' '}
              {clockTime(visible[visible.length - 1].time, w.timezone, true)}
            </span>
            <div className='forecast-pages'>
              <PageArrow
                disabled={page === 0}
                onClick={() => pick((page - 1) * 6)}
              />
              <span className='forecast-page-count'>
                {page + 1} / {Math.ceil(hours.length / 6)}
              </span>
              <PageArrow
                forward
                disabled={(page + 1) * 6 >= hours.length}
                onClick={() => pick((page + 1) * 6)}
              />
            </div>
          </div>
          <div className='forecast-hour-items'>
            {visible.map((hour, i) => (
              <button
                key={hour.time}
                aria-pressed={index === page * 6 + i}
                aria-label={hourDescription(hour, w, units, now)}
                onClick={() => pick(page * 6 + i)}
              >
                <span>{hourLabel(hour, w, now)}</span>
                <WeatherIcon
                  code={hour.code}
                  day={hour.day}
                  time={hour.time}
                  latitude={latitude}
                />
                <strong>
                  {metric === 'wind'
                    ? finite(hour.wind)
                      ? Math.round(
                          units === 'us' ? hour.wind / 1.609344 : hour.wind
                        )
                      : '—'
                    : metricValue(hour[metric], metric, units)}
                </strong>
                <small>
                  {metric === 'wind'
                    ? units === 'us'
                      ? 'mph'
                      : 'km/h'
                    : metric === 'rain'
                      ? temperature(hour.temperature, units)
                      : percent(hour.rain)}
                </small>
              </button>
            ))}
          </div>
          <p className='fine-print forecast-chart-hint'>
            Slide across the graph or tap an hour. Times are local to this
            place.
          </p>
        </>
      ) : (
        <p>
          The saved hourly forecast has ended. Refresh when you’re connected.
        </p>
      )}
    </section>
  );
}

export function DailyForecastGraph({
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
  const days = nextDays(w, now);
  const selectedIndex =
    selected?.kind === 'day'
      ? days.findIndex((d) => d.time === selected.day.time)
      : -1;
  const index = Math.max(0, selectedIndex);
  const d = days[index];
  if (!d) return null;
  const pick = (i: number) => onSelect({ kind: 'day', day: days[i] });
  return (
    <div className='forecast-daily-graph'>
      <div className='forecast-readout'>
        <WeatherIcon code={d.code} />
        <div className='forecast-readout-copy' aria-live='polite'>
          <span>
            {dayName(d.time, w.timezone, now)} · {condition(d.code).label}
          </span>
          <strong>
            {temperature(d.high, units)} <small>high</small> /{' '}
            {temperature(d.low, units)} <small>low</small>
          </strong>
        </div>
        <button
          className='forecast-preview'
          onClick={() => {
            pick(index);
            onPreview();
          }}
        >
          See this day <SketchArrow />
        </button>
      </div>
      <div className='forecast-legend' aria-hidden='true'>
        <span>High</span>
        <span>Low</span>
      </div>
      <ForecastGraph
        values={days.map((day) => day.high)}
        lows={days.map((day) => day.low)}
        labels={days.map((day) => dayName(day.time, w.timezone, now))}
        selected={index}
        onSelect={pick}
        metric='temperature'
        units={units}
        label='Select forecast day'
        description={dayDescription(d, w, units, now)}
      />
    </div>
  );
}
