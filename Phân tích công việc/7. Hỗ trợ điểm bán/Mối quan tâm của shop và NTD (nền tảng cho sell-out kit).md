# Mối quan tâm của shop và của NTD — nền tảng để dựng sell-out kit

**Mục đích:** trước khi viết bất kỳ tài liệu bán hàng nào, phải biết chính xác người nghe đang lo cái gì. Shop và NTD là hai đối tượng **lo hai chuyện hoàn toàn khác nhau** — nếu dùng chung một bài giới thiệu thì cả hai đều không nghe.

**Cách đọc file:** mỗi mối quan tâm được viết dưới dạng **câu mà họ thật sự hỏi/nghĩ**, kèm cột đánh giá DKX hiện có dữ liệu để trả lời hay chưa:

- ✅ = đã có dữ liệu trong tay (báo giá OTC + file công bố sản phẩm + phân tích trong repo này)
- ⏳ = chưa có, phải hỏi NVKD/kế toán/NPP mới trả lời được
- ❌ = dữ liệu hiện có đang **mâu thuẫn hoặc bất lợi**, cần chuẩn bị cách xử lý riêng

**Nguồn:** báo giá OTC `Báo giá sản phẩm OTC tất cả sp.docx` (01/04/2025), file công bố `Thông tin sp DKX.xlsx`, các file so sánh thị trường trong `Danh mục sản phẩm/`, cộng với tham khảo bên ngoài về hành vi kênh nhà thuốc/OTC và hành vi mẹ bỉm (xem mục Nguồn tham khảo cuối file).

---

## Bối cảnh mô hình kinh doanh — điều chi phối toàn bộ kit

```
DKX  →  NPP  →  Shop nhỏ lẻ  →  NTD
```

Ba hệ quả bắt buộc phải nhớ khi làm kit:

1. **DKX không bán trực tiếp cho shop.** Shop nhập hàng từ NPP, không từ DKX. Nghĩa là DKX **không kiểm soát giá shop nhập vào** và **không kiểm soát lãi của shop** — hai thứ shop quan tâm nhất. Kit "DKX → shop" vì vậy không phải là kit chào giá, mà là kit **làm cho shop muốn bán** món hàng họ đã/sẽ nhập từ NPP.
2. **Có 2 lớp "sell" khác nhau, đừng lẫn:** DKX → NPP và NPP → shop là **sell-in** (đẩy hàng vào kênh). Shop → NTD là **sell-out** (hàng ra khỏi kênh, tiền thật về). Chương trình "mua X tặng Y" trong bảng báo giá là công cụ **sell-in** (chưa xác nhận áp cho lớp nào — để trống, không suy đoán). Nếu chỉ đẩy sell-in mà không làm sell-out, hàng nằm lại kho shop, shop lỗ vốn và lần sau không nhập nữa — đây chính là lý do sếp yêu cầu làm sell-out kit.
3. **Mắt xích yếu nhất là người đứng quầy ở shop.** DKX nói hay đến mấy, người thật sự mở miệng tư vấn cho NTD là nhân viên shop — người không được trả lương bởi DKX, bán cùng lúc hàng trăm mã hàng, và sẽ tư vấn món nào họ **nhớ và tự tin nhất**. Toàn bộ kit phải phục vụ mục tiêu: làm cho người đứng quầy nhớ được và tự tin nói.

---

# PHẦN A — Mối quan tâm của SHOP

Shop là **người kinh doanh**, không phải người dùng. Họ không quan tâm sản phẩm hay đến đâu — họ quan tâm sản phẩm này có làm ra tiền cho họ không, và có rủi ro gì không.

## A1. Tiền lãi — câu hỏi số 1, luôn được hỏi đầu tiên

