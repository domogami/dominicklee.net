import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';

// Reuse the actual favicon geometry, so the preview never drifts from the logo.
const favicon = await readFile(
  new URL('../public/favicon.svg', import.meta.url),
  'utf8'
);
const logo = favicon.replace(
  '<svg ',
  '<svg x="400" y="115" width="400" height="400" '
);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <title>Dom Lee's notebook — origami crane on dotted paper</title>
  <defs>
    <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse" x="8" y="11">
      <circle cx="16" cy="16" r="1.8" fill="#718775" opacity="0.65"/>
    </pattern>
  </defs>
  <path fill="#efe7d7" d="M0 0H1200V630H0Z"/>
  <path fill="url(#dots)" d="M0 0H1200V630H0Z"/>
  ${logo}
</svg>
`;
const output = new URL('../public/images/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL('notebook-preview.svg', output), svg);
const browser = await chromium.launch({
  channel: process.env.CI ? undefined : 'chrome',
});
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
  await page.screenshot({
    path: new URL('notebook-preview.png', output).pathname,
  });
} finally {
  await browser.close();
}
console.log(
  'Generated public/images/notebook-preview.svg and notebook-preview.png (1200 × 630).'
);
