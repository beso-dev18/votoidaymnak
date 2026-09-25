// Sinh bản Word "Sell-out kit theo vấn đề da bé" từ dulieu.js
const fs = require('fs');
const d = require('docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
        ShadingType, BorderStyle, AlignmentType, VerticalMergeType, VerticalAlign, PageOrientation } = d;
const { SP, VANDE } = require('./dulieu.js');

const W = 14570;                                  // bề ngang vùng nội dung, khổ A4 ngang
const NAVY = '365F91', BLUE = '4F81BD', FILL = 'E7EEF7';
const B1 = '0E7490', B2 = 'B45309', B3 = '2F9036';   // màu 3 bước
const RED = 'B3261E', REDFILL = 'FCEEEC', AMBERFILL = 'FDF3DF', AMBER = '8A5A00';
const MUTE = '5B6E60';
const bd = { style: BorderStyle.SINGLE, size: 4, color: 'auto' };
const BORDERS = { top: bd, bottom: bd, left: bd, right: bd };
const giaDau = k => { const g = SP[k].gia.split(' / ')[0]; return g.endsWith('đ') ? g : g + 'đ'; };

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
const P = (t, o = {}) => new Paragraph({ spacing: { before: 20, after: 20 }, children: runs(t, o.run || {}), ...o.par });
const cell = (children, o = {}) => new TableCell({
  width: { size: o.w, type: WidthType.DXA }, borders: BORDERS,
  shading: o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined,
  rowSpan: o.rowSpan, verticalAlign: o.mid ? VerticalAlign.CENTER : VerticalAlign.TOP,
  margins: { top: 60, bottom: 60, left: 108, right: 108 },
  children,
});
const H = (text, lvl) => new Paragraph({
  spacing: { before: lvl === 1 ? 360 : 240, after: 120 }, outlineLevel: lvl - 1, keepNext: true,
  border: lvl === 1 ? { bottom: { style: BorderStyle.SINGLE, size: 4, color: BLUE, space: 2 } } : undefined,
  children: [new TextRun({ text, bold: true, color: lvl === 1 ? NAVY : BLUE,
                           size: lvl === 1 ? 28 : 24, font: 'Calibri Light' })],
});
const hdrRow = labels => new TableRow({ tableHeader: true, children: labels.map(([t, w]) =>
  cell([P(t, { run: { bold: true, color: NAVY, size: 17 } })], { w, fill: FILL })) });

// ---------- sơ đồ nhánh của 1 vấn đề ----------
function soDo(v) {
  const cols = [1400, 1400, 1900, 1900, 4270, 3700];
  const rows = [hdrRow([['VẤN ĐỀ DA', cols[0]], ['BƯỚC XỬ LÝ', cols[1]], ['SẢN PHẨM', cols[2]],
                        ['THÀNH PHẦN', cols[3]], ['GIÚP GÌ CHO BÉ — VÌ SAO', cols[4]],
                        ['ĐIỂM MẠNH KHI KHÁCH SO SÁNH', cols[5]]])];
  const tong = v.buoc.reduce((a, b) => a + b.sp.reduce((x, s) => x + s.tp.length, 0), 0);
  let dauTien = true;

  v.buoc.forEach((b, bi) => {
    const nBuoc = b.sp.reduce((x, s) => x + s.tp.length, 0);
    const mauB = [B1, B2, B3][bi];
    let dauBuoc = true;
    b.sp.forEach(s => {
      const p = SP[s.k];
      s.tp.forEach((tp, ti) => {
        const cs = [];
        if (dauTien) { cs.push(cell([P(v.ten, { run: { bold: true, color: 'FFFFFF', size: 20 } }),
                                     P(v.phu, { run: { color: 'FFFFFF', size: 15 } })],
                                    { w: cols[0], rowSpan: tong, fill: NAVY, mid: true })); dauTien = false; }
        else cs.push(null);
        if (dauBuoc) { cs.push(cell([P(String(bi + 1) + '. ' + b.ten, { run: { bold: true, color: mauB, size: 19 } })],
                                    { w: cols[1], rowSpan: nBuoc, mid: true })); dauBuoc = false; }
        else cs.push(null);
        if (ti === 0) {
          cs.push(cell([
            P(p.ten, { run: { bold: true, color: NAVY, size: 19 } }),
            P(p.qc + ' · ' + p.gia, { run: { color: MUTE, size: 16 } }),
            P(p.tuoi, { run: { bold: true, color: B3, size: 15 } }),
          ], { w: cols[2], rowSpan: s.tp.length, mid: true }));
        } else cs.push(null);
        cs.push(cell([P(tp[0], { run: { bold: true, color: NAVY, size: 17 } })], { w: cols[3] }));
        cs.push(cell([P(tp[1], { run: { size: 17 } })], { w: cols[4] }));
        if (ti === 0) {
          const ss = (s.ss && s.ss.length) ? s.ss : ['—'];
          cs.push(cell(ss.map(t => P(t, { run: { size: 16 } })), { w: cols[5], rowSpan: s.tp.length, fill: 'F4F8F3' }));
        } else cs.push(null);
        rows.push(new TableRow({ children: cs.filter(Boolean) }));
      });
    });
  });
  return new Table({ columnWidths: cols, width: { size: W, type: WidthType.DXA }, rows });
}

