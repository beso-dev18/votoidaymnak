// Dựng PDF (A4) + PNG từ file HTML thư cảm ơn: node render.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const ten = 'Thu cam on 10 nam - thiet ke moi';
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 3 });
  await p.goto('file://' + path.resolve(__dirname, ten + '.html'), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const tran = await p.evaluate(() => {
    const m = document.querySelector('main').getBoundingClientRect(), k = document.querySelector('.ky').getBoundingClientRect();
    return { mainBottom: Math.round(m.bottom), kyTop: Math.round(k.top), kyBottom: Math.round(k.bottom) };
  });
  console.log(tran);
  await p.pdf({ path: path.join(__dirname, ten + '.pdf'), format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await p.screenshot({ path: path.join(__dirname, ten + '.png'), clip: { x: 0, y: 0, width: 794, height: 1123 } });
  await b.close();
})();
