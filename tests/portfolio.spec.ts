import {
  pageIndex,
  folio,
  type NotebookPage,
} from '../app/components/notebook/pageIndex';
import { test, expect, type Locator } from '@playwright/test';

const photoAlts = [
  'Hand-soldered SNAP-75 keyboard on my desk',
  'SNAP-75 keyboard from above, with two OLED displays and colorful keycaps',
];

function currentPhoto(stack: Locator) {
  return stack.locator('.dm-polaroid-stack__photo[data-current="true"] img');
}

async function photoSettled(stack: Locator) {
  await expect
    .poll(() =>
      stack.evaluate(
        (el) =>
          el
            .getAnimations({ subtree: true })
            .filter(
              (animation) =>
                animation.playState === 'running' || animation.pending
            ).length
      )
    )
    .toBe(0);
}

test('notebook loads without runtime errors and writing lives in the garden', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Dom Lee.' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Into the garden' })
  ).toHaveAttribute('href', 'https://domogami.github.io/');
  await expect(
    page.getByRole('link', { name: 'Build one for your desk' })
  ).toHaveAttribute('href', 'https://nullbits.co/snap/');
  await expect(page.locator('.project-index .folio')).toHaveText([
    'p.00',
    'p.01',
    'p.02',
    'p.03',
    'p.14',
    'p.15',
    'p.16',
  ]);
  await expect(page.locator('.section-heading > .folio')).toHaveText([
    'p.06',
    'p.07',
    'p.08',
  ]);
  await expect(page.locator('#now .folded-banner')).toHaveCount(1);
  await expect(page.locator('img')).toHaveCount(2);
  await expect
    .poll(() =>
      page
        .locator('img')
        .evaluateAll((images) =>
          images.every(
            (img) =>
              (img as HTMLImageElement).complete &&
              (img as HTMLImageElement).naturalWidth > 0
          )
        )
    )
    .toBe(true);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth
    )
  ).toBe(true);
  expect(errors).toEqual([]);
});

test('mobile menu opens, traps focus, closes, and navigates', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const open = page.getByRole('button', { name: 'Open menu' });
  await open.click();
  await expect(
    page.getByRole('button', { name: 'Close menu' })
  ).toHaveAttribute('aria-expanded', 'true');
  await expect(
    page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'Works' })
  ).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Close menu' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(open).toBeFocused();
  await open.click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Contact' })
    .click();
  await expect(open).toHaveAttribute('aria-expanded', 'false');
  expect(page.url()).toContain('#contact');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth
    )
  ).toBe(true);
});

test('photo stack works on touch and motion can be stopped', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const stack = page.getByRole('group', { name: 'SNAP-75 photo gallery' });
  const surface = stack.locator('.dm-polaroid-stack__surface');
  await surface.click();
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[1]);
  await photoSettled(stack);
  await surface.click();
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[0]);
  await page.getByRole('button', { name: 'Motion: on' }).click();
  await expect(page.locator('.notebook')).toHaveClass(/motion-paused/);
  await expect(
    page.getByRole('button', { name: 'Motion: quiet' })
  ).toHaveAttribute('aria-pressed', 'true');
  await surface.click();
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[1]);
  await photoSettled(stack);
});

test('reduced motion is respected', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.notebook')).toHaveClass(/motion-paused/);
  expect(
    await page
      .locator('.margin-crane .crane path')
      .first()
      .evaluate((el) => getComputedStyle(el).animationName)
  ).toBe('none');
});

