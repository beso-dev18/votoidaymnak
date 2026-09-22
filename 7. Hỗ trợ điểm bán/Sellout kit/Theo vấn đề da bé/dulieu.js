// Dữ liệu sell-out kit theo vấn đề da bé.
// Giá: Danh mục sản phẩm/Báo giá sản phẩm OTC tất cả sp.docx (01/04/2025)
// Thành phần + cơ chế: Danh mục sản phẩm/Phân tích công dụng/Phân tích công dụng sản phẩm.docx
// KHÔNG tự thêm thành phần, cơ chế hay công dụng nào ngoài 2 file trên.

const SP = {
  tamgoi: { ten: 'Tắm gội thảo dược Elemis', qc: '200 / 350 / 500ml', gia: '150.000 / 210.000 / 275.000đ', tuoi: 'Từ sơ sinh' },
  gold:   { ten: 'Gel tắm gội Elemis Gold',  qc: '220ml', gia: '220.000đ', tuoi: 'Bé từ 6 tháng' },
  kem:    { ten: 'Kem bôi da Elemis',        qc: 'Tuýp 30g', gia: '115.000đ', tuoi: 'Từ sơ sinh' },
  dau:    { ten: 'Dầu massage Oriky',        qc: 'Chai 60ml', gia: '135.000đ', tuoi: 'Từ sơ sinh' },
  xit:    { ten: 'Xịt muỗi thảo dược Elemis',qc: '50 / 120ml', gia: '90.000 / 195.000đ', tuoi: 'Bé trên 3 tháng' },
  bot:    { ten: 'Bọt rửa tay Elemis',       qc: 'Chai 250ml', gia: '245.000đ', tuoi: 'Bé từ 6 tháng' },
  gac:    { ten: 'Gạc rơ lưỡi Elemis',       qc: 'Hộp 30 gói', gia: '115.000đ', tuoi: 'Từ sơ sinh' },
};

