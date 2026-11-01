import { test, expect } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

// Real screenshots exposed assumptions in the former CSS viewport rewriting.
// Check safe-area bounds and native document scroll without altering CSS units.
test.describe('Home Screen safe-area architecture', () => {
  test.use({ serviceWorkers: 'block', reducedMotion: 'reduce' });
  for (const v of [
    { width: 393, height: 852, top: 59, bottom: 34 },
    { width: 390, height: 600, top: 44, bottom: 34 },
    { width: 852, height: 393, top: 0, bottom: 21 },
  ])
    for (const app of ['weather', 'calculator']) {
      test(`${app} keeps visible controls and document flow at ${v.width}x${v.height}`, async ({
        page,
      }, info) => {
        await page.setViewportSize(v);
        await page.clock.setFixedTime(weatherNow);
        await page.route('**/weather/api?*', (r) =>
          r.fulfill({ json: weatherFixture() })
        );
        await page.route('**/weather/alerts?*', (r) =>
          r.fulfill({ json: { status: 'ok', alerts: [] } })
        );
        await page.goto(`/${app}/`);
        if (app === 'weather')
          await expect(page.locator('.current-temperature')).toHaveText('64°');
        else
          await expect(page.locator('.calculator-journal')).toHaveAttribute(
            'aria-busy',
            'false'
          );
        await page.locator('.pocket-app').evaluate((el, v) => {
          (el as HTMLElement).style.setProperty(
            '--pocket-safe-top',
            `${v.top}px`
          );
          (el as HTMLElement).style.setProperty(
            '--pocket-safe-bottom',
            `${v.bottom}px`
          );
        }, v);
        await page.evaluate(async () => {
          await document.fonts.ready;
          await new Promise(requestAnimationFrame);
          await new Promise(requestAnimationFrame);
        });
        const nav = page.locator('.pocket-nav');
        const viewportBottom = () =>
          page.evaluate(
            () =>
              (visualViewport?.offsetTop || 0) +
              (visualViewport?.height || innerHeight)
          );
        expect(
          (await nav.boundingBox())!.y + (await nav.boundingBox())!.height
        ).toBeCloseTo(await viewportBottom(), 0);
        expect(
          await page.evaluate(() =>
            [document.documentElement, document.body].map((el) => ({
              x: getComputedStyle(el).overflowX,
              y: getComputedStyle(el).overflowY,
            }))
          )
        ).toEqual([
          { x: 'visible', y: 'visible' },
          { x: 'visible', y: 'visible' },
        ]);
        const header = (await page.locator('.pocket-header').boundingBox())!,
          home = (await page.locator('.pocket-home').boundingBox())!;
        expect(home.y).toBeGreaterThanOrEqual(v.top);
        expect(home.y + home.height).toBeLessThanOrEqual(
          header.y + header.height
        );
        const controls = (await page.getByRole('tablist').boundingBox())!;
        expect(controls.y + controls.height).toBeLessThanOrEqual(
          v.height - v.bottom + 1
        );
        if (app === 'weather') {
          const panel = page.locator('#weather-panel-now');
          expect(
            await panel.evaluate((el) => getComputedStyle(el).overflowY)
          ).toBe('visible');
          const cards = page.locator('.forecast-glance-items button');
          await expect(cards).toHaveCount(7);
          for (const card of await cards.all()) {
            await expect(card).toBeInViewport({ ratio: 1 });
            const r = (await card.boundingBox())!,
              low = (await card.locator('small').boundingBox())!,
              navTop = (await nav.boundingBox())!.y;
            expect(r.y + r.height).toBeLessThanOrEqual(navTop + 1);
            expect(low.y + low.height).toBeLessThanOrEqual(navTop + 1);
          }
          expect(
            await page.evaluate(() => document.documentElement.scrollHeight)
          ).toBeGreaterThan(v.height);
          await page.screenshot({
            path: info.outputPath('weather-first-screen.png'),
            animations: 'disabled',
          });
          const week = page.locator('#overview-week'),
            weekTop = (await week.boundingBox())!.y;
          await page.mouse.move(v.width / 2, v.height / 2);
          await page.mouse.wheel(0, Math.max(100, weekTop - v.height / 4));
          await expect
            .poll(() => page.evaluate(() => scrollY))
            .toBeGreaterThan(0);
          await expect(
            week.getByRole('heading', { name: 'The week ahead' })
          ).toBeInViewport();
          expect(await panel.evaluate((el) => el.scrollTop)).toBe(0);
          const after = (await nav.boundingBox())!;
          expect(after.y + after.height).toBeCloseTo(await viewportBottom(), 0);
          await expect(
            nav.getByRole('tab', { name: 'Now', exact: true })
          ).toHaveAttribute('aria-selected', 'true');
          await page.screenshot({
            path: info.outputPath('weather-scrolled-week.png'),
            animations: 'disabled',
          });
        } else {
          const frame = (await page
            .locator('main.pocket-frame')
            .boundingBox())!;
          expect(frame.height).toBeCloseTo(v.height, 0);
          expect(
            await page.evaluate(() => document.documentElement.scrollHeight)
          ).toBeLessThanOrEqual(v.height + 1);
          const equals = page.getByRole('button', {
            name: 'Calculate result',
            exact: true,
          });
          await expect(equals).toBeInViewport({ ratio: 1 });
          const r = (await equals.boundingBox())!;
          expect(r.y + r.height).toBeLessThanOrEqual(
            (await nav.boundingBox())!.y + 1
          );
          await page.screenshot({
            path: info.outputPath('calculator-safe-area.png'),
            animations: 'disabled',
          });
        }
      });
    }
});
