import { test, expect, type Page } from '@playwright/test';
import { weatherFixture } from './weather-fixture';

const result = (page: Page) =>
  page.getByRole('status', { name: 'Result', exact: true });
async function solve(page: Page, expression: string, answer: string) {
  await page.getByLabel('Your calculation', { exact: true }).fill(expression);
  await page
    .getByRole('button', { name: 'Calculate result', exact: true })
    .click();
  await expect(result(page)).toHaveText(answer);
  await expect(page.locator('.calc-answer')).toHaveClass(/is-written/);
}

test.describe('calculator journal', () => {
  test.use({ serviceWorkers: 'block' });

  test('paper keypad supports percentages, continuing an answer, fresh entries and undo', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/calculator');
    await expect(page).toHaveURL(/\/calculator\/$/);
    for (const name of [
      '2',
      '0',
      '0',
      'Add',
      '1',
      '0',
      'Percent',
      'Calculate result',
    ])
      await page.getByRole('button', { name, exact: true }).click();
    await expect(result(page)).toHaveText('220');
    for (const name of ['Multiply', '2', 'Calculate result'])
      await page.getByRole('button', { name, exact: true }).click();
    await expect(result(page)).toHaveText('440');
    await page.getByRole('button', { name: '7', exact: true }).click();
    await expect(
      page.getByLabel('Your calculation', { exact: true })
    ).toHaveValue('7');
    await page.getByRole('button', { name: 'Change sign' }).click();
    await expect(result(page)).toHaveText('-7');
    await page.getByRole('button', { name: 'Clear calculation' }).click();
    await expect(result(page)).toHaveText('0');
    await page.getByRole('button', { name: 'Undo last edit' }).click();
    await expect(result(page)).toHaveText('-7');
    expect(errors).toEqual([]);
  });

  test('keyboard and caret edits preserve expressions and domain errors recover', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'aria-busy',
      'false'
    );
    await page.keyboard.type('24*(3+2)');
    await page.keyboard.press('Enter');
    await expect(result(page)).toHaveText('120');
    await page.keyboard.type('/4=');
    await expect(result(page)).toHaveText('30');
    const field = page.getByLabel('Your calculation', { exact: true });
    await field.fill('12+34');
    await field.press('ArrowLeft');
    await field.press('ArrowLeft');
    await field.press('ArrowLeft');
    expect(
      await field.evaluate((el: HTMLInputElement) => el.selectionStart)
    ).toBe(2);
    await page.getByRole('button', { name: '9', exact: true }).click();
    await expect(field).toHaveValue('129+34');
    await field.press('Enter');
    await expect(result(page)).toHaveText('163');
    await field.fill('2+3');
    await field.press('Enter');
    await field.pressSequentially('*2');
    await field.press('Enter');
    await expect(result(page)).toHaveText('10');
    await field.pressSequentially('7');
    await expect(field).toHaveValue('7');
    await solve(page, '2(3)', '6');
    await page.getByRole('button', { name: 'Clear calculation' }).click();
    await field.fill('2(3)');
    await page.getByRole('button', { name: 'Change sign' }).click();
    await expect(result(page)).toHaveText('-6');
    await field.fill('1/0');
    await field.press('Enter');
    await expect(page.locator('.calc-answer-meta')).toContainText(
      'Division by zero'
    );
    await expect(result(page)).toHaveText('—');
    await solve(page, 'sqrt(81)', '9');
  });

  test('scientific controls, angle modes, previous answer and calculator memory', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    await page.getByRole('button', { name: /^Scientific/ }).click();
    for (const name of [
      'sin',
      '3',
      '0',
      'Close parenthesis',
      'Calculate result',
    ])
      await page.getByRole('button', { name, exact: true }).click();
    await expect(result(page)).toHaveText('0.5');
    await page.getByRole('button', { name: /^Scientific/ }).click();
    await page.getByRole('button', { name: 'RAD', exact: true }).click();
    await page.getByRole('button', { name: 'Close dialog' }).click();
    await solve(page, 'sin(pi/2)', '1');
    await page.getByRole('button', { name: /^Scientific/ }).click();
    await page.getByRole('button', { name: 'Add result to memory' }).click();
    await page.getByRole('button', { name: 'Close dialog' }).click();
    await solve(page, 'ans+4', '5');
    await page.getByRole('button', { name: /^Scientific/ }).click();
    await page.getByRole('button', { name: 'Add result to memory' }).click();
    await expect(page.locator('.calc-memory-value')).toHaveText('M = 6');
    await page.getByRole('button', { name: 'Close dialog' }).click();
    await page.getByRole('button', { name: 'Clear calculation' }).click();
    await page.getByRole('button', { name: /^Scientific/ }).click();
    await page.getByRole('button', { name: 'Recall memory' }).click();
    await expect(result(page)).toHaveText('6');
    await page.getByRole('button', { name: /^Scientific/ }).click();
    await page
      .getByRole('button', { name: 'Subtract result from memory' })
      .click();
    await expect(page.locator('.calc-memory-value')).toHaveText('M = 0');
    await page.reload();
    await page.getByRole('button', { name: /^Scientific/ }).click();
    await expect(
      page.getByRole('button', { name: 'RAD', exact: true })
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.calc-memory-value')).toHaveText('M = 0');
    await page.getByRole('button', { name: 'Clear memory' }).click();
    await expect(
      page.getByRole('button', { name: 'Recall memory' })
    ).toBeDisabled();
  });

  test('scratchpad persists, reuses answers, and restores an accidental clear', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    await solve(page, '19.5*3', '58.5');
    await solve(page, '200-15%', '170');
    await page.reload();
    await expect(result(page)).toHaveText('170');
    await expect(page.locator('.calc-history ol li')).toHaveCount(2);
    await page.getByRole('tab', { name: 'History', exact: true }).click();
    await page
      .getByRole('button', { name: 'Use result 58.5 from 19.5×3' })
      .click();
    await expect(result(page)).toHaveText('58.5');
    await page.getByRole('tab', { name: 'History', exact: true }).click();
    await page
      .getByRole('button', { name: 'Clear history', exact: true })
      .click();
    await expect(page.locator('.calc-history ol li')).toHaveCount(0);
    await page.getByRole('button', { name: 'Undo clear' }).click();
    await expect(page.locator('.calc-history ol li')).toHaveCount(2);
  });

  test('unit conversion switches categories and brings its result back to the keypad', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    await page.getByRole('tab', { name: 'Convert', exact: true }).click();
    await page.getByLabel('What are we measuring?').selectOption('temperature');
    await page.getByLabel('Value', { exact: true }).fill('100');
    await expect(page.getByLabel('Converted value')).toHaveText('212');
    await page.getByRole('button', { name: 'Swap units' }).click();
    await page.getByLabel('Value', { exact: true }).fill('32');
    await expect(page.getByLabel('Converted value')).toHaveText('0');
    await page.getByRole('button', { name: 'Use in a calculation' }).click();
    await expect(result(page)).toHaveText('0');
    await page.getByRole('tab', { name: 'Convert', exact: true }).click();
    await page.getByLabel('What are we measuring?').selectOption('temperature');
    await page
      .getByRole('combobox', { name: 'From', exact: true })
      .selectOption('k');
    await page.getByLabel('Value', { exact: true }).fill('-1');
    await expect(page.locator('.calc-error')).toContainText('absolute zero');
    await expect(
      page.getByRole('button', { name: 'Use in a calculation' })
    ).toBeDisabled();
  });

  test('theme, quiet motion, settings focus and local preferences', async ({
    page,
  }, testInfo) => {
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
    await page.goto('/calculator/');
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'data-theme',
      'dark'
    );
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'data-motion',
      'off'
    );
    const settings = page.getByRole('button', { name: 'Calculator settings' });
    await settings.click();
    await page.getByRole('button', { name: 'Day', exact: true }).click();
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'data-theme',
      'light'
    );
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(settings).toBeFocused();
    await page.reload();
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'data-theme',
      'light'
    );
    await settings.click();
    await page.getByRole('button', { name: 'Night', exact: true }).click();
    await page.getByRole('button', { name: 'Close dialog' }).click();
    await solve(page, '24*(3+2)', '120');
    expect(
      await page
        .locator('.calc-answer')
        .evaluate((el) => getComputedStyle(el).animationName)
    ).toBe('none');
    await page
      .getByRole('heading', { name: 'Calculator', exact: true })
      .click();
    await page.screenshot({
      path: testInfo.outputPath('calculator-night.png'),
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('calculating needs neither network requests nor available local storage or secure UUIDs', async ({
    page,
    baseURL,
  }) => {
    const external: string[] = [],
      errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('request', (r) => {
      if (new URL(r.url()).origin !== new URL(baseURL!).origin)
        external.push(r.url());
    });
    await page.addInitScript(() => {
      Object.defineProperty(globalThis.crypto, 'randomUUID', {
        value: undefined,
      });
      Storage.prototype.getItem = () => {
        throw new Error('Storage unavailable');
      };
      Storage.prototype.setItem = () => {
        throw new Error('Storage unavailable');
      };
    });
    await page.goto('/calculator/');
    await solve(page, '4*5', '20');
    await expect(page.locator('.calc-history ol li')).toHaveCount(1);
    expect(errors).toEqual([]);
    expect(external).toEqual([]);
  });

  for (const width of [320, 390, 540, 768, 1024, 1440]) {
    test(`calculator and converter fit ${width}px without horizontal overflow`, async ({
      page,
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: 'light' });
      await page.goto('/calculator/');
      await solve(page, '24*(3+2)', '120');
      await page
        .getByRole('heading', { name: 'Calculator', exact: true })
        .click();
      await page.screenshot({
        path: testInfo.outputPath(`calculator-${width}.png`),
        fullPage: true,
        animations: 'disabled',
      });
      const withinPage = async () =>
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth
          )
        ).toBe(true);
      await withinPage();
      for (const target of ['.calc-machine', '.calc-keypad', '.pocket-nav']) {
        const box = await page.locator(target).boundingBox();
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
      }
      const key = await page
        .getByRole('button', { name: '7', exact: true })
        .boundingBox();
      expect(key.height).toBeGreaterThanOrEqual(44);
      expect(key.width).toBeGreaterThanOrEqual(44);
      await solve(page, '1/3', '0.33333333333333');
      const output = page.locator('.calc-answer');
      expect(
        await output.evaluate((el) => el.scrollWidth <= el.clientWidth)
      ).toBe(true);
      await page.getByRole('button', { name: /^Scientific/ }).click();
      await withinPage();
      await page.getByRole('button', { name: 'Close dialog' }).click();
      await page.getByRole('tab', { name: 'Convert', exact: true }).click();
      await page.getByLabel('What are we measuring?').selectOption('speed');
      await withinPage();
      await page.getByRole('button', { name: 'Calculator settings' }).click();
      const box = await page.getByRole('dialog').boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
    });
  }

  test('phone landscape keeps the settings and install guide reachable', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 844, height: 390 });
    await page.goto('/calculator/');
    await page.getByRole('button', { name: 'Calculator settings' }).click();
    const box = await page.getByRole('dialog').boundingBox();
    expect(box.y).toBeGreaterThanOrEqual(0);
    expect(box.y + box.height).toBeLessThanOrEqual(391);
    await page
      .getByRole('heading', { name: 'A little notebook in your pocket' })
      .scrollIntoViewIfNeeded();
    await expect(
      page.getByRole('heading', { name: 'A little notebook in your pocket' })
    ).toBeVisible();
  });

  test('phone taps work and the entire basic keypad fits on the opening screen', async ({
    browser,
    baseURL,
  }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
      serviceWorkers: 'block',
      baseURL,
    });
    const page = await context.newPage();
    try {
      await page.goto('/calculator/');
      const equals = page.getByRole('button', { name: 'Calculate result' });
      const box = await equals.boundingBox();
      expect(box.y + box.height).toBeLessThanOrEqual(780);
      for (const name of ['8', 'Multiply', '7', 'Calculate result'])
        await page.getByRole('button', { name, exact: true }).tap();
      await expect(result(page)).toHaveText('56');
      await expect(
        page.getByRole('tabpanel', { name: 'History', exact: true })
      ).toHaveCount(0);
    } finally {
      await context.close();
    }
  });
});

