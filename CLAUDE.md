# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo này là gì

Workspace hỗ trợ công việc thực tế cho **Vũ Trần Thuý Nhi** — hiện đang làm **Nhân viên Hỗ trợ Kinh doanh (Sales Admin)** tại **Công ty TNHH Dược Khoa Xanh** (Hà Nội).

Khác với `../SalesAdminInterview` (đã xong việc, dùng để luyện phỏng vấn và đã trúng tuyển vị trí này), thư mục này là nơi hỗ trợ công việc **hàng ngày** sau khi Nhi đã nhận việc.

Thư mục mới bắt đầu — chưa có quy ước file, script hay công cụ nào được thiết lập ngoài danh mục công việc bàn giao. Cập nhật file này khi cấu trúc dự án phát triển thêm (đừng để phần "Cấu trúc" bên dưới lạc hậu so với thực tế).

## Ngôn ngữ: Tiếng Việt

Toàn bộ giao tiếp, tài liệu, file trong repo này dùng tiếng Việt — Nhi không làm việc bằng tiếng Anh.

## Bối cảnh công ty (Dược Khoa Xanh)

- Công ty TNHH Dược Khoa Xanh — BT06, 52 Lĩnh Nam, P. Tương Mai, Hà Nội.
- Ngành: chăm sóc sức khoẻ **mẹ và bé** từ dược liệu thiên nhiên. Thành viên của **DK Pharma**, xuất phát từ ĐH Dược Hà Nội.
- Bán hàng qua nhiều kênh: **NPP** (nhà phân phối), **Shop/nhà thuốc/CTV**, **hệ thống**, và kênh **ETC** (đấu thầu bệnh viện công).
- Kinh doanh nội địa 63 tỉnh — không yêu cầu tiếng Anh trong công việc.

## Hồ sơ Nhi

- Cử nhân Quản trị Kinh doanh, ĐH Lâm nghiệp Việt Nam (2021, loại Giỏi).
- 4 năm kinh nghiệm nghiên cứu viên tại Viện Sinh thái rừng và Môi trường trước khi chuyển ngành: làm việc trực tiếp với khách hàng, định giá/báo giá, chuẩn bị và theo dõi hồ sơ hợp đồng, xử lý số liệu Excel nâng cao (hàm, PivotTable, VLOOKUP, SUMIFS, biểu đồ).
- **Kỹ năng kỹ thuật:** Excel thành thạo (hàm, PivotTable, SUMIFS/SUMPRODUCT, Data Validation, Excel Table), Word, PowerPoint. **Chưa biết** Power BI, SQL, VBA, Power Query.
- Không dùng được tiếng Anh trong công việc.
- Hồ sơ đầy đủ và quá trình xin việc: xem `../SalesAdminInterview/` — CV gốc tại `../SalesAdminInterview/ho-so/`, bài test thực hành vòng phỏng vấn Dược Khoa Xanh (đề xuất chương trình bán hàng, công cụ theo dõi CTKM, báo cáo tổng kết/đánh giá) tại `../SalesAdminInterview/bai-test-duockhoaxanh/`.

## Quy tắc

- **Không bịa.** Không thêm số liệu, tên khách hàng, tên sản phẩm hay dữ kiện công việc Nhi chưa cung cấp. Thiếu thông tin thì hỏi, đừng tự điền.
- Nền tảng kỹ thuật của Nhi là Excel (hàm, PivotTable, SUMIFS, Data Validation) — ưu tiên giải pháp trong khả năng này; chỉ đề xuất Power BI/SQL/VBA nếu Nhi chủ động muốn học thêm, không mặc định là đã biết.

## Git

- Khi làm việc qua **session web tại claude.ai/code**: **không tạo branch mới** — push thẳng lên `main` với bất kỳ thay đổi nào.

## Danh mục công việc (bàn giao — `List_CongViec_Admin.xlsx`)

Bản bàn giao công việc Sales Admin, 7 nhóm việc chính. Cờ hàng ngày/phát sinh/ưu tiên tuần đầu lấy nguyên từ file gốc.

