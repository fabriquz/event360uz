# Kullanım rehberi yaması: prototipe "Kullanım rehberi" menüsü + üst çubukta ? butonu ekler.
# Kullanım: python3 -I yardim-yamasi.py <uz.src.html> [SÜRÜM]   (SÜRÜM ör. UZ-v11; verilmezse VER/CHANGES değişmez)
import json,os,re,sys
src=sys.argv[1];ver=sys.argv[2] if len(sys.argv)>2 else None
h=os.path.dirname(os.path.abspath(__file__))
s=open(src).read()
if 'UZ-YARDIM' in s: sys.exit('zaten uygulanmış')
HS=json.load(open(os.path.join(h,'steps.json')))
HS={k:{'t':v['t'],'sn':v['sn'],'st':v['st']} for k,v in HS.items()}
GUIDE='https://claude.ai/artifact/77MbSQcns1tcoCSXq1aoQC#'
def rep(a,b,n=1):
    global s
    assert s.count(a)==n,(a[:60],s.count(a)); s=s.replace(a,b)
# 1) CSS
rep('</style>\n\n<div class="app">','''.hlp{width:32px;height:32px;border-radius:50%;border:1px solid var(--line);background:var(--card);color:var(--rc);font:800 .95rem var(--f-m,inherit);cursor:pointer;display:grid;place-items:center;flex:none}
.hlp:hover,.hlp:focus-visible{background:var(--rc);color:#fff;outline:none}
.lang{margin-left:8px}.priv+.hlp{margin-left:auto}
.hst{list-style:none;padding:0;margin:14px 0;display:grid;gap:8px;counter-reset:h}.hst li{counter-increment:h;display:grid;grid-template-columns:24px 1fr;gap:8px;font-size:.9rem}
.hst li::before{content:counter(h);background:#0b2545;color:#fff;border-radius:7px;height:22px;display:grid;place-items:center;font-size:.72rem;font-weight:800}
.yr{display:grid;grid-template-columns:30px minmax(0,1fr) auto;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid var(--line2)}.yr:last-child{border:0}
.yr .a{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}
.yr.nar{grid-template-columns:30px minmax(0,1fr)}.yr.nar .a{grid-column:2;justify-content:flex-start}
@media (max-width:480px){.hlp{width:28px;height:28px;font-size:.85rem}.lang{margin-left:4px}.crumb{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}
@media (max-width:560px){.yr{grid-template-columns:30px minmax(0,1fr)}.yr .a{grid-column:2;justify-content:flex-start}}
</style>

<div class="app">''')
# 2) Üst çubuk ? butonu
rep('''   <span class="priv" id="priv"></span>
   <div class="lang" id="lang"></div>''','''   <span class="priv" id="priv"></span>
   <button class="hlp" id="hlp" type="button" aria-label="Bu ekran nasıl kullanılır?" title="Bu ekran nasıl kullanılır?">?</button>
   <div class="lang" id="lang"></div>''')
