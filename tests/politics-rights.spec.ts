import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    // Also exercise Safari's switch-proxy eligibility on Chromium projects.
    Object.defineProperty(navigator, 'vibrate', {
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(HTMLInputElement.prototype, 'switch', {
      configurable: true,
      get() {
        return this.hasAttribute('switch');
      },
    });
  });
  await page.goto('/politics/');
  await expect(page.getByRole('status')).toContainText('Saved on this browser');
});

test('school-rights comparison keeps source links beside both versions and distinguishes retained protections', async ({
  page,
}) => {
  const comparison = page.locator('#il26-001-comparison');
  await expect(
    comparison.getByRole('heading', {
      name: 'What gets stronger or weaker?',
      exact: true,
    })
  ).toBeVisible();
  await expect(comparison).toContainText('No keeps current law.');
  await expect(comparison.locator('.pg-comparison-legend')).toContainText(
    'particular right or safeguard'
  );
  await expect(
    comparison.locator('.pg-comparison-clarification')
  ).toContainText('deemed');
  const rows = comparison.locator('.pg-change-row');
  expect(await rows.count()).toBeGreaterThanOrEqual(8);
  for (const direction of ['stronger', 'weaker', 'mixed', 'unchanged']) {
    expect(
      await comparison.locator(`[data-direction="${direction}"]`).count()
    ).toBeGreaterThan(0);
  }
  for (const row of await rows.all()) {
    await expect(row).toBeVisible();
    for (const column of ['.pg-change-current', '.pg-change-proposed']) {
      const cell = row.locator(column);
      expect(await cell.locator('a').count()).toBeGreaterThan(0);
      for (const link of await cell.locator('a').all()) {
        await expect(link).toHaveAttribute('href', /^https:\/\//);
        await expect(link).toHaveAttribute('rel', /noopener/);
        await expect(link.locator('svg')).toHaveCount(1);
      }
    }
  }
  const current = rows.first().locator('.pg-change-current');
  const proposed = rows.first().locator('.pg-change-proposed');
  const currentBox = (await current.boundingBox())!;
  const proposedBox = (await proposed.boundingBox())!;
  if ((page.viewportSize()?.width ?? 0) > 700) {
    expect(Math.abs(currentBox.y - proposedBox.y)).toBeLessThanOrEqual(1);
    expect(proposedBox.x).toBeGreaterThan(currentBox.x + currentBox.width - 1);
  } else {
    expect(Math.abs(currentBox.x - proposedBox.x)).toBeLessThanOrEqual(1);
    expect(proposedBox.y).toBeGreaterThanOrEqual(
      currentBox.y + currentBox.height - 1
    );
  }
  await page.setViewportSize({ width: 320, height: 800 });
  await expect(comparison).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth
    )
  ).toBeLessThanOrEqual(1);
  expect(
    await comparison.evaluate((section) =>
      [...section.querySelectorAll<HTMLElement>('*')].some((element) => {
        const style = getComputedStyle(element);
        return (
          ['auto', 'scroll'].includes(style.overflowY) &&
          element.scrollHeight > element.clientHeight + 1
        );
      })
    )
  ).toBe(false);
  await expect(
    page.locator('.native-tap-target, .dm-native-tap-target')
  ).toHaveCount(0);
});

test('a comparison annotation stays attached to its topic after reload', async ({
  page,
}) => {
  const row = page.locator('#il26-001-comparison .pg-change-row').first();
  const topic = await row.locator('h4').innerText();
  const changeId = await row.getAttribute('data-change-id');
  const text = 'Re-read these source sections before deciding.';
  await row
    .getByRole('button', { name: `Annotate IL26-001: ${topic}` })
    .click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Your annotation', { exact: true }).fill(text);
  await dialog.getByRole('button', { name: 'Done', exact: true }).click();
  await page.reload();
  await expect(row.locator('.pg-note-preview')).toHaveText(text);
  await expect(
    row.getByRole('button', { name: `Annotate IL26-001: ${topic}` })
  ).toContainText('Note saved');
  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('dom-politics:2026-general:v1')!)
  );
  expect(saved.notes[`il26-001:change:${changeId}`]).toBe(text);
  await expect(
    page.locator('.native-tap-target, .dm-native-tap-target')
  ).toHaveCount(0);
});
