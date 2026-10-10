import { test, expect } from '@playwright/test';
import { sampleCsv } from '../app/flight/model';
import { readFileSync } from 'node:fs';

test('CSV upload, GPS weather correction, segment inspection and export work together', async ({
  page,
}) => {
  await page.goto('/flight-performance/');
  await expect(
    page.getByRole('heading', { name: 'Know your airplane.' })
  ).toBeVisible();
  await page.getByLabel('Upload flight CSV').setInputFiles({
    name: 'gps-flight.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from(sampleCsv(true)),
  });
  await expect(page.getByText('gps-flight.csv', { exact: true })).toBeVisible();
  const metrics = page.locator('.fp-metric');
  await expect(metrics.nth(0).locator('strong')).toHaveText('—');
  await expect(metrics.nth(1).locator('strong')).toHaveText('516');
  await expect(metrics.nth(2).locator('strong')).toHaveText('—');
  await page.getByText('Manual winds aloft & OAT', { exact: true }).click();
  await page.getByLabel('Wind speed', { exact: true }).fill('12');
  await page.getByLabel('Wind FROM (true)', { exact: true }).fill('45');
  await expect(metrics.nth(0).locator('strong')).not.toHaveText('—');
  await expect(metrics.nth(2).locator('strong')).toHaveText('—');
  await expect(page.locator('.fp-worked')).toContainText('540.0 ft/min');
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export results CSV' }).click(),
  ]);
  expect(download.suggestedFilename()).toBe('flight-performance-segments.csv');
  await page.getByRole('button', { name: 'Clear flight ×' }).click();
  await expect(page.locator('.fp-worked')).toHaveCount(0);
});
test('historical weather requests contain only selected points', async ({
  page,
}) => {
  let body: {
    points: {
      id: string;
      latitude: number;
      longitude: number;
      time: number;
      altitude: number;
    }[];
  };
  await page.route('**/flight-performance/weather', async (route) => {
    body = route.request().postDataJSON();
    await route.fulfill({
      json: {
        matches: body.points.map((p) => ({
          ...p,
          source: 'model',
          windSpeed: 10,
          windDirection: 45,
          oat: 5,
          pressure: 85000,
        })),
        errors: [],
        provider: 'Fixture winds aloft',
      },
    });
  });
  await page.goto('/flight-performance/');
  await page.getByRole('button', { name: 'Try a GPS-only example' }).click();
  await page
    .getByRole('button', { name: 'Fetch historical winds aloft' })
    .click();
  await expect(
    page.getByRole('status', { name: 'Historical weather lookup' })
  ).toContainText('matched');
  expect(body!.points.length).toBeLessThanOrEqual(12);
  expect(Object.keys(body!.points[0]).sort()).toEqual([
    'altitude',
    'id',
    'latitude',
    'longitude',
    'time',
  ]);
  await expect(
    page.locator('.fp-metric').nth(0).locator('strong')
  ).not.toHaveText('—');
  await page.getByLabel('Chart altitude axis').selectOption('pressureAltitude');
  await expect(page.locator('.fp-chart').first().locator('svg')).toBeVisible();
});
test('turning departure remains visible with a quality flag, method comparison and export provenance', async ({
  page,
}) => {
  const csv = [
    'time,altitude (ft),groundspeed (kt),track (deg)',
    ...Array.from({ length: 73 }, (_, i) => {
      const t = i * 5;
      const altitude =
        t <= 120 ? 500 + 8 * t : t <= 240 ? 1460 : 1460 + (t - 240) * 9;
      return [
        t,
        altitude,
        t <= 240 ? 70 : 55 + (t - 240) * 0.2,
        t <= 240 ? 90 : 90 + (t - 240) * 0.5,
      ].join(',');
    }),
  ].join('\n');
  await page.goto('/flight-performance/');
  await page.getByLabel('Upload flight CSV').setInputFiles({
    name: 'two-departures.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from(csv),
  });
  await page.getByRole('button', { name: 'S03 climb', exact: true }).click();
  await expect(page.locator('.fp-worked')).toContainText(
    'Observed climb · variable conditions.'
  );
  await expect(page.locator('.fp-worked')).toContainText('540.0 ft/min');
  await expect(page.locator('.fp-worked')).toContainText(
    'Endpoint calculation'
  );
  await expect(page.locator('.fp-worked')).toContainText('rolling regressions');
  await expect(page.locator('.fp-worked')).toContainText(
    'Turning: track varies'
  );
  await expect(page.locator('.fp-dot.climb.variable')).toHaveCount(1);
  await expect(page.locator('.fp-metric').nth(1)).toContainText(
    '1 with variable conditions'
  );
  await expect(page.locator('.fp-metric').nth(2).locator('strong')).toHaveText(
    '—'
  );
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export results CSV' }).click(),
  ]);
  const exported = readFileSync((await download.path())!, 'utf8');
  expect(exported).toContain('flight_stability');
  expect(exported).toContain('endpoint_climb_rate_fpm');
  expect(exported).toContain('"S03","climb","variable","true"');
});
test('small screens retain file upload, readable report and no page overflow', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/flight-performance/');
  await page.getByRole('button', { name: 'Try an instrument log' }).click();
  await expect(
    page.locator('.fp-metric').nth(2).locator('strong')
  ).not.toHaveText('—');
  await expect(
    page.getByRole('button', { name: 'Upload CSV', exact: false }).first()
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth
    )
  ).toBe(true);
  await page.screenshot({
    path: '/tmp/flight-performance-mobile.png',
    fullPage: true,
  });
});

