import { useEffect, useId, useState } from 'react';

const hobbies = [
  'cubing',
  'origami',
  'calligraphy',
  'journaling',
  'reading',
  'tinkering',
  'exploring',
  'gaming',
  'cycling',
  'yoyoing',
  'coffee',
];

export default function HobbyTagline({ animate }: { animate: boolean }) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'holding' | 'erasing' | 'writing'>(
    'holding'
  );
  const [widths, setWidths] = useState({
    prefix: 270,
    hobby: 126,
  });

  useEffect(() => {
    let cancelled = false;
    document.fonts.load('32px Caveat').then(() => {
      if (cancelled) return;
      const context = document.createElement('canvas').getContext('2d');
      if (!context) return;
      context.font = '400 32px Caveat';
      setWidths({
        prefix: context.measureText('Currently distracted by ').width,
        hobby:
          Math.max(...hobbies.map((word) => context.measureText(word).width)) +
          8,
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!animate) {
      setPhase('holding');
      return;
    }
    const timer = window.setTimeout(
      () => {
        if (phase === 'holding') setPhase('erasing');
        else if (phase === 'erasing') {
          setIndex((value) => (value + 1) % hobbies.length);
          setPhase('writing');
        } else setPhase('holding');
      },
      phase === 'holding' ? 4200 : phase === 'erasing' ? 380 : 650
    );
    return () => clearTimeout(timer);
  }, [animate, phase, index]);

  const total = widths.prefix + widths.hobby + 8;
  return (
    <div className='tagline'>
      <svg
        className='hobby-tagline'
        role='img'
        aria-label={`Currently distracted by ${hobbies[index]}`}
        viewBox={`0 0 ${total} 48`}
        style={{ maxWidth: total }}
      >
        <defs>
          <clipPath id={id}>
            <rect
              className={`hobby-reveal ${animate ? phase : ''}`}
              x={widths.prefix}
              y='0'
              width={widths.hobby}
              height='48'
            />
          </clipPath>
        </defs>
        <text x='0' y='34'>
          Currently distracted by{' '}
        </text>
        <g clipPath={`url(#${id})`}>
          <text
            className='hobby-word'
            x={widths.prefix}
            y='34'
            textAnchor='start'
          >
            {hobbies[index]}
          </text>
        </g>
      </svg>
    </div>
  );
}
