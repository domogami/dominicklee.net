import { test, expect, type Page } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';
import type { Weather } from '../app/weather/model';

async function mockWeather(page: Page, data: Weather = weatherFixture()) {
  await page.clock.setFixedTime(weatherNow);
  await page.route('**/weather/api?*', (route) =>
    route.fulfill({ json: data })
  );
  await page.route('**/weather/alerts?*', (route) =>
    route.fulfill({ json: { status: 'ok', alerts: [] } })
  );
}

test.describe('weather journal', () => {
  test.use({ serviceWorkers: 'block' });

  test('forecast, unit conversion, unfolding, and sky play work without runtime errors', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await mockWeather(page);
    await page.goto('/weather');
    await expect(page).toHaveURL(/\/weather\/$/);
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-theme',
      'light'
    );
    await page.getByRole('button', { name: 'Switch to Celsius' }).click();
    await expect(page.locator('.current-temperature')).toHaveText('18°');
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await page
      .getByRole('button', { name: 'Rain chance', exact: true })
      .click();
    await expect(
      page.locator('.forecast-hour-items strong').first()
    ).toHaveText('80%');
    await page.locator('.forecast-hour-items button').nth(2).click();
    await expect(
      page.getByRole('slider', { name: 'Select forecast hour' })
    ).toHaveAttribute('aria-valuenow', '2');
    await page.getByRole('button', { name: 'See this sky' }).click();
    await expect(
      page.getByRole('button', { name: 'Back to now' })
    ).toBeVisible();
    await page.getByRole('button', { name: 'Back to now' }).click();
    await page.getByRole('tab', { name: 'Week', exact: true }).click();
    await expect(page.locator('.forecast-day')).toHaveCount(7);
    await page.getByRole('button', { name: 'Unfold the next 3 days' }).click();
    await expect(page.locator('.forecast-day')).toHaveCount(10);
    await page.locator('.forecast-day summary').first().click();
    await expect(page.locator('.day-detail').first()).toBeVisible();
    await page.getByRole('tab', { name: 'Now', exact: true }).click();
    await page.getByRole('button', { name: /^Replay sky drawing/ }).click();
    await expect(page.locator('.weather-sketch')).toBeVisible();
    await page.reload();
    await expect(page.locator('.current-temperature')).toHaveText('18°');
    expect(errors).toEqual([]);
  });

  test('sun-based theme, override, dialog focus, and reduced motion', async ({
    page,
  }, testInfo) => {
    await mockWeather(page);
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toBeVisible();
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-theme',
      'light'
    );
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-motion',
      'off'
    );
    expect(
      await page
        .locator('.sketched-rain')
        .first()
        .evaluate((el) => getComputedStyle(el).animationName)
    ).toBe('none');
    const settings = page.getByRole('button', { name: 'Weather settings' });
    await settings.click();
    await page.getByRole('button', { name: 'Night', exact: true }).click();
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-theme',
      'dark'
    );
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
      'content',
      '#2b3034'
    );
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(settings).toBeFocused();
    await page.screenshot({
      path: testInfo.outputPath('weather-night.png'),
      animations: 'disabled',
    });
    await page.reload();
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-theme',
      'dark'
    );
  });

  test('search, bookmarked places, and denied location remain usable', async ({
    page,
  }) => {
    await mockWeather(page);
    await page.addInitScript(() => {
      navigator.geolocation.getCurrentPosition = (_success, failure) =>
        failure?.({ code: 1 } as GeolocationPositionError);
    });
    await page.route('**/weather/search?*', (route) =>
      route.fulfill({
        json: {
          results: [
            {
              name: 'Kyoto',
              region: 'Kyoto',
              country: 'JP',
              latitude: 35.021,
              longitude: 135.754,
            },
          ],
        },
      })
    );
    await page.goto('/weather/');
    await page.locator('.weather-place').click();
    await page
      .getByRole('button', { name: 'Use my location', exact: true })
      .click();
    await expect(
      page.getByRole('status').filter({ hasText: 'Location permission is off' })
    ).toBeVisible();
    await page
      .getByRole('searchbox', { name: 'City or postal code' })
      .fill('Kyoto');
    await page.getByRole('button', { name: 'Kyoto Kyoto, JP' }).click();
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await page.locator('.weather-place').click();
    await page.getByRole('button', { name: 'Save this place' }).click();
    await page.reload();
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await page.locator('.weather-place').click();
    await expect(
      page.getByRole('button', { name: 'Remove saved place' })
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.getByRole('heading', { name: 'Bookmarked places' })
    ).toBeVisible();
  });

  test('uses granted device location only after a tap', async ({
    page,
    context,
  }) => {
    await mockWeather(page);
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({ latitude: 40.7128, longitude: -74.006 });
    await page.goto('/weather/');
    await expect(page.locator('.weather-place')).toContainText('Seattle');
    const request = page.waitForRequest((r) =>
      r.url().includes('/weather/api?lat=40.713&lon=-74.006')
    );
    await page.locator('.weather-place').click();
    await page
      .getByRole('button', { name: 'Use my location', exact: true })
      .click();
    await request;
    await expect(page.locator('.weather-place')).toContainText('Near you');
    await expect(
      page
        .getByRole('status')
        .filter({ hasText: 'Using your current location' })
    ).toBeVisible();
  });

  test('does not present missing values as zero or provider failure as a clear forecast', async ({
    page,
  }) => {
    const data = weatherFixture();
    data.air = null;
    data.rain = data.rain.map((r) => ({ ...r, amount: null }));
    data.current.humidity = null;
    data.current.code = 3;
    await mockWeather(page, data);
    await page.goto('/weather/');
    await expect(page.locator('.current-condition')).toHaveText('Cloudy');
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await page.getByRole('button', { name: 'Rain timing' }).click();
    await expect(
      page.getByRole('heading', { name: 'Rain timing is unavailable' })
    ).toBeVisible();
    await page.keyboard.press('Escape');
    await page.getByRole('tab', { name: 'Details', exact: true }).click();
    await expect(
      page
        .locator('.metric')
        .filter({ hasText: 'Air quality' })
        .locator('strong')
    ).toHaveText('—');
    await expect(
      page.locator('.metric').filter({ hasText: 'Humidity' }).locator('strong')
    ).toHaveText('—');
    await page.route('**/weather/api?*', (route) =>
      route.fulfill({ status: 503, json: { error: 'Unavailable' } })
    );
    await page.getByRole('button', { name: 'Refresh', exact: true }).click();
    await expect(
      page
        .getByRole('status')
        .filter({ hasText: 'Showing your saved forecast' })
    ).toBeVisible();
    await expect(page.locator('.weather-connection')).toContainText(
      'Showing your saved forecast'
    );
    await page.addInitScript(() => {
      localStorage.removeItem('weather-journal:forecasts:v1');
    });
    await page.reload();
    await expect(
      page.getByRole('heading', { name: 'No forecast yet' })
    ).toBeVisible();
    await expect(page.locator('.current-temperature')).toHaveCount(0);
  });

  test('official alerts can be unfolded without presenting missing coverage as no alerts', async ({
    page,
  }) => {
    await mockWeather(page);
    await page.route('**/weather/alerts?*', (route) =>
      route.fulfill({
        json: {
          status: 'ok',
          alerts: [
            {
              id: 'test-only',
              event: 'Wind Advisory',
              headline: 'Test advisory',
              severity: 'Moderate',
              description: 'A fixture for the alert disclosure.',
              instruction: 'Read the official advisory.',
              expires: '2026-10-04T19:00:00Z',
              url: 'https://www.weather.gov/',
            },
          ],
        },
      })
    );
    await page.goto('/weather/');
    await page.getByText('Wind Advisory', { exact: true }).click();
    await expect(page.getByText('Read the official advisory.')).toBeVisible();
    await page.route('**/weather/alerts?*', (route) =>
      route.fulfill({ json: { status: 'unavailable', alerts: [] } })
    );
    await page.reload();
    await page.getByRole('tab', { name: 'Details', exact: true }).click();
    await page.getByText('Sources & privacy', { exact: false }).first().click();
    await expect(page.locator('.journal-colophon')).toContainText(
      'Alert coverage is unavailable'
    );
    await expect(page.locator('.journal-colophon')).not.toContainText(
      'No active alerts'
    );
  });

  for (const width of [320, 390, 540, 768, 1024, 1440]) {
    test(`fits a ${width}px phone, tablet, or desktop viewport`, async ({
      page,
    }, testInfo) => {
      await mockWeather(page);
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/weather/');
      await expect(page.locator('.current-temperature')).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      if ([390, 768, 1440].includes(width)) {
        await page.screenshot({
          path: testInfo.outputPath(`weather-${width}.png`),
          animations: 'disabled',
          fullPage: width === 768,
        });
      }
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth
        )
      ).toBe(true);
      for (const [tab, target] of [
        ['Hours', '.hourly-section .forecast-chart'],
        ['Week', '.week-section'],
        ['Details', '.metric-grid'],
      ]) {
        await page.getByRole('tab', { name: tab, exact: true }).click();
        const box = await page.locator(target).boundingBox();
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
      }
      await page.getByRole('button', { name: 'Weather settings' }).click();
      const dialog = await page.getByRole('dialog').boundingBox();
      expect(dialog.x).toBeGreaterThanOrEqual(0);
      expect(dialog.x + dialog.width).toBeLessThanOrEqual(width + 1);
      await expect(
        page.getByRole('button', { name: 'Close dialog' })
      ).toBeVisible();
    });
  }
  test('phone landscape keeps the settings sheet scrollable', async ({
    page,
  }) => {
    await mockWeather(page);
    await page.setViewportSize({ width: 844, height: 390 });
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
    await page.getByRole('button', { name: 'Weather settings' }).click();
    const dialog = await page.getByRole('dialog').boundingBox();
    expect(dialog.y).toBeGreaterThanOrEqual(0);
    expect(dialog.y + dialog.height).toBeLessThanOrEqual(391);
    await page
      .getByRole('heading', { name: 'A little sky on your Home Screen' })
      .scrollIntoViewIfNeeded();
    await expect(
      page.getByRole('heading', { name: 'A little sky on your Home Screen' })
    ).toBeVisible();
  });
});

