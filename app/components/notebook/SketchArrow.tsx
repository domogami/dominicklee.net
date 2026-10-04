const strokes = {
  'up-right': 'M5 20Q10 12 19 5M9 5Q15 4 19 5Q18 10 19 15',
  'down-right': 'M5 4Q12 9 19 19M9 19Q15 20 19 19Q18 13 19 9',
  left: 'M20 12Q12 10 4 12M10 5Q7 9 4 12Q7 15 10 19',
  right: 'M4 12Q12 10 20 12M14 5Q17 9 20 12Q17 15 14 19',
  up: 'M12 21Q10 13 12 3M5 10Q9 7 12 3Q15 7 19 10',
  undo: 'M5 10Q12 2 19 9T17 20M5 3Q4 7 5 11Q9 12 13 11',
  refresh: 'M19 7C11-2 1 6 4 15S20 25 21 13M19 2Q18 5 19 9Q15 10 12 9',
  swap: 'M3 7Q11 6 21 7M16 2Q18 5 21 7Q18 9 16 12M21 17Q12 18 3 17M8 12Q5 15 3 17Q5 20 8 22',
  chevron: 'M5 9Q8 11 12 15Q16 11 19 9',
};

/** Real pen strokes, independent of the platform's text and emoji fonts. */
export default function SketchArrow({
  direction = 'up-right',
  className = '',
}: {
  direction?: keyof typeof strokes;
  className?: string;
}) {
  return (
    <svg
      className={`ink-link-arrow ${className}`.trim()}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden='true'
      focusable='false'
    >
      <path pathLength='1' d={strokes[direction]} />
    </svg>
  );
}
