import { expect, test } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

// Inject safe-area values without pretending to emulate iOS viewport behavior.
const viewports = [
  { width: 390, height: 844, top: 0, bottom: 0 },
  { width: 393, height: 852, top: 59, bottom: 34 },
  { width: 390, height: 600, top: 44, bottom: 34 },
  { width: 852, height: 393, top: 0, bottom: 21 },
  { width: 1440, height: 900, top: 0, bottom: 0 },
];

test.describe('Christiane-style pocket shell', () => {
  test.use({ serviceWorkers: 'block', reducedMotion: 'reduce' });
  for (const route of ['weather', 'calculator'])
    for (const v of viewports) {
      test(`${route} keeps chrome outside main at ${v.width}x${v.height}, safe ${v.top}/${v.bottom}`, async ({
        page,
      }) => {
        await page.setViewportSize(v);
        await page.clock.setFixedTime(weatherNow);
        await page.route('**/weather/api?*', (r) =>
          r.fulfill({ json: weatherFixture() })
        );
        await page.route('**/weather/alerts?*', (r) =>
          r.fulfill({ json: { status: 'ok', alerts: [] } })
        );
        await page.goto(`/${route}/`);
        if (route === 'weather')
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
        const shell = await nav.evaluate((el) => {
          const unsafe: string[] = [];
          for (let p = el.parentElement; p; p = p.parentElement) {
            const s = getComputedStyle(p);
            if (
              [s.overflowX, s.overflowY].some((x) =>
                /^(hidden|clip|auto|scroll)$/.test(x)
              ) ||
              s.transform !== 'none' ||
              s.filter !== 'none' ||
              s.perspective !== 'none' ||
              /paint|layout|strict|content/.test(s.contain)
            )
              unsafe.push(p.className || p.tagName);
          }
          const r = el.getBoundingClientRect(),
            s = getComputedStyle(el);
          return {
            unsafe,
            main: Boolean(el.closest('main')),
            siblingMain: el.parentElement?.querySelector(
              ':scope > main.pocket-frame'
            )?.tagName,
            position: s.position,
            bottom: r.bottom,
            viewportBottom:
              (visualViewport?.offsetTop || 0) +
              (visualViewport?.height || innerHeight),
            padding: parseFloat(s.paddingBottom),
          };
        });
        expect(shell.unsafe).toEqual([]);
        expect(shell.main).toBe(false);
        expect(shell.siblingMain).toBe('MAIN');
        expect(shell.position).toBe('fixed');
        expect(shell.bottom).toBeCloseTo(shell.viewportBottom, 0);
        expect(shell.padding).toBe(7 + v.bottom);
        await expect(page.locator('.pocket-outline')).toHaveCount(0);
        const paint = await page.locator('.pocket-header').evaluate((el) => {
          const s = getComputedStyle(el);
          return {
            filter: s.filter,
            backdrop: s.getPropertyValue('backdrop-filter'),
            webkit: s.getPropertyValue('-webkit-backdrop-filter'),
          };
        });
        expect(paint.filter).toBe('none');
        expect(['', 'none']).toContain(paint.backdrop);
        expect(['', 'none']).toContain(paint.webkit);
        const navBox = (await nav.boundingBox())!;
        for (const tab of await nav.getByRole('tab').all()) {
          const r = (await tab.boundingBox())!;
          expect(r.y).toBeGreaterThanOrEqual(navBox.y);
          expect(r.y + r.height).toBeLessThanOrEqual(v.height - v.bottom + 1);
          expect(
            await tab.evaluate((el) => {
              const r = el.getBoundingClientRect(),
                hit = document.elementFromPoint(
                  r.x + r.width / 2,
                  r.y + r.height / 2
                ),
                label = el.getAttribute('aria-label') || el.textContent?.trim();
              return Boolean(
                hit &&
                (el.contains(hit) ||
                  hit.getAttribute('data-native-tap-label') === label)
              );
            })
          ).toBe(true);
        }
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth)
        ).toBeLessThanOrEqual(v.width);
        if (route === 'weather') {
          await expect(
            page.locator('.forecast-glance-items button')
          ).toHaveCount(7);
          await expect(
            page.locator('.forecast-glance-items button small')
          ).toHaveCount(7);
          const bounds = await page
            .locator('.forecast-glance-items')
            .evaluate((el) => {
              const top = document
                .querySelector('.pocket-nav')!
                .getBoundingClientRect().top;
              return Array.from(
                el.querySelectorAll('button, button small')
              ).map((item) => ({
                bottom: item.getBoundingClientRect().bottom,
                top,
              }));
            });
          for (const r of bounds)
            expect(r.bottom).toBeLessThanOrEqual(r.top + 1);
        } else {
          const equals = page.getByRole('button', {
              name: 'Calculate result',
              exact: true,
            }),
            r = (await equals.boundingBox())!,
            ink = (await equals
              .locator('.calc-key-outline path')
              .first()
              .boundingBox())!;
          expect(ink.y + ink.height).toBeLessThan(r.y + r.height);
          expect(r.y + r.height).toBeLessThanOrEqual(navBox.y);
          await expect(equals).toBeInViewport({ ratio: 1 });
          const field = page.getByLabel('Your calculation', { exact: true });
          await field.fill('858');
          expect(
            await field.evaluate((el: HTMLInputElement) => {
              const s = getComputedStyle(el),
                ctx = document.createElement('canvas').getContext('2d')!;
              ctx.font = `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
              return (
                ctx.measureText(el.value).width +
                  parseFloat(s.letterSpacing) * el.value.length +
                  parseFloat(s.paddingLeft) +
                  parseFloat(s.paddingRight) <=
                el.clientWidth
              );
            })
          ).toBe(true);
        }
      });
    }
});
