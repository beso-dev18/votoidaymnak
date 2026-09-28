// Dữ liệu sell-out kit THEO SẢN PHẨM → COMBO 2–3 SẢN PHẨM XỬ LÝ 1 VẤN ĐỀ DA.
// Bản dựng lại 28/09/2026 theo yêu cầu của sếp: khách hàng (shop) bán theo sản phẩm, nên kit phải đi
// từ sản phẩm khách đang cầm → hỏi vấn đề của bé → gợi ý combo 2–3 sản phẩm cho vấn đề đó.
//
// Nguồn (không thêm gì ngoài các file này — nội dung chuyển từ bản "theo vấn đề da bé" đã duyệt câu chữ):
//  - Giá, quy cách: Danh mục sản phẩm/Báo giá sản phẩm OTC tất cả sp.docx (01/04/2025)
//  - Thành phần, cơ chế: Danh mục sản phẩm/Phân tích công dụng/Phân tích công dụng sản phẩm.docx
//  - So sánh đối thủ: Danh mục sản phẩm/So sánh thị trường/So sánh thị trường - Nhóm Dành cho bé.md
//  - Elemis Gold, Bọt rửa tay: Sellout kit/Theo sản phẩm/Bộ sell-out kit theo sản phẩm.md
//  - Tỷ lệ pha, cách dùng: bộ slide Elemis / Oriky của công ty (file gốc không nằm trong repo)
//
// Cách viết: <b>…</b> = chữ đậm. Luôn "hỗ trợ" trước kháng khuẩn. Không dùng "trị / chữa / điều trị".
// Không nêu long não, không nêu acid boric như điểm bán. Không hứa số ngày.
// Giá cả bộ = cộng giá OTC của quy cách nhỏ nhất (tắm gội 200ml, xịt muỗi 50ml).

