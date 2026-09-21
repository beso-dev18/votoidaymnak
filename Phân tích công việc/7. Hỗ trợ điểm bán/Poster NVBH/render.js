const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const src = process.argv[2], pdf = process.argv[3], png = process.argv[4];
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2.6 });
  await p.goto('file://' + path.resolve(src), { waitUntil: 'networkidle' });
  try { await p.evaluate(() => document.fonts.ready); } catch {}
  await p.waitForTimeout(800);
  // font thật sự dùng là gì
  const font = await p.evaluate(() => getComputedStyle(document.body).fontFamily);
  // kiểm tra tràn thật: mọi phần tử con có bị cắt không, và có gì vượt khỏi khung trang không
  const rep = await p.evaluate(() => {
    const page = document.querySelector('.page');
    const pr = page.getBoundingClientRect();
    const bad = [];
    document.querySelectorAll('.page *').forEach(el => {
      if (el.scrollHeight > el.clientHeight + 1 && el.clientHeight > 0)
        bad.push(['CẮT NỘI DUNG', el.className || el.tagName, el.clientHeight, el.scrollHeight]);
      const r = el.getBoundingClientRect();
      if (r.height > 0 && (r.bottom > pr.bottom + 1 || r.right > pr.right + 1))
        bad.push(['VƯỢT KHUNG', el.className || el.tagName, Math.round(r.bottom - pr.bottom)]);
    });
    return { h: pr.height, bad };
  });
  console.log('font:', font, '| .page cao:', Math.round(rep.h), 'px');
  if (rep.bad.length) { console.log('!! CÓ VẤN ĐỀ:'); rep.bad.forEach(b => console.log('   ', b.join(' | '))); }
  else console.log('OK: không khối nào bị cắt hay vượt khung');
  await p.pdf({ path: pdf, format: 'A4', printBackground: true, margin: { top:0,right:0,bottom:0,left:0 } });
  await p.screenshot({ path: png, fullPage: true });
  await b.close();
  console.log('đã ghi', pdf, png);
})();