test('archived UI is a separate document and retains theme switching', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: /Previous portfolio/ }).click();
  await expect(page).toHaveURL(/\/archive\/portfolio\//);
  await expect(page.locator('.home')).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator('img')
        .evaluateAll((images) =>
          images.every(
            (img) =>
              (img as HTMLImageElement).complete &&
              (img as HTMLImageElement).naturalWidth > 0
          )
        )
    )
    .toBe(true);
  expect(await page.locator('.notebook').count()).toBe(0);
  expect(
    await page
      .locator('script[src]')
      .evaluateAll((items) => items.map((el) => el.getAttribute('src')))
  ).toEqual(['/archive/portfolio/theme.js']);
  await page
    .getByRole('combobox', { name: 'Color theme' })
    .selectOption('Dark');
  await expect(page.locator('body')).toHaveClass('theme--Dark');
  await page.getByRole('link', { name: 'Back to the new notebook' }).click();
  expect(
    await page
      .locator('link[rel=stylesheet]')
      .evaluateAll((items) =>
        items.some((el) => el.getAttribute('href')?.includes('legacy.css'))
      )
  ).toBe(false);
});

test('retired blog, admin and upload URLs are unavailable', async ({
  request,
}) => {
  for (const path of [
    '/blog',
    '/blog/old-post',
    '/admin',
    '/admin/new',
    '/.netlify/functions/uploadImage',
  ])
    expect((await request.get(path)).status()).toBe(404);
});

