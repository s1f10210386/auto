import { chromium } from'playwright';
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.youtube.com/
  await page.goto('https://www.youtube.com/');
  // Click [placeholder="検索"]
  await page.locator('[placeholder="検索"]').click();
  // Click [placeholder="検索"]
  await page.locator('[placeholder="検索"]').click();
  // Fill [placeholder="検索"]
  await page.locator('[placeholder="検索"]').fill('nobisiro');
  // Press Enter
  await page.locator('[placeholder="検索"]').press('Enter');
  // assert.equal(page.url(), 'https://www.youtube.com/results?search_query=nobisiro');
  // Click text=Creepy Nuts / のびしろ【MV】 >> nth=0
  await page.locator('text=Creepy Nuts / のびしろ【MV】').first().click();
  // assert.equal(page.url(), 'https://www.youtube.com/watch?v=7F_un08wc5A');
  // Click button:has-text("広告をスキップ")
  await page.locator('button:has-text("広告をスキップ")').click();
  // Click video
  await page.locator('video').click();
  // ---------------------
  await context.close();
  await browser.close();
})();