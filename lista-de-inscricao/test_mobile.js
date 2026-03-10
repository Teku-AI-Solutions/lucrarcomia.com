const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
      ...devices['iPhone 12'] // Set viewport to mobile size
  });
  const page = await context.newPage();
  await page.goto('http://localhost:8000');
  await page.waitForTimeout(2000); // Give JS time to plot nodes
  await page.screenshot({path: '/Users/josielledasilva/.gemini/antigravity/brain/7db2a6eb-61a2-4dee-82a1-bcc5cf33424c/mobile_responsive_check.png', fullPage: true});
  await browser.close();
})();