test('retained projects render', async ({ page }) => {
  await page.goto('/startpage');
  await expect(
    page.getByRole('heading', { name: 'Welcome Back Dom' })
  ).toBeVisible();
  await page
    .getByRole('combobox', { name: 'Color theme' })
    .selectOption('Light');
  await expect(page.locator('body')).toHaveClass('theme--Light');
  await page.goto('/drinks');
  await expect(
    page.getByRole('heading', { name: "Max's Drinks" })
  ).toBeVisible();
  await page
    .getByRole('combobox', { name: 'Color theme' })
    .selectOption('Dark');
  await expect(page.locator('body')).toHaveClass('theme--Dark');
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`copy stays between grid rows at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.drawn-ribbon.is-drawn').waitFor();
    await page.evaluate(() =>
      Promise.all(
        document
          .getAnimations()
          .filter((animation) =>
            (animation as CSSAnimation).animationName?.match(
              /^(timeline-details|hero-)/
            )
          )
          .map((animation) => animation.finished)
      )
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
    for (const selector of [
      '.intro-copy',
      '.project-story .grid-copy',
      '.project-index .index-row',
      '.now .life-list',
      '.garden-intro',
    ]) {
      const offset = await page
        .locator(selector)
        .first()
        .evaluate((el) => {
          const grid = el.closest('.dot-paper,.section-grid')!;
          return (
            (el.getBoundingClientRect().top -
              grid.getBoundingClientRect().top) %
            32
          );
        });
      expect(
        Math.min(offset, 32 - offset),
        `${selector} at ${width}px`
      ).toBeLessThan(1);
    }
  });
}

test('hobby erases independently while the single-line prefix stays fixed', async ({
  page,
}) => {
  await page.clock.install();
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const tagline = page.locator('.hobby-tagline');
  const prefix = tagline.locator(':scope > text').first();
  await expect(prefix).toHaveText('Currently distracted by');
  const before = await prefix.boundingBox();
  await page.clock.runFor(4300);
  await expect(page.locator('.hobby-reveal')).toHaveClass(/erasing/);
  await page.clock.runFor(400);
  await expect(page.locator('.hobby-word')).toHaveText('origami');
  await expect(page.locator('.hobby-reveal')).toHaveClass(/writing/);
  await page.clock.runFor(650);
  const after = await prefix.boundingBox();
  expect(after.x).toBeCloseTo(before.x, 1);
  expect(after.y).toBeCloseTo(before.y, 1);
  for (const word of [
    'calligraphy',
    'journaling',
    'reading',
    'tinkering',
    'exploring',
    'gaming',
    'cycling',
    'yoyoing',
    'coffee',
  ]) {
    await page.clock.runFor(4200);
    await expect(page.locator('.hobby-reveal')).toHaveClass(/erasing/);
    await page.clock.runFor(380);
    await expect(page.locator('.hobby-word')).toHaveText(word);
    await page.clock.runFor(650);
    await expect(page.locator('.hobby-reveal')).toHaveClass(/holding/);
  }
  await expect(page.locator('.hobby-word')).toHaveText('coffee');
  const bounds = await tagline.boundingBox();
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(320);
  expect(await prefix.boundingBox()).toEqual(after);
});

test('notebook drawings reveal on entry and separators follow the grid', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('.notebook-photo-stack .tape')).toHaveCount(0);
  await page.locator('#now').scrollIntoViewIfNeeded();
  await expect(page.locator('.folded-banner')).toHaveClass(/is-drawn/);
  await page.locator('#garden').scrollIntoViewIfNeeded();
  await expect(page.locator('.garden-plant')).toHaveClass(/is-drawn/);
  await expect(page.locator('#garden .animated-note')).toHaveClass(/is-drawn/);
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const leader of await page.locator('.index-row > .leader').all()) {
      const phase = await leader.evaluate((el) => {
        const grid = el.closest('.section-grid')!;
        const r = el.getBoundingClientRect();
        return (r.top + r.height / 2 - grid.getBoundingClientRect().top) % 32;
      });
      expect(phase).toBeCloseTo(16, 0);
    }
  }
});

test('sticky header compacts without shifting content and index returns to top', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  const header = page.locator('.masthead');
  const initialMain = await page
    .locator('#main')
    .evaluate((el) => el.getBoundingClientRect().top + scrollY);
  await expect.poll(async () => (await header.boundingBox())?.height).toBe(96);
  await page.evaluate(() => scrollTo(0, 500));
  await expect.poll(async () => (await header.boundingBox())?.height).toBe(64);
  expect((await header.boundingBox())?.y).toBe(0);
  expect(
    await page
      .locator('#main')
      .evaluate((el) => el.getBoundingClientRect().top + scrollY)
  ).toBe(initialMain);
  expect(
    await page
      .locator('.masthead-dock')
      .evaluate((el) => getComputedStyle(el).backgroundColor)
  ).toBe('rgb(43, 48, 52)');
  await page.getByRole('link', { name: 'Index — back to the top' }).click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await expect.poll(async () => (await header.boundingBox())?.height).toBe(96);
});

test('header crane is still initially and replays on focus with motion enabled', async ({
  page,
}) => {
  await page.goto('/');
  const brand = page.getByRole('link', { name: 'Dom Lee home' });
  await expect(brand.locator('.crane-animated')).toHaveCount(0);
  await brand.focus();
  await expect(brand.locator('.crane-animated')).toHaveCount(1);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect
    .poll(() =>
      brand
        .locator('path')
        .first()
        .evaluate((el) => getComputedStyle(el).animationName)
    )
    .toBe('none');
});

test('whole contact invitation is one mail link and garden stays composed at wide sizes', async ({
  page,
}) => {
  await page.goto('/');
  const contact = page.getByRole('link', {
    name: 'Send an email to Dom at domogami@gmail.com',
  });
  await expect(contact).toHaveAttribute('href', 'mailto:domogami@gmail.com');
  await expect(contact.locator('.contact-banner')).toHaveCount(1);
  await expect(contact.locator('.contact-illustration')).toHaveCount(1);
  await expect(contact.locator('a')).toHaveCount(0);
  for (const width of [320, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    const link = await page.locator('.garden-intro .text-link').boundingBox();
    const copy = await page.locator('.garden-intro .grid-copy').boundingBox();
    const plant = await page.locator('.garden-plant').boundingBox();
    const intro = await page.locator('.garden-intro').boundingBox();
    expect(link!.x).toBeCloseTo(copy!.x, 0);
    expect(link!.y).toBeGreaterThanOrEqual(copy!.y + copy!.height);
    expect(plant!.x + plant!.width).toBeCloseTo(intro!.x + intro!.width, 0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
  }
});

test('folio references are unique by destination and consistent throughout the notebook', async ({
  page,
}) => {
  const entries = Object.values(pageIndex);
  expect(new Set(entries.map((entry) => entry.number)).size).toBe(
    entries.length
  );
  expect(new Set(entries.map((entry) => entry.href)).size).toBe(entries.length);
  await page.goto('/');
  const references = await page.locator('[data-page]').evaluateAll((elements) =>
    elements.map((el) => ({
      key: el.getAttribute('data-page')!,
      text: el.textContent!,
      href: el.closest('a')?.getAttribute('href'),
    }))
  );
  for (const reference of references) {
    const key = reference.key as NotebookPage;
    expect(reference.text.trim()).toMatch(
      new RegExp(`^${folio(key).replace('.', '\\.')}($| )`)
    );
    if (reference.href) expect(reference.href).toBe(pageIndex[key].href);
  }
  await page
    .getByRole('button', { name: 'worth a scribble', exact: true })
    .click();
  const bookReference = page.locator(
    '.personal-note-link [data-page="lifeWorthLiving"]'
  );
  await expect(bookReference).toHaveText(folio('lifeWorthLiving'));
  await expect(page.locator('.personal-note-link')).toHaveAttribute(
    'href',
    pageIndex.lifeWorthLiving.href
  );
  for (const key of Object.keys(pageIndex).filter(
    (key) => key !== 'lifeWorthLiving'
  ))
    expect(references.some((reference) => reference.key === key)).toBe(true);
});

test('plant drawing replays on hover, click and keyboard without overriding quiet motion', async ({
  page,
}) => {
  await page.goto('/');
  const plant = page.getByRole('button', {
    name: 'Replay plant drawing animation',
  });
  await plant.scrollIntoViewIfNeeded();
  await expect(plant).toHaveClass(/is-drawn/);
  const stem = plant.locator('.plant-stem');
  const progress = () =>
    stem.evaluate((el) => Number(el.getAnimations()[0]?.currentTime ?? 0));
  await expect.poll(progress).toBeGreaterThanOrEqual(1000);
  await plant.hover();
  await expect.poll(progress).toBeLessThan(500);
  await expect.poll(progress).toBeGreaterThanOrEqual(1000);
  await plant.click();
  await expect.poll(progress).toBeLessThan(500);
  await expect.poll(progress).toBeGreaterThanOrEqual(1000);
  await plant.press('Enter');
  await expect.poll(progress).toBeLessThan(500);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await plant.click();
  await expect
    .poll(() => stem.evaluate((el) => getComputedStyle(el).animationName))
    .toBe('none');
  expect(
    await stem.evaluate((el) => getComputedStyle(el).strokeDashoffset)
  ).toBe('0px');
});

test('hero uses one stationary grid across both panels', async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const hero = page.locator('.hero');
    await expect(hero).toHaveCSS('background-size', '32px 32px');
    await expect(hero).toHaveCSS('background-position', '0px -16px');
    for (const panel of ['.hero-paper', '.hero-teal']) {
      await expect(page.locator(panel)).toHaveCSS('background-image', 'none');
      await expect(page.locator(panel)).toHaveCSS(
        'background-color',
        'rgba(0, 0, 0, 0)'
      );
    }
    await page.evaluate(() => scrollTo({ top: 300, behavior: 'instant' }));
    await expect(hero).toHaveCSS('background-position', '0px -16px');
    await expect(page.locator('.crane-display')).toHaveCSS('transform', 'none');
    await expect(page.locator('[data-parallax], .moving-dots')).toHaveCount(0);
  }
});

test('navigation dot follows scroll position, footer and mobile index', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const desktop = page.getByRole('navigation', { name: 'Main navigation' });
  const index = page.getByRole('link', { name: 'Index — back to the top' });
  await expect(index).toHaveAttribute('aria-current', 'location');
  for (const [id, name] of [
    ['works', 'Works'],
    ['now', 'About'],
    ['garden', 'Garden'],
    ['contact', 'Contact'],
  ]) {
    await page.evaluate((id) => {
      const el = document.getElementById(id)!;
      scrollTo(0, el.getBoundingClientRect().top + scrollY - 100);
    }, id);
    await expect(desktop.getByRole('link', { name })).toHaveAttribute(
      'aria-current',
      'location'
    );
    await expect(desktop.locator('[aria-current]')).toHaveCount(1);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(
    page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'Contact' })
  ).toHaveAttribute('aria-current', 'location');
  await page.keyboard.press('Escape');
  await index.click();
  await expect(index).toHaveAttribute('aria-current', 'location');
  await expect(desktop.locator('[aria-current]')).toHaveCount(0);
});

test('polaroids swipe both ways without double swapping or blocking page scrolling', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const touch = await page.context().newCDPSession(page);
  await touch.send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await page.goto('/');
  const stack = page.getByRole('group', { name: 'SNAP-75 photo gallery' });
  const surface = stack.locator('.dm-polaroid-stack__surface');
  await surface.scrollIntoViewIfNeeded();
  const box = (await surface.boundingBox())!;
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  async function swipe(dx: number, dy: number) {
    await touch.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [{ x, y }],
    });
    for (let step = 1; step <= 6; step++) {
      await touch.send('Input.dispatchTouchEvent', {
        type: 'touchMove',
        touchPoints: [{ x: x + (dx * step) / 6, y: y + (dy * step) / 6 }],
      });
    }
    await touch.send('Input.dispatchTouchEvent', {
      type: 'touchEnd',
      touchPoints: [],
    });
  }
  for (const [dx, index] of [
    [-90, 1],
    [90, 0],
    [90, 1],
    [90, 0],
  ]) {
    await swipe(dx, 0);
    await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[index]);
    await photoSettled(stack);
  }
  const before = await page.evaluate(() => window.scrollY);
  await swipe(0, -110);
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[0]);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(before);
  await surface.focus();
  await page.keyboard.press('Space');
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[1]);
});

test('desktop photos stay still on hover and clicks retain the selected card', async ({
  page,
}) => {
  await page.goto('/');
  const stack = page.getByRole('group', { name: 'SNAP-75 photo gallery' });
  const surface = stack.locator('.dm-polaroid-stack__surface');
  await surface.scrollIntoViewIfNeeded();
  const first = stack.locator('.dm-polaroid-stack__photo').filter({
    has: page.locator('img[alt="Hand-soldered SNAP-75 keyboard on my desk"]'),
  });
  const original = await first.evaluate((el) => getComputedStyle(el).transform);
  await surface.hover();
  await expect(first).toHaveCSS('transform', original);
  await surface.click();
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[1]);
  await photoSettled(stack);
  await page.mouse.move(0, 0);
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[1]);
  await surface.click();
  await expect(currentPhoto(stack)).toHaveAttribute('alt', photoAlts[0]);
});

test('photo arrows loop and counter stays in sync with clicks at mobile and desktop sizes', async ({
  page,
}) => {
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const stack = page.getByRole('group', { name: 'SNAP-75 photo gallery' });
    const counter = stack.locator('.dm-polaroid-stack__count');
    const surface = stack.locator('.dm-polaroid-stack__surface');
    const next = stack.getByRole('button', {
      name: 'Next photo',
      exact: true,
    });
    const previous = stack.getByRole('button', {
      name: 'Previous photo',
      exact: true,
    });
    await expect(counter).toContainText(/Photo\s*1\s*\/\s*of\s*2/);
    for (const [control, index] of [
      [next, 1],
      [next, 0],
      [previous, 1],
    ] as const) {
      await control.click();
      await expect(currentPhoto(stack)).toHaveAttribute(
        'alt',
        photoAlts[index]
      );
      await expect(counter).toContainText(
        new RegExp(`Photo\\s*${index + 1}\\s*\/\\s*of\\s*2`)
      );
      await photoSettled(stack);
    }
    await surface.click();
    await expect(counter).toContainText(/Photo\s*1\s*\/\s*of\s*2/);
    await photoSettled(stack);
    const ratio = await currentPhoto(stack).evaluate(
      (image) => image.clientWidth / image.clientHeight
    );
    expect(ratio).toBeCloseTo(1600 / 898, 1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
  }
});

test('journal key opens personal notes and restores keyboard focus', async ({
  page,
}) => {
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const notes = page.getByRole('group', { name: 'Notebook notes' });
    await expect(
      page.getByRole('heading', { name: 'In the margins' })
    ).toBeVisible();
    const labels = [
      'on my list',
      'made & loved',
      'a little happening',
      'worth a scribble',
      'carried forward',
    ];
    for (const label of labels) {
      const entry = notes.getByRole('button', { name: label, exact: true });
      await entry.focus();
      await page.keyboard.press('Enter');
      await expect(notes.locator('.personal-note-title')).toBeFocused();
      if (label === 'worth a scribble') {
        await expect(
          notes.getByRole('heading', { name: 'Life Worth Living' })
        ).toBeVisible();
        await expect(
          notes.getByRole('link', { name: /Read my book notes/ })
        ).toHaveAttribute('href', pageIndex.lifeWorthLiving.href);
      }
      await page.keyboard.press('Escape');
      await expect(entry).toBeFocused();
    }
    await notes
      .getByRole('button', { name: 'made & loved', exact: true })
      .click();
    await notes
      .getByRole('button', { name: 'back to the key', exact: true })
      .click();
    await expect(notes.locator('.key-source')).toHaveAttribute(
      'href',
      /bulletjournal.com/
    );
    const card = (await notes.boundingBox())!;
    const crane = (await page.locator('.margin-crane').boundingBox())!;
    if (width > 760) expect(card.x + card.width).toBeLessThan(crane.x);
    else expect(crane.y + crane.height).toBeLessThan(card.y);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
  }
});

test('margin crane draws on entry and supports replay and reduced motion', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const button = page.getByRole('button', {
    name: 'Replay crane folding animation',
  });
  await expect(button).toHaveClass(/crane-waiting/);
  await expect(button.locator('.crane-animated')).toHaveCount(0);
  await button.scrollIntoViewIfNeeded();
  await expect(button).not.toHaveClass(/crane-waiting/);
  await expect(button.locator('.crane-animated')).toHaveCount(1);
  const before = await button.locator('svg').elementHandle();
  await button.click();
  expect(await before!.evaluate((el) => el.isConnected)).toBe(false);
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(button.locator('path').first()).toHaveCSS(
    'animation-name',
    'fold-draw'
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(button.locator('path').first()).toHaveCSS(
    'animation-name',
    'none'
  );
  await expect(button.locator('path').first()).toHaveCSS('fill-opacity', '1');
});

test('chosen design has no comparison and key underline flows only on interaction', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('.design-switch')).toHaveCount(0);
  await expect(page.locator('.margin-notes .key-note')).toHaveCount(1);
  const link = page.locator('.key-source');
  const underline = link.locator('span');
  await expect(underline).toHaveCSS('animation-name', 'none');
  expect(
    await underline.evaluate((el) => getComputedStyle(el).backgroundImage)
  ).toContain('data:image/svg+xml');
  // This checks the underline, not scrolling. Keep browser/Playwright scrolling
  // instant so it cannot move the link away from the stationary pointer.
  await page.addStyleTag({
    content: 'html { scroll-behavior: auto !important; }',
  });
  await page.evaluate(() => document.fonts.ready);
  await link.evaluate((el) =>
    el.scrollIntoView({ block: 'center', behavior: 'instant' })
  );
  await link.hover();
  await expect(underline).toHaveCSS('animation-name', 'key-wave-flow');
  const phase = await underline.evaluate(
    (el) => getComputedStyle(el).backgroundPositionX
  );
  await expect
    .poll(() =>
      underline.evaluate(
        (el, initial) =>
          el.closest('a')!.matches(':hover') &&
          getComputedStyle(el).backgroundPositionX !== initial,
        phase
      )
    )
    .toBe(true);
  await page.mouse.move(0, 0);
  await expect(underline).toHaveCSS('animation-name', 'none');
  await link.focus();
  await expect(underline).toHaveCSS('animation-name', 'key-wave-flow');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(underline).toHaveCSS('animation-name', 'none');
  const response = await page.goto('/preview/mainline');
  expect(response?.status()).toBe(404);
});

test('departing photo paints beyond its gallery until it tucks beneath the stack', async ({
  page,
}, info) => {
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    const stack = page.getByRole('group', { name: 'SNAP-75 photo gallery' });
    await stack.scrollIntoViewIfNeeded();
    const outgoing = await stack
      .locator('.dm-polaroid-stack__photo[data-current="true"]')
      .elementHandle();
    await stack
      .getByRole('button', { name: 'Previous photo', exact: true })
      .click();
    const excursion = await outgoing!.evaluate((card) => {
      const animation = card
        .getAnimations()
        .find(
          (animation) =>
            animation instanceof CSSAnimation &&
            animation.animationName === 'dm-polaroid-cycle'
        )!;
      animation.pause();
      const duration = Number(animation.effect!.getTiming().duration);
      animation.currentTime = duration * 0.48;
      const gallery = card.closest('.dm-polaroid-stack')!;
      const stage = card.closest('.dm-polaroid-stack__stage')!;
      const clippers: string[] = [];
      for (
        let ancestor = card.parentElement;
        ancestor;
        ancestor = ancestor.parentElement
      ) {
        const css = getComputedStyle(ancestor);
        if (
          css.overflowX !== 'visible' ||
          css.overflowY !== 'visible' ||
          css.clipPath !== 'none' ||
          /paint|strict|content/.test(css.contain)
        ) {
          clippers.push(ancestor.className || ancestor.tagName);
        }
      }
      let paintsAboveStory: boolean | undefined;
      if (innerWidth >= 1000) {
        const story = card
          .closest('.featured-project')!
          .querySelector('.project-story .grid-copy')!;
        const print = card.getBoundingClientRect();
        const text = story.getBoundingClientRect();
        const x =
          (Math.max(print.left, text.left) +
            Math.min(print.right, text.right)) /
          2;
        const y =
          (Math.max(print.top, text.top) +
            Math.min(print.bottom, text.bottom)) /
          2;
        // Make the print hit-testable only for this paint-order probe; this
        // does not change its geometry, stacking context, or rendered pixels.
        const previous = (card as HTMLElement).style.pointerEvents;
        (card as HTMLElement).style.pointerEvents = 'auto';
        const hit = document.elementFromPoint(x, y);
        paintsAboveStory = hit !== null && card.contains(hit);
        (card as HTMLElement).style.pointerEvents = previous;
      }
      return {
        duration,
        paintsAboveStory,
        cardRight: card.getBoundingClientRect().right,
        cardWidth: card.getBoundingClientRect().width,
        galleryRight: gallery.getBoundingClientRect().right,
        stageWidth: stage.getBoundingClientRect().width,
        clippers,
      };
    });
    expect(excursion.duration).toBe(480);
    expect(excursion.cardRight).toBeGreaterThan(
      excursion.galleryRight + excursion.stageWidth * 0.8
    );
    expect(excursion.cardWidth).toBeGreaterThan(excursion.stageWidth * 0.95);
    expect(excursion.clippers).toEqual([]);
    if (width >= 1000) expect(excursion.paintsAboveStory).toBe(true);
    await page.screenshot({
      path: info.outputPath(`photo-excursion-${width}.png`),
    });
    await outgoing!.evaluate((card) => {
      card
        .getAnimations()
        .find(
          (animation) =>
            animation instanceof CSSAnimation &&
            animation.animationName === 'dm-polaroid-cycle'
        )!
        .finish();
    });
    await photoSettled(stack);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
  }
});

test('photo cycle starts and settles without a transform handoff jump', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const stack = page.getByRole('group', { name: 'SNAP-75 photo gallery' });
  await stack.scrollIntoViewIfNeeded();
  for (const direction of ['Next', 'Previous', 'Previous', 'Next']) {
    const outgoing = stack.locator(
      '.dm-polaroid-stack__photo[data-current="true"]'
    );
    const initial = await outgoing.evaluate(
      (el) => getComputedStyle(el).transform
    );
    // Retain this exact node across the shared component's index change.
    const outgoingNode = await outgoing.elementHandle();
    await stack
      .getByRole('button', {
        name: `${direction} photo`,
        exact: true,
      })
      .click();
    const frames = await outgoingNode!.evaluate(async (el) => {
      const cycle = el
        .getAnimations()
        .find(
          (animation) =>
            animation.effect instanceof KeyframeEffect &&
            animation.effect
              .getKeyframes()
              .some((frame) => frame.transform !== undefined)
        )!;
      cycle.pause();
      cycle.currentTime = 0;
      const start = getComputedStyle(el).transform;
      cycle.currentTime = Number(cycle.effect!.getTiming().duration);
      const end = getComputedStyle(el).transform;
      cycle.finish();
      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      );
      return { start, end, settled: getComputedStyle(el).transform };
    });
    expect(frames.start).toBe(initial);
    expect(frames.settled).toBe(frames.end);
    await photoSettled(stack);
  }
});

test('header crane returns to top without reloading and closes the mobile menu', async ({
  page,
}) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.locator('#now').scrollIntoViewIfNeeded();
    await page.evaluate(() => {
      document.body.dataset.navigationCheck = 'same-page';
    });
    if (width === 390)
      await page.getByRole('button', { name: 'Open menu' }).click();
    await page.getByRole('link', { name: 'Dom Lee home' }).click();
    await expect(page).toHaveURL(/#top$/);
    await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(2);
    expect(
      await page.evaluate(() => document.body.dataset.navigationCheck)
    ).toBe('same-page');
    if (width === 390)
      await expect(
        page.getByRole('button', { name: 'Open menu' })
      ).toHaveAttribute('aria-expanded', 'false');
  }
});

test('outbound arrows use ink SVGs instead of emoji glyphs on mobile', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  for (const name of [
    'Into the garden',
    'Build one for your desk',
    'Wander through the garden',
    'GitHub',
  ]) {
    const arrow = page
      .getByRole('link', { name, exact: true })
      .locator('svg.ink-link-arrow');
    await expect(arrow).toHaveCount(1);
    await expect(arrow).toHaveAttribute('aria-hidden', 'true');
  }
  await page
    .getByRole('button', { name: 'worth a scribble', exact: true })
    .click();
  await expect(
    page
      .getByRole('link', { name: /Read my book notes/ })
      .locator('svg.ink-link-arrow')
  ).toHaveCount(1);
  expect(await page.locator('.notebook').innerText()).not.toContain('↗');
});

test('shared-link metadata and the PNG are available without JavaScript', async ({
  browser,
  request,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  try {
    const page = await context.newPage();
    await page.goto('/');
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute('content');
    expect(description).toContain('calligraphy');
    await expect(
      page.locator('meta[property="og:description"]')
    ).toHaveAttribute('content', description!);
    await expect(
      page.locator('meta[name="twitter:description"]')
    ).toHaveAttribute('content', description!);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      await page.title()
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image'
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://dominicklee.net/'
    );
    const image = page.locator('meta[property="og:image"]');
    await expect(image).toHaveCount(1);
    const imageURL = new URL((await image.getAttribute('content'))!);
    expect(imageURL.origin).toBe('https://dominicklee.net');
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      imageURL.href
    );
    const response = await request.get(imageURL.pathname);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('image/png');
    const png = await response.body();
    expect(png.subarray(1, 4).toString()).toBe('PNG');
    expect(png.readUInt32BE(16)).toBe(1200);
    expect(png.readUInt32BE(20)).toBe(630);
    expect(png.length).toBeLessThan(1_000_000);
    await expect(
      page.locator('meta[property="og:image:width"]')
    ).toHaveAttribute('content', '1200');
    await expect(
      page.locator('meta[property="og:image:height"]')
    ).toHaveAttribute('content', '630');
  } finally {
    await context.close();
  }
});
