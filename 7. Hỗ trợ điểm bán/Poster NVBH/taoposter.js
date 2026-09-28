// Sinh poster NVBH THEO SẢN PHẨM (A4 ngang, in 1 mặt, gấp chữ Z thành 3 tấm 99mm) từ
// ../Sellout kit/Theo sản phẩm/dulieu.js — cùng nguồn với bản Word, sửa dữ liệu ở đó rồi chạy lại:
//   node taoposter.js            → sinh "SP - 0 - Bang tra nhanh combo.html" và "SP - 1..7 - <tên>.html"
//   node canhco.js "SP - "*.html → tự dò cỡ chữ lớn nhất không tràn
//   node render.js "SP - 1 - Tam goi Elemis.html" "SP - 1 - Tam goi Elemis.pdf" "SP - 1 - Tam goi Elemis.png"
const fs = require('fs');
const { SP, COMBO, THU_TU, dong, tongGia, qcTinh } = require('../Sellout kit/Theo sản phẩm/dulieu.js');

const TEN_FILE = { tamgoi: 'Tam goi Elemis', kem: 'Kem boi Elemis', dau: 'Dau massage Oriky', gold: 'Elemis Gold',
                   xit: 'Xit muoi Elemis', bot: 'Bot rua tay Elemis', gac: 'Gac ro luoi Elemis' };
// logo Elemis trong assets tách từ hộp tắm gội (có chữ "Tắm gội trẻ em") → chỉ dùng cho poster tắm gội
const LOGO = k => k === 'tamgoi' ? 'assets/logo-elemis-cat.png' : null;


const head = (title, css) => `<!DOCTYPE html>
<html lang="vi"><head><meta charset="utf-8"><title>${title}</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="_chung.css">
<link rel="stylesheet" href="${css}">
<!-- FILE SINH TỰ ĐỘNG bởi taoposter.js — đừng sửa tay, sửa ../Sellout kit/Theo sản phẩm/dulieu.js rồi chạy lại -->
</head><body>`;

const chips = k => SP[k].gia.map(([q, g]) => `<span>${q}<b>${dong(g)}</b></span>`).join('');
const thumbs = ks => ks.map(k => `<img src="assets/${SP[k].anh}" alt="">`).join('<i>+</i>');

