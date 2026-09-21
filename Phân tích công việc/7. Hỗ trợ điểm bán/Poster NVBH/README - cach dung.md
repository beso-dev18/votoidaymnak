# Poster NVBH — cách dựng và in

Poster khổ **A4 dọc, 1 trang**, dùng dán sau quầy hoặc phát cho nhân viên bán hàng tại shop.
Nội dung rút từ `../Bộ sell-out kit - Toàn bộ danh mục OTC (theo mẫu công ty).md`, mỗi sản phẩm một poster.

## File trong thư mục

| File | Là gì |
|---|---|
| `SP1 - Tam goi Elemis.html` | **Bản gốc để sửa.** Sửa nội dung ở đây |
| `SP1 - Tam goi Elemis.pdf` | Bản in. Sinh ra từ file .html, đừng sửa trực tiếp |
| `SP1 - Tam goi Elemis.png` | Ảnh xem nhanh / gửi Zalo cho NVBH |
| `render.js` | Script dựng PDF + PNG từ file .html |

## Dựng lại sau khi sửa nội dung

```bash
node render.js "SP1 - Tam goi Elemis.html" "SP1 - Tam goi Elemis.pdf" "SP1 - Tam goi Elemis.png"
```

Script tự kiểm tra và **báo lỗi nếu có khối chữ bị cắt hoặc tràn khỏi trang** — nếu thấy báo `CẮT NỘI DUNG`
thì giảm biến `--s` trong file HTML (dòng `:root`), thấy trang còn trống nhiều thì tăng lên.
Mức đang dùng cho SP1 là `--s: 1.08`.

## Bố cục poster — giữ nguyên cho các sản phẩm sau

1. **Đầu trang** — tên sản phẩm, một câu sản phẩm là gì, nhãn loại sản phẩm + số công bố
2. **Dải giá** — các quy cách, làm nổi quy cách lợi nhất theo đơn vị sử dụng
3. **Cột trái** — đoạn nói 30 giây (học thuộc) + bảng *Khách nói → Mình đáp*
4. **Cột phải** — cách dùng, 3 lý do chọn, nhận ra khách, khi nào khuyên đi khám, bán kèm
5. **Dải đỏ cuối trang** — TUYỆT ĐỐI KHÔNG NÓI (quy tắc ngôn từ bắt buộc)

## Lưu ý khi in

- In **màu**, khổ **A4**, đặt tỉ lệ **100% / Actual size** (đừng để "Fit to page" vì sẽ thu nhỏ lề).
- Nền màu của các khối đã bật sẵn chế độ in màu nền — nếu bản in ra trắng trơn, bật
  **"Print backgrounds / In hình nền"** trong hộp thoại in.
- Muốn bền hơn khi dán ở quầy thì ép plastic.

## Chưa làm

Mới dựng **SP1 — Tắm gội Elemis** làm mẫu chạy thử. Chín sản phẩm còn lại trong báo giá OTC
dựng theo cùng bố cục sau khi Nhi duyệt mẫu này.
