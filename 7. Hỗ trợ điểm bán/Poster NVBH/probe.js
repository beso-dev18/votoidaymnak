const { chromium } = require('playwright');
const path = require('path');
const kiemtra = require('./kiemtra.js');
(async () => {
  const src = path.resolve(process.argv[2]);
  const list = (process.argv[3] || '0.86,0.90,0.94,0.98,1.00,1.04,1.08').split(',').map(Number);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 794, height: 1123 } });
  await p.goto('file://' + src, { waitUntil: 'networkidle' });
  try { await p.evaluate(() => document.fonts.ready); } catch {}
  for (const s of list) {
    await p.evaluate(v => document.documentElement.style.setProperty('--s', v), s);
    await p.waitForTimeout(260);
    const r = await p.evaluate(kiemtra);
    console.log(`  --s=${s.toFixed(2)}  lỗi: ${String(r.bad.length).padStart(3)}  | trống cuối mỗi trang: ${r.gaps.join('px, ')}px`);
  }
  await b.close();
})();
