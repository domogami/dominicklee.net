import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

function useDrawing<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [ready, setReady] = useState(false);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    setReady(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return {
    ref,
    className: `${ready ? 'draw-ready' : ''} ${seen ? 'is-drawn' : ''}`,
  };
}

export function InkLetters({ text }: { text: string }) {
  let index = 0;
  return (
    <span className='ink-letters' aria-hidden='true'>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex}>
          {wordIndex > 0 && ' '}
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {Array.from(word).map((letter) => (
              <span
                key={index}
                className='ink-letter'
                style={{ '--letter-index': index++ } as CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

export function AnimatedNote({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const drawing = useDrawing<HTMLSpanElement>();
  return (
    <span
      ref={drawing.ref}
      className={`hand-note animated-note ${drawing.className} ${className}`}
      aria-label={text}
    >
      <InkLetters text={text} />
    </span>
  );
}

export function DrawnBanner({
  text,
  folded = false,
  className = '',
}: {
  text: string;
  folded?: boolean;
  className?: string;
}) {
  const drawing = useDrawing<HTMLHeadingElement>();
  return (
    <h2
      ref={drawing.ref}
      className={`drawn-banner ${folded ? 'folded-banner' : ''} ${drawing.className} ${className}`}
      aria-label={text}
    >
      <svg viewBox='0 0 320 80' preserveAspectRatio='none' aria-hidden='true'>
        {folded ? (
          <>
            <path
              className='banner-tail'
              pathLength='1'
              d='M57 30 4 30 24 49 5 72 81 72 81 55M263 30 316 30 296 49 315 72 239 72 239 55'
            />
            <path
              className='banner-fold'
              pathLength='1'
              d='M57 55 81 72 81 55ZM263 55 239 72 239 55Z'
            />
            <path
              className='banner-face'
              pathLength='1'
              d='M57 8Q157 5 263 8L263 55Q157 52 57 55Z'
            />
          </>
        ) : (
          <path
            className='banner-face'
            pathLength='1'
            d='M3 4 317 4 300 40 317 76 3 76 20 40Z'
          />
        )}
      </svg>
      <span className='banner-label'>
        <InkLetters text={text} />
      </span>
    </h2>
  );
}

export function DrawnRibbon({ text }: { text: string }) {
  const drawing = useDrawing<HTMLParagraphElement>();
  return (
    <p
      ref={drawing.ref}
      className={`ribbon eyebrow drawn-banner drawn-ribbon ${drawing.className}`}
    >
      <svg viewBox='0 0 320 80' preserveAspectRatio='none' aria-hidden='true'>
        <path
          className='banner-face'
          pathLength='1'
          d='M3 4 317 4 305 40 317 76 3 76 15 40Z'
        />
      </svg>
      <span className='banner-label'>
        <span className='visually-hidden'>{text}</span>
        <InkLetters text={text} />
      </span>
    </p>
  );
}

export function GardenPlant() {
  const drawing = useDrawing<HTMLButtonElement>();
  const [replay, setReplay] = useState(0);
  return (
    <button
      type='button'
      ref={drawing.ref}
      className={`garden-plant ${drawing.className}`}
      aria-label='Replay plant drawing animation'
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setReplay((value) => value + 1);
      }}
      onClick={() => setReplay((value) => value + 1)}
    >
      <svg key={replay} viewBox='0 0 120 144' fill='none' aria-hidden='true'>
        <path
          className='plant-stem'
          pathLength='1'
          d='M59 104Q65 91 61 77Q64 65 61 57Q59 53 59 49Q55 40 61 33Q61 21 67 13M61 77Q44 69 23 53M61 57Q80 45 92 26'
        />
        <path
          className='plant-leaf leaf-one'
          pathLength='1'
          d='M59 49Q35 46 35 20Q60 20 59 49Z'
        />
        <path
          className='plant-leaf leaf-two'
          pathLength='1'
          d='M61 57Q61 30 92 26Q94 50 61 57Z'
        />
        <path
          className='plant-leaf leaf-three'
          pathLength='1'
          d='M61 77Q32 79 23 53Q52 51 61 77Z'
        />
        <path
          className='plant-leaf leaf-four'
          pathLength='1'
          d='M61 33Q57 11 79 6Q85 25 61 33Z'
        />
        <path
          className='plant-pot'
          pathLength='1'
          d='M34 103Q61 100 87 103L80 134Q60 139 42 134ZM31 94Q60 91 90 94L89 103Q60 106 32 103Z'
        />
        <path
          className='plant-detail'
          pathLength='1'
          d='M47 113 50 126M37 140Q61 143 85 140'
        />
      </svg>
    </button>
  );
}

const milestones = [
  {
    stage: '01 / High school',
    title: 'Building & finding my voice',
    details: ['FIRST Robotics & Debate Team'],
  },
  {
    stage: '02 / UC San Diego',
    title: 'Following my curiosity',
    details: [
      'Mathematics–Computer Science major',
      'Cognitive Science minor',
      'IEEE · ACM · UCSD Cycling',
    ],
  },
  {
    stage: '03 / Amazon Prime Video',
    title: 'Prime Video Watch Party',
    details: [
      'Synchronizing streams so friends and families could watch Prime Video together, virtually, across devices.',
    ],
  },
  {
    stage: '04 / Amazon Prime Video',
    title: 'Prime Video Marketing Automation',
    details: ['After Watch Party died... This is where I’m building today.'],
  },
];

function WrittenMilestone({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[number];
  index: number;
}) {
  const drawing = useDrawing<HTMLLIElement>();
  const delay = 450 + index * 180;
  let letterIndex = 0;
  return (
    <li
      ref={drawing.ref}
      className={`written-milestone ${drawing.className} ${index === 3 ? 'journey-current' : ''}`}
      style={
        {
          '--ink-delay': `${delay}ms`,
          '--detail-delay': `${delay + milestone.title.length * 75}ms`,
        } as CSSProperties
      }
    >
      <svg
        className='timeline-thread'
        viewBox='0 0 20 200'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <path pathLength='1' d='M10 0 C8 43 13 64 10 100 S8 163 10 200' />
      </svg>
      <svg className='timeline-dot' viewBox='0 0 24 24' aria-hidden='true'>
        <path
          pathLength='1'
          d='M12 4C22 3 24 19 14 21C3 23 0 8 9 4C11 3 14 4 16 5'
        />
      </svg>
      <span className='journey-stage'>
        {milestone.stage}
        {index === 3 && <span className='now-stamp'>NOW</span>}
      </span>
      <h4 aria-label={milestone.title}>
        <span aria-hidden='true'>
          {milestone.title.split(' ').map((word, wordIndex) => (
            <span className='timeline-word' key={wordIndex}>
              {Array.from(word).map((letter, i) => (
                <span
                  className='ink-letter'
                  key={i}
                  style={{ '--letter-index': letterIndex++ } as CSSProperties}
                >
                  {letter}
                </span>
              ))}{' '}
            </span>
          ))}
        </span>
      </h4>
      <div className='timeline-details'>
        {milestone.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
    </li>
  );
}

export function WrittenTimeline() {
  return (
    <ol className='journey-timeline'>
      {milestones.map((milestone, index) => (
        <WrittenMilestone
          key={milestone.stage}
          milestone={milestone}
          index={index}
        />
      ))}
    </ol>
  );
}

export function ContactFlight() {
  const drawing = useDrawing<HTMLDivElement>();
  return (
    <div
      ref={drawing.ref}
      className={`contact-illustration ${drawing.className}`}
    >
      <svg
        className='contact-flight'
        viewBox='-50 0 290 150'
        fill='none'
        aria-hidden='true'
      >
        <path
          className='post-trail'
          pathLength='1'
          d='M40 96C85 96 175 108 169 62C165 31 123 35 130 62C138 91 187 68 210 39'
        />
        <g className='post-paper'>
          <path
            className='post-silhouette'
            pathLength='1'
            d='M-22 -24L22 -24L22 24L-22 24L-22 0Z'
          />
          <path
            className='post-writing'
            pathLength='1'
            d='M-13 -12L12 -12M-13 -3L8 -3M-13 6L4 6'
          />
          <path
            className='post-crease'
            pathLength='1'
            d='M-10 5L34 0L-18 24Z'
          />
        </g>
        <g className='letter-pointer'>
          <path pathLength='1' d='M-38 112Q-15 136 2 101M-9 105 2 101 3 113' />
        </g>
      </svg>
    </div>
  );
}

export function SketchLink({
  href,
  label,
  kind,
}: {
  href: string;
  label: string;
  kind: 'code' | 'people' | 'plant';
}) {
  const icon =
    kind === 'code'
      ? 'M13 10 7 16 13 22M23 10 29 16 23 22M20 7 16 25'
      : kind === 'people'
        ? 'M11 13A4 4 0 1 0 11 5A4 4 0 1 0 11 13M5 26V22Q5 16 11 16Q17 16 17 22V26M24 14A3 3 0 1 0 24 8A3 3 0 1 0 24 14M21 18Q29 16 30 25'
        : 'M18 27V14M18 21Q6 23 6 12Q18 11 18 21M18 15Q18 4 29 5Q31 16 18 15';
  return (
    <a className={`sketch-link sketch-${kind}`} href={href}>
      <svg
        className='sketch-frame'
        viewBox='0 0 160 64'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <path className='sketch-guide' d='M4 6 156 4 157 58 3 60Z' />
        <path
          className='sketch-outline'
          pathLength='1'
          d='M4 6Q77 3 156 4L157 58Q80 61 3 60Z'
        />
      </svg>
      <svg className='sketch-icon' viewBox='0 0 36 32' aria-hidden='true'>
        <path d={icon} />
      </svg>
      <span>{label}</span>
      <span className='sketch-arrow-link' aria-hidden='true'>
        ↗
      </span>
    </a>
  );
}