### 1. Đơn hàng (hàng ngày)
1.1. Lên đơn hàng cho khách khi NVKD cần hỗ trợ — lên đơn trong phần mềm **AMIS**. Đầu mối: NVKD, Kế toán. ⭐ Ưu tiên thành thạo tuần đầu — ghi chú gốc: "sang hỏi luôn".
1.2. Xác nhận hoá đơn (khớp thông tin với đối tác, gửi hoá đơn đã ký số, xác nhận thanh toán):
   1. Gửi hoá đơn nháp cho đơn mới lên (làm việc với NVKD/khách hàng)
   2. Yêu cầu khách kiểm tra & xác nhận hoá đơn đúng
   3. Báo kế toán (chị Giang hoặc chị Tươi) ký số hoá đơn, gửi lại file
   4. Gửi file hoá đơn đã ký số cho đối tác — note rõ đơn hàng nào
   5. Cập nhật tình hình thanh toán vào nhóm cho kế toán (chị Giang/chị Tươi)
1.3. Theo dõi tình trạng đơn hàng (đi được/không đi được trong ngày, thời điểm dự kiến khách nhận hàng):
   1. Làm việc với kho (chị Dung hoặc chị Phương) về thời gian dự kiến gửi hàng sau khi khách thanh toán
   2. Cập nhật tình hình đi đơn, thời gian dự kiến giao cho đối tác (làm việc với NVKD/khách hàng)
1.4. Xử lý phát sinh: đổi trả hàng (đối chiếu điều kiện hợp đồng), hàng sai/nhầm — báo kho vận xác nhận số lượng và sắp lịch trả hàng.

### 2. Giấy tờ, chứng từ (hàng ngày)
2.1. Giấy tờ sản phẩm, thông tin sản phẩm phân phối kênh ngoài, profile công ty — gửi khách khi có yêu cầu. Đầu mối: NVKD hoặc HCNS.
2.2. Hợp đồng mẫu (mua bán, ký gửi, tích luỹ...) — đối chiếu thông tin trên hợp đồng:
   1. Lấy mẫu hợp đồng theo đối tượng từ NVKD, hoặc soạn bản mới nếu chưa có (đầu mối: NVKD hoặc chị Tươi)
   2. Thêm thông tin khách hàng phía đối tác (đầu mối: NVKD)
   3. Check nội dung điều khoản với kế toán (chị Tươi)
2.3. Thông báo chính sách — làm file báo giá cụ thể theo đối tượng/chương trình/địa bàn (NVKD cung cấp).

### 3. Tư liệu (hàng ngày)
3.1. Bài viết content, hình ảnh, video cho sản phẩm/chương trình gửi khách hàng — làm việc với MKT-Media (Kiều: content; anh Nam: hình ảnh, video). Ghi chú gốc: CTV khu vực miền Trung — thông báo tới CTV, shop.
3.2. Thu thập hình ảnh, video từ đối tác — cập nhật từ thị trường để phục vụ đăng bài/tháng (NVKD cung cấp theo KPI).

### 4. Quản lý khách hàng của bộ phận (hàng ngày)
4.1. Quản lý khách hàng của bộ phận là các shop.
4.2. Chăm sóc shop: gửi bài viết, chương trình theo địa bàn.
4.3. Xử lý phát sinh: thắc mắc/vấn đề của người tiêu dùng tại shop.

### 5. Báo cáo, phân tích số liệu (hàng ngày + phát sinh + ⭐ ưu tiên tuần đầu)
5.1. Tổng hợp doanh số ngày/tuần/tháng — nhắc sale cập nhật doanh số (đầu mối: NVKD).
5.2. Mức độ đạt KPI cá nhân/bộ phận theo tuần — báo cáo tiến độ hàng tuần (NVKD, PGĐ).
5.3. Phân tích dữ liệu đổ về của bộ phận (PGĐ).

