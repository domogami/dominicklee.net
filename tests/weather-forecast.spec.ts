import { test, expect, type Page } from '@playwright/test';
import { weatherFixture, weatherNow } from './weather-fixture';
import { temperature, type Weather } from '../app/weather/model';

async function forecast(page: Page, data: Weather = weatherFixture()) {
  await page.clock.setFixedTime(weatherNow);
  await page.route('**/weather/api?*', (route) =>
    route.fulfill({ json: data })
  );
  await page.route('**/weather/alerts?*', (route) =>
    route.fulfill({ json: { status: 'ok', alerts: [] } })
  );
  await page.goto('/weather/');
  await expect(page.locator('.current-temperature')).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
}

test.describe('glanceable weather forecasts', () => {
  test.use({ serviceWorkers: 'block', viewport: { width: 390, height: 600 } });

  test('the home forecast toggles hours and days, previews the selected sky, and returns to now', async ({
    page,
  }, info) => {
    const data = weatherFixture();
    await forecast(page, data);
    const items = page.locator('.forecast-glance-items button');
    await expect(items).toHaveCount(7);
    await items.nth(4).click();
    await expect(page.locator('.current-temperature')).toHaveAccessibleName(
      'Daily forecast high 72°, low 55°'
    );
    await expect(page.locator('.weather-sketch')).toHaveAttribute(
      'data-sky',
      'snow'
    );
    await expect(page.locator('.feels-like')).not.toContainText('Feels');
    await expect(items.nth(4)).toHaveAttribute('aria-pressed', 'true');
    // Tapping the selected day again restores the actual current conditions.
    await items.nth(4).click();
    await expect(page.locator('.current-temperature')).toHaveText('64°');
    await expect(page.locator('.weather-sketch')).toHaveAttribute(
      'data-sky',
      'rain'
    );
    await page.screenshot({
      path: info.outputPath('forecast-home-390.png'),
      animations: 'disabled',
    });

    await page.getByRole('button', { name: 'Show hourly forecast' }).click();
    await expect(items).toHaveCount(6);
    await items.nth(2).click();
    await expect(page.locator('.current-temperature')).toHaveText(
      temperature(data.hours[14].temperature, 'us')
    );
    await expect(page.locator('.weather-sketch')).toHaveAttribute(
      'data-sky',
      'partly'
    );
    await expect(items.nth(2)).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Next six hours' }).click();
    await expect(items.first()).toHaveAccessibleName(/6:00 PM/);
    await page.getByRole('button', { name: 'Show daily forecast' }).click();
    await expect(items).toHaveCount(7);
    // Changing the visible strip doesn't silently change the active preview.
    await expect(page.locator('.current-temperature')).toHaveText(
      temperature(data.hours[14].temperature, 'us')
    );
    await page
      .getByRole('button', { name: 'Back to now', exact: true })
      .click();
    await expect(page.locator('.current-temperature')).toHaveText('64°');
  });

  test('one graph covers all 24 hours and pointer and keyboard selections update the readout and home preview', async ({
    page,
  }, info) => {
    const data = weatherFixture();
    await forecast(page, data);
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    const plot = page.getByRole('slider', { name: 'Select forecast hour' });
    await expect(plot).toHaveAttribute('aria-valuemax', '23');
    await expect(page.locator('.hourly-section .forecast-dot')).toHaveCount(24);
    await expect(page.locator('.forecast-hour-items button')).toHaveCount(6);
    const box = (await plot.boundingBox())!;
    // Drag from the middle to the final hour without scrolling a wide strip.
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await expect(plot).toHaveAttribute('aria-valuenow', '12');
    await page.mouse.move(box.x + box.width - 2, box.y + box.height / 2, {
      steps: 8,
    });
    await page.mouse.up();
    await expect(plot).toHaveAttribute('aria-valuenow', '23');
    await expect(
      page.locator('.hourly-section .forecast-readout-copy > span')
    ).toHaveText('Sun · 11:00 AM');
    await expect(page.locator('.forecast-page-count')).toHaveText('4 / 4');
    await expect(
      page.locator('.forecast-hour-items button').last()
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page.locator('.hourly-section .forecast-readout-copy strong')
    ).toHaveText(temperature(data.hours[35].temperature, 'us'));
    const overflow = await page.locator('.hourly-section').evaluate((el) => {
      return {
        width: el.clientWidth,
        scroll: el.scrollWidth,
      };
    });
    expect(overflow.scroll, JSON.stringify(overflow)).toBeLessThanOrEqual(
      overflow.width + 1
    );
    await plot.press('Home');
    await expect(plot).toHaveAttribute('aria-valuenow', '0');
    await plot.press('ArrowRight');
    await expect(plot).toHaveAttribute('aria-valuenow', '1');
    await page
      .getByRole('button', { name: 'Rain chance', exact: true })
      .click();
    await expect(
      page.locator('.hourly-section .forecast-readout-copy strong')
    ).toHaveText('80%');
    await page.screenshot({
      path: info.outputPath('forecast-hours-390.png'),
      animations: 'disabled',
    });
    await page.getByRole('button', { name: 'Rain timing' }).click();
    await expect(
      page.getByRole('dialog', { name: 'Rain in the next two hours' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Keep an umbrella close' })
    ).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(
      page.getByRole('button', { name: 'Rain timing' })
    ).toBeFocused();
    await page.getByRole('button', { name: 'See this sky' }).click();
    await expect(page.locator('.current-temperature')).toHaveText(
      temperature(data.hours[13].temperature, 'us')
    );
    await page.getByRole('button', { name: 'Show hourly forecast' }).click();
    await expect(
      page.locator('.forecast-glance-items button').nth(1)
    ).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await expect(plot).toHaveAttribute('aria-valuenow', '1');
    await page.getByRole('button', { name: 'Wind', exact: true }).click();
    await expect(
      page.locator('.hourly-section .forecast-readout-copy strong')
    ).toHaveText('7 mph');
  });

  test('the daily high and low graph selects a day and shares that selection with its details and mini forecast', async ({
    page,
  }, info) => {
    await forecast(page);
    await page.getByRole('tab', { name: 'Week', exact: true }).click();
    const plot = page.getByRole('slider', { name: 'Select forecast day' });
    await expect(plot).toHaveAttribute('aria-valuemax', '6');
    await plot.press('ArrowRight');
    await plot.press('ArrowRight');
    await expect(plot).toHaveAttribute('aria-valuenow', '2');
    await expect(
      page.locator('.forecast-daily-graph .forecast-readout-copy > span')
    ).toHaveText('Mon · Cloudy');
    await expect(
      page.locator('.forecast-daily-graph .forecast-readout-copy strong')
    ).toHaveText('75° high / 57° low');
    await expect(page.locator('.forecast-day').nth(2)).toHaveAttribute(
      'data-selected',
      'true'
    );
    await page.screenshot({
      path: info.outputPath('forecast-week-390.png'),
      animations: 'disabled',
    });
    await page
      .locator('.forecast-daily-graph')
      .getByRole('button', { name: 'See this day' })
      .click();
    await expect(page.locator('.current-temperature')).toHaveAccessibleName(
      'Daily forecast high 75°, low 57°'
    );
    await expect(
      page.locator('.forecast-glance-items button').nth(2)
    ).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'See wind details' }).click();
    await page.locator('.forecast-day summary').nth(3).click();
    await expect(plot).toHaveAttribute('aria-valuenow', '3');
    await page
      .locator('.forecast-day')
      .nth(3)
      .getByRole('button', { name: 'See this day' })
      .click();
    await expect(page.locator('.weather-sketch')).toHaveAttribute(
      'data-sky',
      'sun'
    );
  });

  test('missing readings break the plot, remain unavailable when selected, and never turn into zero', async ({
    page,
  }) => {
    const data = weatherFixture();
    data.hours[13].temperature = null;
    data.hours = data.hours.map((h) => ({ ...h, wind: null }));
    await forecast(page, data);
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await expect(page.locator('.hourly-section .forecast-stroke')).toHaveCount(
      2
    );
    const plot = page.getByRole('slider', { name: 'Select forecast hour' });
    await plot.press('ArrowRight');
    await expect(
      page.locator('.hourly-section .forecast-readout-copy strong')
    ).toHaveText('—');
    await page.getByRole('button', { name: 'Wind', exact: true }).click();
    await expect(
      page.getByText('Forecast values unavailable', { exact: true })
    ).toBeVisible();
    await expect(page.locator('.hourly-section .forecast-axis')).toHaveText(
      '———'
    );
    await expect(
      page.locator('.forecast-hour-items strong').first()
    ).toHaveText('—');
    await page.getByRole('button', { name: 'See this sky' }).click();
    await expect(page.locator('.current-temperature')).toHaveText('—');
    await page
      .getByRole('button', { name: 'Back to now', exact: true })
      .click();
    await expect(page.locator('.current-temperature')).toHaveText('64°');
  });

  test('a refreshed forecast keeps the chosen time and updates its readings', async ({
    page,
  }) => {
    const data = weatherFixture();
    await forecast(page, data);
    await page.locator('.forecast-glance-items button').nth(2).click();
    data.days[2] = { ...data.days[2], high: 30, low: 20, code: 0 };
    await page.getByRole('tab', { name: 'Details', exact: true }).click();
    await page.getByRole('button', { name: 'Refresh', exact: true }).click();
    await page.getByRole('tab', { name: 'Now', exact: true }).click();
    await expect(page.locator('.current-temperature')).toHaveAccessibleName(
      'Daily forecast high 86°, low 68°'
    );
    await expect(page.locator('.weather-sketch')).toHaveAttribute(
      'data-sky',
      'sun'
    );
    await expect(
      page.locator('.forecast-glance-items button').nth(2)
    ).toHaveAttribute('aria-pressed', 'true');
  });

  test('short and expired saved forecasts have no phantom hours or days', async ({
    page,
  }) => {
    const data = weatherFixture();
    data.hours = data.hours.slice(12, 14);
    data.days = data.days.slice(0, 1);
    await forecast(page, data);
    await expect(page.locator('.forecast-glance-items button')).toHaveCount(1);
    await page.getByRole('button', { name: 'Show hourly forecast' }).click();
    await expect(page.locator('.forecast-glance-items button')).toHaveCount(2);
    await expect(
      page.getByRole('button', { name: 'Next six hours' })
    ).toBeDisabled();
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await expect(
      page.getByRole('slider', { name: 'Select forecast hour' })
    ).toHaveAttribute('aria-valuemax', '1');
    await page
      .getByRole('slider', { name: 'Select forecast hour' })
      .press('End');
    await expect(
      page.locator('.forecast-hour-items button').last()
    ).toHaveAttribute('aria-pressed', 'true');
    await page.route('**/weather/api?*', (route) =>
      route.fulfill({ status: 503, json: { error: 'Unavailable' } })
    );
    await page.clock.setFixedTime(weatherNow + 86400000);
    await page.reload();
    await expect(
      page.getByText('Refresh to see the next forecast.', { exact: true })
    ).toBeVisible();
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await expect(page.getByRole('slider')).toHaveCount(0);
    await expect(
      page.getByText('The saved hourly forecast has ended.', { exact: false })
    ).toBeVisible();
  });

  test('Today and forecast previews follow the chosen place across the date line', async ({
    page,
  }) => {
    const data = weatherFixture();
    data.timezone = 'Pacific/Auckland';
    const midnight = Date.parse('2026-10-03T11:00:00Z') / 1000;
    data.days = data.days.map((d, i) => ({ ...d, time: midnight + i * 86400 }));
    await forecast(page, data);
    await expect(page.locator('.forecast-glance-time').first()).toHaveText(
      'Today'
    );
    await expect(page.locator('.forecast-glance-time').nth(1)).toHaveText(
      'Mon'
    );
    await page.locator('.forecast-glance-items button').first().click();
    await expect(page.locator('.weather-peek')).toContainText(
      'Today · day forecast'
    );
    await expect(page.locator('.current-temperature')).toHaveAccessibleName(
      'Daily forecast high 72°, low 54°'
    );
  });
});
