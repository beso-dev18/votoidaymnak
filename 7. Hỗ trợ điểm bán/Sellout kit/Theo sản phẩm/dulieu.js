// Dữ liệu sell-out kit THEO SẢN PHẨM.
// Bản sửa 28/09/2026 (lần 3) theo hướng Nhi chốt:
//   sản phẩm → 1 combo đầy đủ đi theo sản phẩm đó (gồm mọi SP ghép được) → từng SP trong combo
//   → các vấn đề SP đó giải quyết → 1 câu then chốt về cơ chế (lời dễ hiểu để NV đọc cho khách).
// Sau phần combo là điểm nổi bật khi khách so sánh (bảng so sánh đối thủ, câu chốt, lưu ý).
// SP không ghép được combo thì sell-out 1 mình. Không có giá combo/khuyến mãi: giá cả bộ = cộng giá bán lẻ OTC.
//
// Nguồn (không thêm gì ngoài các file này):
//  - Giá: Danh mục sản phẩm/Bảng giá và chương trình OTC.md (báo giá OTC 01/04/2025)
//  - Thành phần, cơ chế: Danh mục sản phẩm/Phân tích công dụng/Phân tích công dụng sản phẩm.md
//  - So sánh đối thủ: Danh mục sản phẩm/So sánh thị trường/*.md
//  - SP cho mẹ, Gold, bọt rửa tay: Sellout kit/Theo sản phẩm/Bộ sell-out kit theo sản phẩm.md, Danh mục sản phẩm/Giới thiệu sản phẩm/*.md
//  - Tỷ lệ pha, cách dùng: bộ slide Elemis / Oriky / Xịt muỗi của công ty (file gốc không nằm trong repo)
// Quy tắc lời: luôn "hỗ trợ"; không "trị / chữa / điều trị"; không nêu long não, không nêu acid boric như điểm bán; không hứa số ngày.

