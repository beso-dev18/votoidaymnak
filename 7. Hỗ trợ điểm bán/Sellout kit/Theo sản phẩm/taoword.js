// Sinh bản Word "Sell-out kit theo sản phẩm" từ dulieu.js
// Chạy: node taoword.js "Sell-out kit theo sản phẩm.docx"   (cần gói npm docx@9)
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
        ShadingType, BorderStyle, VerticalAlign, PageOrientation } = require('docx');
const { SP, VD, COMBO, THU_TU, dong, tongGia, chiTietGia } = require('./dulieu.js');

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
const trước = (k, ks) => [k, ...ks.filter(x => x !== k)];     // SP khách đang cầm luôn đứng đầu

// các vấn đề 1 SP giải quyết trong combo (SP đi kèm có thể chỉ lấy vấn đề liên quan)
const vdTrong = (c, x) => VD[x].filter(v => !(c.chon && c.chon[x]) || c.chon[x].includes(v[0]));

// ---------- bảng tra nhanh ----------
function traNhanh() {
  const cols = [2600, 3700, 5970, 2300];
  const rows = [hdrRow([['KHÁCH HỎI MUA', cols[0]], ['COMBO ĐẦY ĐỦ', cols[1]], ['GIẢI QUYẾT ĐƯỢC', cols[2]], ['GIÁ CẢ BỘ', cols[3]]])];
  let nhomTruoc = null;
  THU_TU.forEach(k => {
    const s = SP[k], c = COMBO[k];
    if (s.nhom !== nhomTruoc) {
      nhomTruoc = s.nhom;
      rows.push(new TableRow({ cantSplit: true, children: [cell([P(s.nhom === 'me' ? 'SẢN PHẨM CHO MẸ' : 'SẢN PHẨM CHO BÉ', { bold: true, color: 'FFFFFF', size: 18 })], { w: W, span: 4, fill: NAVY })] }));
    }
    rows.push(new TableRow({ cantSplit: true, children: [
      cell([P(s.ten, { bold: true, color: GD, size: 18 }), P(s.tuoi, { color: MUTE, size: 15 })], { w: cols[0], mid: true, fill: GFILL }),
      cell([P(c.sp.length > 1 ? c.sp.map(x => SP[x].ngan).join(' + ') : 'Sell-out 1 mình', { bold: true, size: 17 })], { w: cols[1], mid: true }),
      cell(c.sp.map(x => P(`<b>${SP[x].ngan}:</b> ${vdTrong(c, x).map(v => v[1]).join(' · ')}`, { size: 16 })), { w: cols[2] }),
      cell([P(dong(tongGia(c.sp)), { bold: true, size: 17, color: GREEN })], { w: cols[3], mid: true }),
    ] }));
  });
  return bang(cols, rows);
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
  ]));
  return out;
}

// ---------- A. combo → SP trong combo → vấn đề SP giải quyết → 1 câu cơ chế ----------
function bangSP(c, x, chinh) {
  const c0 = 3300, sp = SP[x];
  const rows = [
    new TableRow({ cantSplit: true, children: [cell([P(`${sp.ten}${chinh ? '  (sản phẩm chính)' : ''}   ·   ${giaSP(x)}   ·   ${sp.tuoi}`, { bold: true, color: 'FFFFFF', size: 20 })],
                                                   { w: W, span: 2, fill: chinh ? GREEN : '4F8F57' })] }),
    new TableRow({ tableHeader: false, cantSplit: true, children: [
      cell([P('VẤN ĐỀ GIẢI QUYẾT', { bold: true, color: NAVY, size: 16 })], { w: c0, fill: FILL }),
      cell([P('VÌ SAO GIẢI QUYẾT ĐƯỢC — nói với khách', { bold: true, color: NAVY, size: 16 })], { w: W - c0, fill: FILL })] }),
    ...vdTrong(c, x).map(([, ten, cau]) => new TableRow({ cantSplit: true, children: [
      cell([P(ten, { bold: true, color: GD, size: 19 })], { w: c0, fill: GFILL, mid: true }),
      cell([P(cau, { size: 19 })], { w: W - c0 })] })),
    nhanRow('CÁCH DÙNG', [sp.cachDung], NAVY, FILL, c0),
  ];
  return bang([c0, W - c0], rows);
}

function phanCombo(k) {
  const c = COMBO[k], out = [], le = c.sp.length === 1;
  out.push(H(le ? `A. Sell-out 1 mình — ${SP[k].ngan}` : `A. Combo: ${c.sp.map(x => SP[x].ngan).join(' + ')} — ${dong(tongGia(c.sp))}`, 2));
  if (!le) out.push(bang([3000, W - 3000], [
    nhanRow('GIÁ CẢ BỘ', ['<b>' + chiTietGia(c.sp) + '</b>'], GD, GFILL),
    ...(c.ghiChu ? [nhanRow('GHI CHÚ', [c.ghiChu], AMBER, AMBERFILL)] : []),
  ]));
  c.sp.forEach((x, i) => {
    out.push(P('', {}, { spacing: { before: 0, after: 60 } }));
    out.push(bangSP(c, x, i === 0 && !le));
  });
  out.push(P('', {}, { spacing: { before: 0, after: 60 } }));
  out.push(bang([3000, W - 3000], [
    ...(le ? [] : [nhanRow('CÂU CHỐT COMBO', [c.chot], GD, GFILL)]),
    nhanRow('KHUYÊN ĐI KHÁM, ĐỪNG BÁN — KHI', [c.kham], RED, REDFILL),
  ]));
  return out;
}

// ---------- ghép tài liệu ----------
const body = [];
body.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: 'SELL-OUT KIT THEO SẢN PHẨM', bold: true, color: NAVY, size: 40, font: 'Calibri Light' })] }));
body.push(P('Sản phẩm → combo đầy đủ đi theo sản phẩm đó → từng sản phẩm trong combo → các vấn đề sản phẩm đó giải quyết → 1 câu vì sao giải quyết được (lời dễ hiểu để đọc lên cho khách). Sản phẩm chưa ghép được combo thì sell-out 1 mình.', { size: 21, color: MUTE, italics: true }));
body.push(H('BẢNG TRA NHANH: SẢN PHẨM → COMBO', 1));
body.push(traNhanh());
body.push(P('Giá bán lẻ theo báo giá OTC 01/04/2025. Không có giá combo hay khuyến mãi riêng — giá cả bộ là cộng giá bán lẻ từng sản phẩm, lấy quy cách nhỏ nhất (tắm gội 200ml, xịt muỗi 50ml).', { size: 15, color: MUTE, italics: true }));

THU_TU.forEach((k, i) => {
  const s = SP[k];
  body.push(new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }));
  body.push(H(`${i + 1}. ${s.ten.toUpperCase()}`, 1));
  body.push(P(`<b>Quy cách, giá:</b> ${giaSP(k)}   ·   <b>Dùng cho:</b> ${s.tuoi}${s.loai ? `   ·   <b>Loại:</b> ${s.loai}` : ''}`, { size: 19 }));
  phanCombo(k).forEach(x => body.push(x));
  body.push(H(`B. Điểm nổi bật của ${s.ngan} khi khách so sánh`, 2));
  phanB(k).forEach(x => body.push(x));
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
