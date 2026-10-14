# Ghép chữ thân thư mới lên form thiệp. Chạy theo thứ tự:
#   python3 nen.py "../Form thiep 10 nam (Nhi gui).webp" nen.png   (xoá thân thư cũ, lấp nền)
#   node dungchu.js 1625                                           (dựng lớp chữ chu.png)
#   python3 ghep.py
from PIL import Image
nen=Image.open('nen.png').convert('RGBA')
chu=Image.open('chu.png').convert('RGBA').resize(nen.size,Image.LANCZOS)
nen.alpha_composite(chu); nen.convert('RGB').save('../Thu cam on 10 nam - Thiep 10 nam (form moi).png')
