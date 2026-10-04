import { useId } from 'react';
import type { CSSProperties } from 'react';
import { moonGeometry, type LunarPhase } from '~/weather/moon';

export default function MoonDrawing({
  phase,
  south = false,
  simple = false,
}: {
  phase: LunarPhase;
  south?: boolean;
  simple?: boolean;
}) {
  const id = useId().replace(/:/g, '');
  const { lit, limb, terminator } = moonGeometry(phase.fraction);
  const left = phase.waxing === south;
  const stroke = (d: string, order: number, className = '') => (
    <path
      d={d}
      className={`sky-pen ${className}`}
      pathLength='1'
      style={{ '--stroke-order': order } as CSSProperties}
    />
  );
  return (
    <g
      className={`sketch-moon ${simple ? 'moon-mini' : ''}`}
      data-phase={phase.name}
      data-illumination={phase.fraction.toFixed(5)}
      data-lit-side={left ? 'left' : 'right'}
    >
      <defs>
        <clipPath id={`moon-lit-${id}`}>
          <path d={lit} />
        </clipPath>
      </defs>
      <g transform={left ? 'translate(200 0) scale(-1 1)' : undefined}>
        <path
          className='sky-pen moon-shadow'
          pathLength='1'
          style={{ '--stroke-order': 0 } as CSSProperties}
          d='M100 25A75 75 0 1 0 100 175A75 75 0 1 0 100 25'
        />
        <path className='sky-color moon-color' d={lit} />
        {phase.fraction > 0.003 && stroke(limb, 0, 'moon-edge')}
        {phase.fraction > 0.003 && stroke(terminator, 2, 'moon-edge')}
        {!simple && (
          <g clipPath={`url(#moon-lit-${id})`}>
            {stroke(
              'M109 29c30 2 56 26 61 54M170 123q-11 32-42 44',
              4,
              'sky-pencil moon-edge'
            )}
            {[
              'M123 33q29 11 42 41',
              'M150 51q14 13 17 35',
              'M158 134q-15 25-34 30',
              'M149 153q-14 13-24 13',
            ].map((d, i) => (
              <g key={d}>{stroke(d, 5 + i, 'moon-hatch')}</g>
            ))}
            {stroke(
              'M145 77c-11-3-16 14-5 17s18-14 5-17M126 125c-8-2-11 10-3 12s12-10 3-12M71 65c-10-2-13 10-4 13s15-11 4-13M63 117c-11-3-16 11-6 16s18-12 6-16',
              8,
              'moon-craters'
            )}
          </g>
        )}
      </g>
    </g>
  );
}