| Shop thật sự hỏi | Vì sao họ hỏi | DKX trả lời được chưa |
|---|---|---|
| "Bán 1 hộp này tôi lãi bao nhiêu?" | Đây là thước đo duy nhất để so món hàng mới với món họ đang bán | ⏳ **Chưa** — báo giá OTC chỉ có **giá bán lẻ**, không có giá shop nhập từ NPP. Không có giá nhập thì không tính được lãi |
| "Lãi bao nhiêu phần trăm?" | Nhà thuốc quen so theo % để xếp hạng ưu tiên tư vấn | ⏳ Cùng lý do trên |
| "Chương trình mua X tặng Y là tôi được hưởng hay NPP được hưởng?" | Nếu NPP giữ lại phần tặng thì shop không được gì | ⏳ **Chưa xác nhận** — bảng báo giá không ghi rõ chương trình áp cho lớp nào. Trong kit để trống ô này, không suy đoán |
| "Phải nhập bao nhiêu mới được chương trình? Tính theo từng mã hay cộng dồn cả đơn?" | Quyết định số vốn phải bỏ ra một lần | ⏳ Chưa có quy định cụ thể trong báo giá |
| "Có thưởng doanh số tháng/quý không? Có tích luỹ không?" | Nhà thuốc rất nhạy với thưởng sau (trả thưởng, tích luỹ) vì không ảnh hưởng giá bán ra | ⏳ Chưa có dữ liệu. Danh mục công việc có nhắc "hợp đồng tích luỹ" (mục 2.2) — có thể công ty đã có, cần hỏi |

⚠️ **Đây là lỗ hổng nghiêm trọng nhất của toàn bộ sell-out kit.** Không có giá nhập, kit không trả lời được câu hỏi đầu tiên và quan trọng nhất của shop. Cần hỏi NVKD/kế toán trước khi đi gặp shop.

## A2. Vốn và tồn kho — nỗi lo đứng thứ hai

| Shop thật sự hỏi | Vì sao họ hỏi | DKX trả lời được chưa |
|---|---|---|
| "Bao lâu thì bán hết 1 lô?" | Vốn nằm trong hàng là vốn chết; nhà thuốc nhỏ vốn mỏng, quay vòng chậm là đuối | ⏳ Cần dữ liệu tốc độ bán thực tế từ các shop đang bán tốt |
| "Nhập ít được không? Lần đầu tôi lấy thử 3-5 hộp thôi." | Giảm rủi ro thử món mới | ⏳ Cần biết cơ số nhập tối thiểu của NPP |
| "Bán không hết có đổi/trả không? Cận date xử lý thế nào?" | Đây là câu hỏi quyết định của rất nhiều shop khi nhập hàng lạ | ⏳ Chưa có chính sách đổi trả bằng văn bản. Danh mục công việc mục 1.4 có "xử lý đổi trả hàng — đối chiếu điều kiện hợp đồng" ⇒ công ty **có** điều khoản, cần lấy bản cụ thể |
| "Hạn sử dụng còn bao lâu khi giao?" | Hàng cận date = hàng không bán được | ✅ **Có dữ liệu HSD gốc** (24-36 tháng tuỳ sản phẩm). ⏳ Nhưng HSD còn lại lúc giao thì phụ thuộc lô, cần kho xác nhận |
| "Đặt hàng bao lâu có? Thiếu hàng giữa chừng thì sao?" | Đứt hàng giữa lúc đang có khách hỏi là mất khách vĩnh viễn | ⏳ Cần kho (chị Dung/chị Phương) cho thời gian giao trung bình |

**Số liệu ✅ có sẵn — HSD theo công bố:**

| Dòng sản phẩm | HSD (tháng) |
|---|---|
| Kem bôi da Elemis, Xịt muỗi Elemis, Dầu massage Oriky, Curmilk cốm, Dao'Spa Mama | 36 |
| Tắm gội trẻ em Elemis | 30 |
| Elemis Gold, Gạc rơ lưỡi (cả 2 loại), Bọt rửa tay Elemis, Yaocare Women | 24 |

Dòng HSD 24 tháng là nhóm cần chú ý nhất khi shop hỏi về rủi ro tồn kho.

## A3. "Sản phẩm này có tự bán được không?"