// ============ SẢN PHẨM ============
// noiBat = [[điểm nổi bật, giải thích + đối thủ]]
// ssanh = bảng so sánh { cot: [tên cột], dong: [[tiêu chí, giá trị SP mình, đối thủ 1, đối thủ 2…]] } — "✔" = điểm mình nổi bật
// chot = câu chốt · luuY = điểm yếu / lời cần tránh
const SP = {
  tamgoi: {
    ten: 'Tắm gội thảo dược Elemis', ngan: 'Tắm gội Elemis', anh: 'sanpham.png', nhom: 'be',
    gia: [['200ml', 150000], ['350ml', 210000], ['500ml', 275000]], tuoi: 'Từ sơ sinh',
    noiBat: [
      ['Một chai lo 4 việc cho da bé', 'Làm sạch không cần kỳ cọ (men đu đủ) · hỗ trợ kháng khuẩn (5 loại lá) · làm dịu nốt rôm (sài đất) · khử mùi mồ hôi (diệp lục tố). Dùng cả tắm và gội, từ sơ sinh.'],
      ['Dịu đến mức lau mặt nhiều lần trong ngày được', 'Dạng dịch chiết thảo dược, không rửa trôi lớp dầu giữ nước của da như sữa tắm nhiều bọt → bé da khô, bé bị chàm vẫn dùng được; pha 2ml : 2 lít để lau mặt cho bé.'],
      ['Chai 500ml tính ra rẻ hơn Kutieskin', 'Chai 500ml giá 275.000đ = <b>55.000đ/100ml</b>, rẻ hơn Kutieskin (~64.000đ/100ml). Hộp 500ml có sẵn tem “Tiết kiệm 75.000đ”.'],
      ['Có chanh và tinh dầu mùi — hai hãng kia không có', 'Chanh làm sạch nhẹ, tinh dầu mùi làm dịu da — không có trong thành phần Dr.Papie, Kutieskin công bố.'],
      ['Sản xuất tại nhà máy dược đạt chuẩn GMP-WHO', 'Nhà máy DK Pharma — thương hiệu xuất phát từ Đại học Dược Hà Nội.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Tắm gội Elemis', 'Dr.Papie', 'Kutieskin'], dong: [
      ['Thảo dược chính', 'Chè xanh, sài đất, khổ qua, kinh giới, sả chanh, tràm gió', '9 thảo dược (chè tuyết, khổ qua, trầu không, tràm, sả…)', 'Nano curcumin + 12 thảo dược (sài đất, kinh giới, khổ qua, chè xanh…)'],
      ['Điểm riêng', '✔ Chanh (làm sạch nhẹ), tinh dầu mùi (làm dịu); men đu đủ, diệp lục tố', 'Dược liệu “chuẩn Âu”, không xà phòng', 'Nano curcumin'],
      ['Giá quy đổi /100ml', '75.000đ (200ml) · ✔ 55.000đ (500ml)', '~50.000đ', '~64.000đ'],
    ] },
    chot: '“Một chai này mẹ dùng cả tắm lẫn gội cho bé từ sơ sinh: có men đu đủ nên không phải kỳ cọ, có lá thảo dược hỗ trợ kháng khuẩn, tắm xong da không bị khô. Mẹ lấy chai 500ml thì tính ra rẻ hơn nhiều loại nước tắm thảo dược khác.”',
    luuY: [
      'Dr.Papie rẻ hơn (~50.000đ/100ml) → đừng so rẻ với Dr.Papie, chốt bằng “một chai lo nhiều việc” và gợi ý chai 500ml.',
      'Kutieskin công bố rộng hơn (có thêm hăm da, viêm da). Elemis không công bố “hăm da” → nói “hỗ trợ vệ sinh vùng hăm”, không nói “chuyên cho hăm”.',
      'Bao bì in “Không lo viêm da” — không nằm trong công bố chính thức, khi tư vấn không nhắc lại.',
    ],
    cachDung: 'Pha <b>1ml Elemis : 1 lít nước</b> 36–37°C (chậu 5 lít → 5ml), <b>không tráng lại</b>. Lau mặt khi bé bị chàm: pha 2ml : 2 lít nước sạch.',
  },

  kem: {
    ten: 'Kem bôi da Elemis', ngan: 'Kem bôi Elemis', anh: 'sp-kem.jpg', nhom: 'be',
    gia: [['Tuýp 30g', 115000]], tuoi: 'Từ sơ sinh',
    noiBat: [
      ['Một tuýp làm đủ 3 việc: chắn + làm dịu, làm liền + giữ ẩm', 'Sudocrem mạnh phần <b>chắn</b> (kẽm oxyd); Bepanthen mạnh phần <b>dưỡng</b> (dexpanthenol). Kem Elemis có cả lớp chắn kẽm oxyd, rau má làm dịu và làm liền da, và Aquaxyl giữ nước bên trong da — mẹ không cần mua 2–3 loại.'],
      ['Duy nhất trong 3 loại kem công bố dùng cho da bỏng do gió, nắng', 'Bepanthen, Sudocrem không công bố công dụng này → bé ra ngoài về má đỏ rát, nứt nẻ thì Elemis là lựa chọn đúng.'],
      ['Thảo dược quen thuộc với mẹ Việt: rau má, ngải cứu', 'Kết hợp thảo dược với kẽm oxyd nano — Bepanthen, Sudocrem không có rau má, ngải cứu.'],
      ['Có Aquaxyl — giữ ẩm từ bên trong', 'Bepanthen, Sudocrem đều không có Aquaxyl.'],
      ['Dùng từ sơ sinh, tuýp 30g gọn để mang theo', 'Một tuýp dùng được cho nhiều vấn đề: hăm, rôm, chàm sữa, muỗi đốt, nứt nẻ, thâm sẹo mới.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Kem bôi Elemis', 'Bepanthen Balm', 'Sudocrem'], dong: [
      ['Chắn nước tiểu, phân (kẽm oxyd)', '✔ Có — kẽm oxyd nano 2%', 'Không có', 'Có'],
      ['Làm dịu, làm liền da bằng thảo dược', '✔ Rau má, ngải cứu', 'Dexpanthenol (tái tạo da)', 'Tinh dầu lavender'],
      ['Giữ ẩm', '✔ Aquaxyl — giữ nước từ bên trong da', 'Lanolin', 'Lanolin'],
      ['Công bố dùng cho da bỏng gió, nắng', '✔ Có', 'Không', 'Không'],
    ] },
    chot: '“Kem này vừa tạo lớp chắn như Sudocrem, vừa có rau má làm dịu đỏ rát, lại giúp da tự giữ nước — mẹ không cần mua 2–3 loại riêng. Hăm, rôm, muỗi đốt, nứt nẻ mẹ đều dùng được một tuýp này.”',
    luuY: [
      'Tính theo gam, Elemis đắt hơn (~38.300đ/10g so với Bepanthen ~24.000đ, Sudocrem ~19.800đ) → bán bằng “một tuýp làm nhiều việc”, không nói “mạnh hơn / tốt hơn”.',
      'Bepanthen có công bố riêng cho nứt đầu ti mẹ, Sudocrem cho vết cắt nhỏ, bỏng nhẹ — đừng chê đối thủ.',
      'Kem chưa công bố chỉ số chống nắng (SPF) → không giới thiệu là kem chống nắng.',
    ],
    cachDung: '<b>Rửa → thấm khô → thoa lớp mỏng phủ kín</b>, ngày 2–3 lần. Vùng tã: thoa <b>mỗi lần thay tã</b>, kể cả khi da chưa đỏ.',
  },

  dau: {
    ten: 'Dầu massage Oriky', ngan: 'Dầu Oriky', anh: 'sp-oriky.jpg', nhom: 'be',
    gia: [['Chai 60ml', 135000]], tuoi: 'Từ sơ sinh',
    noiBat: [
      ['3 loại dầu thực vật trong 1 chai', 'Cám gạo + hạnh nhân + hạt nho — chất béo giống lớp dầu tự nhiên của da nên “vá” được lớp giữ nước. Johnson’s là dầu khoáng (chỉ phủ bên ngoài, không bổ sung chất béo giống của da); Chicco chỉ có dầu cám gạo.'],
      ['Thấm nhanh, không nhờn dính', 'Có caprylic triglyceride phân tử nhỏ — thoa được cả da mặt, không bết.'],
      ['Có thêm vitamin E, chất chống oxy hoá từ cám gạo', 'Bảo vệ da trước nắng, bụi — Johnson’s không liệt kê vitamin E trong thành phần.'],
      ['Một chai nhiều việc', 'Massage hằng ngày, dưỡng da khô, dưỡng da sau đợt hăm, làm mềm vảy cứt trâu, có tinh dầu tràm gió cho bé thư giãn.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Dầu Oriky', 'Johnson’s Baby Oil', 'Chicco (cám gạo)'], dong: [
      ['Loại dầu', '✔ 3 dầu thực vật: cám gạo + hạnh nhân + hạt nho', 'Dầu khoáng', 'Dầu cám gạo'],
      ['Chống oxy hoá (vitamin E)', '✔ Có, thêm gamma-oryzanol', 'Không liệt kê', 'Có'],
      ['Tinh dầu thư giãn', '✔ Tràm gió', 'Hương liệu', 'Không hương liệu'],
    ] },
    chot: '“Dầu này có 3 loại dầu thực vật giống lớp dầu tự nhiên của da bé, thấm nhanh không bết. Mẹ massage sau tắm để khoá ẩm, da bé mềm, bớt khô ngứa.”',
    luuY: [
      'Oriky có BHT (chất giữ dầu không bị ôi); Johnson’s, Chicco quảng cáo “không BHT”. Khách hỏi thì trả lời thật, không né.',
      'Giá cao hơn (~112.500đ/50ml so với Johnson’s ~70.000–100.000đ, Chicco ~82.000đ) → bán bằng giá trị “3 dầu thực vật”.',
    ],
    cachDung: 'Thoa lên vùng da khô, <b>mát-xa nhẹ</b>, dùng trước hoặc sau khi tắm.',
  },

  gold: {
    ten: 'Gel tắm gội Elemis Gold', ngan: 'Elemis Gold', anh: 'sp-gold.jpg', nhom: 'be',
    gia: [['220ml', 220000]], tuoi: 'Bé từ 6 tháng',
    noiBat: [
      ['Có kim ngân — chỉ bản Gold mới có', 'Kim ngân làm dịu nốt mẩn. Dr.Papie, Kutieskin và cả bản Elemis thường đều không có. Khách hỏi “sao Gold đắt hơn” thì đây là câu trả lời.'],
      ['Có hương nhu — hai hãng kia không có', 'Hương nhu kháng khuẩn tự nhiên, không thấy trong thành phần Dr.Papie, Kutieskin công bố.'],
      ['Thiên về giữ ẩm', 'Có glycerin — hợp bé từ 6 tháng da khô, hay mẩn ngứa.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Elemis Gold', 'Dr.Papie', 'Kutieskin'], dong: [
      ['Thảo dược chính', '✔ Hương nhu, kim ngân, chè xanh', 'Chè Shan Tuyết, khổ qua, kinh giới, cỏ mần trầu, sả, chanh, tràm', 'Nano curcumin + sài đất, kinh giới, khổ qua, chè xanh'],
      ['Điểm riêng', '✔ Kim ngân + hương nhu', 'Dược liệu “chuẩn Âu”', 'Nano curcumin'],
    ] },
    chot: '“Bé mẩn ngứa nhiều thì mẹ dùng bản Gold, có kim ngân làm dịu da mà các loại khác không có, lại giữ ẩm tốt hơn.”',
    luuY: [
      'Chỉ dùng cho bé từ 6 tháng. Bé nhỏ hơn → bán Tắm gội Elemis thường.',
      'Giá cao nhất nhóm (100.000đ/100ml so với Dr.Papie ~50.000đ, Kutieskin ~64.000đ).',
      'Gold không có sài đất, khổ qua, kinh giới, tràm gió → đừng nói “Gold có mọi thứ bản thường có”. Web ghi “100% thảo dược”, “hăm da, viêm da” nhưng không có trong công bố → không nhắc lại.',
    ],
    cachDung: '⏳ Cách dùng Elemis Gold chưa có trên tài liệu gốc — chờ công ty xác nhận.',
  },

  xit: {
    ten: 'Xịt muỗi thảo dược Elemis', ngan: 'Xịt muỗi Elemis', anh: 'sp-xit.jpg', nhom: 'be',
    gia: [['50ml', 90000], ['120ml', 195000]], tuoi: 'Bé trên 3 tháng',
    noiBat: [
      ['Dùng được cho bé từ 3 tháng', 'Remos Baby dùng từ 6 tháng, Soffell không dùng cho trẻ dưới 4 tuổi → bé 3–6 tháng thì trong 3 loại chỉ Elemis dùng được. Dùng được cả cho phụ nữ có thai.'],
      ['Xua muỗi bằng tinh dầu thực vật', 'Sả Java, sả chanh, bạch đàn chanh — không dùng Picaridin (Remos) hay DEET (Soffell).'],
      ['Có chứng nhận hiệu quả với muỗi sốt xuất huyết', 'Xua muỗi Ae. aegypti: <b>100% ngay sau xịt, 99,42% sau 1 giờ</b>, kéo dài 3 giờ (tài liệu giới thiệu sản phẩm của công ty).'],
      ['Một chai 2 việc: xua muỗi + làm dịu vết đốt', 'Remos, Soffell chỉ công bố chống muỗi.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Xịt muỗi Elemis', 'Remos Baby', 'Soffell'], dong: [
      ['Hoạt chất xua muỗi', '✔ Tinh dầu sả Java, sả chanh, bạch đàn chanh', 'Picaridin + tinh dầu khuynh diệp', 'DEET 13%'],
      ['Tuổi dùng', '✔ Từ 3 tháng', 'Từ 6 tháng', 'Không dùng dưới 4 tuổi'],
      ['Làm dịu vết muỗi đốt', '✔ Có', 'Không công bố', 'Không công bố'],
    ] },
    chot: '“Xịt này xua muỗi bằng tinh dầu sả, bạch đàn chanh, bé từ 3 tháng đã dùng được, có chứng nhận xua muỗi sốt xuất huyết. Mẹ nhớ xịt lại sau 2–3 tiếng.”',
    luuY: [
      'Hiệu quả công bố 3 giờ, ngắn hơn Remos (6 giờ), Soffell (8 giờ) → chủ động dặn khách xịt lại, đừng giấu.',
      'Không nói “100% tự nhiên, không hoá chất” vì sản phẩm có cồn và phụ gia.',
    ],
    cachDung: 'Xịt lên quần áo và vùng da hở, <b>tránh mặt và bàn tay bé</b>; xịt lại sau <b>2–3 giờ</b>.',
  },

  bot: {
    ten: 'Bọt rửa tay Elemis', ngan: 'Bọt rửa tay Elemis', anh: 'sp-bot.jpg', nhom: 'be',
    gia: [['Chai 250ml', 245000]], tuoi: 'Bé từ 6 tháng',
    noiBat: [
      ['Giữ ẩm kép: Aquaxyl + glycerin + lô hội', 'Rửa nhiều lần trong ngày tay không khô — Chicco không có Aquaxyl.'],
      ['Dạng bọt ra sẵn, bé tự bơm, tự rửa', 'Không cần xoa tạo bọt, mỗi lần dùng ít — tiện cho bé tập thói quen rửa tay.'],
      ['Có 4 thảo dược', 'Sả chanh, trà xanh (hỗ trợ kháng khuẩn), lô hội, cúc la mã (làm dịu).'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Bọt rửa tay Elemis', 'Chicco 0M+'], dong: [
      ['Giữ ẩm', '✔ Aquaxyl + glycerin + lô hội', 'Glycerin thực vật'],
      ['Thảo dược', '✔ Sả chanh, trà xanh, lô hội, cúc la mã', 'Trà xanh, cúc la mã'],
    ] },
    chot: '“Bé đi học rửa tay nhiều nên tay hay khô. Bọt này có thêm chất giữ ẩm Aquaxyl, rửa xong tay vẫn mềm; dạng bọt nên bé tự bơm, tự rửa được.”',
    luuY: [
      'Giá cao hơn Chicco (245.000đ so với khoảng 150.000đ, cùng 250ml); Elemis dùng từ 6 tháng, Chicco dùng từ sơ sinh và đạt chuẩn EU.',
      'Không nói “kháng khuẩn mạnh hơn” vì chưa có số liệu so sánh.',
    ],
    cachDung: '⏳ Hướng dẫn chi tiết chưa có trên tài liệu gốc — làm theo nhãn sản phẩm.',
  },

  gac: {
    ten: 'Gạc rơ lưỡi Elemis', ngan: 'Gạc rơ lưỡi Elemis', anh: 'sp-gac.jpg', nhom: 'be',
    gia: [['Hộp 30 gói', 115000]], tuoi: 'Từ sơ sinh',
    noiBat: [
      ['Ngang giá Dr.Papie nhưng nhiều dược liệu hơn', '115.000đ/30 gói (Dr.Papie 110.000–120.000đ/30 gói). Elemis có thêm <b>rau ngót</b> và <b>chè xanh</b> (hoặc cúc la mã) — Dr.Papie chỉ có lá hẹ.'],
      ['Công bố làm được nhiều việc hơn', 'Phòng tưa lưỡi, nấm lưỡi, viêm nướu, hôi miệng; ngừa sâu răng; giảm khó chịu khi mọc răng. Dr.Papie chỉ công bố làm sạch hằng ngày.'],
      ['2 phiên bản cho 2 kiểu bé', 'Hương dưa lưới cho bé dễ hợp tác; không mùi (có cúc la mã làm dịu nướu) cho bé hay ọe.'],
      ['Tẩm sẵn, mỗi gói 1 lần', 'Xé ra dùng ngay, sạch sẽ — tiện hơn tự quấn gạc chấm nước muối.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Gạc rơ lưỡi Elemis', 'Gạc Dr.Papie'], dong: [
      ['Dược liệu', '✔ Lá hẹ + rau ngót + chè xanh (hoặc cúc la mã)', 'Lá hẹ'],
      ['Công dụng công bố', '✔ Phòng tưa, nấm lưỡi, viêm nướu, hôi miệng; ngừa sâu răng; giảm khó chịu khi mọc răng', 'Làm sạch lưỡi, nướu, răng, miệng hằng ngày'],
      ['Giá hộp 30 gói', '115.000đ', '110.000–120.000đ'],
    ] },
    chot: '“Gạc có rau ngót — thứ các bà hay dùng rơ lưỡi cho bé — thêm lá hẹ, chè xanh, giá lại ngang các loại khác. Bé hay ọe thì mẹ lấy loại không mùi.”',
    luuY: [
      'Thành phần có acid boric — <b>không nêu như điểm bán hàng</b>; khách hỏi về độ an toàn thì chờ R&D xác nhận nồng độ trước khi trả lời.',
    ],
    cachDung: 'Rửa tay, đeo gạc vào ngón trỏ, lau nhẹ <b>má trong → nướu → lưỡi</b>. 1–2 lần/ngày, sau bú 30 phút; bé đang tưa thì 3 lần/ngày. Mỗi gói dùng 1 lần.',
  },

  // ===================== SẢN PHẨM CHO MẸ =====================
  curmilk: {
    ten: 'Cốm lợi sữa Curmilk', ngan: 'Curmilk', anh: null, nhom: 'me', loai: 'Thực phẩm bảo vệ sức khoẻ',
    gia: [['Hộp 20 gói x 5g', 235000]], tuoi: 'Mẹ sau sinh, đang cho con bú',
    noiBat: [
      ['Lo cả 2 nỗi lo của mẹ: ít sữa và tắc sữa', 'Chùm ngây, thông thảo hỗ trợ cải thiện tình trạng ít sữa; curcumin hỗ trợ giảm nguy cơ tắc sữa.'],
      ['Có curcumin (nghệ) — Mabio không có', 'Theo hồ sơ công bố còn có piperin giúp hấp thu curcumin tốt hơn nhiều lần; Mabio không có curcumin lẫn piperin.'],
      ['Chùm ngây — có nghiên cứu lâm sàng', 'Nghiên cứu ghi nhận lá chùm ngây làm tăng prolactin (hormone tạo sữa), lại giàu vitamin, khoáng chất cho mẹ.'],
      ['Sản xuất tại nhà máy dược đạt chuẩn GMP-WHO', 'Nhà máy DK Pharma — thương hiệu xuất phát từ Đại học Dược Hà Nội.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Curmilk', 'Mabio'], dong: [
      ['Thành phần', '✔ Chùm ngây, thông thảo, curcumin (+ chè vằng, bồ công anh, piperin theo hồ sơ công bố)', 'Chè vằng, bạch biển súc, ích mẫu, tàu bay, hương phụ'],
      ['Hỗ trợ giảm tắc sữa bằng curcumin', '✔ Có', 'Không'],
    ] },
    chot: '“Cốm này vừa hỗ trợ mẹ có thêm sữa nhờ chùm ngây, thông thảo, vừa có nghệ hỗ trợ giảm nguy cơ tắc tia sữa. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.”',
    luuY: [
      'Là <b>thực phẩm bảo vệ sức khoẻ</b>: bắt buộc nói “Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh”; chỉ dùng từ “hỗ trợ”, không hứa bao lâu có sữa.',
      'Mabio công bố rộng hơn (thêm hỗ trợ giấc ngủ, giảm stress, chất lượng sữa) và phổ biến hơn — nói trung thực, không nói “tốt hơn”.',
      'Có sữa bột trong thành phần → hỏi trước nếu mẹ dị ứng đạm sữa bò, không dung nạp lactose.',
      '⏳ Bảng báo giá và hồ sơ công bố ghi thành phần khác nhau (chè vằng, bồ công anh, piperin) — chờ công ty xác nhận.',
    ],
    cachDung: '⏳ Liều dùng chưa có trên tài liệu gốc — chờ công ty xác nhận (TPBVSK phải theo đúng liều công bố, không tự đặt liều).',
  },

  yaocare: {
    ten: 'Bọt vệ sinh phụ nữ Yaocare Women', ngan: 'Yaocare Women', anh: null, nhom: 'me',
    gia: [['Chai 100ml', 135000]], tuoi: 'Phụ nữ — dùng được cả cho nam',
    noiBat: [
      ['Giữ đúng độ chua tự nhiên của vùng kín', 'Có acid lactic — cùng loại acid lợi khuẩn tự tạo ra. Khác hẳn việc dùng sữa tắm, xà phòng (tính kiềm) làm mất độ chua, dễ ngứa, có mùi.'],
      ['Có nghệ đắng và bạch đồng nữ — Lactacyd, Dạ Hương không có', 'Hai dược liệu cổ truyền dùng cho các vấn đề phụ khoa; thêm lá trầu không quen thuộc.'],
      ['Dùng được cho cả nam giới', 'Công bố rõ dùng cho cả nam và nữ, trước và sau quan hệ — Lactacyd, Dạ Hương không công bố.'],
      ['Dạng bọt', 'Dễ dùng, dịu nhẹ, có lô hội, bạc hà cho cảm giác mát.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Yaocare Women', 'Lactacyd Soft & Silky', 'Dạ Hương'], dong: [
      ['Giữ pH bằng acid lactic', 'Có', 'Có', 'Có'],
      ['Dược liệu', '✔ Nghệ đắng, bạch đồng nữ, trầu không, lô hội', 'Collagen, vitamin E', 'Trầu không, nước hoa hồng'],
      ['Dùng cho nam', '✔ Có công bố', 'Không công bố', 'Không công bố'],
    ] },
    chot: '“Sữa tắm thường làm mất độ chua tự nhiên của vùng kín nên dễ ngứa, có mùi. Yaocare có acid lactic giữ độ chua đó, thêm trầu không, nghệ đắng, bạch đồng nữ — dùng hằng ngày được, cả nam cũng dùng được.”',
    luuY: [
      'Giá cao hơn Dạ Hương nhiều (135.000đ so với 30.000đ/100ml) → bán bằng bộ dược liệu và công dụng cho cả nam, không nói “hiệu quả hơn”.',
      'Là mỹ phẩm: chỉ nói “hỗ trợ làm sạch, hỗ trợ kháng khuẩn, giảm ngứa”, <b>không nói “chữa / trị viêm phụ khoa”</b>.',
      'Web ghi “không chứa hương liệu, hoá chất” nhưng thành phần có chất tạo bọt và hương liệu → không nhắc lại; khách hỏi thì trả lời thật.',
    ],
    cachDung: '⏳ Hướng dẫn chi tiết chưa có trên tài liệu gốc — làm theo nhãn sản phẩm.',
  },

  daospa: {
    ten: 'Nước tắm Dao’Spa Mama', ngan: 'Dao’Spa Mama', anh: null, nhom: 'me',
    gia: [['Hộp 3 lọ x 250ml', 385000]], tuoi: 'Mẹ sau sinh',
    noiBat: [
      ['Rẻ hơn đối thủ cùng phân khúc', 'Hộp 3 lọ 385.000đ = <b>~51.300đ/100ml</b>, rẻ hơn Lovin’Skin Mama (~71.000đ/100ml). Sản phẩm hiếm hoi của công ty có giá tốt hơn đối thủ trực tiếp — nhớ dùng lý lẽ này.'],
      ['Bài tắm của người Dao', '5 dược liệu vùng cao (cơm cháy, hoa ông lão, liên đằng hoa nhỏ, chùa dù, màng tang) — Lovin’Skin Mama dùng bộ dược liệu khác hẳn.'],
      ['Dùng được cả xông và tắm', 'Tác động qua da khi tắm và qua hơi thở khi xông.'],
      ['Làm ấm da, hỗ trợ phục hồi da, tóc sau sinh', 'Lovin’Skin Mama, Lovely không công bố hai công dụng này.'],
    ],
    ssanh: { cot: ['Tiêu chí', 'Dao’Spa Mama', 'Lovin’Skin Mama', 'Lovely'], dong: [
      ['Dược liệu', '✔ Bài tắm người Dao: cơm cháy, hoa ông lão, liên đằng hoa nhỏ, chùa dù, màng tang', 'Sài đất, lá khế, rau má, nghệ vàng', 'Không có dữ liệu'],
      ['Làm ấm da, phục hồi da/tóc sau sinh', '✔ Có công bố', 'Không công bố', 'Không công bố'],
      ['Giá quy đổi /100ml', '✔ ~51.300đ', '~71.000đ', '~19.900đ'],
    ] },
    chot: '“Đây là bài tắm của người Dao cho mẹ sau sinh: pha nước ấm tắm hoặc xông, người ấm lên, đỡ mỏi, hết mùi. Hộp 3 lọ tính ra còn rẻ hơn các loại nước tắm sau sinh khác.”',
    luuY: [
      'Tác dụng theo y học cổ truyền, chưa có nghiên cứu riêng → chỉ nói “hỗ trợ giảm đau mỏi”, không nói “chữa đau xương khớp, hậu sản”.',
      'Là nước xông tắm toàn thân, không phải dung dịch vệ sinh vùng kín → khách cần vệ sinh vùng kín thì giới thiệu Yaocare Women.',
      'Lovely rẻ hơn (~19.900đ/100ml) nhưng ở phân khúc phổ thông — so với Lovin’Skin Mama.',
    ],
    cachDung: 'Pha vào nước ấm để <b>tắm hoặc xông</b>. ⏳ Tỷ lệ pha, thời gian, số lần và mốc sau sinh dùng được chưa có trên tài liệu gốc — chờ công ty xác nhận.',
  },
};

