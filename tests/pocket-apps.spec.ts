import { test, expect, type Page } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

async function nightSky(page: Page) {
  const data = weatherFixture();
  const night = weatherNow + 12 * 3600000;
  data.fetchedAt = night;
  data.current.code = 0;
  data.current.day = false;
  await page.clock.setFixedTime(night);
  await page.route('**/weather/api?*', (r) => r.fulfill({ json: data }));
  await page.route('**/weather/alerts?*', (r) =>
    r.fulfill({
      json: {
        status: 'ok',
        alerts: [
          {
            id: 'fixture',
            event: 'Extreme Heat Warning',
            headline: 'Example warning',
            description: 'Full warning detail.',
            instruction: 'Read the official guidance.',
            url: 'https://www.weather.gov/',
          },
        ],
      },
    })
  );
}

async function fitsScreen(page: Page, selector: string) {
  expect(
    await page.evaluate(() => ({
      width: document.documentElement.scrollWidth <= innerWidth,
      height: document.documentElement.scrollHeight <= innerHeight,
    }))
  ).toEqual({ width: true, height: true });
  const panel = page.locator(selector);
  expect(
    await panel.evaluate((el) => el.scrollHeight <= el.clientHeight + 1)
  ).toBe(true);
  const nav = await page.getByRole('tablist').boundingBox();
  const content = await panel.boundingBox();
  expect(content!.y + content!.height).toBeLessThanOrEqual(nav!.y + 1);
}

