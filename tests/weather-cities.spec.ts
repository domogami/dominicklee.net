import { test, expect, type CDPSession, type Page } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';
import { SEATTLE } from '../app/weather/model';

const kyoto = {
  name: 'Kyoto',
  region: 'Kyoto',
  country: 'JP',
  latitude: 35.021,
  longitude: 135.754,
};
const london = {
  name: 'London',
  region: 'England',
  country: 'GB',
  latitude: 51.507,
  longitude: -0.128,
};
const cities = [SEATTLE, kyoto, london];
// Reuse one CDP driver for controlled swipes on each page.
// Playwright closes these sessions with each test's page/context.
const touchDrivers = new WeakMap<Page, Promise<CDPSession>>();
function touchDriver(page: Page) {
  let driver = touchDrivers.get(page);
  if (!driver) {
    driver = page.context().newCDPSession(page);
    touchDrivers.set(page, driver);
  }
  return driver;
}

async function savedCities(page: Page, favoriteCount = 3) {
  await page.clock.setFixedTime(weatherNow);
  await page.addInitScript(
    ({ cities, favoriteCount }) => {
      if (!localStorage.getItem('weather-journal:preferences:v1'))
        localStorage.setItem(
          'weather-journal:preferences:v1',
          JSON.stringify({
            place: cities[0],
            favorites: cities.slice(0, favoriteCount),
            units: 'us',
            theme: 'light',
            motion: true,
          })
        );
    },
    { cities, favoriteCount }
  );
  await page.route('**/weather/api?*', async (route) => {
    const weather = weatherFixture();
    const latitude = Number(
      new URL(route.request().url()).searchParams.get('lat')
    );
    weather.current.temperature =
      Math.abs(latitude - kyoto.latitude) < 0.01
        ? 25
        : Math.abs(latitude - london.latitude) < 0.01
          ? 10
          : 18;
    await route.fulfill({ json: weather });
  });
  await page.route('**/weather/alerts?*', (route) =>
    route.fulfill({ json: { status: 'ok', alerts: [] } })
  );
}

async function swipe(
  page: Page,
  direction: 'left' | 'right' | 'vertical' | 'short',
  surface = '.weather-art-space'
) {
  await page.evaluate(() => document.fonts.ready);
  const box = (await page.locator(surface).boundingBox())!;
  const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  const session = await touchDriver(page);
  // End a controlled swipe with the finger at rest. A raw high-velocity lift
  // creates a native Linux fling that consumes the next tap to stop scrolling.
  await session.send('Input.synthesizeScrollGesture', {
    ...point,
    xDistance:
      direction === 'left'
        ? -110
        : direction === 'right'
          ? 110
          : direction === 'short'
            ? 20
            : 0,
    yDistance: direction === 'vertical' ? -65 : 0,
    preventFling: true,
    gestureSourceType: 'touch',
  });
}

