import { test, expect, type Page } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

type Pulse = { pattern: number | number[]; at: number };
declare global {
  interface Window {
    feedbackPulses: Pulse[];
    drawingFinishedAt: number;
  }
}

async function motor(
  page: Page,
  support: 'yes' | 'missing' | 'blocked' = 'yes'
) {
  await page.addInitScript((support) => {
    window.feedbackPulses = [];
    Object.defineProperty(navigator, 'vibrate', {
      configurable: true,
      value:
        support === 'missing'
          ? undefined
          : (pattern: number | number[]) => {
              if (support === 'blocked') throw new Error('Device policy');
              window.feedbackPulses.push({ pattern, at: performance.now() });
              return true;
            },
    });
  }, support);
}
async function pulses(page: Page) {
  return page.evaluate(() =>
    window.feedbackPulses.filter((p) => p.pattern !== 0)
  );
}
async function resetPulses(page: Page) {
  await page.evaluate(() => {
    window.feedbackPulses = [];
  });
  // Deliberate taps are separated; the site suppresses overlapping motor calls.
  await page.waitForTimeout(90);
}
async function weather(page: Page) {
  await page.clock.setFixedTime(weatherNow);
  await page.route('**/weather/api?*', (r) =>
    r.fulfill({ json: weatherFixture() })
  );
  await page.route('**/weather/alerts?*', (r) =>
    r.fulfill({ json: { status: 'ok', alerts: [] } })
  );
  await page.goto('/weather/');
  await expect(page.locator('.current-temperature')).toHaveText('64°');
}

