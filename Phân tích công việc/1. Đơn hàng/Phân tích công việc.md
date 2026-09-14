# 1. Đơn hàng — Phân tích công việc

Nguồn: cột "Các bước thực hiện" trong `List_CongViec_Admin.xlsx`, nhóm việc "Đơn hàng" (hàng ngày).

## Phần mềm mới cần làm quen: AMIS

Việc 1.1 yêu cầu "lên đơn hàng trong phần mềm AMIS" — đây là phần mềm duy nhất trong toàn bộ danh mục công việc, và Nhi chưa dùng qua. Vài điều nên biết trước khi bắt đầu:

- **AMIS là gì:** bộ phần mềm quản trị doanh nghiệp trên nền tảng đám mây (cloud) do **MISA JSC** phát triển — công ty phần mềm kế toán lớn và phổ biến nhất tại Việt Nam cho khối doanh nghiệp vừa và nhỏ. AMIS không phải một phần mềm đơn lẻ mà là một **bộ nhiều phân hệ** (AMIS Kế toán, AMIS CRM, AMIS Bán hàng, AMIS Nhân sự...) — công ty có thể chỉ cấp quyền dùng 1–2 phân hệ liên quan đến đơn hàng/kế toán cho vị trí Sales Admin.
- **Vì sao không đáng sợ như tưởng:** về bản chất, "lên đơn hàng" là nhập dữ liệu vào các trường có sẵn (khách hàng, sản phẩm, số lượng, giá, chiết khấu...) qua giao diện web — logic giống hệt việc nhập một dòng dữ liệu vào bảng Excel có Data Validation, chỉ khác là giao diện có sẵn dropdown chọn khách/sản phẩm thay vì gõ tay. Kỹ năng "nhập liệu chính xác, đối chiếu số liệu" mà Nhi đã có 4 năm kinh nghiệm là nền tảng trực tiếp cho việc này.
- **Việc cần làm trước khi bắt tay vào:** xin tài khoản đăng nhập, xin được xem hướng dẫn/video đào tạo nội bộ (nếu có), và **làm thử trên 1 đơn hàng mẫu có người kèm** trước khi tự lên đơn thật — vì sai sót trên đơn hàng (giá, số lượng) có thể kéo theo sai hóa đơn, khó sửa.

## Chi tiết các bước

### 1.1 Lên đơn hàng khi NVKD cần hỗ trợ
- Chỉ thực hiện khi có yêu cầu cụ thể từ NVKD (không phải Nhi tự quyết định lên đơn).
- Đầu mối: NVKD (người gửi thông tin đơn), Kế toán (liên quan đến giá/công nợ khách).
- ⚠️ **Chú ý:** cần xác nhận rõ các trường bắt buộc (mã khách hàng, mã sản phẩm, số lượng, đơn giá, chiết khấu nếu có) — nhập sai một trường có thể làm sai lệch cả hóa đơn và báo cáo doanh số sau này.

### 1.2 Xác nhận hóa đơn — 5 bước tuần tự
1. Gửi hóa đơn nháp cho đơn hàng mới lên (làm việc với NVKD hoặc khách hàng).
2. Yêu cầu khách hàng kiểm tra và xác nhận hóa đơn đã đúng.
3. Báo kế toán (chị Giang hoặc chị Tươi) ký số hóa đơn, nhận lại file đã ký.
4. Gửi lại file hóa đơn đã ký số cho đối tác — ghi chú rõ hóa đơn này thuộc đơn hàng nào.
5. Cập nhật tình hình thanh toán của khách vào nhóm chung cho kế toán.

⚠️ **Chú ý quan trọng nhất trong cả nhóm việc:**
- Đây là quy trình **có thứ tự bắt buộc** — không được báo kế toán ký số (bước 3) trước khi khách xác nhận hóa đơn đúng (bước 2). Hóa đơn điện tử đã ký số/phát hành rất khó sửa hoặc hủy theo quy định thuế, nên **bước 2 là bước chặn lỗi quan trọng nhất** trong cả quy trình — sai ở đây sẽ gây rắc rối ngược dòng.
- "Ký số" = ký bằng **chữ ký số điện tử** (chứng thư số của công ty), không phải ký tay/đóng dấu — chỉ kế toán có thẩm quyền mới thực hiện được, Nhi không tự ký.
- Bước 4 phải note rõ đơn hàng — nếu một khách có nhiều đơn cùng lúc, gửi nhầm file dễ gây nhầm lẫn công nợ.

### 1.3 Theo dõi tình trạng đơn hàng
1. Làm việc với kho (chị Dung hoặc chị Phương) để biết thời gian dự kiến gửi hàng — chỉ sau khi khách **đã thanh toán**.
2. Cập nhật tình hình đi đơn, thời gian dự kiến giao hàng cho đối tác (qua NVKD hoặc trực tiếp khách).

⚠️ **Chú ý:** điều kiện "khách đã thanh toán" là mốc bắt buộc trước khi hỏi kho về lịch gửi hàng — cần luôn kiểm tra lại trạng thái thanh toán (từ bước 1.2.5) trước khi thúc kho.

### 1.4 Xử lý phát sinh — đổi trả, hàng sai/nhầm
- Khi khách cần đổi hàng: phải **đối chiếu với điều khoản hợp đồng đang hợp tác** trước — không phải yêu cầu đổi nào cũng được chấp nhận, cần biết hợp đồng cho phép đổi/trả trong điều kiện nào (xem thêm folder "2. Giấy tờ, chứng từ").
- Báo lại tình trạng hàng hóa, số lượng cụ thể cho bộ phận kho vận để họ xác nhận và sắp lịch trả hàng.

⚠️ **Chú ý:** đây là việc phát sinh, không có form cố định — nên ghi lại (email/nhóm chat) mọi trao đổi về tình trạng hàng lỗi/nhầm để có bằng chứng đối chiếu nếu sau này có tranh chấp với khách.