### 6. Chương trình, đề xuất (hàng ngày)
6.1. Tham vấn chương trình cho bộ phận theo sản phẩm/tháng — dựa trên số liệu đã phân tích theo giai đoạn/cùng kỳ/xu hướng (NVKD).
6.2. Đề xuất chương trình với BGĐ — bám tiến độ đề xuất và duyệt. Kế toán (chị Hà) và BGĐ (anh Đức) ký duyệt.
6.3. Bám sát chương trình, tư vấn cho các đối tác phụ trách.
6.4. Thông báo chương trình khuyến mại sang Sở Công Thương.

### 7. Hỗ trợ điểm bán (hàng ngày)
7.1. Hỗ trợ trade điểm bán khi cần.

### Đầu mối làm việc chính

| Ai | Vai trò |
|---|---|
| NVKD | Nhân viên kinh doanh — nguồn giao việc/đơn hàng chính |
| Chị Giang, chị Tươi | Kế toán — ký số hoá đơn, đối chiếu điều khoản hợp đồng |
| Chị Hà | Kế toán — ký duyệt chương trình |
| Chị Dung, chị Phương | Kho — thời gian gửi/giao hàng |
| Kiều | MKT — content |
| Anh Nam | MKT — hình ảnh, video |
| Anh Đức | BGĐ — ký duyệt chương trình |
| PGĐ | Nhận báo cáo KPI tuần, phân tích dữ liệu bộ phận |
| HCNS | Giấy tờ, profile công ty |

### Phần mềm dùng
- **AMIS** — lên đơn hàng.

### Ưu tiên thành thạo trong tuần đầu tiên
- 1.1 Lên đơn hàng trong AMIS.
- 3.1 Thông báo chương trình/bài viết tới CTV khu vực miền Trung và các shop.
- Nhóm 5 (báo cáo, phân tích số liệu) — cờ cả hàng ngày + phát sinh + ưu tiên tuần đầu, trọng tâm cần nắm sớm nhất.

## Cấu trúc