test.describe('mobile pen arrows and touch feedback', () => {
  test.use({
    viewport: { width: 390, height: 600 },
    isMobile: true,
    hasTouch: true,
    serviceWorkers: 'block',
  });

  test('arrows are SVG strokes and the city caret stays centered on a small phone', async ({
    page,
  }, info) => {
    await weather(page);
    await page.evaluate(() => document.fonts.ready);
    const city = await page.locator('.weather-place > span').boundingBox();
    const caret = await page
      .locator('.weather-place > svg.place-chevron')
      .boundingBox();
    expect(caret).not.toBeNull();
    expect(
      Math.abs(caret!.y + caret!.height / 2 - city!.y - city!.height / 2)
    ).toBeLessThan(3);
    await expect(page.locator('.place-chevron path')).toHaveAttribute('d', /Q/);
    await page.getByRole('button', { name: 'Show hourly forecast' }).tap();
    await expect(
      page
        .getByRole('button', { name: 'Next six hours' })
        .locator('svg.ink-link-arrow')
    ).toBeVisible();
    await page.screenshot({
      path: info.outputPath('mobile-ink-arrows.png'),
      animations: 'disabled',
    });
    for (const path of ['/calculator/', '/']) {
      await page.goto(path);
      await expect(
        page.locator('.ink-link-arrow').filter({ visible: true }).first()
      ).toBeVisible();
      expect(await page.locator('body').innerText()).not.toMatch(
        /[↗↘↙↖←→↑↓↺↻↶↷⌄⇄⇆⇅↔]/
      );
    }
    await page.goto('/calculator/');
    await page.getByRole('tab', { name: 'Convert', exact: true }).tap();
    await expect(
      page.getByRole('button', { name: 'Swap units' }).locator('svg')
    ).toBeVisible();
  });

  test('only real touch interactions pulse, and sky feedback follows the actual final stroke', async ({
    page,
  }) => {
    await motor(page);
    await weather(page);
    expect(await pulses(page)).toEqual([]);
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    expect(await pulses(page)).toEqual([]);
    await page.getByRole('tab', { name: 'Now', exact: true }).tap();
    expect((await pulses(page)).map((p) => p.pattern)).toEqual([4]);
    await resetPulses(page);
    await page.evaluate(() => {
      document.addEventListener(
        'animationend',
        (e) => {
          if (
            e.target instanceof Element &&
            e.target.getAttribute('data-haptic-cue') === 'weather-sky' &&
            e.animationName === 'sky-write'
          ) {
            window.drawingFinishedAt = performance.now();
          }
        },
        true
      );
    });
    await page
      .getByRole('button', { name: 'Replay sky drawing', exact: true })
      .tap();
    await expect
      .poll(async () => (await pulses(page)).map((p) => p.pattern))
      .toEqual([6, 5]);
    const timing = await page.evaluate(() => ({
      finish: window.drawingFinishedAt,
      pulses: window.feedbackPulses.filter((p) => p.pattern !== 0),
    }));
    expect(timing.pulses[1].at - timing.pulses[0].at).toBeGreaterThan(1500);
    expect(Math.abs(timing.pulses[1].at - timing.finish)).toBeLessThan(50);
    await resetPulses(page);
    await page.evaluate(() =>
      (document.querySelector('.sky-drawing') as HTMLButtonElement).click()
    );
    await page.waitForTimeout(2200);
    expect(await pulses(page)).toEqual([]);
  });

  test('forecast scrubbing ticks once per changed sample, including a longer drag', async ({
    page,
  }) => {
    await motor(page);
    await weather(page);
    await page.getByRole('tab', { name: 'Hours', exact: true }).tap();
    const plot = page.getByRole('slider', { name: 'Select forecast hour' });
    const box = (await plot.boundingBox())!;
    await resetPulses(page);
    const session = await page.context().newCDPSession(page);
    const point = (fraction: number) => ({
      x: box.x + box.width * fraction,
      y: box.y + box.height / 2,
    });
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [point(0.2)],
    });
    await page.waitForTimeout(90);
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [point(0.205)],
    });
    expect((await pulses(page)).map((p) => p.pattern)).toEqual([4]);
    await page.waitForTimeout(1250);
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [point(0.7)],
    });
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchEnd',
      touchPoints: [],
    });
    expect((await pulses(page)).map((p) => p.pattern)).toEqual([4, 4]);
    await session.detach();
  });

  test('calculator success follows its written tick and errors have a different pattern', async ({
    page,
  }) => {
    await motor(page);
    await page.goto('/calculator/');
    await page.getByLabel('Your calculation', { exact: true }).fill('2+3');
    await page
      .getByRole('button', { name: 'Calculate result', exact: true })
      .tap();
    await expect(page.getByLabel('Result', { exact: true })).toHaveText('5');
    await expect
      .poll(async () => (await pulses(page)).map((p) => p.pattern))
      .toEqual([6, [9, 45, 12]]);
    const feedback = await pulses(page);
    expect(feedback[1].at - feedback[0].at).toBeGreaterThan(350);
    await page.getByLabel('Your calculation', { exact: true }).fill('1/0');
    await resetPulses(page);
    await page
      .getByRole('button', { name: 'Calculate result', exact: true })
      .tap();
    expect((await pulses(page)).map((p) => p.pattern)).toEqual([[14, 45, 14]]);
  });

  test('the shared preference persists and disables native switches and custom pulses', async ({
    page,
  }) => {
    await motor(page);
    await weather(page);
    await page
      .getByRole('button', { name: 'Weather settings', exact: true })
      .tap();
    const setting = page.getByRole('checkbox', {
      name: 'Touch feedback',
      exact: true,
    });
    await expect(setting).toBeChecked();
    await expect(setting).toHaveAttribute('switch', '');
    await setting.tap();
    await expect(setting).not.toBeChecked();
    await expect(setting).not.toHaveAttribute('switch');
    await expect(page.locator('input.ink-switch[switch]')).toHaveCount(0);
    await page.getByRole('button', { name: 'Close dialog' }).tap();
    await resetPulses(page);
    await page.getByRole('tab', { name: 'Hours', exact: true }).tap();
    expect(await pulses(page)).toEqual([]);
    await page.goto('/calculator/');
    await page
      .getByRole('button', { name: 'Calculator settings', exact: true })
      .tap();
    await expect(
      page.getByRole('checkbox', { name: 'Touch feedback', exact: true })
    ).not.toBeChecked();
    await resetPulses(page);
    await page.getByRole('button', { name: 'Close dialog' }).tap();
    await page.getByRole('button', { name: '7', exact: true }).tap();
    expect(await pulses(page)).toEqual([]);
  });

  test('blur cancels a pending drawing cue and reduced motion keeps taps quiet', async ({
    page,
  }) => {
    await motor(page);
    await weather(page);
    await page
      .getByRole('button', { name: 'Replay sky drawing', exact: true })
      .tap();
    await page.evaluate(() => window.dispatchEvent(new Event('blur')));
    await page.waitForTimeout(2200);
    expect((await pulses(page)).map((p) => p.pattern)).toEqual([6]);
    expect(
      await page.evaluate(() =>
        window.feedbackPulses.some((p) => p.pattern === 0)
      )
    ).toBe(true);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await resetPulses(page);
    await page.getByRole('tab', { name: 'Hours', exact: true }).tap();
    expect(await pulses(page)).toEqual([]);
  });

  for (const support of ['missing', 'blocked'] as const) {
    test(`a ${support} vibration API leaves every control usable`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await motor(page, support);
      await page.goto('/calculator/');
      await page.getByRole('button', { name: '7', exact: true }).tap();
      await page
        .getByRole('button', { name: 'Calculate result', exact: true })
        .tap();
      await expect(page.getByLabel('Result', { exact: true })).toHaveText('7');
      await page
        .getByRole('button', { name: 'Calculator settings', exact: true })
        .tap();
      await expect(page.locator('input.ink-switch')).toHaveCount(2);
      await expect(page.locator('input.ink-switch[switch]')).toHaveCount(2);
      expect(errors).toEqual([]);
    });
  }
});