| Shop thật sự hỏi | Vì sao họ hỏi | DKX trả lời được chưa |
|---|---|---|
| "Có ai hỏi mua hàng này không? Khách có biết thương hiệu không?" | Hàng không có ai hỏi = shop phải tự tư vấn từ đầu, rất tốn công | ❌ **Bất lợi** — theo phân tích trong repo, DKX **không có mặt trên Pharmacity/Long Châu/sàn TMĐT lớn**, độ nhận biết thương hiệu gần như bằng 0 với NTD |
| "Công ty có chạy quảng cáo không? Có ai review không?" | Quảng cáo kéo khách vào hỏi → shop bán dễ | ⏳ Cần MKT (Kiều/anh Nam) cho biết kế hoạch truyền thông |
| "Tôi đang bán Dr.Papie/Kutieskin rồi, thêm hàng này làm gì?" | Không muốn tự cạnh tranh với chính mình trên kệ | ✅ Trả lời được bằng phân tích khác biệt thành phần (xem kit shop) |
| "Nhân viên tôi có biết tư vấn không?" | Người đứng quầy không tự tin = không bao giờ mở miệng giới thiệu | ✅ Đã có bài đào tạo + script xử lý từ chối trong repo này |

⚠️ Mối quan tâm A3 là **lý do tồn tại của sell-out kit**: vì thương hiệu chưa có lực kéo từ NTD, shop sẽ không tự bán được nếu DKX không đưa công cụ vào tận tay người đứng quầy.

## A4. Rủi ro về giá — mối lo âm thầm nhưng rất lớn

| Shop thật sự hỏi | Vì sao họ hỏi | DKX trả lời được chưa |
|---|---|---|
| "Trên mạng có bán rẻ hơn không?" | Khách vào shop xem hàng rồi về đặt online = shop mất công không được gì | ❌ **Có vấn đề thật** — giá web `duockhoaxanh.com` đang **cao hơn** giá bán lẻ OTC ở hầu hết sản phẩm (ví dụ tắm gội 200ml: web 218.000đ vs OTC 150.000đ). Chênh lệch này chưa được giải thích. Về mặt bảo vệ shop thì đây là chiều **có lợi** (online đắt hơn), nhưng khi shop/NTD tự tra giá và thấy hai giá khác nhau, họ sẽ mất tin tưởng nếu mình không giải thích được |
| "NPP khác hoặc shop khác gần đây có bán phá giá không?" | Bị shop bên cạnh cắt giá là mất hết lãi | ⏳ Cần chính sách bảo vệ giá/phân vùng địa bàn từ NVKD |
| "Giá bán lẻ 150.000đ có bắt buộc không, tôi bán cao/thấp hơn được không?" | Muốn linh hoạt theo khu vực | ⏳ Cần xác nhận báo giá là giá **đề xuất** hay **niêm yết bắt buộc** |

## A5. Rủi ro pháp lý và uy tín của shop

| Shop thật sự hỏi | Vì sao họ hỏi | DKX trả lời được chưa |
|---|---|---|
| "Giấy tờ công bố đâu? Sản phẩm này là mỹ phẩm hay thuốc hay thiết bị y tế?" | Bán hàng không giấy tờ ở nhà thuốc là rủi ro bị xử phạt | ✅ **Có đủ** — số công bố cho từng sản phẩm (xem bảng dưới) |
| "Có hoá đơn VAT không?" | Nhà thuốc cần chứng từ đầu vào | ⏳ Đi qua NPP nên phụ thuộc NPP, cần xác nhận |
| "Nhà máy nào sản xuất? Có đạt chuẩn không?" | Bối cảnh thuốc giả/TPCN giả đang nóng, chủ nhà thuốc rất cảnh giác | ✅ Có tên cơ sở sản xuất (Bắc Ninh/Hoà Bình/Phú Thọ), thuộc hệ DK Pharma xuất phát từ ĐH Dược Hà Nội |
| "Bán xong khách khiếu nại thì ai chịu?" | Shop sợ mất uy tín với khách quen | ⏳ Chưa có quy trình xử lý khiếu nại NTD bằng văn bản |