test.describe('compact notebook apps', () => {
  test.use({ serviceWorkers: 'block' });
  for (const [width, height] of [
    [320, 568],
    [390, 600],
    [390, 844],
    [540, 720],
    [768, 1024],
    [844, 390],
    [1440, 900],
  ]) {
    test(`primary screens stay inside ${width}x${height}, including an alert`, async ({
      page,
    }, info) => {
      await page.setViewportSize({ width, height });
      await nightSky(page);
      await page.goto('/weather/');
      await expect(page.locator('.current-temperature')).toHaveText('64°');
      await expect(
        page.getByRole('button', { name: /Extreme Heat Warning/ })
      ).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      await fitsScreen(page, '#weather-panel-now');
      const strip = await page.locator('.weather-alert-strip').boundingBox();
      expect(strip!.height).toBeLessThanOrEqual(44);
      await expect(
        page.getByRole('button', { name: 'See rain forecast' })
      ).toBeInViewport();
      await page.screenshot({
        path: info.outputPath(`sky-${width}x${height}.png`),
        animations: 'disabled',
      });
      await expect(page.locator('.forecast-glance-items button')).toHaveCount(
        7
      );
      await page.locator('.forecast-glance-items button').last().click();
      await expect(page.locator('.current-temperature')).toHaveAccessibleName(
        /Daily forecast high/
      );
      await fitsScreen(page, '#weather-panel-now');
      await expect(
        page.locator('.forecast-glance-items button').last()
      ).toBeInViewport({ ratio: 1 });
      await page
        .getByRole('button', { name: 'Back to now', exact: true })
        .click();
      await page.getByRole('button', { name: 'Show hourly forecast' }).click();
      await page.locator('.forecast-glance-items button').last().click();
      await fitsScreen(page, '#weather-panel-now');
      await page
        .getByRole('button', { name: 'Back to now', exact: true })
        .click();
      await page.getByRole('tab', { name: 'Hours', exact: true }).click();
      if (width < 600) {
        await expect(
          page.locator('.forecast-hour-items button').last()
        ).toBeInViewport({ ratio: 1 });
      }
      await page.getByRole('tab', { name: 'Now', exact: true }).click();
      await page.getByRole('button', { name: /Extreme Heat Warning/ }).click();
      await expect(page.getByText('Read the official guidance.')).toBeVisible();
      await page.keyboard.press('Escape');
      await page.goto('/calculator/');
      await expect(page.locator('.calculator-journal')).toHaveAttribute(
        'aria-busy',
        'false'
      );
      await page.emulateMedia({ colorScheme: 'dark' });
      await page
        .getByLabel('Your calculation', { exact: true })
        .fill('24*(3+2)');
      await page
        .getByRole('button', { name: 'Calculate result', exact: true })
        .click();
      await expect(page.getByLabel('Result', { exact: true })).toHaveText(
        '120'
      );
      await page.evaluate(() => document.fonts.ready);
      await fitsScreen(page, '#calc-panel-calculate');
      await expect(
        page.getByRole('button', { name: 'Calculate result', exact: true })
      ).toBeInViewport({ ratio: 1 });
      const key = await page
        .getByRole('button', { name: '7', exact: true })
        .boundingBox();
      expect(key!.height).toBeGreaterThanOrEqual(44);
      await page
        .getByRole('heading', { name: 'Calculator', exact: true })
        .click();
      await page.screenshot({
        path: info.outputPath(`calculator-${width}x${height}.png`),
        animations: 'disabled',
      });
    });
  }

  test('tabs support arrow keys and keep converter and history state', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'aria-busy',
      'false'
    );
    await page.getByRole('tab', { name: 'Calculate', exact: true }).focus();
    await page.keyboard.press('ArrowRight');
    await expect(
      page.getByRole('tab', { name: 'Convert', exact: true })
    ).toBeFocused();
    await expect(
      page.getByRole('tabpanel', { name: 'Calculate', exact: true })
    ).toHaveCount(0);
    await page.getByLabel('Value', { exact: true }).fill('100');
    await page.getByRole('tab', { name: 'History', exact: true }).click();
    await page.getByRole('tab', { name: 'Convert', exact: true }).click();
    await expect(page.getByLabel('Value', { exact: true })).toHaveValue('100');
    await page.getByRole('tab', { name: 'Convert', exact: true }).press('Home');
    await expect(
      page.getByRole('tab', { name: 'Calculate', exact: true })
    ).toHaveAttribute('aria-selected', 'true');
  });

  test('the moon traces separate strokes, fills later, replays, and respects quiet motion', async ({
    page,
  }) => {
    await nightSky(page);
    await page.goto('/weather/');
    await expect(page.locator('.weather-sketch')).toHaveAttribute(
      'data-sky',
      'night'
    );
    const pen = page.locator('.weather-sketch .moon-edge').first();
    await expect
      .poll(() =>
        pen.evaluate((el) => parseFloat(getComputedStyle(el).strokeDashoffset))
      )
      .toBe(0);
    const delays = await page
      .locator('.weather-sketch .moon-edge')
      .evaluateAll((nodes) =>
        nodes.map((el) => parseFloat(getComputedStyle(el).animationDelay))
      );
    expect(delays[1]).toBeGreaterThan(delays[0]);
    expect(delays[2]).toBeGreaterThan(delays[1]);
    const old = await page.locator('.weather-sketch').elementHandle();
    await page.getByRole('button', { name: /^Replay sky drawing/ }).click();
    expect(await old!.evaluate((el) => el.isConnected)).toBe(false);
    await expect
      .poll(() =>
        pen.evaluate((el) => parseFloat(getComputedStyle(el).strokeDashoffset))
      )
      .toBeGreaterThan(0);
    expect(
      await page
        .locator('.weather-sketch .moon-color')
        .evaluate((el) => Number.parseFloat(getComputedStyle(el).fillOpacity))
    ).toBe(0);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-motion',
      'off'
    );
    expect(await pen.evaluate((el) => getComputedStyle(el).animationName)).toBe(
      'none'
    );
    expect(
      await pen.evaluate((el) =>
        parseFloat(getComputedStyle(el).strokeDashoffset)
      )
    ).toBe(0);
    expect(
      await page
        .locator('.weather-sketch .moon-color')
        .evaluate((el) => Number.parseFloat(getComputedStyle(el).fillOpacity))
    ).toBeGreaterThan(0);
  });
});
