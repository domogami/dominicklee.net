import { useEffect, useId, useRef, useState } from 'react';
import type { LinksFunction, MetaFunction } from 'react-router';
import Crane from '~/components/notebook/Crane';
import SketchArrow from '~/components/notebook/SketchArrow';
import { nativeSwitchProps } from '~/components/TouchFeedback';
import notebook from '~/styles/notebook.css?url';
import study from '~/styles/haptics-study.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: notebook },
  { rel: 'stylesheet', href: study },
];
export const meta: MetaFunction = () => [
  { title: 'A little touch test · Dom Lee' },
  { name: 'robots', content: 'noindex, nofollow' },
];

/** Isolated hardware comparison. Counts confirm events, never physical haptics. */
export default function HapticsStudy() {
  const [direct, setDirect] = useState(false);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [native, setNative] = useState<boolean | null>(null);
  const [last, setLast] = useState('Tap a sample and notice what you feel.');
  const scripted = useRef<HTMLLabelElement>(null);
  const id = useId();
  useEffect(() => {
    setNative('switch' in document.createElement('input'));
  }, []);
  function count(index: number, name: string) {
    setCounts((old) => old.map((n, i) => n + (i === index ? 1 : 0)));
    setLast(`${name} activated. A counter can’t tell whether it vibrated.`);
  }
  return (
    <main className='notebook haptics-study'>
      <div className='touch-study-page'>
        <header>
          <a href='/'>
            <Crane /> Dom’s notebook <SketchArrow />
          </a>
          <span className='touch-study-mark'>a tiny field test</span>
        </header>
        <h1>
          Let’s feel it<span>.</span>
        </h1>
        <p className='touch-study-intro'>
          Open this page in Safari on your iPhone. Tap each sample with your
          finger and compare the little ticks.
        </p>
        <section aria-labelledby='direct-heading'>
          <div className='touch-study-row'>
            <h2 id='direct-heading'>1. Direct tap</h2>
            <span aria-label={`${counts[0]} direct taps`}>
              {counts[0]} taps
            </span>
          </div>
          <label className='touch-study-target'>
            <span className='touch-study-button' aria-hidden='true'>
              Tap this bit of paper <SketchArrow />
            </span>
            <input
              {...nativeSwitchProps}
              type='checkbox'
              className='touch-study-native-target'
              aria-label='Direct tap sample'
              data-haptic='none'
              checked={direct}
              onChange={(e) => {
                setDirect(e.target.checked);
                count(0, 'Direct tap');
              }}
            />
          </label>
          <p>Your finger taps a real native switch inside this shape.</p>
        </section>
        <section aria-labelledby='visible-heading'>
          <div className='touch-study-row'>
            <h2 id='visible-heading'>2. Visible switch</h2>
            <span aria-label={`${counts[1]} visible switch taps`}>
              {counts[1]} taps
            </span>
          </div>
          <label className='touch-study-visible'>
            <span>Try the ordinary switch</span>
            <input
              {...nativeSwitchProps}
              type='checkbox'
              aria-label='Visible switch sample'
              data-haptic='none'
              checked={visible}
              onChange={(e) => {
                setVisible(e.target.checked);
                count(1, 'Visible switch');
              }}
            />
          </label>
          <p>A baseline for your phone’s own switch feedback.</p>
        </section>
        <section aria-labelledby='scripted-heading'>
          <div className='touch-study-row'>
            <h2 id='scripted-heading'>3. Scripted tap</h2>
            <span aria-label={`${counts[2]} scripted taps`}>
              {counts[2]} taps
            </span>
          </div>
          <button
            className='touch-study-button'
            data-haptic='none'
            onClick={() => {
              scripted.current?.click();
              count(2, 'Scripted tap');
            }}
          >
            Try the older method <SketchArrow />
          </button>
          <label ref={scripted} htmlFor={id} hidden>
            <input
              {...nativeSwitchProps}
              id={id}
              type='checkbox'
              data-haptic='none'
            />
          </label>
          <p>The label-click mechanism used by WebHaptics 0.0.6.</p>
        </section>
        <div className='touch-study-result' role='status'>
          {last}
        </div>
        <p className='touch-study-footnote'>
          {native === null
            ? 'Checking for native switch support…'
            : native
              ? 'Your browser recognizes native switches. Only your phone can confirm the vibration.'
              : 'Your browser has no native switch support. These samples still show taps, but won’t prove iPhone haptics.'}
        </p>
        <p className='touch-study-footnote'>
          This is a tap test. It doesn’t promise custom patterns or feedback
          after an animation. No sound or simulated vibration is added.
        </p>
        <footer>
          <a href='/weather/'>
            Weather <SketchArrow />
          </a>
          <a href='/calculator/'>
            Calculator <SketchArrow />
          </a>
          <a href='https://github.com/lochie/web-haptics/issues/41'>
            Research <SketchArrow />
          </a>
        </footer>
      </div>
    </main>
  );
}