**Số liệu ✅ có sẵn — loại sản phẩm và số công bố (dùng trả lời trực tiếp cho shop):**

| Dòng sản phẩm | Loại | Số công bố / đăng ký |
|---|---|---|
| Tắm gội trẻ em Elemis (200/350/500ml) | Mỹ phẩm | 83/25/CBMP-HB (bản Hoà Bình); 252/26/CBMP-BN (bản Bắc Ninh, quy cách gói 10ml) |
| Gel tắm gội Elemis Gold 220ml | Mỹ phẩm | 65/23/CBMP-HB; 301/26/CBMP-BN |
| Kem bôi da Elemis 30g | Mỹ phẩm | 92/26/CBMP-BN |
| Bọt rửa tay Elemis 250ml | Mỹ phẩm | 131/25/CBMP-BN |
| Dầu massage Oriky (Massage Baby Oil) 60ml | Mỹ phẩm | 45/26/CBMP-BN |
| Yaocare Women 100ml | Mỹ phẩm | 165/24/CBMP-BN |
| Dao'Spa Mama 250ml | Mỹ phẩm | 102/22/CBMP-HB; 326/25/CBMP-PT |
| Gạc rơ lưỡi Elemis hương dưa lưới | **TTBYT (tự công bố)** | 240000002/PCBA-HB |
| Gạc rơ lưỡi Elemis không mùi | **TTBYT (tự công bố)** | 240000004/PCBA-HB |
| Xịt muỗi Elemis 50/120ml | **TTBYT (tự công bố)** | 01/2026/DKP-CPSP |
| Curmilk cốm lợi sữa 20 gói | **TPBVSK** | 2007/2021/ĐKSP |

⚠️ Ba loại này **không được nói giống nhau**: mỹ phẩm không được dùng từ "trị/chữa/điều trị"; TPBVSK bắt buộc kèm câu "không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh"; TTBYT tự công bố là do doanh nghiệp tự chịu trách nhiệm, không phải cơ quan y tế thẩm định nội dung — nếu shop hỏi kỹ thì phải nói đúng bản chất, đừng nói quá thành "được Bộ Y tế cấp phép".

## A6. Hỗ trợ từ công ty

| Shop thật sự hỏi | DKX trả lời được chưa |
|---|---|
| "Có standee/kệ/poster/tester không?" | ⏳ Chưa có danh mục POSM thực tế — cần hỏi MKT xem hiện có sẵn vật phẩm gì |
| "Có đào tạo cho nhân viên tôi không?" | ✅ Đã có bài đào tạo 5-10 phút + bản gạch đầu dòng trong repo này |
| "Có ai theo sát hỗ trợ không hay giao hàng xong là biến mất?" | ✅ Có đầu mối là NVKD + Sales Admin; đây là điểm mạnh có thể cam kết ngay |
| "Có chương trình cho khách mua lẻ để tôi dễ chốt không?" | ⏳ **Chưa có** — đang chờ NVKD xác nhận khuyến mãi dành cho NTD tại quầy |

---

# PHẦN B — Mối quan tâm của NTD

NTD ở đây chủ yếu là **mẹ có con nhỏ** (nhóm "dành cho bé") và **phụ nữ mang thai/sau sinh** (nhóm "dành cho mẹ"). Họ không quan tâm lợi nhuận — họ quan tâm **an toàn cho con và cho chính mình**, sau đó mới đến hiệu quả và giá.

## B1. An toàn — mối quan tâm áp đảo, luôn đứng đầu

