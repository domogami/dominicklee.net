import type { CSSProperties } from 'react';
import { armHapticCue } from '~/components/TouchFeedback';
import MoonDrawing from './MoonDrawing';
import { moonPhase } from '~/weather/moon';
import { condition } from '~/weather/model';
export function WeatherIcon({
  code,
  day = true,
  className = '',
  time,
  latitude = 0,
}: {
  code: number;
  day?: boolean;
  className?: string;
  time?: number;
  latitude?: number;
}) {
  const kind = condition(code).kind;
  const clear = kind === 'sun',
    partly = kind === 'partly';
  return (
    <svg
      className={`weather-icon ${className}`}
      viewBox='0 0 120 100'
      aria-hidden='true'
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {(clear || partly) &&
        (day ? (
          <g className='sky-sun'>
            <circle
              cx={clear ? 60 : 78}
              cy={clear ? 48 : 30}
              r={clear ? 22 : 17}
              fill='var(--sun)'
              stroke='var(--sun-ink)'
            />
            <g stroke='var(--sun-ink)'>
              {Array.from({ length: 8 }, (_, i) => (
                <path
                  key={i}
                  transform={`rotate(${i * 45} ${clear ? 60 : 78} ${clear ? 48 : 30})`}
                  d={clear ? 'M60 10 61 17' : 'M78 4 79 7'}
                />
              ))}
            </g>
          </g>
        ) : (
          time !== undefined && (
            <svg
              x={clear ? 29 : 57}
              y={clear ? 12 : 2}
              width={clear ? 67 : 48}
              height={clear ? 67 : 48}
              viewBox='0 0 200 200'
            >
              <MoonDrawing
                phase={moonPhase(time)}
                south={latitude < 0}
                simple
              />
            </svg>
          )
        ))}
      {!clear && (
        <g className='sky-cloud'>
          <path
            d='M23 69C7 66 7 45 25 41C22 14 57 12 66 32C82 20 101 32 99 47C116 53 109 72 92 71Z'
            fill='var(--cloud)'
          />
          <path
            d='M24 74Q58 70 93 75M24 39Q38 34 42 47'
            opacity='.22'
            strokeWidth='1.5'
          />
        </g>
      )}
      {(kind === 'rain' || kind === 'storm') &&
        [32, 55, 79].map((x, i) => (
          <path
            key={x}
            className='sky-rain'
            style={{ '--i': i } as CSSProperties}
            d={`M${x} 80l-5 10`}
            stroke='var(--rain)'
          />
        ))}
      {kind === 'snow' &&
        [30, 58, 85].map((x, i) => (
          <g key={x} className='sky-snow' style={{ '--i': i } as CSSProperties}>
            <path d={`M${x} 80v13m-5-10 10 7m-10 0 10-7`} />
          </g>
        ))}
      {kind === 'storm' && (
        <path
          className='sky-lightning'
          d='m67 51-13 21 12-2-6 18 23-27-14 2 8-12'
          fill='var(--sun)'
          stroke='var(--sun-ink)'
        />
      )}
      {kind === 'fog' && (
        <g className='sky-fog' opacity='.7'>
          <path d='M9 79h68m-50 9h76M15 97h63' />
        </g>
      )}
    </svg>
  );
}
type StrokeProps = {
  d: string;
  order?: number;
  className?: string;
  fill?: string;
  hapticCue?: string;
};
function Stroke({
  d,
  order = 0,
  className = '',
  fill = 'none',
  hapticCue,
}: StrokeProps) {
  return (
    <path
      className={`sky-pen ${className}`}
      pathLength='1'
      data-haptic-cue={hapticCue}
      data-haptic-animation='sky-write'
      d={d}
      fill={fill}
      style={{ '--stroke-order': order } as CSSProperties}
    />
  );
}

