// Sinh bản Word "Sell-out kit theo sản phẩm" từ dulieu.js
// Chạy: node taoword.js "Sell-out kit theo sản phẩm.docx"   (cần gói npm docx@9)
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
        ShadingType, BorderStyle, VerticalAlign, PageOrientation } = require('docx');
const { TP, SP, COMBO, THU_TU, dong, tongGia, chiTietGia } = require('./dulieu.js');

const W = 14570;                                  // bề ngang vùng nội dung, A4 ngang, lề 2cm
const NAVY = '365F91', BLUE = '4F81BD', FILL = 'E7EEF7', GREEN = '2F9036', GD = '1E6B26', GFILL = 'EAF5E8';
const RED = 'B3261E', REDFILL = 'FCEEEC', AMBER = '8A5A00', AMBERFILL = 'FDF3DF', MUTE = '5B6E60';
const bd = { style: BorderStyle.SINGLE, size: 4, color: 'auto' };
const BORDERS = { top: bd, bottom: bd, left: bd, right: bd };

// <b>…</b> → chữ đậm; <br> → xuống đoạn
function runs(t, base = {}) {
  const out = [];
  String(t).split(/(<b>.*?<\/b>)/g).forEach(x => {
    if (!x) return;
    if (x.startsWith('<b>')) out.push(new TextRun({ text: x.slice(3, -4), bold: true, ...base }));
    else out.push(new TextRun({ text: x, ...base }));
  });
  return out.length ? out : [new TextRun({ text: '', ...base })];
}
const P = (t, run = {}, par = {}) => new Paragraph({ spacing: { before: 20, after: 20 }, children: runs(t, run), ...par });
const Ps = (t, run = {}) => String(t).split('<br>').map(x => P(x, run));
const cell = (children, o = {}) => new TableCell({
  width: { size: o.w, type: WidthType.DXA }, borders: BORDERS,
  shading: o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined,
  rowSpan: o.rowSpan, columnSpan: o.span, verticalAlign: o.mid ? VerticalAlign.CENTER : VerticalAlign.TOP,
  margins: { top: 60, bottom: 60, left: 108, right: 108 }, children,
});
const H = (text, lvl) => new Paragraph({
  spacing: { before: lvl === 1 ? 240 : lvl === 2 ? 220 : 180, after: lvl === 3 ? 60 : 100 }, outlineLevel: lvl - 1, keepNext: true,
  border: lvl === 1 ? { bottom: { style: BorderStyle.SINGLE, size: 4, color: BLUE, space: 2 } } : undefined,
  children: [new TextRun({ text, bold: true, color: lvl === 3 ? GD : lvl === 1 ? NAVY : BLUE, size: lvl === 1 ? 28 : lvl === 2 ? 23 : 21,
                           font: lvl === 3 ? 'Calibri' : 'Calibri Light' })],
});
const hdrRow = labels => new TableRow({ tableHeader: true, cantSplit: true, children: labels.map(([t, w]) =>
  cell([P(t, { bold: true, color: NAVY, size: 17 })], { w, fill: FILL })) });
const bang = (cols, rows) => new Table({ columnWidths: cols, width: { size: W, type: WidthType.DXA }, rows });
const nhanRow = (nhan, noi, mau, nen, w0 = 3000) => new TableRow({ cantSplit: true, children: [
  cell([P(nhan, { bold: true, color: mau, size: 17 })], { w: w0, fill: nen, mid: true }),
  cell(noi.map(t => P(t, { size: 18 })), { w: W - w0, fill: nen })] });
const giaSP = k => SP[k].gia.map(([q, g]) => `${q} ${dong(g)}`).join(' · ');
const choAi = k => SP[k].nhom === 'me' ? 'MẸ' : 'BÉ';
const trước = (k, ks) => [k, ...ks.filter(x => x !== k)];     // SP khách đang cầm luôn đứng đầu

// ---------- bảng tra nhanh ----------
function traNhanh() {
  const cols = [2600, 3600, 6070, 2300];
  const rows = [hdrRow([['KHÁCH HỎI MUA', cols[0]], ['COMBO GỢI Ý', cols[1]], ['GIẢI QUYẾT ĐƯỢC', cols[2]], ['GIÁ CẢ BỘ', cols[3]]])];
  let nhomTruoc = null;
  THU_TU.forEach(k => {
    const s = SP[k];
    if (s.nhom !== nhomTruoc) {
      nhomTruoc = s.nhom;
      rows.push(new TableRow({ cantSplit: true, children: [cell([P(s.nhom === 'me' ? 'SẢN PHẨM CHO MẸ' : 'SẢN PHẨM CHO BÉ', { bold: true, color: 'FFFFFF', size: 18 })], { w: W, span: 4, fill: NAVY })] }));
    }
    const ds = s.combo.length ? s.combo : [null];
    ds.forEach((id, i) => {
      const cs = [];
      if (i === 0) cs.push(cell([P(s.ten, { bold: true, color: GD, size: 18 }), P(s.tuoi, { color: MUTE, size: 15 })],
                                { w: cols[0], rowSpan: ds.length, mid: true, fill: GFILL }));
      if (!id) {
        cs.push(cell([P('Sell-out 1 mình', { bold: true, size: 17 })], { w: cols[1] }));
        cs.push(cell([P(s.rieng.vande, { size: 17 })], { w: cols[2] }));
        cs.push(cell([P(dong(s.gia[0][1]), { bold: true, size: 17, color: GREEN })], { w: cols[3] }));
      } else {
        const c = COMBO[id];
        cs.push(cell([P(trước(k, c.sp).map(x => SP[x].ngan).join(' + '), { bold: true, size: 17 })], { w: cols[1] }));
        cs.push(cell(c.vande.map(v => P('• ' + v.ten, { size: 17 })), { w: cols[2] }));
        cs.push(cell([P(dong(tongGia(c.sp)), { bold: true, size: 17, color: GREEN })], { w: cols[3] }));
      }
      rows.push(new TableRow({ cantSplit: true, children: cs }));
    });
  });
  return bang(cols, rows);
}

