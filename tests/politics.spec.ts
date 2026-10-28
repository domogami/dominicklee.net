import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';
const key = 'dom-politics:2026-general:v1';
test('district scope, complete default profiles, dated social statements, search and source links', async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/politics/');
  await expect(
    page.getByRole('heading', { name: 'A little research. A considered vote.' })
  ).toBeVisible();
  await expect(page.locator('#king-186953')).toBeVisible();
  await expect(page.locator('#king-186955')).toHaveCount(0);
  await expect(page.locator('.pg-race')).toHaveCount(27);
  await expect(page.locator('.pg-candidate')).toHaveCount(37);
  await expect(page.locator('.pg-measure')).toHaveCount(4);
  await expect(
    page.locator('.pg-coverage').filter({ hasText: 'profile research pending' })
  ).toHaveCount(0);
  await expect(page.getByText('Prefers Nonpartisan Party')).toHaveCount(0);
  await expect(
    page.locator('.pg-fact-date').filter({ hasText: '2026-09-12' })
  ).toBeVisible();
  await expect(
    page
      .locator(
        'a[href="https://x.com/PramilaJayapal/status/2098819163603001658"]'
      )
      .first()
  ).toHaveAttribute('rel', /noreferrer/);
  await page.getByLabel('Find a person or measure').fill('Sheth');
  await expect(page.locator('.pg-race')).toHaveCount(1);
  await page.getByLabel('Find a person or measure').fill('');
  await page.getByLabel('Area to browse').selectOption('king-county');
  await expect(page.locator('.pg-race')).toHaveCount(97);
  await expect(page.locator('.pg-candidate')).toHaveCount(153);
  await page.getByLabel('Area to browse').selectOption('queen-anne');
  const widths = await page.evaluate(() => ({
    client: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
  await expect(page.locator('.pg-ballot-sketch')).toBeVisible();
  await page.screenshot({
    path: `previews/politics-${info.project.name}.png`,
    fullPage: false,
  });
  const candidate = page.locator('#king-186953');
  await candidate.scrollIntoViewIfNeeded();
  await page.screenshot({
    path: `previews/politics-comparison-${info.project.name}.png`,
    fullPage: false,
  });
  expect(errors).toEqual([]);
});
test('choice changes, candidate and fact annotations survive reload, and export/import round trip', async ({
  page,
}, info) => {
  await page.goto('/politics/');
  const race = page.locator('#king-186953');
  await race
    .getByRole('button', { name: 'Choose Pramila', exact: true })
    .click();
  await expect(
    race.getByRole('button', { name: '✓ My choice', exact: true })
  ).toHaveAttribute('aria-pressed', 'true');
  await race.getByRole('button', { name: 'Choose Nirav', exact: true }).click();
  await expect(
    race.getByRole('button', { name: '✓ My choice', exact: true })
  ).toHaveCount(1);
  const opener = race.getByRole('button', {
    name: 'Annotate Nirav Sheth',
    exact: true,
  });
  await opener.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const annotation = 'Check the housing policy sources before deciding.';
  await dialog
    .getByLabel('Your annotation', { exact: true })
    .pressSequentially(annotation, { delay: 5 });
  await expect(
    dialog.getByLabel('Your annotation', { exact: true })
  ).toBeFocused();
  await dialog.getByRole('button', { name: 'Done', exact: true }).click();
  await expect(opener).toBeFocused();
  await race.locator('.pg-inline-note').first().click();
  await page
    .getByRole('dialog')
    .getByLabel('Your annotation', { exact: true })
    .fill('Follow up on this specific fact.');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.reload();
  await expect(race.getByText(annotation)).toBeVisible();
  await expect(
    race.getByRole('button', { name: '✓ My choice', exact: true })
  ).toHaveCount(1);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export backup' }).click();
  const download = await downloadPromise;
  const backup = JSON.parse(
    await fs.readFile((await download.path())!, 'utf8')
  );
  expect(backup.choices['king-186953']).toBe('1651901');
  expect(Object.values(backup.notes)).toContain(annotation);
  await page
    .getByRole('button', { name: 'Clear notebook', exact: true })
    .click();
  await page
    .getByRole('dialog')
    .getByRole('button', { name: 'Clear choices and notes' })
    .click();
  await expect(
    race.getByRole('button', { name: '✓ My choice', exact: true })
  ).toHaveCount(0);
  await page.getByLabel('Import notebook backup file').setInputFiles({
    name: 'notebook.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify(backup)),
  });
  await expect(
    page.getByRole('dialog', { name: 'Replace this notebook?' })
  ).toContainText('2 annotations');
  await page
    .getByRole('dialog', { name: 'Replace this notebook?' })
    .getByRole('button', { name: 'Replace with backup' })
    .click();
  await expect(race.getByText(annotation)).toBeVisible();
  if (info.project.name === 'mobile') {
    const nav = page.getByRole('button', { name: 'Index', exact: false });
    await nav.click();
    await expect(
      page.getByRole('navigation', { name: 'Politics index' })
    ).toBeVisible();
  }
});
test('measure choice, keyboard tab selection, themes and readable 320px layout', async ({
  page,
}, info) => {
  await page.goto('/politics/');
  const measure = page.locator('#il26-638');
  await measure.getByRole('radio', { name: 'No', exact: true }).check();
  await expect(
    measure.getByRole('radio', { name: 'No', exact: true })
  ).toBeChecked();
  await page.reload();
  await expect(
    measure.getByRole('radio', { name: 'No', exact: true })
  ).toBeChecked();
  const method = page.getByRole('tab', { name: 'Sources & method' });
  await method.focus();
  await page.keyboard.press('Enter');
  await expect(
    page.getByRole('heading', { name: 'Read the receipts.' })
  ).toBeVisible();
  await page.keyboard.press('ArrowLeft');
  await expect(
    page.getByRole('tab', { name: '2026 General election' })
  ).toHaveAttribute('aria-selected', 'true');
  if (info.project.name === 'mobile')
    await page.getByRole('button', { name: 'Index', exact: false }).click();
  await page.getByRole('button', { name: 'Dark theme', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Light theme', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Hybrid theme', exact: true }).click();
  await page.setViewportSize({ width: 320, height: 800 });
  const widths = await page.evaluate(() => ({
    client: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
});
test('unavailable storage remains usable and invalid backups do not overwrite choices', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = function () {
      throw new Error('Test storage blocked');
    };
  });
  await page.goto('/politics/');
  const race = page.locator('#king-186953');
  await race
    .getByRole('button', { name: 'Choose Pramila', exact: true })
    .click();
  await expect(page.getByRole('status')).toContainText('Could not save');
  await page.getByLabel('Import notebook backup file').setInputFiles({
    name: 'invalid.json',
    mimeType: 'application/json',
    buffer: Buffer.from(
      '{"version":1,"election":"2026-general","choices":{"king-186953":"fake"},"notes":{}}'
    ),
  });
  await expect(page.getByRole('alert')).toContainText('unknown candidate');
  await expect(
    race.getByRole('button', { name: '✓ My choice', exact: true })
  ).toHaveCount(1);
});
