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

// ---------- khối chú ý màu ----------
function khoiMau(nhan, noiDung, mau, fill) {
  return new Table({ columnWidths: [W], width: { size: W, type: WidthType.DXA }, rows: [new TableRow({ children: [
    cell([ P(nhan, { run: { bold: true, color: mau, size: 17 } }), P(noiDung, { run: { size: 19 } }) ],
      { w: W, fill })
  ] })] });
}

// ---------- sơ đồ nhánh của 1 vấn đề ----------
function soDo(v) {
  const cols = [1900, 1900, 2600, 3400, 4770];
  const rows = [hdrRow([['VẤN ĐỀ DA', cols[0]], ['BƯỚC XỬ LÝ', cols[1]], ['SẢN PHẨM', cols[2]],
                        ['THÀNH PHẦN', cols[3]], ['CƠ CHẾ TÁC ĐỘNG', cols[4]]])];
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
        if (dauTien) { cs.push(cell([P(v.ten, { run: { bold: true, color: 'FFFFFF', size: 22 } }),
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
        rows.push(new TableRow({ children: cs.filter(Boolean) }));
      });
    });
  });
  return new Table({ columnWidths: cols, width: { size: W, type: WidthType.DXA }, rows });
}

// ---------- bảng tra nhanh ----------
function bangTraNhanh() {
  const keys = ['tamgoi', 'gold', 'kem', 'dau', 'xit', 'bot', 'gac'];
  const cols = [3374, ...keys.map(() => 1599)];
  const rows = [new TableRow({ tableHeader: true, children: [
    cell([P('VẤN ĐỀ', { run: { bold: true, color: NAVY, size: 17 } })], { w: cols[0], fill: FILL }),
    ...keys.map((k, i) => cell([
      P(SP[k].ten, { run: { bold: true, color: NAVY, size: 15 } }),
      P(giaDau(k), { run: { color: MUTE, size: 14 } }),
    ], { w: cols[i + 1], fill: FILL })),
  ] })];
  VANDE.forEach(v => {
    const map = {};
    v.buoc.forEach((b, bi) => b.sp.forEach(s => { (map[s.k] = map[s.k] || []).push(bi + 1); }));
    rows.push(new TableRow({ children: [
      cell([P(v.ten, { run: { bold: true, color: NAVY, size: 16 } })], { w: cols[0], mid: true }),
      ...keys.map((k, i) => {
        const bs = map[k] ? [...new Set(map[k])].sort() : null;
        return cell([new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 20, after: 20 },
          children: bs ? bs.map(b => new TextRun({ text: ' ' + b + ' ', bold: true, size: 18,
            color: [B1, B2, B3][b - 1] })) : [new TextRun({ text: '–', color: 'BBBBBB', size: 16 })] })],
          { w: cols[i + 1], mid: true, fill: bs ? undefined : 'FAFAFA' });
      }),
    ] }));
  });
  return new Table({ columnWidths: cols, width: { size: W, type: WidthType.DXA }, rows });
}

// ---------- ghép tài liệu ----------
const body = [];
body.push(new Paragraph({ spacing: { after: 120 },
  children: [new TextRun({ text: 'SELL-OUT KIT THEO VẤN ĐỀ DA BÉ', bold: true, color: NAVY, size: 40, font: 'Calibri Light' })] }));
body.push(P('Khách đến shop nêu vấn đề của bé → tra đúng mục → biết ngay cần những sản phẩm nào, mỗi sản phẩm đảm nhận bước nào, nhờ thành phần gì và theo cơ chế nào.',
  { run: { size: 20, color: MUTE } }));
body.push(P('Giá và quy cách lấy từ “Báo giá sản phẩm OTC tất cả sp.docx” (01/04/2025). Thành phần và cơ chế tác động lấy từ “Phân tích công dụng sản phẩm.docx”. Không thêm bất kỳ thành phần, cơ chế hay công dụng nào ngoài hai tài liệu này.',
  { run: { size: 17, color: MUTE, italics: true } }));

body.push(H('BA BƯỚC XỬ LÝ — ÁP CHO MỌI VẤN ĐỀ', 1));
body.push(new Table({ columnWidths: [1600, 4000, W - 5600], width: { size: W, type: WidthType.DXA }, rows: [
  hdrRow([['BƯỚC', 1600], ['TÊN BƯỚC', 4000], ['LÀM GÌ', W - 5600]]),
  ...[['1', 'LÀM SẠCH', B1, 'Lấy đi bụi, tế bào chết và vi khuẩn đang gây ra hoặc làm nặng thêm vấn đề. Bỏ qua bước này thì bước 2 không ăn thua.'],
      ['2', 'XỬ LÝ VẤN ĐỀ', B2, 'Hoạt chất tác động trực tiếp lên chỗ da đang có vấn đề — giảm viêm, kháng khuẩn, tạo màng chắn.'],
      ['3', 'NUÔI DƯỠNG & BẢO VỆ', B3, 'Phục hồi hàng rào da để vấn đề không quay lại. Đây là bước khách hay bỏ, và cũng là lý do bé cứ bị đi bị lại.']]
    .map(([n, t, c, m]) => new TableRow({ children: [
      cell([P(n, { run: { bold: true, color: c, size: 24 } })], { w: 1600, mid: true }),
      cell([P(t, { run: { bold: true, color: c, size: 19 } })], { w: 4000, mid: true }),
      cell([P(m, { run: { size: 18 } })], { w: W - 5600 }),
    ] }))
]}));

