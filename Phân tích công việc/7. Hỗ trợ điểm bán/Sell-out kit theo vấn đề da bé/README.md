# Sell-out kit theo vấn đề da bé

Khác với bộ kit xếp **theo sản phẩm**, bộ này xếp **theo vấn đề của bé** — đúng thứ tự thực tế ở quầy:
khách không hỏi “cho tôi xem kem bôi da”, khách nói “bé nhà em bị hăm”.

**13 vấn đề**, mỗi vấn đề là một mục lớn, xử lý theo **3 bước**: làm sạch → xử lý vấn đề → nuôi dưỡng & bảo vệ.

## File chính

| File | Là gì |
|---|---|
| **`Sell-out kit theo vấn đề da bé.docx`** | ⭐ Bản Word, khổ A4 ngang. Mỗi vấn đề một mục lớn, kèm sơ đồ nhánh dạng bảng gộp ô |
| `So do - 0 - Bang tra nhanh.pdf` | Một trang A4 ngang: 13 vấn đề × 7 sản phẩm, ô nào có số thì sản phẩm đó đảm nhận bước đó. Dán quầy |
| `So do - 1..13 - <tên>.pdf` | Sơ đồ nhánh riêng từng vấn đề, in lẻ từng tờ khi cần |

## Nguồn dữ liệu — không có gì tự nghĩ ra

| Nội dung | Lấy từ |
|---|---|
| Giá, quy cách | `../../../Tài liệu gốc công ty/Báo giá sản phẩm OTC tất cả sp.docx` (01/04/2025) |
| Thành phần, hoạt chất, cơ chế tác động | `../../../Tài liệu gốc công ty/Phân tích công dụng sản phẩm_Final.docx` |
| Tỷ lệ pha, cách dùng | Bộ slide `Gioi thieu san pham Tam be Elemis.pptx` và kit gốc của công ty |

Không thêm bất kỳ thành phần, cơ chế hay công dụng nào ngoài các tài liệu trên.

## Sơ đồ nhánh gồm 4 lớp

```
VẤN ĐỀ DA  →  BƯỚC XỬ LÝ  →  SẢN PHẨM  →  THÀNH PHẦN + CƠ CHẾ TÁC ĐỘNG
```

## Cách dựng lại sau khi sửa

Nội dung nằm trong **`dulieu.js`** — sửa ở đây, mọi file khác sinh lại theo.

```bash
node taosodo.js                                         # sinh 14 file HTML sơ đồ
node taoword.js "Sell-out kit theo vấn đề da bé.docx"   # sinh bản Word
node render.js "So do - 1 - ham-ta.html" "So do - 1 - ham-ta.pdf"   # HTML → PDF
```

`render.js`, `probe.js`, `kiemtra.js` nằm ở `../Poster NVBH/`. Cần cài `playwright` và `docx` một lần.
Script tự báo lỗi nếu có chữ bị cắt hoặc tràn khỏi khổ giấy.

## Thêm một vấn đề mới

Mở `dulieu.js`, thêm một khối vào mảng `VANDE` theo mẫu có sẵn:
`id`, `ten`, `phu`, `cachDung`, `buoc` (3 bước, mỗi bước có sản phẩm và các cặp thành phần – cơ chế),
`bo` (bộ sản phẩm chính), `boThem`, `kham`, và `luuY` nếu có. Rồi chạy lại 2 lệnh trên.

## Phạm vi

Kit này chỉ gồm **7 sản phẩm dùng cho bé**. Ba sản phẩm còn lại trong báo giá OTC dành cho mẹ
(Curmilk, Yaocare Women, Dao'Spa Mama) không xếp theo vấn đề da bé được — đã ghi chú ở cuối bản Word.

Riêng mục **13. Tưa lưỡi, nấm lưỡi** không phải vấn đề ngoài da, nhưng mẹ rất hay hỏi cùng lúc
với các vấn đề da nên vẫn đưa vào, có đánh dấu rõ.

## ⚠️ Còn chờ công ty xác nhận

Bốn điểm, đã ghi ở mục cuối bản Word: cách dùng của Elemis Gold / Dầu massage / Bọt rửa tay chưa có
trên tài liệu gốc; chưa chốt dùng bảng giá OTC hay giá web; hai tài liệu công ty hướng dẫn khác nhau
cho ca rôm sảy; và các mốc “2–4 ngày hết hăm”, “7–12 ngày hết chàm sữa” trong bộ slide chưa được
đưa vào vì mâu thuẫn với quy tắc không hứa thời gian.
