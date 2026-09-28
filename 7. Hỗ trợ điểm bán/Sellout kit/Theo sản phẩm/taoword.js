// Sinh bản Word "Sell-out kit theo sản phẩm" (sản phẩm → combo 2–3 SP xử lý 1 vấn đề da) từ dulieu.js
// Chạy: node taoword.js "Sell-out kit theo sản phẩm.docx"   (cần gói npm docx@9)
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
        ShadingType, BorderStyle, VerticalAlign, PageOrientation } = require('docx');
const { SP, COMBO, THU_TU, dong, tongGia, qcTinh } = require('./dulieu.js');

const W = 14570;                                  // bề ngang vùng nội dung, A4 ngang, lề 2cm
const NAVY = '365F91', BLUE = '4F81BD', FILL = 'E7EEF7', GREEN = '2F9036', GFILL = 'EAF5E8';
const RED = 'B3261E', REDFILL = 'FCEEEC', AMBER = '8A5A00', AMBERFILL = 'FDF3DF', MUTE = '5B6E60';
const bd = { style: BorderStyle.SINGLE, size: 4, color: 'auto' };
const BORDERS = { top: bd, bottom: bd, left: bd, right: bd };

// <b>…</b> trong dữ liệu → chữ đậm
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
  rowSpan: o.rowSpan, verticalAlign: o.mid ? VerticalAlign.CENTER : VerticalAlign.TOP,
  margins: { top: 60, bottom: 60, left: 108, right: 108 }, children,
});
const H = (text, lvl) => new Paragraph({
  spacing: { before: lvl === 1 ? 240 : 200, after: 100 }, outlineLevel: lvl - 1, keepNext: true,
  border: lvl === 1 ? { bottom: { style: BorderStyle.SINGLE, size: 4, color: BLUE, space: 2 } } : undefined,
  children: [new TextRun({ text, bold: true, color: lvl === 1 ? NAVY : BLUE, size: lvl === 1 ? 28 : 22, font: 'Calibri Light' })],
});
const hdrRow = labels => new TableRow({ tableHeader: true, cantSplit: true, children: labels.map(([t, w]) =>
  cell([P(t, { bold: true, color: NAVY, size: 17 })], { w, fill: FILL })) });
const bang = (cols, rows) => new Table({ columnWidths: cols, width: { size: W, type: WidthType.DXA }, rows });
const giaSP = k => SP[k].gia.map(([q, g]) => `${q} ${dong(g)}`).join(' · ');
const tenCombo = ks => ks.map(k => SP[k].ngan).join(' + ');

// ---------- bảng tra nhanh: khách cầm SP nào → hỏi gì → combo nào ----------
function traNhanh() {
  const cols = [2300, 2900, 3300, 4270, 1800];
  const rows = [hdrRow([['KHÁCH HỎI MUA', cols[0]], ['HỎI THÊM VẤN ĐỀ CỦA BÉ', cols[1]], ['VẤN ĐỀ DA', cols[2]],
                        ['COMBO GỢI Ý', cols[3]], ['GIÁ CẢ BỘ', cols[4]]])];
  THU_TU.forEach(k => {
    const s = SP[k];
    const ds = s.combo.length ? s.combo : [null];
    ds.forEach((id, i) => {
      const cs = [];
      if (i === 0) cs.push(cell([P(s.ten, { bold: true, color: GREEN, size: 18 }), P(s.tuoi, { color: MUTE, size: 15 })],
                                { w: cols[0], rowSpan: ds.length, mid: true, fill: GFILL }));
      if (!id) {
        cs.push(cell([P('—', { size: 17 })], { w: cols[1] }));
        cs.push(cell([P(s.rieng.vande, { bold: true, size: 17 })], { w: cols[2] }));
        cs.push(cell([P('Bán riêng — chưa có combo trong tài liệu công ty', { size: 17, color: MUTE, italics: true })], { w: cols[3] }));
        cs.push(cell([P(dong(s.gia[0][1]), { size: 17 })], { w: cols[4] }));
      } else {
        const c = COMBO[id];
        cs.push(cell([P('“' + c.hoi + '”', { size: 16, italics: true })], { w: cols[1] }));
        cs.push(cell([P(c.vande, { bold: true, size: 17 })], { w: cols[2] }));
        cs.push(cell([P(tenCombo([k, ...c.sp.filter(x => x !== k)]), { bold: true, size: 17 }),
                      ...(c.them.length ? [P('Khuyến nghị thêm: ' + tenCombo(c.them), { size: 15, color: MUTE })] : [])], { w: cols[3] }));
        const q = qcTinh(c.sp);
        cs.push(cell([P(dong(tongGia(c.sp)), { bold: true, size: 17, color: GREEN }),
                      ...(q ? [P('(' + q + ')', { size: 14, color: MUTE })] : [])], { w: cols[4] }));
      }
      rows.push(new TableRow({ cantSplit: true, children: cs }));
    });
  });
  return bang(cols, rows);
}

// ---------- phần 1 của mỗi SP: thành phần → giúp gì ----------
function thanhPhan(s) {
  const cols = [3600, W - 3600];
  return bang(cols, [hdrRow([['THÀNH PHẦN', cols[0]], ['GIÚP GÌ CHO BÉ — VÌ SAO', cols[1]]]),
    ...s.tp.map(([t, , g]) => new TableRow({ cantSplit: true, children: [
      cell([P(t, { bold: true, color: NAVY, size: 18 })], { w: cols[0] }),
      cell([P(g, { size: 18 })], { w: cols[1] })] }))]);
}

