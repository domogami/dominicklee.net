import { useEffect, useRef, useState, type PointerEvent } from 'react';

export function PlaneMark({ detailed = false }: { detailed?: boolean }) {
  return (
    <svg viewBox='0 0 64 64' fill='none' aria-hidden='true'>
      <path
        className='fp-plane-outline'
        pathLength='1'
        d='M31 7c-2 0-3 4-3 8v10L8 38v5l20-5v13l-7 5v3l11-3 11 3v-3l-7-5V38l20 5v-5L36 25V15c0-4-2-8-5-8Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        className='fp-plane-detail'
        d='M32 17v29M12 39l15-5m25 5-15-5'
        stroke='currentColor'
        strokeWidth='1'
      />
      {detailed && (
        <>
          <path
            className='fp-plane-windows'
            d='m29 18 3-2 3 2v7h-6Z'
            stroke='currentColor'
            strokeWidth='1'
          />
          <g className='fp-propeller'>
            <path
              d='M22 9h20'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <circle cx='32' cy='9' r='1.5' fill='currentColor' />
          </g>
        </>
      )}
    </svg>
  );
}

export default function FlightPlane({
  motion,
  phase,
}: {
  motion: boolean;
  phase?: string;
}) {
  const [flying, setFlying] = useState(false),
    [lap, setLap] = useState(0);
  const sky = useRef<HTMLButtonElement>(null),
    timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!motion) {
      clearTimeout(timer.current);
      setFlying(false);
      resetBank();
    }
  }, [motion]);
  function resetBank() {
    sky.current?.style.setProperty('--fp-bank', '0deg');
    sky.current?.style.setProperty('--fp-drift-x', '0px');
    sky.current?.style.setProperty('--fp-drift-y', '0px');
  }
  function bank(event: PointerEvent<HTMLButtonElement>) {
    if (!motion || event.pointerType === 'touch') return;
    const r = event.currentTarget.getBoundingClientRect(),
      x = (event.clientX - r.left) / r.width - 0.5,
      y = (event.clientY - r.top) / r.height - 0.5;
    event.currentTarget.style.setProperty('--fp-bank', `${x * 28}deg`);
    event.currentTarget.style.setProperty('--fp-drift-x', `${x * 16}px`);
    event.currentTarget.style.setProperty('--fp-drift-y', `${y * 12}px`);
  }
  function launch() {
    if (!motion) {
      setLap((n) => n + 1);
      return;
    }
    if (flying) return;
    resetBank();
    setFlying(true);
    timer.current = setTimeout(() => {
      setFlying(false);
      setLap((n) => n + 1);
    }, 3600);
  }
  return (
    <div
      className='fp-flight-toy'
      data-phase={phase === 'climb' ? 'climb' : 'cruise'}
      data-flying={flying ? 'true' : 'false'}
    >
      <button
        ref={sky}
        type='button'
        className='fp-sky'
        aria-label='Fly the airplane for a lap'
        aria-describedby='fp-plane-hint'
        aria-pressed={flying}
        onClick={launch}
        onPointerMove={bank}
        onPointerLeave={resetBank}
      >
        <svg
          className='fp-sky-lines'
          viewBox='0 0 340 190'
          fill='none'
          aria-hidden='true'
        >
          <circle className='fp-sky-ring' cx='170' cy='94' r='64' />
          <circle className='fp-sky-ring inner' cx='170' cy='94' r='45' />
          <path
            className='fp-sky-trail'
            pathLength='1'
            d='M170 94C130 42 70 42 78 100C86 160 250 161 262 92C274 23 200 17 170 94'
          />
          <g className='fp-cloud cloud-one'>
            <path d='M40 53h42M49 47h22M46 59h20' />
          </g>
          <g className='fp-cloud cloud-two'>
            <path d='M251 129h47M263 123h19M259 135h25' />
          </g>
          <path
            className='fp-sky-spark'
            d='M279 40v12m-6-6h12M56 124v8m-4-4h8'
          />
          <path
            className='fp-compass-mark'
            d='M165 17h10m-5-5v10M165 171h10m-5-5v10'
          />
        </svg>
        <span className='fp-plane-flight'>
          <span className='fp-plane-react'>
            <span className='fp-plane-idle'>
              <PlaneMark detailed />
            </span>
          </span>
        </span>
        <span className='fp-plane-caption'>a little lift goes a long way</span>
      </button>
      <div className='fp-plane-invitation'>
        <span id='fp-plane-hint'>
          {motion
            ? 'Move to bank · tap to take a lap'
            : 'A little airplane, taking a quiet break.'}
        </span>
        <span className='fp-lap-count' role='status' aria-live='polite'>
          {flying
            ? 'Taking the scenic route…'
            : lap
              ? `${lap} happy lap${lap === 1 ? '' : 's'}${motion ? ' around the notebook' : ''}`
              : phase === 'climb'
                ? 'Climbing through the numbers ↗'
                : 'Ready for a little wander ↗'}
        </span>
      </div>
    </div>
  );
}