test('calculator and weather install separately and the calculator reopens and calculates offline', async ({
  page,
  context,
}) => {
  await page.route('**/weather/api?*', (route) =>
    route.fulfill({ json: weatherFixture() })
  );
  await page.route('**/weather/alerts?*', (route) =>
    route.fulfill({ json: { status: 'ok', alerts: [] } })
  );
  await page.goto('/weather/');
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await page.goto('/calculator/');
  await solve(page, '14*3', '42');
  await expect
    .poll(() =>
      page.evaluate(async () => {
        const cacheName = (await caches.keys()).find((name) =>
          name.startsWith('dom-calculator-shell-')
        );
        if (!cacheName) return {};
        const cache = await caches.open(cacheName);
        const urls = (await cache.keys()).map((r) => r.url);
        return {
          route: urls.some(
            (u) => u.includes('/assets/calculator-') && u.endsWith('.js')
          ),
          entry: urls.some((u) => u.includes('/assets/entry.client-')),
          fonts: urls.some((u) => u.includes('/fonts/')),
          icon: urls.some(
            (u) => new URL(u).pathname === '/calculator/icon.svg'
          ),
          scopes: (await navigator.serviceWorker.getRegistrations())
            .map((r) => new URL(r.scope).pathname)
            .sort(),
        };
      })
    )
    .toMatchObject({
      route: true,
      entry: true,
      fonts: true,
      icon: true,
      scopes: ['/calculator/', '/weather/'],
    });
  await context.setOffline(true);
  await page.reload();
  await expect(result(page)).toHaveText('42');
  await solve(page, 'sqrt(144)+8', '20');
  await page.getByRole('tab', { name: 'Convert', exact: true }).click();
  await page.getByLabel('What are we measuring?').selectOption('time');
  await page
    .getByRole('combobox', { name: 'From', exact: true })
    .selectOption('h');
  await page.getByLabel('Value', { exact: true }).fill('2');
  await expect(page.getByLabel('Converted value')).toHaveText('120');
  await context.setOffline(false);
});

test('calculator manifest, standalone icons, canonical route and notebook index are connected', async ({
  request,
}) => {
  const manifest = await (
    await request.get('/calculator/manifest.webmanifest')
  ).json();
  expect(manifest.scope).toBe('/calculator/');
  expect(manifest.start_url).toBe('/calculator/');
  expect(manifest.id).toBe('/calculator/');
  expect(manifest.display).toBe('standalone');
  for (const icon of manifest.icons)
    expect((await request.get(icon.src)).ok()).toBe(true);
  expect((await request.get('/calculator/apple-touch-icon.png')).ok()).toBe(
    true
  );
  const redirect = await request.get('/calculator?from=notebook', {
    maxRedirects: 0,
  });
  expect([301, 302]).toContain(redirect.status());
  expect(redirect.headers().location).toBe('/calculator/?from=notebook');
  const home = await (await request.get('/')).text();
  expect(home).toContain('href="/calculator/"');
});
