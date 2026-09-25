// Dữ liệu sell-out kit theo vấn đề da bé.
// Giá: Danh mục sản phẩm/Báo giá sản phẩm OTC tất cả sp.docx (01/04/2025)
// Thành phần: Danh mục sản phẩm/Phân tích công dụng/Phân tích công dụng sản phẩm.docx
// So sánh đối thủ: Danh mục sản phẩm/So sánh thị trường/So sánh thị trường - Nhóm Dành cho bé.md
// KHÔNG tự thêm thành phần, cơ chế, công dụng hay số liệu đối thủ nào ngoài 3 file trên.
//
// Cách viết (bản sửa theo góp ý khách hàng + chuyên gia bán hàng, 25/09/2026):
//  - tp = [tên thành phần, "<b>Giúp gì cho bé.</b> Giải thích bằng lời thường"]. Không dùng thuật ngữ
//    (cắt liên kết tế bào, phá màng tế bào, gốc tự do, hàng rào lipid, nguyên bào sợi…).
//  - ss = cột "Điểm mạnh khi khách so sánh": lợi ích riêng của SP cho ĐÚNG vấn đề này → so với đối thủ
//    (nói điểm có căn cứ, không chê) → câu nói với khách → lưu ý nếu có điểm yếu thật (giá, thời gian…).
//  - Luôn "hỗ trợ" trước kháng khuẩn/giảm vi khuẩn. Không nêu long não, không nêu acid boric như điểm bán.

const SP = {
  tamgoi: { ten: 'Tắm gội thảo dược Elemis', qc: '200 / 350 / 500ml', gia: '150.000 / 210.000 / 275.000đ', tuoi: 'Từ sơ sinh' },
  gold:   { ten: 'Gel tắm gội Elemis Gold',  qc: '220ml', gia: '220.000đ', tuoi: 'Bé từ 6 tháng' },
  kem:    { ten: 'Kem bôi da Elemis',        qc: 'Tuýp 30g', gia: '115.000đ', tuoi: 'Từ sơ sinh' },
  dau:    { ten: 'Dầu massage Oriky',        qc: 'Chai 60ml', gia: '135.000đ', tuoi: 'Từ sơ sinh' },
  xit:    { ten: 'Xịt muỗi thảo dược Elemis',qc: '50 / 120ml', gia: '90.000 / 195.000đ', tuoi: 'Bé trên 3 tháng' },
  bot:    { ten: 'Bọt rửa tay Elemis',       qc: 'Chai 250ml', gia: '245.000đ', tuoi: 'Bé từ 6 tháng' },
  gac:    { ten: 'Gạc rơ lưỡi Elemis',       qc: 'Hộp 30 gói', gia: '115.000đ', tuoi: 'Từ sơ sinh' },
};

// ---- các dòng so sánh dùng chung (mỗi vấn đề ghép thêm câu riêng) ----
const TG_VS = '<b>So với Dr.Papie, Kutieskin:</b> cả ba đều là nước tắm thảo dược, nhiều loại lá trùng nhau (khổ qua, sả, tràm…). Elemis có thêm <b>chanh</b> (làm sạch nhẹ) và <b>tinh dầu mùi</b> (làm dịu da) — không có trong thành phần hai hãng kia công bố.';
const TG_GIA = '<b>Lưu ý:</b> tính theo 100ml Elemis đắt hơn hai hãng này → chốt bằng giá trị “một chai lo nhiều việc”, đừng so rẻ.';
const KEM_VS = '<b>So với Bepanthen Balm, Sudocrem:</b> Bepanthen (dexpanthenol, lanolin) thiên về dưỡng, phục hồi, không có lớp chắn kẽm oxyd. Sudocrem có kẽm oxyd chắn ẩm giống Elemis nhưng không có rau má, ngải cứu, Aquaxyl.';
const KEM_GIA = '<b>Lưu ý:</b> tính theo gam kem Elemis đắt hơn cả hai → bán bằng “một tuýp làm nhiều việc”, không nói “mạnh hơn / tốt hơn”.';
const DAU_VS = '<b>So với Johnson’s, Chicco:</b> Johnson’s là dầu khoáng (tạo lớp phủ ngoài da, không bổ sung chất béo giống của da). Chicco có dầu cám gạo. Oriky kết hợp <b>3 loại dầu thực vật</b> — cám gạo + hạnh nhân + hạt nho.';
const DAU_BHT = '<b>Lưu ý:</b> Oriky có BHT (chất chống oxy hoá giữ dầu không bị ôi), Johnson’s và Chicco quảng cáo “không BHT”. Khách hỏi thì trả lời thật, không né.';

