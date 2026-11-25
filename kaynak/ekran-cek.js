const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
const html=require('fs').readFileSync(process.argv[2],'utf8');
const full='<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>'+html+'</body></html>';
require('fs').writeFileSync('/tmp/claude-0/-home-claude/95f38a9d-b10d-55b8-823f-2f7a9b526e58/scratchpad/uz/full.html',full);
for(const r of process.argv.slice(3)){await p.goto('file:///tmp/claude-0/-home-claude/95f38a9d-b10d-55b8-823f-2f7a9b526e58/scratchpad/uz/full.html#'+r);await p.waitForTimeout(700);await p.screenshot({path:'shot-'+r+'.png'})}
console.log('errs',errs);await b.close()})();
