// Dựng PDF (A4) + PNG từ file HTML thư cảm ơn.
// node render.js                → dựng tất cả file .html trong thư mục
// node render.js "<tên file>"   → chỉ dựng file đó (không cần đuôi .html)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  let ds = process.argv.slice(2).map(t => t.replace(/\.html$/, ''));
  if (!ds.length) ds = fs.readdirSync(__dirname).filter(f => f.endsWith('.html')).map(f => f.slice(0, -5));
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const ten of ds) {
    const p = await b.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 3 });
    await p.goto('file://' + path.resolve(__dirname, ten + '.html'), { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    // báo lỗi nếu có chữ tràn ra ngoài trang
    const tran = await p.evaluate(() => [...document.querySelectorAll('.page *:not(svg):not(svg *)')]
      .filter(e => { const r = e.getBoundingClientRect(); return r.width && (r.bottom > 1123 || r.right > 794); })
      .map(e => e.className || e.tagName));
    const kc = await p.evaluate(() => {
      const m = document.querySelector('main'), k = document.querySelector('.ky');
      return m && k ? Math.round(k.getBoundingClientRect().top - m.getBoundingClientRect().bottom) : null;
    });
    console.log(ten, tran.length ? '!! tràn: ' + tran.join(', ') : 'OK', '| khoảng cách thân thư → chữ ký:', kc, 'px');
    await p.pdf({ path: path.join(__dirname, ten + '.pdf'), format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
    await p.screenshot({ path: path.join(__dirname, ten + '.png'), clip: { x: 0, y: 0, width: 794, height: 1123 } });
    await p.close();
  }
  await b.close();
})();