// ---------- phần 2: điểm mạnh khi so sánh + cách dùng ----------
function diemManh(s) {
  const cols = [3000, W - 3000];
  const row = (nhan, noi, mau, nen) => new TableRow({ cantSplit: true, children: [
    cell([P(nhan, { bold: true, color: mau, size: 17 })], { w: cols[0], fill: nen, mid: true }),
    cell(noi.map(t => P(t, { size: 18 })), { w: cols[1], fill: nen })] });
  return bang(cols, [
    row('ĐIỂM MẠNH KHI KHÁCH SO SÁNH', s.ss, AMBER, AMBERFILL),
    row('CÁCH DÙNG SẢN PHẨM', [s.cachDung], NAVY, FILL),
  ]);
}

// ---------- phần 3: từ sản phẩm → combo ----------
function combos(k) {
  const cols = [2500, 2600, 3900, 3170, 2400];
  const rows = [hdrRow([['VẤN ĐỀ DA — CÂU HỎI MỞ', cols[0]], ['COMBO & GIÁ CẢ BỘ', cols[1]],
                        ['VIỆC CỦA TỪNG SẢN PHẨM TRONG COMBO', cols[2]], ['CÂU NÓI CHỐT COMBO · CÁCH DÙNG', cols[3]],
                        ['KHUYÊN ĐI KHÁM, ĐỪNG BÁN — KHI', cols[4]]])];
  SP[k].combo.forEach((id, i) => {
    const c = COMBO[id];
    const ds = [k, ...c.sp.filter(x => x !== k)];        // SP khách đang cầm luôn đứng đầu
    const q = qcTinh(c.sp);
    const vai = [...ds.map(x => P(`<b>${SP[x].ngan}:</b> ${c.vai[x]}`, { size: 17 })),
                 ...c.them.filter(x => x !== k).map(x => P(`<b>+ ${SP[x].ngan} (khuyến nghị thêm):</b> ${c.vai[x]}`, { size: 16, color: MUTE }))];
    const noi = [P('“' + c.noi + '”', { size: 17, italics: true }), P('<b>Cách dùng:</b> ' + c.cachDung, { size: 16 }),
                 ...(c.luuY ? [P('<b>Lưu ý:</b> ' + c.luuY, { size: 16, color: AMBER })] : [])];
    rows.push(new TableRow({ cantSplit: true, children: [
      cell([P(`${i + 1}. ${c.vande}`, { bold: true, color: NAVY, size: 19 }), P(c.dauHieu, { size: 16, color: MUTE }),
            P('Hỏi: “' + c.hoi + '”', { size: 16, italics: true })], { w: cols[0] }),
      cell([P(ds.map(x => SP[x].ngan).join('  +  '), { bold: true, color: GREEN, size: 18 }),
            P('Cả bộ: <b>' + dong(tongGia(c.sp)) + '</b>' + (q ? ` (${q})` : ''), { size: 17 }),
            ...(c.them.filter(x => x !== k).length ? [P('+ ' + tenCombo(c.them.filter(x => x !== k)) + ': ' + dong(tongGia([...c.sp, ...c.them])) + ' cả bộ', { size: 15, color: MUTE })] : [])],
           { w: cols[1], fill: GFILL }),
      cell(vai, { w: cols[2] }),
      cell(noi, { w: cols[3] }),
      cell([P(c.kham, { size: 16 })], { w: cols[4], fill: REDFILL }),
    ] }));
  });
  return bang(cols, rows);
}

function banRieng(s) {
  const r = s.rieng, cols = [3000, W - 3000];
  const row = (nhan, t, mau, nen) => new TableRow({ cantSplit: true, children: [
    cell([P(nhan, { bold: true, color: mau, size: 17 })], { w: cols[0], fill: nen, mid: true }),
    cell([P(t, { size: 18 })], { w: cols[1], fill: nen })] });
  return bang(cols, [
    row('VẤN ĐỀ', `<b>${r.vande}.</b> ${r.dauHieu}`, NAVY, FILL),
    row('COMBO', r.ghiChu, AMBER, AMBERFILL),
    row('KHUYÊN ĐI KHÁM, ĐỪNG BÁN — KHI', r.kham, RED, REDFILL),
  ]);
}

// ---------- ghép tài liệu ----------
const body = [];
body.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: 'SELL-OUT KIT THEO SẢN PHẨM', bold: true, color: NAVY, size: 40, font: 'Calibri Light' })] }));
body.push(P('Từ sản phẩm khách hỏi mua → hỏi thêm vấn đề của bé → gợi ý combo 2–3 sản phẩm xử lý vấn đề đó', { size: 22, color: MUTE, italics: true }));
body.push(H('BẢNG TRA NHANH: SẢN PHẨM → COMBO', 1));
body.push(traNhanh());
body.push(P('Giá theo báo giá OTC 01/04/2025. Giá cả bộ tính theo quy cách nhỏ nhất (tắm gội 200ml, xịt muỗi 50ml).', { size: 15, color: MUTE, italics: true }));

THU_TU.forEach((k, i) => {
  const s = SP[k];
  body.push(new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }));
  body.push(H(`${i + 1}. ${s.ten.toUpperCase()}`, 1));
  body.push(P(`<b>Quy cách, giá:</b> ${giaSP(k)}   ·   <b>Dùng cho:</b> ${s.tuoi}   ·   <b>Giải quyết:</b> ${s.combo.length ? s.combo.map(id => COMBO[id].vande).join('; ') : s.rieng.vande}`, { size: 19 }));
  body.push(H('A. Thành phần → giúp gì cho bé', 2));
  body.push(thanhPhan(s));
  body.push(H('B. Điểm mạnh khi khách so sánh · Cách dùng', 2));
  body.push(diemManh(s));
  body.push(H(s.combo.length ? `C. Từ ${s.ngan} → combo theo vấn đề da` : 'C. Vấn đề xử lý', 2));
  body.push(s.combo.length ? combos(k) : banRieng(s));
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
