const { chromium } = require('playwright');
const path = require('path');
const kiemtra = require('./kiemtra.js');
(async () => {
  const [src, pdf, png] = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2.6 });
  await p.goto('file://' + path.resolve(src), { waitUntil: 'networkidle' });
  try { await p.evaluate(() => document.fonts.ready); } catch {}
  await p.waitForTimeout(700);
  // khổ ngang: nới khung nhìn theo đúng bề rộng trang để ảnh PNG không bị cắt
  const w = await p.evaluate(() => Math.ceil(document.querySelector('.page').getBoundingClientRect().width));
  if (w > 794) { await p.setViewportSize({ width: w, height: 794 }); await p.waitForTimeout(300); }
  const font = await p.evaluate(() => getComputedStyle(document.body).fontFamily.split(',')[0]);
  const rep = await p.evaluate(kiemtra);
  console.log(`font: ${font} | số trang: ${rep.pages} | trống cuối mỗi trang: ${rep.gaps.join('px, ')}px`);
  if (rep.bad.length) { console.log('!! CÓ VẤN ĐỀ:'); rep.bad.slice(0, 12).forEach(x => console.log('   ', x)); }
  else console.log('OK: không khối nào bị cắt chữ hay tràn khung');
  await p.pdf({ path: pdf, format: 'A4', preferCSSPageSize: true, printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  if (png) await p.screenshot({ path: png, fullPage: true });
  await b.close();
  console.log('đã ghi', pdf, png || '');
})();
