# Poster gấp 3 — khổ A4 ngang, 2 mặt

Tờ rơi gấp 3 (tri-fold), khổ **A4 ngang** (297×210mm), mỗi mặt chia làm 3 cột để **gấp lại thành 3**
— bỏ túi hoặc để tại quầy. Hai mặt lấy nội dung từ hai file khác nhau:

| Mặt | Nguồn nội dung | Dùng cho |
|---|---|---|
| **Mặt A** — `Mat A - Khung xu ly tu choi mua hang` | `../Khung xử lý từ chối mua hàng - khối vấn đề (toàn bộ SP OTC).md` | NVKD làm việc với NPP/Shop/CTV, và NVBH tại điểm bán — 8 khối vấn đề từ chối mua hàng, dùng cho **toàn bộ SP OTC** |
| **Mặt B** — `Mat B - Van de da be` | `../Theo vấn đề da bé/Sell-out kit theo vấn đề da bé.docx` (+ `dulieu.js` cùng thư mục) | NVBH tại điểm bán — tra cứu nhanh 9 vấn đề da bé, có 5 vấn đề minh hoạ chi tiết đủ 3 bước |

Cả hai mặt là **bản cô đọng** để vừa 3 cột A4, không phải bản đầy đủ — giữ đúng dữ kiện, thành phần,
cơ chế, cách dùng, dấu hiệu đi khám như file gốc, chỉ rút gọn câu chữ. Muốn xem đầy đủ (câu mở mẫu
từng khối, chi tiết cả 9 vấn đề da bé, script đối đáp từng câu hỏi...) thì mở đúng file nguồn ở bảng trên.

## Cách in và gấp

- In **màu**, khổ **A4**, hướng **ngang (Landscape)**, tỉ lệ **100%/Actual size** (đừng "Fit to page").
- Bật **"Print backgrounds / In hình nền"** nếu bản in ra trắng trơn không có màu nền.
- In **2 mặt trên cùng một tờ giấy** (in mặt A, lật giấy đúng chiều, in mặt B) — hoặc in rời rồi dán lưng
  hai tờ nếu máy in không hỗ trợ in 2 mặt tự động.
- Gấp theo 2 đường kẻ chấm chấm dọc tờ (đều nhau, chia 3 cột 99mm) theo kiểu gấp thư (cột phải gấp vào
  trước, cột trái gấp đè lên sau) để ra một tờ gấp 3 bỏ túi được.
- Muốn bền thì ép plastic sau khi gấp thử để canh đúng nếp gấp.

## File trong thư mục

| File | Là gì |
|---|---|
| `Mat A - Khung xu ly tu choi mua hang.html/.pdf/.png` | Mặt A |
| `Mat B - Van de da be.html/.pdf/.png` | Mặt B |
| `_gap3.css` | Kiểu dùng chung cho cả 2 mặt |
| `render.js`, `probe.js`, `kiemtra.js` | Dùng chung với `../../Poster NVBH/` — không có bản riêng ở đây |

**Sửa nội dung ở file `.html`, rồi dựng lại `.pdf`/`.png`. Đừng sửa thẳng `.pdf`.**

## Dựng lại sau khi sửa

Cần cài `playwright` một lần (`npm install playwright`), rồi từ thư mục này:

```bash
node "../../Poster NVBH/render.js" "Mat A - Khung xu ly tu choi mua hang.html" "Mat A - Khung xu ly tu choi mua hang.pdf" "Mat A - Khung xu ly tu choi mua hang.png"
node "../../Poster NVBH/render.js" "Mat B - Van de da be.html" "Mat B - Van de da be.pdf" "Mat B - Van de da be.png"
```

Script tự báo lỗi nếu có chữ bị cắt hoặc tràn khổ giấy. Muốn dò cỡ chữ lớn nhất mà không tràn:

```bash
node "../../Poster NVBH/probe.js" "Mat A - Khung xu ly tu choi mua hang.html" "0.80,0.84,0.86,0.90"
```

Cỡ chữ điều khiển bằng biến `--s` trong từng file HTML — hiện Mặt A đặt `--s:0.86` (nhiều khối hơn nên
chữ nhỏ hơn), Mặt B đặt `--s:1.00`.

## Hình ảnh dùng trong 2 mặt — và giới hạn hiện có

Ảnh lấy từ `../../Poster NVBH/assets/` (đã tách sẵn từ bộ slide Elemis chính thức của công ty), dùng lại
qua đường dẫn tương đối — không copy trùng file:

- **Mặt A:** `logo.png` (header); `dkpharma.jpg`, `dhduoc.jpg` (khối 1 – Thương hiệu, khối 5 – Pháp lý,
  đúng nguồn gốc DK Pharma/ĐH Dược Hà Nội); `cn-congbo.jpg`, `cn-kiemnghiem.jpg` (khối 5 – hồ sơ công bố/kiểm nghiệm).
- **Mặt B:** `logo.png` (header); `dl-dudu.png`, `dl-chanh.png`, `dl-kinhgioi.png`, `dl-saidat.png`,
  `dl-khoqua.png` (5 dược liệu xuất hiện trong cơ chế của vấn đề 1–2: đu đủ, chanh, kinh giới, sài đất, khổ qua).

**⚠️ Giới hạn:** bộ ảnh công ty cung cấp hiện chỉ đủ cho sản phẩm **Tắm gội thảo dược Elemis** (dược liệu,
bước tắm, chứng nhận) — như đã ghi trong `../../Poster NVBH/README - cach dung.md`. Sáu sản phẩm còn lại
trong sell-out kit (Kem bôi, Dầu massage Oriky, Xịt muỗi, Gel Gold, Bọt rửa tay, Gạc rơ lưỡi) **chưa có ảnh
chai/hộp thật** trong repo, nên Mặt B không có ảnh sản phẩm cho các dòng này — cần xin thêm ảnh từ MKT nếu
muốn bổ sung. Không dùng ảnh minh hoạ chung chung thay thế để tránh gây hiểu nhầm là ảnh sản phẩm thật.

## Chọn lọc nội dung — không phải tự nghĩ thêm

- Mặt A giữ đúng 8 khối + 4 nguyên tắc + công thức sandwich 3 lớp của file gốc, chỉ rút câu mở dẫn dắt
  mẫu xuống công thức chung (bỏ phần ví dụ minh hoạ theo từng khối để đủ chỗ).
- Mặt B chọn minh hoạ chi tiết **5/9 vấn đề** (Hăm da, Rôm sảy/mẩn ngứa/mụn nhọt, Chàm sữa, Muỗi đốt, Cứt trâu)
  để vừa 2 cột — đây là lựa chọn biên tập để cân đối bố cục, **không phải xếp hạng mức độ phổ biến** (chưa có
  số liệu tần suất hỏi thực tế của Nhi). 4 vấn đề còn lại (Da khô/nứt nẻ do gió nắng, Vết thâm/sẹo mới, Da tay
  khô rát, Tưa lưỡi) vẫn có đủ trong bảng tra nhanh cột 1 và trong bản Word/sơ đồ nhánh đầy đủ.
- Các cảnh báo/lưu ý còn treo trong file gốc (chưa chốt cách pha rôm sảy, giá OTC hay giá web, các mốc thời
  gian "hết hăm/hết chàm" chưa đưa vào...) — xem đầy đủ ở `../Theo vấn đề da bé/README.md` và
  `../../Poster NVBH/README - cach dung.md`, tờ gấp 3 này không lặp lại các mục "còn chờ xác nhận" đó vì đã
  có sẵn ở 2 file kia.
