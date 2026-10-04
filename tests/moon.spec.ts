import { expect, test } from '@playwright/test';
import { moonPhase } from '../app/weather/moon';
import { weatherFixture } from './weather-fixture';

// Independent published UTC events from the U.S. Naval Observatory:
// https://aa.usno.navy.mil/calculated/moon/phases?date=2026-09-01&nump=8
const events = [
  ['2026-09-11T03:27:00Z', 'New moon', 0, 0],
  ['2026-09-18T20:44:00Z', 'First quarter', 90, 0.5],
  ['2026-09-26T16:49:00Z', 'Full moon', 180, 1],
  ['2026-10-03T13:25:00Z', 'Last quarter', 270, 0.5],
] as const;

test('lunar calculation matches published primary phases', () => {
  for (const [date, name, angle, illumination] of events) {
    const moon = moonPhase(Date.parse(date) / 1000);
    const separation = Math.abs(moon.angle - angle);
    expect(Math.min(separation, 360 - separation)).toBeLessThan(0.02);
    expect(moon.name).toBe(name);
    expect(Math.abs(moon.fraction - illumination)).toBeLessThan(0.003);
  }
  const before = moonPhase(Date.parse('2026-09-22T00:00:00Z') / 1000);
  const after = moonPhase(Date.parse('2026-09-29T00:00:00Z') / 1000);
  expect(before.name).toBe('Waxing gibbous');
  expect(after.name).toBe('Waning gibbous');
  expect(before.waxing).toBe(true);
  expect(after.waxing).toBe(false);
});

test.describe('phase-correct moon drawing', () => {
  test.use({ serviceWorkers: 'block', reducedMotion: 'reduce' });
  for (const [date, name, , illumination] of events) {
    test(`night sky renders ${name} with the correct illuminated area`, async ({
      page,
    }, info) => {
      const data = weatherFixture();
      data.days = [
        {
          ...data.days[0],
          time: Date.parse(date) / 1000,
          sunrise: 0,
          sunset: 0,
        },
      ];
      data.hours = [
        { ...data.hours[0], time: Date.parse(date) / 1000, day: false },
      ];
      data.current.day = false;
      data.current.code = 0;
      data.fetchedAt = Date.parse(date);
      await page.clock.setFixedTime(Date.parse(date));
      await page.route('**/weather/api?*', (r) => r.fulfill({ json: data }));
      await page.route('**/weather/alerts?*', (r) =>
        r.fulfill({ json: { status: 'ok', alerts: [] } })
      );
      await page.setViewportSize({ width: 390, height: 700 });
      await page.goto('/weather/');
      const moon = page.locator('.weather-sketch .sketch-moon');
      await expect(moon).toHaveAttribute('data-phase', name);
      const fraction = Number(await moon.getAttribute('data-illumination'));
      expect(Math.abs(fraction - illumination)).toBeLessThan(0.003);
      const shape = await page
        .locator('.weather-sketch .moon-color')
        .getAttribute('d');
      const area = await page.evaluate((d) => {
        const ctx = document.createElement('canvas').getContext('2d')!;
        const path = new Path2D(d!);
        let inside = 0;
        for (let y = 25.5; y < 175; y++)
          for (let x = 25.5; x < 175; x++)
            if (ctx.isPointInPath(path, x, y)) inside++;
        return inside / (Math.PI * 75 ** 2);
      }, shape);
      expect(Math.abs(area - fraction)).toBeLessThan(0.005);
      await expect(page.locator('.weather-sun-note')).toHaveText(name);
      await page.getByRole('tab', { name: 'Details', exact: true }).click();
      await expect(page.locator('.moon-note')).toContainText(name);
      await expect(page.locator('.moon-note')).toContainText(
        `${Math.round(fraction * 100)}%`
      );
      await page.getByRole('tab', { name: 'Now', exact: true }).click();
      await page.screenshot({
        path: info.outputPath(`moon-${name.replaceAll(' ', '-')}.png`),
        animations: 'disabled',
      });
    });
  }

  test('waning flips the lit side, southern places mirror it, and an hourly preview uses its own time', async ({
    page,
  }) => {
    const date = Date.parse('2026-10-03T13:00:00Z');
    const data = weatherFixture();
    data.fetchedAt = date;
    data.current.code = 0;
    data.current.day = false;
    data.days = [{ ...data.days[0], time: date / 1000, sunrise: 0, sunset: 0 }];
    data.hours = [
      { ...data.hours[0], time: date / 1000 + 22 * 3600, code: 0, day: false },
    ];
    await page.clock.setFixedTime(date);
    await page.route('**/weather/api?*', (r) => r.fulfill({ json: data }));
    await page.route('**/weather/alerts?*', (r) =>
      r.fulfill({ json: { status: 'ok', alerts: [] } })
    );
    await page.goto('/weather/');
    const moon = page.locator('.weather-sketch .sketch-moon');
    await expect(moon).toHaveAttribute('data-lit-side', 'left');
    await expect(moon).toHaveAttribute('data-phase', 'Last quarter');
    await page.getByRole('tab', { name: 'Hours', exact: true }).click();
    await expect(
      page.locator('.forecast-hour-items .sketch-moon')
    ).toHaveAttribute('data-phase', 'Waning crescent');
    await page.locator('.forecast-hour-items button').click();
    await page.getByRole('button', { name: 'See this sky' }).click();
    await expect(moon).toHaveAttribute('data-phase', 'Waning crescent');
    await page.route('**/weather/search?*', (r) =>
      r.fulfill({
        json: {
          results: [
            {
              name: 'Sydney',
              region: 'NSW',
              country: 'AU',
              latitude: -33.869,
              longitude: 151.209,
            },
          ],
        },
      })
    );
    await page.getByRole('button', { name: /Change place/ }).click();
    await page.getByRole('searchbox').fill('Sydney');
    await page.getByRole('button', { name: /Sydney NSW/ }).click();
    await expect(moon).toHaveAttribute('data-lit-side', 'right');
    await expect(moon).toHaveAttribute('data-phase', 'Last quarter');
  });
});