const VANDE = [
  {
    "id": "ham-da",
    "cachDung": "Tắm gội: pha 5ml : 5 lít nước 36–37°C, mở các nếp gấp ra rửa kỹ rồi <b>lau thật khô</b> trước khi mặc đồ hoặc đóng tã. Vệ sinh khi thay tã: pha 2ml : 2 lít, đặc biệt khi bé đi nặng. Kem bôi: thoa lớp mỏng lên vùng đã lau khô — vùng tã thì thoa <b>mỗi lần thay tã</b> kể cả khi da chưa đỏ, vùng ngấn thì ngày 2–3 lần.",
    "ten": "HĂM DA (VÙNG TÃ VÀ CÁC NẾP GẤP)",
    "phu": "Đỏ, rát ở vùng mặc tã do nước tiểu và phân, hoặc trong ngấn cổ, nách, bẹn do mồ hôi đọng và da cọ vào nhau",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Papain (đu đủ), acid citric (chanh)",
                "Vùng tã và nếp gấp là chỗ đọng mồ hôi, tế bào chết nhiều nhất. Papain cắt liên kết giữ tế bào chết trên bề mặt da → bong nhẹ nhàng, không phải chà xát vào vùng da đang đỏ; acid citric làm sạch nhẹ vảy trên da."
              ],
              [
                "EGCG (chè xanh), citral (sả chanh), elsholtzia ketone (kinh giới), cineol (tràm gió)",
                "EGCG và citral ức chế vi khuẩn thường trú; elsholtzia ketone và cineol phá màng tế bào vi khuẩn khi tiếp xúc trực tiếp — vùng hăm đang tổn thương, lại ẩm và kín, nên vi khuẩn phát triển mạnh hơn da lành."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Kẽm oxyd nano 2%",
                "Hạt kẽm oxyd cỡ nano phân tán đều rồi liên kết thành lớp màng mỏng phủ kín da. Ở vùng tã, màng này ngăn nước tiểu, phân, hơi ẩm tiếp xúc trực tiếp với da; ở nếp gấp, màng vừa chắn hơi ẩm vừa giảm ma sát giữa hai mặt da áp vào nhau. Bôi ngay khi thay tã, kể cả khi da chưa đỏ, để phòng ngừa."
              ],
              [
                "Asiaticoside, acid asiatic (rau má)",
                "Da kích ứng tiết chất gây viêm làm mạch máu giãn (đỏ) và thần kinh nhạy (rát); 2 hoạt chất này giảm lượng chất gây viêm tiết ra → bớt đỏ, bớt rát sau khi thoa."
              ],
              [
                "Cineol, long não (tinh dầu ngải cứu)",
                "Bay hơi trên da tạo cảm giác mát, đồng thời ức chế vi khuẩn tại vùng da đang tổn thương."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Aquaxyl (xylitylglucoside + anhydroxylitol)",
                "Xylitylglucoside kích thích da tự sản xuất glycosaminoglycan — chất giữ nước tự nhiên; anhydroxylitol củng cố hàng rào lớp ngoài cùng để nước khó thoát → da tự giữ ẩm từ bên trong. Da nếp gấp vừa ẩm ướt bề mặt vừa thiếu ẩm trong cấu trúc nên rất dễ nứt khi cọ xát."
              ]
            ]
          },
          {
            "k": "tamgoi",
            "tp": [
              [
                "Chlorophyllin (diệp lục tố), EGCG (chè xanh)",
                "Trung hoà gốc tự do trên bề mặt da; chlorophyllin còn hút mùi mồ hôi — giảm mùi hôi đọng ở ngấn cổ, nách."
              ]
            ]
          },
          {
            "k": "dau",
            "tp": [
              [
                "Acid oleic (hạnh nhân), acid linoleic (hạt nho), squalene (cám gạo)",
                "Là các acid béo cùng loại với lớp lipid tự nhiên của da → lấp vào chỗ hàng rào lipid bị thiếu hụt, khoá nước lại trong da."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "tamgoi",
      "kem"
    ],
    "boThem": [
      "dau"
    ],
    "kham": "Da đã trợt, chảy dịch, có mụn mủ, có mùi hôi rõ hoặc lan rộng nhanh → khuyên mẹ đưa bé đi khám trước, dùng sản phẩm duy trì sau."
  },
  {
    "id": "rom-man-mun",
    "cachDung": "Tắm gội: pha 5ml : 5 lít nước 36–37°C, không tráng lại. Chỗ rôm hoặc mụn nhọt nhiều: xoa trực tiếp Elemis lên vùng da đó <b>1–2 phút</b> rồi mới tắm bé trong nước đã pha. Kem bôi: thoa lớp mỏng 2–3 lần/ngày lên nốt đã nổi. Elemis Gold: ⏳ chưa có hướng dẫn pha trên tài liệu gốc.",
    "ten": "RÔM SẢY, MẨN NGỨA, MỤN NHỌT",
    "phu": "Nổi hột đỏ li ti ở cổ, lưng, trán · nổi mẩn từng đám gây ngứa · nốt mụn sưng đỏ có đầu mủ nhỏ. Ba tình trạng này nối tiếp nhau: lỗ chân lông bí → nổi nốt → nhiễm khuẩn thành mụn nhọt",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Papain (đu đủ), acid citric (chanh)",
                "Gốc của rôm sảy là bụi và tế bào chết bít miệng lỗ thoát mồ hôi, cũng là chỗ vi khuẩn phát triển thành mụn nhọt. Nước ấm và thao tác tắm làm mềm lớp bít đó; papain cắt liên kết giữ tế bào chết → bong nhẹ, lỗ chân lông thông thoáng trở lại."
              ],
              [
                "Dịch chiết thảo dược dạng nước, linalool (tinh dầu mùi)",
                "Dịch chiết dạng nước không kéo lipid tự nhiên khỏi da như xà phòng kiềm → da đang mẩn ngứa không khô ráp thêm sau tắm; linalool làm dịu da."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Wedelolactone (sài đất)",
                "Làm giảm phản ứng viêm tại chỗ → mạch máu bớt giãn, nốt bớt đỏ, bớt ngứa."
              ],
              [
                "EGCG (chè xanh), citral (sả chanh), elsholtzia ketone (kinh giới), cineol (tràm gió), momordicin (khổ qua)",
                "EGCG và citral ức chế vi khuẩn thường trú (tụ cầu); elsholtzia ketone và cineol phá màng tế bào vi khuẩn khi tiếp xúc trực tiếp; momordicin bổ sung kháng khuẩn <b>để nốt rôm không nhiễm khuẩn thành mụn nhọt</b>."
              ]
            ]
          },
          {
            "k": "gold",
            "tp": [
              [
                "Acid chlorogenic, luteolin (kim ngân)",
                "Ức chế chất gây viêm → nốt mẩn bớt đỏ, bớt ngứa. Đây là hoạt chất <b>chỉ bản Gold mới có</b> — hướng khách sang Gold khi bé mẩn ngứa nhiều hoặc da nhạy cảm."
              ]
            ]
          },
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside, acid asiatic (rau má)",
                "Với nốt đã nổi: giảm chất gây viêm tiết ra → nốt bớt đỏ, bé bớt rát."
              ],
              [
                "Cineol, long não (tinh dầu ngải cứu)",
                "Bay hơi tạo cảm giác mát, đồng thời ức chế vi khuẩn tại vùng da đang tổn thương — hỗ trợ kháng khuẩn, ngừa mụn."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Cineol (tràm gió), citral (sả chanh)",
                "Bay hơi trên bề mặt da tạo cảm giác mát; phần tinh dầu còn lưu lại sau tắm tiếp tục kháng khuẩn trên da trong vài giờ."
              ]
            ]
          },
          {
            "k": "kem",
            "tp": [
              [
                "Aquaxyl",
                "Da khô là yếu tố làm mẩn ngứa nặng thêm và tạo thêm chỗ cho vi khuẩn xâm nhập — Aquaxyl giúp da tự giữ ẩm từ bên trong."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "tamgoi",
      "kem"
    ],
    "boThem": [
      "gold",
      "bot"
    ],
    "kham": "Nốt có mủ, chảy dịch, nhọt sưng to và nóng, nhọt mọc thành cụm, mẩn lan nhanh toàn thân, hoặc bé sốt kèm nổi ban → khuyên đi khám, không tự nặn.",
    "luuY": "Elemis Gold và Bọt rửa tay dành cho <b>bé từ 6 tháng</b>. Bé nhỏ hơn thì dùng bản tắm gội thường và kem bôi da."
  },
  {
    "id": "cham-sua",
    "cachDung": "Tắm gội: pha 5ml : 5 lít nước 36–37°C. Lau mặt cho bé: pha 2ml : 2 lít nước sạch, cách 4–6 giờ lau một lần. Dùng khăn ẩm lau sạch da bé sau khi bú, ăn dặm. Kem bôi: thoa lớp mỏng 2–3 lần/ngày. Dầu massage: ⏳ chưa có hướng dẫn trên tài liệu gốc.",
    "ten": "CHÀM SỮA",
    "phu": "Mảng đỏ khô, bong vảy ở hai má, trán; bé hay cọ mặt",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Dịch chiết thảo dược dạng nước",
                "Da chàm vốn thiếu lipid và rất dễ khô thêm khi tắm. Dịch chiết dạng nước không kéo lipid tự nhiên khỏi da như xà phòng kiềm → tắm xong da không khô ráp thêm."
              ],
              [
                "EGCG (chè xanh), citral (sả chanh)",
                "Ức chế vi khuẩn thường trú trên da — vùng chàm bong trợt dễ nhiễm khuẩn hơn da lành."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside, acid asiatic (rau má)",
                "Giảm lượng chất gây viêm tiết ra → mảng chàm bớt đỏ, bé bớt rát sau khi thoa."
              ],
              [
                "Asiaticoside (rau má)",
                "Kích thích nguyên bào sợi sản xuất collagen và biểu bì sinh tế bào mới → vết nứt, bong tróc được lấp dần, da liền và mịn lại."
              ],
              [
                "Cineol, long não (ngải cứu)",
                "Tạo cảm giác mát, đồng thời ức chế vi khuẩn tại vùng da đang tổn thương."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Aquaxyl",
                "Giúp da tự sản xuất chất giữ nước và củng cố hàng rào ngoài cùng — đây là phần quan trọng nhất với da chàm vì hàng rào da đang yếu."
              ]
            ]
          },
          {
            "k": "dau",
            "tp": [
              [
                "Acid oleic, acid linoleic, squalene, caprylic triglyceride",
                "Các acid béo cùng loại với lipid tự nhiên của da lấp vào chỗ hàng rào lipid thiếu hụt, khoá nước lại trong da; caprylic triglyceride phân tử nhỏ nên thấm nhanh, không nhờn dính."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "tamgoi",
      "kem",
      "dau"
    ],
    "boThem": [],
    "kham": "Chàm rỉ dịch, đóng vảy vàng, lan rộng hoặc bé quấy khóc nhiều → khuyên đi khám. Bé đang dùng thuốc bác sĩ kê thì dùng sản phẩm để duy trì, không thay thuốc."
  },
  {
    "id": "da-kho-gio-nang",
    "cachDung": "Tắm gội: pha 5ml : 5 lít nước 36–37°C, không tráng lại. Kem bôi: thoa lớp mỏng 2–3 lần/ngày, và thoa <b>trước khi cho bé ra ngoài trời gió hanh hoặc nắng</b>. Dầu massage: ⏳ chưa có hướng dẫn trên tài liệu gốc — thông lệ là tắm xong lau khô rồi xoa vài giọt.",
    "ten": "DA KHÔ, NỨT NẺ, ĐỎ RÁT DO GIÓ VÀ NẮNG",
    "phu": "Da khô ráp, bong vảy, có chỗ nứt; hoặc má và vùng da hở đỏ ửng, rát, căng khô sau khi bé ra ngoài trời",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Dịch chiết thảo dược dạng nước, linalool (tinh dầu mùi)",
                "Đây là bước hay bị làm sai nhất: sữa tắm xà phòng kiềm kéo lipid tự nhiên khỏi da, tắm xong da càng khô và càng rát. Dịch chiết dạng nước không kéo lipid → da không khô ráp thêm; linalool làm dịu da."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside (rau má)",
                "Thấm vào da, kích thích nguyên bào sợi sản xuất collagen nhiều hơn bình thường và biểu bì sinh tế bào mới → vết nứt, bong tróc do gió hoặc nắng được lấp dần, da liền và mịn lại nhanh hơn."
              ],
              [
                "Asiaticoside, acid asiatic (rau má)",
                "Da kích ứng tiết chất gây viêm làm mạch máu giãn (đỏ) và thần kinh nhạy (rát); 2 hoạt chất này giảm lượng chất gây viêm tiết ra → bớt đỏ, bớt rát trong thời gian ngắn sau khi thoa."
              ],
              [
                "Cineol, long não (tinh dầu ngải cứu)",
                "Bay hơi trên da tạo cảm giác mát, làm dịu cảm giác rát."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "dau",
            "tp": [
              [
                "Acid oleic (hạnh nhân), acid linoleic (hạt nho), squalene (cám gạo), caprylic triglyceride",
                "Acid oleic và linoleic cùng loại với lipid tự nhiên của da, lấp vào chỗ hàng rào lipid thiếu hụt và khoá nước lại trong da; squalene là chất béo vốn có trong bã nhờn, bổ sung lớp khoá ẩm; caprylic triglyceride thấm nhanh, không nhờn dính."
              ],
              [
                "Gamma-oryzanol (dầu cám gạo), vitamin E",
                "Trung hoà gốc tự do sinh ra khi da tiếp xúc nắng, ô nhiễm → hạn chế lipid trên da bị oxy hoá, da không khô sạm."
              ]
            ]
          },
          {
            "k": "kem",
            "tp": [
              [
                "Kẽm oxyd nano 2%, Aquaxyl",
                "Kẽm oxyd tạo lớp màng mỏng phủ da, ngăn tác nhân bên ngoài tiếp xúc trực tiếp; Aquaxyl giúp da tự giữ ẩm từ bên trong theo cơ chế hút ẩm – giữ ẩm – khoá ẩm, không phải chỉ ẩm bề mặt rồi bay hơi."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "tamgoi",
      "dau"
    ],
    "boThem": [
      "kem"
    ],
    "kham": "Da nứt sâu chảy máu, phồng rộp, nổi bọng nước, hoặc bé sốt sau khi phơi nắng lâu → khuyên đi khám.",
    "luuY": "Sản phẩm <b>chưa được kiểm nghiệm và công bố chỉ số chống nắng (SPF/PA)</b> — không giới thiệu là kem chống nắng."
  },
  {
    "id": "muoi-dot",
    "cachDung": "Xịt muỗi: xịt lên quần áo và vùng da hở, tránh mặt và bàn tay bé; <b>xịt lại sau 2–3 giờ</b> vì tinh dầu tự nhiên bay hơi dần. Kem bôi: thoa lớp mỏng lên nốt đã đốt.",
    "ten": "MUỖI ĐỐT, CÔN TRÙNG CẮN",
    "phu": "Nốt sưng đỏ, ngứa; bé gãi trầy da",
    "buoc": [
      {
        "ten": "PHÒNG TỪ ĐẦU",
        "sp": [
          {
            "k": "xit",
            "tp": [
              [
                "Citronellal, geraniol (sả Java); citral, limonene (sả chanh); citronellal (bạch đàn chanh)",
                "Bay hơi liên tục khỏi da, tạo lớp mùi tác động lên thụ thể khứu giác của muỗi → muỗi mất khả năng định vị mùi cơ thể người và tránh xa vùng da xịt. Tinh dầu tự nhiên bay hơi dần nên xịt lại sau 2–3 giờ."
              ],
              [
                "Acid benzoic, benzyl benzoat (an tức hương); vanillin",
                "Bay hơi chậm, “neo” các tinh dầu nhẹ lại trên da lâu hơn — kéo dài thời gian xua muỗi."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "xit",
            "tp": [
              [
                "Tinh dầu bạch đàn chanh; ethanol; citronellal, citral",
                "Bạch đàn chanh làm dịu da, giảm khó chịu tại vết đốt; ethanol bay hơi lấy nhiệt khỏi da tạo cảm giác mát tức thì; citronellal và citral kháng khuẩn nhẹ, hạn chế vết đốt nhiễm khuẩn khi bé gãi."
              ]
            ]
          },
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside, acid asiatic (rau má)",
                "Nốt đốt sưng đỏ là phản ứng viêm — 2 hoạt chất này giảm chất gây viêm tiết ra → nốt bớt đỏ, bớt rát."
              ],
              [
                "Cineol, long não (ngải cứu)",
                "Tạo cảm giác mát và ức chế vi khuẩn tại chỗ da bé đã gãi trầy."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside (rau má)",
                "Kích thích da sinh tế bào mới, giúp vết gãi trầy liền lại; cùng cơ chế này giúp mô sẹo mới hình thành phẳng và đều màu hơn."
              ]
            ]
          },
          {
            "k": "tamgoi",
            "tp": [
              [
                "Citral (sả chanh)",
                "Citral còn lưu trên da sau tắm tiếp tục bay hơi, tạo lớp mùi khiến muỗi tránh vùng da đó — cùng cơ chế với xịt muỗi nhưng lượng lưu lại ít hơn nên chỉ ở mức hỗ trợ."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "xit",
      "kem"
    ],
    "boThem": [
      "tamgoi"
    ],
    "kham": "Nốt đốt sưng to bất thường, lan rộng, có mủ, hoặc bé sốt → khuyên đi khám.",
    "luuY": "Xịt muỗi dùng cho <b>bé trên 3 tháng</b>. Bé nhỏ hơn thì dùng màn và quần áo dài."
  },
  {
    "id": "cut-trau",
    "cachDung": "Dầu massage: ⏳ chưa có hướng dẫn trên tài liệu gốc — thông lệ là xoa dầu lên vùng vảy, để một lúc cho vảy mềm rồi gội. Tắm gội: pha 5ml : 5 lít để gội, không chà xát hay cạy vảy.",
    "ten": "CỨT TRÂU (VẢY DA ĐẦU)",
    "phu": "Mảng vảy vàng, cứng bám trên da đầu bé",
    "buoc": [
      {
        "ten": "LÀM MỀM VẢY",
        "sp": [
          {
            "k": "dau",
            "tp": [
              [
                "Hỗn hợp dầu thực vật (cám gạo, hạnh nhân, hạt nho, caprylic triglyceride)",
                "Dầu ngấm vào lớp vảy sừng khô, làm mềm và tách chúng khỏi da đầu để lau hoặc gội trôi đi nhẹ nhàng — không cần cạy, tránh làm tổn thương da đầu bé."
              ]
            ]
          }
        ]
      },
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Papain (đu đủ), acid citric (chanh)",
                "Papain cắt liên kết giữ tế bào chết trên bề mặt da → phần vảy đã được dầu làm mềm bong ra nhẹ nhàng khi gội, không cần chà xát."
              ],
              [
                "EGCG (chè xanh), citral (sả chanh)",
                "Ức chế vi khuẩn thường trú trên da đầu sau khi lớp vảy đã bong."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "dau",
            "tp": [
              [
                "Acid oleic, acid linoleic, squalene",
                "Bổ sung lại lipid cho da đầu sau khi bong vảy, giữ da mềm để vảy không đóng lại dày như cũ."
              ]
            ]
          },
          {
            "k": "tamgoi",
            "tp": [
              [
                "Cineol (tràm gió), citral (sả chanh)",
                "Phần tinh dầu còn lưu lại sau khi gội tiếp tục kháng khuẩn nhẹ trên da đầu."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "dau",
      "tamgoi"
    ],
    "boThem": [],
    "kham": "Da đầu dưới vảy đỏ rực, rỉ dịch, có mùi, hoặc lan xuống mặt và người → khuyên đi khám."
  },
  {
    "id": "seo-tham",
    "cachDung": "Kem bôi: thoa lớp mỏng lên vùng da đã lành, ngày 2–3 lần, dùng đều trong thời gian dài. <b>Chỉ thoa khi da đã liền</b>, không thoa lên vết thương hở hay đang chảy dịch.",
    "ten": "VẾT THÂM, SẸO MỚI SAU KHI DA ĐÃ LÀNH",
    "phu": "Da đã liền nhưng còn vết thâm, sẹo mới sau rôm sảy, muỗi đốt, trầy xước",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "tamgoi",
            "tp": [
              [
                "Dịch chiết thảo dược dạng nước",
                "Vùng da non mới liền rất dễ khô và bong. Dịch chiết dạng nước không kéo lipid tự nhiên khỏi da → da non không khô ráp sau tắm."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside (rau má)",
                "Thấm vào da, kích thích nguyên bào sợi sản xuất collagen nhiều hơn bình thường và biểu bì sinh tế bào mới. Chính cơ chế này giúp <b>mô sẹo mới hình thành phẳng và đều màu hơn</b> — nên đây là hỗ trợ làm mờ sẹo, hiệu quả rõ nhất với sẹo còn mới."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "kem",
            "tp": [
              [
                "Aquaxyl",
                "Da đủ ẩm thì quá trình tái tạo diễn ra thuận lợi hơn; Aquaxyl giúp da tự sản xuất chất giữ nước và củng cố hàng rào ngoài cùng."
              ]
            ]
          },
          {
            "k": "dau",
            "tp": [
              [
                "Acid oleic, acid linoleic, squalene; gamma-oryzanol, vitamin E",
                "Acid béo lấp vào hàng rào lipid còn yếu của vùng da non; gamma-oryzanol và vitamin E trung hoà gốc tự do — vùng da non tiếp xúc nắng dễ thâm hơn da lành."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "kem"
    ],
    "boThem": [
      "dau",
      "tamgoi"
    ],
    "kham": "Sẹo lồi, sẹo co kéo, hoặc sẹo do bỏng sâu → khuyên đi khám chuyên khoa da liễu, sản phẩm không xử lý được nhóm này.",
    "luuY": "Chỉ nói <b>“hỗ trợ làm mờ sẹo”</b> theo đúng tài liệu gốc — <b>không hứa hết sẹo, không hứa số ngày</b>."
  },
  {
    "id": "tay-kho",
    "cachDung": "Bọt rửa tay: ⏳ chưa có hướng dẫn trên tài liệu gốc — dạng bọt nên bé tự bơm tự rửa được. Kem bôi: thoa lớp mỏng lên mu bàn tay sau khi rửa, nhất là trước khi đi ngủ.",
    "ten": "DA TAY KHÔ RÁT DO RỬA TAY NHIỀU",
    "phu": "Bé đi lớp rửa tay nhiều lần trong ngày, mu bàn tay khô ráp, đỏ, nứt",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "bot",
            "tp": [
              [
                "Cocamidopropyl betaine (Dehyton — chất tạo bọt gốc dầu dừa)",
                "Có đầu ưa nước và đuôi ưa dầu → đuôi bám vào dầu mỡ, bụi bẩn và vi khuẩn trên tay, đầu kéo chúng tan vào nước và trôi đi khi xả. Dịu hơn xà phòng nên không lấy đi quá nhiều lipid của da tay bé."
              ],
              [
                "Citral (tinh dầu sả chanh), EGCG (trà xanh)",
                "Tiếp xúc với vi khuẩn còn lại trên da tay, phá màng tế bào hoặc ức chế phát triển."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "bot",
            "tp": [
              [
                "Acemannan (lô hội), bisabolol (cúc la mã)",
                "Acemannan làm dịu; bisabolol giảm viêm nhẹ → tay bé rửa nhiều lần trong ngày không bị rát đỏ."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "bot",
            "tp": [
              [
                "Glycerin, Aquaxyl, acemannan (lô hội)",
                "Bộ dưỡng ẩm kép: glycerin hút ẩm từ không khí giữ trên bề mặt da; Aquaxyl giúp da tự giữ nước từ bên trong; acemannan tạo lớp gel mỏng giữ nước — nên rửa xong tay không khô như dùng xà phòng."
              ]
            ]
          },
          {
            "k": "kem",
            "tp": [
              [
                "Asiaticoside (rau má), Aquaxyl",
                "Với mu bàn tay đã nứt: rau má kích thích da sinh tế bào mới lấp vết nứt; Aquaxyl dưỡng ẩm sâu giữ da mềm."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "bot"
    ],
    "boThem": [
      "kem"
    ],
    "kham": "Tay nứt sâu chảy máu, hoặc nổi mụn nước ngứa nhiều → khuyên đi khám.",
    "luuY": "Bọt rửa tay dành cho <b>bé từ 6 tháng</b>."
  },
  {
    "id": "tua-luoi",
    "cachDung": "Gạc rơ lưỡi: rửa tay, xé gói, đeo gạc vào ngón trỏ, lau nhẹ má trong → nướu → lưỡi (từ trong ra ngoài). Rơ <b>1–2 lần/ngày, sau bú 30 phút</b>; bé đang tưa thì 3 lần/ngày. <b>Mỗi gói dùng 1 lần</b>, không dùng lại.",
    "ten": "TƯA LƯỠI, NẤM LƯỠI (ngoài da — hay được hỏi cùng lúc)",
    "phu": "Mảng trắng bám trên lưỡi bé, lau nước không ra; bé bú kém, miệng có mùi",
    "buoc": [
      {
        "ten": "LÀM SẠCH",
        "sp": [
          {
            "k": "gac",
            "tp": [
              [
                "Muối ăn (NaCl), glycerin",
                "Muối ăn kết hợp lực lau nhẹ của gạc bóc cặn sữa khỏi niêm mạc — cặn sữa mất đi thì nấm Candida mất nguồn dinh dưỡng; glycerin giữ gạc luôn ẩm để lau không cọ xát làm tổn thương niêm mạc mỏng của bé."
              ]
            ]
          }
        ]
      },
      {
        "ten": "XỬ LÝ VẤN ĐỀ",
        "sp": [
          {
            "k": "gac",
            "tp": [
              [
                "Natri bicarbonate",
                "Cặn sữa lên men làm miệng bé chua (acid) — môi trường nấm Candida ưa thích; natri bicarbonate trung hoà acid này, khoang miệng bớt chua → nấm khó phát triển tiếp."
              ],
              [
                "Allicin, diallyl disulfide (hẹ); EGCG (chè xanh); acid boric; flavonoid, tannin, saponin (rau ngót)",
                "Allicin và diallyl disulfide ức chế vi khuẩn và nấm; EGCG kìm vi khuẩn gây viêm nướu; acid boric kìm hãm nấm và vi khuẩn còn sót; nhóm flavonoid – tannin – saponin của rau ngót ức chế vi khuẩn, có tính thanh nhiệt, được dùng rơ lưỡi phòng tưa cho trẻ."
              ]
            ]
          }
        ]
      },
      {
        "ten": "NUÔI DƯỠNG & BẢO VỆ",
        "sp": [
          {
            "k": "gac",
            "tp": [
              [
                "Xylitol",
                "Vi khuẩn gây sâu răng (Streptococcus mutans) ăn đường và thải ra acid ăn mòn men răng; xylitol là “đường” mà vi khuẩn này không lên men được → không sinh acid, mảng bám khó hình thành thêm, miệng bớt hôi."
              ],
              [
                "Bisabolol, apigenin (cúc la mã — chỉ có ở bản không mùi)",
                "Làm dịu niêm mạc đang sưng; thao tác lau nhẹ nướu cũng tạo cảm giác dễ chịu cho bé khi mọc răng."
              ]
            ]
          }
        ]
      }
    ],
    "bo": [
      "gac"
    ],
    "boThem": [],
    "kham": "Mảng trắng dày lau không ra, bé bỏ bú hoàn toàn, sốt hoặc quấy nhiều → khuyên mẹ đưa bé đi khám.",
    "luuY": "Đây <b>không phải vấn đề ngoài da</b>, nhưng mẹ rất hay hỏi cùng lúc với các vấn đề da nên đưa vào kit. Bản <b>hương dưa lưới</b> bé dễ hợp tác hơn; bản <b>không mùi</b> cho bé nhạy mùi hay ọe, và có thêm cúc la mã làm dịu nướu."
  }
];

module.exports = { SP, VANDE };
