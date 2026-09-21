import { useEffect, useRef, useState } from 'react';
import { personalNotes } from './personalNotes';
import { pageIndex, folio } from './pageIndex';

export default function StickyNotes() {
  const [active, setActive] = useState<string | null>(null);
  const lastOpened = useRef<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const note = personalNotes.find((item) => item.id === active);
  useEffect(() => {
    if (!lastOpened.current) return;
    const target = active
      ? root.current?.querySelector<HTMLElement>('.personal-note-title')
      : root.current?.querySelector<HTMLElement>(
          `[data-note-id="${lastOpened.current}"]`
        );
    target?.focus({ preventScroll: true });
  }, [active]);
  return (
    <div
      ref={root}
      className='sticky-notes'
      role='group'
      aria-label='Notebook notes'
      onKeyDown={(event) => {
        if (event.key === 'Escape' && note) {
          event.preventDefault();
          setActive(null);
        }
      }}
    >
      <div className='sticky-note-stack'>
        <span className='note-sheet note-sheet-back' aria-hidden='true' />
        <span className='note-sheet note-sheet-middle' aria-hidden='true' />
        <div
          className={`note-sheet note-sheet-front ${note ? 'personal-note-front' : ''}`}
          key={active ?? 'index'}
        >
          {note ? (
            <article
              className='key-note personal-note'
              aria-labelledby='personal-note-title'
            >
              <button
                type='button'
                className='note-back'
                onClick={() => setActive(null)}
              >
                ← back to the key
              </button>
              <p className='personal-note-kind'>
                <span aria-hidden='true'>{note.mark}</span> {note.label}
              </p>
              <h3
                id='personal-note-title'
                className='personal-note-title'
                tabIndex={-1}
              >
                {note.title}
              </h3>
              <p className='personal-note-copy'>{note.body}</p>
              <p className='hand-note personal-note-annotation'>
                {note.annotation}
              </p>
              {note.link && (
                <a
                  className='personal-note-link'
                  href={pageIndex[note.link.page].href}
                >
                  {note.link.label}{' '}
                  <span data-page={note.link.page}>
                    {folio(note.link.page)}
                  </span>
                </a>
              )}
            </article>
          ) : (
            <aside
              className='key-note note-index'
              aria-labelledby='note-index-title'
            >
              <span className='tape' aria-hidden='true' />
              <h3 id='note-index-title' className='hand-note'>
                A little key
              </h3>
              <p className='note-index-hint'>Pick a mark. Find a note.</p>
              <ul className='note-index-list'>
                {personalNotes.map((item) => (
                  <li key={item.id}>
                    <button
                      type='button'
                      data-note-id={item.id}
                      title={item.definition}
                      onClick={() => {
                        lastOpened.current = item.id;
                        setActive(item.id);
                      }}
                    >
                      <span className='note-mark' aria-hidden='true'>
                        {item.mark}
                      </span>
                      <span className='note-index-label'>{item.label}</span>
                      <span className='note-index-arrow' aria-hidden='true'>
                        ↗
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <a
                className='key-source'
                href='https://bulletjournal.com/blogs/faq/what-is-rapid-logging-understand-rapid-logging-bullets-and-signifiers'
              >
                A nod to Bullet Journal
                <br />
                <span>the method behind the marks ↗</span>
              </a>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
