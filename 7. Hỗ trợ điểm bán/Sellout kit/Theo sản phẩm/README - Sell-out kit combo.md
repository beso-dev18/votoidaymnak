# Sell-out kit theo sản phẩm → combo (bản dựng lại 28/09/2026)

**Vì sao dựng lại:** bản trước xếp *theo vấn đề da bé*. Sếp yêu cầu xếp **theo sản phẩm**, vì khách hàng (shop) bán theo sản phẩm:
khách cầm một sản phẩm → NVBH hỏi thêm vấn đề của bé → gợi ý **combo 2–3 sản phẩm** để xử lý đúng vấn đề đó.
Bản cũ vẫn giữ để tham khảo trong `../_Lưu trữ - bản theo vấn đề da bé (sếp chưa duyệt)/`.

## Cấu trúc hiện tại (sửa lần 3, 28/09/2026 — theo hướng Nhi chốt)

**Sản phẩm → 1 combo đầy đủ → từng SP trong combo → các vấn đề SP đó giải quyết → 1 câu then chốt vì sao giải quyết được.**

Mỗi sản phẩm một mục, theo thứ tự Nhi chốt:
- **A. Thành phần → hoạt động thế nào → để làm gì cho bé/mẹ** — bảng 3 cột, cơ chế nói dễ hiểu, có ví dụ đời thường (giải thích riêng vì sao kem vừa “chắn ẩm” vừa “dưỡng ẩm”).
- **B. Điểm nổi bật khi khách so sánh** — điểm nổi bật, bảng so sánh đối thủ (✔ = mình hơn), câu chốt, lưu ý.
- **C. Combo** — giá cả bộ ghi rõ từng món; mỗi SP trong combo một bảng: *vấn đề giải quyết* | *vì sao giải quyết được* (1 câu then chốt, lời nói thường để NV đọc cho khách), kèm cách dùng; cuối combo có câu chốt và khi nào khuyên đi khám.
  Ví dụ xịt muỗi: “Muỗi tìm người bằng cách ngửi mùi cơ thể và hơi thở. Tinh dầu sả, bạch đàn chanh có chất citronellal, citral bay hơi, tạo một lớp mùi quanh da bé. Lớp mùi này đánh lạc khứu giác của muỗi, muỗi mất phương hướng, không bay lại gần.”

## File

| File | Là gì |
|---|---|
| **`Sell-out kit theo sản phẩm.docx`** | ⭐ Bản Word A4 ngang: bảng tra nhanh (10 SP → combo → vấn đề) + mỗi SP một mục A · B · C |
| `dulieu.js` | **Nguồn duy nhất.** `TP` = thư viện thành phần (cơ chế); `SP` = thông tin, thành phần, điểm nổi bật; `VD` = vấn đề mỗi SP giải quyết + câu then chốt; `COMBO` = combo đầy đủ theo từng SP |
| `taoword.js` | Sinh bản Word từ `dulieu.js` |
| `../../Poster NVBH/SP - …` | Poster theo bản đầu — ⚠️ **chưa cập nhật**; `taoposter.js` cần viết lại cho cấu trúc dữ liệu mới |

## Combo đầy đủ theo từng sản phẩm

| Khách hỏi mua | Combo | Giá cả bộ |
|---|---|---|
| Tắm gội Elemis | Tắm gội + Kem bôi + Dầu Oriky | 400.000đ |
| Kem bôi Elemis | Kem bôi + Tắm gội + Dầu Oriky (kem còn đi cùng Gold, Xịt muỗi, Bọt rửa tay — xem combo các SP đó) | 400.000đ |
| Dầu Oriky | Dầu Oriky + Tắm gội + Kem bôi | 400.000đ |
| Elemis Gold | Gold + Kem bôi (bé từ 6 tháng) | 335.000đ |
| Xịt muỗi Elemis | Xịt muỗi + Kem bôi | 205.000đ |
| Bọt rửa tay Elemis | Bọt rửa tay + Kem bôi | 360.000đ |
| Gạc rơ lưỡi, Curmilk, Yaocare Women, Dao’Spa Mama | Sell-out 1 mình | 115.000 / 235.000 / 135.000 / 385.000đ |

Trong combo của Gold, Xịt muỗi, Bọt rửa tay, phần Kem bôi chỉ hiện các vấn đề liên quan (VD combo xịt muỗi: nốt muỗi đốt, thâm) — chỉnh ở `COMBO[..].chon`.
Kem bôi không gom cả 6 sản phẩm vào 1 combo vì quá nhiều món; nếu sếp muốn khác thì sửa `COMBO.kem.sp`.

## Nguồn dữ liệu — không có gì tự nghĩ ra

Giá: `Danh mục sản phẩm/Báo giá sản phẩm OTC tất cả sp.docx`. Thành phần, cơ chế: `Danh mục sản phẩm/Phân tích công dụng/`.
So sánh đối thủ: `Danh mục sản phẩm/So sánh thị trường/So sánh thị trường - Nhóm Dành cho bé.md`.
Elemis Gold, bọt rửa tay: `Bộ sell-out kit theo sản phẩm.md`. Ảnh sản phẩm Gold, xịt muỗi, bọt rửa tay, gạc rơ lưỡi: web duockhoaxanh.com (cắt lấy phần sản phẩm).

## Dựng lại sau khi sửa

```bash
# trong thư mục này
node taoword.js "Sell-out kit theo sản phẩm.docx"          # cần gói npm docx@9
# trong ../../Poster NVBH
node taoposter.js                                          # sinh 8 file HTML
node canhco.js "SP - "*.html                               # tự dò cỡ chữ, tự chia tờ 2 khi cần
node render.js "SP - 2 - Kem boi Elemis.html" "SP - 2 - Kem boi Elemis.pdf" "SP - 2 - Kem boi Elemis.png"
```

Thêm combo mới: thêm một khối vào `COMBO` trong `dulieu.js` (vande, dauHieu, hoi, sp, them, vai cho từng SP, noi, cachDung, kham, luuY nếu có),
rồi thêm id combo vào mảng `combo` của các sản phẩm nằm trong combo đó.

## ⚠️ Còn chờ công ty xác nhận

1. **Cách dùng** chưa có trên tài liệu gốc: Elemis Gold, Bọt rửa tay, Yaocare Women; **liều dùng Curmilk**; tỷ lệ pha / thời gian / mốc sau sinh của Dao’Spa Mama.
2. **Thành phần Curmilk:** báo giá và hồ sơ công bố ghi khác nhau (chè vằng, bồ công anh, piperin) — điểm nổi bật “curcumin + piperin” phụ thuộc vào việc này.
3. Hai tài liệu công ty hướng dẫn khác nhau cho ca rôm sảy (pha đậm 1ml + 10ml thấm 10–20 phút / xoa trực tiếp 1–2 phút).
4. Acid boric trong gạc rơ lưỡi — chờ R&D xác nhận nồng độ.
