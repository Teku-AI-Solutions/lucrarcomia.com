const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.n8nlabz.com.br/', { waitUntil: 'networkidle' });
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img[src*="lovable-uploads"]'))
      .map(img => ({
        src: img.src,
        className: img.className,
        parentStyle: img.parentElement.getAttribute('style')
      }));
  });
  console.log(JSON.stringify(images, null, 2));
  await browser.close();
})();
