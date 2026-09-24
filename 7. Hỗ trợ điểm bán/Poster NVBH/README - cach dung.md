# Poster NVBH — cách dựng và in

Poster khổ **A4 dọc**, dùng dán sau quầy hoặc phát cho nhân viên bán hàng tại shop.
Nội dung rút từ `../Sellout kit/Theo sản phẩm/Bộ sell-out kit theo sản phẩm.md`,
hình ảnh lấy từ bộ slide giới thiệu Elemis chính thức của công ty (file gốc không nằm trong repo).

## Hai bản cho hai mục đích khác nhau

| Bản | Dùng khi nào |
|---|---|
| **1 trang** | Dán ngay sau quầy. Đủ để bán một ca khách bình thường: giá, câu nói 30 giây, đối đáp, cách dùng |
| **2 trang** | Phát cho NVBH giữ. Trang 1 giống bản trên nhưng chữ to hơn; **trang 2** là phần cần học: 4 bước tắm có hình, cách dùng khi bé chàm sữa / hăm tã, bảng 5 cấp độ hăm, giấy kiểm nghiệm để đưa khách xem |

## File trong thư mục

| File | Là gì |
|---|---|
| `SP1 - Tam goi Elemis (1 trang).html` · `.pdf` · `.png` | Bản 1 trang |
| `SP1 - Tam goi Elemis (2 trang).html` · `.pdf` · `.png` | Bản 2 trang |
| `_chung.css` | Kiểu dùng chung cho cả hai bản — sửa ở đây là đổi cả bộ |
| `assets/` | Ảnh tách từ file pptx của công ty |
| `render.js` · `probe.js` · `kiemtra.js` | Script dựng PDF/PNG và kiểm tra tràn trang |

**Sửa nội dung ở file `.html`, rồi dựng lại.** Đừng sửa thẳng `.pdf`.

## Dựng lại sau khi sửa

Cần cài `playwright` một lần (`npm install playwright`), rồi:

```bash
node render.js "SP1 - Tam goi Elemis (1 trang).html" "SP1 - Tam goi Elemis (1 trang).pdf" "SP1 - Tam goi Elemis (1 trang).png"
```

Script **tự báo lỗi nếu có khối chữ bị cắt hoặc tràn khỏi khổ giấy**.
Muốn dò cỡ chữ lớn nhất mà không tràn:

```bash
node probe.js "SP1 - Tam goi Elemis (2 trang).html" "0.90,0.95,1.00,1.05"
```

Cỡ chữ điều khiển bằng biến `--s` trong file HTML. Bản 2 trang đặt riêng cho từng trang
(`--s:1.03` cho trang bán hàng, `--s:0.95` cho trang hướng dẫn vì trang đó nhiều nội dung hơn).

## Màu và font

- Màu thương hiệu **`#2F9036`** lấy trực tiếp từ logo Elemis trong file pptx của công ty.
- Font **Be Vietnam Pro** (Google Fonts) — font thiết kế riêng cho tiếng Việt, dấu thanh
  không bị chồng lên chữ hoa. Máy không có mạng khi dựng sẽ tự lùi về DejaVu Sans.

## Lưu ý khi in

- In **màu**, khổ **A4**, đặt tỉ lệ **100% / Actual size** (đừng để "Fit to page" vì sẽ thu nhỏ lề).
- Nếu bản in ra trắng trơn không có màu nền, bật **"Print backgrounds / In hình nền"** trong hộp thoại in.
- Muốn bền khi dán ở quầy thì ép plastic.

## ⚠️ Điểm cần công ty xác nhận trước khi nhân bản rộng

1. **Cách xử lý khi bé có rôm sảy/mụn nhọt đang có hai hướng dẫn khác nhau:**
   - File `Bộ sell-out kit - Elemis.docx`: pha đậm **1ml + 10ml nước**, thấm lên vùng da **10–20 phút**, ngày 2–3 lần
   - Bộ slide giới thiệu Elemis: **xoa trực tiếp** Elemis lên vùng da **1–2 phút**, sau đó tắm bé
   Poster đang dùng cách của bộ slide (mới hơn, có hình minh hoạ). Cần chốt lại một cách duy nhất.

2. **Bộ slide công ty có những mốc thời gian mà poster cố tình không đưa vào:**
   *"bé bị hăm chỉ cần sau 2–4 ngày dùng Elemis sẽ hết hoàn toàn"*, *"chàm sữa mất 7–12 ngày mới hết hoàn toàn"*,
   và các tiêu đề *"HƯỚNG DẪN HỖ TRỢ ĐIỀU TRỊ chàm sữa / hăm tã"*.
   Đây là **cam kết kết quả và từ "điều trị"** — mâu thuẫn với quy tắc ngôn từ cho mỹ phẩm đã thống nhất
   trong bộ sell-out kit. Poster giữ hướng thận trọng: có hướng dẫn pha, **không hứa số ngày**.
   Cần hỏi bộ phận phụ trách xem NVBH có được phép nói những mốc đó không.

