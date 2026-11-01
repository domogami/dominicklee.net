import { test, expect } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';

for (const width of [320, 390, 768, 1440]) {
  test(`the full week unfolds below today in the same view at ${width}px`, async ({
    page,
  }, info) => {
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.clock.setFixedTime(weatherNow);
    await page.route('**/weather/api?*', (r) =>
      r.fulfill({ json: weatherFixture() })
    );
    await page.route('**/weather/alerts?*', (r) =>
      r.fulfill({ json: { status: 'ok', alerts: [] } })
    );
    await page.goto('/weather/');
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await page.evaluate(() => document.fonts.ready);
    const panel = page.locator('#weather-panel-now');
    const week = page.locator('#overview-week');
    await expect(week.locator('.forecast-day')).toHaveCount(7);
    expect((await week.boundingBox())!.y).toBeGreaterThanOrEqual(
      (await panel.boundingBox())!.y + (await panel.boundingBox())!.height
    );
    await page.screenshot({
      path: info.outputPath(`weather-today-${width}.png`),
      animations: 'disabled',
    });
    await page
      .getByRole('button', { name: 'The week ahead', exact: true })
      .click();
    await expect(
      week.getByRole('heading', { name: 'The week ahead' })
    ).toBeInViewport();
    await expect(
      page.getByRole('tab', { name: 'Now', exact: true })
    ).toHaveAttribute('aria-selected', 'true');
    const nav = page.locator('.pocket-nav');
    expect(
      (await nav.boundingBox())!.y + (await nav.boundingBox())!.height
    ).toBe(844);
    const day = week.locator('.forecast-day').nth(2);
    await day.locator('summary').click();
    await expect(day).toHaveAttribute('open');
    await day.getByRole('button', { name: 'See this day' }).click();
    await expect(page.locator('.current-temperature')).toBeInViewport();
    await expect(
      page.getByRole('button', { name: 'Back to now', exact: true })
    ).toBeVisible();
    await panel.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    await page.screenshot({
      path: info.outputPath(`weather-week-${width}.png`),
      animations: 'disabled',
    });
    // The full rows are real scroll content, not a second hidden tab or overlay.
    await week
      .getByRole('button', { name: 'Explore the weekly graph' })
      .click();
    await expect(
      page.getByRole('slider', { name: 'Select forecast day' })
    ).toBeVisible();
    await expect(page.locator('[id="week-title"]')).toHaveCount(1);
    await expect(page.locator('#overview-week')).toHaveCount(0);
  });
}
