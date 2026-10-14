# Ghép chữ thân thư + khối ký lên form thiệp. Chạy theo thứ tự:
#   python3 nen.py "../Form thiep 10 nam (Nhi gui).webp" nen.png   (xoá thân thư cũ + dòng "Trân trọng cảm ơn !", lấp nền)
#   node dungchu.js 1868                                           (dựng lớp chữ chu.png, tự chọn cỡ chữ)
#   python3 ghep.py
# tran.png = chữ "Trân trọng cảm ơn !" tách từ form gốc; dau-chu-ky.png = dấu + chữ ký tách từ ảnh thư gốc
from PIL import Image
nen=Image.open('nen.png').convert('RGBA')
chu=Image.open('chu.png').convert('RGBA').resize(nen.size,Image.LANCZOS)
nen.alpha_composite(chu); nen.convert('RGB').save('../Thu cam on 10 nam - Thiep 10 nam (ban cuoi).png')