```
Nhi/
├── CLAUDE.md                        ← file này
├── List_CongViec_Admin.xlsx         ← bàn giao công việc gốc (nguồn của mục "Danh mục công việc" ở trên)
└── Phân tích công việc/              ← phân tích sâu từng nhóm việc, 1 folder con / mỗi "Công việc" trong file Excel
    ├── 1. Đơn hàng/
    ├── 2. Giấy tờ, chứng từ/
    ├── 3. Tư liệu/
    ├── 4. Quản lý khách hàng của bộ phận/
    ├── 5. Báo cáo, phân tích số liệu/
    ├── 6. Chương trình, đề xuất/
    │   ├── Phân tích công việc.md    ← phân tích chi tiết theo "Các bước thực hiện", nhấn mạnh phần cần chú ý
    │   └── Câu hỏi làm rõ.md         ← câu hỏi nên hỏi quản lý/đồng nghiệp để lấp lỗ hổng thông tin
    └── 7. Hỗ trợ điểm bán/
        ├── Phân tích công việc.md
        └── Câu hỏi làm rõ.md
1. Đơn hàng/                            ← trống, để dành nội dung riêng ứng với nhóm việc 1 (đồng cấp Phân tích công việc, tên trùng với folder con cùng tên trong đó)
2. Giấy tờ, chứng từ/                   ← trống, để dành nội dung riêng ứng với nhóm việc 2
3. Tư liệu/                             ← trống, để dành nội dung riêng ứng với nhóm việc 3
4. Quản lý khách hàng của bộ phận/      ← trống, để dành nội dung riêng ứng với nhóm việc 4
5. Báo cáo, phân tích số liệu/          ← trống, để dành nội dung riêng ứng với nhóm việc 5
6. Chương trình, đề xuất/               ← trống, để dành nội dung riêng ứng với nhóm việc 6
7. Hỗ trợ điểm bán/
├── Poster NVBH/                        ← poster A4 in ra dán quầy hoặc phát cho nhân viên bán hàng tại shop. Màu thương hiệu #2F9036 và ảnh lấy từ bộ slide Elemis chính thức của công ty
│   ├── README - cach dung.md           ← bố cục, cách dựng lại, lưu ý khi in, 3 điểm cần công ty xác nhận
│   ├── _chung.css                      ← kiểu dùng chung cả 2 bản poster
│   ├── assets/                         ← ảnh tách từ bộ slide Elemis: sản phẩm, logo, dược liệu, 4 bước tắm, giấy kiểm nghiệm, ảnh khách dùng
│   ├── render.js · probe.js · kiemtra.js  ← dựng PDF+PNG bằng Chromium, tự báo lỗi nếu chữ bị cắt hoặc tràn khỏi khổ giấy
│   ├── SP1 - Tam goi Elemis (1 trang).html/.pdf/.png  ← bản 1 trang, dán quầy
│   └── SP1 - Tam goi Elemis (2 trang).html/.pdf/.png  ← bản 2 trang, phát cho NVBH giữ; trang 2 là phần cần học (4 bước tắm có hình, cách dùng khi chàm sữa/hăm tã, bảng 5 cấp độ hăm, giấy kiểm nghiệm)
└── Sellout kit/                        ← chuyển từ Phân tích công việc/7. Hỗ trợ điểm bán/ sang, gom mọi tài liệu ngoài "Phân tích công việc.md" và "Câu hỏi làm rõ.md"
    ├── Khung xử lý từ chối mua hàng - khối vấn đề (toàn bộ SP OTC).md  ← framework tầng cao hơn: nhóm câu từ chối thành 8 khối vấn đề chung cho toàn bộ 13 SP/dòng trong bảng báo giá OTC (thương hiệu, giá, thành phần, hiệu quả, pháp lý, so sánh đối thủ, kênh phân phối, trì hoãn quyết định) + phương hướng trả lời chung và câu mở dẫn dắt theo công thức sandwich 3 lớp (Đồng cảm → Làm rõ + lợi thế → Điều hướng) cho mỗi khối, không phải câu trả lời cụ thể từng câu hỏi
    ├── Theo vấn đề da bé/              ← ⭐ kit xếp THEO VẤN ĐỀ CỦA BÉ thay vì theo sản phẩm — đúng thứ tự thực tế ở quầy: khách nói "bé bị hăm" chứ không hỏi tên sản phẩm. 9 vấn đề (gộp từ 13 theo mức trùng hoạt chất), mỗi vấn đề xử lý theo 3 bước: làm sạch → xử lý vấn đề → nuôi dưỡng & bảo vệ
    │   ├── README.md                   ← nguồn dữ liệu, căn cứ gộp vấn đề, cách dựng lại, cách thêm vấn đề mới
    │   ├── Sell-out kit theo vấn đề da bé.docx  ← ⭐ BẢN CHÍNH (Word A4 ngang): mỗi vấn đề một mục lớn + sơ đồ nhánh dạng bảng gộp ô đủ 4 lớp (vấn đề da → bước xử lý → sản phẩm → thành phần + cơ chế)
    │   ├── dulieu.js                   ← nguồn duy nhất của cả bản Word lẫn sơ đồ. Sửa ở đây rồi chạy lại 2 script, mọi file khác cập nhật theo
    │   ├── taosodo.js · taoword.js · canhchinh.js · sodo.css  ← sinh sơ đồ HTML và bản Word; canhchinh.js tự dò cỡ chữ lớn nhất mà trang không tràn
    │   ├── So do - 0 - Bang tra nhanh.pdf  ← 1 trang A4 ngang: 9 vấn đề × 7 sản phẩm, ô có số là sản phẩm đảm nhận bước đó. Dán quầy
    │   └── So do - 1..9 - <tên>.pdf    ← sơ đồ nhánh riêng từng vấn đề, in lẻ khi cần
    ├── Theo sản phẩm/                  ← tài liệu sell-out kit gắn theo từng sản phẩm cụ thể
    │   ├── Xử lý từ chối mua hàng - script cho NVBH.md  ← câu hỏi/từ chối thường gặp của NTD tại quầy + câu trả lời gợi ý, theo từng sản phẩm trong sell-out kit
    │   ├── Bộ sell-out kit theo sản phẩm.md  ← sell-out kit (POSM, cơ chế thành phần theo từng bước, script, giá/khuyến mãi) cho **toàn bộ 9 nhóm SP trong bảng báo giá OTC**: kem bôi, xịt muỗi, sữa tắm, gạc rơ lưỡi, dầu massage Oriky, bọt rửa tay, Curmilk, Yaocare Women, Dao'Spa Mama
    │   ├── Bài đào tạo sản phẩm cho NV shop (nói miệng 5-10 phút).md  ← bài nói đào tạo NV shop về thành phần/công dụng/lợi ích/khác biệt từng sản phẩm, dùng trước khi NV tự tư vấn NTD
    │   └── Bài đào tạo sản phẩm cho NV shop (dạng gạch đầu dòng).md  ← cùng nội dung, rút gọn thành gạch đầu dòng để xem nhanh
    └── Poster gấp 3/                   ← tờ rơi gấp 3, khổ A4 ngang, mỗi mặt 3 cột — Mặt A rút từ "Khung xử lý từ chối mua hàng...", Mặt B rút từ "Theo vấn đề da bé/" (bảng tra nhanh 9 vấn đề + 5 vấn đề minh hoạ chi tiết). Ảnh dùng lại từ `../Poster NVBH/assets/`
        ├── README - cach dung.md       ← cách in/gấp, nguồn nội dung từng mặt, giới hạn ảnh hiện có, lựa chọn biên tập
        ├── _gap3.css                   ← kiểu dùng chung cả 2 mặt
        ├── Mat A - Khung xu ly tu choi mua hang.html/.pdf/.png
        └── Mat B - Van de da be.html/.pdf/.png
Danh mục sản phẩm/                      ← phân loại sản phẩm công ty
├── Giới thiệu sản phẩm/                ← bài giới thiệu chi tiết từng sản phẩm, dựng theo cấu trúc mẫu Xịt muỗi Elemis.pptx sếp cung cấp (nỗi đau KH, thông tin SP, công dụng, thành phần, USP, hướng dẫn dùng, cam kết, so sánh đối thủ, FAQ)
│   ├── Giới thiệu sản phẩm - Kem bôi da Elemis.md
│   ├── Giới thiệu sản phẩm - Sữa tắm gội Elemis.md     ← cho dòng sữa tắm/tắm gội
│   ├── Giới thiệu sản phẩm - Gạc rơ lưỡi Elemis.md
│   ├── Giới thiệu sản phẩm - Dầu massage Oriky.md
│   ├── Giới thiệu sản phẩm - Bọt rửa tay Elemis.md
│   ├── Giới thiệu sản phẩm - Curmilk (cốm lợi sữa).md  ← ⚠️ TPBVSK, ngôn từ tư vấn chặt hơn (bắt buộc khuyến cáo "không phải là thuốc")
│   ├── Giới thiệu sản phẩm - Yaocare Women.md          ← SP cho mẹ, ⚠️ có mâu thuẫn marketing vs công bố (SLES/hương liệu)
│   └── Giới thiệu sản phẩm - Dao'Spa Mama.md           ← SP cho mẹ, là SP hiếm hoi có giá OTC rẻ hơn đối thủ trực tiếp
├── Phân loại sản phẩm/                 ← các file phân loại sản phẩm theo tiêu chí
│   ├── Phân loại theo đối tượng.md         ← "Dành cho bé" / "Dành cho mẹ", theo tag website (collections/all)
│   ├── Phân loại theo nhãn hàng.md         ← Elemis, Oriky, Curmilk, Yaocare, Cuperin, Dao'Spa Mama (theo tên trên web)
│   └── Phân loại theo mục đích sử dụng (cột F).md  ← Mỹ phẩm / TPBVSK / TTBYT, theo file công bố chính thức Thông tin sp DKX.xlsx (SCB/SĐK)
├── So sánh thị trường/                 ← so sánh sản phẩm công ty với đối thủ
│   ├── So sánh thị trường - Nhóm Dành cho bé.md    ← so sánh 8 sản phẩm "dành cho bé" với đối thủ (thành phần, công dụng công bố, giá, độ phổ biến) — có cảnh báo an toàn acid boric
│   └── So sánh thị trường - Nhóm Dành cho mẹ.md    ← so sánh 8 sản phẩm "dành cho mẹ" với đối thủ — có phát hiện marketing mâu thuẫn công bố (Yaocare Women); thành phần Dao'Spa Mama đã bổ sung từ bảng báo giá OTC, còn Yaocare mama vẫn thiếu
├── Báo giá sản phẩm OTC tất cả sp.docx ← file gốc sếp cung cấp, nguồn của "Bảng giá và chương trình OTC.md" bên dưới
├── Bảng giá và chương trình OTC.md     ← giá bán lẻ + chương trình sell-in (mua X tặng Y) kênh OTC từ 01/04/2025, cùng ghi chú claim thật trên bao bì sản phẩm
├── Phân tích công dụng/                ← phân tích công dụng & hoạt chất sản phẩm
│   ├── Phân tích công dụng sản phẩm.md     ← với 13 SP trong bảng giá OTC: mỗi công dụng chính = 1 dòng, nêu rõ hoạt chất (tên thông dụng/hoá học) + dược liệu chứa nó + cơ chế; bảng hoạt chất lặp lại — tài liệu dùng để bán hàng, không có phần cảnh báo/caveat
│   └── Phân tích công dụng sản phẩm.docx   ← bản .docx xuất từ file .md cùng tên
└── Câu hỏi làm rõ.md                   ← điểm chưa chắc chắn cần Nhi xác nhận
Báo cáo tuần/                           ← báo cáo công việc tuần gửi cấp trên, mỗi tuần 1 bộ file
├── Mẫu gốc công ty - Bao cao ket qua tuan DKX (phong ban).docx  ← ⭐ MẪU CHÍNH THỨC sếp cung cấp, bản dùng cho phòng ban; có header logo + MST công ty. Khung O-P-I: I. Tổng kết kết quả tuần (1.1 bảng Mục tiêu/Kế hoạch/Thực hiện/Note → 1.2 bảng Mục tiêu/Yếu tố/Giải pháp/Note → 1.3 số liệu → 1.4 yếu tố quản trị O-P-I → 1.5 nhân sự) → II. Tổng kết (tài sản gia tăng / rủi ro cần tránh) → III. Kiến nghị BGĐ (5 nhóm) → IV. Kế hoạch tuần tới. Cuối file có phần "Lưu ý" hướng dẫn: nhân viên BP Kinh doanh có 3 mục tiêu trọng tâm = (1) khách hàng mới/cũ, (2) giá trị cốt lõi DN, (3) phát triển năng lực bản thân
├── Mẫu DKX (cá nhân) - Báo cáo kết quả công việc tuần ....docx  ← bản cá nhân của Nhi dựng từ mẫu gốc trên (sửa trực tiếp file nên giữ nguyên header/logo/font). Khác bản phòng ban: 1.5 đổi thành "Tự đánh giá bản thân", bỏ phần "Lưu ý" hướng dẫn và phần mục tiêu của Trưởng bộ phận. Đây là bản dùng để gửi sếp
├── Mẫu 1 - Báo cáo công việc tuần ....docx  ← mẫu bảng hành chính 6 cột (STT, tên công việc, thời gian, kết quả làm được, chưa làm được, hướng giải quyết), khổ A4 ngang — tham khảo, không phải mẫu công ty
└── Mẫu 2 - Báo cáo kết quả công việc tuần ....docx  ← mẫu theo mục: mục tiêu tuần → công việc & kết quả (bảng) → vấn đề xin ý kiến → kế hoạch tuần tới, khổ A4 dọc — tham khảo, không phải mẫu công ty
```

Cập nhật mục này khi có thêm file/thư mục con.
