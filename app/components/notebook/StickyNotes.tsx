import { useState, type ReactNode } from 'react';
import { pageIndex } from './pageIndex';

export default function StickyNotes({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const turn = (step: number) => setActive((value) => (value + step + 3) % 3);
  return (
    <div className='sticky-notes' role='group' aria-label='Notebook notes'>
      <div className='sticky-note-stack'>
        <span className='note-sheet note-sheet-back' aria-hidden='true' />
        <span className='note-sheet note-sheet-middle' aria-hidden='true' />
        <div className='note-sheet note-sheet-front' key={active}>
          {active === 0 ? (
            children
          ) : active === 1 ? (
            <aside className='key-note extra-note'>
              <h2 className='hand-note'>Off the clock</h2>
              <p>Origami, cycling, cubing, coffee.</p>
              <p className='hand-note'>A few of my current distractions.</p>
            </aside>
          ) : (
            <aside className='key-note extra-note'>
              <h2 className='hand-note'>Keep wandering</h2>
              <p>
                Things I'm learning, questions I'm sitting with, and ideas that
                aren't quite finished.
              </p>
              <a className='key-source' href={pageIndex.gardenWebsite.href}>
                Notes from my digital garden ↗
              </a>
            </aside>
          )}
        </div>
      </div>
      <div className='note-controls'>
        <button
          type='button'
          onClick={() => turn(-1)}
          aria-label='Previous notebook note'
        >
          ←
        </button>
        <span role='status' aria-live='polite'>
          Note {active + 1} of 3
        </span>
        <button
          type='button'
          onClick={() => turn(1)}
          aria-label='Next notebook note'
        >
          →
        </button>
      </div>
    </div>
  );
}
