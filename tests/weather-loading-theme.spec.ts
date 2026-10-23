import { test, expect, type Page } from '@playwright/test';
import { placeKey, SEATTLE, type Weather } from '../app/weather/model';
import { weatherFixture, weatherNow } from './weather-fixture';

const night = Date.parse('2026-10-04T06:00:00Z');
const kyoto = {
  name: 'Kyoto',
  latitude: 35.021,
  longitude: 135.754,
  country: 'JP',
};

async function seed(
  page: Page,
  theme: 'auto' | 'dark' | 'light',
  cached: Weather | null = null
) {
  await page.addInitScript(
    ({ theme, cached, seattle, kyoto, key }) => {
      localStorage.setItem(
        'weather-journal:preferences:v1',
        JSON.stringify({
          place: seattle,
          favorites: [seattle, kyoto],
          theme,
          units: 'us',
          motion: false,
        })
      );
      localStorage.setItem(
        'weather-journal:forecasts:v1',
        JSON.stringify(cached ? [{ key, weather: cached }] : [])
      );
    },
    { theme, cached, seattle: SEATTLE, kyoto, key: placeKey(SEATTLE) }
  );
  await page.route('**/weather/alerts?*', (route) =>
    route.fulfill({ json: { status: 'ok', alerts: [] } })
  );
}

async function expectPaper(
  page: Page,
  theme: 'dark' | 'light',
  hydrated = true
) {
  const color = theme === 'dark' ? 'rgb(43, 48, 52)' : 'rgb(239, 231, 215)';
  await expect(page.locator('html')).toHaveAttribute(
    'data-weather-theme',
    theme
  );
  await expect(page.locator('html')).toHaveCSS('background-color', color);
  await expect(page.locator('body')).toHaveCSS('background-color', color);
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    'content',
    !hydrated || theme === 'dark' ? '#2b3034' : '#efe7d7'
  );
}

test.describe('weather loading appearance', () => {
  test.use({
    serviceWorkers: 'block',
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    timezoneId: 'America/Los_Angeles',
    colorScheme: 'light',
  });

  for (const scenario of [
    {
      name: 'saved Night mode',
      theme: 'dark',
      time: weatherNow,
      cached: false,
      expected: 'dark',
    },
    {
      name: 'saved Day mode at night',
      theme: 'light',
      time: night,
      cached: false,
      expected: 'light',
    },
    {
      name: 'auto at night without a forecast',
      theme: 'auto',
      time: night,
      cached: false,
      expected: 'dark',
    },
    {
      name: 'auto in daylight without a forecast',
      theme: 'auto',
      time: weatherNow,
      cached: false,
      expected: 'light',
    },
    {
      name: 'cached sunset in the selected city',
      theme: 'auto',
      time: night,
      cached: true,
      expected: 'dark',
    },
  ] as const) {
    test.describe(scenario.name, () => {
      // The cached-sunset case deliberately uses a device in a daylight zone.
      test.use({
        timezoneId: scenario.cached ? 'Asia/Tokyo' : 'America/Los_Angeles',
      });
      test('paints the correct loading canvas before the app starts', async ({
        page,
      }) => {
        await page.clock.setFixedTime(scenario.time);
        await seed(
          page,
          scenario.theme,
          scenario.cached ? weatherFixture() : null
        );
        await page.route('**/assets/**', (route) =>
          scenario.cached &&
          new URL(route.request().url()).pathname.endsWith('.css')
            ? route.continue()
            : route.abort()
        );
        await page.goto('/weather/');
        await expectPaper(page, scenario.expected, false);
        // No client bundle ran: the head script alone set the correct canvas.
        await expect(page.locator('.weather-journal')).not.toHaveAttribute(
          'data-theme'
        );
        if (scenario.cached)
          await expect(page.locator('.weather-journal')).toHaveCSS(
            'background-color',
            'rgb(43, 48, 52)'
          );
      });
    });
  }

  for (const preference of ['auto', 'light'] as const) {
    test(`a slow or failed first forecast retains ${preference} appearance through hydration`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (
          message.type() === 'error' &&
          /hydrat|React error/i.test(message.text())
        )
          errors.push(message.text());
      });
      await page.clock.setFixedTime(night);
      await seed(page, preference);
      const expected = preference === 'auto' ? 'dark' : 'light';
      let fail!: () => void;
      const waiting = new Promise<void>((resolve) => {
        fail = resolve;
      });
      await page.route('**/weather/api?*', async (route) => {
        await waiting;
        await route.fulfill({ status: 503, body: 'Temporarily unavailable' });
      });
      await page.goto('/weather/');
      await expect(
        page.getByRole('heading', { name: 'Loading the sky…' })
      ).toBeVisible();
      await expect(page.locator('.weather-journal')).toHaveAttribute(
        'data-theme',
        expected
      );
      await expectPaper(page, expected);
      await expect(page.locator('.weather-journal')).toHaveCSS(
        'background-color',
        expected === 'dark' ? 'rgb(43, 48, 52)' : 'rgb(239, 231, 215)'
      );
      fail();
      await expect(
        page.getByRole('heading', { name: 'No forecast yet' })
      ).toBeVisible();
      await expectPaper(page, expected);
      expect(errors).toEqual([]);
    });
  }

  test('switching cities retains the night canvas until the new daylight forecast arrives', async ({
    page,
  }) => {
    await page.clock.setFixedTime(night);
    await seed(page, 'auto', weatherFixture());
    let release!: () => void;
    const waiting = new Promise<void>((resolve) => {
      release = resolve;
    });
    await page.route('**/weather/api?*', async (route) => {
      const weather = weatherFixture();
      if (new URL(route.request().url()).searchParams.get('lat') === '35.021') {
        await waiting;
        weather.timezone = 'Asia/Tokyo';
        weather.days = weather.days.map((day) => ({
          ...day,
          sunrise: 0,
          sunset: 0,
        }));
        weather.hours = weather.hours.map((hour) => ({ ...hour, day: true }));
      }
      await route.fulfill({ json: weather });
    });
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toBeVisible();
    await expectPaper(page, 'dark');
    await page.evaluate(() => document.fonts.ready);
    const next = (await page
      .getByRole('button', { name: 'Next saved city' })
      .boundingBox())!;
    await page.touchscreen.tap(
      next.x + next.width / 2,
      next.y + next.height / 2
    );
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await expect(
      page.getByRole('heading', { name: 'Loading the sky…' })
    ).toBeVisible();
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-theme',
      'dark'
    );
    await expectPaper(page, 'dark');
    release();
    await expect(page.locator('.current-temperature')).toBeVisible();
    await expect(page.locator('.weather-journal')).toHaveAttribute(
      'data-theme',
      'light'
    );
    await expectPaper(page, 'light');
    await expect(page.locator('.weather-journal')).toHaveCSS(
      'background-color',
      'rgb(239, 231, 215)'
    );
  });

  test('blocked storage still opens on dark paper at night', async ({
    page,
  }) => {
    await page.clock.setFixedTime(night);
    await page.addInitScript(() => {
      Storage.prototype.getItem = () => {
        throw new Error('Storage unavailable');
      };
    });
    await page.route('**/assets/**', (route) => route.abort());
    await page.goto('/weather/');
    await expectPaper(page, 'dark');
  });
});
