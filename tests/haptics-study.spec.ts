import { test, expect } from '@playwright/test';

test.describe('iPhone haptics comparison', () => {
  test.use({
    hasTouch: true,
    isMobile: true,
    viewport: { width: 390, height: 844 },
    serviceWorkers: 'block',
  });

  test('real taps reach the rendered native switch and scripted activation stays distinguishable', async ({
    page,
  }, info) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'vibrate', {
        configurable: true,
        value: (pattern: number | number[]) => {
          if (pattern !== 0)
            document.documentElement.setAttribute(
              'data-unexpected-vibration',
              'yes'
            );
          return true;
        },
      });
      document.addEventListener(
        'click',
        (e) => {
          if (e.target instanceof HTMLInputElement)
            e.target.setAttribute('data-trusted-click', String(e.isTrusted));
        },
        true
      );
    });
    await page.goto('/studies/haptics');
    const direct = page.getByLabel('Direct tap sample');
    await expect(direct).toHaveAttribute('switch', '');
    await expect(direct).toBeVisible();
    const geometry = await direct.evaluate((el) => {
      const css = getComputedStyle(el);
      const input = el.getBoundingClientRect();
      const label = el.parentElement!.getBoundingClientRect();
      return {
        opacity: css.opacity,
        appearance: css.appearance,
        clip: css.clipPath,
        width: input.width,
        height: input.height,
        labelWidth: label.width,
        labelHeight: label.height,
      };
    });
    expect(geometry.opacity).toBe('0');
    expect(geometry.appearance).toBe('auto');
    expect(geometry.clip).toContain('inset');
    expect(geometry.width).toBeCloseTo(geometry.labelWidth, 0);
    expect(geometry.height).toBeCloseTo(geometry.labelHeight, 0);
    await direct.tap();
    await expect(direct).toBeChecked();
    await expect(direct).toHaveAttribute('data-trusted-click', 'true');
    await expect(page.getByLabel('1 direct taps')).toHaveText('1 taps');
    await page.getByLabel('Visible switch sample').tap();
    await expect(page.getByLabel('Visible switch sample')).toBeChecked();
    await page.getByRole('button', { name: 'Try the older method' }).tap();
    await expect(page.getByLabel('1 scripted taps')).toHaveText('1 taps');
    await expect(page.locator('label[hidden] input')).toBeChecked();
    await expect(page.locator('label[hidden] input')).toHaveAttribute(
      'data-trusted-click',
      'false'
    );
    await expect(page.locator('html')).not.toHaveAttribute(
      'data-unexpected-vibration'
    );
    await expect(page.getByRole('status')).toContainText(
      'A counter can’t tell whether it vibrated.'
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: info.outputPath('iphone-haptics-comparison.png'),
      fullPage: true,
    });
  });

  test('native inputs remain keyboard accessible and fit a narrow phone', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/studies/haptics');
    const direct = page.getByLabel('Direct tap sample');
    await direct.focus();
    await page.keyboard.press('Space');
    await expect(direct).toBeFocused();
    await expect(direct).toBeChecked();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Visible switch sample')).toBeFocused();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
  });
});
