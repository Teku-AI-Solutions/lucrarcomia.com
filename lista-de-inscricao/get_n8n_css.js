const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://n8n.io/', { waitUntil: 'networkidle' });
  const styles = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    const body = getComputedStyle(document.body);
    const btn = document.querySelector('a.button, button') ? getComputedStyle(document.querySelector('a.button, button')) : null;
    return {
      background: body.backgroundColor,
      color: body.color,
      fontFamily: body.fontFamily,
      btnBackground: btn ? btn.backgroundColor : null,
      btnColor: btn ? btn.color : null,
      primaryColor: root.getPropertyValue('--color-primary').trim(),
      secondaryColor: root.getPropertyValue('--color-secondary').trim(),
      brandColor: root.getPropertyValue('--brand-color').trim(),
      bgColors: root.getPropertyValue('--bg-color').trim()
    };
  });
  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
})();