| NTD thật sự hỏi | Vì sao | DKX trả lời được chưa |
|---|---|---|
| "Có an toàn cho trẻ sơ sinh không? Bé mấy tháng dùng được?" | Da/niêm mạc trẻ sơ sinh rất mỏng, mẹ sợ nhất là hại con | ✅ Phần lớn công bố ghi rõ an toàn cho trẻ sơ sinh. Xịt muỗi có mốc rõ: **trẻ trên 3 tháng**. ⏳ Một số dòng chưa có mốc tuổi tối thiểu rõ ràng |
| "Thành phần là gì? Có hoá chất không?" | Xu hướng chọn thảo dược, sợ chất tổng hợp | ✅ Có danh sách thành phần đầy đủ theo công bố. ❌ Nhưng vài sản phẩm có chất tổng hợp mà marketing lại nói là "không có" — xem mục B6 |
| "Con tôi da nhạy cảm/cơ địa dị ứng, dùng có sao không?" | Sợ làm tình trạng nặng hơn | ⏳ Chưa có dữ liệu thử nghiệm kích ứng cho từng sản phẩm; chỉ có ghi chú gạc rơ lưỡi "đã qua kiểm nghiệm an toàn" |
| "Có phải hàng thật không? Dạo này thuốc giả, sữa giả nhiều quá." | Bối cảnh thuốc giả/TPCN giả bị phát hiện liên tục, niềm tin NTD xuống thấp | ✅ Có số công bố + tên nhà máy + xuất thân DK Pharma từ ĐH Dược Hà Nội — đây là vũ khí mạnh nhất của DKX với nhóm lo hàng giả |
| "Dùng lâu dài có tích tụ gì không?" | Sản phẩm dùng hàng ngày cho bé | ⏳ Không có dữ liệu dùng dài hạn |

## B2. Hiệu quả — "dùng có ăn thua không?"

| NTD thật sự hỏi | DKX trả lời được chưa |
|---|---|
| "Bao lâu thì thấy đỡ?" | ⏳ Không có số liệu lâm sàng của DKX. Chỉ giải thích được **cơ chế** (có sẵn, khá sâu, trong file sell-out kit Elemis), không hứa được mốc thời gian |
| "Có hết hẳn không hay chỉ đỡ?" | ✅ Trả lời được — và **phải** trả lời trung thực: mỹ phẩm chỉ hỗ trợ, không điều trị |
| "Đang bôi thuốc bác sĩ kê, dùng thêm cái này được không?" | ⏳ Không có dữ liệu tương tác; hướng xử lý an toàn là khuyên hỏi bác sĩ |
| "Có mùi không, bé có chịu không?" | ✅ Trả lời được — gạc rơ lưỡi có bản hương dưa lưới và bản không mùi, đúng là để giải quyết đúng mối quan tâm này |
| "Dùng thế nào cho đúng, ngày mấy lần?" | ⏳ Có trên bao bì nhưng chưa được tổng hợp thành hướng dẫn thống nhất cho người đứng quầy |

## B3. Giá — quan trọng nhưng không phải số 1

Với hàng cho con, mẹ sẵn sàng trả cao hơn **nếu tin là an toàn hơn**. Nhưng họ luôn so giá:

| NTD thật sự hỏi | DKX trả lời được chưa |
|---|---|
| "Sao đắt hơn loại tôi đang dùng?" | ✅ So sánh được (xem bảng ở kit shop). **Tin tốt: ở giá OTC, khoảng cách với đối thủ hẹp hơn nhiều so với giá web** — có dòng gần ngang giá đối thủ |
| "Mua ở đâu rẻ hơn không?" | ❌ Rủi ro — giá web công ty đang cao hơn giá OTC, mình cần biết trước để không bị hỏi bất ngờ |
| "Dùng được bao lâu thì hết chai?" | ✅ Tính được theo quy cách — cách trả lời hiệu quả nhất với câu chê đắt là quy về **tiền/ngày** thay vì tiền/hộp |
| "Có khuyến mãi gì không?" | ⏳ **Chưa có** chương trình cho NTD mua lẻ. Đây là lỗ hổng thứ hai của kit, sau giá nhập |

## B4. Niềm tin vào thương hiệu

