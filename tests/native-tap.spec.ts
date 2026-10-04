import { test, expect, type Page, type Locator } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

// Emulates feature detection and touch targeting, not an iPhone haptic motor.
async function safariSwitches(page: Page) {
  await page.addInitScript(() => {
    Object.defineProperty(HTMLInputElement.prototype, 'switch', {
      configurable: true,
      get() {
        return this.hasAttribute('switch');
      },
    });
    Object.defineProperty(navigator, 'vibrate', {
      configurable: true,
      value: undefined,
    });
    document.addEventListener(
      'click',
      (e) => {
        if (
          e.target instanceof HTMLInputElement &&
          e.target.matches('.native-tap-target')
        )
          e.target.dataset.trustedTap = String(e.isTrusted);
      },
      true
    );
  });
}

async function tap(page: Page, control: Locator) {
  await expect(control).toBeVisible();
  const box = (await control.boundingBox())!;
  await expect
    .poll(() =>
      page.evaluate(
        ({ x, y }) =>
          document
            .elementFromPoint(x, y)
            ?.classList.contains('native-tap-target'),
        { x: box.x + box.width / 2, y: box.y + box.height / 2 }
      )
    )
    .toBe(true);
  await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
}

test.describe('Safari direct tap targets', () => {
  test.use({
    viewport: { width: 390, height: 600 },
    hasTouch: true,
    isMobile: true,
    serviceWorkers: 'block',
  });

  test('keypad taps activate once, preserve caret edits, and keep real button keyboard semantics', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await safariSwitches(page);
    await page.goto('/calculator/');
    const field = page.getByLabel('Your calculation', { exact: true });
    for (const name of ['8', '5', '8'])
      await tap(page, page.getByRole('button', { name, exact: true }));
    await expect(field).toHaveValue('858');
    const proxy = page.locator('.native-tap-target[data-native-tap-label="8"]');
    await expect(proxy).toHaveAttribute('data-trusted-tap', 'true');
    await expect(proxy).toHaveAttribute('aria-hidden', 'true');
    await expect(proxy).toHaveAttribute('tabindex', '-1');
    expect(await proxy.evaluate((el) => getComputedStyle(el).appearance)).toBe(
      'auto'
    );
    expect(await proxy.evaluate((el) => getComputedStyle(el).opacity)).toBe(
      '0'
    );
    await field.fill('12+34');
    await field.press('ArrowLeft');
    await field.press('ArrowLeft');
    await field.press('ArrowLeft');
    await tap(page, page.getByRole('button', { name: '9', exact: true }));
    await expect(field).toHaveValue('129+34');
    await expect(field).toBeFocused();
    await tap(
      page,
      page.getByRole('button', { name: 'Clear calculation', exact: true })
    );
    await page.getByRole('button', { name: '7', exact: true }).focus();
    await page.keyboard.press('Enter');
    await expect(field).toHaveValue('7');
    await tap(
      page,
      page.getByRole('button', { name: 'Calculate result', exact: true })
    );
    await expect(page.getByLabel('Result', { exact: true })).toHaveText('7');
    await tap(page, page.getByRole('tab', { name: 'History', exact: true }));
    await expect(page.locator('.calc-history ol li')).toHaveCount(1);
    expect(errors).toEqual([]);
  });

  test('dialog targets stay in the top layer, preference disables them, and narrow resizing follows buttons', async ({
    page,
  }) => {
    await safariSwitches(page);
    await page.goto('/calculator/');
    const settings = page.getByRole('button', {
      name: 'Calculator settings',
      exact: true,
    });
    await tap(page, settings);
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.locator('body > .native-tap-layer')).toHaveCount(0);
    await expect(
      page.locator('dialog .native-tap-target').first()
    ).toBeAttached();
    await tap(page, page.getByRole('button', { name: 'Night', exact: true }));
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'data-theme',
      'dark'
    );
    const preference = page.getByRole('checkbox', {
      name: 'Touch feedback',
      exact: true,
    });
    await preference.tap();
    await expect(page.locator('.native-tap-target')).toHaveCount(0);
    await preference.tap();
    await tap(
      page,
      page.getByRole('button', { name: 'Close dialog', exact: true })
    );
    await expect(settings).toBeFocused();
    await page.setViewportSize({ width: 320, height: 568 });
    await tap(page, page.getByRole('button', { name: '8', exact: true }));
    await expect(
      page.getByLabel('Your calculation', { exact: true })
    ).toHaveValue('8');
    const source = (await page
      .getByRole('button', { name: '8', exact: true })
      .boundingBox())!;
    const proxy = (await page
      .locator('.native-tap-target[data-native-tap-label="8"]')
      .boundingBox())!;
    expect(Math.abs(source.x - proxy.x)).toBeLessThan(1);
    expect(Math.abs(source.width - proxy.width)).toBeLessThan(1);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(page.locator('.native-tap-target')).toHaveCount(0);
  });

  test('weather previews and scrolling panels retain correct targets and the graph keeps its drag gesture', async ({
    page,
  }) => {
    await safariSwitches(page);
    await page.clock.setFixedTime(weatherNow);
    await page.route('**/weather/api?*', (r) =>
      r.fulfill({ json: weatherFixture() })
    );
    await page.route('**/weather/alerts?*', (r) =>
      r.fulfill({ json: { status: 'ok', alerts: [] } })
    );
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await tap(page, page.locator('.forecast-glance-items button').last());
    await expect(page.locator('.current-temperature')).toHaveAccessibleName(
      /Daily forecast high/
    );
    await tap(page, page.getByRole('tab', { name: 'Hours', exact: true }));
    const graph = page.getByRole('slider', { name: 'Select forecast hour' });
    expect(
      await graph.evaluate((el) => {
        const box = el.getBoundingClientRect();
        return el.contains(
          document.elementFromPoint(
            box.x + box.width / 2,
            box.y + box.height / 2
          )
        );
      })
    ).toBe(true);
    await tap(page, page.getByRole('tab', { name: 'Details', exact: true }));
    await page.locator('#weather-panel-details').evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    await tap(page, page.getByRole('tab', { name: 'Now', exact: true }));
    await expect(
      page.getByRole('tab', { name: 'Now', exact: true })
    ).toHaveAttribute('aria-selected', 'true');
    // Ordinary links retain Safari's link preview, context menu and navigation.
    await expect(
      page.locator(
        '.native-tap-target[data-native-tap-label="Back to Dom’s notebook"]'
      )
    ).toHaveCount(0);
  });

  test('a swipe beginning on a native target scrolls the forecast panel instead of activating its button', async ({
    page,
  }) => {
    await safariSwitches(page);
    await page.clock.setFixedTime(weatherNow);
    await page.route('**/weather/api?*', (r) =>
      r.fulfill({ json: weatherFixture() })
    );
    await page.route('**/weather/alerts?*', (r) =>
      r.fulfill({ json: { status: 'ok', alerts: [] } })
    );
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await tap(page, page.getByRole('tab', { name: 'Week', exact: true }));
    const panel = page.locator('#weather-panel-week');
    const summary = panel.locator('summary').first();
    await expect(panel.locator('.native-tap-target').first()).toBeAttached();
    const box = (await summary.boundingBox())!;
    const session = await page.context().newCDPSession(page);
    const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [point],
    });
    for (const dy of [15, 40, 70]) {
      await session.send('Input.dispatchTouchEvent', {
        type: 'touchMove',
        touchPoints: [{ x: point.x, y: point.y - dy }],
      });
      await page.waitForTimeout(30);
    }
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchEnd',
      touchPoints: [],
    });
    await expect
      .poll(() => panel.evaluate((el) => el.scrollTop))
      .toBeGreaterThan(0);
    await expect(summary.locator('..')).not.toHaveAttribute('open');
    await session.detach();
  });

  test('notebook buttons use the same tap path while its photograph retains swipe handling', async ({
    page,
  }) => {
    await safariSwitches(page);
    await page.goto('/');
    const menu = page.getByRole('button', { name: 'Open menu', exact: true });
    await tap(page, menu);
    await expect(
      page.getByRole('button', { name: 'Close menu', exact: true })
    ).toHaveAttribute('aria-expanded', 'true');
    await tap(
      page,
      page.getByRole('button', { name: 'Close menu', exact: true })
    );
    const next = page.getByRole('button', {
      name: 'Next SNAP-75 photo',
      exact: true,
    });
    await next.scrollIntoViewIfNeeded();
    await tap(page, next);
    await expect(page.locator('.photo-counter')).toContainText('Photo 2 of 2');
    await expect(
      page.locator(
        '.native-tap-target[data-native-tap-label="Swap SNAP-75 keyboard photos"]'
      )
    ).toHaveCount(0);
  });
});
