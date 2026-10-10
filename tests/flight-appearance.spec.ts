import { test, expect } from '@playwright/test';

for (const [name, theme, paper] of [
  ['Light', 'light', 'rgb(239, 231, 215)'],
  ['Hybrid', 'hybrid', 'rgb(239, 231, 215)'],
  ['Dark', 'dark', 'rgb(43, 48, 52)'],
]) {
  test(`${name} theme preserves flight data and uses the notebook palette`, async ({
    page,
  }) => {
    await page.goto('/flight-performance/');
    await page.getByRole('button', { name: 'Try an instrument log' }).click();
    const before = await page.locator('.fp-metric strong').allTextContents();
    await page
      .getByRole('group', { name: 'Color theme' })
      .getByRole('button', { name, exact: true })
      .click();
    await expect(page.locator('.flight-app')).toHaveAttribute(
      'data-theme',
      theme
    );
    await expect(page.locator('.flight-app')).toHaveCSS(
      'background-color',
      paper
    );
    await expect(page.locator('.fp-metric strong')).toHaveText(before);
    await expect(
      page.locator('.fp-chart').first().locator('svg')
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
    await page.getByRole('button', { name: 'Pause decorative motion' }).click();
    await page.setViewportSize({ width: 1280, height: 1500 });
    await page
      .getByRole('heading', { name: 'Know your airplane.' })
      .scrollIntoViewIfNeeded();
    await page.screenshot({
      path: `/tmp/flight-${theme}-theme.png`,
      fullPage: false,
    });
  });
}
test('theme and motion preferences persist across reload without storing flight records', async ({
  page,
}) => {
  await page.goto('/flight-performance/');
  await page.getByRole('button', { name: 'Dark', exact: true }).click();
  await page.getByRole('button', { name: 'Pause decorative motion' }).click();
  await page.reload();
  await expect(page.locator('.flight-app')).toHaveAttribute(
    'data-theme',
    'dark'
  );
  await expect(page.locator('.flight-app')).toHaveAttribute(
    'data-motion',
    'off'
  );
  await expect(
    page.getByRole('button', { name: 'Resume decorative motion' })
  ).toBeVisible();
  expect(
    await page.evaluate(() =>
      JSON.parse(localStorage.getItem('flight-notes-appearance-v1')!)
    )
  ).toEqual({ theme: 'dark', motion: false });
});
test('airplane banks with the pointer, flies on keyboard activation, and respects reduced motion', async ({
  page,
}) => {
  await page.goto('/flight-performance/');
  const sky = page.getByRole('button', { name: 'Fly the airplane for a lap' });
  const box = (await sky.boundingBox())!;
  await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.3);
  expect(
    await sky.evaluate((el) => el.style.getPropertyValue('--fp-bank'))
  ).not.toBe('0deg');
  await sky.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.fp-flight-toy')).toHaveAttribute(
    'data-flying',
    'true'
  );
  await expect(page.locator('.fp-lap-count')).toContainText('1 happy lap', {
    timeout: 6000,
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.flight-app')).toHaveAttribute(
    'data-motion',
    'off'
  );
  await expect(
    page.getByRole('button', { name: 'Motion reduced by device preference' })
  ).toBeDisabled();
  expect(
    await page
      .locator('.fp-plane-idle')
      .evaluate((el) => getComputedStyle(el).animationName)
  ).toBe('none');
  await sky.click();
  await expect(page.locator('.fp-flight-toy')).toHaveAttribute(
    'data-flying',
    'false'
  );
});
test('minimum segment description is attached to the context control and mobile airplane stays usable', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/flight-performance/');
  await expect(
    page.getByRole('button', { name: 'Fly the airplane for a lap' })
  ).toBeVisible();
  const min = page.getByLabel('Minimum segment length', { exact: true });
  await expect(min).toHaveAttribute('aria-describedby', 'fp-window-help');
  await expect(page.locator('#fp-window-help')).toContainText('60 seconds');
  await min.fill('90');
  await expect(page.locator('#fp-window-help')).toContainText('90 seconds');
  for (const theme of ['Dark', 'Light', 'Hybrid']) {
    await page.getByRole('button', { name: theme, exact: true }).click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true);
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page
    .getByRole('heading', { name: 'Know your airplane.' })
    .scrollIntoViewIfNeeded();
  await page.screenshot({
    path: '/tmp/flight-themed-mobile.png',
    fullPage: false,
  });
});
