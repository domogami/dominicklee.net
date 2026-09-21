import { pageIndex, folio, type NotebookPage } from './pageIndex';
import { useEffect, useRef, useState } from 'react';
import Crane from './Crane';
import StickyNotes from './StickyNotes';
import HobbyTagline from './HobbyTagline';
import {
  AnimatedNote,
  DrawnBanner,
  GardenPlant,
  WrittenTimeline,
  ContactFlight,
  SketchLink,
} from './NotebookDrawings';

const GARDEN = pageIndex.gardenWebsite.href;
const nav = [
  { label: 'Works', page: 'works' as const },
  { label: 'About', page: 'now' as const },
  { label: 'Garden', page: 'garden' as const },
  { label: 'Contact', page: 'contact' as const },
];

function SectionHeading({
  title,
  note,
  page,
  folded = false,
}: {
  title: string;
  note: string;
  page: NotebookPage;
  folded?: boolean;
}) {
  return (
    <div className='section-heading'>
      <DrawnBanner text={title} folded={folded} />
      <AnimatedNote text={note} />
      <span className='leader' />
      <span className='folio' data-page={page}>
        {folio(page)}
      </span>
    </div>
  );
}

export default function Notebook() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<NotebookPage>('home');
  const [motion, setMotion] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(
    null
  );
  const photoGesture = useRef<{ id: number; x: number; y: number } | null>(
    null
  );
  const suppressPhotoClick = useRef(false);
  const [craneKey, setCraneKey] = useState(0);
  const [headerCraneKey, setHeaderCraneKey] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const activeMotion = motion && !reduced;
  const cyclePhoto = (direction: 'left' | 'right') => {
    if (swipeDirection) return;
    if (activeMotion) setSwipeDirection(direction);
    setPhoto((value) => !value);
  };
  useEffect(() => {
    if (!swipeDirection) return;
    const timer = window.setTimeout(() => setSwipeDirection(null), 480);
    return () => window.clearTimeout(timer);
  }, [swipeDirection]);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      root.current?.style.setProperty(
        '--header-collapse',
        `${Math.min(32, Math.max(0, window.scrollY))}px`
      );
      // Follow what is being read, including manual scrolling and short footers.
      const readingLine = Math.min(window.innerHeight * 0.3, 240);
      let current: NotebookPage = 'home';
      for (const item of nav) {
        const section = root.current?.querySelector(pageIndex[item.page].href);
        if (section && section.getBoundingClientRect().top <= readingLine)
          current = item.page;
      }
      if (
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      )
        current = 'contact';
      setActivePage((previous) => (previous === current ? previous : current));
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
    };
  }, []);
  useEffect(() => {
    const hero = root.current?.querySelector<HTMLElement>('.hero');
    const paper = root.current?.querySelector<HTMLElement>('.hero-paper');
    if (!hero || !paper) return;
    const center = () => {
      // Center to the nearest grid row, keeping every text line on the dots' rhythm.
      const inset = Math.max(
        0,
        Math.round((hero.clientHeight - paper.offsetHeight) / 64) * 32
      );
      paper.style.setProperty('--hero-inset', `${inset}px`);
    };
    const observer = new ResizeObserver(center);
    observer.observe(hero);
    observer.observe(paper);
    center();
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(
      () =>
        menu.current
          ?.querySelector<HTMLAnchorElement>('a')
          ?.focus({ preventScroll: true }),
      activeMotion ? 550 : 0
    );
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === 'Tab') {
        const items = [
          menuButton.current,
          ...Array.from(
            menu.current?.querySelectorAll<HTMLAnchorElement>('a') || []
          ),
        ].filter(Boolean) as HTMLElement[];
        const index = items.indexOf(document.activeElement as HTMLElement);
        event.preventDefault();
        items[
          (index + (event.shiftKey ? -1 : 1) + items.length) % items.length
        ]?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener('keydown', key);
    window.addEventListener('resize', resize);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', key);
      window.removeEventListener('resize', resize);
    };
  }, [menuOpen]);
  const close = () => {
    setMenuOpen(false);
    menuButton.current?.focus();
  };
  return (
    <div
      ref={root}
      id='top'
      className={`notebook ${!activeMotion ? 'motion-paused' : ''}`}
    >
      <a className='skip-link' href='#main'>
        Skip to content
      </a>
      <div className='masthead-dock'>
        <header className='masthead'>
          <div className='brand-with-index'>
            <a
              href='/'
              className='brand'
              aria-label='Dom Lee home'
              onMouseEnter={() => {
                if (activeMotion) setHeaderCraneKey((key) => key + 1);
              }}
              onFocus={() => {
                if (activeMotion) setHeaderCraneKey((key) => key + 1);
              }}
            >
              <Crane key={headerCraneKey} animated={headerCraneKey > 0} />
              <span>Dom Lee</span>
            </a>
            <a
              href={pageIndex.home.href}
              className='index-note'
              aria-current={activePage === 'home' ? 'location' : undefined}
              aria-label='Index — back to the top'
              onClick={() => setMenuOpen(false)}
            >
              — index
            </a>
          </div>
          <nav className='desktop-nav' aria-label='Main navigation'>
            {nav.map((item) => (
              <a
                key={item.label}
                href={pageIndex[item.page].href}
                aria-current={activePage === item.page ? 'location' : undefined}
              >
                {item.label}
                <span data-page={item.page}>{folio(item.page)}</span>
              </a>
            ))}
          </nav>
          <button
            ref={menuButton}
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
          >
            <span />
            <span />
            <span />
          </button>
        </header>
      </div>
      <div
        ref={menu}
        id='mobile-menu'
        role='dialog'
        aria-modal={menuOpen ? true : undefined}
        aria-label='Site index'
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <span className='hand-note'>— a little index</span>
        <nav aria-label='Mobile navigation'>
          {nav.map((item) => (
            <a
              tabIndex={menuOpen ? 0 : -1}
              key={item.label}
              href={pageIndex[item.page].href}
              onClick={close}
              aria-current={activePage === item.page ? 'location' : undefined}
            >
              <span>{item.label}</span>
              <span className='leader' />
              <small data-page={item.page}>{folio(item.page)}</small>
            </a>
          ))}
        </nav>
        <Crane />
        <span className='hand-note'>
          a few pages of my corner of the internet.
        </span>
        <a className='menu-garden' href={GARDEN} tabIndex={menuOpen ? 0 : -1}>
          Visit the digital garden ↗
        </a>
      </div>
      <main id='main' inert={menuOpen}>
        <section className='hero dot-paper' aria-labelledby='intro-heading'>
          <div className='hero-paper'>
            <div className='ribbon eyebrow'>Seattle · Software Engineer</div>
            <h1 id='intro-heading'>
              Dom Lee<span className='title-period'>.</span>
            </h1>
            <HobbyTagline animate={activeMotion} />
            <p className='intro-copy grid-copy'>
              I write software at Prime Video and spend my off hours optimizing
              random things in life like my daily routine, lamp schedules,
              terminal layout, dotfiles, and my keyboard and its shortcuts.
            </p>
            <div className='hero-actions'>
              <a className='button button-teal' href='#works'>
                See the works <span>↘</span>
              </a>
              <a className='button button-outline' href={GARDEN}>
                Into the garden <span>↗</span>
              </a>
            </div>
            <div className='hero-footnote'>
              <span className='tiny-cross' aria-label='Note'>
                –
              </span>
              <span>
                A place for things I make, learn, and keep coming back to.
              </span>
              <span className='folio' data-page='home'>
                {folio('home')}
              </span>
            </div>
          </div>
        </section>
        <section
          className='margin-notes dot-paper'
          aria-label='Notes in the margins'
        >
          <div className='section-inner margin-notes-layout'>
            <div className='hero-teal'>
              <span className='corner-label'>
                ONE SHEET. ENDLESS POSSIBILITIES.
              </span>
              <div className='crane-display'>
                <button
                  className='crane-replay'
                  aria-label='Replay crane folding animation'
                  onClick={() => setCraneKey((v) => v + 1)}
                >
                  <Crane key={craneKey} animated />
                </button>
                <AnimatedNote
                  className='crane-caption'
                  text='A few folds, a few ideas.'
                />
              </div>
            </div>
            <StickyNotes>
              <aside className='key-note'>
                <span className='tape' aria-hidden='true' />
                <h2 className='hand-note'>
                  <AnimatedNote text='A little key' />
                </h2>
                <dl>
                  <div title='Task: something actionable to do.'>
                    <dt aria-label='Task'>•</dt>
                    <dd>on my list</dd>
                  </div>
                  <div title='Task complete: the work is done.'>
                    <dt aria-label='Task complete'>×</dt>
                    <dd>made &amp; loved</dd>
                  </div>
                  <div title='Event: a dated happening, planned or recorded.'>
                    <dt aria-label='Event'>○</dt>
                    <dd>a little happening</dd>
                  </div>
                  <div title='Note: a thought, fact, or observation to remember.'>
                    <dt aria-label='Note'>–</dt>
                    <dd>worth a scribble</dd>
                  </div>
                  <div title='Migrated task: moved to the next monthly log or a collection.'>
                    <dt aria-label='Migrated task'>&gt;</dt>
                    <dd>carried forward</dd>
                  </div>
                </dl>
                <a
                  className='key-source'
                  href='https://bulletjournal.com/blogs/faq/what-is-rapid-logging-understand-rapid-logging-bullets-and-signifiers'
                >
                  A nod to Bullet Journal
                  <br />
                  <span>the method behind the marks ↗</span>
                </a>
              </aside>
            </StickyNotes>
          </div>
        </section>
        <section id='works' className='works section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Works'
              note="things I've made & keep making"
              page='works'
            />
            <div className='featured-project'>
              <div
                className='polaroid-gallery'
                role='group'
                aria-label='SNAP-75 photo gallery'
              >
                <button
                  type='button'
                  className='photo-arrow photo-arrow-previous'
                  aria-label='Previous SNAP-75 photo'
                  onClick={() => cyclePhoto('right')}
                >
                  <svg viewBox='0 0 40 32' fill='none' aria-hidden='true'>
                    <path d='M34 17 C25 14 15 18 6 16 M16 6 Q11 12 6 16 Q11 20 16 25' />
                  </svg>
                </button>
                <button
                  className={`polaroid-stack ${photo ? 'is-flipped' : ''} ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}
                  onPointerDown={(event) => {
                    suppressPhotoClick.current = false;
                    if (event.pointerType === 'mouse' || !event.isPrimary)
                      return;
                    photoGesture.current = {
                      id: event.pointerId,
                      x: event.clientX,
                      y: event.clientY,
                    };
                    event.currentTarget.setPointerCapture(event.pointerId);
                  }}
                  onPointerUp={(event) => {
                    const start = photoGesture.current;
                    if (!start || start.id !== event.pointerId) return;
                    photoGesture.current = null;
                    const dx = Math.abs(event.clientX - start.x);
                    const dy = Math.abs(event.clientY - start.y);
                    suppressPhotoClick.current = Math.max(dx, dy) > 10;
                    if (dx >= 40 && dx > dy * 1.5) {
                      cyclePhoto(event.clientX < start.x ? 'left' : 'right');
                    }
                  }}
                  onPointerCancel={() => {
                    photoGesture.current = null;
                    suppressPhotoClick.current = true;
                  }}
                  onClick={(event) => {
                    // A swipe also generates a click; don't swap straight back.
                    if (event.detail === 0 || !suppressPhotoClick.current) {
                      setPhoto((v) => !v);
                    }
                  }}
                  aria-label='Swap SNAP-75 keyboard photos'
                  aria-pressed={photo}
                >
                  <span className='polaroid polaroid-back'>
                    <img
                      src='/images/snap75-top.jpg'
                      alt='SNAP-75 keyboard from above, with two OLED displays and colorful keycaps'
                      width='1600'
                      height='898'
                      loading='lazy'
                    />
                    <span>every little detail.</span>
                  </span>
                  <span className='polaroid polaroid-front'>
                    <img
                      src='/images/snap75-desk.jpg'
                      alt='Hand-soldered SNAP-75 keyboard on my desk'
                      width='1600'
                      height='898'
                      loading='lazy'
                    />
                    <span>the first one I ever soldered</span>
                  </span>
                </button>
                <button
                  type='button'
                  className='photo-arrow photo-arrow-next'
                  aria-label='Next SNAP-75 photo'
                  onClick={() => cyclePhoto('left')}
                >
                  <svg viewBox='0 0 40 32' fill='none' aria-hidden='true'>
                    <path d='M6 16 C15 18 25 14 34 16 M24 6 Q29 12 34 16 Q29 20 24 25' />
                  </svg>
                </button>
                <span
                  className='photo-counter'
                  role='status'
                  aria-live='polite'
                  aria-atomic='true'
                >
                  <span aria-hidden='true'>{photo ? '2/2' : '1/2'}</span>
                  <span className='sr-only'>Photo {photo ? 2 : 1} of 2</span>
                </span>
              </div>
              <div className='project-story'>
                <p className='eyebrow status'>
                  × &nbsp; Made &amp; loved · featured build ·{' '}
                  <span data-page='snap'>{folio('snap')}</span>
                </p>
                <h3>SNAP-75</h3>
                <p className='grid-copy'>
                  A split keyboard, two little screens (one with a little bongo
                  cat), and a whole lot of weekends spent soldering. My reminder
                  that spending time on things I use every day can make me
                  smile.
                </p>
                <a className='text-link' href={pageIndex.snap.href}>
                  Build one for your desk <span>↗</span>
                </a>
                <AnimatedNote
                  className='photo-note'
                  text='two photos, one very happy desk.'
                />
              </div>
            </div>
            <div className='project-index'>
              <a href={pageIndex.firstWebsite.href} className='index-row'>
                <span className='index-symbol'>×</span>
                <h3>My first website</h3>
                <span className='row-description'>where it all started</span>
                <span className='leader' />
                <span className='folio' data-page='firstWebsite'>
                  {folio('firstWebsite')} ↗
                </span>
              </a>
              <a href={pageIndex.previousPortfolio.href} className='index-row'>
                <span className='index-symbol'>×</span>
                <h3>Previous portfolio</h3>
                <span className='row-description'>
                  a past version of this little corner
                </span>
                <span className='leader' />
                <span className='folio' data-page='previousPortfolio'>
                  {folio('previousPortfolio')} ↗
                </span>
              </a>
              <a href={pageIndex.startpage.href} className='index-row'>
                <span className='index-symbol'>×</span>
                <h3>Startpage</h3>
                <span className='row-description'>
                  a small home for every new tab
                </span>
                <span className='leader' />
                <span className='folio' data-page='startpage'>
                  {folio('startpage')} ↗
                </span>
              </a>
              <a href={pageIndex.dotfiles.href} className='index-row'>
                <span className='index-symbol' aria-label='Task'>
                  •
                </span>
                <h3>Dotfiles</h3>
                <span className='row-description'>
                  my setup, forever unfinished
                </span>
                <span className='leader' />
                <span className='folio' data-page='dotfiles'>
                  {folio('dotfiles')} ↗
                </span>
              </a>
            </div>
          </div>
        </section>
        <section id='now' className='now dot-paper'>
          <div className='section-inner'>
            <SectionHeading
              title='About Me'
              note='a little of my life between the lines'
              page='now'
              folded
            />
            <div className='now-columns'>
              <div className='journey'>
                <h3 className='hand-note'>
                  <AnimatedNote text='the story so far…' />
                </h3>
                <WrittenTimeline />
              </div>
              <div className='presently'>
                <aside className='todo-note' aria-labelledby='presently-title'>
                  <h3 id='presently-title' className='hand-note'>
                    <AnimatedNote text='presently…' />
                  </h3>
                  <ul className='life-list'>
                    <li>
                      <span>•</span> Making time for more side projects
                    </li>
                    <li>
                      <span aria-label='Note'>–</span> Exploring Seattle, one
                      cafe at a time
                    </li>
                    <li>
                      <span aria-label='Note'>–</span> Filling notebooks &amp;
                      folding paper
                    </li>
                    <li>
                      <span>×</span>
                      Start my Digital Garden
                    </li>
                    <li>
                      <span>×</span>
                      Solder my own keyboard
                    </li>
                  </ul>
                </aside>
                <aside className='curiosity-note'>
                  <span className='eyebrow'>The common thread</span>
                  <AnimatedNote text='curiosity and willingness to fall down rabbit holes.' />
                  <svg viewBox='0 0 240 48' fill='none' aria-hidden='true'>
                    <path d='M8 30Q40 7 64 24T116 25Q143 6 160 22T218 19M209 12 220 19 212 29' />
                  </svg>
                </aside>
              </div>
            </div>
          </div>
        </section>
        <section id='garden' className='garden section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Digital garden'
              note='notes to myself, mostly'
              page='garden'
            />
            <div className='garden-intro'>
              <p className='grid-copy'>
                Things I'm learning, questions I'm sitting with, and ideas that
                aren't quite finished. My writing lives in a garden and
                sometimes it grows unbounded and other days I prune it.
              </p>
              <a className='text-link' href={GARDEN}>
                Wander through the garden ↗
              </a>
              <GardenPlant />
            </div>
            <a className='index-row' href={pageIndex.axeSharpening.href}>
              <span className='index-symbol' aria-label='Note'>
                –
              </span>
              <h3>Axe Sharpening</h3>
              <span className='leader' />
              <span className='folio' data-page='axeSharpening'>
                {folio('axeSharpening')} ↗
              </span>
            </a>
            <a className='index-row' href={pageIndex.dotfilesNote.href}>
              <span className='index-symbol' aria-label='Note'>
                –
              </span>
              <h3>Dotfiles</h3>
              <span className='leader' />
              <span className='folio' data-page='dotfilesNote'>
                {folio('dotfilesNote')} ↗
              </span>
            </a>
            <a className='index-row' href={GARDEN}>
              <span className='index-symbol' aria-label='Notes'>
                –
              </span>
              <h3>The rest of the rabbit hole</h3>
              <span className='leader' />
              <span className='folio' data-page='gardenWebsite'>
                {folio('gardenWebsite')} ↗
              </span>
            </a>
          </div>
        </section>
      </main>
      <footer inert={menuOpen} id='contact' className='contact dot-paper'>
        <div className='section-inner'>
          <div className='contact-main'>
            <a
              className='contact-post'
              href='mailto:domogami@gmail.com'
              aria-label='Send an email to Dom at domogami@gmail.com'
            >
              <div className='contact-heading'>
                <DrawnBanner text='Send word.' className='contact-banner' />
              </div>
              <div className='contact-invitation'>
                <p className='hand-note'>
                  <AnimatedNote text='I love meeting new people.' />
                  <br />
                  <AnimatedNote text='Drop a thought or say hello :)' />
                </p>
                <ContactFlight />
              </div>
              <span className='email'>domogami@gmail.com</span>
            </a>
            <div className='social-links'>
              <SketchLink
                href='https://github.com/domogami'
                label='GitHub'
                kind='code'
              />
              <SketchLink
                href='https://www.linkedin.com/in/domogami/'
                label='LinkedIn'
                kind='people'
              />
              <SketchLink href={GARDEN} label='Garden' kind='plant' />
            </div>
          </div>
          <div className='colophon'>
            <span>© {new Date().getFullYear()} Dominick Lee</span>
            <span>PAPER, PATIENCE &amp; A LITTLE CURIOSITY</span>
            <button onClick={() => setMotion((v) => !v)} aria-pressed={!motion}>
              {!activeMotion ? 'Motion: quiet' : 'Motion: on'}
            </button>
            <a href='#main'>Back to the top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