const VANDE = [
  // ======================= 1. HĂM DA =======================
  {
    id: 'ham-da',
    ten: 'HĂM DA (VÙNG TÃ VÀ CÁC NẾP GẤP)',
    phu: 'Đỏ, rát ở vùng mặc tã do nước tiểu và phân, hoặc trong ngấn cổ, nách, bẹn do mồ hôi đọng và da cọ vào nhau',
    cachDung: 'Tắm gội: pha <b>1ml Elemis : 1 lít nước</b> 36–37°C (chậu 5 lít → 5ml), mở các nếp gấp ra rửa kỹ rồi <b>lau thật khô</b> trước khi mặc đồ hoặc đóng tã. Khi thay tã, nhất là lúc bé đi nặng: rửa vùng tã bằng chậu nhỏ pha cùng tỉ lệ (VD 2ml : 2 lít). Kem bôi: <b>rửa → thấm khô → thoa lớp mỏng phủ kín</b> — vùng tã thì thoa <b>mỗi lần thay tã</b> kể cả khi da chưa đỏ, vùng ngấn thì ngày 2–3 lần.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'tamgoi', tp: [
          ['Papain (men đu đủ), acid citric (chanh)',
           '<b>Làm sạch chỗ da đang đỏ mà không cần kỳ cọ.</b> Papain là men tự nhiên trong quả đu đủ, giúp bụi bẩn, mồ hôi và lớp da chết bám trên bề mặt mềm ra và trôi đi khi tắm; chanh làm sạch nhẹ. Vùng tã, nếp gấp đọng nhiều mồ hôi, chất bẩn — mà da đang đỏ thì chà xát là càng rát.'],
          ['Chè xanh, sả chanh, kinh giới, tràm gió',
           '<b>Giảm vi khuẩn ở vùng hăm — để chỗ đỏ không bị nhiễm trùng, nổi mụn mủ.</b> Đây là các thảo dược có tính kháng khuẩn tự nhiên, hỗ trợ làm sạch vi khuẩn trên da khi tắm. Vùng hăm vừa trầy, vừa ẩm, vừa bí nên vi khuẩn sinh sôi nhanh hơn da lành.'],
        ], ss: [
          '<b>Điểm mạnh cho vùng hăm:</b> một chai lo 3 việc — làm sạch không cần kỳ cọ (men đu đủ), hỗ trợ giảm vi khuẩn (4 loại thảo dược), khử mùi mồ hôi ở ngấn cổ, nách (diệp lục tố).',
          TG_VS,
          '<b>Nói với khách:</b> “Chỗ hăm đang đỏ thì mẹ đừng kỳ cọ. Nước tắm này có men đu đủ giúp chất bẩn tự trôi, thêm thảo dược hỗ trợ kháng khuẩn cho vùng tã hay ẩm bí.”',
          '<b>Lưu ý:</b> Kutieskin ghi rõ “hăm da” trong công bố, Elemis thì không → nói “hỗ trợ vệ sinh vùng hăm”, không nói “chuyên cho hăm”. Tính theo 100ml Elemis đắt hơn → chốt bằng “3 việc trong 1 chai”.',
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'kem', tp: [
          ['Kẽm oxyd nano 2%',
           '<b>Như một lớp “áo mưa” mỏng cho da.</b> Kẽm oxyd tạo lớp màng mỏng phủ lên da, không cho nước tiểu, phân và độ ướt của tã ngấm vào da — đây là thứ trực tiếp làm da bé đỏ, rát. Ở ngấn cổ, nách, lớp màng làm hai mặt da trơn hơn, bớt cọ xát. Nên bôi cả khi da chưa đỏ để phòng.'],
          ['Rau má (asiaticoside, acid asiatic)',
           '<b>Bớt đỏ, bớt rát sau khi thoa.</b> Hoạt chất trong rau má làm dịu phản ứng kích ứng của da — chính phản ứng này làm da đỏ lên và bé thấy rát, quấy.'],
          ['Tinh dầu ngải cứu',
           '<b>Mát dịu khi thoa, hỗ trợ kháng khuẩn.</b> Tinh dầu ngải cứu bay hơi nhẹ trên da tạo cảm giác mát; đồng thời hỗ trợ hạn chế vi khuẩn ở chỗ da đang trầy.'],
        ], ss: [
          '<b>Điểm mạnh cho vùng hăm:</b> một tuýp làm 3 việc — <b>chắn</b> nước tiểu, phân (kẽm oxyd) + <b>làm dịu</b> đỏ rát (rau má) + <b>giữ ẩm</b> để da không nứt (Aquaxyl, xem bước 3).',
          KEM_VS,
          '<b>Nói với khách:</b> “Kem này vừa tạo lớp chắn như Sudocrem, vừa có rau má làm dịu đỏ rát, lại giúp da giữ ẩm — mẹ không cần mua 2–3 loại riêng.”',
          KEM_GIA,
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'kem', tp: [
          ['Aquaxyl (chiết từ đường thực vật)',
           '<b>Giúp da tự giữ nước bên trong — da mềm, không nứt khi cọ xát.</b> Aquaxyl giúp da tự tạo chất giữ nước và làm lớp da ngoài cùng khít lại, nước bên trong khó thoát ra. <b>Vì sao vừa “chắn ẩm” vừa “giữ ẩm”?</b> Kẽm oxyd chắn cái ướt bẩn từ <b>bên ngoài</b> (nước tiểu, phân, mồ hôi đọng); Aquaxyl giữ nước sạch của chính làn da ở <b>bên trong</b>. Da nếp gấp nhìn ẩm ướt nhưng bên trong lại thiếu nước nên rất dễ nứt.'],
        ], ss: [
          '<b>Điểm mạnh:</b> Aquaxyl giúp da tự giữ ẩm — Bepanthen, Sudocrem không có thành phần này.',
          '<b>Nói với khách:</b> “Kem chắn cái ướt bẩn bên ngoài, còn giữ nước cho da bên trong — nên da vùng tã đỡ khô nứt sau đợt hăm.”',
        ] },
        { k: 'tamgoi', tp: [
          ['Diệp lục tố, chè xanh',
           '<b>Khử mùi mồ hôi ở ngấn cổ, nách.</b> Diệp lục tố hút mùi mồ hôi đọng trong các nếp gấp. Diệp lục tố và chè xanh còn có tính chống oxy hoá — giúp bảo vệ da trước tác động của nắng, bụi.'],
        ], ss: [
          '<b>Điểm mạnh:</b> khử mùi mồ hôi đọng ở nếp gấp — mẹ thấy bé thơm tho ngay sau tắm.',
          '<b>Nói với khách:</b> “Bé mũm mĩm hay có mùi ở ngấn cổ, nách — nước tắm này có diệp lục tố giúp khử mùi.”',
        ] },
        { k: 'dau', tp: [
          ['Dầu hạnh nhân, dầu hạt nho, dầu cám gạo',
           '<b>Giữ da mềm, không khô bong sau đợt hăm — để hăm khó quay lại.</b> Da ẩm ướt nhiều ngày làm mất lớp dầu tự nhiên giữ nước của da, nên sau khi hết đỏ da hay khô, nứt. Ba loại dầu này có chất béo giống lớp dầu tự nhiên đó — bôi vào để bù lại phần bị mất, giữ nước không bay đi.'],
        ], ss: [
          '<b>Điểm mạnh:</b> bù lại lớp dầu tự nhiên cho vùng da vừa hết hăm, bằng 3 loại dầu thực vật.',
          DAU_VS,
          '<b>Nói với khách:</b> “Hết hăm da bé hay khô, mẹ massage dầu này để da mềm lại, lần sau đỡ bị.”',
          DAU_BHT,
        ] },
      ] },
    ],
    bo: ['tamgoi', 'kem'],
    boThem: ['dau'],
    kham: 'Da đã trợt, chảy dịch, có mụn mủ, có mùi hôi rõ hoặc lan rộng nhanh; bé sốt, quấy nhiều; chăm đúng cách vài ngày mà không đỡ; mảng đỏ tươi có chấm đỏ nhỏ rải xung quanh (hay gặp khi nhiễm nấm — kem kẽm không xử lý được nấm) → khuyên mẹ đưa bé đi khám trước, dùng sản phẩm duy trì sau.',
  },

  // ======================= 2. RÔM SẢY, MẨN NGỨA, MỤN NHỌT =======================
  {
    id: 'rom-man-mun',
    ten: 'RÔM SẢY, MẨN NGỨA, MỤN NHỌT',
    phu: 'Nổi hột đỏ li ti ở cổ, lưng, trán · nổi mẩn từng đám gây ngứa · nốt mụn sưng đỏ có đầu mủ nhỏ. Ba tình trạng này nối tiếp nhau: lỗ chân lông bí → nổi nốt → nhiễm khuẩn thành mụn nhọt',
    cachDung: 'Tắm gội: pha 5ml : 5 lít nước 36–37°C, không tráng lại. Chỗ rôm hoặc mụn nhọt nhiều: xoa trực tiếp Elemis lên vùng da đó 1–2 phút rồi mới tắm bé trong nước đã pha. Kem bôi: thoa lớp mỏng 2–3 lần/ngày lên nốt đã nổi.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'tamgoi', tp: [
          ['Papain (men đu đủ), acid citric (chanh)',
           '<b>Thông thoáng lỗ chân lông — gốc của rôm sảy.</b> Rôm sảy bắt đầu khi bụi và da chết bít miệng lỗ thoát mồ hôi. Nước ấm làm mềm lớp bít đó; men đu đủ giúp da chết trôi đi nhẹ nhàng khi tắm, mồ hôi thoát ra được, nốt rôm không nổi thêm.'],
          ['Dịch chiết thảo dược dạng nước, tinh dầu mùi',
           '<b>Tắm xong da không khô ráp, bớt ngứa.</b> Nước tắm thảo dược không làm mất lớp dầu tự nhiên của da như xà phòng thường → da đang mẩn ngứa không bị khô thêm; tinh dầu mùi làm dịu da.'],
        ], ss: [
          '<b>Điểm mạnh cho rôm sảy:</b> làm sạch lỗ chân lông nhẹ nhàng mà không làm khô da — da khô là thứ làm ngứa nặng thêm.',
          TG_VS,
          '<b>Nói với khách:</b> “Rôm là do lỗ chân lông bị bít. Mẹ tắm bằng nước thảo dược này cho thông thoáng, da không bị khô nên bé đỡ ngứa.”',
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'tamgoi', tp: [
          ['Sài đất',
           '<b>Nốt rôm bớt đỏ, bớt ngứa.</b> Sài đất làm dịu phản ứng viêm tại chỗ nổi nốt.'],
          ['Chè xanh, sả chanh, kinh giới, tràm gió, khổ qua',
           '<b>Hỗ trợ giảm vi khuẩn — để nốt rôm không thành mụn nhọt.</b> Các thảo dược này có tính kháng khuẩn tự nhiên; khổ qua bổ sung thêm. Nốt rôm bị bé gãi, lại gặp vi khuẩn, là thành mụn mủ.'],
        ], ss: [
          '<b>Điểm mạnh:</b> một chai vừa làm sạch, vừa có sài đất làm dịu nốt, vừa có 5 loại thảo dược hỗ trợ kháng khuẩn.',
          '<b>So với Dr.Papie, Kutieskin:</b> cả ba đều công bố ngừa rôm sảy và dùng nhiều lá trùng nhau (Kutieskin cũng có sài đất). Elemis có thêm chanh và tinh dầu mùi.',
          '<b>Nói với khách:</b> “Nước tắm có sài đất làm dịu nốt rôm, thêm các lá thảo dược giúp nốt không bị nhiễm khuẩn thành mụn.”',
          TG_GIA,
        ] },
        { k: 'gold', tp: [
          ['Kim ngân',
           '<b>Mẩn ngứa nhiều, da nhạy cảm → dùng bản Gold.</b> Kim ngân làm dịu phản ứng viêm → nốt mẩn bớt đỏ, bớt ngứa. Thành phần này chỉ bản Gold mới có.'],
        ], ss: [
          '<b>Điểm mạnh:</b> kim ngân và hương nhu — không có trong thành phần Dr.Papie, Kutieskin công bố.',
          '<b>Nói với khách:</b> “Bé mẩn ngứa nhiều thì mẹ dùng bản Gold, có thêm kim ngân làm dịu da.”',
          '<b>Lưu ý:</b> chỉ dùng cho bé từ 6 tháng. Giá cao nhất nhóm. Web ghi “100% thảo dược”, “hăm da, viêm da” nhưng không có trong công bố → không nhắc lại.',
        ] },
        { k: 'kem', tp: [
          ['Rau má (asiaticoside, acid asiatic)',
           '<b>Nốt đã nổi bớt đỏ, bé bớt rát.</b> Rau má làm dịu phản ứng kích ứng ở nốt.'],
          ['Tinh dầu ngải cứu',
           '<b>Mát dịu, hỗ trợ kháng khuẩn, ngừa mụn.</b> Tinh dầu bay hơi nhẹ tạo cảm giác mát; hỗ trợ hạn chế vi khuẩn ở chỗ bé đã gãi.'],
        ], ss: [
          '<b>Điểm mạnh cho nốt rôm, mụn:</b> vừa làm dịu (rau má) vừa hỗ trợ kháng khuẩn (ngải cứu), chấm lên đúng nốt.',
          '<b>So với Bepanthen, Sudocrem:</b> hai loại này công bố chủ yếu cho hăm tã, da khô nứt; không có rau má, ngải cứu.',
          '<b>Nói với khách:</b> “Nốt nào bé gãi đỏ thì mẹ chấm kem này, có rau má làm dịu và ngải cứu giúp ngừa mụn.”',
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'tamgoi', tp: [
          ['Tinh dầu tràm gió, sả chanh',
           '<b>Mát da sau tắm, tiếp tục hỗ trợ kháng khuẩn vài giờ.</b> Tinh dầu bay hơi trên da tạo cảm giác mát; phần còn lưu lại sau tắm tiếp tục hỗ trợ kháng khuẩn.'],
        ], ss: [
          '<b>Điểm mạnh:</b> tắm xong da mát — đúng thứ bé bị rôm cần. Vì thế hướng dẫn <b>không tráng lại</b> nước sạch.',
          '<b>Nói với khách:</b> “Mẹ tắm xong không cần tráng lại, để tinh dầu còn trên da giúp bé mát.”',
        ] },
        { k: 'kem', tp: [
          ['Aquaxyl',
           '<b>Giữ da đủ ẩm để bớt ngứa.</b> Da khô làm mẩn ngứa nặng hơn, bé gãi nhiều hơn; Aquaxyl giúp da tự giữ nước bên trong.'],
        ], ss: [
          '<b>Điểm mạnh:</b> Aquaxyl giúp da tự giữ ẩm — Bepanthen, Sudocrem không có.',
        ] },
      ] },
    ],
    bo: ['tamgoi', 'kem'],
    boThem: ['gold', 'bot'],
    kham: 'Nốt có mủ, chảy dịch, nhọt sưng to và nóng, nhọt mọc thành cụm, mẩn lan nhanh toàn thân, hoặc bé sốt kèm nổi ban → khuyên đi khám, không tự nặn.',
    luuY: 'Elemis Gold và Bọt rửa tay dành cho <b>bé từ 6 tháng</b>. Bé nhỏ hơn thì dùng bản tắm gội thường và kem bôi da.',
  },

  // ======================= 3. CHÀM SỮA =======================
  {
    id: 'cham-sua',
    ten: 'CHÀM SỮA',
    phu: 'Mảng đỏ khô, bong vảy ở hai má, trán; bé hay cọ mặt',
    cachDung: 'Tắm gội: pha 5ml : 5 lít nước 36–37°C. Lau mặt cho bé: pha 2ml : 2 lít nước sạch, cách 4–6 giờ lau một lần. Dùng khăn ẩm lau sạch da bé sau khi bú, ăn dặm. Kem bôi: thoa lớp mỏng 2–3 lần/ngày.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'tamgoi', tp: [
          ['Dịch chiết thảo dược dạng nước',
           '<b>Tắm, lau mặt mà da không khô thêm.</b> Da chàm vốn thiếu dầu và rất dễ khô sau khi tắm. Nước tắm thảo dược không làm mất lớp dầu tự nhiên như xà phòng thường → tắm xong da không khô ráp thêm.'],
          ['Chè xanh, sả chanh',
           '<b>Hỗ trợ giảm vi khuẩn ở chỗ da bong tróc.</b> Vùng chàm bị bong, bé lại hay cọ mặt nên dễ nhiễm khuẩn hơn da lành.'],
        ], ss: [
          '<b>Điểm mạnh cho chàm sữa:</b> dịu đến mức dùng pha loãng để <b>lau mặt nhiều lần trong ngày</b> được (2ml : 2 lít).',
          TG_VS,
          '<b>Nói với khách:</b> “Da chàm rất sợ khô. Nước tắm này không làm mất dầu của da, mẹ pha loãng lau mặt cho bé mấy lần một ngày được.”',
          TG_GIA,
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'kem', tp: [
          ['Rau má (asiaticoside, acid asiatic)',
           '<b>Mảng chàm bớt đỏ, bé bớt rát; chỗ nứt, bong được lấp dần.</b> Rau má làm dịu phản ứng kích ứng; đồng thời giúp da tạo tế bào mới và sợi collagen (chất giúp da liền, chắc) → chỗ nứt, bong tróc liền và mịn lại dần.'],
          ['Tinh dầu ngải cứu',
           '<b>Mát dịu, bé bớt cọ mặt; hỗ trợ kháng khuẩn.</b>'],
        ], ss: [
          '<b>Điểm mạnh cho chàm sữa:</b> một tuýp vừa làm dịu đỏ (rau má), vừa giúp da liền (rau má), vừa giữ ẩm (Aquaxyl).',
          '<b>So với Bepanthen, Sudocrem:</b> Bepanthen cũng mạnh về dưỡng, phục hồi da khô (dexpanthenol) — đừng chê. Điểm Elemis có thêm: rau má làm dịu đỏ và Aquaxyl giúp da tự giữ nước.',
          '<b>Nói với khách:</b> “Kem có rau má làm dịu mảng đỏ, giúp chỗ bong mau liền, lại giữ ẩm cho da mặt bé.”',
          KEM_GIA,
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'kem', tp: [
          ['Aquaxyl',
           '<b>Quan trọng nhất với da chàm: giúp da tự giữ nước.</b> Da chàm “yếu” ở lớp ngoài cùng nên nước thoát ra rất nhanh; Aquaxyl giúp da tự tạo chất giữ nước và làm lớp ngoài khít lại.'],
        ], ss: [
          '<b>Điểm mạnh:</b> Aquaxyl giúp da tự giữ ẩm — Bepanthen, Sudocrem không có.',
        ] },
        { k: 'dau', tp: [
          ['Dầu hạnh nhân, hạt nho, cám gạo; caprylic triglyceride',
           '<b>Bù lớp dầu da chàm đang thiếu — da mềm, bớt bong vảy.</b> Ba loại dầu có chất béo giống lớp dầu tự nhiên của da, bôi vào để giữ nước lại trong da; caprylic triglyceride giúp dầu thấm nhanh, không nhờn dính.'],
        ], ss: [
          '<b>Điểm mạnh:</b> dầu thực vật thấm nhanh, không bết — hợp để thoa da mặt, da người bé bị chàm.',
          DAU_VS,
          '<b>Nói với khách:</b> “Da chàm thiếu dầu, mẹ thoa dầu này sau tắm để da mềm, đỡ bong.”',
          DAU_BHT,
        ] },
      ] },
    ],
    bo: ['tamgoi', 'kem', 'dau'],
    boThem: [],
    kham: 'Chàm rỉ dịch, đóng vảy vàng, lan rộng hoặc bé quấy khóc nhiều → khuyên đi khám. Bé đang dùng thuốc bác sĩ kê thì dùng sản phẩm để duy trì, không thay thuốc.',
  },

  // ======================= 4. DA KHÔ, GIÓ NẮNG =======================
  {
    id: 'da-kho-gio-nang',
    ten: 'DA KHÔ, NỨT NẺ, ĐỎ RÁT DO GIÓ VÀ NẮNG',
    phu: 'Da khô ráp, bong vảy, có chỗ nứt; hoặc má và vùng da hở đỏ ửng, rát, căng khô sau khi bé ra ngoài trời',
    cachDung: 'Tắm gội: pha 5ml : 5 lít nước 36–37°C, không tráng lại. Kem bôi: thoa lớp mỏng 2–3 lần/ngày, và thoa trước khi cho bé ra ngoài trời gió hanh hoặc nắng.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'tamgoi', tp: [
          ['Dịch chiết thảo dược dạng nước, tinh dầu mùi',
           '<b>Tắm xong da không khô căng thêm.</b> Đây là bước hay bị làm sai nhất: sữa tắm tạo nhiều bọt kiểu xà phòng làm mất lớp dầu tự nhiên của da, tắm xong da càng khô, càng rát. Nước tắm thảo dược không làm mất lớp dầu đó; tinh dầu mùi làm dịu da.'],
        ], ss: [
          '<b>Điểm mạnh cho da khô:</b> làm sạch mà không làm khô da thêm.',
          TG_VS,
          '<b>Nói với khách:</b> “Da bé khô thì sữa tắm nhiều bọt làm khô thêm. Nước tắm thảo dược này sạch mà da không bị căng.”',
          TG_GIA,
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'kem', tp: [
          ['Rau má (asiaticoside)',
           '<b>Chỗ nứt nẻ liền và mịn lại nhanh hơn.</b> Rau má giúp da tạo tế bào mới và sợi collagen (chất giúp da liền, chắc) → vết nứt, bong tróc do gió, nắng được lấp dần.'],
          ['Rau má (asiaticoside, acid asiatic)',
           '<b>Má đỏ ửng, rát bớt nhanh sau khi thoa.</b> Rau má làm dịu phản ứng kích ứng do gió, nắng.'],
          ['Tinh dầu ngải cứu',
           '<b>Mát dịu, bớt cảm giác rát.</b>'],
        ], ss: [
          '<b>Điểm mạnh — lợi thế rõ nhất của kem Elemis:</b> là loại duy nhất trong ba kem công bố dùng cho <b>da bị bỏng do gió, nắng</b>; Bepanthen, Sudocrem không công bố công dụng này.',
          '<b>So với Bepanthen, Sudocrem:</b> Bepanthen mạnh về dưỡng da khô nứt; Sudocrem chủ yếu cho hăm. Elemis có thêm rau má làm dịu đỏ rát.',
          '<b>Nói với khách:</b> “Bé ra gió, ra nắng về má đỏ rát thì kem này có công bố dùng cho da bỏng gió, nắng, có rau má làm dịu và giúp chỗ nứt mau liền.”',
          KEM_GIA,
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'dau', tp: [
          ['Dầu hạnh nhân, hạt nho, cám gạo; caprylic triglyceride',
           '<b>Khoá ẩm cho da khô — da mềm, không bong vảy.</b> Chất béo trong 3 loại dầu giống lớp dầu tự nhiên của da, bôi vào để giữ nước lại trong da; caprylic triglyceride giúp thấm nhanh, không nhờn dính.'],
          ['Gamma-oryzanol (cám gạo), vitamin E',
           '<b>Bảo vệ da trước nắng, bụi — da không khô sạm.</b> Hai chất chống oxy hoá này giúp lớp dầu trên da không bị “hỏng” khi gặp nắng, ô nhiễm.'],
        ], ss: [
          '<b>Điểm mạnh cho da khô:</b> dầu thực vật vừa khoá ẩm vừa có vitamin E, chất chống oxy hoá từ cám gạo.',
          DAU_VS,
          '<b>Nói với khách:</b> “Da bé khô ráp, mẹ massage dầu này sau tắm để khoá ẩm, da mềm lại.”',
          DAU_BHT,
        ] },
        { k: 'kem', tp: [
          ['Kẽm oxyd nano 2%, Aquaxyl',
           '<b>Che chắn da khi ra ngoài + giữ ẩm bên trong.</b> Kẽm oxyd tạo lớp màng mỏng phủ da, hạn chế gió hanh tác động trực tiếp; Aquaxyl giúp da tự giữ nước bên trong, không phải chỉ ẩm bề mặt rồi bay hơi.'],
        ], ss: [
          '<b>Điểm mạnh:</b> vừa che chắn (kẽm oxyd) vừa giữ ẩm (Aquaxyl) trong một tuýp.',
          '<b>Lưu ý:</b> kem chưa công bố chỉ số chống nắng → không giới thiệu là kem chống nắng.',
        ] },
      ] },
    ],
    bo: ['tamgoi', 'dau'],
    boThem: ['kem'],
    kham: 'Da nứt sâu chảy máu, phồng rộp, nổi bọng nước, hoặc bé sốt sau khi phơi nắng lâu → khuyên đi khám.',
    luuY: 'Sản phẩm <b>chưa được kiểm nghiệm và công bố chỉ số chống nắng (SPF/PA)</b> — không giới thiệu là kem chống nắng.',
  },

  // ======================= 5. MUỖI ĐỐT =======================
  {
    id: 'muoi-dot',
    ten: 'MUỖI ĐỐT, CÔN TRÙNG CẮN',
    phu: 'Nốt sưng đỏ, ngứa; bé gãi trầy da',
    cachDung: 'Xịt muỗi: xịt lên quần áo và vùng da hở, tránh mặt và bàn tay bé; xịt lại sau 2–3 giờ vì tinh dầu tự nhiên bay hơi dần. Kem bôi: thoa lớp mỏng lên nốt đã đốt.',
    buoc: [
      { ten: 'PHÒNG TỪ ĐẦU', sp: [
        { k: 'xit', tp: [
          ['Tinh dầu sả Java, sả chanh, bạch đàn chanh',
           '<b>Muỗi không tìm được chỗ đốt.</b> Mùi tinh dầu bay lên liên tục, lấn át mùi cơ thể bé — muỗi “mất dấu”, tránh xa vùng da đã xịt. Tinh dầu bay hơi dần nên xịt lại sau 2–3 giờ.'],
          ['An tức hương, vanillin',
           '<b>Giữ mùi xua muỗi lâu hơn.</b> Hai chất này bay hơi chậm, “giữ” các tinh dầu lại trên da lâu hơn.'],
        ], ss: [
          '<b>Điểm mạnh:</b> hoạt chất xua muỗi là <b>tinh dầu thực vật</b>, không dùng Picaridin hay DEET; dùng được cho <b>bé từ 3 tháng</b>.',
          '<b>So với Remos Baby (Picaridin), Soffell (DEET):</b> Remos dùng cho bé từ 6 tháng, Soffell không dùng cho trẻ dưới 4 tuổi → bé 3–6 tháng thì Elemis là lựa chọn phù hợp trong ba loại. Elemis còn làm dịu vết đốt (xem bước 2).',
          '<b>Nói với khách:</b> “Xịt này xua muỗi bằng tinh dầu sả, bạch đàn chanh, bé từ 3 tháng dùng được. Mẹ nhớ xịt lại sau 2–3 tiếng.”',
          '<b>Lưu ý:</b> hiệu quả công bố 3 giờ, ngắn hơn Remos (6 giờ), Soffell (8 giờ) → dặn khách xịt lại, đừng giấu. Không nói “100% tự nhiên, không hoá chất” vì sản phẩm có cồn và phụ gia.',
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'xit', tp: [
          ['Tinh dầu bạch đàn chanh, cồn, sả',
           '<b>Mát ngay, bớt ngứa ở nốt vừa bị đốt.</b> Bạch đàn chanh làm dịu da; cồn bay hơi tạo cảm giác mát tức thì; tinh dầu sả hỗ trợ hạn chế nốt bị nhiễm khuẩn khi bé gãi.'],
        ], ss: [
          '<b>Điểm mạnh:</b> một chai vừa xua muỗi vừa làm dịu vết đốt — Remos, Soffell chỉ công bố chống muỗi.',
        ] },
        { k: 'kem', tp: [
          ['Rau má (asiaticoside, acid asiatic)',
           '<b>Nốt đốt bớt sưng đỏ, bớt rát.</b> Rau má làm dịu phản ứng của da quanh nốt đốt.'],
          ['Tinh dầu ngải cứu',
           '<b>Mát dịu, hỗ trợ kháng khuẩn chỗ bé đã gãi trầy.</b>'],
        ], ss: [
          '<b>Điểm mạnh:</b> làm dịu nốt đốt và hỗ trợ kháng khuẩn chỗ gãi trầy — Bepanthen, Sudocrem không công bố dùng cho vết côn trùng đốt.',
          '<b>Nói với khách:</b> “Nốt nào bé gãi đỏ thì mẹ chấm kem này cho dịu, đỡ nhiễm khuẩn.”',
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'kem', tp: [
          ['Rau má (asiaticoside)',
           '<b>Vết gãi trầy mau liền, hạn chế để lại thâm.</b> Rau má giúp da tạo tế bào mới → chỗ trầy liền lại; da non mới lên phẳng và đều màu hơn.'],
        ], ss: [
          '<b>Điểm mạnh:</b> dùng tiếp khi nốt đã xẹp để hỗ trợ da liền đẹp — một tuýp dùng suốt từ lúc bị đốt đến lúc lành.',
        ] },
        { k: 'tamgoi', tp: [
          ['Sả chanh',
           '<b>Hỗ trợ xua muỗi nhẹ sau khi tắm.</b> Mùi sả còn lưu trên da sau tắm khiến muỗi tránh — lượng ít hơn xịt muỗi nên chỉ ở mức hỗ trợ.'],
        ], ss: [
          '<b>Lưu ý:</b> Dr.Papie và các nước tắm thảo dược khác có sả cũng hỗ trợ xua muỗi → đây không phải điểm riêng, chỉ nói như một lợi ích thêm.',
        ] },
      ] },
    ],
    bo: ['xit', 'kem'],
    boThem: ['tamgoi'],
    kham: 'Nốt đốt sưng to bất thường, lan rộng, có mủ, hoặc bé sốt → khuyên đi khám.',
    luuY: 'Xịt muỗi dùng cho <b>bé trên 3 tháng</b>. Bé nhỏ hơn thì dùng màn và quần áo dài.',
  },

  // ======================= 6. CỨT TRÂU =======================
  {
    id: 'cut-trau',
    ten: 'CỨT TRÂU (VẢY DA ĐẦU)',
    phu: 'Mảng vảy vàng, cứng bám trên da đầu bé',
    cachDung: 'Tắm gội: pha 5ml : 5 lít để gội, không chà xát hay cạy vảy.',
    buoc: [
      { ten: 'LÀM MỀM VẢY', sp: [
        { k: 'dau', tp: [
          ['Dầu cám gạo, hạnh nhân, hạt nho, caprylic triglyceride',
           '<b>Vảy mềm ra, tự bong — không cần cạy.</b> Dầu ngấm vào lớp vảy khô cứng, làm mềm và tách chúng khỏi da đầu để lau hoặc gội trôi đi nhẹ nhàng, không làm tổn thương da đầu bé.'],
        ], ss: [
          '<b>Điểm mạnh:</b> dầu thực vật vừa làm mềm vảy, vừa dưỡng lại da đầu sau khi vảy bong (bước 3) — một chai dùng cả hai bước.',
          DAU_VS + ' Loại dầu nào cũng làm mềm vảy được — điểm để nói là dầu thực vật còn dưỡng da đầu.',
          '<b>Nói với khách:</b> “Mẹ thoa dầu lên chỗ vảy, để một lúc cho mềm rồi gội, vảy tự bong, không phải cạy.”',
          DAU_BHT,
        ] },
      ] },
      { ten: 'LÀM SẠCH', sp: [
        { k: 'tamgoi', tp: [
          ['Papain (men đu đủ), acid citric (chanh)',
           '<b>Vảy đã mềm trôi đi khi gội, không cần chà.</b> Men đu đủ giúp phần vảy đã được dầu làm mềm bong ra nhẹ nhàng.'],
          ['Chè xanh, sả chanh',
           '<b>Hỗ trợ giảm vi khuẩn trên da đầu</b> sau khi lớp vảy đã bong.'],
        ], ss: [
          '<b>Điểm mạnh:</b> một chai tắm và gội cho bé — men đu đủ giúp vảy trôi mà không phải chà xát da đầu.',
          TG_VS,
          '<b>Nói với khách:</b> “Sau khi thoa dầu, mẹ gội bằng Elemis, vảy mềm sẽ trôi đi, mẹ không cần gãi hay cạy.”',
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'dau', tp: [
          ['Dầu hạnh nhân, hạt nho, cám gạo',
           '<b>Giữ da đầu mềm để vảy không đóng lại dày như cũ.</b> Bù lại lớp dầu cho da đầu sau khi bong vảy.'],
        ], ss: [
          '<b>Điểm mạnh:</b> dùng tiếp chai dầu đã mua ở bước 1, không cần thêm sản phẩm.',
        ] },
        { k: 'tamgoi', tp: [
          ['Tinh dầu tràm gió, sả chanh',
           '<b>Hỗ trợ kháng khuẩn nhẹ trên da đầu</b> nhờ phần tinh dầu còn lưu lại sau khi gội.'],
        ], ss: [] },
      ] },
    ],
    bo: ['dau', 'tamgoi'],
    boThem: [],
    kham: 'Da đầu dưới vảy đỏ rực, rỉ dịch, có mùi, hoặc lan xuống mặt và người → khuyên đi khám.',
  },

  // ======================= 7. THÂM, SẸO MỚI =======================
  {
    id: 'seo-tham',
    ten: 'VẾT THÂM, SẸO MỚI SAU KHI DA ĐÃ LÀNH',
    phu: 'Da đã liền nhưng còn vết thâm, sẹo mới sau rôm sảy, muỗi đốt, trầy xước',
    cachDung: 'Kem bôi: thoa lớp mỏng lên vùng da đã lành, ngày 2–3 lần, dùng đều trong thời gian dài. Chỉ thoa khi da đã liền, không thoa lên vết thương hở hay đang chảy dịch.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'tamgoi', tp: [
          ['Dịch chiết thảo dược dạng nước',
           '<b>Da non mới liền không bị khô, bong sau tắm.</b> Nước tắm thảo dược không làm mất lớp dầu tự nhiên của da như xà phòng thường.'],
        ], ss: [
          '<b>Điểm mạnh:</b> dịu với vùng da non.',
          TG_VS,
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'kem', tp: [
          ['Rau má (asiaticoside)',
           '<b>Hỗ trợ làm mờ sẹo mới, thâm mới.</b> Rau má giúp da tạo tế bào mới và sợi collagen (chất giúp da liền, chắc) → da non mới lên phẳng và đều màu hơn. Hiệu quả rõ nhất với sẹo còn mới.'],
        ], ss: [
          '<b>Điểm mạnh:</b> kem có rau má — thảo dược quen thuộc với các mẹ trong chăm sóc vết thương, sẹo. Bepanthen, Sudocrem không công bố hỗ trợ làm mờ sẹo.',
          '<b>Nói với khách:</b> “Da bé đã lành rồi, mẹ thoa kem rau má đều đặn để hỗ trợ vết thâm mờ dần. Sẹo càng mới thì càng dễ.”',
          '<b>Lưu ý:</b> không hứa hết sẹo, không hứa số ngày.',
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'kem', tp: [
          ['Aquaxyl',
           '<b>Da đủ ẩm thì da non liền đẹp hơn.</b> Aquaxyl giúp da tự tạo chất giữ nước và làm lớp da ngoài cùng khít lại.'],
        ], ss: [
          '<b>Điểm mạnh:</b> cùng một tuýp vừa hỗ trợ làm mờ (rau má) vừa giữ ẩm (Aquaxyl).',
        ] },
        { k: 'dau', tp: [
          ['Dầu hạnh nhân, hạt nho, cám gạo; vitamin E, gamma-oryzanol',
           '<b>Giữ da non mềm, hạn chế thâm thêm khi ra nắng.</b> Dầu bù lớp dầu tự nhiên cho vùng da non; vitamin E và chất chống oxy hoá từ cám gạo giúp bảo vệ da — da non gặp nắng dễ thâm hơn da lành.'],
        ], ss: [
          '<b>Điểm mạnh:</b> có vitamin E và chất chống oxy hoá từ cám gạo, bảo vệ vùng da non.',
          DAU_VS,
          DAU_BHT,
        ] },
      ] },
    ],
    bo: ['kem'],
    boThem: ['dau', 'tamgoi'],
    kham: 'Sẹo lồi, sẹo co kéo, hoặc sẹo do bỏng sâu → khuyên đi khám chuyên khoa da liễu, sản phẩm không xử lý được nhóm này.',
    luuY: 'Chỉ nói <b>“hỗ trợ làm mờ sẹo”</b> theo đúng tài liệu gốc — <b>không hứa hết sẹo, không hứa số ngày</b>.',
  },

  // ======================= 8. DA TAY KHÔ =======================
  {
    id: 'tay-kho',
    ten: 'DA TAY KHÔ RÁT DO RỬA TAY NHIỀU',
    phu: 'Bé đi lớp rửa tay nhiều lần trong ngày, mu bàn tay khô ráp, đỏ, nứt',
    cachDung: 'Kem bôi: thoa lớp mỏng lên mu bàn tay sau khi rửa, nhất là trước khi đi ngủ.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'bot', tp: [
          ['Chất tạo bọt dịu gốc dầu dừa (cocamidopropyl betaine)',
           '<b>Sạch tay mà không khô tay.</b> Bọt kéo dầu mỡ, bụi bẩn, vi khuẩn khỏi tay rồi trôi theo nước; dịu hơn xà phòng nên không lấy đi quá nhiều dầu tự nhiên của da tay bé.'],
          ['Sả chanh, trà xanh',
           '<b>Hỗ trợ giảm vi khuẩn còn lại trên tay.</b>'],
        ], ss: [
          '<b>Điểm mạnh:</b> dạng bọt, bé tự bơm, tự rửa; có Aquaxyl và lô hội giữ ẩm → rửa nhiều lần trong ngày tay không khô.',
          '<b>So với Chicco 0M+:</b> Chicco cũng dịu, có trà xanh, cúc la mã (giống Elemis). Elemis có thêm <b>Aquaxyl</b> và <b>lô hội</b> — Chicco không liệt kê.',
          '<b>Nói với khách:</b> “Bé đi học rửa tay nhiều nên tay khô. Bọt rửa tay này có thêm chất giữ ẩm, rửa xong tay không bị ráp.”',
          '<b>Lưu ý:</b> Elemis giá cao hơn Chicco (245.000đ so với khoảng 150.000đ, cùng 250ml) và chỉ dùng cho bé từ 6 tháng; Chicco dùng từ sơ sinh.',
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'bot', tp: [
          ['Lô hội, cúc la mã',
           '<b>Tay rửa nhiều lần không bị rát đỏ.</b> Lô hội và cúc la mã làm dịu da tay ngay trong lúc rửa.'],
        ], ss: [
          '<b>Điểm mạnh:</b> làm dịu da ngay khi rửa, không cần đợi bôi kem.',
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'bot', tp: [
          ['Glycerin, Aquaxyl, lô hội',
           '<b>Rửa xong tay vẫn mềm.</b> Ba lớp giữ ẩm: glycerin hút ẩm giữ trên bề mặt da; Aquaxyl giúp da tự giữ nước bên trong; lô hội tạo lớp gel mỏng giữ nước.'],
        ], ss: [
          '<b>Điểm mạnh:</b> Aquaxyl — thành phần giữ ẩm Chicco không có.',
        ] },
        { k: 'kem', tp: [
          ['Rau má, Aquaxyl',
           '<b>Mu bàn tay đã nứt mau liền, mềm lại.</b> Rau má giúp da tạo tế bào mới lấp chỗ nứt; Aquaxyl giữ ẩm cho da.'],
        ], ss: [
          '<b>Điểm mạnh:</b> vừa giúp chỗ nứt liền (rau má) vừa giữ ẩm (Aquaxyl).',
          '<b>So với Bepanthen:</b> Bepanthen cũng mạnh về dưỡng da khô nứt — đừng chê; Elemis có thêm rau má.',
          KEM_GIA,
        ] },
      ] },
    ],
    bo: ['bot'],
    boThem: ['kem'],
    kham: 'Tay nứt sâu chảy máu, hoặc nổi mụn nước ngứa nhiều → khuyên đi khám.',
    luuY: 'Bọt rửa tay dành cho <b>bé từ 6 tháng</b>.',
  },

  // ======================= 9. TƯA LƯỠI =======================
  {
    id: 'tua-luoi',
    ten: 'TƯA LƯỠI, NẤM LƯỠI (không phải vấn đề da — nhưng hay được hỏi cùng lúc)',
    phu: 'Mảng trắng bám trên lưỡi bé, lau nước không ra; bé bú kém, miệng có mùi',
    cachDung: 'Gạc rơ lưỡi: rửa tay, xé gói, đeo gạc vào ngón trỏ, lau nhẹ má trong → nướu → lưỡi (từ trong ra ngoài). Rơ 1–2 lần/ngày, sau bú 30 phút; bé đang tưa thì 3 lần/ngày. Mỗi gói dùng 1 lần, không dùng lại.',
    buoc: [
      { ten: 'LÀM SẠCH', sp: [
        { k: 'gac', tp: [
          ['Muối ăn, glycerin',
           '<b>Lau sạch cặn sữa — thức ăn của nấm.</b> Muối cùng động tác lau nhẹ của gạc lấy cặn sữa khỏi lưỡi, má trong; hết cặn sữa thì nấm mất nguồn “thức ăn”. Glycerin giữ gạc luôn ẩm, lau không làm xước lớp niêm mạc mỏng của bé.'],
        ], ss: [
          '<b>Điểm mạnh:</b> gạc tẩm sẵn, xé ra dùng ngay, mỗi gói một lần — tiện hơn tự quấn gạc chấm nước muối.',
          '<b>So với gạc Dr.Papie:</b> hai loại có nhiều thành phần giống nhau (muối, baking soda, xylitol, lá hẹ). Elemis có thêm <b>rau ngót</b> — lá dân gian quen dùng rơ lưỡi cho trẻ — và <b>2 phiên bản</b>: hương dưa lưới cho bé dễ hợp tác, không mùi (có cúc la mã) cho bé hay ọe.',
          '<b>Nói với khách:</b> “Gạc có rau ngót, thứ các bà hay dùng rơ lưỡi cho bé, lại có loại không mùi nếu bé hay ọe.”',
        ] },
      ] },
      { ten: 'XỬ LÝ VẤN ĐỀ', sp: [
        { k: 'gac', tp: [
          ['Baking soda (natri bicarbonate)',
           '<b>Làm miệng bé bớt chua — nấm khó phát triển.</b> Cặn sữa lên men làm miệng bé chua, đó là môi trường nấm tưa ưa thích; baking soda làm giảm độ chua này.'],
          ['Lá hẹ, chè xanh, rau ngót',
           '<b>Hỗ trợ hạn chế nấm và vi khuẩn trong miệng.</b> Lá hẹ hỗ trợ ức chế nấm, vi khuẩn; chè xanh hỗ trợ hạn chế vi khuẩn gây viêm nướu; rau ngót được dân gian dùng rơ lưỡi phòng tưa cho trẻ.'],
        ], ss: [
          '<b>Điểm mạnh:</b> kết hợp baking soda với 3 loại lá (hẹ, chè xanh, rau ngót) — Dr.Papie chỉ có lá hẹ là dược liệu chính.',
        ] },
      ] },
      { ten: 'NUÔI DƯỠNG & BẢO VỆ', sp: [
        { k: 'gac', tp: [
          ['Xylitol',
           '<b>Hạn chế mảng bám, miệng bớt hôi, bảo vệ răng sắp mọc.</b> Vi khuẩn gây sâu răng ăn đường rồi thải ra chất chua làm hỏng men răng; xylitol là loại “đường” chúng không ăn được → không sinh chất chua.'],
          ['Cúc la mã (chỉ có ở bản không mùi)',
           '<b>Làm dịu nướu, bé dễ chịu khi mọc răng.</b>'],
        ], ss: [
          '<b>Điểm mạnh:</b> bản không mùi có thêm cúc la mã làm dịu nướu khi bé mọc răng.',
        ] },
      ] },
    ],
    bo: ['gac'],
    boThem: [],
    kham: 'Mảng trắng dày lau không ra, bé bỏ bú hoàn toàn, sốt hoặc quấy nhiều → khuyên mẹ đưa bé đi khám.',
    luuY: 'Đây <b>không phải vấn đề ngoài da</b>, nhưng mẹ rất hay hỏi cùng lúc với các vấn đề da nên đưa vào kit. Bản <b>hương dưa lưới</b> bé dễ hợp tác hơn; bản <b>không mùi</b> cho bé nhạy mùi hay ọe, và có thêm cúc la mã làm dịu nướu. ⚠️ Thành phần có <b>acid boric</b> — không nêu như điểm bán hàng; khách hỏi về độ an toàn thì chờ R&D xác nhận nồng độ trước khi trả lời.',
  },
];

module.exports = { SP, VANDE };
