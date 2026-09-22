// Tự dò cỡ chữ lớn nhất mà trang không bị tràn, rồi ghi thẳng vào file HTML.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const kiemtra = require('../Poster NVBH/kiemtra.js');

(async () => {
  const files = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1123, height: 794 } });

  for (const f of files) {
    await p.goto('file://' + path.resolve(f), { waitUntil: 'networkidle' });
    try { await p.evaluate(() => document.fonts.ready); } catch {}
    let lo = 0.62, hi = 1.12, tot = null;
    for (let i = 0; i < 9; i++) {                       // chia đôi 9 lần ⇒ sai số ~0.001
      const mid = (lo + hi) / 2;
      await p.evaluate(v => document.documentElement.style.setProperty('--s', v), mid);
      await p.waitForTimeout(140);
      const r = await p.evaluate(kiemtra);
      if (r.bad.length === 0) { tot = mid; lo = mid; } else hi = mid;
    }
    if (tot === null) { console.log('  ✗', path.basename(f), '— không vừa kể cả ở cỡ nhỏ nhất'); continue; }
    const s = Math.floor(tot * 100) / 100;              // làm tròn xuống cho chắc
    let html = fs.readFileSync(f, 'utf8');
    html = html.replace(/<style>:root\{--s:[\d.]+\}<\/style>/, '');
    html = html.replace('</head>', `<style>:root{--s:${s}}</style></head>`);
    fs.writeFileSync(f, html);
    console.log('  ✓', path.basename(f).padEnd(34), '--s =', s.toFixed(2));
  }
  await b.close();
})();