function poster(k, so) {
  const s = SP[k];
  const out = [];
  // ---- bìa ----
  out.push(`<div class="cover">
    <div class="logos">${LOGO(k) ? `<div class="chip"><img src="${LOGO(k)}" alt=""></div>` : '<span></span>'}<div class="chip"><img src="assets/logo-dkxanh.png" alt="Dược Khoa Xanh"></div></div>
    <h1>${s.ten.toUpperCase()}</h1>
    <div class="hero"><div class="ph"><img src="assets/${s.anh}" alt=""></div>
      <div><div class="pchips">${chips(k)}</div><span class="age">${s.tuoi}</span></div></div>
  </div>`);
  // ---- giải quyết vấn đề gì ----
  const vd = s.combo.length ? s.combo.map(id => COMBO[id].vande) : [s.rieng.vande];
  out.push(`<div class="blk"><div class="sec">GIẢI QUYẾT VẤN ĐỀ GÌ CHO BÉ</div><div class="vds">${vd.map(v => `<span>${v}</span>`).join('')}</div></div>`);
  // ---- thành phần ----
  out.push(`<div class="sec keep">THÀNH PHẦN → GIÚP GÌ CHO BÉ</div>`);
  s.tp.forEach(([t, anh, g]) => {
    out.push(`<div class="ing">${anh.length ? `<div class="ims${anh.length > 2 ? ' two' : ''}">${anh.map(a => `<img src="assets/${a}" alt="">`).join('')}</div>` : ''}
      <div><div class="tp">${t}</div><div class="cc">${g}</div></div></div>`);
  });
  // ---- điểm mạnh ----
  out.push(`<div class="win"><div class="wh">★ ĐIỂM MẠNH KHI KHÁCH SO SÁNH</div>${s.ss.map(x => `<p>${x}</p>`).join('')}</div>`);
  out.push(`<div class="use"><b>CÁCH DÙNG:</b> ${s.cachDung}</div>`);
  // ---- combo ----
  if (s.combo.length) {
    out.push(`<div class="sec big keep">TỪ ${s.ngan.toUpperCase()} → COMBO THEO VẤN ĐỀ DA</div>`);
    out.push(`<div class="howto">Khách hỏi mua ${s.ngan} → <b>hỏi thêm vấn đề của bé</b> → gợi ý combo đúng vấn đề đó.</div>`);
    // tóm tắt combo 1 dòng / vấn đề — đọc nhanh khi gấp poster lại
    if (s.combo.length > 1) out.push(`<div class="ql">${s.combo.map((id, i) => { const c = COMBO[id], ds = [k, ...c.sp.filter(x => x !== k)];
      return `<div><span class="n">${i + 1}</span><b>${c.vande}</b><span class="cm">${ds.map(x => SP[x].ngan).join(' + ')}</span><em>${dong(tongGia(c.sp))}</em></div>`; }).join('')}</div>`);
    s.combo.forEach((id, i) => {
      const c = COMBO[id];
      const ds = [k, ...c.sp.filter(x => x !== k)];
      const them = c.them.filter(x => x !== k);
      const q = qcTinh(c.sp);
      out.push(`<div class="cb">
        <div class="ch"><span class="n">${i + 1}</span><b>${c.vande}</b></div>
        <div class="cbody">
          <div class="ask">Hỏi: “${c.hoi}”</div>
          <div class="kit"><div class="th">${thumbs(ds)}</div><div class="tot">Cả bộ <b>${dong(tongGia(c.sp))}</b>${q ? `<small>${q}</small>` : ''}</div></div>
          <ul class="vai">${ds.map(x => `<li><b>${SP[x].ngan}:</b> ${c.vai[x]}</li>`).join('')}
            ${them.map(x => `<li class="add"><b>+ ${SP[x].ngan}</b> (khuyến nghị thêm): ${c.vai[x]}</li>`).join('')}</ul>
          <div class="say">“${c.noi}”</div>
          <div class="cd"><b>Cách dùng:</b> ${c.cachDung}</div>
          ${c.luuY ? `<div class="ly">${c.luuY}</div>` : ''}
          <div class="kh"><b>⚠ Khuyên đi khám khi:</b> ${c.kham}</div>
        </div></div>`);
    });
  } else {
    const r = s.rieng;
    out.push(`<div class="cb"><div class="ch"><b>${r.vande}</b></div><div class="cbody">
      <div class="cd"><b>Dấu hiệu:</b> ${r.dauHieu}</div>
      <div class="ly">${r.ghiChu}</div>
      <div class="kh"><b>⚠ Khuyên đi khám khi:</b> ${r.kham}</div></div></div>`);
  }
  out.push(`<div class="foot">Sell-out kit theo sản phẩm · Công ty TNHH Dược Khoa Xanh · Giá OTC 01/04/2025</div>`);

  // SP nhiều combo (tắm gội, kem bôi) có thêm tờ 2; canhco.js tự dời các khối cuối sang tờ 2 cho vừa
  const to2 = s.combo.length >= 4 ? `<div class="page"><div class="flow" data-to2>
    <div class="cont keep">${s.ten.toUpperCase()} <span>— tiếp theo</span></div></div><i class="fold f1"></i><i class="fold f2"></i></div>` : '';
  return head(`${s.ten} — Poster NVBH`, 'sp-poster.css')
    + `<div class="page"><div class="flow" data-to1>${out.join('\n')}</div><i class="fold f1"></i><i class="fold f2"></i></div>${to2}</body></html>`;
}

function traNhanh() {
  const rows = THU_TU.map(k => {
    const s = SP[k];
    const cs = s.combo.length ? s.combo.map(id => {
      const c = COMBO[id], ds = [k, ...c.sp.filter(x => x !== k)];
      return `<div class="tc"><b>${c.vande}</b><div class="th">${thumbs(ds)}</div>
        <span>${ds.map(x => SP[x].ngan).join(' + ')}</span><em>${dong(tongGia(c.sp))}</em></div>`;
    }).join('') : `<div class="tc none"><b>${s.rieng.vande}</b><span>Bán riêng — chưa có combo trong tài liệu công ty</span><em>${dong(s.gia[0][1])}</em></div>`;
    return `<tr><th><img src="assets/${s.anh}" alt=""><b>${s.ngan}</b><small>${s.tuoi}</small></th><td><div class="tcs">${cs}</div></td></tr>`;
  }).join('');
  return head('Bảng tra nhanh combo — Poster NVBH', 'sp-poster.css')
    + `<div class="page tra"><div class="trah"><div class="chip"><img src="assets/logo-dkxanh.png" alt=""></div>
      <div><h1>KHÁCH HỎI MUA SẢN PHẨM NÀO → GỢI Ý COMBO NÀO</h1>
      <p>Hỏi thêm vấn đề của bé → chọn đúng ô vấn đề → bán cả combo. Giá cả bộ theo báo giá OTC 01/04/2025, quy cách nhỏ nhất (tắm gội 200ml, xịt muỗi 50ml).</p></div></div>
      <table>${rows}</table></div></body></html>`;
}

fs.writeFileSync('SP - 0 - Bang tra nhanh combo.html', traNhanh());
console.log('đã ghi SP - 0 - Bang tra nhanh combo.html');
THU_TU.forEach((k, i) => {
  const f = `SP - ${i + 1} - ${TEN_FILE[k]}.html`;
  fs.writeFileSync(f, poster(k, i + 1));
  console.log('đã ghi', f);
});
