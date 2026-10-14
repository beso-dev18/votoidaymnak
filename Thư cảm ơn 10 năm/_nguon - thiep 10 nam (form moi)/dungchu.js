// Dựng lớp chữ thân thư (nền trong suốt), tự chọn cỡ chữ lớn nhất vừa khung. Sau đó: python3 ghep.py
const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const p=await b.newPage({viewport:{width:1429,height:2000},deviceScaleFactor:2});
 await p.goto('file://'+__dirname+'/chu.html'); await p.evaluate(()=>document.fonts.ready);
 const LIM=+process.argv[2]||1630; let best=null;
 for(let fs=46;fs>=24;fs-=0.5){
  const bot=await p.evaluate(fs=>{const t=document.getElementById('t');t.style.setProperty('--fs',fs+'px');return t.getBoundingClientRect().bottom},fs);
  if(bot<=LIM){best=[fs,bot];break}
 }
 // căn giữa khối chữ theo chiều dọc trong vùng 735–LIM
 await p.evaluate(([lim,bot])=>{const t=document.getElementById('t');const top=t.getBoundingClientRect().top;t.style.top=(top+(lim-bot)/2)+'px'},[LIM,best[1]]);
 console.log('cỡ chữ, đáy khối chữ:',best);
 await p.screenshot({path:'chu.png',omitBackground:true});
 await b.close();
})();