3. **Giá:** poster dùng giá báo giá OTC (150/210/275). Bộ sell-out kit gốc của công ty dùng giá web
   (218/305/399). Vẫn chưa chốt dùng giá nào.

## Chưa làm

Mới dựng **SP1 — Tắm gội Elemis**. Chín sản phẩm còn lại trong báo giá OTC dựng theo cùng bố cục
sau khi Nhi duyệt mẫu này. Riêng các sản phẩm khác **chưa có bộ ảnh** như tắm gội — cần xin
thêm file giới thiệu/ảnh sản phẩm từ MKT.

---

# Poster theo vấn đề da bé (A4 dọc, 3 cột) — bản chạy thử

Chuyển từng mục trong `../Sellout kit/Theo vấn đề da bé/Sell-out kit theo vấn đề da bé.docx` thành 1 poster A4
để in phát cho NVBH. **Mới dựng mục 1 — Hăm da** để Nhi duyệt mẫu; 8 mục còn lại dựng theo cùng bố cục sau khi duyệt.

| File | Là gì |
|---|---|
| `VD1 - Ham da (3 cot).html` · `.pdf` · `.png` | Mục 1 — Hăm da (vùng tã và các nếp gấp) |

**Bố cục:** tiêu đề + chuỗi 3 bước → dải *Dấu hiệu nhận biết* (chữ + ảnh triệu chứng + 5 cấp độ hăm)
→ **3 cột = 3 bước** (Làm sạch · Xử lý vấn đề · Nuôi dưỡng & bảo vệ), mỗi cột có ảnh sản phẩm, giá,
ảnh dược liệu, thành phần – cơ chế, ô *Hơn đối thủ* → hàng cuối 3 ô: *Bộ sản phẩm vấn đề* · *Cách dùng* · *Khuyên đi khám*.
Đủ mọi phần của mục 1 trong file Word, chỉ rút gọn câu chữ, không thêm thông tin mới.
Riêng ô *Hơn đối thủ* của kem bôi và tắm gội lặp lại ở bước 3 trong file Word — poster chỉ ghi một lần ở bước 1–2 và dẫn chiếu.

Dựng lại: `node render.js "VD1 - Ham da (3 cot).html" "VD1 - Ham da (3 cot).pdf" "VD1 - Ham da (3 cot).png"` (đang dùng `--s:1`).

## Nguồn ảnh thêm mới trong `assets/`

| File | Nguồn |
|---|---|
| `sp-kem.jpg`, `sp-oriky.jpg`, `logo-dkxanh.png` | Website công ty duockhoaxanh.com (cắt từ ảnh sản phẩm) |
| `capdo1..5.jpg` | Tách từ `hamta-capdo.png` (bộ slide Elemis của công ty), xếp 1 hàng ngang cho to |
| `dl-chexanh.jpg`, `dl-sachanh.jpg` | Slide thành phần trong `Tắm gội thảo dược Elemis.pptx` |
| `dl-tramgio.jpg`, `dl-hanhnhan.jpg`, `dl-nho.jpg`, `dl-camgao.jpg` | Slide thành phần trong `Dầu massage Oriky.pptx` |
| `hc-dieplucto.jpg` | Ghép: ly nước diệp lục (slide Tắm gội Elemis) = công thức chlorophyllin (Wikimedia Commons *Chlorophyllin.png*) |
| `hc-aquaxyl.jpg` | Ghép: tinh thể xylitol (Wikimedia *Xylitol_crystals.jpg*) + glucose (Wikimedia *Alpha-D-Glucopyranose.svg*). Căn cứ: nhà sản xuất Seppic mô tả Aquaxyl làm từ glucose và xylitol nguồn gốc thực vật ([SpecialChem](https://www.specialchem.com/cosmetics/product/seppic-aquaxyl)) |
| `dl-rauma.jpg` · `dl-ngaicuu.jpg` · `hc-kemoxyd.jpg` | Wikimedia Commons — *Centella_asiatica_(থানকুনি)_(3).jpg*, *Artemia_vulgaris_leaf.jpg*, *Zinc_oxide.jpg*. Bốn file pptx công ty không có ảnh rau má, ngải cứu, kẽm oxyd |

Đã bỏ ảnh lâm sàng hăm vùng tã (theo ý Nhi) — chỉ giữ ảnh 5 cấp độ của công ty.
⚠️ Ảnh Wikimedia dùng giấy phép mở (phần lớn CC BY-SA), chưa kiểm tra từng file; chân poster có ghi nguồn.
Nếu in số lượng lớn, nên xin MKT ảnh rau má/ngải cứu chính thức (có thể nằm trong slide Kem bôi da Elemis).