| NTD thật sự nghĩ | DKX trả lời được chưa |
|---|---|
| "Chưa nghe tên bao giờ." | ❌ Bất lợi thật. Bù lại bằng: nguồn gốc DK Pharma / ĐH Dược Hà Nội, số công bố, và **lời tư vấn của người đứng quầy** — với hàng chưa có thương hiệu, người đứng quầy chính là thương hiệu |
| "Có ai dùng chưa, review thế nào?" | ⏳ Chưa có kho review/hình ảnh thực tế từ thị trường. Danh mục công việc mục 3.2 đúng là việc thu thập hình ảnh/video từ đối tác — nên ưu tiên làm để lấp chỗ này |
| "Nhà thuốc lớn có bán không?" | ❌ Chưa có mặt ở chuỗi lớn |

## B5. Sau khi mua

| NTD thật sự hỏi | DKX trả lời được chưa |
|---|---|
| "Dùng không hợp có đổi không?" | ⏳ Chưa có chính sách đổi trả cho NTD |
| "Bé bị kích ứng thì làm sao, gọi ai?" | ⏳ Chưa có đầu mối/hotline xử lý phản ánh NTD |
| "Hết thì mua lại ở đâu?" | ❌ Độ phủ điểm bán còn mỏng — mua lại khó là lý do khiến khách bỏ sang thương hiệu khác |

## B6. ⚠️ Những chỗ tài liệu hiện có đang tự mâu thuẫn — NTD hoặc dược sĩ ở shop có thể bắt được

Đây không phải lỗi của mình, nhưng nếu bị hỏi tại quầy mà không biết trước thì rất mất uy tín. Liệt kê để chuẩn bị, **không đưa vào tài liệu gửi khách**:

1. **Elemis Gold** — web quảng cáo "100% thảo dược, hệ tạo bọt tự nhiên" nhưng thành phần công bố có **SLES** (chất tạo bọt tổng hợp).
2. **Kem bôi da Elemis** — web ghi "không hương liệu" nhưng thành phần công bố có **Fragrance**.
3. **Yaocare Women** — web quảng cáo "không chứa hương liệu hay hoá chất độc hại" nhưng công bố có cả **SLES và Fragrance**.
4. **Curmilk cốm** — bảng báo giá ghi "Lá chùm ngây 10g, Thông thảo 5g" cho **1 gói 5g**. Về mặt số học, một gói 5g không thể chứa 10g chùm ngây. Bản đăng ký chính thức (2007/2021/ĐKSP) ghi: cao đặc thông thảo 730mg, cao khô bồ công anh 200mg, Curcumin 95% 105mg, cao khô chùm ngây 65mg. Báo giá nhiều khả năng đang ghi lượng **dược liệu thô tương đương**, nhưng viết như hiện tại là sai và một dược sĩ sẽ nhận ra ngay. **Cần báo lại để sửa bảng báo giá.**
5. **Dao'Spa Mama** — báo giá ghi công dụng "Tăng cường sinh lực, phục hồi sức khoẻ cho phụ nữ sau sinh", trong khi công bố chỉ cho phép nói về vệ sinh/làm sạch da, hỗ trợ kháng khuẩn, làm ấm da, phục hồi diện mạo da-tóc. "Tăng cường sinh lực" **không có trong công bố** và vượt phạm vi mỹ phẩm. Báo giá cũng liệt kê **Màng tang** trong thành phần, nhưng thành phần này không có trong công bố 326/25/CBMP-PT.
6. **Yaocare Women** — báo giá ghi "hỗ trợ điều trị các bệnh phụ khoa"; công bố chỉ cho phép "hỗ trợ kháng khuẩn, giảm ngứa, giúp bảo vệ khỏi viêm nhiễm phụ khoa". Chữ **"điều trị"** không được dùng cho mỹ phẩm.
7. **Gạc rơ lưỡi và Kem bôi da** — báo giá dùng cụm "hỗ trợ điều trị hiệu quả", trong khi bao bì thật dùng đúng chuẩn là "phòng ngừa"/"hỗ trợ". Nói theo bao bì, đừng nói theo báo giá.
8. **Dòng tắm gội** — bao bì in tagline "Tắm thơm tho - Không lo viêm da"; công dụng "viêm da" **không có** trong công bố. Đây là chữ công ty đã in sẵn, không cần gỡ, nhưng khi tư vấn bằng lời thì không nhắc lại/nhấn thêm.

