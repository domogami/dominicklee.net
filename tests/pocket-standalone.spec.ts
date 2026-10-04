import { test, expect, type Page } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

// Desktop Chromium cannot install an iOS web app. Simulate WebKit's smaller
// dynamic viewport and iPhone insets in the shared stylesheet, then enable its
// standalone media branch. Assertions cover the resulting layout, not CSS units.
async function installedViewport(
  page: Page,
  insets: { top: number; right: number; bottom: number; left: number },
  standalone: boolean
) {
  await page.evaluate(
    ({ insets, standalone }) => {
      const sheet = Array.from(document.styleSheets).find((sheet) =>
        sheet.href?.includes('/pocket-app-')
      )!;
      const visit = (rules: CSSRuleList) => {
        for (const rule of Array.from(rules)) {
          if (rule instanceof CSSMediaRule) {
            if (
              standalone &&
              rule.conditionText.includes('display-mode: standalone')
            ) {
              rule.media.mediaText = 'all';
            }
            visit(rule.cssRules);
          } else if (rule instanceof CSSStyleRule) {
            rule.style.cssText = rule.style.cssText.replace(
              /env\(safe-area-inset-(top|right|bottom|left)\)/g,
              (_, side: keyof typeof insets) => `${insets[side]}px`
            );
            if (rule.style.height === '100dvh') {
              rule.style.height = `calc(100dvh - ${insets.top + insets.bottom}px)`;
            }
          }
        }
      };
      visit(sheet.cssRules);
    },
    { insets, standalone }
  );
}

async function bottom(page: Page) {
  return page
    .locator('.pocket-nav')
    .evaluate((el) => el.getBoundingClientRect().bottom);
}

test.describe('Home Screen app height', () => {
  test.use({ serviceWorkers: 'block' });

  for (const viewport of [
    { width: 393, height: 852, top: 59, right: 0, bottom: 34, left: 0 },
    { width: 390, height: 600, top: 44, right: 0, bottom: 34, left: 0 },
    { width: 852, height: 393, top: 0, right: 59, bottom: 21, left: 59 },
  ]) {
    for (const app of ['weather', 'calculator']) {
      test(`${app} keeps Safari unchanged and fills standalone ${viewport.width}x${viewport.height}`, async ({
        page,
      }, info) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });
        await page.clock.setFixedTime(weatherNow);
        await page.route('**/weather/api?*', (route) =>
          route.fulfill({ json: weatherFixture() })
        );
        await page.route('**/weather/alerts?*', (route) =>
          route.fulfill({ json: { status: 'ok', alerts: [] } })
        );
        await page.goto(`/${app}/`);
        if (app === 'weather') {
          await expect(page.locator('.current-temperature')).toHaveText('64°');
        } else {
          await expect(page.locator('.calculator-journal')).toHaveAttribute(
            'aria-busy',
            'false'
          );
        }
        await page.evaluate(() => document.fonts.ready);
        // Browser mode already reaches its viewport edge, with no new padding.
        expect(await bottom(page)).toBeCloseTo(viewport.height, 0);

        await installedViewport(page, viewport, false);
        expect(await bottom(page)).toBeCloseTo(
          viewport.height - viewport.top - viewport.bottom,
          0
        );
        await installedViewport(page, viewport, true);
        expect(await bottom(page)).toBeCloseTo(viewport.height, 0);

        const controls = await page.getByRole('tablist').boundingBox();
        expect(controls!.y + controls!.height).toBeLessThanOrEqual(
          viewport.height - viewport.bottom + 1
        );
        const header = await page.locator('.pocket-header').boundingBox();
        expect(header!.y).toBeGreaterThanOrEqual(viewport.top);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth
          )
        ).toBe(true);
        const panel = page.getByRole('tabpanel');
        expect(
          await panel.evaluate((el) => el.scrollHeight <= el.clientHeight + 1)
        ).toBe(true);
        await page.screenshot({
          path: info.outputPath(`${app}-standalone.png`),
          animations: 'disabled',
        });
      });
    }
  }
});