// ---------- A. thành phần → hoạt động thế nào → để làm gì ----------
function phanA(k) {
  const cols = [2800, 6770, 5000];
  return bang(cols, [hdrRow([['THÀNH PHẦN', cols[0]], ['HOẠT ĐỘNG THẾ NÀO', cols[1]], [`ĐỂ LÀM GÌ CHO ${choAi(k)}`, cols[2]]]),
    ...SP[k].tp.map(([id, lamGi]) => new TableRow({ cantSplit: true, children: [
      cell([P(TP[id].ten, { bold: true, color: NAVY, size: 18 })], { w: cols[0] }),
      cell(Ps(TP[id].coChe, { size: 18 }), { w: cols[1] }),
      cell([P(lamGi, { size: 18, bold: false })], { w: cols[2], fill: GFILL })] }))]);
}

// ---------- B. điểm nổi bật ----------
function phanB(k) {
  const s = SP[k], out = [];
  const c0 = 4300;
  out.push(bang([c0, W - c0], s.noiBat.map(([dm, gt], i) => new TableRow({ cantSplit: true, children: [
    cell([P(`★ ${i + 1}. ${dm}`, { bold: true, color: GD, size: 20 })], { w: c0, fill: GFILL, mid: true }),
    cell([P(gt, { size: 18 })], { w: W - c0 })] }))));
  // bảng so sánh
  const n = s.ssanh.cot.length, c1 = 2600, cw = Math.floor((W - c1) / (n - 1));
  const cols = [c1, ...Array(n - 1).fill(cw)]; cols[n - 1] += W - c1 - cw * (n - 1);
  out.push(H('So sánh với đối thủ', 3));
  out.push(bang(cols, [
    new TableRow({ tableHeader: true, cantSplit: true, children: s.ssanh.cot.map((t, i) =>
      cell([P(t, { bold: true, color: i === 1 ? 'FFFFFF' : NAVY, size: 17 })], { w: cols[i], fill: i === 1 ? GREEN : FILL })) }),
    ...s.ssanh.dong.map(r => new TableRow({ cantSplit: true, children: r.map((t, i) => {
      const noiBat = i === 1 && t.startsWith('✔');
      return cell([P(t, { size: 17, bold: i === 0 || noiBat, color: noiBat ? GD : i === 0 ? NAVY : undefined })],
                  { w: cols[i], fill: i === 1 ? GFILL : undefined });
    }) })),
  ]));
  out.push(P('✔ = điểm sản phẩm mình nổi bật hơn. Nguồn: file So sánh thị trường trong Danh mục sản phẩm; giá theo báo giá OTC 01/04/2025.', { size: 15, color: MUTE, italics: true }));
  out.push(P(''));
  out.push(bang([3000, W - 3000], [
    nhanRow('CÂU CHỐT', [s.chot], GD, GFILL),
    nhanRow('LƯU Ý KHI TƯ VẤN', s.luuY.map(t => '• ' + t), AMBER, AMBERFILL),
    nhanRow('CÁCH DÙNG', [s.cachDung], NAVY, FILL),
  ]));
  return out;
}

// ---------- C. combo → các vấn đề → mỗi sản phẩm làm gì ----------
function bangVanDe(v, so, sp) {
  const c0 = 3000;
  const rows = [
    new TableRow({ cantSplit: true, children: [cell([P(`${so}: ${v.ten.toUpperCase()}`, { bold: true, color: 'FFFFFF', size: 20 })], { w: W, span: 2, fill: NAVY })] }),
    nhanRow('DẤU HIỆU', [v.dauHieu], NAVY, FILL, c0),
    nhanRow('HỎI KHÁCH', ['“' + v.hoi + '”'], NAVY, FILL, c0),
  ];
  v.lam.forEach(([k, buoc, loi]) => {
    const them = (v.them || []).includes(k);
    rows.push(new TableRow({ cantSplit: true, children: [
      cell([P(SP[k].ngan, { bold: true, color: GD, size: 19 }), P(buoc, { size: 15, color: MUTE, italics: true }),
            ...(them ? [P(`Khuyến nghị thêm · ${dong(SP[k].gia[0][1])} (đủ bộ ${dong(tongGia([...sp, k]))})`, { size: 15, color: AMBER, bold: true })] : [])],
           { w: c0, fill: them ? AMBERFILL : GFILL, mid: true }),
      cell([P(loi, { size: 19 })], { w: W - c0 })] }));
  });
  rows.push(nhanRow('CÂU CHỐT', [v.chot], GD, GFILL, c0));
  rows.push(nhanRow('CÁCH DÙNG', [v.cachDung], NAVY, FILL, c0));
  if (v.luuY) rows.push(nhanRow('LƯU Ý', [v.luuY], AMBER, AMBERFILL, c0));
  rows.push(nhanRow('KHUYÊN ĐI KHÁM, ĐỪNG BÁN — KHI', [v.kham], RED, REDFILL, c0));
  return bang([c0, W - c0], rows);
}

