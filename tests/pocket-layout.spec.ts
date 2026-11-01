import { expect, test } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

// An injected inset exercises Home Screen layout without pretending that a
// desktop simulator can verify Safari's physical home indicator.
const viewports = [
  { width: 390, height: 844, safe: 0 },
  { width: 390, height: 844, safe: 34 },
  { width: 390, height: 600, safe: 34 },
  { width: 844, height: 390, safe: 34 },
  { width: 1440, height: 900, safe: 0 },
];

test.describe('Domino pocket app frame', () => {
  test.use({ serviceWorkers: 'block', reducedMotion: 'reduce' });
  for (const route of ['weather', 'calculator'] as const) {
    for (const viewport of viewports) {
      test(`${route} retains its bottom chrome and ink at ${viewport.width}x${viewport.height}, inset ${viewport.safe}`, async ({
        page,
      }) => {
        await page.setViewportSize(viewport);
        if (route === 'weather') {
          await page.clock.setFixedTime(weatherNow);
          await page.route('**/weather/api?*', (r) =>
            r.fulfill({ json: weatherFixture() })
          );
          await page.route('**/weather/alerts?*', (r) =>
            r.fulfill({ json: { status: 'ok', alerts: [] } })
          );
        }
        await page.goto(`/${route}/`);
        if (route === 'weather')
          await expect(page.locator('.current-temperature')).toHaveText('64°');
        else
          await expect(page.locator('.calculator-journal')).toHaveAttribute(
            'aria-busy',
            'false'
          );
        await page.locator('.pocket-app').evaluate((el, safe) => {
          (el as HTMLElement).style.setProperty(
            '--pocket-safe-bottom',
            `${safe}px`
          );
        }, viewport.safe);
        await page.evaluate(() => document.fonts.ready);
        const nav = page.locator('.pocket-nav');
        const navBox = (await nav.boundingBox())!;
        expect(
          Math.abs(navBox.y + navBox.height - viewport.height)
        ).toBeLessThan(1);
        expect(await nav.evaluate((el) => getComputedStyle(el).position)).toBe(
          'fixed'
        );
        const padding = await nav.evaluate((el) =>
          parseFloat(getComputedStyle(el).paddingBottom)
        );
        expect(padding).toBe(7 + viewport.safe);
        const lastTab = (await nav.getByRole('tab').last().boundingBox())!;
        expect(lastTab.y + lastTab.height).toBeLessThanOrEqual(
          viewport.height - viewport.safe
        );
        // A transform/filter/paint containment on any ancestor would pin this
        // navigation to a content box instead of the screen on iOS.
        const containingAncestors = await nav.evaluate((el) => {
          const affected: string[] = [];
          for (
            let parent = el.parentElement;
            parent;
            parent = parent.parentElement
          ) {
            const css = getComputedStyle(parent);
            if (
              css.transform !== 'none' ||
              css.filter !== 'none' ||
              css.perspective !== 'none' ||
              /paint|layout|strict|content/.test(css.contain)
            )
              affected.push(parent.className || parent.tagName);
          }
          return affected;
        });
        expect(containingAncestors).toEqual([]);
        const outline = (await page
          .locator('.pocket-outline path')
          .boundingBox())!;
        expect(outline.x).toBeGreaterThan(0);
        expect(outline.y).toBeGreaterThan(0);
        expect(outline.x + outline.width).toBeLessThan(viewport.width);
        expect(outline.y + outline.height).toBeLessThan(viewport.height);
        expect(viewport.height - outline.y - outline.height).toBeLessThan(16);
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth)
        ).toBeLessThanOrEqual(viewport.width);
        if (route === 'calculator') {
          const equals = page.getByRole('button', {
            name: 'Calculate result',
            exact: true,
          });
          const buttonBox = (await equals.boundingBox())!;
          const keyInk = (await equals
            .locator('.calc-key-outline path')
            .first()
            .boundingBox())!;
          expect(keyInk.y + keyInk.height).toBeLessThan(
            buttonBox.y + buttonBox.height
          );
          expect(buttonBox.y + buttonBox.height).toBeLessThanOrEqual(navBox.y);
          expect(buttonBox.y).toBeGreaterThan(0);
          await expect(equals).toBeInViewport({ ratio: 1 });
          const field = page.getByLabel('Your calculation', { exact: true });
          await field.fill('858');
          const inkFits = await field.evaluate((el: HTMLInputElement) => {
            const css = getComputedStyle(el);
            const ctx = document.createElement('canvas').getContext('2d')!;
            ctx.font = `${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;
            return (
              ctx.measureText(el.value).width +
                parseFloat(css.letterSpacing) * el.value.length +
                parseFloat(css.paddingLeft) +
                parseFloat(css.paddingRight) <=
              el.clientWidth
            );
          });
          expect(inkFits).toBe(true);
        }
      });
    }
  }
});
