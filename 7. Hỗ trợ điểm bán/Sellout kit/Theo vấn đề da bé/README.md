# Sell-out kit theo vấn đề da bé

Khác với bộ kit xếp **theo sản phẩm**, bộ này xếp **theo vấn đề của bé** — đúng thứ tự thực tế ở quầy:
khách không hỏi “cho tôi xem kem bôi da”, khách nói “bé nhà em bị hăm”.

**9 vấn đề**, mỗi vấn đề là một mục lớn, xử lý theo **3 bước**: làm sạch → xử lý vấn đề → nuôi dưỡng & bảo vệ.

## File chính

| File | Là gì |
|---|---|
| **`Sell-out kit theo vấn đề da bé.docx`** | ⭐ Bản Word, khổ A4 ngang. Mỗi vấn đề một mục lớn, kèm sơ đồ nhánh dạng bảng gộp ô, và cuối mỗi mục là bảng so sánh với đối thủ (thành phần, hoạt chất trùng/khác, giá quy đổi) |
| `So do - 0 - Bang tra nhanh.pdf` | Một trang A4 ngang: 9 vấn đề × 7 sản phẩm, ô nào có số thì sản phẩm đó đảm nhận bước đó. Dán quầy |
| `So do - 1..9 - <tên>.pdf` | Sơ đồ nhánh riêng từng vấn đề, in lẻ từng tờ khi cần |

## Nguồn dữ liệu — không có gì tự nghĩ ra

| Nội dung | Lấy từ |
|---|---|
| Giá, quy cách | `../../../Danh mục sản phẩm/Báo giá sản phẩm OTC tất cả sp.docx` (01/04/2025) |
| Thành phần, hoạt chất, cơ chế tác động | `../../../Danh mục sản phẩm/Phân tích công dụng/Phân tích công dụng sản phẩm.docx` |
| Tỷ lệ pha, cách dùng | Bộ slide giới thiệu Elemis và bộ sell-out kit Elemis do công ty cung cấp (file gốc không nằm trong repo) |
| So sánh với đối thủ (thành phần, hoạt chất trùng/khác, giá) | `../../../Danh mục sản phẩm/So sánh thị trường/So sánh thị trường - Nhóm Dành cho bé.md` (đối chiếu 15/09/2026) |

Không thêm bất kỳ thành phần, cơ chế, công dụng hay dữ liệu đối thủ nào ngoài các tài liệu trên.

## Phần "So sánh với đối thủ" trong bản Word

Cuối mỗi vấn đề (sau bảng "Bộ sản phẩm tư vấn / Cách dùng / Khuyên đi khám") là bảng so sánh với đối thủ,
lấy đúng những sản phẩm nằm trong "Bộ sản phẩm tư vấn" (`bo` + `boThem`) của vấn đề đó — mỗi sản phẩm
đối chiếu với đối thủ đã tra trong `So sánh thị trường - Nhóm Dành cho bé.md`, gồm: thành phần chính đối
thủ, hoạt chất trùng/khác với DKX, hoạt chất chỉ DKX có, cảnh báo (marketing không khớp công bố, hoặc
an toàn — ví dụ acid boric trong gạc rơ lưỡi), và giá quy đổi.

Giá đối thủ trong phần này là **giá web** (nguồn của file so sánh), khác với giá OTC 01/04/2025 dùng ở
"Bộ sản phẩm tư vấn" phía trên — đã ghi chú rõ trong bản Word, chưa chốt dùng bảng giá nào cho khách xem.

Dữ liệu nằm trong `DOITHU` ở **`dulieu.js`** — sửa ở đó rồi chạy lại `node taoword.js`. Chỉ 7 sản phẩm
dùng cho bé mới có `DOITHU`; nếu thêm vấn đề mới dùng sản phẩm chưa có trong `DOITHU`, phải bổ sung đối
thủ từ file so sánh nguồn trước, không tự suy đoán.

## Sơ đồ nhánh gồm 4 lớp