// ---------- ghép tài liệu ----------
const body = [];
body.push(new Paragraph({ spacing: { after: 120 },
  children: [new TextRun({ text: 'SELL-OUT KIT THEO VẤN ĐỀ DA BÉ', bold: true, color: NAVY, size: 40, font: 'Calibri Light' })] }));
VANDE.forEach((v, i) => {
  if (i) body.push(new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }));
  body.push(H(`${i + 1}. ${v.ten}`, 1));
  body.push(P('<b>Dấu hiệu:</b> ' + v.phu, { run: { size: 20, color: MUTE, italics: true } }));
  body.push(P(''));
  body.push(soDo(v));
  body.push(P(''));

  const spBo = v.bo.map(k => `${SP[k].ten} (${giaDau(k)})`).join('  +  ');
  const spThem = v.boThem.length ? v.boThem.map(k => `${SP[k].ten} (${giaDau(k)})`).join('  +  ') : null;
  body.push(new Table({ columnWidths: [3000, W - 3000], width: { size: W, type: WidthType.DXA }, rows: [
    new TableRow({ children: [
      cell([P('BỘ SẢN PHẨM CẦN THIẾT', { run: { bold: true, color: NAVY, size: 17 } })], { w: 3000, fill: FILL, mid: true }),
      cell([P(spBo, { run: { bold: true, size: 19 } }),
            ...(spThem ? [P('Bán thêm khi khách muốn chăm kỹ hơn: ' + spThem, { run: { size: 17, color: MUTE } })] : [])],
           { w: W - 3000 }),
    ] }),
    new TableRow({ children: [
      cell([P('CÁCH DÙNG', { run: { bold: true, color: NAVY, size: 17 } })], { w: 3000, fill: FILL, mid: true }),
      cell([P(v.cachDung, { run: { size: 18 } })], { w: W - 3000 }),
    ] }),
    ...(v.luuY ? [new TableRow({ children: [
      cell([P('LƯU Ý', { run: { bold: true, color: AMBER, size: 17 } })], { w: 3000, fill: AMBERFILL, mid: true }),
      cell([P(v.luuY, { run: { size: 18 } })], { w: W - 3000, fill: AMBERFILL }),
    ] })] : []),
    new TableRow({ children: [
      cell([P('KHUYÊN ĐI KHÁM, ĐỪNG BÁN — KHI', { run: { bold: true, color: RED, size: 17 } })], { w: 3000, fill: REDFILL, mid: true }),
      cell([P(v.kham, { run: { size: 18 } })], { w: W - 3000, fill: REDFILL }),
    ] }),
  ]}));
});

const doc = new Document({
  styles: { default: { document: { run: { font: 'Calibri', size: 20 },
                                   paragraph: { spacing: { after: 120, line: 264, lineRule: 'auto' } } } } },
  sections: [{
    properties: { page: { size: { width: 16838, height: 11906, orientation: PageOrientation.LANDSCAPE },
                          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } } },
    children: body,
  }],
});
Packer.toBuffer(doc).then(b => {
  fs.writeFileSync(process.argv[2] || 'Sell-out kit theo van de da be.docx', b);
  console.log('đã ghi', process.argv[2], b.length, 'bytes');
});
