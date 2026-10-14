from PIL import Image
src=Image.open('../Anh goc (Nhi gui).webp').convert('RGB'); out=src.copy(); o=out.load()
def band(y0,y1,x,k=8):
    ps=[src.getpixel((xx,yy)) for xx in range(max(96,x-k),min(935,x+k+1)) for yy in range(y0,y1)]
    ps=[p for p in ps if sum(p)>720] or ps
    return tuple(sorted(c)[len(c)//2] for c in zip(*ps))
A,B=505,1013
for x in range(96,935):
    a=band(502,508,x); b=band(1010,1016,x)
    for y in range(A,B+1):
        t=(y-A)/(B-A); o[x,y]=tuple(round(a[i]*(1-t)+b[i]*t) for i in range(3))
ov=Image.open('overlay.png').convert('RGBA').resize((1024,1536),Image.LANCZOS)
out=out.convert('RGBA'); out.alpha_composite(ov); out.convert('RGB').save('../Thu cam on 10 nam - Ban goc bo sung.png')