👉 **Quy tắc rút ra cho toàn bộ kit:** chỉ nói những gì có trong **công bố chính thức** và trên **bao bì thật**. Không lấy câu chữ từ bảng báo giá hay website làm nội dung tư vấn.

---

# PHẦN C — Chỗ giao nhau giữa shop và NTD

Năm điểm dưới đây cả hai đối tượng đều quan tâm, nên là **xương sống chung** của cả hai bộ kit — chỉ khác cách diễn đạt:

| # | Mối quan tâm chung | Nói với shop | Nói với NTD |
|---|---|---|---|
| 1 | **Sản phẩm có thật, có giấy tờ** | Số công bố, loại sản phẩm, nhà máy — để shop yên tâm về pháp lý | Nguồn gốc DK Pharma / ĐH Dược Hà Nội — để mẹ yên tâm không mua phải hàng trôi nổi |
| 2 | **Giải quyết đúng vấn đề nào** | Nhóm khách nào của shop sẽ mua → biết đặt ở quầy nào | Đúng vấn đề bé/mẹ đang gặp → biết có nên mua không |
| 3 | **Khác gì hàng đang bán** | Không trùng, không tự ăn doanh số của nhau | Đáng để đổi từ loại đang dùng không |
| 4 | **Giá có hợp lý không** | Lãi và tốc độ quay vòng | Tiền/ngày sử dụng, đắt hơn nhưng được gì |
| 5 | **Có ai chịu trách nhiệm không** | Ai xử lý khi khách khiếu nại | Không hợp thì gọi ai |

---

# PHẦN D — Tổng hợp lỗ hổng cần lấp trước khi mang kit ra dùng thật

Xếp theo mức độ chặn việc:

**Nhóm 1 — chặn hoàn toàn, phải có mới đi gặp shop được:**
1. **Giá shop nhập từ NPP** (hoặc ít nhất khoảng lãi shop được hưởng). Không có thì không trả lời được câu hỏi đầu tiên của shop. → Hỏi NVKD/kế toán.
2. **Chương trình "mua X tặng Y" áp cho ai** — DKX→NPP hay NPP→shop, hay cả hai. → Hỏi NVKD. Chưa có xác nhận thì ô chương trình trong kit để trống.

**Nhóm 2 — làm kit yếu đi rõ rệt nếu thiếu:**
3. **Khuyến mãi dành cho NTD mua lẻ tại quầy** (khác sell-in). → NVKD.
4. **Chính sách đổi trả / hàng cận date cho shop.** → Kế toán (chị Tươi) + NVKD, lấy từ điều khoản hợp đồng mẫu.
5. **Danh mục POSM hiện có** (standee, kệ, poster, tester). → MKT (Kiều, anh Nam).
6. **Giải thích chênh lệch giá web vs giá OTC.** → NVKD/kế toán.

