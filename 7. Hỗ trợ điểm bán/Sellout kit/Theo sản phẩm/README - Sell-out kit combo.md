# Sell-out kit theo sản phẩm → combo (bản dựng lại 28/09/2026)

**Vì sao dựng lại:** bản trước xếp *theo vấn đề da bé*. Sếp yêu cầu xếp **theo sản phẩm**, vì khách hàng (shop) bán theo sản phẩm:
khách cầm một sản phẩm → NVBH hỏi thêm vấn đề của bé → gợi ý **combo 2–3 sản phẩm** để xử lý đúng vấn đề đó.
Bản cũ vẫn giữ để tham khảo trong `../_Lưu trữ - bản theo vấn đề da bé (sếp chưa duyệt)/`.

## File

| File | Là gì |
|---|---|
| **`Sell-out kit theo sản phẩm.docx`** | ⭐ Bản Word A4 ngang. Trang đầu: **bảng tra nhanh** (khách hỏi mua SP nào → hỏi gì → combo nào → giá cả bộ). Sau đó mỗi sản phẩm một mục: A. Thành phần → giúp gì cho bé · B. Điểm mạnh khi khách so sánh + cách dùng · C. **Từ sản phẩm → combo theo vấn đề da** (vấn đề + câu hỏi mở · combo & giá cả bộ · việc của từng SP trong combo · câu nói chốt combo + cách dùng · khi nào khuyên đi khám) |
| `../../Poster NVBH/SP - 0 - Bang tra nhanh combo.pdf` | 1 trang A4 ngang, dán quầy: 7 sản phẩm × các combo, có ảnh SP và giá cả bộ |
| `../../Poster NVBH/SP - 1..7 - <tên SP>.pdf` | Poster NVBH từng sản phẩm, A4 ngang gấp 3 (xem README trong thư mục Poster NVBH) |
| `dulieu.js` | **Nguồn duy nhất** của cả bản Word lẫn poster. Sửa ở đây rồi chạy lại script |
| `taoword.js` | Sinh bản Word từ `dulieu.js` |

## 7 sản phẩm, 9 combo

| Khách hỏi mua | Combo (vấn đề → sản phẩm) |
|---|---|
| Tắm gội Elemis | Hăm da · Rôm sảy (+ Kem) · Chàm sữa (+ Kem + Oriky) · Da khô gió nắng (+ Oriky) · Cứt trâu (+ Oriky) |
| Kem bôi Elemis | Hăm da · Rôm sảy (+ Tắm gội) · Mẩn ngứa (+ Gold) · Chàm sữa (+ Tắm gội + Oriky) · Muỗi đốt (+ Xịt) · Thâm sẹo (+ Oriky) · Tay khô (+ Bọt rửa tay) |
| Dầu Oriky | Chàm sữa · Da khô gió nắng · Cứt trâu · Thâm sẹo |
| Elemis Gold | Mẩn ngứa, da nhạy cảm, bé từ 6 tháng (+ Kem) |
| Xịt muỗi | Muỗi đốt (+ Kem) |
| Bọt rửa tay | Tay khô do rửa nhiều (+ Kem) |
| Gạc rơ lưỡi | Tưa lưỡi — **bán riêng**, tài liệu công ty chưa có combo |

Combo lấy đúng “bộ sản phẩm cần thiết” của từng vấn đề trong bản cũ (đã duyệt câu chữ), không thêm cặp mới.
Riêng **Mẩn ngứa (Gold + Kem)** tách ra thành combo riêng vì bản cũ ghi Gold là lựa chọn cho bé mẩn ngứa nhiều, từ 6 tháng.
**Giá cả bộ** = cộng giá OTC 01/04/2025 của quy cách nhỏ nhất (tắm gội 200ml, xịt muỗi 50ml).

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

1. **Cách dùng Elemis Gold** và **Bọt rửa tay** chưa có trên tài liệu gốc — kit đang ghi “⏳ chờ xác nhận”.
2. **Gạc rơ lưỡi** chưa có combo — hỏi sếp có muốn ghép với sản phẩm nào không.
3. Hai tài liệu công ty hướng dẫn khác nhau cho ca rôm sảy (pha đậm 1ml + 10ml thấm 10–20 phút / xoa trực tiếp 1–2 phút).
4. Dùng giá báo giá OTC hay giá web; và có giá combo / khuyến mãi riêng cho NTD không (hiện chỉ cộng giá lẻ).
5. Acid boric trong gạc rơ lưỡi — chờ R&D xác nhận nồng độ.
6. Ba sản phẩm cho mẹ (Curmilk, Yaocare Women, Dao'Spa Mama) chưa đưa vào kit combo vì không thuộc nhóm xử lý vấn đề da bé.