test('private user ForeFlight log renders without posting flight records', async ({
  page,
}) => {
  test.skip(
    !process.env.FLIGHT_TEST_CSV,
    'Optional private local flight fixture.'
  );
  const posts: string[] = [];
  page.on('request', (r) => {
    if (r.method() === 'POST') posts.push(r.url());
  });
  await page.goto('/flight-performance/');
  await page
    .getByLabel('Upload flight CSV')
    .setInputFiles(process.env.FLIGHT_TEST_CSV!);
  await expect(page.locator('.fp-profile-stats')).toContainText(
    'accepted windows'
  );
  await expect(
    page.locator('.fp-metric').nth(1).locator('strong')
  ).not.toHaveText('—');
  expect(posts).toEqual([]);
  await page.getByRole('button', { name: 'S33 climb', exact: true }).click();
  await expect(page.locator('.fp-worked')).toContainText('602.6 ft/min');
  await expect(page.locator('.fp-worked')).toContainText('610.5 ft/min');
  await expect(page.locator('.fp-worked')).toContainText(
    'Observed climb · variable conditions.'
  );
  if (process.env.FLIGHT_TEST_WEATHER) {
    const weather = JSON.parse(
      readFileSync(process.env.FLIGHT_TEST_WEATHER, 'utf8')
    );
    await page.route('**/flight-performance/weather', (route) =>
      route.fulfill({ json: weather })
    );
    await page
      .getByRole('button', { name: 'Fetch historical winds aloft' })
      .click();
    await expect(
      page.locator('.fp-metric').nth(0).locator('strong')
    ).toHaveText('91');
    await page.getByRole('button', { name: 'S20 cruise', exact: true }).click();
    await expect(page.locator('.fp-worked')).toContainText('GPS + model wind');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export results CSV' }).click(),
    ]);
    await download.saveAs('/tmp/cessna-152-performance-results.csv');
  }
  await page.screenshot({
    path: '/tmp/flight-performance-desktop.png',
    fullPage: true,
  });
  await page.setViewportSize({ width: 1280, height: 1900 });
  await page
    .getByRole('heading', { name: 'Know your airplane.' })
    .scrollIntoViewIfNeeded();
  await page.screenshot({
    path: '/tmp/flight-performance-preview.png',
    fullPage: false,
  });
});

test('changing the flight discards an in-flight weather response', async ({
  page,
}) => {
  let release: () => void;
  const held = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route('**/flight-performance/weather', async (route) => {
    const body = route.request().postDataJSON();
    await held;
    await route.fulfill({
      json: {
        matches: body.points.map((p) => ({
          ...p,
          source: 'model',
          windSpeed: 10,
          windDirection: 45,
        })),
        errors: [],
        provider: 'Old flight weather',
      },
    });
  });
  await page.goto('/flight-performance/');
  await page.getByRole('button', { name: 'Try a GPS-only example' }).click();
  await page
    .getByRole('button', { name: 'Fetch historical winds aloft' })
    .click();
  await expect(
    page.getByRole('status', { name: 'Historical weather lookup' })
  ).toContainText('Matching');
  await page.getByRole('button', { name: 'Clear flight ×' }).click();
  release!();
  await expect(
    page.getByRole('status', { name: 'Historical weather lookup' })
  ).toHaveCount(0);
  await expect(page.locator('.fp-metric').first().locator('strong')).toHaveText(
    '—'
  );
});
test('weather endpoint rejects malformed or overlarge batches before external lookup', async ({
  request,
}) => {
  expect((await request.get('/flight-performance/weather')).status()).toBe(405);
  expect(
    (
      await request.post('/flight-performance/weather', {
        data: { points: [{ id: 'bad', latitude: 91 }] },
      })
    ).status()
  ).toBe(400);
  expect(
    (
      await request.post('/flight-performance/weather', {
        data: { points: Array(13).fill({}) },
      })
    ).status()
  ).toBe(400);
});
