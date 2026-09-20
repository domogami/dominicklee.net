import type { CSSProperties } from 'react';

// Fold geometry traced from Crane_Logo_V5. Shared by the masthead and hero.
const folds = [
  'M48 99 76 85 70 73Z',
  'M80 68 142 194 160 142Z',
  'M168 89 218 26 229 76 183 98 164 131Z',
  'M154 192 186 117 194 177Z',
  'M196 110 309 46 265 197 205 177Z',
  'M275 199 291 146 350 142Z',
];
export default function Crane({
  className = '',
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={`crane ${animated ? 'crane-animated' : ''} ${className}`}
      viewBox='30 10 340 210'
      fill='none'
      aria-hidden='true'
    >
      {folds.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength='1'
          style={{ '--fold': i } as CSSProperties}
        />
      ))}
    </svg>
  );
}