**Nhóm 3 — nên có để kit thuyết phục hơn:**
7. Cơ số nhập tối thiểu và thời gian giao hàng trung bình. → Kho (chị Dung/chị Phương).
8. Tốc độ bán thực tế ở các shop đang bán tốt. → Dữ liệu doanh số bộ phận (nhóm việc 5).
9. Hình ảnh/video/phản hồi thật từ thị trường. → NVKD theo KPI (nhóm việc 3.2).
10. **Sửa lại các điểm sai/vượt công bố trong bảng báo giá** (mục B6, đặc biệt Curmilk và Dao'Spa). → Báo NVKD/bộ phận phụ trách tài liệu.

**Nhóm 4 — nằm ngoài phạm vi kit nhưng ảnh hưởng trực tiếp:**
11. Cách đưa kit tới nhóm shop chưa xác thực/chưa liên hệ trực tiếp được (phải qua NPP hay đi thực địa).

---

## Sản phẩm nằm ngoài phạm vi kit lần này

File công bố có, nhưng **bảng báo giá OTC không có** → không có giá bán lẻ và không có chương trình, nên chưa dựng kit được:

- Nước tắm gội trẻ em Yaocare Baby 250ml
- Dung dịch thảo dược sau sinh Yaocare mama 250ml
- Gel vệ sinh phụ nữ Oriky 150ml
- Thảo dược xông vùng kín Oriky 10ml
- Viên nang lợi sữa Curmilk (lọ 45 viên)
- TPBVSK Cuperin DKG (hộp 15 gói)
- Tắm gội trẻ em thảo dược quy cách hộp 25 gói x 10ml

👉 Cần hỏi NVKD: những mã này **không bán ở kênh OTC**, hay chỉ là **thiếu trong bảng báo giá**? Câu trả lời quyết định có phải làm thêm kit cho chúng không.

---

## Nguồn tham khảo

Dữ liệu sản phẩm, giá, chương trình: `Báo giá sản phẩm OTC tất cả sp.docx` (01/04/2025) và `Thông tin sp DKX.xlsx` do Nhi cung cấp; các file trong `Danh mục sản phẩm/` của repo này.

Tham khảo về hành vi kênh nhà thuốc/OTC và hành vi người mua:

- [Trade Marketing ngành Dược — chìa khoá gắn kết công ty dược và nhà thuốc (Brands Vietnam)](https://www.brandsvietnam.com/congdong/topic/322024-trade-marketing-nganh-duoc-chia-khoa-gan-ket-cong-ty-duoc-va-nha-thuoc-hop-tac-win-win)
- [Trade Marketing dược phẩm — nguyên tắc tăng doanh thu (CASK)](https://www.cask.vn/tin-chi-tiet/trade-marketing-duoc-pham-nguyen-tac-vang-tang-doanh-thu-hieu-qua)
- [Những khó khăn khi mở nhà thuốc (MPG)](https://mpg.edu.vn/nhung-kho-khan-khi-mo-nha-thuoc-co-the-ban-chua-biet/)
- [Mở nhà thuốc có lời không — tồn kho và quay vòng vốn (Medipharusa)](https://medipharusa.com/mo-nha-thuoc-tay-co-loi-khong.html)
- [Kỹ năng trình dược viên OTC (NextCRM)](https://nextcrm.vn/trinh-duoc-vien-otc)
- [Chiến lược kinh doanh nhà thuốc cạnh tranh với chuỗi lớn (Mephar)](https://mephar.com/chien-luoc-kinh-doanh-nha-thuoc-canh-tranh-chuoi-lon/)
- [Hướng dẫn chọn sữa tắm gội an toàn cho trẻ sơ sinh (Nhà thuốc Long Châu)](https://nhathuoclongchau.com.vn/bai-viet/huong-dan-cach-chon-sua-tam-goi-an-toan-cho-tre-so-sinh-va-tre-nho.html)
- [Sữa tắm thảo dược cho bé — cách chọn (Nhà thuốc Long Châu)](https://nhathuoclongchau.com.vn/bai-viet/sua-tam-thao-duoc-cho-be-la-gi-cach-chon-sua-tam.html)
- [Thuốc giả, thực phẩm chức năng giả — nỗi lo vỡ niềm tin (Dân trí)](https://dantri.com.vn/suc-khoe/thuoc-gia-thuc-pham-chuc-nang-gia-noi-lo-vun-vo-niem-tin-20250517113835760.htm)
- [Cảnh báo rủi ro phổ biến với hàng hoá dành cho trẻ em (An ninh Thủ đô)](https://anninhthudo.vn/canh-bao-mot-so-rui-ro-pho-bien-voi-san-pham-hang-hoa-danh-cho-tre-em-post659397.antd)
- [Dị ứng mỹ phẩm ở trẻ sơ sinh — dấu hiệu và xử lý (Kinderhealth)](https://kinderhealth.vn/di-ung-my-pham-tre-so-sinh/)
