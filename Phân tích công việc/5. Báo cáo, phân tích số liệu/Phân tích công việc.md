# 5. Báo cáo, phân tích số liệu — Phân tích công việc

Nguồn: cột "Các bước thực hiện" trong `List_CongViec_Admin.xlsx`, nhóm việc "Báo cáo, phân tích số liệu" — nhóm **duy nhất** được đánh dấu cả 3 cờ: **hàng ngày + phát sinh khi cần + ưu tiên thành thạo tuần đầu tiên**.

Đây là nhóm việc **khớp trực tiếp nhất với thế mạnh sẵn có của Nhi** (4 năm kinh nghiệm tổng hợp, xử lý số liệu, lập báo cáo bằng Excel nâng cao) — không đòi hỏi phần mềm mới ngoài Excel, nhưng vì được đánh dấu ưu tiên tuần đầu nên cần nắm vững sớm nhất trong 7 nhóm việc.

## Chi tiết các bước

### 5.1 Tổng hợp doanh số theo ngày, tuần, tháng
- Việc chính: **nhắc sale (NVKD) cập nhật doanh số** ngày/tuần/tháng.
- Đầu mối: NVKD.

⚠️ **Chú ý:** đây là báo cáo **phụ thuộc dữ liệu đầu vào từ người khác** — chất lượng báo cáo phụ thuộc vào việc NVKD cập nhật đúng hạn và chính xác. Vai trò của Nhi không chỉ là "tổng hợp" mà còn là **chủ động nhắc/đôn đốc** — cần có lịch nhắc cố định (ví dụ cuối mỗi ngày/mỗi tuần) thay vì đợi bị động.

### 5.2 Mức độ đạt KPI cá nhân, bộ phận theo tuần
- Báo cáo tiến độ hàng tuần.
- Đầu mối: NVKD, PGĐ (Phó Giám đốc).

⚠️ **Chú ý:** báo cáo này gửi lên cấp quản lý (PGĐ) — khác với báo cáo nội bộ đơn thuần, cần đảm bảo số liệu **nhất quán với báo cáo doanh số ở mục 5.1** (cùng một nguồn dữ liệu, tránh trường hợp hai báo cáo lệch số vì chốt số liệu ở hai thời điểm khác nhau).

### 5.3 Phân tích dữ liệu đổ về của bộ phận
- Đầu mối: PGĐ.
- Không có mô tả chi tiết các bước — đây là việc có tính chất phân tích (không chỉ tổng hợp thuần túy).

⚠️ **Chú ý:** "phân tích" khác với "tổng hợp" — tổng hợp là gom số liệu lại, còn phân tích là rút ra nhận định (xu hướng tăng/giảm, kênh nào đang yếu, khách nào có dấu hiệu bất thường...). Đây có thể là phần thử thách nhất với người mới vì chưa quen bối cảnh kinh doanh — nên hỏi PGĐ về **định dạng/kỳ vọng cụ thể** của "phân tích" trước khi tự làm, tránh làm sai hướng.

## Áp dụng kinh nghiệm Excel sẵn có

Các kỹ thuật đã dùng tốt trong bài test tuyển dụng (xem mục "PHỎNG VẤN THẬT — Dược Khoa Xanh" trong `../../SalesAdminInterview/CLAUDE.md`) nên tiếp tục áp dụng vào công việc thật:
- Dùng **SUMIFS/SUMPRODUCT** thay vì dải ô cứng để số liệu tự cập nhật khi có dữ liệu mới, không cần bấm Refresh thủ công.
- Dùng **Data Validation** (danh sách chọn) để hạn chế nhập liệu sai khi NVKD tự cập nhật doanh số.
- Không xóa dữ liệu gốc khi làm sạch — chỉ đánh dấu và ghi chú, giữ nguyên vẹn dữ liệu kế toán/nguồn.
