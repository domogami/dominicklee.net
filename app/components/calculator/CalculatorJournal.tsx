import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  AppPanel,
  AppTabs,
  SettingsGlyph,
  SketchHome,
} from '~/components/notebook/PocketChrome';
import {
  armHapticCue,
  haptic,
  InkSwitch,
  TouchFeedbackSetting,
} from '~/components/TouchFeedback';
import SketchArrow from '~/components/notebook/SketchArrow';
import {
  calculate,
  conversions,
  convert,
  formatNumber,
  prettyExpression,
  preview,
  type Angle,
} from '~/calculator/math';

type Entry = { id: string; expression: string; value: number; angle: Angle };
type Settings = {
  theme: 'auto' | 'light' | 'dark';
  motion: boolean;
  angle: Angle;
};
const STORE = 'calculator-journal:v1';
const defaults: Settings = {
  theme: 'auto',
  motion: true,
  angle: 'deg',
};

function Dialog({
  title,
  children,
  close,
}: {
  title: string;
  children: ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current,
      opener = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    return () => {
      dialog?.close();
      opener?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      className='calc-dialog'
      ref={ref}
      aria-labelledby='calc-settings-title'
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className='calc-dialog-heading'>
        <h2 id='calc-settings-title'>{title}</h2>
        <button
          className='calc-icon-button'
          onClick={close}
          aria-label='Close dialog'
        >
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}

function Converter({ useResult }: { useResult: (value: number) => void }) {
  const [category, setCategory] = useState('length');
  const [from, setFrom] = useState('cm'),
    [to, setTo] = useState('in');
  const [input, setInput] = useState('10');
  const units = conversions[category].units;
  let value: number | null = null,
    error = '';
  if (input.trim()) {
    try {
      value = convert(Number(input), category, from, to);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Check this value.';
    }
  }
  const chooseCategory = (next: string) => {
    setCategory(next);
    setFrom(conversions[next].units[0].id);
    setTo(conversions[next].units[1].id);
  };
  return (
    <section className='calc-converter' aria-labelledby='converter-title'>
      <h2 id='converter-title'>Convert units</h2>
      <label className='calc-field'>
        What are we measuring?
        <select
          value={category}
          onChange={(e) => chooseCategory(e.target.value)}
        >
          {Object.entries(conversions).map(([id, c]) => (
            <option key={id} value={id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label className='calc-field'>
        Value
        <input
          type='text'
          inputMode='decimal'
          value={input}
          maxLength={32}
          onChange={(e) => setInput(e.target.value)}
          autoComplete='off'
          spellCheck={false}
        />
      </label>
      <div className='calc-unit-pair'>
        <label className='calc-field'>
          From
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </label>
        <button
          className='calc-icon-button'
          aria-label='Swap units'
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
        >
          <SketchArrow direction='swap' />
        </button>
        <label className='calc-field'>
          To
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className='calc-conversion-answer' aria-live='polite'>
        <span className='calc-eyebrow'>That’s about</span>
        <output aria-label='Converted value'>
          {value === null ? '—' : formatNumber(value)}
        </output>
        <span>{units.find((u) => u.id === to)?.label}</span>
      </div>
      <p className='calc-error' role='status'>
        {error}
      </p>
      <button
        className='calc-paper-button'
        disabled={value === null}
        onClick={() => value !== null && useResult(value)}
      >
        Use in a calculation <SketchArrow />
      </button>
      <p className='calc-fine-print'>
        Volume measures use US customary units. No connection needed.
      </p>
    </section>
  );
}

const keys = [
  ['AC', 'Clear calculation', 'clear'],
  ['±', 'Change sign', 'sign'],
  ['%', 'Percent', '%'],
  ['÷', 'Divide', '/'],
  ['7', '7', '7'],
  ['8', '8', '8'],
  ['9', '9', '9'],
  ['×', 'Multiply', '*'],
  ['4', '4', '4'],
  ['5', '5', '5'],
  ['6', '6', '6'],
  ['−', 'Subtract', '-'],
  ['1', '1', '1'],
  ['2', '2', '2'],
  ['3', '3', '3'],
  ['+', 'Add', '+'],
  ['0', '0', '0'],
  ['.', 'Decimal point', '.'],
  ['⌫', 'Delete last character', 'delete'],
  ['=', 'Calculate result', 'equals'],
];
const scientific = [
  ['sin', 'sin('],
  ['cos', 'cos('],
  ['tan', 'tan('],
  ['xʸ', '^'],
  ['sin⁻¹', 'asin('],
  ['cos⁻¹', 'acos('],
  ['tan⁻¹', 'atan('],
  ['x²', '^2'],
  ['√', 'sqrt('],
  ['ln', 'ln('],
  ['log', 'log('],
  ['x!', '!'],
  ['π', 'pi'],
  ['e', 'e'],
  ['|x|', 'abs('],
  ['eˣ', 'exp('],
];

const keyOutlines = [
  'M7 6Q43 3 93 7L95 61Q60 66 6 62Q4 38 7 6Z',
  'M6 8Q49 4 94 6L92 63Q52 65 7 61Q4 33 6 8Z',
  'M7 5Q55 7 93 5L95 62Q48 64 5 62Q8 34 7 5Z',
];

// Change the final operand, including a balanced function/group and exponent notation.
function flipSign(input: string) {
  if (!input) return '-';
  const trimmed = input.trimEnd();
  const number = trimmed.match(/(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?[%!]*$/i);
  let start = number?.index ?? -1;
  if (trimmed.endsWith(')')) {
    let depth = 0;
    for (let i = trimmed.length - 1; i >= 0; i--) {
      if (trimmed[i] === ')') depth++;
      if (trimmed[i] === '(') depth--;
      if (depth === 0) {
        start = i;
        break;
      }
    }
    if (start >= 0)
      start -= trimmed.slice(0, start).match(/[a-z]+$/i)?.[0].length ?? 0;
  } else if (start < 0) start = trimmed.match(/(?:pi|ans|e)$/i)?.index ?? -1;
  if (start < 0) return trimmed + '-';
  const before = trimmed.slice(0, start),
    term = trimmed.slice(start);
  if (before.endsWith('-')) {
    const earlier = before.slice(0, -1);
    return earlier + (earlier && !/[+*/^(]$/.test(earlier) ? '+' : '') + term;
  }
  if (before.endsWith('+')) return before.slice(0, -1) + '-' + term;
  const implicitProduct = /[\d)a-z%!\u03c0]$/i.test(before);
  return before + (implicitProduct ? '*-' : '-') + term;
}

export default function CalculatorJournal() {
  const [settings, setSettings] = useState<Settings>(defaults);
  const [ready, setReady] = useState(false);
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState(0);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [memory, setMemory] = useState<number | null>(null);
  const [committed, setCommitted] = useState(false);
  const [revision, setRevision] = useState(0);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [mode, setMode] = useState<'calculate' | 'convert' | 'history'>(
    'calculate'
  );
  const [dialog, setDialog] = useState<'settings' | 'science' | null>(null);
  const [cleared, setCleared] = useState<Entry[]>([]);
  const [systemDark, setSystemDark] = useState(false),
    [reduced, setReduced] = useState(false);
  const [pressed, setPressed] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const edits = useRef<string[]>([]);
  const caret = useRef<[number, number]>([0, 0]);
  const pendingCaret = useRef<number | null>(null);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dark =
    settings.theme === 'auto' ? systemDark : settings.theme === 'dark';
  const motion = settings.motion && !reduced;
  const result = preview(expression, settings.angle, answer);
  const display = committed
    ? answer
    : (result.value ?? (expression ? null : 0));

  useLayoutEffect(() => {
    if (pendingCaret.current === null) return;
    input.current?.setSelectionRange(
      pendingCaret.current,
      pendingCaret.current
    );
    pendingCaret.current = null;
  }, [expression]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) || '{}');
      setSettings({
        theme: ['auto', 'light', 'dark'].includes(saved.theme)
          ? saved.theme
          : 'auto',
        motion: saved.motion !== false,
        angle: saved.angle === 'rad' ? 'rad' : 'deg',
      });
      if (
        typeof saved.expression === 'string' &&
        saved.expression.length <= 256
      ) {
        setExpression(saved.expression);
        caret.current = [saved.expression.length, saved.expression.length];
      }
      if (typeof saved.answer === 'number' && Number.isFinite(saved.answer))
        setAnswer(saved.answer);
      if (typeof saved.memory === 'number' && Number.isFinite(saved.memory))
        setMemory(saved.memory);
      if (Array.isArray(saved.entries))
        setEntries(
          saved.entries
            .filter(
              (e: Entry) =>
                typeof e?.id === 'string' &&
                typeof e.expression === 'string' &&
                e.expression.length <= 256 &&
                Number.isFinite(e.value) &&
                ['deg', 'rad'].includes(e.angle)
            )
            .slice(0, 40)
        );
      setCommitted(saved.committed === true);
    } catch {
      /* Storage is optional. */
    }
    setReady(true);
    const color = matchMedia('(prefers-color-scheme: dark)'),
      quiet = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setSystemDark(color.matches);
      setReduced(quiet.matches);
    };
    sync();
    color.addEventListener('change', sync);
    quiet.addEventListener('change', sync);
    if ('serviceWorker' in navigator && !import.meta.env.DEV) {
      navigator.serviceWorker
        .register('/calculator/sw.js', { scope: '/calculator/' })
        .then(async (registration) => {
          await navigator.serviceWorker.ready;
          await document.fonts.ready;
          const urls = performance
            .getEntriesByType('resource')
            .map((r) => r.name)
            .filter((name) => {
              const u = new URL(name);
              return (
                u.origin === location.origin &&
                (u.pathname.startsWith('/assets/') ||
                  u.pathname.startsWith('/fonts/'))
              );
            });
          registration.active?.postMessage({ type: 'CACHE_ASSETS', urls });
        })
        .catch(() => {});
    }
    return () => {
      color.removeEventListener('change', sync);
      quiet.removeEventListener('change', sync);
      if (pressTimer.current) clearTimeout(pressTimer.current);
    };
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(
        STORE,
        JSON.stringify({
          ...settings,
          expression,
          answer,
          memory,
          entries,
          committed,
        })
      );
    } catch {
      /* Continue without persistence. */
    }
  }, [settings, expression, answer, memory, entries, committed, ready]);
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]'),
      previous = meta?.getAttribute('content');
    meta?.setAttribute('content', dark ? '#2b3034' : '#efe7d7');
    return () => {
      if (previous) meta?.setAttribute('content', previous);
    };
  }, [dark]);

  function edit(next: string, position = next.length, remember = true) {
    if (next.length > 256) {
      setError('This page has room for 256 characters.');
      return;
    }
    if (remember && next !== expression)
      edits.current = [...edits.current.slice(-49), expression];
    setExpression(next);
    setError('');
    setStatus('');
    setCommitted(false);
    caret.current = [position, position];
    pendingCaret.current = position;
  }
  function insert(text: string) {
    const continuing = /^[+*/^%!\-]/.test(text);
    const base = committed
      ? continuing
        ? formatNumber(answer)
        : ''
      : expression;
    const [start, end] = committed ? [base.length, base.length] : caret.current;
    edit(base.slice(0, start) + text + base.slice(end), start + text.length);
  }
  function erase() {
    const [start, end] = caret.current;
    if (committed) {
      edit('');
      return;
    }
    edit(
      expression.slice(0, start === end ? Math.max(0, start - 1) : start) +
        expression.slice(end),
      start === end ? Math.max(0, start - 1) : start
    );
  }
  function solve() {
    if (committed) {
      haptic('selection');
      return;
    }
    try {
      const value = calculate(expression, settings.angle, answer);
      if (settings.motion && !reduced) {
        haptic('tap');
        armHapticCue('calculator-answer', 'success');
      } else haptic('success');
      const entry = {
        id:
          globalThis.crypto?.randomUUID?.() ??
          `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        expression,
        value,
        angle: settings.angle,
      };
      setAnswer(value);
      setCommitted(true);
      setRevision((r) => r + 1);
      setError('');
      setEntries((old) =>
        [
          entry,
          ...old.filter(
            (e, i) =>
              i !== 0 || e.expression !== expression || e.value !== value
          ),
        ].slice(0, 40)
      );
      setStatus(`Answer: ${formatNumber(value)}. Saved to the scratchpad.`);
    } catch (e) {
      haptic('error');
      setError(e instanceof Error ? e.message : 'Check this calculation.');
    }
  }
  function keyAction(action: string) {
    setPressed(action);
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = setTimeout(() => setPressed(''), 150);
    if (action === 'clear') edit('');
    else if (action === 'delete') erase();
    else if (action === 'sign')
      edit(flipSign(committed ? formatNumber(answer) : expression));
    else if (action === 'equals') solve();
    else insert(action);
  }
  function useValue(value: number) {
    edit(value < 0 ? `(${formatNumber(value)})` : formatNumber(value));
    setMode('calculate');
    setStatus('Added to your calculation.');
  }
  function memoryAction(action: 'add' | 'subtract') {
    if (display === null) {
      setError('Finish this calculation before adding it to memory.');
      return;
    }
    const next = (memory ?? 0) + display * (action === 'add' ? 1 : -1);
    if (!Number.isFinite(next)) {
      setError('That memory value is outside the calculator’s range.');
      return;
    }
    setMemory(next);
    setStatus(`Memory: ${formatNumber(next)}.`);
  }
  async function copyAnswer() {
    if (display === null) return;
    try {
      await navigator.clipboard.writeText(formatNumber(display));
      haptic('success');
      setStatus('Answer copied.');
    } catch {
      haptic('error');
      setStatus(
        'Copy isn’t available here. You can select the answer to copy it.'
      );
    }
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        dialog ||
        mode !== 'calculate' ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        e.isComposing
      )
        return;
      const target = e.target as HTMLElement;
      if (target.matches('input,textarea,select') || target.isContentEditable)
        return;
      if (/^[0-9.+\-*/^()%!]$/.test(e.key)) {
        e.preventDefault();
        keyAction(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        keyAction('delete');
      } else if (e.key === 'Escape') {
        e.preventDefault();
        keyAction('clear');
      } else if (
        (e.key === 'Enter' && target.tagName !== 'BUTTON') ||
        e.key === '='
      ) {
        e.preventDefault();
        keyAction('equals');
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  return (
    <main
      className='calculator-journal pocket-app'
      aria-busy={!ready}
      data-theme={dark ? 'dark' : 'light'}
      data-motion={motion ? 'on' : 'off'}
    >
      <div className='pocket-frame'>
        <header className='pocket-header'>
          <SketchHome />
          <h1>Calculator</h1>
          <button
            className='pocket-settings'
            aria-label='Calculator settings'
            onClick={() => setDialog('settings')}
          >
            <SettingsGlyph />
          </button>
        </header>
        <div className='pocket-body'>
          <AppPanel
            prefix='calc'
            id='calculate'
            active={mode}
            className='calc-main-panel'
          >
            <div className='calc-machine' aria-label='Calculator'>
              <div
                className={`calc-display ${error ? 'has-error' : ''}`}
                data-single={
                  !expression ||
                  expression === (display === null ? '' : formatNumber(display))
                }
              >
                <div className='calc-display-label'>
                  <label className='pocket-sr' htmlFor='calc-expression'>
                    Your calculation
                  </label>
                  <button
                    className='calc-text-button'
                    onClick={() => {
                      const previous = edits.current.pop();
                      if (previous !== undefined)
                        edit(previous, previous.length, false);
                    }}
                    disabled={!edits.current.length}
                    aria-label='Undo last edit'
                  >
                    Undo <SketchArrow direction='undo' />
                  </button>
                </div>
                <input
                  ref={input}
                  id='calc-expression'
                  disabled={!ready}
                  data-long={expression.length > 11}
                  style={
                    {
                      '--calc-input-characters': Math.max(expression.length, 1),
                    } as CSSProperties
                  }
                  type='text'
                  inputMode='decimal'
                  value={expression}
                  placeholder='0'
                  maxLength={256}
                  autoComplete='off'
                  spellCheck={false}
                  autoCapitalize='off'
                  aria-describedby='calc-expression-help'
                  onChange={(e) =>
                    edit(
                      e.target.value,
                      e.target.selectionStart ?? e.target.value.length
                    )
                  }
                  onSelect={(e) => {
                    caret.current = [
                      e.currentTarget.selectionStart ?? expression.length,
                      e.currentTarget.selectionEnd ?? expression.length,
                    ];
                  }}
                  onClick={() => setCommitted(false)}
                  onKeyDown={(e) => {
                    if (committed && !e.ctrlKey && !e.metaKey && !e.altKey) {
                      if (/^[0-9a-zA-Z.+\-*/^()%!π√]$/.test(e.key)) {
                        e.preventDefault();
                        keyAction(e.key);
                        return;
                      }
                      if (e.key === 'Backspace' || e.key === 'Delete') {
                        e.preventDefault();
                        edit('');
                        return;
                      }
                      if (
                        ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(
                          e.key
                        )
                      )
                        setCommitted(false);
                    }
                    if (e.key === 'Enter' || e.key === '=') {
                      e.preventDefault();
                      solve();
                    }
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      edit('');
                    }
                  }}
                />
                <div className='calc-answer-row'>
                  <span className='calc-equals-mark' aria-hidden='true'>
                    =
                  </span>
                  <output
                    key={revision}
                    className={
                      committed ? 'calc-answer is-written' : 'calc-answer'
                    }
                    data-long={
                      display !== null && formatNumber(display).length > 11
                    }
                    aria-label='Result'
                    style={
                      {
                        '--calc-output-characters':
                          display === null ? 1 : formatNumber(display).length,
                      } as CSSProperties
                    }
                  >
                    {display === null ? '—' : formatNumber(display)}
                  </output>
                </div>
                <div className='calc-answer-meta'>
                  <span id='calc-expression-help'>
                    {error ||
                      (status.startsWith('Copy') ||
                      status.startsWith('Answer copied')
                        ? status
                        : '')}
                  </span>
                  <button
                    className='calc-text-button'
                    aria-label='Copy result'
                    data-haptic='manual'
                    disabled={display === null}
                    onClick={copyAnswer}
                  >
                    Copy
                  </button>
                </div>
                {committed && (
                  <svg
                    key={`tick-${revision}`}
                    className='calc-answer-tick'
                    viewBox='0 0 50 30'
                    aria-hidden='true'
                  >
                    <path
                      d='m5 16 12 9L44 4'
                      pathLength='1'
                      data-haptic-cue='calculator-answer'
                      data-haptic-animation='calc-tick'
                    />
                  </svg>
                )}
              </div>

              <div className='calc-tools-row'>
                <button
                  className='calc-text-button'
                  onClick={() => setDialog('science')}
                  aria-haspopup='dialog'
                >
                  Scientific{' '}
                  <span className='calc-science-unit'>
                    {settings.angle.toUpperCase()}
                  </span>
                </button>
                <div className='calc-brackets'>
                  <button
                    onClick={() => insert('(')}
                    aria-label='Open parenthesis'
                  >
                    (
                  </button>
                  <button
                    onClick={() => insert(')')}
                    aria-label='Close parenthesis'
                  >
                    )
                  </button>
                  <button
                    onClick={() => insert('ans')}
                    title={`Previous answer: ${formatNumber(answer)}`}
                    aria-label='Insert previous answer'
                  >
                    Ans
                  </button>
                </div>
              </div>

              <div className='calc-keypad'>
                {keys.map(([label, name, action], index) => (
                  <button
                    key={action}
                    className={`${['/', '*', '-', '+'].includes(action) ? 'calc-operator' : ''} ${action === 'equals' ? 'calc-equal-key' : ''} ${action === 'clear' ? 'calc-clear-key' : ''} ${pressed === action ? 'is-pressed' : ''}`}
                    aria-label={name}
                    data-haptic={action === 'equals' ? 'manual' : 'tap'}
                    onPointerDown={(e) => e.preventDefault()}
                    onClick={() => keyAction(action)}
                  >
                    <span>{label}</span>
                    <svg
                      className='calc-key-outline'
                      viewBox='0 0 100 70'
                      preserveAspectRatio='none'
                      aria-hidden='true'
                    >
                      <path
                        pathLength='1'
                        d={keyOutlines[index % keyOutlines.length]}
                        style={{ animationDelay: `${index * 24}ms` }}
                      />
                      <path
                        className='calc-pencil-retrace'
                        d={
                          index % 2
                            ? 'M9 66Q47 67 90 64M3 12 4 48'
                            : 'M12 3Q55 2 86 4M97 18 96 53'
                        }
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </AppPanel>
          <AppPanel
            prefix='calc'
            id='convert'
            active={mode}
            className='calc-convert-panel'
          >
            <Converter useResult={useValue} />
          </AppPanel>
          <AppPanel
            prefix='calc'
            id='history'
            active={mode}
            className='calc-history-panel'
          >
            <section className='calc-history'>
              <div className='calc-history-heading'>
                <h2>History</h2>
                <span>{entries.length} / 40</span>
              </div>
              <div className='calc-history-body'>
                {entries.length ? (
                  <>
                    <p className='calc-fine-print'>
                      Tap an answer to bring it back to the calculator.
                    </p>
                    <ol>
                      {entries.map((entry, index) => (
                        <li key={entry.id}>
                          <span
                            className='calc-entry-number'
                            aria-hidden='true'
                          >
                            {String(entries.length - index).padStart(2, '0')}
                          </span>
                          <button
                            aria-label={`Use result ${formatNumber(entry.value)} from ${prettyExpression(entry.expression)}`}
                            onClick={() => useValue(entry.value)}
                          >
                            <span className='calc-entry-expression'>
                              {prettyExpression(entry.expression)}
                              {/(?:a?sin|a?cos|a?tan)/.test(
                                entry.expression
                              ) && <small>{entry.angle.toUpperCase()}</small>}
                            </span>
                            <strong>= {formatNumber(entry.value)}</strong>
                          </button>
                        </li>
                      ))}
                    </ol>
                    <button
                      className='calc-text-button'
                      onClick={() => {
                        setCleared(entries);
                        setEntries([]);
                        setStatus('History cleared. Undo is available.');
                      }}
                    >
                      Clear history
                    </button>
                  </>
                ) : (
                  <div className='calc-history-empty'>
                    <svg
                      viewBox='0 0 140 100'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      aria-hidden='true'
                    >
                      <path d='M22 9 111 13l-5 75-92-5Zm17 24 40 2M37 47l52 2M35 61l32 2M87 71l33-45 9 8-35 42-10 5Z' />
                      <path d='m119 29 6 5M86 72l8 4' />
                    </svg>
                    <p>Nothing scribbled yet.</p>
                    <span>Your last 40 answers will appear here.</span>
                    <button
                      className='calc-paper-button'
                      onClick={() => {
                        edit('24*(3+2)');
                        setMode('calculate');
                      }}
                    >
                      Try 24 × (3 + 2)
                    </button>
                  </div>
                )}
                {cleared.length > 0 && (
                  <button
                    className='calc-text-button'
                    onClick={() => {
                      setEntries((old) => [...old, ...cleared].slice(0, 40));
                      setCleared([]);
                      setStatus('History restored.');
                    }}
                  >
                    Undo clear <SketchArrow direction='undo' />
                  </button>
                )}
              </div>
            </section>
          </AppPanel>
        </div>
        <AppTabs<'calculate' | 'convert' | 'history'>
          tabs={[
            { id: 'calculate', label: 'Calculate' },
            { id: 'convert', label: 'Convert' },
            { id: 'history', label: 'History' },
          ]}
          active={mode}
          select={setMode}
          label='Calculator navigation'
          prefix='calc'
        />
        <p className='pocket-sr' role='status'>
          {status || error}
        </p>
        <noscript>
          <p>Enable JavaScript to use the calculator.</p>
        </noscript>
      </div>
      {dialog === 'science' && (
        <Dialog title='Scientific & memory' close={() => setDialog(null)}>
          <div id='calc-science' className='calc-science'>
            <div className='calc-angle-toggle' aria-label='Angle unit'>
              {(['deg', 'rad'] as const).map((a) => (
                <button
                  key={a}
                  aria-pressed={settings.angle === a}
                  onClick={() => {
                    setSettings((s) => ({ ...s, angle: a }));
                    setCommitted(false);
                    setError('');
                  }}
                >
                  {a.toUpperCase()}
                </button>
              ))}
            </div>
            <div className='calc-science-keys'>
              {scientific.map(([label, value]) => (
                <button
                  key={label}
                  onClick={() => {
                    insert(value);
                    setDialog(null);
                  }}
                  aria-label={
                    value === '^'
                      ? 'Power'
                      : value === '^2'
                        ? 'Square'
                        : value === '!'
                          ? 'Factorial'
                          : label
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className='calc-memory'>
            <span
              className='calc-memory-value'
              title={
                memory === null
                  ? 'Memory is empty'
                  : `Memory: ${formatNumber(memory)}`
              }
            >
              {memory === null ? 'Memory empty' : `M = ${formatNumber(memory)}`}
            </span>
            <div>
              <button
                aria-label='Add result to memory'
                onClick={() => memoryAction('add')}
              >
                M+
              </button>
              <button
                aria-label='Subtract result from memory'
                onClick={() => memoryAction('subtract')}
              >
                M−
              </button>
              <button
                aria-label='Recall memory'
                disabled={memory === null}
                onClick={() => {
                  if (memory !== null)
                    insert(
                      memory < 0
                        ? `(${formatNumber(memory)})`
                        : formatNumber(memory)
                    );
                  setDialog(null);
                }}
              >
                MR
              </button>
              <button
                aria-label='Clear memory'
                disabled={memory === null}
                onClick={() => {
                  setMemory(null);
                  setStatus('Memory cleared.');
                }}
              >
                MC
              </button>
            </div>
          </div>
        </Dialog>
      )}
      {dialog === 'settings' && (
        <Dialog title='Settings' close={() => setDialog(null)}>
          <fieldset>
            <legend>Paper & light</legend>
            <div className='calc-preference-options'>
              {(['auto', 'light', 'dark'] as const).map((t) => (
                <button
                  key={t}
                  aria-pressed={settings.theme === t}
                  onClick={() => setSettings((s) => ({ ...s, theme: t }))}
                >
                  {t === 'auto'
                    ? 'Follow device'
                    : t === 'light'
                      ? 'Day'
                      : 'Night'}
                </button>
              ))}
            </div>
          </fieldset>
          <label className='calc-motion-setting'>
            <span>
              Let the drawings move
              <small>
                {reduced
                  ? 'Your device’s reduced-motion setting is respected.'
                  : 'Pencil strokes, ink, and a small flourish on each answer.'}
              </small>
            </span>
            <InkSwitch
              checked={settings.motion}
              onChange={(e) =>
                setSettings((s) => ({ ...s, motion: e.target.checked }))
              }
            />
          </label>
          <TouchFeedbackSetting />
          <section className='calc-install-note'>
            <h3>A little notebook in your pocket</h3>
            <p>
              On iPhone or iPad, open this page in Safari. Choose{' '}
              <strong>
                Share <SketchArrow direction='right' /> Add to Home Screen
              </strong>
              , and enable <strong>Open as Web App</strong> if offered.
            </p>
            <p>
              Open once online to save the app and fonts. Calculations and
              conversions then work offline. Desktop browsers can install it
              using their own install option.
            </p>
          </section>

          <details className='calc-guide'>
            <summary>
              Keyboard & calculation notes <span aria-hidden='true'>+</span>
            </summary>
            <div>
              <p>
                <strong>Keyboard:</strong> type an expression, press Enter for
                the answer, Backspace to erase, or Escape to clear. Brackets and
                order of operations work as written.
              </p>
              <p>
                <strong>Percent:</strong> 200 + 10% = 220; 200 − 10% = 180; 200
                × 10% = 20. A percentage directly added to or subtracted from an
                amount is relative to that amount.
              </p>
              <p>
                <strong>Scientific:</strong> DEG uses degrees, RAD uses radians.
                Type functions such as sin(30), sqrt(81), log(100), or use the
                scientific keys. Powers associate right to left: 2^3^2 = 512.
              </p>
              <p>
                <strong>Precision:</strong> answers display up to 14 significant
                digits. Calculations use floating-point numbers, so very large
                integers and some decimal results are approximate. Factorials
                support whole numbers through 170.
              </p>
              <p>
                <strong>Ans & memory:</strong> Ans uses your last completed
                answer. M+ and M− collect a running total; MR brings it back,
                and MC clears it. Your last 40 answers and preferences stay in
                this browser.
              </p>
            </div>
          </details>

          <div className='pocket-links'>
            <a href='/'>Back to the notebook</a>
            <a href='/weather/'>Weather</a>
          </div>
        </Dialog>
      )}
    </main>
  );
}
