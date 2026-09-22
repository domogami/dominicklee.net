/** A small ink arrow, independent of the platform's emoji fonts. */
export default function SketchArrow() {
  return (
    <svg
      className='ink-link-arrow'
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden='true'
      focusable='false'
    >
      <path pathLength='1' d='M5 20Q10 12 19 5M9 5Q15 4 19 5Q18 10 19 15' />
    </svg>
  );
}
