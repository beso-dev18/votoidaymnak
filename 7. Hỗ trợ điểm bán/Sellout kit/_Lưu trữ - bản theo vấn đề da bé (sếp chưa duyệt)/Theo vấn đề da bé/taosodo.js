// Sinh sơ đồ nhánh (Vấn đề da → bước → sản phẩm → thành phần + cơ chế) từ dulieu.js
const fs = require('fs');
const { SP, VANDE } = require('./dulieu.js');

const esc = s => String(s).replace(/&(?!\w+;|#)/g, '&amp;');
const MAU = { tamgoi:'a', gold:'b', kem:'c', dau:'d', xit:'e', bot:'f', gac:'g' };
// giá đầu tiên trong chuỗi nhiều quy cách, luôn kèm chữ đ
const giaDau = k => { const g = SP[k].gia.split(' / ')[0]; return g.endsWith('đ') ? g : g + 'đ'; };

function head(title, extraCss = '') {
  return `<!DOCTYPE html>
<html lang="vi"><head><meta charset="utf-8"><title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="sodo.css">${extraCss}</head><body>`;
}

function trangVanDe(v) {
  const rows = [];
  let tongDong = v.buoc.reduce((a, b) => a + b.sp.reduce((x, s) => x + s.tp.length, 0), 0);
  let dauTien = true;

  v.buoc.forEach((b, bi) => {
    const dongBuoc = b.sp.reduce((x, s) => x + s.tp.length, 0);
    let dauBuoc = true;
    b.sp.forEach(s => {
      const p = SP[s.k];
      s.tp.forEach((tp, ti) => {
        let td = '';
        if (dauTien) { td += `<td class="lv1" rowspan="${tongDong}"><div class="vd"><span class="nhan">VẤN ĐỀ DA</span><b>${esc(v.ten)}</b><i>${esc(v.phu)}</i></div></td>`; dauTien = false; }
        if (dauBuoc) { td += `<td class="lv2 b${bi+1}" rowspan="${dongBuoc}"><span class="so">${bi+1}</span>${esc(b.ten)}</td>`; dauBuoc = false; }
        if (ti === 0) {
          td += `<td class="lv3 m${MAU[s.k]}" rowspan="${s.tp.length}">`
              + `<b>${esc(p.ten)}</b><span class="qc">${esc(p.qc)}</span>`
              + `<span class="gia">${esc(p.gia)}</span><span class="tuoi">${esc(p.tuoi)}</span></td>`;
        }
        td += `<td class="lv4">${tp[0]}</td><td class="lv5">${tp[1]}</td>`;
        // sơ đồ in 1 trang: chỉ lấy dòng "Điểm mạnh"; bản Word có đủ so sánh + câu nói với khách
        if (ti === 0) {
          const ss = (s.ss || []).filter(t => /^<b>Điểm mạnh/.test(t));
          td += `<td class="lv6" rowspan="${s.tp.length}">${ss.map(t => `<p>${t}</p>`).join('') || '—'}</td>`;
        }
        rows.push(`<tr>${td}</tr>`);
      });
    });
  });

  const spBo = v.bo.map(k => `<span class="pill m${MAU[k]}">${esc(SP[k].ten)} · ${esc(giaDau(k))}</span>`).join('');
  const spThem = v.boThem.length
    ? `<div class="them"><span class="lbl">Bán thêm khi khách cần chăm kỹ hơn:</span>${v.boThem.map(k => `<span class="pill nhat m${MAU[k]}">${esc(SP[k].ten)} · ${esc(giaDau(k))}</span>`).join('')}</div>`
    : '';

  return head('Sơ đồ — ' + v.ten) + `
<div class="page">
  <div class="hd">
    <div class="ttl"><span class="kicker">SƠ ĐỒ XỬ LÝ VẤN ĐỀ DA BÉ</span><h1>${esc(v.ten)}</h1></div>
    <div class="say" style="font-style:normal"><span>VẤN ĐỀ NÀY LÀ GÌ</span>${esc(v.phu)}</div>
    <div class="ask"><span>CÁCH DÙNG</span><div class="cd">${v.cachDung}</div></div>
  </div>

  <table class="tree">
    <thead><tr><th>VẤN ĐỀ DA</th><th>BƯỚC XỬ LÝ</th><th>SẢN PHẨM</th><th>THÀNH PHẦN</th><th>GIÚP GÌ CHO BÉ — VÌ SAO</th><th>ĐIỂM MẠNH KHI KHÁCH SO SÁNH</th></tr></thead>
    <tbody>${rows.join('')}</tbody>
  </table>

  <div class="bot">
    <div class="bo"><span class="lbl">BỘ SẢN PHẨM CẦN THIẾT</span>${spBo}${spThem}</div>
    <div class="kham"><span class="lbl">KHUYÊN ĐI KHÁM, ĐỪNG BÁN — KHI</span>${esc(v.kham)}</div>
  </div>
  ${v.luuY ? `<div class="luuy"><b>Lưu ý:</b> ${v.luuY}</div>` : ''}

  <div class="foot">
    <span>Dược Khoa Xanh · Sơ đồ tư vấn tại quầy dành cho NVBH</span>
    <span>Giá theo báo giá OTC 01/04/2025 · Thành phần theo “Phân tích công dụng sản phẩm”</span>
  </div>
</div></body></html>`;
}

function trangTongQuan() {
  const keys = ['tamgoi', 'gold', 'kem', 'dau', 'xit', 'bot', 'gac'];
  const head2 = keys.map(k => `<th class="sp m${MAU[k]}"><b>${esc(SP[k].ten)}</b><span>${esc(giaDau(k))}</span></th>`).join('');
  const rows = VANDE.map(v => {
    const map = {};
    v.buoc.forEach((b, bi) => b.sp.forEach(s => { (map[s.k] = map[s.k] || []).push(bi + 1); }));
    const tds = keys.map(k => {
      if (!map[k]) return '<td class="o"></td>';
      const bs = [...new Set(map[k])].sort();
      return `<td class="x m${MAU[k]}">${bs.map(b => `<span class="b${b}">${b}</span>`).join('')}</td>`;
    }).join('');
    return `<tr><td class="vd"><b>${esc(v.ten)}</b></td>${tds}</tr>`;
  }).join('');

  return head('Bảng tra nhanh — vấn đề da bé', '<style>:root{--s:0.98}</style>') + `
<div class="page">
  <div class="hd">
    <div class="ttl"><span class="kicker">SELL-OUT KIT THEO VẤN ĐỀ DA BÉ</span><h1>BẢNG TRA NHANH</h1></div>
    <div class="say" style="flex:1"><span>Cách dùng bảng này</span>Khách nêu vấn đề của bé → dóng theo hàng → thấy ngay cần những sản phẩm nào và mỗi sản phẩm đảm nhận bước nào. Số trong ô là bước: <b>1</b> làm sạch · <b>2</b> xử lý vấn đề · <b>3</b> nuôi dưỡng &amp; bảo vệ. Chi tiết thành phần và tác dụng xem sơ đồ riêng của từng vấn đề.</div>
  </div>

  <table class="matrix">
    <thead><tr><th class="vd">VẤN ĐỀ DA BÉ</th>${head2}</tr></thead>
    <tbody>${rows}</tbody>
  </table>

  <div class="chu">
    <div class="ct"><span class="b1">1</span> <b>LÀM SẠCH</b> — lấy đi bụi bẩn, da chết, vi khuẩn đang gây ra hoặc làm nặng thêm vấn đề</div>
    <div class="ct"><span class="b2">2</span> <b>XỬ LÝ VẤN ĐỀ</b> — hoạt chất tác động trực tiếp lên chỗ da đang có vấn đề</div>
    <div class="ct"><span class="b3">3</span> <b>NUÔI DƯỠNG &amp; BẢO VỆ</b> — giúp da khoẻ lại, giữ ẩm tốt để vấn đề không quay lại</div>
  </div>

  <div class="luuy"><b>Độ tuổi:</b> Tắm gội thường, Kem bôi da, Dầu massage — <b>từ sơ sinh</b>. Xịt muỗi — <b>bé trên 3 tháng</b>. Elemis Gold và Bọt rửa tay — <b>bé từ 6 tháng</b>. Hỏi tuổi bé trước khi tư vấn.</div>

  <div class="foot">
    <span>Dược Khoa Xanh · Bảng tra nhanh tại quầy dành cho NVBH</span>
    <span>Giá theo báo giá OTC 01/04/2025</span>
  </div>
</div></body></html>`;
}

fs.writeFileSync('So do - 0 - Bang tra nhanh.html', trangTongQuan());
console.log('đã tạo  So do - 0 - Bang tra nhanh.html');
VANDE.forEach((v, i) => {
  const f = `So do - ${i + 1} - ${v.id}.html`;
  fs.writeFileSync(f, trangVanDe(v));
  console.log('đã tạo ', f);
});
