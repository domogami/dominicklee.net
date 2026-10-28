import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  Badge,
  Button,
  Chevron,
  Dialog,
  Input,
  RadioGroup,
  Select,
  Tabs,
  Textarea,
  ThemeProvider,
  ThemeToggle,
} from '@domlee/ui';
import { races, measures, guideSources } from '~/politics/data';
import {
  emptyNotebook,
  NOTEBOOK_KEY,
  parseNotebook,
  type Notebook,
} from '~/politics/notebook';
import type { Candidate, Fact, Measure, Race, Source } from '~/politics/types';

type Section = 'all' | 'measures' | 'candidates' | 'choices';
type Annotation = { key: string; title: string; context?: string };
const factKey = (id: string, text: string) => {
  let h = 0;
  for (const c of text) h = (Math.imul(h, 31) + c.charCodeAt(0)) | 0;
  return `${id}:fact:${h.toString(36)}`;
};
const external = { target: '_blank', rel: 'noreferrer noopener' };
function Links({ sources }: { sources: Source[] }) {
  return (
    <ul className='pg-sources'>
      {sources.map((s, i) => (
        <li key={`${s.url}-${i}`}>
          <a href={s.url} {...external}>
            {s.label} <span aria-hidden='true'>↗</span>
          </a>
          {s.kind && <small>{s.kind.replaceAll('-', ' ')}</small>}
        </li>
      ))}
    </ul>
  );
}
function Cited({ text, sources }: { text: string; sources: Source[] }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/g).map((part, index) =>
        part.startsWith('[') ? (
          <span className='pg-inline-citation' key={index}>
            {' '}
            [
            {part
              .slice(1, -1)
              .split(';')
              .map((name, i) => {
                const label = name.trim();
                const source = sources.find(
                  (s) => s.label.toLowerCase() === label.toLowerCase()
                );
                return (
                  <span key={i}>
                    {i > 0 ? '; ' : ''}
                    {source ? (
                      <a href={source.url} {...external}>
                        {label} ↗
                      </a>
                    ) : (
                      label
                    )}
                  </span>
                );
              })}
            ]
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
const candidateSources = new Map<string, Source[]>(
  races.flatMap((r) =>
    r.candidates.map((c) => [`candidate-${c.id}`, c.sources] as const)
  )
);
function BallotSketch() {
  return (
    <svg
      className='pg-ballot-sketch'
      viewBox='0 0 200 180'
      aria-hidden='true'
      fill='none'
      stroke='currentColor'
      strokeWidth='2.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m47 88-19 21 7 51 137-3 2-51-27-19M28 109l146-3M66 108l67-2M38 160l137-3' />
      <path className='pg-sketch-paper' d='m63 21 90 7-6 76-91 2z' />
      <path d='m76 45 12 1-1 12-12-1zM97 49l37 3M74 70l12 1-1 12-12-1zM94 75l35 2M77 50l5 5 12-14' />
      <path d='m51 26-6-8M163 50l11-4M159 18l6-10' />
    </svg>
  );
}

export default function PoliticsGuide() {
  const [previousTheme] = useState(() =>
    typeof document === 'undefined'
      ? undefined
      : {
          theme: document.documentElement.dataset.theme,
          colorScheme: document.documentElement.style.colorScheme,
        }
  );
  useEffect(
    () => () => {
      if (!previousTheme) return;
      if (previousTheme.theme)
        document.documentElement.dataset.theme = previousTheme.theme;
      else delete document.documentElement.dataset.theme;
      document.documentElement.style.colorScheme = previousTheme.colorScheme;
    },
    [previousTheme]
  );
  return (
    <ThemeProvider defaultTheme='hybrid' storageKey='politics-theme'>
      <NotebookGuide />
    </ThemeProvider>
  );
}
function NotebookGuide() {
  const [notebook, setNotebook] = useState<Notebook>(emptyNotebook);
  useEffect(() => {
    let closed: HTMLDetailsElement[] = [];
    const before = () => {
      closed = [
        ...document.querySelectorAll<HTMLDetailsElement>(
          '.politics-app details:not([open])'
        ),
      ];
      closed.forEach((d) => (d.open = true));
    };
    const after = () => {
      closed.forEach((d) => (d.open = false));
      closed = [];
    };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);

  const [ready, setReady] = useState(false);
  const [canSave, setCanSave] = useState(true);
  const [status, setStatus] = useState('Opening your notebook…');
  const [scope, setScope] = useState('queen-anne');
  const [section, setSection] = useState<Section>('all');
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [annotation, setAnnotation] = useState<Annotation | null>(null);
  const [pendingImport, setPendingImport] = useState<Notebook | null>(null);
  const [importError, setImportError] = useState('');
  const [resetOpen, setResetOpen] = useState(false);
  const [tab, setTab] = useState('general-2026');
  const [mobileNav, setMobileNav] = useState(false);
  const noteOpener = useRef<HTMLElement | null>(null);
  const importInput = useRef<HTMLInputElement>(null);
  const importOpener = useRef<HTMLButtonElement>(null);
  const resetOpener = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(NOTEBOOK_KEY);
      if (saved) setNotebook(parseNotebook(saved));
      setStatus('Saved on this browser');
    } catch {
      setCanSave(false);
      setStatus(
        'Browser storage unavailable or unreadable. Export to keep your notes.'
      );
    }
    setReady(true);
    const sync = (event: StorageEvent) => {
      if (event.key !== NOTEBOOK_KEY) return;
      try {
        setNotebook(
          event.newValue ? parseNotebook(event.newValue) : emptyNotebook()
        );
      } catch {
        setStatus(
          'Another tab has an unreadable notebook. Your current notes are still here.'
        );
      }
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  useEffect(() => {
    if (!ready || !canSave) return;
    try {
      localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(notebook));
      setStatus('Saved on this browser');
    } catch {
      setCanSave(false);
      setStatus('Could not save in this browser. Export to keep your notes.');
    }
  }, [notebook, ready, canSave]);
  const visibleRaces = useMemo(
    () =>
      races.filter(
        (r) =>
          (scope === 'king-county' || r.queenAnne) &&
          (category === 'all' || r.category === category) &&
          `${r.office} ${r.candidates.map((c) => c.name).join(' ')}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [scope, category, query]
  );
  const visibleMeasures = measures.filter(
    (m) =>
      (category === 'all' || category === 'Measures') &&
      `${m.number} ${m.title} $<Cited text={m.summary} sources={m.sources}/>`
        .toLowerCase()
        .includes(query.toLowerCase())
  );
  const scopeRaces = races.filter(
    (r) => scope === 'king-county' || r.queenAnne
  );
  const count =
    scopeRaces.filter((r) => notebook.choices[r.id]).length +
    measures.filter((m) => notebook.choices[m.id]).length;
  const total = scopeRaces.length + measures.length;
  const choose = (key: string, value: string) =>
    setNotebook((n) => ({ ...n, choices: { ...n.choices, [key]: value } }));
  const annotate = (item: Annotation, opener: HTMLElement) => {
    noteOpener.current = opener;
    setAnnotation(item);
  };
  const note = (key: string) => notebook.notes[key] ?? '';
  const noteButton = (item: Annotation, compact = false) => (
    <Button
      size='sm'
      variant='ghost'
      className={compact ? 'pg-inline-note' : 'pg-note-button'}
      onClick={(event) => annotate(item, event.currentTarget)}
      aria-label={`Annotate ${item.title}`}
    >
      {note(item.key) ? '✎ Note saved' : compact ? '＋ note' : '✎ Add a note'}
    </Button>
  );
  const exportNotebook = () => {
    const blob = new Blob([JSON.stringify(notebook, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dom-voting-notebook-2026.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(
      'Notebook exported. The file contains your private choices and notes.'
    );
  };
  const readImport = async (file?: File) => {
    if (!file) return;
    try {
      if (file.size > 2_000_000)
        throw new Error('Choose a backup smaller than 2 MB.');
      const value = parseNotebook(await file.text());
      const raceValues = new Map(
        races.map((r) => [r.id, new Set(r.candidates.map((c) => c.id))])
      );
      for (const [id, choice] of Object.entries(value.choices)) {
        if (!choice) continue;
        if (measures.some((m) => m.id === id)) {
          if (!['yes', 'no'].includes(choice))
            throw new Error('This backup contains an invalid measure choice.');
        } else if (!raceValues.get(id)?.has(choice))
          throw new Error('This backup contains an unknown candidate choice.');
      }
      setPendingImport(value);
      setImportError('');
    } catch (error) {
      setImportError(
        error instanceof Error ? error.message : 'Could not read this backup.'
      );
    } finally {
      if (importInput.current) importInput.current.value = '';
    }
  };
  const selectSection = (value: Section) => {
    setSection(value);
    setMobileNav(false);
    setTab('general-2026');
    setCategory('all');
  };
  const categories = [...new Set(races.map((r) => r.category))];
  const annotationsCount = Object.values(notebook.notes).filter(Boolean).length;
  const choiceSummary = (
    <div className='pg-choice-summary'>
      <div className='pg-summary-heading'>
        <div>
          <span className='pg-eyebrow'>YOUR WORKING BALLOT</span>
          <h2>
            A few decisions,
            <br />
            in your own time.
          </h2>
        </div>
        <span className='pg-hand'>
          {count} of {total} marked
        </span>
      </div>
      <p>
        Your marks help you prepare. Submit your official ballot separately.
        Queen Anne is a district-based starting view; verify the contests on
        your own ballot.
      </p>
      <div className='pg-choice-list'>
        {measures.map((m) => (
          <div key={m.id}>
            <a href={`#${m.id}`} onClick={() => setSection('all')}>
              {m.number} · {m.title}
            </a>
            <strong>
              {notebook.choices[m.id]?.toUpperCase() || 'Undecided'}
            </strong>
          </div>
        ))}
        {scopeRaces.map((r) => (
          <div key={r.id}>
            <a
              href={`#${r.id}`}
              onClick={() => {
                setSection('all');
                setQuery('');
                setCategory('all');
              }}
            >
              {r.office}
            </a>
            <strong>
              {r.candidates.find((c) => c.id === notebook.choices[r.id])
                ?.name || 'Undecided'}
            </strong>
          </div>
        ))}
      </div>
      <h3>
        Your annotations <span className='pg-count'>{annotationsCount}</span>
      </h3>
      {Object.entries(notebook.notes).filter(([, text]) => text).length ? (
        <div className='pg-saved-notes'>
          {Object.entries(notebook.notes)
            .filter(([, text]) => text)
            .map(([key, text]) => (
              <div key={key}>
                <span>{annotationTitle(key)}</span>
                <p>{text}</p>
                {noteButton({ key, title: annotationTitle(key) })}
              </div>
            ))}
        </div>
      ) : (
        <p>
          No notes yet. Use “Add a note” on a measure or candidate, or annotate
          a specific bullet.
        </p>
      )}
    </div>
  );
  function annotationTitle(key: string) {
    const m = measures.find(
      (item) => key === item.id || key.startsWith(item.id + ':')
    );
    if (m) return `${m.number} · ${m.title}`;
    for (const r of races) {
      const c = r.candidates.find(
        (item) =>
          key === `candidate-${item.id}` ||
          key.startsWith(`candidate-${item.id}:`)
      );
      if (c) return `${c.name} · ${r.office}`;
    }
    return 'Personal annotation';
  }
  function Facts({
    items,
    id,
    title,
  }: {
    items: Fact[];
    id: string;
    title: string;
  }) {
    return (
      <div className='pg-fact-group' data-section={title}>
        <h4>{title}</h4>
        {items.length ? (
          <ul>
            {items.map((fact, i) => (
              <li key={i}>
                <span>
                  {fact.date && (
                    <small className='pg-fact-date'>
                      {fact.date} UTC · {fact.kind?.replaceAll('-', ' ')}
                    </small>
                  )}
                  <Cited
                    text={fact.text}
                    sources={candidateSources.get(id) ?? []}
                  />
                  {fact.url && (
                    <>
                      {' '}
                      <a
                        className='pg-evidence-link'
                        href={fact.url}
                        {...external}
                        aria-label={`Source for ${fact.text}`}
                      >
                        source ↗
                      </a>
                    </>
                  )}
                </span>
                {noteButton(
                  {
                    key: factKey(id, fact.text),
                    title: `${annotationTitle(id)}: ${fact.text}`,
                    context: fact.text,
                  },
                  true
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className='pg-empty'>
            No sourced summary added yet. Read the linked official statement.
          </p>
        )}
      </div>
    );
  }
  function CandidateCard({
    candidate: c,
    race: r,
  }: {
    candidate: Candidate;
    race: Race;
  }) {
    const selected = notebook.choices[r.id] === c.id;
    const id = `candidate-${c.id}`;
    return (
      <article
        className={`pg-candidate ${selected ? 'pg-candidate--selected' : ''}`}
        aria-label={c.name}
      >
        <header>
          <span className='pg-candidate-order'>
            {r.candidates.indexOf(c) + 1 === 1 ? 'A' : 'B'}{' '}
            <span>
              {' '}
              /{' '}
              {c.party && c.party !== 'Nonpartisan'
                ? `Prefers ${c.party} Party`
                : 'Nonpartisan'}
            </span>
          </span>
          <h3>{c.name}</h3>
          <div className='pg-candidate-meta'>
            {c.incumbent && <Badge tone='sage'>Incumbent</Badge>}
            <span>
              {r.candidates.length === 1
                ? 'Only listed candidate'
                : 'General-election candidate'}
            </span>
          </div>
        </header>
        <p className='pg-coverage'>
          {c.record.length
            ? 'Record & campaign sources reviewed'
            : c.history.length
              ? 'Candidate statement & biography reviewed'
              : 'Roster verified · profile research pending'}
        </p>
        {Facts({ items: c.history, title: 'Experience & history', id })}
        {Facts({ items: c.priorities, title: 'Stated priorities', id })}
        {!!c.record.length &&
          Facts({ items: c.record, title: 'Positions & selected record', id })}
        {!!c.statements.length &&
          Facts({ items: c.statements, title: 'Public statements', id })}
        {!!c.questions.length && (
          <div className='pg-fact-group' data-section='Things to weigh'>
            <h4>Things to weigh</h4>
            <ul>
              {c.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}
        <details className='pg-candidate-sources'>
          <summary>
            Sources & social accounts{' '}
            <span>{c.sources.length + c.social.length}</span>
          </summary>
          <Links sources={c.sources} />
          {!!c.social.length && (
            <>
              <h4>Social accounts & statements</h4>
              <Links sources={c.social} />
            </>
          )}
          <p className='pg-research-status'>{c.researchStatus}</p>
          {c.statement && (
            <details>
              <summary>Read the candidate’s submitted statement</summary>
              <p className='pg-full-statement'>{c.statement}</p>
            </details>
          )}
        </details>
        <footer>
          <Button
            variant={selected ? 'primary' : 'secondary'}
            aria-pressed={selected}
            disabled={!ready}
            onClick={() => choose(r.id, selected ? '' : c.id)}
            data-haptic='selection'
          >
            {selected ? '✓ My choice' : `Choose ${c.name.split(' ')[0]}`}
          </Button>
          {noteButton({ key: id, title: c.name })}
          {note(id) && <p className='pg-note-preview'>{note(id)}</p>}
        </footer>
      </article>
    );
  }
  function RaceCard({ race: r }: { race: Race }) {
    const chosen = r.candidates.find((c) => c.id === notebook.choices[r.id]);
    return (
      <details
        className='pg-race'
        id={r.id}
        open={
          r.id === 'king-186953' ||
          r.office.startsWith('Legislative District No. 36')
        }
      >
        <summary>
          <div>
            <span className='pg-eyebrow'>
              {r.category} ·{' '}
              {r.candidates.length === 1 ? 'Unopposed' : 'Compare candidates'}
            </span>
            <h2>{r.office}</h2>
          </div>
          <span className='pg-race-choice'>
            {chosen ? `✓ ${chosen.name}` : 'Undecided'}
            <Chevron size={20} />
          </span>
        </summary>
        <div className='pg-race-content'>
          <p className='pg-race-context'>
            {r.queenAnne
              ? 'Included in the Queen Anne district starting view.'
              : 'Elsewhere in King County; confirm this district before marking.'}{' '}
            Candidate order follows the county listing. Campaign priorities
            below are attributed claims.
          </p>
          <div
            className={`pg-candidate-grid ${r.candidates.length === 1 ? 'pg-candidate-grid--single' : ''}`}
          >
            {r.candidates.map((c) => (
              <div key={c.id} className='pg-candidate-holder'>
                {CandidateCard({ candidate: c, race: r })}
              </div>
            ))}
          </div>
          <RadioGroup
            label={`Your choice · ${r.office}`}
            name={r.id}
            value={notebook.choices[r.id] || ''}
            onValueChange={(value) => choose(r.id, value)}
            orientation='horizontal'
            disabled={!ready}
            options={[
              ...r.candidates.map((c) => ({ value: c.id, label: c.name })),
              { value: '', label: 'Undecided' },
            ]}
          />
        </div>
      </details>
    );
  }
  function MeasureCard({
    measure: m,
    index,
  }: {
    measure: Measure;
    index: number;
  }) {
    return (
      <article className='pg-measure' id={m.id}>
        <header className='pg-measure-header'>
          <span className='pg-folio'>0{index + 1}</span>
          <div>
            <span className='pg-eyebrow'>{m.number} · Ballot measure</span>
            <h2>{m.title}</h2>
            <p>
              <Cited text={m.summary} sources={m.sources} />
            </p>
          </div>
          <Badge tone={notebook.choices[m.id] ? 'sage' : 'neutral'}>
            {notebook.choices[m.id]
              ? `Marked ${notebook.choices[m.id].toUpperCase()}`
              : 'Undecided'}
          </Badge>
        </header>
        <div className='pg-measure-body'>
          <div className='pg-vote-effects'>
            <div>
              <span className='pg-vote-label'>IF YES</span>
              <p>
                <Cited text={m.yes} sources={m.sources} />
              </p>
            </div>
            <div>
              <span className='pg-vote-label'>IF NO</span>
              <p>
                <Cited text={m.no} sources={m.sources} />
              </p>
            </div>
          </div>
          <div className='pg-current-law'>
            <h3>Where things stand</h3>
            <p>
              <Cited text={m.currentLaw} sources={m.sources} />
            </p>
          </div>
          <div className='pg-tradeoffs'>
            {m.tradeoffs.map((item) => (
              <div key={item.label}>
                <h3>{item.label}</h3>
                <p>
                  <Cited text={item.text} sources={m.sources} />
                </p>
                {noteButton(
                  {
                    key: factKey(m.id, item.text),
                    title: `${m.number}: ${item.label}`,
                    context: item.text,
                  },
                  true
                )}
              </div>
            ))}
          </div>
          <div className='pg-fiscal'>
            <h3>Cost & implementation</h3>
            <p>
              <Cited text={m.fiscal} sources={m.sources} />
            </p>
            <p className='pg-caveat'>
              <Cited text={m.caveat} sources={m.sources} />
            </p>
          </div>
          <details>
            <summary>
              Brief history & primary sources <span>{m.sources.length}</span>
            </summary>
            <ul>
              {m.history.map((h) => (
                <li key={h}>
                  <Cited text={h} sources={m.sources} />
                </li>
              ))}
            </ul>
            <Links sources={m.sources} />
          </details>
          <div className='pg-mark-row'>
            <RadioGroup
              label={`Your choice · ${m.number}`}
              name={m.id}
              value={notebook.choices[m.id] || ''}
              onValueChange={(value) => choose(m.id, value)}
              orientation='horizontal'
              disabled={!ready}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: '', label: 'Undecided' },
              ]}
            />
            {noteButton({ key: m.id, title: `${m.number} · ${m.title}` })}
          </div>
          {note(m.id) && <p className='pg-note-preview'>{note(m.id)}</p>}
        </div>
      </article>
    );
  }
  const guide = (
    <>
      <section className='pg-intro' aria-labelledby='guide-title'>
        <div>
          <span className='pg-eyebrow'>WASHINGTON · NOVEMBER 3, 2026</span>
          <h1 id='guide-title'>
            A little research.
            <br />A considered vote.
          </h1>
          <p>
            A personal field guide to the people and proposals on the ballot.
            Read both sides, follow the sources, and leave room for your own
            thinking.
          </p>
          <div className='pg-intro-tags'>
            <Badge tone='sage'>Queen Anne, Seattle</Badge>
            <Badge tone='neutral'>Checked October 28</Badge>
          </div>
        </div>
        <div className='pg-sketch-wrap'>
          <BallotSketch />
          <span className='pg-hand'>read. question. decide.</span>
        </div>
      </section>
      <div className='pg-context'>
        <strong>Your neighborhood, your ballot.</strong>
        <span>
          Queen Anne starts with Congress 7, Legislature 36, County Council 4
          and Seattle’s applicable courts. The printed pamphlet covers other
          districts, too.{' '}
          <a href='https://votewa.gov/' {...external}>
            Verify your exact ballot ↗
          </a>
        </span>
      </div>
      <div className='pg-controls'>
        <Input
          label='Find a person or measure'
          placeholder='Try “Jayapal” or “sports”…'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Select
          label='Area to browse'
          value={scope}
          onChange={(e) => setScope(e.target.value)}
        >
          <option value='queen-anne'>
            Queen Anne · district starting view
          </option>
          <option value='king-county'>King County · all candidates</option>
        </Select>
        <Select
          label='Type of contest'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='all'>All contests</option>
          <option value='Measures'>Measures</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
      </div>
      <nav className='pg-section-nav' aria-label='Guide sections'>
        {(
          [
            ['all', 'The guide'],
            ['measures', 'Measures'],
            ['candidates', 'Candidates'],
            ['choices', 'My choices'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type='button'
            onClick={() => setSection(id)}
            aria-current={section === id ? 'page' : undefined}
          >
            {label}
            {id === 'choices' && <span>{count}</span>}
          </button>
        ))}
      </nav>
      {section === 'choices' ? (
        choiceSummary
      ) : (
        <>
          {(section === 'all' || section === 'measures') &&
            !!visibleMeasures.length && (
              <section aria-labelledby='measures-title'>
                <div className='pg-section-title'>
                  <span className='pg-eyebrow'>01 / THE PROPOSALS</span>
                  <h2 id='measures-title'>What changes with your vote?</h2>
                  <p>
                    Legal effects, official estimates, and arguments are
                    identified separately.
                  </p>
                </div>
                {visibleMeasures.map((m, i) => (
                  <div key={m.id}>{MeasureCard({ measure: m, index: i })}</div>
                ))}
              </section>
            )}
          {(section === 'all' || section === 'candidates') &&
            !!visibleRaces.length && (
              <section aria-labelledby='candidates-title'>
                <div className='pg-section-title'>
                  <span className='pg-eyebrow'>02 / THE PEOPLE</span>
                  <h2 id='candidates-title'>Same questions. Side by side.</h2>
                  <p>
                    {visibleRaces.length} races ·{' '}
                    {visibleRaces.reduce(
                      (sum, r) => sum + r.candidates.length,
                      0
                    )}{' '}
                    candidates. Open an office to compare. Nonpartisan means no
                    party preference is listed.
                  </p>
                </div>
                {visibleRaces.map((r) => (
                  <div key={r.id}>{RaceCard({ race: r })}</div>
                ))}
              </section>
            )}
          {((section === 'all' &&
            !visibleMeasures.length &&
            !visibleRaces.length) ||
            (section === 'measures' && !visibleMeasures.length) ||
            (section === 'candidates' && !visibleRaces.length)) && (
            <div className='pg-no-results'>
              <h2>No matching contests</h2>
              <p>Try a different name, contest type, or area.</p>
              <Button
                variant='secondary'
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
  const methodology = (
    <section className='pg-method'>
      <span className='pg-eyebrow'>THE FINE PRINT, IN PLAIN ENGLISH</span>
      <h1>Read the receipts.</h1>
      <p>
        This guide is a research notebook, not an endorsement. The county’s
        official roster establishes who is running. A campaign website or
        candidate-submitted statement establishes what a candidate says; it does
        not independently establish that their promised results will happen.
      </p>
      <h2>How to read a profile</h2>
      <ul>
        <li>
          <strong>Experience & history:</strong> dated office, work and
          community experience; self-reported experience is labeled.
        </li>
        <li>
          <strong>Stated priorities:</strong> a candidate’s public positions,
          attributed to their campaign or submitted statement.
        </li>
        <li>
          <strong>Positions & selected record:</strong> official actions and
          institutional biographies when available.
        </li>
        <li>
          <strong>Public statements:</strong> linked posts or statements, with
          dates when verified. An account link alone is not evidence of a
          particular view.
        </li>
        <li>
          <strong>Research coverage:</strong> each profile says whether it
          contains a record review, a campaign summary, or only a verified
          listing. Missing information does not imply support, opposition, or
          misconduct.
        </li>
      </ul>
      <h2>Scope & boundaries</h2>
      <p>
        The Queen Anne view is a starting set based on district maps, not a
        personalized ballot lookup. It includes statewide measures and Supreme
        Court races, Congress 7, Legislature 36, countywide offices, County
        Council 4, West District Court and Seattle Municipal Court. Other King
        County races remain available in the area filter. Your registered
        address determines eligibility.
      </p>
      <h2>Your private notebook</h2>
      <p>
        Choices and annotations are stored with localStorage on this browser and
        origin. There is no account or cross-device sync. Clearing browser data
        removes them; export a backup if you want to keep them. This feature
        sends no choices or notes to a server. Other scripts running on the same
        website origin can access browser storage. An exported file contains
        your choices and notes.
      </p>
      <h2>Source desk</h2>
      <Links sources={guideSources} />
      <p className='pg-research-status'>
        Research checked October 28, 2026. Sources may change after this date.
      </p>
    </section>
  );
  return (
    <div className='politics-app'>
      <a className='pg-skip' href='#politics-main'>
        Skip to the voting guide
      </a>
      <aside className={`pg-rail ${mobileNav ? 'pg-rail--open' : ''}`}>
        <div className='pg-rail-top'>
          <a className='pg-brand' href='/'>
            <span className='pg-brand-mark' aria-hidden='true'>
              d.
            </span>
            Dom Lee<span className='pg-brand-sub'>an open notebook</span>
          </a>
          <button
            className='pg-menu'
            type='button'
            aria-expanded={mobileNav}
            aria-controls='politics-navigation'
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? 'Close' : 'Index'}{' '}
            <Chevron direction={mobileNav ? 'up' : 'down'} />
          </button>
        </div>
        <div className='pg-rail-inner' id='politics-navigation'>
          <div className='pg-rail-label'>A PAGE FOR MAKING SENSE</div>
          <a className='pg-active-link' href='/politics/' aria-current='page'>
            <span>17</span> Politics <span aria-hidden='true'>↗</span>
          </a>
          <nav aria-label='Politics index'>
            <button onClick={() => selectSection('all')}>
              The election guide
            </button>
            <button onClick={() => selectSection('measures')}>
              Ballot measures <span>{measures.length}</span>
            </button>
            <button onClick={() => selectSection('candidates')}>
              The candidates
            </button>
            <button onClick={() => selectSection('choices')}>
              My choices & notes <span>{count}</span>
            </button>
          </nav>
          <div className='pg-rail-note'>
            <span className='pg-hand'>a mark worth thinking about.</span>
            <p>
              Your choices belong to you.
              <br />
              Nothing is preselected.
            </p>
          </div>
          <div className='pg-rail-bottom'>
            <a href='https://votewa.gov/' {...external}>
              Your official ballot ↗
            </a>
            <a href='/'>← Back to the notebook</a>
            {ready && <ThemeToggle compact />}
            <span className='pg-rail-date'>p.17 / politics</span>
          </div>
        </div>
      </aside>
      <div className='pg-page'>
        <header className='pg-topbar'>
          <span>
            THE VOTING NOTEBOOK <span className='pg-topbar-slash'>/</span> 2026
          </span>
          <a href='#notebook-tools'>
            Your notebook <span className='pg-count'>{count}</span>
          </a>
        </header>
        <main id='politics-main' className='pg-main'>
          <Tabs
            label='Election editions'
            value={tab}
            onValueChange={setTab}
            className='pg-edition-tabs'
            items={[
              {
                id: 'general-2026',
                label: '2026 General election',
                content: guide,
              },
              { id: 'method', label: 'Sources & method', content: methodology },
            ]}
          />
          <section
            className='pg-notebook-tools'
            id='notebook-tools'
            aria-labelledby='notebook-tools-title'
          >
            <div>
              <span className='pg-eyebrow'>KEEP YOUR THINKING</span>
              <h2 id='notebook-tools-title'>Your notebook, to go.</h2>
              <p role='status' className={canSave ? '' : 'pg-save-error'}>
                {status}
              </p>
            </div>
            <div className='pg-tool-buttons'>
              <Button
                variant='secondary'
                disabled={!ready}
                onClick={exportNotebook}
              >
                Export backup ↗
              </Button>
              <Button
                ref={importOpener}
                variant='ghost'
                disabled={!ready}
                onClick={() => importInput.current?.click()}
              >
                Import backup
              </Button>
              <Button variant='ghost' onClick={() => window.print()}>
                Print
              </Button>
              <Button
                ref={resetOpener}
                variant='ghost'
                disabled={!ready}
                onClick={() => setResetOpen(true)}
              >
                Clear notebook
              </Button>
              <input
                type='file'
                ref={importInput}
                accept='.json,application/json'
                aria-label='Import notebook backup file'
                hidden
                onChange={(e) => void readImport(e.target.files?.[0])}
              />
            </div>
            {importError && <p role='alert'>{importError}</p>}
          </section>
          <footer className='pg-footer'>
            <span>Made with Domino UI. Read with curiosity.</span>
            <a href='https://kingcounty.gov/elections' {...external}>
              King County Elections ↗
            </a>
          </footer>
        </main>
      </div>
      <Dialog
        open={!!annotation}
        onClose={() => setAnnotation(null)}
        title={annotation?.title ?? 'Your annotation'}
        eyebrow='IN YOUR OWN WORDS'
        description='Saved in this browser as you type.'
        returnFocusRef={noteOpener}
        footer={<Button onClick={() => setAnnotation(null)}>Done</Button>}
      >
        {annotation && (
          <>
            {annotation.context && (
              <blockquote>{annotation.context}</blockquote>
            )}
            <Textarea
              label='Your annotation'
              rows={7}
              maxLength={20000}
              value={note(annotation.key)}
              onChange={(e) =>
                setNotebook((n) => ({
                  ...n,
                  notes: { ...n.notes, [annotation.key]: e.target.value },
                }))
              }
              placeholder='What matters to you? What would you like to check?'
            />
            <p className='pg-dialog-status'>{status}</p>
          </>
        )}
      </Dialog>
      <Dialog
        open={!!pendingImport}
        onClose={() => setPendingImport(null)}
        title='Replace this notebook?'
        description='Importing replaces the current choices and annotations for this election. Export your current notebook first if you want to keep both.'
        returnFocusRef={importOpener}
        footer={
          <>
            <Button variant='ghost' onClick={() => setPendingImport(null)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (pendingImport) setNotebook(pendingImport);
                setPendingImport(null);
              }}
            >
              Replace with backup
            </Button>
          </>
        }
      >
        {pendingImport && (
          <p>
            The backup contains{' '}
            {Object.values(pendingImport.choices).filter(Boolean).length}{' '}
            choices and{' '}
            {Object.values(pendingImport.notes).filter(Boolean).length}{' '}
            annotations.
          </p>
        )}
      </Dialog>
      <Dialog
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        title='Clear your 2026 notebook?'
        description='This removes your choices and annotations from this browser. Export a backup first if you want to keep them.'
        returnFocusRef={resetOpener}
        footer={
          <>
            <Button variant='ghost' onClick={() => setResetOpen(false)}>
              Keep notebook
            </Button>
            <Button
              variant='danger'
              onClick={() => {
                setNotebook(emptyNotebook());
                setResetOpen(false);
              }}
            >
              Clear choices and notes
            </Button>
          </>
        }
      />
    </div>
  );
}