test.describe('saved city switching', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    serviceWorkers: 'block',
  });

  test('swipes and visible controls wrap between saved cities, with distinct forecasts and persistence', async ({
    page,
  }) => {
    await savedCities(page);
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await swipe(page, 'left');
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await expect(page.locator('.current-temperature')).toHaveText('77°');
    await swipe(page, 'left', '.weather-reading');
    await expect(page.locator('.weather-place')).toContainText('London');
    await expect(page.locator('.current-temperature')).toHaveText('50°');
    await swipe(page, 'left');
    await expect(page.locator('.weather-place')).toContainText('Seattle');
    await page.getByRole('button', { name: 'Previous saved city' }).click();
    await expect(page.locator('.weather-place')).toContainText('London');
    await page.getByRole('button', { name: /^Show weather in Kyoto/ }).click();
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await page.reload();
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await expect(
      page.getByRole('button', { name: /^Show weather in Kyoto/ })
    ).toHaveAttribute('aria-pressed', 'true');
    await page.locator('.forecast-glance-items button').last().click();
    await expect(
      page.getByRole('button', { name: 'Back to now', exact: true })
    ).toBeVisible();
    await page.getByRole('button', { name: 'Next saved city' }).click();
    await expect(
      page.getByRole('button', { name: 'Back to now', exact: true })
    ).toHaveCount(0);
    await expect(page.locator('.current-temperature')).toHaveText('50°');
  });

  test('a late response from an earlier city never replaces the city selected afterwards', async ({
    page,
  }) => {
    await savedCities(page);
    const delayed = weatherFixture();
    delayed.current.temperature = 10;
    await page.addInitScript(
      ({ delayed, latitude }) => {
        const original = window.fetch.bind(window);
        window.fetch = (input, init) => {
          const url = new URL(
            typeof input === 'string'
              ? input
              : input instanceof URL
                ? input.href
                : input.url,
            location.href
          );
          if (
            url.pathname === '/weather/api' &&
            url.searchParams.get('lat') === latitude.toFixed(3)
          ) {
            // Deliberately ignore cancellation to check the hook's stale-response guard.
            return new Promise((resolve) => {
              (window as any).deliverLateCity = () =>
                resolve(
                  new Response(JSON.stringify(delayed), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                  })
                );
            });
          }
          return original(input, init);
        };
      },
      { delayed, latitude: london.latitude }
    );
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await page.getByRole('button', { name: 'Previous saved city' }).click();
    await expect
      .poll(() => page.evaluate(() => typeof (window as any).deliverLateCity))
      .toBe('function');
    await page.getByRole('button', { name: 'Next saved city' }).click();
    await expect(page.locator('.weather-place')).toContainText('Seattle');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await page.evaluate(async () => {
      (window as any).deliverLateCity();
      await new Promise((resolve) => setTimeout(resolve, 50));
    });
    await expect(page.locator('.weather-place')).toContainText('Seattle');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
  });

  test('short and vertical gestures do not change cities; saving and removing cities keeps the deck usable', async ({
    page,
  }) => {
    await savedCities(page, 1);
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await expect(
      page.getByRole('button', { name: 'Next saved city' })
    ).toBeDisabled();
    await swipe(page, 'short');
    await swipe(page, 'vertical');
    await expect(page.locator('.weather-place')).toContainText('Seattle');
    await page.route('**/weather/search?*', (route) =>
      route.fulfill({ json: { results: [kyoto] } })
    );
    await page.locator('.weather-place').click();
    await page
      .getByRole('searchbox', { name: 'City or postal code' })
      .fill('Kyoto');
    await page.getByRole('button', { name: 'Kyoto Kyoto, JP' }).click();
    await page
      .getByRole('button', { name: 'Save Kyoto to saved cities' })
      .click();
    await expect(page.locator('.weather-city-dots button')).toHaveCount(2);
    await swipe(page, 'right');
    await expect(page.locator('.weather-place')).toContainText('Seattle');
    await page
      .getByRole('button', { name: 'Remove Seattle from saved cities' })
      .click();
    await expect(page.locator('.weather-city-dots button')).toHaveCount(1);
    await swipe(page, 'left');
    await expect(page.locator('.weather-place')).toContainText('Kyoto');
    await page.reload();
    await expect(page.locator('.weather-city-dots button')).toHaveCount(1);
  });

  for (const delayedTargets of [false, true]) {
    test(`the iPhone native tap layer stays inside the swipe surface and a fresh tap replays once${delayedTargets ? ' before the new touch layer renders' : ''}`, async ({
      page,
    }) => {
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
          (event) => {
            if (
              event.target instanceof Element &&
              event.target.closest('button[aria-label^="Replay sky drawing"]')
            )
              (window as any).skyClicks = ((window as any).skyClicks || 0) + 1;
          },
          true
        );
      });
      await savedCities(page);
      await page.goto('/weather/');
      await expect(page.locator('.current-temperature')).toHaveText('64°');
      await expect(
        page.locator('.weather-art-space .native-tap-target')
      ).toBeAttached();
      await page.evaluate(() => document.fonts.ready);
      // Keep animation-frame work paused while the next city loads. Its SVG
      // remains tappable before the progressive native touch layer is measured.
      if (delayedTargets) await page.clock.pauseAt(weatherNow + 1000);
      await swipe(page, 'left');
      await expect(page.locator('.weather-place')).toContainText('Kyoto');
      await expect(page.locator('.current-temperature')).toHaveText('77°');
      expect(await page.evaluate(() => (window as any).skyClicks || 0)).toBe(0);
      const replay = page.getByRole('button', { name: /^Replay sky drawing/ });
      if (!delayedTargets)
        await expect(
          page.locator('.weather-art-space .native-tap-target')
        ).toBeAttached();
      const box = (await replay.boundingBox())!;
      const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
      await expect
        .poll(() =>
          page.evaluate(({ x, y }) => {
            const hit = document.elementFromPoint(x, y);
            return hit instanceof SVGElement
              ? 'drawing'
              : hit?.getAttribute('data-native-tap-label');
          }, point)
        )
        .toBe(delayedTargets ? 'drawing' : 'Replay sky drawing');
      const drawing = (await page.locator('.weather-sketch').elementHandle())!;
      // Use Playwright's tap driver: Chromium's synthetic gesture API emits
      // touch events without the compatibility click on Linux.
      await page.touchscreen.tap(point.x, point.y);
      await expect
        .poll(() => page.evaluate(() => (window as any).skyClicks || 0))
        .toBe(1);
      // Check the app's replay as well as event delivery: a swallowed click must
      // not pass just because the document's capture listener counted it.
      await expect
        .poll(() => drawing.evaluate((el) => el.isConnected))
        .toBe(false);
      await drawing.dispose();
      if (delayedTargets) {
        await page.clock.runFor(32);
        await expect(
          page.locator('.weather-art-space .native-tap-target')
        ).toBeAttached();
      }
    });
  }

  for (const viewport of [
    { width: 320, height: 568 },
    { width: 390, height: 600 },
    { width: 390, height: 600, safe: true },
    { width: 844, height: 390 },
  ]) {
    test(`saved cities and a forecast preview fit ${viewport.width}x${viewport.height}${'safe' in viewport ? ' with Home Screen insets' : ''}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await savedCities(page);
      await page.route('**/weather/alerts?*', (route) =>
        route.fulfill({
          json: {
            status: 'ok',
            alerts: [
              { event: 'Example weather warning', description: 'Fixture' },
            ],
          },
        })
      );
      await page.goto('/weather/');
      await expect(page.locator('.current-temperature')).toHaveText('64°');
      await page.evaluate(() => document.fonts.ready);
      if ('safe' in viewport) {
        await page.addStyleTag({
          content:
            '.pocket-frame{padding-top:44px}.pocket-nav{padding-bottom:34px}',
        });
      }
      await page.locator('.forecast-glance-items button').last().click();
      const layout = await page
        .locator('#weather-panel-now')
        .evaluate((el) => ({
          height: el.clientHeight,
          content: el.scrollHeight,
          parts: Array.from(el.querySelector('.weather-now')!.children).map(
            (part) => ({
              name: part.className,
              height: part.getBoundingClientRect().height,
            })
          ),
        }));
      expect(layout.content, JSON.stringify(layout)).toBeLessThanOrEqual(
        layout.height + 1
      );
      await expect(
        page.getByRole('tab', { name: 'Now', exact: true })
      ).toBeInViewport({ ratio: 1 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth
        )
      ).toBe(true);
    });
  }
});