```
VẤN ĐỀ DA  →  BƯỚC XỬ LÝ  →  SẢN PHẨM  →  THÀNH PHẦN + CƠ CHẾ TÁC ĐỘNG
```

## Gộp vấn đề — vì sao 9 chứ không phải 13

Bản đầu có 13 vấn đề. Đối chiếu lại thì **bộ sản phẩm trùng nhau 67–100% nhưng hoạt chất làm việc chỉ
trùng 8–40%** — tức là cùng chai tắm gội, cùng tuýp kem, nhưng mỗi vấn đề do hoạt chất khác nhau xử lý.
Nên chỉ gộp khi thoả cả ba: cùng sản phẩm, **cùng hoạt chất làm việc**, và mẹ mô tả gần như một chuyện.

| Mục gộp | Từ | Căn cứ |
|---|---|---|
| 1. Hăm da (vùng tã và nếp gấp) | Hăm tã + Hăm nếp gấp | Trùng hoạt chất 40%, cao nhất trong các cặp khác tên. Cùng cơ chế lõi: kẽm oxyd chắn ẩm và giảm ma sát |
| 2. Rôm sảy, mẩn ngứa, mụn nhọt | 3 mục | Công bố của Elemis Gold gộp sẵn ba cái này trong một câu; file cơ chế nói momordicin có mặt để "nốt rôm không nhiễm khuẩn thành mụn nhọt" |
| 4. Da khô, nứt nẻ, đỏ rát do gió nắng | Da khô + Da đỏ rát do gió nắng | Trùng sản phẩm và bước 100%. File gốc viết liền một cụm "da khô, nứt nẻ, bong tróc do gió/nắng" |

**Hai cặp cố ý không gộp** dù số liệu trông giống: *Chàm sữa ⟷ Vết thâm sẹo* (trùng sản phẩm 100%
nhưng chàm sữa có cách pha riêng 2ml:2L và ngưỡng đi khám riêng) và *Mẩn ngứa ⟷ Da khô*
(trùng hoạt chất 50%, cao nhất bảng, nhưng mẹ nói hai chuyện khác hẳn nhau).

## Cách dựng lại sau khi sửa

Nội dung nằm trong **`dulieu.js`** — sửa ở đây, mọi file khác sinh lại theo.

```bash
node taosodo.js                                         # sinh 14 file HTML sơ đồ
node taoword.js "Sell-out kit theo vấn đề da bé.docx"   # sinh bản Word
node canhchinh.js "So do - "*.html                      # tự dò cỡ chữ lớn nhất không tràn
node render.js "So do - 1 - ham-da.html" "So do - 1 - ham-da.pdf"  # HTML → PDF
```

`canhchinh.js` chia đôi khoảng cỡ chữ 9 lần để tìm mức lớn nhất mà trang không tràn, rồi ghi thẳng
vào file HTML. **Sau khi chạy, đặt lại tất cả trang sơ đồ về cùng một cỡ (mức nhỏ nhất)** — để in ra
một bộ thì cỡ chữ không nhảy giữa các tờ. Hiện cả 9 trang dùng chung `--s: 0.84`, do mục 2 gánh
nhiều nội dung nhất. Muốn chữ to hơn thì phải tách mục 2 ra hai tờ.

`render.js`, `probe.js`, `kiemtra.js` nằm ở `../../Poster NVBH/`. Cần cài `playwright` và `docx` một lần.
Script tự báo lỗi nếu có chữ bị cắt hoặc tràn khỏi khổ giấy.

## Thêm một vấn đề mới

Mở `dulieu.js`, thêm một khối vào mảng `VANDE` theo mẫu có sẵn:
`id`, `ten`, `phu`, `cachDung`, `buoc` (3 bước, mỗi bước có sản phẩm và các cặp thành phần – cơ chế),
`bo` (bộ sản phẩm chính), `boThem`, `kham`, và `luuY` nếu có. Rồi chạy lại 2 lệnh trên.

Nếu vấn đề mới dùng sản phẩm đã có sẵn trong `DOITHU` thì phần "So sánh với đối thủ" tự sinh theo,
không cần sửa gì thêm.

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
