# 7. Hỗ trợ điểm bán — Câu hỏi làm rõ

File gốc chỉ ghi "Hỗ trợ trade điểm bán (nếu cần)" — gần như toàn bộ nội dung công việc này cần hỏi lại từ đầu.

- "Hỗ trợ trade điểm bán" cụ thể gồm những việc gì (dựng standee/POSM, kiểm tra trưng bày sản phẩm, hỗ trợ chương trình tại điểm bán, kiểm kho tại shop...)?
- Việc này có yêu cầu đi thực địa (đến trực tiếp điểm bán) không, hay chỉ hỗ trợ từ xa (chuẩn bị tài liệu, điều phối)?
- Tần suất phát sinh khoảng bao nhiêu — có tính là việc thường xuyên hay hiếm khi xảy ra?
- Ai là người yêu cầu/giao việc này (NVKD, PGĐ, hay trực tiếp từ shop)? Đầu mối phối hợp là ai?
- Việc này có liên quan đến nhóm "4. Quản lý khách hàng của bộ phận" (chăm sóc shop) không, hay là một mảng độc lập?
- Có cần chuẩn bị kỹ năng/kiến thức gì đặc biệt trước không (ví dụ tiêu chuẩn trưng bày sản phẩm dược, quy định trưng bày tại nhà thuốc)?

---

## Câu hỏi phát sinh khi làm sell-out kit (DKX → shop và shop → NTD)

Xếp theo mức độ chặn việc. Chi tiết bối cảnh từng câu: xem `Mối quan tâm của shop và NTD (nền tảng cho sell-out kit).md`.

### Chặn việc — chưa có thì chưa đi gặp shop được

**Hỏi NVKD / kế toán:**
1. **Shop nhập hàng từ NPP với giá bao nhiêu?** (hoặc: shop được hưởng mức lãi khoảng bao nhiêu phần trăm trên giá bán lẻ?) — Bảng báo giá chỉ có giá bán lẻ. Không có số này thì không trả lời được câu đầu tiên chủ shop nào cũng hỏi: "bán cái này tôi lãi bao nhiêu?".
2. **Chương trình "mua X tặng Y" trong bảng báo giá áp cho lớp nào?** DKX tặng NPP, NPP tặng lại shop, hay cả hai? Shop có thật sự được hưởng không?
3. **Phải nhập bao nhiêu mới được hưởng chương trình** — tính theo từng mã hay cộng dồn cả đơn?
4. **Giá bán lẻ trong báo giá là giá đề xuất hay giá niêm yết bắt buộc?** Shop được bán cao/thấp hơn không?

**Hỏi R&D / QA:**
5. **Nồng độ acid boric trong 2 loại gạc rơ lưỡi Elemis là bao nhiêu, căn cứ nào khẳng định an toàn cho trẻ sơ sinh khi bôi trực tiếp khoang miệng?** — Sản phẩm công bố dùng cho trẻ từ sơ sinh; cảnh báo dược thư khuyến cáo không dùng dạng bôi chứa acid boric cho trẻ dưới 2 tuổi. Nếu một dược sĩ ở nhà thuốc hỏi tại quầy mà mình không có câu trả lời chuẩn thì rất nặng.

### Làm kit yếu hẳn nếu thiếu

**Hỏi NVKD:**
6. **Có chương trình khuyến mãi nào dành cho người tiêu dùng mua lẻ tại quầy không?** (khác với chương trình nhập hàng cho shop) — Thiếu cái này thì người đứng quầy không có gì để chốt ngoài lời tư vấn.
7. **Có thưởng doanh số tháng/quý hoặc chương trình tích luỹ cho shop không?** (danh mục công việc mục 2.2 có nhắc "hợp đồng tích luỹ" nên có thể đã có)
8. **Vì sao giá trên website duockhoaxanh.com cao hơn giá bán lẻ OTC ở hầu hết sản phẩm?** Khi shop hoặc khách tự tra ra hai giá khác nhau thì giải thích thế nào?
9. **Có chính sách bảo vệ giá / phân vùng địa bàn không?** Shop lo bị shop khác gần đó cắt giá.

**Hỏi kế toán (chị Tươi) — lấy từ điều khoản hợp đồng mẫu:**
10. **Chính sách đổi trả hàng cho shop:** bán không hết có trả được không, hàng cận date xử lý thế nào?
11. **Quy trình xử lý khi NTD khiếu nại sản phẩm** — ai tiếp nhận, shop báo về đâu?

**Hỏi kho (chị Dung / chị Phương):**
12. **Cơ số nhập tối thiểu** cho shop lần đầu là bao nhiêu?
13. **Thời gian giao hàng trung bình** sau khi shop đặt?
14. **Hạn sử dụng còn lại thường là bao lâu khi giao hàng?** (HSD gốc 24-36 tháng, nhưng shop hỏi là hỏi phần còn lại)

**Hỏi MKT (Kiều, anh Nam):**
15. **Hiện công ty đã có sẵn những vật phẩm POSM nào?** (standee, kệ, poster, tem, tester) — Không biết có gì thì không hứa được với shop.
16. **Có kế hoạch truyền thông/quảng cáo cho các dòng này không?** Shop hỏi "khách có biết hàng này không" thì cần câu trả lời.

### Cần báo lại để công ty sửa tài liệu

17. **Bảng báo giá ghi sai thành phần Curmilk cốm:** "Lá chùm ngây 10g, Thông thảo 5g" cho một gói 5g — vô lý về mặt số học. Bản đăng ký 2007/2021/ĐKSP ghi cao khô chùm ngây 65mg, cao đặc thông thảo 730mg. Dược sĩ ở nhà thuốc sẽ nhận ra ngay.
18. **Bảng báo giá ghi công dụng vượt công bố:** Dao'Spa Mama ghi "tăng cường sinh lực" (không có trong công bố); Yaocare Women ghi "hỗ trợ điều trị các bệnh phụ khoa" và gạc/kem ghi "hỗ trợ điều trị" — chữ "điều trị" không được dùng cho mỹ phẩm.
19. **Bảng báo giá liệt kê Màng tang trong thành phần Dao'Spa Mama**, nhưng thành phần này không có trong công bố 326/25/CBMP-PT — cần xác nhận.
20. **Ảnh sản phẩm hộp 200ml trong bảng báo giá bị thiếu** (ô ảnh chỉ có logo công ty).

### Xác định phạm vi

21. **7 mã có trong file công bố nhưng không có trong bảng báo giá OTC** (Yaocare Baby, Yaocare mama, Gel vệ sinh Oriky, Thảo dược xông vùng kín Oriky, Curmilk viên nang, Cuperin DKG, tắm gội quy cách hộp 25 gói x 10ml) — những mã này **không bán ở kênh OTC**, hay chỉ là thiếu trong bảng báo giá? Câu trả lời quyết định có phải làm thêm sell-out kit cho chúng không.
22. **Lượng dùng mỗi lần của từng sản phẩm** (lấy từ hướng dẫn trên bao bì) — cần để quy giá về "tiền mỗi ngày", là cách xử lý câu "đắt quá" hiệu quả nhất tại quầy.