# 3) Rol izni
rep("const canR=(r,k)=>k==='uz-ana'||","const canR=(r,k)=>k==='uz-ana'||k==='uz-yardim'||")
# 4) Kod bloğu (render'dan önce)
blk='''/* ================= UZ-YARDIM: Kullanım rehberi (videolu) ================= */
const GUIDE='@@G@@';
const HS=@@H@@;
const HROLE={herkes:['uz-ana','uz-gorev','uz-ekip'],yon:['uz-pano','uz-teklif','uz-rapor','uz-ekip']};
Object.assign(D,{
 'uz-yardim':{tr:'Kullanım rehberi',uz:'Foydalanish qoʻllanmasi',ru:'Руководство',en:'User guide'},
 s_yardim:{tr:'Her ekranın kısa videosu ve adımları. Önce kendi rolünüzün ekranlarını izleyin; her ekranda sağ üstteki ? aynı rehberi açar.',uz:'Har bir ekran uchun qisqa video va qadamlar. Har ekranda yuqoridagi ? shu qoʻllanmani ochadi.',ru:'Короткое видео и шаги для каждого экрана. Кнопка ? вверху открывает эту справку.',en:'A short video and steps for every screen. The ? at the top of each screen opens the same guide.'},
 hlpq:{tr:'Bu ekran nasıl kullanılır?',uz:'Bu ekrandan qanday foydalaniladi?',ru:'Как пользоваться этим экраном?',en:'How to use this screen?'},
 watch:{tr:'Videoyu izle',uz:'Videoni koʻrish',ru:'Смотреть видео',en:'Watch video'},
 allg:{tr:'Tüm rehber',uz:'Toʻliq qoʻllanma',ru:'Всё руководство',en:'Full guide'},
 hstepn:{tr:'adım',uz:'qadam',ru:'шаг.',en:'steps'},
 hsteps:{tr:'Adımlar',uz:'Qadamlar',ru:'Шаги',en:'Steps'},
 openscr:{tr:'Ekranı aç',uz:'Ekranni ochish',ru:'Открыть экран',en:'Open screen'},
 myrole:{tr:'Rolünüzün ekranları',uz:'Rolingiz ekranlari',ru:'Экраны вашей роли',en:'Your role’s screens'},
 everyone:{tr:'Herkes için',uz:'Hamma uchun',ru:'Для всех',en:'For everyone'},
 otherroles:{tr:'Diğer roller',uz:'Boshqa rollar',ru:'Другие роли',en:'Other roles'},
 trnote:{tr:'Videolar ve adımlar Türkçedir.',uz:'Video va qadamlar turk tilida.',ru:'Видео и шаги на турецком.',en:'Videos and steps are in Turkish.'},
});
const hScr=r=>r==='yon'?HROLE.yon:(r==='herkes'?HROLE.herkes:RA_[r]||[]);
function hlpOpen(r){const h=HS[r];const ov=document.getElementById('ov');
 ov.innerHTML=`<div class="modal" id="md"><div class="doc" role="dialog" aria-label="${t('hlpq')}" style="width:min(560px,100%)"><div class="ey">${t('uz-yardim')}</div><h2 style="margin:4px 0 2px">${t(r)}</h2>`+
 (h?`<p style="margin:0;color:#5f7186;font-size:.82rem">${h.sn} sn · ${h.st.length} ${t('hstepn')}${L!=='tr'?' · '+t('trnote'):''}</p><ol class="hst">${h.st.map(x=>`<li>${x}</li>`).join('')}</ol>`:`<p class="cs">${t('s_yardim')}</p>`)+
 `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;margin-top:6px">${h?`<a class="btn p" href="${GUIDE}${r}" target="_blank" rel="noopener">▶ ${t('watch')} ↗</a>`:''}${r!=='uz-yardim'?`<a class="btn" href="#uz-yardim" id="mg2">${t('uz-yardim')}</a>`:''}<button class="btn" type="button" id="mc">${t('close')}</button></div></div></div>`;
 const c=()=>ov.innerHTML='';document.getElementById('mc').onclick=c;const g=document.getElementById('mg2');if(g)g.onclick=c;document.getElementById('md').onclick=e=>{if(e.target.id==='md')c()}}
const yRow=(k,n)=>{const h=HS[k],ic=(ROUTES.find(x=>x[0]===k)||[])[1];return `<div class="yr${n===1?' nar':''}"><span class="bx" style="width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:var(--soft);color:var(--rc)">${ik(ic||'gorev','ik-16')}</span><div style="min-width:0"><b style="font-size:.88rem">${t(k)}</b><div class="cs" style="margin:0;font-size:.76rem">${h?h.sn+' sn · '+h.st[0]:''}</div></div><div class="a"><button class="btn" type="button" data-hlp="${k}" style="font-size:.76rem">${t('hsteps')}</button><a class="btn p" href="${GUIDE}${k}" target="_blank" rel="noopener" style="font-size:.76rem">▶ ${t('watch')}</a>${canR(ROLE,k)?`<a class="btn" href="#${k}" style="font-size:.76rem">${t('openscr')}</a>`:''}</div></div>`};
function vYardim(){
 const mine=ROLE==='yon'?ROUTES.map(x=>x[0]).filter(k=>HS[k]):hScr(ROLE),oth=Object.keys(RK).filter(k=>k!==ROLE);
 return head('uz-yardim')+`
 <div class="note" style="align-items:center;flex-wrap:wrap">${ik('rehber','ik-16')}<span style="flex:1;min-width:200px"><b>${RK[ROLE].n[L]}</b> · ${Object.keys(HS).length} video · ${t('trnote')}</span><a class="btn p" href="${GUIDE}rol-${ROLE}" target="_blank" rel="noopener">▶ ${t('allg')} ↗</a></div>
 <div class="grid g21" style="margin-top:14px">
  <div class="c"><div class="ch"><div><h2>${t('myrole')}</h2><p class="cs">${RK[ROLE].n[L]} · ${RK[ROLE].d[L]}</p></div></div><div>${mine.filter(k=>ROLE==='yon'||!HROLE.herkes.includes(k)).map(k=>yRow(k)).join('')}</div></div>
  <div class="grid" style="align-content:start">
   <div class="c"><h2>${t('everyone')}</h2><p class="cs">${t('uz-ana')}, ${t('uz-gorev')}, ${t('uz-ekip')}</p><div>${HROLE.herkes.map(k=>yRow(k,1)).join('')}</div></div>
   <div class="c"><h2>${t('otherroles')}</h2><p class="cs">${t('allg')}</p><div style="display:flex;gap:6px;flex-wrap:wrap">${oth.map(k=>`<a class="btn" href="${GUIDE}rol-${k}" target="_blank" rel="noopener" style="font-size:.76rem"><i style="width:8px;height:8px;border-radius:50%;background:${RK[k].c}"></i>${RK[k].n[L]} ↗</a>`).join('')}</div></div>
  </div>
 </div>`}
V['uz-yardim']=vYardim;ICON['uz-yardim']='yardim';SUBK['uz-yardim']='s_yardim';
ROUTES.splice(ROUTES.findIndex(x=>x[0]==='uz-ekip')+1,0,['uz-yardim','yardim',null]);

function render(){'''
blk=blk.replace('@@G@@',GUIDE).replace('@@H@@',json.dumps(HS,ensure_ascii=False))
rep('function render(){',blk)
# 5) Tıklama
rep(" else if(b.id==='mb'){"," else if(b.id==='hlp'){hlpOpen(CUR)}\n else if(b.dataset.hlp){hlpOpen(b.dataset.hlp)}\n else if(b.id==='mb'){")
# 6) Sürüm
if ver:
    s=re.sub(r"const VER='UZ-v\d+'","const VER='%s'"%ver,s)
    s=re.sub(r'(<button class="ver" id="verb" type="button">)UZ-v\d+',r'\g<1>'+ver,s)
    rep("const CHANGES=[","const CHANGES=[['%s','18.11.2026','Kullanım rehberi: menüde yeni ekran (rolünüzün ekranları, her biri video + adımlar) ve her ekranın üst çubuğunda ? butonu (o ekranın adımları + videosu). 27 ekranın videosu ayrı rehber sayfasında, rol bazlı ve iş akışı sırasıyla.'],"%ver)
open(src,'w').write(s)
ip=os.path.join(os.path.dirname(os.path.abspath(src)),'ikonlar.json')
ic=json.load(open(ip))
if 'yardim' not in ic:
    ic['yardim']='<circle cx="12" cy="12" r="9"/><path class="a" d="M9.6 9.3a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.6"/><circle class="a" cx="12" cy="17" r=".6"/>'
    json.dump(ic,open(ip,'w'),ensure_ascii=False)
print('ok',ver or '')
