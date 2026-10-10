import type { Sample, Segment } from '~/flight/model';
import { InfoTip } from './InfoTip';
export const fmt = (n: number | undefined, d = 0) =>
  n == null
    ? '—'
    : n.toLocaleString('en-US', {
        maximumFractionDigits: d,
        minimumFractionDigits: d,
      });
export const elapsed = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
interface Point {
  x: number;
  y: number;
  segment: Segment;
}
export function PerformanceChart({
  title,
  number,
  xLabel,
  yLabel,
  points,
  selected,
  onSelect,
  empty,
  explanation,
}: {
  title: string;
  number: string;
  xLabel: string;
  yLabel: string;
  points: Point[];
  selected?: string;
  onSelect: (id: string) => void;
  empty: string;
  explanation: string;
}) {
  const w = 520,
    h = 300,
    l = 68,
    r = 22,
    t = 22,
    b = 52;
  function extent(values: number[]) {
    const min = Math.min(...values),
      max = Math.max(...values),
      padding = Math.max((max - min) * 0.16, Math.abs(max) * 0.05, 1);
    return [Math.max(0, min - padding), max + padding];
  }
  const [xmin, xmax] = points.length ? extent(points.map((p) => p.x)) : [0, 1],
    [ymin, ymax] = points.length ? extent(points.map((p) => p.y)) : [0, 1];
  const x = (v: number) => l + ((v - xmin) / (xmax - xmin)) * (w - l - r),
    y = (v: number) => h - b - ((v - ymin) / (ymax - ymin)) * (h - t - b);
  return (
    <figure className='fp-chart'>
      <figcaption>
        <span className='fp-eyebrow'>FIG. {number}</span>
        <div className='fp-chart-title'>
          <h3>{title}</h3>
          <InfoTip label={title}>{explanation}</InfoTip>
        </div>
        <span className='fp-small'>
          {points.length} observed segment{points.length === 1 ? '' : 's'}
        </span>
      </figcaption>
      {points.length ? (
        <svg
          viewBox={`0 0 ${w} ${h}`}
          role='group'
          aria-label={`${title}. ${xLabel} against ${yLabel}. Points are selectable in the segment table below.`}
        >
          {Array.from({ length: 6 }, (_, i) => {
            const xv = xmin + ((xmax - xmin) * i) / 5,
              yv = ymin + ((ymax - ymin) * i) / 5;
            return (
              <g key={i} className='fp-grid'>
                <line x1={x(xv)} x2={x(xv)} y1={t} y2={h - b} />
                <line x1={l} x2={w - r} y1={y(yv)} y2={y(yv)} />
                <text x={x(xv)} y={h - b + 20} textAnchor='middle'>
                  {fmt(xv)}
                </text>
                <text x={l - 10} y={y(yv) + 4} textAnchor='end'>
                  {fmt(yv)}
                </text>
              </g>
            );
          })}
          <text
            x={(l + w - r) / 2}
            y={h - 8}
            textAnchor='middle'
            className='fp-axis'
          >
            {xLabel}
          </text>
          <text
            transform={`translate(16 ${(t + h - b) / 2}) rotate(-90)`}
            textAnchor='middle'
            className='fp-axis'
          >
            {yLabel}
          </text>
          {points.map((p) => (
            <g
              key={p.segment.id}
              className={`fp-dot ${p.segment.kind} ${p.segment.quality} ${selected === p.segment.id ? 'selected' : ''}`}
              onClick={() => onSelect(p.segment.id)}
              role='button'
              tabIndex={0}
              aria-label={`${p.segment.id}: ${fmt(p.x, 1)} ${xLabel}, ${fmt(p.y, 1)} ${yLabel}. ${p.segment.quality} conditions. ${p.segment.cautions.join(' ')}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelect(p.segment.id);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              <title>
                {p.segment.id}: {fmt(p.x, 1)} {xLabel}; {fmt(p.y, 1)} {yLabel};{' '}
                {p.segment.methods.join(' / ')}; OAT {fmt(p.segment.oat, 1)} °C;
                RPM {fmt(p.segment.rpm)}; {p.segment.quality} conditions.{' '}
                {p.segment.cautions.join(' ')}
              </title>
              <circle
                cx={x(p.x)}
                cy={y(p.y)}
                r={selected === p.segment.id ? 8 : 5}
              />
              <text x={x(p.x) + 9} y={y(p.y) - 8}>
                {p.segment.id}
              </text>
            </g>
          ))}
        </svg>
      ) : (
        <div className='fp-chart-empty'>
          <span>↗</span>
          <p>{empty}</p>
        </div>
      )}
      <p className='fp-chart-note'>
        Each point is one accepted window. Select a segment to see its
        conditions and calculations.
        {points.some((p) => p.segment.quality === 'variable') &&
          ' Hollow points are observed climbs with changing heading, speed, or power.'}
      </p>
    </figure>
  );
}
export function FlightTimeline({
  samples,
  segments,
  selected,
  onSelect,
}: {
  samples: Sample[];
  segments: Segment[];
  selected?: string;
  onSelect: (id: string) => void;
}) {
  if (samples.length < 2) return null;
  const start = samples[0].t,
    end = samples.at(-1)!.t,
    min = Math.min(...samples.map((s) => s.altitude)),
    max = Math.max(...samples.map((s) => s.altitude));
  const w = 1060,
    h = 190,
    l = 62,
    r = 16,
    t = 18,
    b = 35,
    x = (v: number) =>
      l + ((v - start) / Math.max(1, end - start)) * (w - l - r),
    y = (v: number) =>
      h - b - ((v - min) / Math.max(1, max - min)) * (h - t - b);
  const stride = Math.max(1, Math.floor(samples.length / 2000));
  const current = segments.find((s) => s.id === selected);
  const position = current?.samples[Math.floor(current.samples.length / 2)];
  return (
    <svg
      className='fp-timeline'
      viewBox={`0 0 ${w} ${h}`}
      role='img'
      aria-label='Flight profile: GPS or recorded altitude over elapsed time. Colored windows identify accepted cruise and climb segments.'
    >
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i} className='fp-grid'>
          <line
            x1={l}
            x2={w - r}
            y1={y(min + ((max - min) * i) / 4)}
            y2={y(min + ((max - min) * i) / 4)}
          />
          <text
            x={l - 10}
            y={y(min + ((max - min) * i) / 4) + 4}
            textAnchor='end'
          >
            {fmt(min + ((max - min) * i) / 4)}
          </text>
          <text
            x={x(start + ((end - start) * i) / 4)}
            y={h - 10}
            textAnchor='middle'
          >
            {fmt(((end - start) * i) / 240)} min
          </text>
        </g>
      ))}
      {segments
        .filter((s) => s.kind !== 'excluded')
        .map((s) => (
          <rect
            key={s.id}
            className={`fp-window ${s.kind} ${selected === s.id ? 'selected' : ''}`}
            x={x(s.start)}
            y={t}
            width={Math.max(1, x(s.end) - x(s.start))}
            height={h - b - t}
            onClick={() => onSelect(s.id)}
          >
            <title>
              {s.id}: {s.kind}, {elapsed(s.start - start)}–
              {elapsed(s.end - start)}; {s.quality} conditions
            </title>
          </rect>
        ))}
      <path
        d={samples
          .filter((_, i) => i % stride === 0)
          .map(
            (s, i) =>
              `${i ? 'L' : 'M'}${x(s.t).toFixed(1)},${y(s.altitude).toFixed(1)}`
          )
          .join(' ')}
        className='fp-profile'
      />
      <text
        transform='translate(13 92) rotate(-90)'
        textAnchor='middle'
        className='fp-axis'
      >
        Altitude · ft
      </text>
      {position && (
        <g
          className='fp-timeline-plane'
          style={{
            transform: `translate(${x(position.t)}px, ${y(position.altitude)}px)`,
          }}
          aria-hidden='true'
        >
          <circle r='13' fill='var(--fp-surface)' stroke='var(--fp-teal)' />
          <g
            transform={`rotate(${current?.kind === 'climb' ? 55 : 90}) scale(.32) translate(-32,-32)`}
          >
            <path
              d='M31 7c-2 0-3 4-3 8v10L8 38v5l20-5v13l-7 5v3l11-3 11 3v-3l-7-5V38l20 5v-5L36 25V15c0-4-2-8-5-8Z'
              fill='var(--fp-teal)'
            />
          </g>
        </g>
      )}
    </svg>
  );
}
