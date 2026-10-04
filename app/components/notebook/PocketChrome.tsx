import { useRef, useState, type CSSProperties, type ReactNode } from 'react';

export function SketchHome() {
  const [replay, setReplay] = useState(0);
  const folds = [
    'M10 31 15 28 14 25Z',
    'M16 24 27 47 30 37Z',
    'M31 28 40 17 43 26 34 30 31 35Z',
    'M29 47 34 33 36 44Z',
    'M36 31 56 20 48 48 38 44Z',
    'M50 48 53 38 62 37Z',
  ];
  return (
    <a
      className='pocket-home'
      href='/'
      aria-label='Back to Dom’s notebook'
      title='Back to the notebook'
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setReplay((v) => v + 1);
      }}
    >
      <svg key={replay} viewBox='0 0 70 66' fill='none' aria-hidden='true'>
        <path
          className='home-hex'
          pathLength='1'
          d='M35 3 64 18l-1 31-29 15L6 48 5 18Z'
        />
        {folds.map((d, i) => (
          <path
            key={d}
            className='home-fold'
            d={d}
            pathLength='1'
            style={{ '--stroke-order': i } as CSSProperties}
          />
        ))}
      </svg>
    </a>
  );
}

export function SettingsGlyph() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    >
      <path d='M3 6q9-1 18 0M3 12h18M3 18q9 1 18 0' />
      <path d='M7 3v6M16 9v6M9 15v6' strokeWidth='3' />
    </svg>
  );
}

const symbols: Record<string, string> = {
  now: 'M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM12 1v2m0 18v2M1 12h2m18 0h2',
  hours: 'M12 2C6 2 2 6 2 12s4 10 10 10 10-4 10-10S18 2 12 2Zm0 4v7l5 2',
  week: 'M4 5h16l1 16H3ZM7 2v6m10-6v6M4 10h16M7 14h3m4 0h3M7 18h3',
  details: 'M5 3h14l1 18H4ZM8 8h8M8 12h8M8 16h5',
  calculate:
    'M4 4h16v16H4ZM7 8h4m-2-2v4M14 8h3M7 14l4 4m-4 0 4-4M14 15h3m-3 3h3',
  convert: 'M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4',
  history: 'M5 5C12-1 23 4 22 13s-13 13-18 5M5 1v5H1M12 6v7l5 2',
};

export function AppTabs<T extends string>({
  tabs,
  active,
  select,
  label,
  prefix,
}: {
  tabs: { id: T; label: string; icon?: string }[];
  active: T;
  select: (tab: T) => void;
  label: string;
  prefix: string;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <nav className='pocket-nav' aria-label={label}>
      <div role='tablist' aria-label={label}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type='button'
            role='tab'
            data-haptic='selection'
            ref={(el) => {
              buttons.current[i] = el;
            }}
            id={`${prefix}-tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`${prefix}-panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => select(tab.id)}
            onKeyDown={(e) => {
              const step =
                e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
              if (!step && e.key !== 'Home' && e.key !== 'End') return;
              e.preventDefault();
              const next =
                e.key === 'Home'
                  ? 0
                  : e.key === 'End'
                    ? tabs.length - 1
                    : (i + step + tabs.length) % tabs.length;
              select(tabs[next].id);
              buttons.current[next]?.focus();
            }}
          >
            <svg
              key={`${tab.id}-${active === tab.id}`}
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path pathLength='1' d={symbols[tab.icon ?? tab.id]} />
            </svg>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export function AppPanel({
  id,
  active,
  prefix,
  children,
  className = '',
}: {
  id: string;
  active: string;
  prefix: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={`${prefix}-panel-${id}`}
      role='tabpanel'
      aria-labelledby={`${prefix}-tab-${id}`}
      hidden={id !== active}
      className={`pocket-panel ${className}`}
      tabIndex={0}
    >
      {children}
    </section>
  );
}
