// Dựng lớp chữ thân thư (nền trong suốt), tự chọn cỡ chữ lớn nhất vừa khung; sau đó chạy: python3 ghep.py
const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const p=await b.newPage({viewport:{width:1024,height:1536},deviceScaleFactor:2});
 await p.goto('file://'+__dirname+'/overlay.html'); await p.evaluate(()=>document.fonts.ready);
 const LIM=+process.argv[2]||1008; let best=null;
 for(let fs=31;fs>=20;fs-=0.5){
  const bot=await p.evaluate(fs=>{const t=document.getElementById('t');t.style.setProperty('--fs',fs+'px');t.style.setProperty('--tw',Math.round(810*fs/31*1.0)+'px');return t.getBoundingClientRect().bottom},fs);
  if(bot<=LIM){best=[fs,bot];break}
 }
 console.log('fs,bottom',best);
 await p.screenshot({path:'overlay.png',omitBackground:true});
 await b.close();
})();
