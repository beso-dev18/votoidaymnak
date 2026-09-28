// Tự dò cỡ chữ (--s) lớn nhất mà poster không tràn khổ giấy / không sang "tấm thứ 4", rồi ghi thẳng vào file HTML.
// Poster có tờ 2 (data-to2): ở mỗi cỡ chữ, dời dần các khối cuối của tờ 1 sang đầu tờ 2 cho đến khi tờ 1 vừa.
// Dùng: node canhco.js "SP - "*.html
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const kiemtra = require('./kiemtra.js');
const MAX = 1.45;                                       // trần: to hơn nữa thì chữ thô, poster thưa

function xep([s, cho2]) {                              // chạy trong trang; cho2 = được dùng tờ 2
  document.documentElement.style.setProperty('--s', s);
  const f1 = document.querySelector('[data-to1]'), f2 = document.querySelector('[data-to2]');
  if (!f2) return;
  f2.parentElement.style.display = cho2 ? '' : 'none';
  const head2 = f2.firstElementChild;
  while (f2.children.length > 1) f1.appendChild(f2.children[1]);           // dồn hết về tờ 1
  const pr = f1.parentElement.getBoundingClientRect();
  const tran = () => [...f1.children].some(e => { const r = e.getBoundingClientRect(); return r.right > pr.right + 1 || r.bottom > pr.bottom + 1; });
  while (cho2 && tran() && f1.children.length > 1) {
    let e = f1.lastElementChild;
    f2.insertBefore(e, head2.nextSibling);
    const prev = f1.lastElementChild;                                      // không để tiêu đề mục đứng cuối tờ 1
    if (prev && prev.classList.contains('keep')) f2.insertBefore(prev, head2.nextSibling);
  }
}

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1123, height: 794 } });
  for (const f of process.argv.slice(2)) {
    const html0 = fs.readFileSync(f, 'utf8').replace(/<style>:root\{--s:[\d.]+\}<\/style>/, '');
    fs.writeFileSync(f, html0);
    await p.goto('file://' + path.resolve(f), { waitUntil: 'networkidle' });
    try { await p.evaluate(() => document.fonts.ready); } catch {}
    const co2 = html0.includes('data-to2');
    const thu = async (v, c2) => { await p.evaluate(xep, [v, c2]); await p.waitForTimeout(100); return (await p.evaluate(kiemtra)).bad.length === 0; };
    const doTim = async c2 => {
      const tran = c2 ? 1.2 : MAX;                     // có tờ 2 thì không cần chữ quá to
      if (await thu(tran, c2)) return tran;
      let lo = 0.6, hi = tran, tot = null;
      for (let i = 0; i < 9; i++) { const mid = (lo + hi) / 2; if (await thu(mid, c2)) { tot = mid; lo = mid; } else hi = mid; }
      return tot;
    };
    // ưu tiên gói trong 1 tờ nếu chữ vẫn đủ to (≥ 0.9, cỡ poster Hăm da cũ là 0.96); không thì mới dùng tờ 2
    let tot = await doTim(false), dung2 = false;
    if (co2 && (tot === null || tot < 0.9)) { tot = await doTim(true); dung2 = true; }
    if (tot === null) { console.log('  ✗', path.basename(f), '— không vừa kể cả ở cỡ nhỏ nhất'); continue; }
    const s = Math.floor(tot * 100) / 100;
    await thu(s, dung2);
    let html = html0;
    if (co2 && !dung2) html = html.replace(/<div class="page"><div class="flow" data-to2>[\s\S]*?<\/div><i class="fold f1"><\/i><i class="fold f2"><\/i><\/div>/, '');
    if (dung2) {                                        // ghi lại cách chia tờ đã chọn
      const [a, c] = await p.evaluate(() => [document.querySelector('[data-to1]').innerHTML, document.querySelector('[data-to2]').innerHTML]);
      html = html.replace(/(<div class="flow" data-to1>)[\s\S]*?(<\/div><i class="fold f1"><\/i><i class="fold f2"><\/i><\/div><div class="page"><div class="flow" data-to2>)[\s\S]*?(<\/div><i class="fold f1">)/,
                          (m, x, y, z) => x + a + y + c + z);
    }
    fs.writeFileSync(f, html.replace('</head>', `<style>:root{--s:${s}}</style></head>`));
    console.log('  ✓', path.basename(f).padEnd(36), '--s =', s.toFixed(2), dung2 ? '(2 tờ)' : '(1 tờ)');
  }
  await b.close();
})();
