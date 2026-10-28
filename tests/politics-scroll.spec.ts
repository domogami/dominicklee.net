import { expect, test, type Locator, type Page } from '@playwright/test';

test.use({
  viewport: { width: 390, height: 844 },
  hasTouch: true,
  isMobile: true,
  serviceWorkers: 'block',
});

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    // Exercise Safari's native-switch path even in Chromium. A failed policy
    // must create the same invisible overlays that caused the reported bug.
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
  await page.getByRole('button', { name: 'Candidates', exact: true }).tap();
});

async function placeInViewport(control: Locator) {
  // Positioning the fixture is setup only. Scroll behavior below is exercised
  // with browser-generated touch events, never a scripted scroll assertion.
  await control.evaluate((element) =>
    element.scrollIntoView({ block: 'center', behavior: 'instant' })
  );
  await expect(control).toBeVisible();
}

async function touchSwipeUp(page: Page, start: Locator) {
  const box = (await start.boundingBox())!;
  const x = box.x + Math.min(box.width / 2, 160);
  const y = box.y + box.height / 2;
  const before = await page.evaluate(() => scrollY);
  const session = await page.context().newCDPSession(page);
  try {
    // Browser-generated touch scrolling preserves hit testing and avoids a
    // fling continuing into the following disclosure/content assertion.
    await session.send('Input.synthesizeScrollGesture', {
      x,
      y,
      yDistance: -180,
      gestureSourceType: 'touch',
      speed: 450,
      preventFling: true,
    });
    await expect
      .poll(() => page.evaluate(() => scrollY))
      .toBeGreaterThan(before + 50);
  } finally {
    await session.detach();
  }
}

test('judge disclosures retain native hit targets without hidden overlays and keep chevrons inset', async ({
  page,
}) => {
  await expect(page.locator('.politics-app')).toHaveAttribute(
    'data-native-tap',
    'none'
  );
  const proxies = page.locator('.native-tap-target, .dm-native-tap-target');
  await expect(proxies).toHaveCount(0);

  const firstJudge = page.locator('#king-186698');
  const firstSummary = firstJudge.locator(':scope > summary');
  await placeInViewport(firstSummary);
  const summaryBox = (await firstSummary.boundingBox())!;
  const caretBox = (await firstSummary.locator('.dm-chevron').boundingBox())!;
  const titleBox = (await firstSummary.locator(':scope > div').boundingBox())!;
  expect(
    summaryBox.x + summaryBox.width - caretBox.x - caretBox.width
  ).toBeGreaterThanOrEqual(24);
  expect(caretBox.x - titleBox.x - titleBox.width).toBeGreaterThanOrEqual(12);
  expect(
    await firstSummary.evaluate((element) => {
      const box = element.getBoundingClientRect();
      return element.contains(
        document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2)
      );
    })
  ).toBe(true);

  await firstSummary.tap();
  await expect(firstJudge).toHaveAttribute('open');
  await expect(firstJudge.locator('.pg-candidate')).toHaveCount(2);
  await expect(proxies).toHaveCount(0);
  await firstSummary.tap();
  await expect(firstJudge).not.toHaveAttribute('open');

  const secondJudge = page.locator('#king-186699');
  const secondSummary = secondJudge.locator(':scope > summary');
  await placeInViewport(secondSummary);
  await secondSummary.tap();
  await expect(secondJudge).toHaveAttribute('open');
  await expect(proxies).toHaveCount(0);
  // Closed candidate bodies can retain boxes in WebKit. They still must never
  // produce independent fixed controls over this now-expanded judge.
  await expect(
    page.locator('.native-tap-target[data-native-tap-label="Choose Colleen"]')
  ).toHaveCount(0);
  await secondSummary.tap();
  await expect(secondJudge).not.toHaveAttribute('open');
  await expect(proxies).toHaveCount(0);
});

test('native touch drags on an expanded judge header and reading content scroll the page without collapsing it', async ({
  page,
  browserName,
}) => {
  test.skip(
    browserName !== 'chromium',
    'Playwright exposes native touch-move automation through Chromium CDP; WebKit hit-testing is covered separately.'
  );
  const judge = page.locator('#king-186698');
  const summary = judge.locator(':scope > summary');
  await placeInViewport(summary);
  await summary.tap();
  await expect(judge).toHaveAttribute('open');
  await expect(
    page.locator('.native-tap-target, .dm-native-tap-target')
  ).toHaveCount(0);

  await placeInViewport(summary);
  await touchSwipeUp(page, summary);
  await expect(judge).toHaveAttribute('open');

  const reading = judge.locator('.pg-race-context');
  await placeInViewport(reading);
  await touchSwipeUp(page, reading);
  await expect(judge).toHaveAttribute('open');
  await expect(
    page.locator('.native-tap-target, .dm-native-tap-target')
  ).toHaveCount(0);
});