// ============ VẤN ĐỀ MỖI SẢN PHẨM GIẢI QUYẾT ============
// Mỗi dòng: [mã, vấn đề, 1 câu then chốt về cơ chế].
// Cách viết câu then chốt (theo mẫu Nhi đưa): vấn đề xảy ra thế nào → chất gì trong sản phẩm → nó làm gì → vì sao hết vấn đề.
// Lời nói thường, NV đọc lên cho khách nghe là hiểu.
const VD = {
  tamgoi: [
    ['ham', 'Hăm da (vùng tã, nếp gấp)', 'Da đang hăm mà kỳ cọ thì càng trầy, càng rát. Men đu đủ (papain) trong nước tắm làm mềm lớp da chết và chất bẩn bám trên da nên chỉ cần dội nước là sạch; lá chè xanh, sả, tràm gió có chất kháng khuẩn tự nhiên làm giảm vi khuẩn, chỗ hăm không nổi mụn mủ.'],
    ['rom', 'Rôm sảy, mụn nhọt', 'Rôm nổi lên vì da chết, bụi bít lỗ chân lông, mồ hôi kẹt lại dưới da. Men đu đủ làm bong lớp bít đó để mồ hôi thoát ra; sài đất (wedelolactone) làm nốt rôm bớt đỏ, bớt ngứa; chè xanh, sả, khổ qua kháng khuẩn để nốt bé gãi không thành mụn nhọt.'],
    ['kho', 'Chàm sữa, da khô', 'Sữa tắm nhiều bọt rửa trôi lớp dầu tự nhiên giữ nước của da nên da càng khô. Nước tắm dạng dịch chiết thảo dược làm sạch nhẹ, không lấy đi lớp dầu đó — dịu đến mức pha loãng lau mặt bé nhiều lần trong ngày được.'],
    ['cuttrau', 'Cứt trâu (vảy da đầu)', 'Men đu đủ và chanh (acid citric) làm mảng vảy đã được dầu làm mềm trôi đi theo nước khi gội — không phải cạy, không phải chà.'],
    ['mui', 'Mồ hôi, mùi ở ngấn cổ, nách', 'Diệp lục tố hút và giữ lại các phân tử gây mùi mồ hôi, tắm xong bé thơm tho.'],
    ['nong', 'Bé nóng, ra nhiều mồ hôi', 'Tinh dầu tràm gió, sả chanh còn lại trên da sau tắm bay hơi từ từ, mang theo hơi nóng nên bé thấy mát — vì vậy tắm xong không tráng lại nước sạch.'],
  ],
  kem: [
    ['ham', 'Hăm da (vùng tã, nếp gấp)', 'Nước tiểu, phân ngấm lâu vào da là thứ làm da bé đỏ, rát. Kẽm oxyd trong kem tạo một lớp màng mỏng như áo mưa phủ lên da, nước tiểu và phân không chạm vào da được; ở ngấn cổ, nách lớp màng làm da trơn, bớt cọ xát.'],
    ['diu', 'Nốt rôm, nốt muỗi đốt, chỗ bé gãi đỏ', 'Da bị kích ứng tiết ra những chất làm da đỏ và rát. Rau má (acid asiatic) làm giảm các chất này nên nốt bớt đỏ, bớt rát; tinh dầu ngải cứu bay hơi cho cảm giác mát và làm yếu vi khuẩn ở chỗ bé gãi trầy.'],
    ['nut', 'Chàm sữa, nứt nẻ, da tay nứt', 'Rau má (asiaticoside) thúc da tạo thêm tế bào mới và collagen nên chỗ nứt, bong mau liền; Aquaxyl làm lớp da ngoài cùng khít lại như tường gạch trét kín vữa, nước bên trong da không thoát ra được.'],
    ['gionang', 'Má đỏ rát do gió, nắng', 'Lớp màng kẽm oxyd che bớt gió hanh, rau má làm dịu chỗ đỏ rát — trong 3 loại kem phổ biến, đây là loại duy nhất công bố dùng cho da bỏng do gió, nắng.'],
    ['seo', 'Vết thâm, sẹo mới', 'Rau má thúc da tạo tế bào mới nên vùng da non mới lên phẳng và đều màu hơn — hỗ trợ làm mờ thâm, sẹo còn mới.'],
  ],
  dau: [
    ['kho', 'Chàm sữa, da khô ráp', 'Da có một lớp dầu mỏng như cái nắp đậy giữ nước; da khô, da chàm là do nắp này mỏng đi. Dầu hạnh nhân, hạt nho, cám gạo có chất béo giống lớp dầu đó, thoa vào là đậy nắp lại — da mềm, hết ráp, bớt bong vảy.'],
    ['sauham', 'Da khô bong sau đợt hăm', 'Da ngâm ẩm nhiều ngày mất lớp dầu tự nhiên nên hết đỏ thì hay khô bong; thoa dầu để bù lại lớp dầu đó, da mềm, lần sau khó bị hăm.'],
    ['cuttrau', 'Cứt trâu (vảy da đầu)', 'Dầu ngấm vào mảng vảy khô cứng, làm vảy mềm ra và tách khỏi da đầu — mẹ không phải cạy, da đầu bé không bị trầy.'],
    ['tham', 'Da non dễ thâm khi ra nắng', 'Vitamin E và gamma-oryzanol trong cám gạo là chất chống oxy hoá, như tấm khiên chặn tác hại của nắng, bụi lên da — vùng da non bớt thâm.'],
    ['ngu', 'Bé khó ngủ, quấy', 'Mùi thơm ấm của tinh dầu tràm gió cùng động tác massage làm cơ ấm lên, bé thư giãn, dễ vào giấc.'],
  ],
  gold: [
    ['man', 'Mẩn ngứa nhiều, da nhạy cảm', 'Da bị kích ứng tiết ra những chất làm nốt đỏ lên và ngứa. Kim ngân (acid chlorogenic, luteolin) làm giảm các chất này nên nốt mẩn bớt đỏ, bớt ngứa — thành phần chỉ bản Gold mới có.'],
    ['rom', 'Rôm sảy, mụn nhọt', 'Men đu đủ làm bong lớp da chết bít lỗ chân lông để mồ hôi thoát ra; hương nhu, chè xanh, sả có chất kháng khuẩn tự nhiên, nốt rôm bé gãi không bị nhiễm khuẩn thành mụn nhọt.'],
    ['kho', 'Da khô, hay ngứa', 'Glycerin như miếng bọt biển siêu nhỏ, hút và giữ nước lại trên da ngay khi tắm — da đủ nước thì bớt ngứa.'],
  ],
  xit: [
    ['muoi', 'Muỗi đốt (kể cả muỗi sốt xuất huyết)', 'Muỗi tìm người bằng cách ngửi mùi cơ thể và hơi thở. Tinh dầu sả, bạch đàn chanh có chất citronellal, citral bay hơi, tạo một lớp mùi quanh da bé. Lớp mùi này đánh lạc khứu giác của muỗi, muỗi mất phương hướng, không bay lại gần.'],
    ['lau', 'Xịt một lần giữ được lâu hơn', 'An tức hương và vanillin bay hơi rất chậm, như cái neo giữ tinh dầu lại trên da lâu hơn; tinh dầu vẫn bay hết dần nên xịt lại sau 2–3 giờ.'],
    ['ngua', 'Nốt vừa bị đốt, ngứa', 'Cồn trong xịt bay hơi rất nhanh, lấy đi hơi nóng nên nốt mát ngay; tinh dầu bạch đàn chanh làm dịu, bé bớt ngứa, bớt gãi.'],
  ],
  bot: [
    ['ban', 'Tay bẩn, nhiều vi khuẩn', 'Chất tạo bọt từ dầu dừa có một đầu bám vào bẩn, một đầu bám vào nước — xả nước là bẩn trôi theo; sả chanh, trà xanh có chất kháng khuẩn tự nhiên làm yếu vi khuẩn còn sót trên tay.'],
    ['kho', 'Tay khô ráp do rửa nhiều lần', 'Xà phòng thường rửa trôi cả lớp dầu của da tay; chất tạo bọt này dịu, ít lấy đi dầu, lại có Aquaxyl, glycerin, lô hội giữ nước — rửa nhiều lần tay vẫn mềm.'],
    ['rat', 'Tay rát đỏ', 'Lô hội tạo lớp gel mỏng làm dịu, cúc la mã (bisabolol) làm giảm kích ứng — tay rửa nhiều lần không bị rát đỏ.'],
  ],
  gac: [
    ['tua', 'Tưa lưỡi, nấm lưỡi', 'Cặn sữa đọng lại là thức ăn của nấm tưa, và làm miệng bé chua — môi trường nấm rất thích. Muối cùng động tác lau cuốn sạch cặn sữa, baking soda làm miệng bớt chua nên nấm khó phát triển.'],
    ['nuou', 'Viêm nướu, vi khuẩn trong miệng', 'Lá hẹ có chất lưu huỳnh (giống chất trong tỏi), chè xanh có EGCG — cả hai làm nấm và vi khuẩn khó sinh sôi; rau ngót là lá các bà vẫn dùng rơ lưỡi phòng tưa cho trẻ.'],
    ['rang', 'Sâu răng, hôi miệng', 'Vi khuẩn sâu răng ăn đường rồi thải ra chất chua làm mòn răng; xylitol là loại “đường” chúng không ăn được, nên không sinh chất chua, miệng bớt mảng bám, bớt hôi.'],
    ['mocrang', 'Khó chịu khi mọc răng', 'Cúc la mã (chỉ có ở bản không mùi) làm dịu phần nướu đang sưng.'],
  ],
  curmilk: [
    ['itsua', 'Mẹ ít sữa', 'Lá chùm ngây giàu vitamin, khoáng chất — “nguyên liệu” để cơ thể mẹ tạo sữa, và được nghiên cứu ghi nhận làm tăng prolactin, hormone ra lệnh cho tuyến vú tạo sữa; thông thảo là vị thuốc cổ truyền giúp sữa lưu thông.'],
    ['tacsua', 'Lo tắc tia sữa', 'Tắc sữa thường do ống dẫn sữa bị sưng viêm nên sữa khó chảy; curcumin trong nghệ làm giảm viêm, ống dẫn sữa bớt sưng, sữa chảy dễ hơn.'],
  ],
  yaocare: [
    ['ngua', 'Ngứa, có mùi vùng kín', 'Vùng kín khoẻ có độ chua tự nhiên do lợi khuẩn tạo ra, chính độ chua này giữ vi khuẩn, nấm hại không phát triển; sữa tắm thường làm mất độ chua đó. Acid lactic trong Yaocare giữ lại đúng độ chua ấy, lá trầu không làm yếu vi khuẩn, nấm gây ngứa, gây mùi.'],
    ['kichung', 'Kích ứng, rát, khó chịu', 'Nghệ đắng làm dịu chỗ bị kích ứng; tinh dầu bạc hà (menthol) tạo cảm giác mát lấn át cảm giác ngứa; lô hội giữ nước nên dùng hằng ngày không khô rát.'],
  ],
  daospa: [
    ['mui', 'Mùi “bà đẻ”', 'Màng tang có citral (chất cũng có trong sả chanh) làm yếu vi khuẩn phân huỷ mồ hôi, sản dịch — thứ gây ra mùi; tắm xong người sạch, thơm thảo mộc.'],
    ['moi', 'Đau mỏi, người lạnh sau sinh', 'Nước ấm làm mạch máu dưới da giãn ra, máu lưu thông, cơ đang mỏi mềm ra; cơm cháy, hoa ông lão, liên đằng hoa nhỏ là các vị thuốc trong bài tắm của người Dao, hỗ trợ giảm đau nhức.'],
    ['ngu', 'Mệt, căng thẳng, khó ngủ', 'Khi xông, hơi tinh dầu chùa dù, màng tang đi vào mũi cho cảm giác ấm, thông thoáng; người ấm lên rồi hạ nhiệt sau tắm giúp mẹ dễ ngủ hơn.'],
  ],
};

