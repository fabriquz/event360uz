const {chromium}=require('playwright');const fs=require('fs');
const CL=require('./clips.js');const only=process.argv[2];
const OV=`(()=>{if(document.getElementById('gcur'))return;const s=document.createElement('style');s.textContent='#gcur{position:fixed;z-index:9999;left:700px;top:450px;width:22px;height:22px;pointer-events:none;transition:left .7s cubic-bezier(.4,0,.2,1),top .7s cubic-bezier(.4,0,.2,1)}#gcur svg{width:22px;height:22px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.35))}.grip{position:fixed;z-index:9998;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:3px solid #2b8fb8;pointer-events:none;animation:grip .6s ease-out forwards}@keyframes grip{from{transform:scale(.3);opacity:1}to{transform:scale(1.5);opacity:0}}#gcap{position:fixed;z-index:9997;left:50%;bottom:22px;transform:translateX(-50%);max-width:900px;background:rgba(11,37,69,.94);color:#fff;font:600 19px/1.4 "Plus Jakarta Sans",system-ui,sans-serif;padding:12px 20px 12px 14px;border-radius:12px;display:flex;gap:12px;align-items:center;box-shadow:0 8px 24px rgba(11,37,69,.3)}#gcap i{font-style:normal;background:#2b8fb8;border-radius:8px;min-width:30px;height:30px;display:grid;place-items:center;font-size:15px}#gtitle{position:fixed;inset:0;z-index:10000;background:linear-gradient(160deg,#fff,#e6f2f8);display:grid;place-items:center;font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:#0b2545;transition:opacity .4s}#gtitle div{text-align:center}#gtitle small{display:inline-block;background:#2b8fb8;color:#fff;border-radius:99px;padding:5px 14px;font-weight:700;font-size:16px}#gtitle h1{font-size:46px;margin:14px 0 6px}#gtitle p{color:#5b6b7d;font-size:18px;margin:0}';document.head.appendChild(s);const c=document.createElement('div');c.id='gcur';c.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 2l16 10-7 1.5 4 7.5-3 1.5-4-7.5L4 20z" fill="#0b2545" stroke="#fff" stroke-width="1.5"/></svg>';document.body.appendChild(c)})()`;
(async()=>{const b=await chromium.launch();fs.mkdirSync('raw',{recursive:true});
for(const [r,role,title,steps] of CL){if(only&&only!==r)continue;
 const ctx=await b.newContext({viewport:{width:1280,height:800},recordVideo:{dir:'raw/'+r,size:{width:1280,height:800}}});
 await ctx.addInitScript(([role])=>{try{localStorage.setItem('e360uz-r',role);localStorage.setItem('e360uz-l','tr')}catch(e){}},[role]);
 const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
 const RN=require('./roles.json');
 await p.goto('file://'+process.cwd()+'/full.html#'+r);await p.waitForTimeout(400);
 await p.evaluate(OV);
 await p.evaluate(([t,rn])=>{const d=document.createElement('div');d.id='gtitle';d.innerHTML='<div><small>'+rn+'</small><h1>'+t+'</h1><p>event360 UZ · kullanım rehberi</p></div>';document.body.appendChild(d)},[title,RN[role]]);
 await p.waitForTimeout(1700);await p.evaluate(()=>{const g=document.getElementById('gtitle');g.style.opacity=0;setTimeout(()=>g.remove(),400)});await p.waitForTimeout(500);
 let i=0;for(const [cap,a] of steps){i++;
  await p.evaluate(OV);
  await p.evaluate(([i,cap])=>{let g=document.getElementById('gcap');if(!g){g=document.createElement('div');g.id='gcap';document.body.appendChild(g)}g.innerHTML='<i>'+i+'</i><span>'+cap+'</span>'},[i,cap]);
  await p.waitForTimeout(900);
  try{
  if(a.w)await p.waitForTimeout(a.w);
  if(a.s){await p.evaluate(y=>window.scrollTo({top:y,behavior:'smooth'}),a.s);await p.waitForTimeout(1800)}
  if(a.dd){const btn=p.locator('.dd:has(select'+a.dd[0]+') .dd-b').first();await btn.scrollIntoViewIfNeeded({timeout:3000});await p.waitForTimeout(400);
   const mv=async l=>{const bb=await l.boundingBox();if(!bb)return;const x=bb.x+Math.min(bb.width/2,60),y=bb.y+bb.height/2;await p.evaluate(([x,y])=>{const c=document.getElementById('gcur');c.style.left=x+'px';c.style.top=y+'px'},[x,y]);await p.waitForTimeout(850);await p.evaluate(([x,y])=>{const r=document.createElement('div');r.className='grip';r.style.left=x+'px';r.style.top=y+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),700)},[x,y])};
   await mv(btn);await btn.click();await p.waitForTimeout(700);const o=p.locator('.dd-o',{hasText:a.dd[1]}).first();await mv(o);await o.click();await p.waitForTimeout(1500)}
  const sel=a.c||a.h||(a.sel&&a.sel[0]);
  if(sel){const l=p.locator(sel).first();await l.scrollIntoViewIfNeeded({timeout:3000});await p.waitForTimeout(500);const bb=await l.boundingBox();
   if(bb){const x=bb.x+Math.min(bb.width/2,60),y=bb.y+bb.height/2;await p.evaluate(([x,y])=>{const c=document.getElementById('gcur');c.style.left=x+'px';c.style.top=y+'px'},[x,y]);await p.waitForTimeout(900);
    await p.evaluate(([x,y])=>{const r=document.createElement('div');r.className='grip';r.style.left=x+'px';r.style.top=y+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),700)},[x,y]);}
   if(a.c){const tag=await l.evaluate(e=>e.tagName+(e.type||''));if(tag==='INPUTrange'){await l.evaluate(e=>{e.value=Math.min(+e.max||60,+e.value+8);e.dispatchEvent(new Event('input',{bubbles:true}))})}else await l.click({timeout:3000})}
   else if(a.sel)await l.selectOption(a.sel[1]);
   await p.waitForTimeout(1600)}
  }catch(e){errs.push('STEP '+i+': '+e.message.split('\n')[0])}
  await p.evaluate(OV);
 }
 await p.waitForTimeout(1200);
 const v=p.video();await ctx.close();const src=await v.path();fs.renameSync(src,'raw/'+r+'.webm');fs.rmSync('raw/'+r,{recursive:true,force:true});
 console.log(r,errs.length?errs:'ok');
}
await b.close()})();
