import { test, expect, type Page } from '@playwright/test';

const answer = (page: Page) =>
  page.getByRole('status', { name: 'Result', exact: true });
const equals = (page: Page) =>
  page.getByRole('button', { name: 'Calculate result', exact: true });

test.describe('repeat equals and result copying', () => {
  test.use({ serviceWorkers: 'block' });

  test('equals repeats, survives reopening, and a new entry or clear starts a fresh operation', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    const field = page.getByLabel('Your calculation', { exact: true });
    await field.fill('5+2');
    await equals(page).click();
    await expect(answer(page)).toHaveText('7');
    await equals(page).click();
    await expect(answer(page)).toHaveText('9');
    await page.reload();
    await expect(page.locator('.calculator-journal')).toHaveAttribute(
      'aria-busy',
      'false'
    );
    await equals(page).click();
    await expect(answer(page)).toHaveText('11');
    await expect(field).toHaveValue('9+2');
    await page.getByRole('tab', { name: 'History', exact: true }).click();
    await expect(page.locator('.calc-history ol li')).toHaveCount(3);
    await page.getByRole('tab', { name: 'Calculate', exact: true }).click();
    await page.getByRole('button', { name: '3', exact: true }).click();
    await equals(page).click();
    await equals(page).click();
    await expect(answer(page)).toHaveText('3');
    await field.fill('10-2');
    await field.press('Enter');
    await field.press('Enter');
    await expect(answer(page)).toHaveText('6');
    await page.getByRole('button', { name: 'Clear calculation' }).click();
    await field.fill('4*3');
    await field.press('=');
    await field.press('=');
    await expect(answer(page)).toHaveText('36');
    await field.fill('1/0');
    await equals(page).click();
    await expect(answer(page)).toHaveText('—');
    await field.fill('8+1');
    await equals(page).click();
    await equals(page).click();
    await expect(answer(page)).toHaveText('10');
  });

  test('compound and percentage repeats use the correct operand and do not overflow silently', async ({
    page,
  }) => {
    await page.goto('/calculator/');
    const field = page.getByLabel('Your calculation', { exact: true });
    for (const [expression, expected] of [
      ['2+3*4', '26'],
      ['200+10%', '242'],
      ['200-10%', '162'],
      ['3*2', '12'],
    ]) {
      await field.fill(expression);
      await equals(page).click();
      await equals(page).click();
      await expect(answer(page)).toHaveText(expected);
    }
    await field.fill('1e307*10');
    await equals(page).click();
    await equals(page).click();
    await expect(page.locator('.calc-answer-meta')).toContainText(
      'outside the calculator’s range'
    );
    await expect(answer(page)).not.toHaveText(/Infinity|NaN/);
  });

  test('tapping or keyboard-activating a result copies it without repeating or changing the expression', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async (text: string) => {
            (window as any).copiedResult = text;
          },
        },
      });
    });
    await page.goto('/calculator/');
    const field = page.getByLabel('Your calculation', { exact: true });
    await field.fill('12+3');
    await equals(page).click();
    const copy = page.getByRole('button', {
      name: 'Copy displayed result',
      exact: true,
    });
    await copy.click();
    await expect
      .poll(() => page.evaluate(() => (window as any).copiedResult))
      .toBe('15');
    await expect(
      page.getByRole('button', { name: 'Copy result', exact: true })
    ).toHaveText('Copied');
    await expect(field).toHaveValue('12+3');
    await equals(page).click();
    await copy.focus();
    await copy.press('Enter');
    await expect
      .poll(() => page.evaluate(() => (window as any).copiedResult))
      .toBe('18');
    await expect(answer(page)).toHaveText('18');
    await field.fill('42');
    await equals(page).click();
    await field.click();
    await expect
      .poll(() => page.evaluate(() => (window as any).copiedResult))
      .toBe('42');
    await expect(field).toHaveValue('42');
    await field.fill('7+1');
    await equals(page).click();
    await expect(answer(page)).toHaveText('8');
  });

  test('copy failure is explicit and a live preview remains editable', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async () => {
            throw new Error('Denied');
          },
        },
      });
    });
    await page.goto('/calculator/');
    const field = page.getByLabel('Your calculation', { exact: true });
    await field.fill('2+3');
    await page
      .getByRole('button', { name: 'Copy displayed result', exact: true })
      .click();
    await expect(page.locator('.calc-answer-meta')).toContainText(
      'Copy isn’t available'
    );
    await expect(field).toHaveValue('2+3');
    await field.fill('2+4');
    await equals(page).click();
    await expect(answer(page)).toHaveText('6');
  });
});