body.push(H('QUY TẮC NGÔN TỪ BẮT BUỘC', 1));
body.push(khoiMau('KHÔNG ĐƯỢC NÓI',
  'Các sản phẩm trong kit này là MỸ PHẨM (trừ gạc rơ lưỡi là trang thiết bị y tế tự công bố). Không dùng từ “trị / chữa / điều trị”. Chỉ dùng: hỗ trợ, giúp, làm dịu, giảm, ngừa, phòng ngừa, làm sạch. Không hứa bao nhiêu ngày thì khỏi — công ty không có số liệu lâm sàng; nói “mẹ dùng đều rồi theo dõi, tuỳ cơ địa bé”. Không nhắc câu “không lo viêm da” in trên vỏ hộp vì công dụng này không có trong công bố.',
  RED, REDFILL));
body.push(P(''));
body.push(khoiMau('ĐỘ TUỔI — HỎI TUỔI BÉ TRƯỚC KHI TƯ VẤN',
  'Tắm gội thường, Kem bôi da, Dầu massage, Gạc rơ lưỡi — từ sơ sinh. Xịt muỗi — bé trên 3 tháng. Elemis Gold và Bọt rửa tay — bé từ 6 tháng.',
  AMBER, AMBERFILL));

body.push(H('BẢNG TRA NHANH — VẤN ĐỀ NÀO CẦN SẢN PHẨM NÀO', 1));
body.push(P('Số trong ô là bước mà sản phẩm đó đảm nhận: 1 làm sạch · 2 xử lý vấn đề · 3 nuôi dưỡng & bảo vệ.',
  { run: { size: 17, color: MUTE, italics: true } }));
body.push(bangTraNhanh());

VANDE.forEach((v, i) => {
  body.push(new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }));
  body.push(H(`${i + 1}. ${v.ten}`, 1));
  body.push(P(v.phu, { run: { size: 20, color: MUTE, italics: true } }));
  body.push(P(''));
  body.push(soDo(v));
  body.push(P(''));

  const spBo = v.bo.map(k => `${SP[k].ten} (${giaDau(k)})`).join('  +  ');
  const spThem = v.boThem.length ? v.boThem.map(k => `${SP[k].ten} (${giaDau(k)})`).join('  +  ') : null;
  body.push(new Table({ columnWidths: [3000, W - 3000], width: { size: W, type: WidthType.DXA }, rows: [
    new TableRow({ children: [
      cell([P('BỘ SẢN PHẨM TƯ VẤN', { run: { bold: true, color: NAVY, size: 17 } })], { w: 3000, fill: FILL, mid: true }),
      cell([P(spBo, { run: { bold: true, size: 19 } }),
            ...(spThem ? [P('Bán thêm khi khách muốn chăm kỹ hơn: ' + spThem, { run: { size: 17, color: MUTE } })] : [])],
           { w: W - 3000 }),
    ] }),
    new TableRow({ children: [
      cell([P('CÁCH DÙNG', { run: { bold: true, color: NAVY, size: 17 } })], { w: 3000, fill: FILL, mid: true }),
      cell([P(v.cachDung || '⏳ Chưa có hướng dẫn trên tài liệu gốc.', { run: { size: 18 } })], { w: W - 3000 }),
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

body.push(new Paragraph({ pageBreakBefore: true, spacing: { after: 0 }, children: [] }));
body.push(H('BA SẢN PHẨM NGOÀI PHẠM VI KIT NÀY', 1));
body.push(P('Kit này chỉ gồm các sản phẩm dùng cho bé. Ba sản phẩm còn lại trong báo giá OTC dành cho mẹ, không xếp theo vấn đề da bé được: Cốm lợi sữa Curmilk (235.000đ), Bọt vệ sinh phụ nữ Yaocare Women (135.000đ), Nước tắm bà đẻ Dao’Spa Mama (385.000đ). Khi mẹ mua đồ cho bé, vẫn nên hỏi thêm một câu về nhu cầu của chính mẹ.',
  { run: { size: 19 } }));
body.push(P(''));
body.push(H('NHỮNG CHỖ CÒN CHỜ CÔNG TY XÁC NHẬN', 1));
[
 'Cách dùng của Elemis Gold, Dầu massage Oriky và Bọt rửa tay chưa có trên tài liệu gốc — cần chụp hướng dẫn in trên bao bì rồi điền vào ô “Cách dùng”.',
 'Giá: kit này dùng giá báo giá OTC 01/04/2025. Bộ sell-out kit gốc của công ty dùng giá web, cao hơn. Chưa chốt dùng bảng giá nào.',
 'Cách xử lý ca rôm sảy, mụn nhọt: bộ slide công ty hướng dẫn xoa trực tiếp lên da 1–2 phút rồi tắm; file kit docx lại hướng dẫn pha 1ml + 10ml nước thấm 10–20 phút. Kit này dùng cách của bộ slide. Cần chốt một cách duy nhất.',
 'Bộ slide công ty có ghi “bé bị hăm chỉ cần 2–4 ngày dùng Elemis sẽ hết hoàn toàn” và “chàm sữa 7–12 ngày mới hết hoàn toàn”. Kit này không đưa vào vì mâu thuẫn với quy tắc không hứa thời gian. Cần hỏi bộ phận phụ trách xem NVBH có được nói không.',
].forEach(t => body.push(new Paragraph({ bullet: { level: 0 }, spacing: { before: 40, after: 40 },
                                          children: runs(t, { size: 18 }) })));

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
