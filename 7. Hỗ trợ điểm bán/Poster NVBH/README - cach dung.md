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
| **`VD1 - Ham da (ngang gap 3).html` · `.pdf` · `.png`** | ⭐ Mục 1 — Hăm da, **A4 ngang, in 1 mặt, gấp 3 kiểu chữ Z** |
| `VD1 - Ham da (3 cot).html` · `.pdf` · `.png` | Bản A4 dọc 3 cột trước đó, giữ lại để so sánh |

### Bản ngang gấp 3

- 3 tấm bằng nhau, mỗi tấm **99mm**. Có vạch gấp ngắn ở mép trên và dưới, không chữ nào vắt qua nếp gấp.
- Gấp **chữ Z** (gấp xếp như quạt) để **tấm 1 nằm mặt trước**. Tấm 1 là bìa: tên vấn đề, 3 bước, dấu hiệu, 5 cấp độ hăm, bộ sản phẩm, khi nào khuyên đi khám — gấp lại vẫn đủ để bán nhanh.
- Tấm 2: Bước 1 Làm sạch + Bước 2 Xử lý vấn đề. Tấm 3: Bước 3 Nuôi dưỡng & bảo vệ + Cách dùng.
- In: A4, **khổ ngang (Landscape)**, 100% / Actual size, bật in hình nền. Cỡ chữ `--s:1.08` (mức 1.12 bắt đầu tràn).
- Bìa: logo Dược Khoa Xanh to, **chú voi Elemis** (tách từ hình trên hộp tắm gội, slide `Tắm gội thảo dược Elemis.pptx`) — `assets/voi-elemis-trang.png` đặt trên nền xanh, `assets/voi-elemis.png` màu xanh ở chân tấm bìa. Theo ý Nhi đã bỏ số "1", dòng tóm tắt 3 bước, chữ "Mục 1/9" và dòng ghi nguồn ảnh trên poster (nguồn ảnh vẫn ghi đủ trong README này).
- **Bản sửa lần 3 (theo góp ý Nhi)** — chỉ áp cho bản ngang, bản dọc 3 cột chưa cập nhật:
  - Tách **Dấu hiệu** và **Nguyên nhân**. Nguyên nhân viết lại: vùng tã = da ngâm lâu trong nước tiểu/phân do thay tã chưa kịp, vệ sinh chưa kỹ, chưa lau khô (amoniac + enzyme phân phá hàng rào da, tã bí ẩm, cọ xát); nếp gấp = mồ hôi đọng + cọ xát. Nguồn: [Medscape – Diaper dermatitis](https://emedicine.medscape.com/article/911985-overview), [Buckingham 1986 – vai trò của phân](https://pubmed.ncbi.nlm.nih.gov/3513143/), [Vinmec](https://www.vinmec.com/vie/bai-viet/ham-ta-o-tre-em-nguyen-nhan-huong-dan-xu-tri-vi).
  - Bộ sản phẩm chia **Cần thiết** (Tắm gội + Kem bôi) / **Khuyến nghị dùng thêm** (Oriky); mọi chỗ ghi giá đều kèm dung tích.
  - Mỗi thành phần ghi **công dụng trước**, rồi dòng **"Vì:"** (lý do từ vấn đề da).
  - Bước 3 đặt tắm gội trước kem bôi.
  - Ô "Hơn đối thủ" bước 1: chanh → acid citric; tinh dầu mùi → linalool (làm dịu da theo `Phân tích công dụng sản phẩm.md`; kháng tụ cầu vàng/liên cầu theo [Casetti 2012](https://onlinelibrary.wiley.com/doi/10.1002/ptr.3571) và [Aelenei 2019](https://academic.oup.com/lambio/article-abstract/68/2/156/6699216)). Bước 2: nêu thành phần đối thủ theo `So sánh thị trường - Nhóm Dành cho bé.md`.
  - **Cách dùng theo tình trạng** (phòng hăm / đang hăm / sau khi hết hăm). Tỉ lệ pha lấy từ slide "Hướng dẫn hỗ trợ điều trị hăm tã" (Tắm gội Elemis.pptx); kem "2–3 lần/ngày, mát-xa nhẹ" lấy từ ảnh cách dùng kem trên web công ty; Oriky "thoa lên vùng da khô, dùng trước hoặc sau tắm" lấy từ Dầu massage Oriky.pptx. Mốc "2–4 ngày hết hăm" trong slide vẫn **không** đưa vào.
- **Bản sửa lần 4 (theo góp ý Nhi):** bìa đi theo hướng **Sản phẩm → giải quyết vấn đề gì → gợi ý bộ sản phẩm** (Cần thiết / Khuyến nghị dùng thêm). Bỏ phần mô tả hăm (dấu hiệu, nguyên nhân, 5 cấp độ) vì đã có thẻ vấn đề riêng. Các ô "Hơn đối thủ" đổi thành **bảng so sánh thành phần trung tính** (không khen/chê), số liệu lấy từ `Danh mục sản phẩm/So sánh thị trường/So sánh thị trường - Nhóm Dành cho bé.md`.
- `render.js` đã sửa để dựng được trang ngang (tự lấy khổ giấy từ `@page` trong file HTML).

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