/** Separate pen strokes and delayed washes follow the garden plant's drawing sequence. */
export default function WeatherArt({
  code,
  day,
  playing,
  onPlay,
  time,
  latitude,
}: {
  code: number;
  day: boolean;
  playing: number;
  onPlay: () => void;
  time: number;
  latitude: number;
}) {
  const kind = condition(code).kind;
  const cloud = !['sun', 'unknown'].includes(kind);
  const moon = !day;
  const lunar = moonPhase(time);
  return (
    <button
      type='button'
      className='sky-drawing'
      onClick={() => {
        armHapticCue('weather-sky');
        onPlay();
      }}
      aria-label={
        day
          ? 'Replay sky drawing'
          : `Replay sky drawing: ${lunar.name}, ${lunar.light}% illuminated`
      }
      title='Draw the sky again'
    >
      <svg
        key={`${code}-${day}-${playing}`}
        className='weather-sketch'
        data-sky={moon ? 'night' : kind}
        viewBox='0 0 320 250'
        fill='none'
        aria-hidden='true'
      >
        <path
          className='sky-wash'
          d='M61 66C105 29 230 16 270 80S264 209 176 218 25 178 42 126 46 83 61 66Z'
          fill='var(--sky-wash)'
        />
        {(moon || kind === 'sun' || kind === 'partly') && (
          <g transform={cloud ? 'translate(85 -6) scale(.68)' : undefined}>
            {moon ? (
              <svg x='58' y='20' width='200' height='200' viewBox='0 0 200 200'>
                <MoonDrawing phase={lunar} south={latitude < 0} />
              </svg>
            ) : (
              <g className='sketch-sun'>
                <path
                  className='sky-color sun-color'
                  d='M163 64C127 60 108 86 111 119s34 50 62 40 42-42 28-69-25-25-38-26Z'
                />
                <Stroke
                  d='M163 64C127 60 108 86 111 119s34 50 62 40 42-42 28-69-25-25-38-26Z'
                  className='sun-edge'
                />
                <Stroke
                  d='M131 78q-22 23-9 48M156 163q33 3 48-22'
                  order={3}
                  className='sky-pencil sun-edge'
                />
                {[
                  'M158 40l1-15',
                  'M207 57l11-12',
                  'M225 105l18-1',
                  'M212 154l15 12',
                  'M165 179l-1 18',
                  'M111 164l-13 14',
                  'M92 118l-19 2',
                  'M104 66 91 55',
                ].map((d, i) => (
                  <Stroke
                    key={d}
                    d={d}
                    order={3 + i}
                    className='sun-edge sun-ray'
                  />
                ))}
              </g>
            )}
          </g>
        )}
        {cloud && (
          <g className='sketch-cloud'>
            <path
              className='sky-color cloud-color'
              d='M81 159C50 155 54 117 81 112 73 69 127 58 146 94 169 69 209 87 208 118 244 121 253 162 219 168 173 171 123 165 81 159Z'
            />
            <Stroke d='M81 159C50 155 54 117 81 112' order={1} />
            <Stroke d='M81 112C73 69 127 58 146 94' order={2} />
            <Stroke d='M146 94C169 69 209 87 208 118' order={3} />
            <Stroke d='M208 118C244 121 253 162 219 168' order={4} />
            <Stroke d='M219 168Q147 171 81 159' order={5} />
            <Stroke
              d='M76 164Q145 177 221 173M80 113q20-8 27 9'
              order={6}
              className='sky-pencil'
            />
          </g>
        )}
        {(kind === 'rain' || kind === 'storm') &&
          [97, 129, 161, 195, 221].map((x, i) => (
            <g
              key={x}
              className='sketched-rain'
              style={{ '--drop-order': i } as CSSProperties}
            >
              <Stroke
                d={`M${x} ${181 + (i % 2) * 5}q-3 10-8 16`}
                order={7 + i}
              />
            </g>
          ))}
        {kind === 'snow' &&
          [100, 156, 208].map((x, i) => (
            <g key={x} className='sketched-snow'>
              <Stroke
                d={`M${x} 184v20m-9-15 18 10m-18 0 18-10`}
                order={7 + i}
              />
            </g>
          ))}
        {kind === 'storm' && (
          <Stroke
            d='m171 131-25 44 22-6-9 34 40-53-28 8 14-27'
            order={7}
            className='sun-edge lightning-edge'
            fill='var(--sun)'
          />
        )}
        {kind === 'fog' &&
          [
            'M57 187q78-5 168 3',
            'M79 202q58 5 166-1',
            'M48 217q66-3 143 2',
          ].map((d, i) => (
            <Stroke key={d} d={d} order={7 + i} className='sky-pencil' />
          ))}
        {moon && (
          <g className='sketched-stars'>
            <Stroke d='m239 62-1 12m-6-7 13 1' order={9} />
            <Stroke d='m247 136 1 8m-5-4h9' order={10} />
            <Stroke d='m77 47 1 1m139 156 1 1' order={11} />
          </g>
        )}
        <Stroke
          d='M80 228q70 5 151-2'
          order={10}
          className='sky-pencil ground-pencil'
          hapticCue='weather-sky'
        />
      </svg>
    </button>
  );
}