test('installed shell reopens offline with a dated saved forecast', async ({
  page,
  context,
}) => {
  // Keep native Resource Timing: Playwright's clock stubs its entries.
  const data = weatherFixture();
  data.fetchedAt = Date.now();
  await page.route('**/weather/api?*', (route) =>
    route.fulfill({ json: data })
  );
  await page.route('**/weather/alerts?*', (route) =>
    route.fulfill({ json: { status: 'ok', alerts: [] } })
  );
  await page.goto('/weather/');
  await expect(page.locator('.current-temperature')).toHaveText('64°');
  await expect
    .poll(() =>
      page.evaluate(async () => {
        const reg = await navigator.serviceWorker.getRegistration('/weather/');
        const cache = await caches.open('dom-weather-shell-v1');
        const urls = (await cache.keys()).map((r) => r.url);
        return {
          active: !!reg?.active,
          entry: urls.some((u) => u.includes('/assets/entry.client-')),
          route: urls.some(
            (u) => u.includes('/assets/weather-') && u.endsWith('.js')
          ),
          fonts: urls.some((u) => u.includes('/fonts/')),
          resources: performance.getEntriesByType('resource').length,
          urls,
        };
      })
    )
    .toMatchObject({ active: true, entry: true, route: true, fonts: true });
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator('.current-temperature')).toHaveText('64°');
  await expect(
    page.getByRole('status').filter({ hasText: 'Offline · saved forecast' })
  ).toBeVisible();
  await page.getByRole('tab', { name: 'Details', exact: true }).click();
  await expect(page.locator('.forecast-status')).toContainText(
    'Forecast fetched'
  );
  await context.setOffline(false);
});

test('manifest assets, scoped worker, redirects, and malformed API requests', async ({
  request,
}) => {
  const manifest = await (
    await request.get('/weather/manifest.webmanifest')
  ).json();
  expect(manifest.scope).toBe('/weather/');
  expect(manifest.start_url).toBe('/weather/');
  expect(manifest.display).toBe('standalone');
  for (const icon of manifest.icons)
    expect((await request.get(icon.src)).ok()).toBe(true);
  expect((await request.get('/weather/apple-touch-icon.png')).ok()).toBe(true);
  for (const coords of [
    '',
    '?lat=&lon=0',
    '?lat=91&lon=0',
    '?lat=0&lon=181',
    '?lat=NaN&lon=0',
  ]) {
    expect((await request.get(`/weather/api${coords}`)).status()).toBe(400);
  }
  expect(await (await request.get('/weather/search?q=a')).json()).toEqual({
    results: [],
  });
});