// ============ COMBO ĐẦY ĐỦ THEO TỪNG SẢN PHẨM ============
// sp = các sản phẩm trong combo (SP chính đứng đầu) · chon = với SP đi kèm, chỉ hiện các vấn đề liên quan combo (bỏ trống = hiện tất cả)
// Không có giá combo/khuyến mãi: giá cả bộ = cộng giá bán lẻ OTC (quy cách nhỏ nhất).
const COMBO = {
  tamgoi: { sp: ['tamgoi', 'kem', 'dau'],
    chot: '“Bộ này đủ 3 bước cho da bé: tắm Elemis cho sạch mà không khô da, chỗ nào hăm, rôm, nứt thì thoa kem, rồi massage dầu Oriky để khoá ẩm. Hăm, rôm, chàm sữa, da khô, cứt trâu mẹ đều xử lý được bằng bộ này.”',
    kham: 'Da trợt, chảy dịch, có mủ, mùi hôi, lan nhanh; bé sốt, quấy nhiều; mảng đỏ tươi có chấm đỏ nhỏ xung quanh (nghi nấm); chàm rỉ dịch, đóng vảy vàng; da đầu dưới vảy đỏ rực, rỉ dịch.' },
  kem: { sp: ['kem', 'tamgoi', 'dau'],
    ghiChu: 'Kem bôi còn đi cùng Elemis Gold, Xịt muỗi, Bọt rửa tay — xem combo của 3 sản phẩm đó.',
    chot: '“Kem xử lý chỗ đang hăm, rôm, nứt; nhưng muốn da bé khỏi bị lại thì mẹ tắm bằng Elemis cho sạch mà không khô da, và massage dầu Oriky để giữ ẩm — đủ bộ 3 món.”',
    kham: 'Da trợt, chảy dịch, có mủ, mùi hôi, lan nhanh; bé sốt, quấy nhiều; mảng đỏ tươi có chấm đỏ nhỏ xung quanh (nghi nấm — kem kẽm không xử lý được nấm); sẹo lồi, sẹo co kéo.' },
  dau: { sp: ['dau', 'tamgoi', 'kem'],
    chot: '“Dầu này khoá ẩm cho da bé, nhưng mẹ phải đổi sang nước tắm không làm khô da thì mới giữ được; chỗ nào đã nứt, đỏ thì thoa thêm kem — đủ bộ thì da bé mềm hẳn.”',
    kham: 'Da nứt sâu chảy máu, phồng rộp; chàm rỉ dịch, đóng vảy vàng; da đầu dưới vảy đỏ rực, rỉ dịch, có mùi.' },
  gold: { sp: ['gold', 'kem'], chon: { kem: ['diu', 'nut'] },
    ghiChu: 'Chỉ cho bé từ 6 tháng — bé nhỏ hơn bán combo của Tắm gội Elemis.',
    chot: '“Bé mẩn ngứa nhiều thì mẹ tắm bản Gold, có kim ngân làm dịu da mà các loại khác không có; chỗ nào bé gãi đỏ thì chấm thêm kem cho dịu, mau lành.”',
    kham: 'Mẩn lan nhanh toàn thân, nốt có mủ, chảy dịch, hoặc bé sốt kèm nổi ban.' },
  xit: { sp: ['xit', 'kem'], chon: { kem: ['diu', 'seo'] },
    ghiChu: 'Xịt muỗi dùng cho bé trên 3 tháng.',
    chot: '“Mùi tinh dầu sả trong xịt này làm muỗi không ngửi ra bé nên không bay lại gần; nốt nào đã bị đốt, bé gãi đỏ thì chấm kem cho dịu, đỡ nhiễm khuẩn — một món phòng, một món xử lý.”',
    kham: 'Nốt đốt sưng to bất thường, lan rộng, có mủ, hoặc bé sốt.' },
  bot: { sp: ['bot', 'kem'], chon: { kem: ['nut'] },
    ghiChu: 'Bọt rửa tay dùng cho bé từ 6 tháng.',
    chot: '“Rửa tay nhiều thì mẹ đổi sang bọt rửa tay có chất giữ ẩm để tay không khô thêm; chỗ nào đã nứt thì tối thoa kem cho mau lành.”',
    kham: 'Tay nứt sâu chảy máu, hoặc nổi mụn nước ngứa nhiều.' },
  gac: { sp: ['gac'],
    ghiChu: 'Chưa có combo — sell-out 1 mình.',
    chot: '“Gạc có rau ngót — thứ các bà hay dùng rơ lưỡi cho bé — thêm lá hẹ, chè xanh, giá lại ngang các loại khác. Bé hay ọe thì mẹ lấy loại không mùi.”',
    kham: 'Mảng trắng dày lau không ra, bé bỏ bú hoàn toàn, sốt hoặc quấy nhiều.' },
  curmilk: { sp: ['curmilk'],
    ghiChu: 'Chưa có combo — sell-out 1 mình.',
    chot: '“Cốm này vừa hỗ trợ mẹ có thêm sữa nhờ chùm ngây, thông thảo, vừa có nghệ hỗ trợ giảm nguy cơ tắc tia sữa. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.”',
    kham: 'Vú sưng đỏ, đau nhiều, có cục cứng kèm sốt (dấu hiệu viêm tuyến vú) → khuyên đi khám ngay.' },
  yaocare: { sp: ['yaocare'],
    ghiChu: 'Chưa có combo — sell-out 1 mình.',
    chot: '“Sữa tắm thường làm mất độ chua tự nhiên của vùng kín nên dễ ngứa, có mùi. Yaocare có acid lactic giữ độ chua đó, thêm trầu không, nghệ đắng — dùng hằng ngày được, cả nam cũng dùng được.”',
    kham: 'Khí hư bất thường, ngứa nhiều, đau, mùi hôi kéo dài → khuyên đi khám phụ khoa.' },
  daospa: { sp: ['daospa'],
    ghiChu: 'Chưa có combo — sell-out 1 mình.',
    chot: '“Đây là bài tắm của người Dao cho mẹ sau sinh: pha nước ấm tắm hoặc xông, người ấm lên, đỡ mỏi, hết mùi. Hộp 3 lọ tính ra còn rẻ hơn các loại nước tắm sau sinh khác.”',
    kham: 'Đau nhiều, kéo dài, sốt, hoặc ra sản dịch bất thường → khuyên đi khám.' },
};

const THU_TU = ['tamgoi', 'kem', 'dau', 'gold', 'xit', 'bot', 'gac', 'curmilk', 'yaocare', 'daospa'];

const dong = n => n.toLocaleString('vi-VN').replace(/,/g, '.') + 'đ';
const giaMin = k => SP[k].gia[0][1];
const tongGia = ks => ks.reduce((a, k) => a + giaMin(k), 0);
// "Tắm gội Elemis 200ml 150.000đ + Kem bôi Elemis 115.000đ = 265.000đ"
const chiTietGia = ks => ks.map(k => `${SP[k].ngan}${SP[k].gia.length > 1 ? ' ' + SP[k].gia[0][0] : ''} ${dong(giaMin(k))}`).join(' + ') + ` = ${dong(tongGia(ks))}`;
const qcTinh = ks => ks.filter(k => SP[k].gia.length > 1)
  .map(k => ({ tamgoi: 'tắm', xit: 'xịt' }[k] || SP[k].ngan) + ' ' + SP[k].gia[0][0]).join(', ');

module.exports = { SP, VD, COMBO, THU_TU, dong, giaMin, tongGia, chiTietGia, qcTinh };
