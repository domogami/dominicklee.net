import { test, expect } from '@playwright/test';

test.describe('calculator number ink and desktop placement', () => {
  test.use({ serviceWorkers: 'block' });
  for (const [width, height] of [
    [1440, 900],
    [1280, 1700],
    [320, 568],
    [390, 844],
  ]) {
    test(`numbers retain their final stroke at ${width}x${height}`, async ({
      page,
    }, info) => {
      await page.setViewportSize({ width, height });
      await page.emulateMedia({ colorScheme: 'dark' });
      await page.goto('/calculator/');
      await expect(page.locator('.calculator-journal')).toHaveAttribute(
        'aria-busy',
        'false'
      );
      await page.getByLabel('Your calculation', { exact: true }).fill('858');
      await expect(
        page.getByLabel('Your calculation', { exact: true })
      ).toHaveValue('858');
      await page.evaluate(() => document.fonts.ready);
      const panel = (await page.locator('.calc-main-panel').boundingBox())!;
      const machine = (await page.locator('.calc-machine').boundingBox())!;
      if (width >= 900) {
        expect(
          Math.abs(machine.y + machine.height / 2 - panel.y - panel.height / 2)
        ).toBeLessThan(2);
        expect(machine.height).toBeLessThanOrEqual(640);
      }
      // The input's text viewport clips glyph overhang, regardless of padding.
      // Its final advance must leave room for the ink, as well as the caret.
      const ink = await page
        .getByLabel('Your calculation', { exact: true })
        .evaluate((el: HTMLInputElement) => {
          const css = getComputedStyle(el);
          const ctx = document.createElement('canvas').getContext('2d')!;
          ctx.font = `${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;
          const glyph = ctx.measureText('8');
          return {
            space: parseFloat(css.letterSpacing),
            overhang: glyph.actualBoundingBoxRight - glyph.width,
            padding: parseFloat(css.paddingRight),
            width: el.clientWidth,
            text: ctx.measureText(el.value).width,
            height: el.clientHeight,
            font: parseFloat(css.fontSize),
          };
        });
      expect(ink.space).toBeGreaterThan(ink.overhang);
      expect(ink.padding).toBeGreaterThanOrEqual(12);
      expect(ink.text + ink.space * 3 + ink.padding * 2).toBeLessThan(
        ink.width
      );
      expect(ink.height).toBeGreaterThan(ink.font);
      await page
        .getByRole('heading', { name: 'Calculator', exact: true })
        .click();
      await page.screenshot({
        path: info.outputPath(`calculator-fixed-${width}x${height}.png`),
        animations: 'disabled',
      });
      for (const value of ['9999999999', '-88888888', '0.88888888888888']) {
        await page.getByLabel('Your calculation', { exact: true }).fill(value);
        const fits = await page
          .getByLabel('Your calculation', { exact: true })
          .evaluate((el: HTMLInputElement) => {
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
        expect(fits).toBe(true);
      }
    });
  }
});
