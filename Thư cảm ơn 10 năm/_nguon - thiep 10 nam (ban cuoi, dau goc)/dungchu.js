// Dựng lớp chữ (nền trong suốt): tự chọn cỡ chữ thân thư lớn nhất sao cho
// thân thư + hàng "Trân trọng cảm ơn !"/khối ký vừa trên dòng "Công ty TNHH Dược Khoa Xanh". Sau đó: python3 ghep.py
const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const p=await b.newPage({viewport:{width:1429,height:2000},deviceScaleFactor:2});
 await p.goto('file://'+__dirname+'/chu.html'); await p.evaluate(()=>document.fonts.ready);
 const DAY=+process.argv[2]||1808, KC=26; let kq=null;
 for(let fs=40;fs>=22;fs-=0.5){
  kq=await p.evaluate(([fs,KC])=>{
   const t=document.getElementById('t'),ky=document.getElementById('ky'),tr=document.getElementById('tran');
   t.style.setProperty('--fs',fs+'px');
   const bot=t.getBoundingClientRect().bottom;
   ky.style.top=(bot+KC)+'px'; tr.style.top=(bot+KC+6)+'px';
   return {fs,bot,kyBot:ky.getBoundingClientRect().bottom};
  },[fs,KC]);
  if(kq.kyBot<=DAY) break;
 }
 console.log(kq);
 await p.screenshot({path:'chu.png',omitBackground:true});
 await b.close();
})();
