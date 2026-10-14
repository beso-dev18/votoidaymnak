# Xoá thân thư cũ trên ảnh thiệp, lấp nền bằng nội suy từ các khe trống giữa dòng chữ
import sys, numpy as np
from PIL import Image, ImageFilter
src, dst = sys.argv[1], sys.argv[2]
a=np.asarray(Image.open(src).convert('RGB')).astype(float)
def lap(y0,y1,x0,x1):
    global a
    sub=a[y0:y1,x0:x1]
    mask=(sub.sum(2)<700)
    m=Image.fromarray((mask*255).astype('uint8')).filter(ImageFilter.MaxFilter(13))
    known=(np.asarray(m)==0).astype(float)
    def box1(x,r,ax):
        c=np.cumsum(np.pad(x,[(r+1,r) if i==ax else (0,0) for i in range(x.ndim)],mode='edge'),axis=ax)
        n=x.shape[ax]
        hi=np.take(c,np.arange(2*r+1,2*r+1+n),axis=ax); lo=np.take(c,np.arange(0,n),axis=ax)
        return (hi-lo)/(2*r+1)
    def blur(x,r):
        for _ in range(3):
            x=box1(box1(x,r,0),r,1)
        return x
    res=sub.copy()
    for r in [6,14,30]:
        w=blur(known,r)
        for c in range(3):
            v=blur(res[:,:,c]*known,r)
            fill=v/np.maximum(w,1e-6)
            res[:,:,c]=np.where(known>0,res[:,:,c],np.where(w>0.01,fill,res[:,:,c]))
        known=np.maximum(known,(w>0.01).astype(float))
    # làm mượt nhẹ vùng đã lấp để không lộ vệt
    sm=np.stack([blur(res[:,:,c],3) for c in range(3)],2)
    orig_known=(np.asarray(m)==0)[:,:,None]
    res=np.where(orig_known,res,sm)
    a[y0:y1,x0:x1]=res
lap(735,1650,150,1280)   # thân thư cũ
lap(1660,1760,450,980)   # dòng 'Trân trọng cảm ơn !' (sẽ đặt lại sang trái)
lap(1808,1905,350,1080)  # dòng 'Công ty TNHH Dược Khoa Xanh' cuối thiệp (bỏ)
Image.fromarray(np.clip(a,0,255).round().astype('uint8')).save(dst)