function phanC(k) {
  const s = SP[k], out = [];
  if (!s.combo.length) {
    const r = s.rieng;
    out.push(H(`C. Sell-out 1 mình — ${s.ngan} ${giaSP(k)}`, 2));
    out.push(bangVanDe({ ten: r.vande, dauHieu: r.dauHieu, hoi: r.hoi, lam: r.lam, chot: s.chot, cachDung: s.cachDung, kham: r.kham }, 'Vấn đề', [k]));
    return out;
  }
  out.push(H(`C. Từ ${s.ngan} → combo → các vấn đề combo giải quyết được`, 2));
  s.combo.forEach((id, i) => {
    const c = COMBO[id], ds = trước(k, c.sp);
    out.push(H(`Combo ${i + 1}: ${ds.map(x => SP[x].ngan).join(' + ')} — ${dong(tongGia(c.sp))}`, 3));
    out.push(bang([3000, W - 3000], [
      nhanRow('GIÁ CẢ BỘ', ['<b>' + chiTietGia(ds) + '</b>'], GD, GFILL),
      nhanRow('GIẢI QUYẾT ĐƯỢC', [c.vande.map((v, j) => `${j + 1}. ${v.ten}`).join('   ·   ') + (c.ghiChu ? '   (' + c.ghiChu + ')' : '')], GD, GFILL),
    ]));
    c.vande.forEach((v, j) => {
      out.push(P('', {}, { spacing: { before: 0, after: 60 } }));
      out.push(bangVanDe(v, `Vấn đề ${j + 1}`, c.sp));
    });
  });
  return out;
}

// ---------- ghép tài liệu ----------
const body = [];
body.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: 'SELL-OUT KIT THEO SẢN PHẨM', bold: true, color: NAVY, size: 40, font: 'Calibri Light' })] }));
body.push(P('Khách hỏi mua sản phẩm → gợi ý combo 2–3 sản phẩm → combo đó giải quyết được những vấn đề nào → với từng vấn đề, mỗi sản phẩm làm gì (lời dễ hiểu để đọc lên cho khách). Sản phẩm chưa có combo thì sell-out 1 mình.', { size: 21, color: MUTE, italics: true }));
body.push(H('BẢNG TRA NHANH: SẢN PHẨM → COMBO', 1));
body.push(traNhanh());
body.push(P('Giá bán lẻ theo báo giá OTC 01/04/2025. Không có giá combo hay khuyến mãi riêng — giá cả bộ là cộng giá bán lẻ từng sản phẩm, lấy quy cách nhỏ nhất (tắm gội 200ml, xịt muỗi 50ml).', { size: 15, color: MUTE, italics: true }));

THU_TU.forEach((k, i) => {
  const s = SP[k];
  body.push(new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }));
  body.push(H(`${i + 1}. ${s.ten.toUpperCase()}`, 1));
  const giaiQuyet = s.combo.length ? [...new Set(s.combo.flatMap(id => COMBO[id].vande.map(v => v.ten)))].join('; ') : s.rieng.vande;
  body.push(P(`<b>Quy cách, giá:</b> ${giaSP(k)}   ·   <b>Dùng cho:</b> ${s.tuoi}${s.loai ? `   ·   <b>Loại:</b> ${s.loai}` : ''}`, { size: 19 }));
  body.push(P(`<b>Giải quyết:</b> ${giaiQuyet}`, { size: 19 }));
  body.push(H(`A. Thành phần → hoạt động thế nào → để làm gì cho ${choAi(k).toLowerCase()}`, 2));
  body.push(phanA(k));
  body.push(H('B. Điểm nổi bật khi khách so sánh', 2));
  phanB(k).forEach(x => body.push(x));
  phanC(k).forEach(x => body.push(x));
});

const doc = new Document({
  styles: { default: { document: { run: { font: 'Calibri', size: 20 }, paragraph: { spacing: { after: 120, line: 264, lineRule: 'auto' } } } } },
  sections: [{
    properties: { page: { size: { width: 16838, height: 11906, orientation: PageOrientation.LANDSCAPE },
                          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } } },
    children: body,
  }],
});
Packer.toBuffer(doc).then(b => {
  const out = process.argv[2] || 'Sell-out kit theo sản phẩm.docx';
  fs.writeFileSync(out, b);
  console.log('đã ghi', out, b.length, 'bytes');
});
