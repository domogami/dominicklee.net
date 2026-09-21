import { useEffect, useRef, useState } from 'react';
import Crane from './Crane';
import { AnimatedNote } from './NotebookDrawings';

export default function MarginCrane({ motion }: { motion: boolean }) {
  const button = useRef<HTMLButtonElement>(null);
  const [seen, setSeen] = useState(false);
  const [ready, setReady] = useState(false);
  const [replay, setReplay] = useState(0);
  useEffect(() => {
    setReady(true);
    const element = button.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div className='hero-teal margin-crane'>
      <div className='crane-display'>
        <button
          ref={button}
          type='button'
          className={`crane-replay ${ready && !seen && motion ? 'crane-waiting' : ''}`}
          aria-label='Replay crane folding animation'
          onClick={() => {
            if (motion) {
              setSeen(true);
              setReplay((value) => value + 1);
            }
          }}
        >
          <Crane key={`${seen}-${replay}`} animated={seen && motion} />
        </button>
        <AnimatedNote
          className='crane-caption'
          text='A few folds, a few ideas.'
        />
      </div>
    </div>
  );
}