const SP = {
  tamgoi: {
    ten: 'Tắm gội thảo dược Elemis', ngan: 'Tắm gội Elemis', anh: 'sanpham.png',
    gia: [['200ml', 150000], ['350ml', 210000], ['500ml', 275000]], tuoi: 'Từ sơ sinh',
    tp: [
      ['Men đu đủ (papain), chanh (acid citric)', ['dl-dudu.png', 'dl-chanh.png'],
       '<b>Làm sạch mà không cần kỳ cọ.</b> Men đu đủ giúp bụi bẩn, mồ hôi, da chết bám trên da mềm ra và trôi đi khi tắm; chanh làm sạch nhẹ. Nhờ vậy lỗ chân lông thông thoáng (gốc của rôm sảy), vảy cứt trâu đã làm mềm cũng trôi đi khi gội.'],
      ['Chè xanh, sả chanh, kinh giới, tràm gió, khổ qua', ['dl-chexanh.jpg', 'dl-sachanh.jpg', 'dl-kinhgioi.png', 'dl-tramgio.jpg'],
       '<b>Hỗ trợ giảm vi khuẩn trên da.</b> Các thảo dược có tính kháng khuẩn tự nhiên — để chỗ hăm, nốt rôm, chỗ da bong tróc không bị nhiễm khuẩn thành mụn mủ.'],
      ['Sài đất', ['dl-saidat.png'],
       '<b>Nốt rôm bớt đỏ, bớt ngứa.</b> Sài đất làm dịu phản ứng viêm tại chỗ nổi nốt.'],
      ['Dịch chiết thảo dược dạng nước, tinh dầu mùi', [],
       '<b>Tắm xong da không khô căng.</b> Không làm mất lớp dầu tự nhiên của da như xà phòng tạo nhiều bọt; tinh dầu mùi làm dịu da. Quan trọng với da chàm, da khô, da non.'],
      ['Diệp lục tố, chè xanh', ['hc-dieplucto.jpg'],
       '<b>Khử mùi mồ hôi ở ngấn cổ, nách.</b> Diệp lục tố hút mùi mồ hôi đọng trong nếp gấp; cùng chè xanh giúp bảo vệ da trước nắng, bụi.'],
      ['Tinh dầu tràm gió, sả chanh (còn lại sau tắm)', [],
       '<b>Mát da sau tắm, tiếp tục hỗ trợ kháng khuẩn vài giờ.</b> Vì thế hướng dẫn <b>không tráng lại</b> nước sạch.'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> một chai lo nhiều việc — làm sạch không kỳ cọ (men đu đủ) + hỗ trợ giảm vi khuẩn (5 loại thảo dược) + làm dịu nốt rôm (sài đất) + khử mùi mồ hôi (diệp lục tố). Dịu đến mức pha loãng lau mặt nhiều lần trong ngày được.',
      '<b>So với Dr.Papie, Kutieskin:</b> cả ba đều là nước tắm thảo dược, nhiều loại lá trùng nhau (khổ qua, sả, tràm…). Elemis có thêm <b>chanh</b> (làm sạch nhẹ) và <b>tinh dầu mùi</b> (làm dịu da) — không có trong thành phần hai hãng kia công bố.',
      '<b>Nói với khách:</b> “Nước tắm này có men đu đủ giúp chất bẩn tự trôi, mẹ không phải kỳ cọ; thêm các lá thảo dược hỗ trợ kháng khuẩn, tắm xong da không bị khô.”',
      '<b>Lưu ý:</b> tính theo 100ml Elemis đắt hơn hai hãng trên → chốt bằng “một chai lo nhiều việc”, đừng so rẻ. Kutieskin ghi “hăm da” trong công bố, Elemis thì không → nói “hỗ trợ vệ sinh vùng hăm”, không nói “chuyên cho hăm”.',
    ],
    cachDung: 'Pha <b>1ml Elemis : 1 lít nước</b> 36–37°C (chậu 5 lít → 5ml), <b>không tráng lại</b>. Lau mặt khi bé bị chàm: pha 2ml : 2 lít nước sạch.',
    combo: ['ham', 'rom', 'cham', 'dakho', 'cuttrau'],
  },

  gold: {
    ten: 'Gel tắm gội Elemis Gold', ngan: 'Elemis Gold', anh: 'sp-gold.jpg',
    gia: [['220ml', 220000]], tuoi: 'Bé từ 6 tháng',
    tp: [
      ['Kim ngân', [],
       '<b>Nốt mẩn bớt đỏ, bớt ngứa.</b> Kim ngân làm dịu phản ứng viêm. Thành phần này <b>chỉ bản Gold mới có</b> — không có ở dòng thường, Dr.Papie, Kutieskin.'],
      ['Hương nhu, chè xanh, sả chanh', ['dl-chexanh.jpg', 'dl-sachanh.jpg'],
       '<b>Hỗ trợ giảm vi khuẩn trên da</b> — nốt bé gãi không bị nhiễm khuẩn.'],
      ['Men đu đủ (papain), glycerin, tinh dầu mùi', ['dl-dudu.png'],
       '<b>Làm sạch nhẹ và giữ ẩm.</b> Men đu đủ giúp da chết bong nhẹ, lỗ chân lông thông thoáng; glycerin giữ nước trên da — Gold thiên về dưỡng ẩm hơn dòng thường, hợp bé da khô hay mẩn ngứa.'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> kim ngân và hương nhu — không có trong thành phần Dr.Papie, Kutieskin công bố. Khách hỏi “sao Gold đắt hơn” thì đây là câu trả lời cụ thể.',
      '<b>Nói với khách:</b> “Bé mẩn ngứa nhiều thì mẹ dùng bản Gold, có thêm kim ngân làm dịu da, lại giữ ẩm tốt hơn.”',
      '<b>Lưu ý:</b> chỉ dùng cho bé từ 6 tháng; giá cao nhất nhóm. Gold <b>không có</b> sài đất, khổ qua, kinh giới, tràm gió → đừng nói “Gold có mọi thứ bản thường có”. Web ghi “100% thảo dược”, “hăm da, viêm da” nhưng không có trong công bố → không nhắc lại.',
    ],
    cachDung: '⏳ Cách dùng Elemis Gold chưa có trên tài liệu gốc — chờ công ty xác nhận.',
    combo: ['man'],
  },

  kem: {
    ten: 'Kem bôi da Elemis', ngan: 'Kem bôi Elemis', anh: 'sp-kem.jpg',
    gia: [['Tuýp 30g', 115000]], tuoi: 'Từ sơ sinh',
    tp: [
      ['Kẽm oxyd nano 2%', ['hc-kemoxyd.jpg'],
       '<b>Như một lớp “áo mưa” mỏng cho da.</b> Tạo màng mỏng phủ da, không cho nước tiểu, phân, độ ướt của tã ngấm vào; ở ngấn cổ, nách thì hai mặt da trơn hơn, bớt cọ xát; khi ra ngoài thì hạn chế gió hanh tác động trực tiếp.'],
      ['Rau má (asiaticoside, acid asiatic)', ['dl-rauma.jpg'],
       '<b>Bớt đỏ, bớt rát — và giúp da mau liền.</b> Làm dịu phản ứng kích ứng của da; giúp da tạo tế bào mới và sợi collagen (chất giúp da liền, chắc) → chỗ nứt, trầy, bong tróc liền lại; hỗ trợ làm mờ thâm, sẹo còn mới.'],
      ['Tinh dầu ngải cứu', ['dl-ngaicuu.jpg'],
       '<b>Mát dịu khi thoa, hỗ trợ kháng khuẩn</b> ở chỗ da đang trầy, chỗ bé gãi.'],
      ['Aquaxyl (chiết từ đường thực vật)', ['hc-aquaxyl.jpg'],
       '<b>Giúp da tự giữ nước bên trong — da mềm, không nứt.</b> <b>Vì sao vừa “chắn ẩm” vừa “giữ ẩm”?</b> Kẽm oxyd chắn cái ướt bẩn <b>bên ngoài</b>; Aquaxyl giữ nước sạch của chính làn da ở <b>bên trong</b>.'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> một tuýp làm 3 việc — <b>chắn</b> (kẽm oxyd) + <b>làm dịu, giúp da liền</b> (rau má) + <b>giữ ẩm</b> (Aquaxyl). Là loại duy nhất trong ba kem công bố dùng cho <b>da bị bỏng do gió, nắng</b>.',
      '<b>So với Bepanthen Balm, Sudocrem:</b> Bepanthen (dexpanthenol, lanolin) mạnh về dưỡng, phục hồi da khô — đừng chê, nhưng không có lớp chắn kẽm oxyd. Sudocrem có kẽm oxyd giống Elemis nhưng không có rau má, ngải cứu, Aquaxyl.',
      '<b>Nói với khách:</b> “Kem này vừa tạo lớp chắn như Sudocrem, vừa có rau má làm dịu đỏ rát, lại giúp da giữ ẩm — mẹ không cần mua 2–3 loại riêng.”',
      '<b>Lưu ý:</b> tính theo gam, Elemis đắt hơn cả hai → bán bằng “một tuýp làm nhiều việc”, không nói “mạnh hơn / tốt hơn”. Kem chưa công bố chỉ số chống nắng → không giới thiệu là kem chống nắng.',
    ],
    cachDung: '<b>Rửa → thấm khô → thoa lớp mỏng phủ kín</b>, ngày 2–3 lần. Vùng tã: thoa <b>mỗi lần thay tã</b>, kể cả khi da chưa đỏ.',
    combo: ['ham', 'rom', 'man', 'cham', 'muoi', 'seo', 'tay'],
  },

  dau: {
    ten: 'Dầu massage Oriky', ngan: 'Dầu Oriky', anh: 'sp-oriky.jpg',
    gia: [['Chai 60ml', 135000]], tuoi: 'Từ sơ sinh',
    tp: [
      ['Dầu hạnh nhân, dầu hạt nho, dầu cám gạo', ['dl-hanhnhan.jpg', 'dl-nho.jpg', 'dl-camgao.jpg'],
       '<b>Bù lớp dầu tự nhiên cho da — da mềm, không khô bong.</b> Ba loại dầu có chất béo giống lớp dầu tự nhiên giữ nước của da; bôi vào để bù phần bị mất, giữ nước lại trong da. Với vảy cứt trâu: dầu ngấm vào làm mềm vảy để gội trôi, không phải cạy.'],
      ['Caprylic triglyceride', [],
       '<b>Thấm nhanh, không nhờn dính</b> — thoa được cả da mặt bé.'],
      ['Gamma-oryzanol (cám gạo), vitamin E', [],
       '<b>Bảo vệ da trước nắng, bụi.</b> Chất chống oxy hoá giúp lớp dầu trên da không bị “hỏng” khi gặp nắng — da non gặp nắng dễ thâm hơn da lành.'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> <b>3 loại dầu thực vật</b> (cám gạo + hạnh nhân + hạt nho) vừa khoá ẩm vừa có vitamin E, chất chống oxy hoá từ cám gạo; thấm nhanh, không bết.',
      '<b>So với Johnson’s, Chicco:</b> Johnson’s là dầu khoáng (tạo lớp phủ ngoài da, không bổ sung chất béo giống của da). Chicco có dầu cám gạo. Oriky kết hợp 3 loại dầu thực vật.',
      '<b>Nói với khách:</b> “Da bé khô, mẹ massage dầu này sau tắm để khoá ẩm, da mềm lại.”',
      '<b>Lưu ý:</b> Oriky có BHT (chất chống oxy hoá giữ dầu không bị ôi); Johnson’s và Chicco quảng cáo “không BHT”. Khách hỏi thì trả lời thật, không né.',
    ],
    cachDung: 'Thoa lên vùng da khô, <b>mát-xa nhẹ</b>, dùng trước hoặc sau khi tắm.',
    combo: ['cham', 'dakho', 'cuttrau', 'seo'],
  },

  xit: {
    ten: 'Xịt muỗi thảo dược Elemis', ngan: 'Xịt muỗi Elemis', anh: 'sp-xit.jpg',
    gia: [['50ml', 90000], ['120ml', 195000]], tuoi: 'Bé trên 3 tháng',
    tp: [
      ['Tinh dầu sả Java, sả chanh, bạch đàn chanh', ['dl-sachanh.jpg'],
       '<b>Muỗi không tìm được chỗ đốt.</b> Mùi tinh dầu lấn át mùi cơ thể bé — muỗi “mất dấu”, tránh xa vùng da đã xịt. Tinh dầu bay hơi dần nên xịt lại sau 2–3 giờ.'],
      ['An tức hương, vanillin', [],
       '<b>Giữ mùi xua muỗi lâu hơn.</b> Hai chất bay hơi chậm, “giữ” tinh dầu lại trên da.'],
      ['Bạch đàn chanh, cồn, sả', [],
       '<b>Mát ngay, bớt ngứa ở nốt vừa bị đốt.</b> Bạch đàn chanh làm dịu da; cồn bay hơi tạo cảm giác mát; sả hỗ trợ hạn chế nốt bị nhiễm khuẩn khi bé gãi.'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> xua muỗi bằng <b>tinh dầu thực vật</b>, không dùng Picaridin hay DEET; dùng được cho <b>bé từ 3 tháng</b>; một chai vừa xua muỗi vừa làm dịu vết đốt.',
      '<b>So với Remos Baby (Picaridin), Soffell (DEET):</b> Remos dùng cho bé từ 6 tháng, Soffell không dùng cho trẻ dưới 4 tuổi → bé 3–6 tháng thì Elemis là lựa chọn phù hợp trong ba loại. Hai loại kia chỉ công bố chống muỗi.',
      '<b>Nói với khách:</b> “Xịt này xua muỗi bằng tinh dầu sả, bạch đàn chanh, bé từ 3 tháng dùng được. Mẹ nhớ xịt lại sau 2–3 tiếng.”',
      '<b>Lưu ý:</b> hiệu quả công bố 3 giờ, ngắn hơn Remos (6 giờ), Soffell (8 giờ) → dặn khách xịt lại, đừng giấu. Không nói “100% tự nhiên, không hoá chất” vì có cồn và phụ gia.',
    ],
    cachDung: 'Xịt lên quần áo và vùng da hở, <b>tránh mặt và bàn tay bé</b>; xịt lại sau <b>2–3 giờ</b>.',
    combo: ['muoi'],
  },

  bot: {
    ten: 'Bọt rửa tay Elemis', ngan: 'Bọt rửa tay Elemis', anh: 'sp-bot.jpg',
    gia: [['Chai 250ml', 245000]], tuoi: 'Bé từ 6 tháng',
    tp: [
      ['Chất tạo bọt dịu gốc dầu dừa (cocamidopropyl betaine)', [],
       '<b>Sạch tay mà không khô tay.</b> Bọt kéo dầu mỡ, bụi bẩn khỏi tay rồi trôi theo nước; dịu hơn xà phòng nên không lấy đi quá nhiều dầu tự nhiên của da tay bé.'],
      ['Sả chanh, trà xanh', ['dl-sachanh.jpg', 'dl-chexanh.jpg'],
       '<b>Hỗ trợ giảm vi khuẩn còn lại trên tay.</b>'],
      ['Lô hội, cúc la mã', [],
       '<b>Tay rửa nhiều lần không bị rát đỏ</b> — làm dịu da ngay trong lúc rửa.'],
      ['Glycerin, Aquaxyl, lô hội', ['hc-aquaxyl.jpg'],
       '<b>Rửa xong tay vẫn mềm.</b> Glycerin giữ nước trên bề mặt; Aquaxyl giúp da tự giữ nước bên trong; lô hội tạo lớp gel mỏng giữ nước.'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> dạng bọt, bé tự bơm, tự rửa; có <b>Aquaxyl – glycerin – lô hội</b> giữ ẩm → rửa nhiều lần trong ngày tay không khô.',
      '<b>So với Chicco 0M+:</b> Chicco cũng dịu, có trà xanh, cúc la mã (giống Elemis). Elemis có thêm <b>Aquaxyl</b> và <b>lô hội</b> — Chicco không liệt kê.',
      '<b>Nói với khách:</b> “Bé đi học rửa tay nhiều nên tay khô. Bọt rửa tay này có thêm chất giữ ẩm, rửa xong tay không bị ráp.”',
      '<b>Lưu ý:</b> giá cao hơn Chicco (245.000đ so với khoảng 150.000đ, cùng 250ml); Elemis dùng cho bé từ 6 tháng, Chicco dùng từ sơ sinh. Không nói “kháng khuẩn mạnh hơn” vì chưa có số liệu so sánh.',
    ],
    cachDung: '⏳ Hướng dẫn chi tiết chưa có trên tài liệu gốc — làm theo nhãn sản phẩm.',
    combo: ['tay'],
  },

  gac: {
    ten: 'Gạc rơ lưỡi Elemis', ngan: 'Gạc rơ lưỡi Elemis', anh: 'sp-gac.jpg',
    gia: [['Hộp 30 gói', 115000]], tuoi: 'Từ sơ sinh',
    tp: [
      ['Muối ăn, glycerin', [],
       '<b>Lau sạch cặn sữa — thức ăn của nấm.</b> Muối cùng động tác lau nhẹ lấy cặn sữa khỏi lưỡi, má trong; glycerin giữ gạc luôn ẩm, lau không xước niêm mạc mỏng của bé.'],
      ['Baking soda (natri bicarbonate)', [],
       '<b>Làm miệng bé bớt chua — nấm khó phát triển.</b> Cặn sữa lên men làm miệng chua, môi trường nấm tưa ưa thích.'],
      ['Lá hẹ, chè xanh, rau ngót', ['dl-chexanh.jpg'],
       '<b>Hỗ trợ hạn chế nấm và vi khuẩn trong miệng.</b> Rau ngót là lá dân gian quen dùng rơ lưỡi phòng tưa cho trẻ.'],
      ['Xylitol', [],
       '<b>Hạn chế mảng bám, miệng bớt hôi, bảo vệ răng sắp mọc</b> — vi khuẩn gây sâu răng không “ăn” được xylitol.'],
      ['Cúc la mã (chỉ bản không mùi)', [],
       '<b>Làm dịu nướu, bé dễ chịu khi mọc răng.</b>'],
    ],
    ss: [
      '<b>Điểm mạnh:</b> gạc tẩm sẵn, xé ra dùng ngay, mỗi gói một lần. Có <b>2 phiên bản</b>: hương dưa lưới cho bé dễ hợp tác, không mùi (thêm cúc la mã) cho bé hay ọe.',
      '<b>So với gạc Dr.Papie:</b> nhiều thành phần giống nhau (muối, baking soda, xylitol, lá hẹ). Elemis có thêm <b>rau ngót</b> và <b>chè xanh</b>.',
      '<b>Nói với khách:</b> “Gạc có rau ngót, thứ các bà hay dùng rơ lưỡi cho bé, lại có loại không mùi nếu bé hay ọe.”',
      '<b>Lưu ý:</b> thành phần có acid boric — <b>không nêu như điểm bán hàng</b>; khách hỏi về độ an toàn thì chờ R&D xác nhận nồng độ trước khi trả lời.',
    ],
    cachDung: 'Rửa tay, đeo gạc vào ngón trỏ, lau nhẹ <b>má trong → nướu → lưỡi</b>. 1–2 lần/ngày, sau bú 30 phút; bé đang tưa thì 3 lần/ngày. Mỗi gói dùng 1 lần.',
    combo: [],
    rieng: {
      vande: 'Tưa lưỡi, nấm lưỡi',
      dauHieu: 'Mảng trắng bám trên lưỡi, lau nước không ra; bé bú kém, miệng có mùi.',
      kham: 'Mảng trắng dày lau không ra, bé bỏ bú hoàn toàn, sốt hoặc quấy nhiều.',
      ghiChu: 'Gạc rơ lưỡi xử lý vấn đề trong miệng, không đi chung combo với sản phẩm da. Tài liệu công ty chưa có combo cho gạc — bán riêng, hoặc hỏi thêm mẹ về da bé để chuyển sang combo của Tắm gội / Kem bôi.',
    },
  },
};

// ===================== COMBO: 1 vấn đề da = 2–3 sản phẩm =====================
// sp = combo chính (bán cùng nhau), them = khuyến nghị thêm nếu khách muốn chăm kỹ.
// vai = việc của TỪNG sản phẩm trong combo này (ngắn, đọc lên được ngay ở quầy).
const COMBO = {
  ham: {
    vande: 'Hăm da (vùng tã, nếp gấp)',
    dauHieu: 'Đỏ, rát ở vùng mặc tã, hoặc trong ngấn cổ, nách, bẹn.',
    hoi: 'Bé nhà mình có hay bị đỏ vùng mặc tã, hay ở ngấn cổ, nách không chị?',
    sp: ['tamgoi', 'kem'], them: ['dau'],
    vai: {
      tamgoi: 'Làm sạch vùng tã, nếp gấp <b>không cần kỳ cọ</b>; hỗ trợ giảm vi khuẩn để chỗ đỏ không nổi mụn mủ; khử mùi mồ hôi.',
      kem: 'Lớp <b>“áo mưa” kẽm oxyd</b> chắn nước tiểu, phân; rau má làm dịu đỏ rát; Aquaxyl giữ ẩm để da không nứt.',
      dau: 'Sau khi hết hăm: bù lớp dầu tự nhiên, da không khô bong — <b>hăm khó quay lại</b>.',
    },
    noi: 'Chỗ hăm đang đỏ thì mẹ đừng kỳ cọ — tắm bằng Elemis cho sạch, thấm khô rồi thoa kem tạo lớp chắn. Hai món đi cùng nhau thì vùng tã vừa sạch vừa được che chắn.',
    cachDung: 'Tắm: pha 1ml : 1 lít nước, mở nếp gấp rửa kỹ, <b>lau thật khô</b>. Thay tã (nhất là khi đi nặng): rửa bằng chậu nhỏ pha cùng tỉ lệ (VD 2ml : 2 lít). Kem: lớp mỏng phủ kín — vùng tã <b>mỗi lần thay tã</b>, vùng ngấn 2–3 lần/ngày.',
    kham: 'Da trợt, chảy dịch, mụn mủ, mùi hôi, lan nhanh; bé sốt, quấy nhiều; mảng đỏ tươi có chấm đỏ nhỏ xung quanh (nghi nấm — kem kẽm không xử lý được nấm).',
  },
  rom: {
    vande: 'Rôm sảy, mụn nhọt',
    dauHieu: 'Hột đỏ li ti ở cổ, lưng, trán; nốt sưng đỏ có đầu mủ nhỏ.',
    hoi: 'Trời nóng bé có hay nổi rôm ở cổ, lưng không chị?',
    sp: ['tamgoi', 'kem'], them: [],
    vai: {
      tamgoi: 'Men đu đủ <b>thông lỗ chân lông</b> (gốc của rôm); sài đất làm dịu nốt; 5 thảo dược hỗ trợ giảm vi khuẩn để nốt rôm <b>không thành mụn nhọt</b>.',
      kem: '<b>Chấm lên nốt đã nổi</b>: rau má làm dịu đỏ, ngải cứu hỗ trợ kháng khuẩn chỗ bé gãi; Aquaxyl giữ ẩm cho bớt ngứa.',
    },
    noi: 'Rôm là do lỗ chân lông bị bít. Mẹ tắm nước thảo dược này cho thông thoáng, bé mát; nốt nào bé gãi đỏ thì chấm kem cho dịu, đỡ nhiễm khuẩn thành mụn.',
    cachDung: 'Tắm: pha 5ml : 5 lít nước 36–37°C, không tráng lại. Chỗ rôm, mụn nhiều: xoa trực tiếp Elemis lên vùng da đó 1–2 phút rồi mới tắm. Kem: lớp mỏng 2–3 lần/ngày lên nốt.',
    kham: 'Nốt có mủ, chảy dịch; nhọt sưng to, nóng, mọc thành cụm; mẩn lan nhanh toàn thân; bé sốt kèm nổi ban. Không tự nặn.',
    luuY: '⏳ Hai tài liệu công ty hướng dẫn khác nhau cho ca rôm sảy (pha đậm 1ml + 10ml thấm 10–20 phút / xoa trực tiếp 1–2 phút). Kit đang dùng cách của bộ slide — chờ công ty chốt.',
  },
  man: {
    vande: 'Mẩn ngứa nhiều, da nhạy cảm (bé từ 6 tháng)',
    dauHieu: 'Nổi mẩn từng đám gây ngứa, bé gãi nhiều; da hay khô.',
    hoi: 'Bé được mấy tháng rồi chị? Bé có hay nổi mẩn, gãi nhiều không?',
    sp: ['gold', 'kem'], them: [],
    vai: {
      gold: '<b>Kim ngân</b> làm dịu nốt mẩn, bớt đỏ ngứa; hương nhu, chè xanh, sả hỗ trợ giảm vi khuẩn; glycerin <b>giữ ẩm</b> (da khô làm ngứa nặng hơn).',
      kem: 'Chấm lên nốt bé gãi đỏ: rau má làm dịu, ngải cứu hỗ trợ kháng khuẩn; Aquaxyl giữ ẩm.',
    },
    noi: 'Bé mẩn ngứa nhiều thì mẹ tắm bản Gold, có kim ngân làm dịu da và giữ ẩm tốt hơn; chỗ nào bé gãi đỏ thì chấm thêm kem.',
    cachDung: 'Gold: ⏳ cách dùng chưa có trên tài liệu gốc, chờ công ty xác nhận. Kem: lớp mỏng 2–3 lần/ngày lên nốt.',
    kham: 'Mẩn lan nhanh toàn thân, nốt có mủ, chảy dịch, hoặc bé sốt kèm nổi ban.',
    luuY: 'Elemis Gold chỉ dành cho <b>bé từ 6 tháng</b>. Bé nhỏ hơn → chuyển sang combo Rôm sảy (Tắm gội thường + Kem bôi).',
  },
  cham: {
    vande: 'Chàm sữa',
    dauHieu: 'Mảng đỏ khô, bong vảy ở hai má, trán; bé hay cọ mặt.',
    hoi: 'Má bé có mảng đỏ khô, bong vảy không chị? Bé có hay dụi mặt không?',
    sp: ['tamgoi', 'kem', 'dau'], them: [],
    vai: {
      tamgoi: 'Tắm, <b>lau mặt nhiều lần trong ngày</b> mà da không khô thêm; hỗ trợ giảm vi khuẩn ở chỗ bong tróc.',
      kem: 'Rau má làm dịu mảng đỏ, giúp chỗ nứt, bong <b>mau liền</b>; <b>Aquaxyl giữ nước</b> — quan trọng nhất với da chàm.',
      dau: '<b>Bù lớp dầu</b> da chàm đang thiếu — da mềm, bớt bong vảy; thấm nhanh, không bết, thoa được da mặt.',
    },
    noi: 'Da chàm vừa thiếu nước vừa thiếu dầu. Mẹ tắm và lau mặt bằng Elemis pha loãng để da không khô thêm, thoa kem cho dịu và giữ nước, rồi thoa dầu để khoá lại — đủ 3 bước thì da bé mới đỡ bong.',
    cachDung: 'Tắm: 5ml : 5 lít. Lau mặt: pha 2ml : 2 lít nước sạch, 4–6 giờ lau một lần và sau khi bú, ăn dặm. Kem: lớp mỏng 2–3 lần/ngày. Dầu: thoa sau tắm.',
    kham: 'Chàm rỉ dịch, đóng vảy vàng, lan rộng hoặc bé quấy khóc nhiều. Bé đang dùng thuốc bác sĩ kê thì dùng sản phẩm để duy trì, không thay thuốc.',
  },
  dakho: {
    vande: 'Da khô, nứt nẻ, đỏ rát do gió nắng',
    dauHieu: 'Da khô ráp, bong vảy, có chỗ nứt; má, vùng da hở đỏ ửng, rát sau khi ra ngoài.',
    hoi: 'Da bé có hay khô ráp, hay má đỏ rát sau khi ra ngoài trời không chị?',
    sp: ['tamgoi', 'dau'], them: ['kem'],
    vai: {
      tamgoi: 'Làm sạch mà <b>không làm khô da thêm</b> — sữa tắm nhiều bọt kiểu xà phòng mới là thứ làm da càng khô.',
      dau: '<b>Khoá ẩm</b> bằng 3 loại dầu thực vật; vitamin E, chất chống oxy hoá từ cám gạo bảo vệ da trước nắng, bụi.',
      kem: 'Khi đã <b>nứt nẻ, đỏ rát</b>: rau má giúp chỗ nứt liền, làm dịu đỏ; kẽm oxyd che chắn khi ra ngoài. Loại duy nhất trong ba kem công bố dùng cho da bỏng gió, nắng.',
    },
    noi: 'Da bé khô thì phải đổi nước tắm trước — nước thảo dược này sạch mà da không căng; tắm xong mẹ massage dầu để khoá ẩm. Chỗ nào đã nứt, đỏ rát thì thoa thêm kem.',
    cachDung: 'Tắm: 5ml : 5 lít, không tráng lại. Dầu: thoa sau tắm, mát-xa nhẹ. Kem: lớp mỏng 2–3 lần/ngày và trước khi ra ngoài trời gió hanh, nắng.',
    kham: 'Da nứt sâu chảy máu, phồng rộp, nổi bọng nước, hoặc bé sốt sau khi phơi nắng lâu.',
    luuY: 'Sản phẩm <b>chưa công bố chỉ số chống nắng (SPF/PA)</b> — không giới thiệu là kem chống nắng.',
  },
  muoi: {
    vande: 'Muỗi đốt, côn trùng cắn',
    dauHieu: 'Nốt sưng đỏ, ngứa; bé gãi trầy da.',
    hoi: 'Nhà mình có nhiều muỗi không chị? Bé có hay bị đốt, gãi trầy không?',
    sp: ['xit', 'kem'], them: ['tamgoi'],
    vai: {
      xit: '<b>Phòng từ đầu</b>: tinh dầu sả, bạch đàn chanh làm muỗi “mất dấu”; xịt lên nốt vừa đốt cũng mát, bớt ngứa.',
      kem: '<b>Nốt đã đốt</b>: rau má làm dịu sưng đỏ, ngải cứu hỗ trợ kháng khuẩn chỗ gãi trầy; dùng tiếp để vết trầy mau liền, hạn chế thâm.',
      tamgoi: 'Mùi sả còn lưu trên da sau tắm <b>hỗ trợ xua muỗi nhẹ</b> — chỉ là lợi ích thêm.',
    },
    noi: 'Mẹ xịt để phòng muỗi, còn nốt nào đã bị đốt, bé gãi đỏ thì chấm kem cho dịu, đỡ nhiễm khuẩn — một món phòng, một món xử lý.',
    cachDung: 'Xịt: lên quần áo và da hở, tránh mặt và bàn tay bé, xịt lại sau 2–3 giờ. Kem: lớp mỏng lên nốt đã đốt.',
    kham: 'Nốt đốt sưng to bất thường, lan rộng, có mủ, hoặc bé sốt.',
    luuY: 'Xịt muỗi dùng cho <b>bé trên 3 tháng</b>. Bé nhỏ hơn thì dùng màn và quần áo dài.',
  },
  cuttrau: {
    vande: 'Cứt trâu (vảy da đầu)',
    dauHieu: 'Mảng vảy vàng, cứng bám trên da đầu bé.',
    hoi: 'Da đầu bé có mảng vảy vàng bám không chị?',
    sp: ['dau', 'tamgoi'], them: [],
    vai: {
      dau: '<b>Làm mềm vảy</b> để vảy tự bong, không phải cạy; sau đó dưỡng lại da đầu để vảy không đóng dày như cũ.',
      tamgoi: '<b>Gội trôi phần vảy đã mềm</b> nhờ men đu đủ, không phải chà xát da đầu; hỗ trợ giảm vi khuẩn trên da đầu.',
    },
    noi: 'Mẹ đừng cạy vảy. Thoa dầu lên chỗ vảy, để một lúc cho mềm rồi gội bằng Elemis, vảy sẽ tự trôi. Chai dầu dùng tiếp để dưỡng da đầu.',
    cachDung: 'Thoa dầu lên vảy, để một lúc cho mềm, rồi gội bằng Elemis pha 5ml : 5 lít. Không chà xát, không cạy vảy.',
    kham: 'Da đầu dưới vảy đỏ rực, rỉ dịch, có mùi, hoặc lan xuống mặt và người.',
  },
  seo: {
    vande: 'Vết thâm, sẹo mới sau khi da đã lành',
    dauHieu: 'Da đã liền nhưng còn thâm, sẹo mới sau rôm sảy, muỗi đốt, trầy xước.',
    hoi: 'Chỗ bé bị trước đây giờ còn thâm không chị?',
    sp: ['kem', 'dau'], them: ['tamgoi'],
    vai: {
      kem: 'Rau má <b>hỗ trợ làm mờ thâm, sẹo còn mới</b> — da non lên phẳng, đều màu hơn; Aquaxyl giữ ẩm để da non liền đẹp.',
      dau: 'Giữ da non mềm; vitamin E, chất chống oxy hoá từ cám gạo giúp <b>hạn chế thâm thêm khi ra nắng</b>.',
      tamgoi: 'Làm sạch mà da non không bị khô, bong sau tắm.',
    },
    noi: 'Da bé lành rồi thì mẹ thoa kem rau má đều đặn để hỗ trợ vết thâm mờ dần, thêm dầu để da non mềm, đỡ thâm khi ra nắng. Sẹo càng mới thì càng dễ.',
    cachDung: 'Kem: lớp mỏng lên vùng da <b>đã lành</b>, 2–3 lần/ngày, dùng đều thời gian dài; không thoa lên vết thương hở. Dầu: thoa sau tắm.',
    kham: 'Sẹo lồi, sẹo co kéo, sẹo do bỏng sâu → khuyên khám da liễu, sản phẩm không xử lý được nhóm này.',
    luuY: 'Chỉ nói <b>“hỗ trợ làm mờ”</b> — <b>không hứa hết sẹo, không hứa số ngày</b>.',
  },
  tay: {
    vande: 'Da tay khô rát do rửa tay nhiều',
    dauHieu: 'Bé đi lớp rửa tay nhiều lần, mu bàn tay khô ráp, đỏ, nứt.',
    hoi: 'Bé đi lớp rồi phải không chị? Tay bé có bị khô ráp không?',
    sp: ['bot', 'kem'], them: [],
    vai: {
      bot: 'Sạch tay mà <b>không khô tay</b>; lô hội, cúc la mã làm dịu ngay khi rửa; Aquaxyl, glycerin giữ ẩm.',
      kem: '<b>Mu bàn tay đã nứt</b>: rau má giúp chỗ nứt mau liền; Aquaxyl giữ ẩm — thoa trước khi đi ngủ.',
    },
    noi: 'Rửa tay nhiều thì mẹ đổi sang bọt rửa tay có chất giữ ẩm để tay không khô thêm; chỗ nào đã nứt thì tối thoa kem cho mau lành.',
    cachDung: 'Bọt: dùng mỗi lần rửa tay. Kem: lớp mỏng lên mu bàn tay sau khi rửa, nhất là trước khi đi ngủ.',
    kham: 'Tay nứt sâu chảy máu, hoặc nổi mụn nước ngứa nhiều.',
    luuY: 'Bọt rửa tay dành cho <b>bé từ 6 tháng</b>.',
  },
};

// thứ tự sản phẩm trong kit
const THU_TU = ['tamgoi', 'kem', 'dau', 'gold', 'xit', 'bot', 'gac'];

const dong = n => n.toLocaleString('vi-VN').replace(/,/g, '.') + 'đ';
const giaMin = k => SP[k].gia[0][1];
const tongGia = ks => ks.reduce((a, k) => a + giaMin(k), 0);
// ghi rõ quy cách dùng để tính giá cả bộ (chỉ với SP có nhiều quy cách)
const qcTinh = ks => ks.filter(k => SP[k].gia.length > 1)
  .map(k => ({ tamgoi: 'tắm', xit: 'xịt' }[k] || SP[k].ngan) + ' ' + SP[k].gia[0][0]).join(', ');

module.exports = { SP, COMBO, THU_TU, dong, giaMin, tongGia, qcTinh };
