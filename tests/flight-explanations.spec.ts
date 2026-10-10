import { test, expect } from '@playwright/test';

test('all four graph info buttons explain evidence and remain hoverable', async ({
  page,
}) => {
  await page.goto('/flight-performance/');
  await page.getByRole('button', { name: 'Try an instrument log' }).click();
  for (const [label, text] of [
    ['Cruise performance', 'Turns, excessive speed variation'],
    ['Rate of climb', 'Hollow points are clear climbs'],
    ['Cruise fuel economy', 'zero is not substituted'],
    ['Speed over the ground', 'before wind correction'],
  ]) {
    const button = page.getByRole('button', {
      name: `About ${label}`,
      exact: true,
    });
    await button.hover();
    const tip = page.getByRole('tooltip');
    await expect(tip).toContainText(text);
    await tip.hover();
    await expect(tip).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(tip).toHaveCount(0);
    await expect(button).toHaveAttribute('aria-expanded', 'false');
  }
});

test('stability help opens with keyboard focus and graph points are keyboard selectable', async ({
  page,
}) => {
  await page.goto('/flight-performance/');
  await page.getByRole('button', { name: 'Try an instrument log' }).click();
  const button = page.getByRole('button', {
    name: 'About Stability flags',
    exact: true,
  });
  await button.focus();
  await expect(page.getByRole('tooltip')).toContainText(
    'track changes by more than 12°'
  );
  await expect(page.getByRole('tooltip')).toContainText('Missing engine data');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('tooltip')).toHaveCount(0);
  const point = page.locator('.fp-chart').nth(1).locator('.fp-dot').first();
  const label = await point.getAttribute('aria-label');
  await point.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.fp-worked .fp-badge')).toContainText(
    label!.split(':')[0]
  );
});

test.describe('touch explanations', () => {
  test.use({ hasTouch: true, viewport: { width: 390, height: 844 } });
  test('info buttons toggle on tap, fit the viewport and follow the dark theme', async ({
    page,
  }) => {
    await page.goto('/flight-performance/');
    await page.getByRole('button', { name: 'Dark', exact: true }).tap();
    await page.getByRole('button', { name: 'Try an instrument log' }).tap();
    const button = page.getByRole('button', {
      name: 'About Rate of climb',
      exact: true,
    });
    await button.tap();
    const tip = page.getByRole('tooltip');
    await expect(tip).toContainText('Poor altitude fits');
    const rect = await tip.boundingBox();
    expect(rect!.x).toBeGreaterThanOrEqual(15);
    expect(rect!.x + rect!.width).toBeLessThanOrEqual(375);
    expect(rect!.y).toBeGreaterThanOrEqual(15);
    expect(rect!.y + rect!.height).toBeLessThanOrEqual(829);
    expect(
      await tip.evaluate((el) => getComputedStyle(el).backgroundColor)
    ).toBe('rgb(50, 59, 62)');
    await page.screenshot({ path: '/tmp/flight-climb-info.png' });
    await button.tap();
    await expect(tip).toHaveCount(0);
    await button.tap();
    await expect(tip).toBeVisible();
    await page.locator('.fp-footer').tap();
    await expect(tip).toHaveCount(0);
  });
});
