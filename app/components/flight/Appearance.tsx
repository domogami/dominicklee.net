import { useEffect, useState } from 'react';
export type FlightTheme = 'light' | 'hybrid' | 'dark';
const preferenceKey = 'flight-notes-appearance-v1';
export function useFlightAppearance() {
  const [theme, setTheme] = useState<FlightTheme>('hybrid'),
    [motion, setMotion] = useState(true),
    [reduced, setReduced] = useState(false),
    [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(preferenceKey) ?? 'null');
      if (saved && ['light', 'hybrid', 'dark'].includes(saved.theme))
        setTheme(saved.theme);
      if (typeof saved?.motion === 'boolean') setMotion(saved.motion);
    } catch {
      /* Storage is optional. */
    }
    const media = matchMedia('(prefers-reduced-motion: reduce)'),
      update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    setReady(true);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(preferenceKey, JSON.stringify({ theme, motion }));
      } catch {
        /* Private browsing can disable storage. */
      }
    }
  }, [theme, motion, ready]);
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]'),
      previous = meta?.getAttribute('content');
    meta?.setAttribute(
      'content',
      theme === 'dark' ? '#2b3034' : theme === 'hybrid' ? '#252b2e' : '#efe7d7'
    );
    return () => {
      if (previous) meta?.setAttribute('content', previous);
    };
  }, [theme]);
  return {
    theme,
    setTheme,
    motion,
    setMotion,
    reduced,
    animated: ready && motion && !reduced,
  };
}
export function Appearance({
  theme,
  setTheme,
  motion,
  setMotion,
  reduced,
}: {
  theme: FlightTheme;
  setTheme: (v: FlightTheme) => void;
  motion: boolean;
  setMotion: (v: boolean) => void;
  reduced: boolean;
}) {
  return (
    <div className='fp-appearance'>
      <div className='fp-theme-picker' role='group' aria-label='Color theme'>
        {(['light', 'hybrid', 'dark'] as const).map((t) => (
          <button
            key={t}
            type='button'
            aria-pressed={theme === t}
            onClick={() => setTheme(t)}
          >
            <svg viewBox='0 0 20 20' fill='none' aria-hidden='true'>
              {t === 'light' ? (
                <>
                  <circle cx='10' cy='10' r='3' />
                  <path d='M10 1v3m0 12v3M1 10h3m12 0h3M3.6 3.6l2 2m8.8 8.8 2 2m0-12.8-2 2m-8.8 8.8-2 2' />
                </>
              ) : t === 'dark' ? (
                <path d='M15.7 13.7A7 7 0 0 1 6.3 4.3a7 7 0 1 0 9.4 9.4Z' />
              ) : (
                <>
                  <circle cx='10' cy='10' r='6' />
                  <path d='M10 4a6 6 0 0 1 0 12Z' fill='currentColor' />
                </>
              )}
            </svg>
            <span>{t[0].toUpperCase() + t.slice(1)}</span>
          </button>
        ))}
      </div>
      <button
        className='fp-motion-toggle'
        type='button'
        aria-pressed={motion && !reduced}
        disabled={reduced}
        onClick={() => setMotion(!motion)}
        aria-label={
          reduced
            ? 'Motion reduced by device preference'
            : motion
              ? 'Pause decorative motion'
              : 'Resume decorative motion'
        }
      >
        {reduced ? 'Motion reduced' : motion ? 'Motion on ◌' : 'Motion off ◌'}
      </button>
    </div>
  );
}
