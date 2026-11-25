# Fiyat ve tarifeler yaması: tercüman, rehber, otel, restoran, ulaşım, salon, kiosk, gezi, sağlık paketi,
# B2B paket payı ve kâr payı ekrandan değiştirilir; gider, teklif ve finans anında yeniden hesaplanır.
# Kullanım: python3 -I tarife-yamasi.py <uz.src.html> [SÜRÜM]   (SÜRÜM ör. UZ-v15; verilmezse VER/CHANGES değişmez)
# Dosyayı yerinde günceller; iki kez uygulanmaz.
import re,sys
p=sys.argv[1];ver=sys.argv[2] if len(sys.argv)>2 else None
s=open(p).read()
if "'uz-tarife'" in s: sys.exit('zaten uygulanmış')
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)

# ---- 1) Tarife değişkenleri (erken tanımlı; gider fonksiyonları kullanır)
rep("let MARG=28;","let MARG=28;\n/* UZ-v15: tarife değerleri (Fiyat ve tarifeler ekranından değişir) */\nconst TARIF={ikram:6,kart:1.4,spk:300,lead:220,staff:150},PR={share:55,firms:16},COSTMAN={};")

# ---- 2) Sabit sayılar tarifeye bağlandı
rep("['ikram',6*heads*v.days,","['ikram',TARIF.ikram*heads*v.days,")
rep("Math.round(REG.length*1.4)","Math.round(REG.length*TARIF.kart)")
rep("filter(s=>s.sp&&s.sp!=='—').length*300};","filter(s=>s.sp&&s.sp!=='—').length*TARIF.spk};")
rep("dy:i<3?5:3,rate:i<2?220:150}","dy:i<3?5:3,rate:i<2?TARIF.lead:TARIF.staff}")
rep("dy:1,rate:300}","dy:1,rate:TARIF.spk}")

# ---- 3) Teklif: firma payı ve firma sayısı tarifeden; otomatik kalem elle değişirse işaretlenir
rep("f:(p*.55)/16,o:p*.45}","f:p*PR.share/100/PR.firms,o:p*(1-PR.share/100)}")
rep("<small>${t('perfirm')} (16)</small>","<small>${t('perfirm')} (${PR.firms})</small>")
rep("<td>${d[5]} (16)</td>","<td>${d[5]} (${PR.firms})</td>")
rep("""${AUTOK[k]?` <a href="#${AUTOK[k]}" class="tag" style="text-decoration:none;color:var(--rc)">${t('auto')} · ${t(AUTOK[k])}</a>`:''}</label>""",
    """${AUTOK[k]?(COSTMAN[k]?` <span class="tag" style="color:var(--wr)">${t('tf_man')}</span>${isBoss()?` <button type="button" class="tag" data-cmr="${k}" style="cursor:pointer;color:var(--rc)">↺ ${t('tf_back')}</button>`:''}`:` <a href="#${AUTOK[k]}" class="tag" style="text-decoration:none;color:var(--rc)">${t('auto')} · ${t(AUTOK[k])}</a>`):''}</label>""")
rep("""<div class="ch"><div><h2>${t('costs')}</h2><p class="cs">USD · KDV hariç · değiştirilebilir</p></div></div>""",
    """<div class="ch"><div><h2>${t('costs')}</h2><p class="cs">USD · KDV hariç · değiştirilebilir</p></div>${canR(ROLE,'uz-tarife')?`<div class="r"><a class="btn" href="#uz-tarife" style="font-size:.76rem">${ik('finans','ik-16')}${t('uz-tarife')}</a></div>`:''}</div>""")

# ---- 4) Satır içi fiyat düzenleme (✎): Lojistik, Mekân, Rehber ve sağlık
rep("${t('fabrate')} $ ${h.rate} / ${t('night')}</p>","${t('fabrate')} ${pe('hot:'+h.id+':rate')} / ${t('night')} · ${t('rack')} ${pe('hot:'+h.id+':list')}</p>")
rep("${r.kind[L]} · $ ${r.pp} ${t('perperson')}</p>","${r.kind[L]} · ${pe('rst:'+r.id)} ${t('perperson')}</p>")
rep("${t('guide')} $ ${u.gd} / ${t('perday')}</p>","${t('guide')} ${pe('ul:'+u.id+':gd')} / ${t('perday')}</p>")
rep("<dd>$ ${u.pr[k]} ${t('pertrip')}</dd>","<dd>${pe('ul:'+u.id+':'+k)} ${t('pertrip')}</dd>")
rep("<td class=\"num\">${mOK()?'$ '+x[2]:MASK}</td>","<td class=\"num\">${mOK()?pe('tp:'+i):MASK}</td>")
rep("${v.days} ${t('days')} · ${fmt(v.cost)}</span></div>","${v.days} ${t('days')} · ${mOK()?pe('ven:makine'):MASK}</span></div>")
rep("<b class=\"num\" style=\"font-size:.82rem\">${fmt(g[3])}/${TT('gün','kun','день','day')[L]}</b>","<b class=\"num\" style=\"font-size:.82rem\">${mOK()?pe('gd:'+g[0]):MASK}/${TT('gün','kun','день','day')[L]}</b>")
rep("<b>${fmtK(HP.price)} / ${fmt(HP.cost)}</b></div><a class=\"btn\" href=\"#uz-acil\"","<b>${isBoss()?pe('hp:price'):MASK} / ${mOK()?pe('hp:cost'):MASK}</b></div><a class=\"btn\" href=\"#uz-acil\"")

# ---- 5) Menü, erişim, rehber adımları
rep("['uz-rehber','rehber',null],","['uz-rehber','rehber',null],['uz-tarife','finans',null],")
rep("const MS={loj:['uz-lojistik',","const MS={loj:['uz-tarife','uz-lojistik',")
rep("loj:['uz-etkinlik','uz-gorev','uz-lojistik',","loj:['uz-etkinlik','uz-gorev','uz-tarife','uz-lojistik',")
rep("['uz-rehber','loj'],['uz-numune','loj']]]","['uz-rehber','loj'],['uz-numune','loj'],['uz-tarife','loj','yon']]]")
rep("const HS={",'const HS={"uz-tarife": {"t": "Fiyat ve tarifeler", "sn": 20, "st": ["Fiyat ve tarifeler: tercüman, rehber, otel, restoran, ulaşım, salon, gezi ve paket fiyatları tek yerde.", "Sekmeden grubu seçin, fiyatı yazıp Enter’a basın.", "Gider, teklif ve finans hemen yeniden hesaplanır; yönetici etkisini üstteki kartlarda görür.", "Lojistik ve gezi ekranlarında fiyatın yanındaki ✎ ile de değiştirebilirsiniz.", "Kâr payı ve B2B paket payı yalnız yöneticiye açıktır; son değişiklikler kayıtta kalır."]}, ')

# ---- 6) Her çizimde teklif kalemleri tarifeden yeniden hesaplanır
rep("let r=(location.hash||'').slice(1);if(!V[r])r='uz-ana';CUR=r;if(!RK[ROLE])ROLE='yon';",
    "let r=(location.hash||'').slice(1);if(!V[r])r='uz-ana';CUR=r;if(!RK[ROLE])ROLE='yon';syncCOST();if(!TFB){TFB=tfSnap();TFG()}")

# ---- 7) CSS
rep("</style>",""".pe{border:1px dashed transparent;background:none;font:inherit;color:inherit;cursor:pointer;padding:0 4px;border-radius:6px;font-variant-numeric:tabular-nums;transition:border-color .15s,color .15s}.pe::after{content:"✎";font-size:.72em;margin-left:4px;opacity:.5}.pe:hover,.pe:focus-visible{border-color:var(--rc);color:var(--rc)}
.pei,.tfi{width:92px;border:1px solid var(--line);border-radius:8px;padding:5px 8px;text-align:right;background:var(--bg2);font:inherit;font-variant-numeric:tabular-nums;color:var(--ink)}.pei{width:78px;padding:2px 6px}
.tfw{display:inline-flex;align-items:center;gap:5px;justify-content:flex-end}.tfw i{font-style:normal;color:var(--mut);font-size:.78rem}
.tft td{vertical-align:middle}.tft tr.ch1 td{background:color-mix(in srgb,var(--soft) 60%,transparent)}.tft .was{display:block;font-size:.68rem;color:var(--mut);margin-top:2px;text-align:right}
.dl{font-size:.74rem;font-weight:600}.dl.up{color:var(--bad)}.dl.dn{color:var(--ok)}
</style>""")

# ---- 8) Ekran, kayıt ve olaylar
JS=r"""
/* ================= UZ-v15: Fiyat ve tarifeler · satır içi fiyat düzenleme ================= */
Object.assign(D,{
 'uz-tarife':{tr:'Fiyat ve tarifeler',uz:'Narx va tariflar',ru:'Цены и тарифы',en:'Prices & rates'},
 s_tarife:{tr:'Tercüman, rehber, otel, restoran, ulaşım, salon, gezi ve paket fiyatları tek yerde. Bir fiyatı değiştirdiğinizde gider, teklif ve finans hemen yeniden hesaplanır.',uz:'Tarjimon, gid, mehmonxona, restoran, transport, zal, sayohat va paket narxlari bir joyda. Narx oʻzgarsa xarajat, taklif va moliya darhol qayta hisoblanadi.',ru:'Цены переводчиков, гидов, отелей, ресторанов, транспорта, залов, экскурсий и пакетов в одном месте. При изменении цены затраты, предложение и финансы пересчитываются сразу.',en:'Interpreter, guide, hotel, restaurant, transport, venue, tour and package prices in one place. Change a price and costs, the offer and finance recalculate at once.'},
 tf_man:{tr:'elle girildi',uz:'qoʻlda',ru:'вручную',en:'manual'},
 tf_back:{tr:'tarifeye dön',uz:'tarifga qaytish',ru:'вернуть тариф',en:'back to rate'},
 tf_hint:{tr:'Fiyatı yazıp Enter’a basın; ilgili ekranlar hemen güncellenir.',uz:'Narxni yozib Enter bosing.',ru:'Введите цену и нажмите Enter.',en:'Type the price and press Enter.'},
 tf_loj:{tr:'Tedarikçi fiyatlarını siz girersiniz. Toplam gider, teklif fiyatı ve kâr yöneticide görünür.',uz:'Yetkazuvchi narxini siz kiritasiz; jami va foydani rahbar koʻradi.',ru:'Цены поставщиков вводите вы; итоги и прибыль видит руководитель.',en:'You enter supplier prices; totals and profit are visible to the owner.'},
 tf_imp:{tr:'Etkisi · ekran açıldığından beri',uz:'Taʼsiri · ochilgandan beri',ru:'Влияние · с момента открытия',en:'Impact · since opened'},
 tf_flow:{tr:'Nereye yansır',uz:'Qayerga taʼsir qiladi',ru:'Куда влияет',en:'Where it flows'},
 tf_log:{tr:'Son değişiklikler',uz:'Soʻnggi oʻzgarishlar',ru:'Последние изменения',en:'Recent changes'},
 tf_nolog:{tr:'Henüz değişiklik yok.',uz:'Hali oʻzgarish yoʻq.',ru:'Изменений пока нет.',en:'No changes yet.'},
 tf_boss:{tr:'yalnız yönetici',uz:'faqat rahbar',ru:'только руководитель',en:'owner only'},
 tf_reok:{tr:'Teklif fiyatı değişti: yeniden onay gerekir',uz:'Taklif narxi oʻzgardi: qayta tasdiq kerak',ru:'Цена предложения изменилась: нужно новое утверждение',en:'Offer price changed: needs approval again'},
 tf_bad:{tr:'Geçerli bir sayı yazın',uz:'Toʻgʻri son kiriting',ru:'Введите число',en:'Enter a valid number'},
 tf_was:{tr:'önce',uz:'avval',ru:'было',en:'was'},
});
Object.assign(V,{'uz-tarife':vTarife});ICON['uz-tarife']='finans';SUBK['uz-tarife']='s_tarife';
const TFLOG=[],TFO={};let tfT='terc',TFB=null;
const C4=c=>CITY4[c]?CITY4[c][L]:c;
function syncCOST(){const v=VEN.tekstil,avg=TP.reduce((a,x)=>a+x[2],0)/TP.length,tc=hot('tc').rate,tt=ulc('tt').pr;
 const a={salon:v.cost,tercuman:Math.round(7*avg*v.days/10)*10,ikram:TARIF.ikram*(24+58+8)*v.days,kiosk:v.kiosk*v.kioskc+v.print,otel:Math.round(24*NIGHTS*tc+8*4*tc),ulasim:tt.mini*4+tt.bus*6+TEAMTRAVEL,yemek:rst('tp').pp*90*3+22*90};
 Object.keys(a).forEach(k=>{if(!COSTMAN[k])COST[k]=a[k]})}
const tfSnap=()=>{const c=calc(),x=expSum('makine');return {mk:x,mp:ev('makine').inc-x,tp:c.p,tf:c.f}};
const HLK=['B','C','W1','W2'];
function TFG(){
 const m=(k,n,get,set,o)=>Object.assign({k,n,get,set,u:'$'},o||{}),T=T4,per=(a,b)=>a+' · '+b;
 const G=[
  {id:'terc',n:T('Tercüman ve rehber','Tarjimon va gid','Переводчики и гиды','Interpreters & guides'),cols:[T('Günlük ücret','Kunlik haq','В день','Per day')],to:['uz-mekan','uz-rehber','uz-finans','uz-teklif'],
   rows:TP.map((x,i)=>({n:x[0],s:per(T('Tercüman','Tarjimon','Переводчик','Interpreter')[L],x[1]),f:[m('tp:'+i,x[0],()=>x[2],v=>x[2]=v)]})).concat(GD.map(g=>({n:g[1],s:per(T('Rehber','Gid','Гид','Guide')[L],g[2]),f:[m('gd:'+g[0],g[1],()=>g[3],v=>g[3]=v)]})))},
  {id:'otel',n:T('Otel','Mehmonxona','Отели','Hotels'),cols:[T('Fabriq fiyatı / gece','Fabriq narxi / tun','Цена Fabriq / ночь','Fabriq rate / night'),T('Liste fiyatı / gece','Prays / tun','Прайс / ночь','Rack rate / night')],to:['uz-lojistik','uz-gezi','uz-teklif','uz-finans'],
   rows:HOT.map(h=>({n:h.n,s:per(C4(h.city),'★'.repeat(h.star)),f:[m('hot:'+h.id+':rate',h.n,()=>h.rate,v=>h.rate=v),m('hot:'+h.id+':list',h.n+' · liste',()=>h.list,v=>h.list=v,{nc:1})]}))},
  {id:'rst',n:T('Restoran','Restoran','Рестораны','Restaurants'),cols:[T('Kişi başı','Kishi boshiga','На человека','Per person')],to:['uz-lojistik','uz-gezi','uz-teklif','uz-finans'],
   rows:RST.map(r=>({n:r.n,s:per(C4(r.city),r.kind[L]),f:[m('rst:'+r.id,r.n,()=>r.pp,v=>r.pp=v)]}))},
  {id:'ul',n:T('Ulaşım','Transport','Транспорт','Transport'),cols:[T('Minibüs / sefer','Mikroavtobus','Микроавтобус','Minibus / trip'),T('Otobüs / sefer','Avtobus','Автобус','Bus / trip'),T('Minivan / sefer','Miniven','Минивэн','Minivan / trip'),T('Rehber / gün','Gid / kun','Гид / день','Guide / day')],to:['uz-lojistik','uz-gezi','uz-teklif','uz-finans'],
   rows:UL.map(u=>({n:u.n,s:C4(u.city),f:['mini','bus','van'].map(k=>m('ul:'+u.id+':'+k,u.n+' · '+k,()=>u.pr[k],v=>u.pr[k]=v)).concat([m('ul:'+u.id+':gd',u.n+' · rehber',()=>u.gd,v=>u.gd=v)])}))},
  {id:'mekan',n:T('Salon, kiosk ve ikram','Zal, kiosk va mehmondorchilik','Залы, киоск и кейтеринг','Venue, kiosk & catering'),cols:[T('Fiyat','Narx','Цена','Price')],to:['uz-mekan','uz-akis','uz-kiosk','uz-teklif','uz-finans'],
   rows:[['makine'],['tekstil']].map(([id])=>({n:VEN[id].n,s:per(ev(id).n,T('salon kirası, '+VEN[id].days+' gün','zal ijarasi','аренда зала','venue hire')[L]),f:[m('ven:'+id,VEN[id].n,()=>VEN[id].cost,v=>VEN[id].cost=v)]}))
    .concat(HLK.map(k=>({n:HL[k][0][L],s:T('Paralel oturum salonu · oturum başı','Parallel zal · sessiya','Параллельный зал · за сессию','Breakout hall · per session')[L],f:[m('hl:'+k,HL[k][0][L],()=>HL[k][2],v=>HL[k][2]=v)]})))
    .concat([
     {n:T('Kiosk kirası','Kiosk ijarasi','Аренда киоска','Kiosk hire')[L],s:T('kiosk başı · etkinlik','har kiosk','за киоск','per kiosk')[L],f:[m('kioskc','Kiosk',()=>VEN.makine.kioskc,v=>{VEN.makine.kioskc=v;VEN.tekstil.kioskc=v})]},
     {n:T('Baskı paketi','Bosma paketi','Печать','Print pack')[L],s:T('afiş, yönlendirme, program · etkinlik','etkinlik','за мероприятие','per event')[L],f:[m('print','Baskı',()=>VEN.makine.print,v=>{VEN.makine.print=v;VEN.tekstil.print=v})]},
     {n:T('Giriş kartı ve kordon','Kirish kartasi','Бейдж и шнурок','Badge & lanyard')[L],s:T('kişi başı','kishi boshiga','на человека','per person')[L],f:[m('kart','Giriş kartı',()=>TARIF.kart,v=>TARIF.kart=v)]},
     {n:T('Salon ikramı (kahve arası)','Kofe-breyk','Кофе-брейк','Coffee break')[L],s:T('kişi başı · gün','kishi · kun','чел. · день','per person · day')[L],f:[m('ikram','İkram',()=>TARIF.ikram,v=>TARIF.ikram=v)]},
     {n:T('Konuşmacı ücreti','Maʼruzachi haqi','Гонорар спикера','Speaker fee')[L],s:T('oturum başı','sessiya','за сессию','per session')[L],f:[m('spk','Konuşmacı',()=>TARIF.spk,v=>TARIF.spk=v)]}])},
  {id:'gezi',n:T('Gezi ve tren','Sayohat va poyezd','Экскурсии и поезда','Tours & trains'),cols:[T('Kişi başı','Kishi boshiga','На человека','Per person')],to:['uz-gezi','uz-teklif','uz-finans'],
   rows:PL.map(x=>({n:x.n[L],s:C4(x.c)+' · '+x.h+' '+t('hrs'),f:[m('pl:'+x.id,x.n.tr,()=>x.fee,v=>x.fee=v)]})).concat(TRN.map(x=>({n:x[1]+' · '+C4(x[2])+' → '+C4(x[3]),s:x[4]+'–'+x[5],f:[m('trn:'+x[0],x[1]+' '+x[0],()=>x[6],v=>x[6]=v)]})))},
  {id:'paket',n:T('Sağlık paketi','Tibbiy paket','Медпакет','Health cover'),cols:[T('Maliyet / kişi','Tannarx','Себестоимость','Cost / person'),T('Satış / kişi','Sotuv','Цена продажи','Price / person')],to:['uz-rehber','uz-finans','uz-pano'],
   rows:[{n:CL.saglik[L],s:t('perperson'),f:[m('hp:cost','Sağlık paketi maliyet',()=>HP.cost,v=>HP.cost=v),m('hp:price','Sağlık paketi satış',()=>HP.price,v=>HP.price=v,{b:1})]}]},
  {id:'satis',b:1,n:T('Satış ve marj','Savdo va marja','Продажи и маржа','Sales & margin'),cols:[T('Değer','Qiymat','Значение','Value')],to:['uz-teklif','uz-finans','uz-pano'],
   rows:[
    {n:t('margin'),s:T('Teklifte varsayılan; sürgüyle de değişir','Taklifda standart','По умолчанию в предложении','Default on the offer')[L],f:[m('marg',t('margin'),()=>MARG,v=>MARG=Math.max(0,Math.min(90,v)),{u:'%'})]},
    {n:T('B2B paketinin payı','B2B paket ulushi','Доля B2B-пакетов','B2B package share')[L],s:T('Teklif fiyatının firmalara düşen kısmı; kalanı organizasyon bedeli','qolgani tashkiliy toʻlov','остальное — оплата организации','rest is the organisation fee')[L],f:[m('share','B2B paket payı',()=>PR.share,v=>PR.share=Math.max(0,Math.min(100,v)),{u:'%'})]},
    {n:t('perfirm'),s:T('Payı buradan da ayarlayabilirsiniz','Shu yerdan ham','Можно задать здесь','You can set it here too')[L],f:[m('pkg',t('perfirm'),()=>Math.round(calc().f),v=>{const p=calc().p;if(p)PR.share=Math.max(0,Math.min(100,Math.round(v*PR.firms/p*1000)/10))})]},
    {n:T('Katılımcı firma sayısı','Firmalar soni','Число фирм','Participating firms')[L],s:ev('tekstil').n,f:[m('firms','Firma sayısı',()=>PR.firms,v=>PR.firms=Math.max(1,Math.round(v)),{u:'#'})]},
    {n:T('Ekip günlüğü · koordinatör','Jamoa · koordinator','Команда · координатор','Team day rate · lead')[L],s:T('hak edişe gider','haqqa','в начисления','to fees')[L],f:[m('lead','Koordinatör günlüğü',()=>TARIF.lead,v=>TARIF.lead=v)]},
    {n:T('Ekip günlüğü · saha','Jamoa · maydon','Команда · площадка','Team day rate · floor')[L],s:T('hak edişe gider','haqqa','в начисления','to fees')[L],f:[m('staff','Saha günlüğü',()=>TARIF.staff,v=>TARIF.staff=v)]}]}];
 G.forEach(g=>g.rows.forEach(r=>r.f.forEach(f=>{if(g.b)f.b=1;if(!(f.k in TFO)&&f.k!=='pkg')TFO[f.k]=f.get()})));
 return G;
}
const tfAll=()=>TFG().reduce((a,g)=>a.concat(...g.rows.map(r=>r.f)),[]);
const tfF=k=>tfAll().find(f=>f.k===k);
const canTF=f=>!!f&&(isBoss()||(ROLE==='loj'&&!f.b));
const tfV=(f,v)=>f.u==='%'?'%'+v:f.u==='#'?String(v):'$ '+Number(v).toLocaleString('tr-TR');
/* satır içi: fiyatın yanında ✎; tıklayınca kutu açılır */
function pe(k){const f=tfF(k);if(!f)return '';const v=f.get();if(f.b&&!isBoss())return MASK;return canTF(f)?`<button type="button" class="pe" data-pe="${k}" title="${t('tf_hint')}">${tfV(f,v)}</button>`:tfV(f,v)}
const tfDelta=(a,b,inv)=>{const d=Math.round(a-b);if(!d)return '<span class="dl">±0</span>';const up=d>0;return `<span class="dl ${(inv?!up:up)?'up':'dn'}">${up?'+':'−'}$ ${Math.abs(d).toLocaleString('tr-TR')}</span>`};
function vTarife(){
 const G=TFG().filter(g=>!g.b||isBoss());if(!G.find(g=>g.id===tfT))tfT=G[0].id;const g=G.find(x=>x.id===tfT),now=tfSnap(),B=TFB||now;
 const cell=f=>{const v=f.get(),o=TFO[f.k],ch=o!=null&&o!==v;
  if(f.b&&!isBoss())return `<td class="num">${MASK}<span class="was">${t('tf_boss')}</span></td>`;
  return `<td class="num"><label class="tfw"><i>${f.u==='%'?'%':f.u==='#'?'#':'$'}</i><input class="tfi" data-tf="${f.k}" inputmode="decimal" value="${v}" aria-label="${f.n}" ${canTF(f)?'':'disabled'}></label>${ch?`<span class="was">${t('tf_was')} ${tfV(f,o)}</span>`:''}</td>`};
 const rowCh=r=>r.f.some(f=>TFO[f.k]!=null&&TFO[f.k]!==f.get());
 const kpi=(lab,v,b,inv,sub)=>`<div class="c kp"><small>${lab}</small><b>${'$ '+Math.round(v).toLocaleString('tr-TR')}</b><span>${tfDelta(v,b,inv)} · ${sub}</span></div>`;
 return head('uz-tarife')+`
 <div class="note">${ik('finans','ik-16')}<span>${t('tf_hint')}${isBoss()?'':' '+t('tf_loj')}</span></div>
 ${isBoss()?`<div class="grid g4" style="margin-bottom:14px">
  ${kpi(ev('makine').n.replace(' B2B','')+' · '+t('cost').toLowerCase(),now.mk,B.mk,0,t('tf_imp').split(' · ')[1])}
  ${kpi(ev('makine').n.replace(' B2B','')+' · '+t('profit').toLowerCase(),now.mp,B.mp,1,ev('makine').city)}
  ${kpi(ev('tekstil').n.replace(' B2B','').replace(' ve Hazır Giyim','')+' · '+t('price').toLowerCase(),now.tp,B.tp,0,t('uz-teklif'))}
  ${kpi(t('perfirm'),now.tf,B.tf,0,'%'+PR.share+' · '+PR.firms+' '+TT('firma','firma','фирм','firms')[L])}
 </div>`:''}
 <div class="grid g21">
  <div class="c"><div class="ch"><div class="seg">${G.map(x=>`<button type="button" data-tft="${x.id}" class="${x.id===tfT?'on':''}">${x.n[L]}${x.b?' 🔒':''}</button>`).join('')}</div></div>
   <div class="tw"><table class="tft" style="min-width:${g.cols.length>2?720:520}px"><thead><tr><th>${TT('Kalem','Modda','Статья','Item')[L]}</th>${g.cols.map(c=>`<th class="num">${c[L]}</th>`).join('')}</tr></thead>
   <tbody>${g.rows.map(r=>`<tr class="${rowCh(r)?'ch1':''}"><td><b style="font-size:.86rem">${r.n}</b><span class="gl">${r.s}</span></td>${r.f.map(cell).join('')}</tr>`).join('')}</tbody></table></div>
  </div>
  <div class="grid" style="align-content:start">
   <div class="c"><h2>${t('tf_flow')}</h2><p class="cs">${g.n[L]}</p><div style="display:flex;gap:6px;flex-wrap:wrap">${g.to.filter(k=>canR(ROLE,k)).map(k=>`<a class="btn" href="#${k}" style="font-size:.78rem">${ik(ICON[k]||'gorev','ik-16')}${t(k)}</a>`).join('')}</div></div>
   <div class="c"><h2>${t('tf_log')}</h2><p class="cs">${TT('Kim, neyi, ne zaman değiştirdi','Kim, nimani, qachon','Кто, что, когда','Who changed what, when')[L]}</p>
    <div class="list">${TFLOG.filter(x=>isBoss()||!x.b).length?TFLOG.filter(x=>isBoss()||!x.b).slice(0,8).map(x=>`<div class="li" style="padding:7px 0"><span class="dt">${x.at}</span><span class="t"><b style="font-size:.82rem">${x.n}</b><span>${RK[x.r].n[L]} · ${x.b&&!isBoss()?MASK:tfV(x,x.o)+' → '+tfV(x,x.v)}</span></span></div>`).join(''):`<p class="cs">${t('tf_nolog')}</p>`}</div></div>
  </div>
 </div>`;
}
function tfSet(k,raw){const f=tfF(k);if(!canTF(f)){render();return}
 const v=Math.round(parseFloat(String(raw).replace(/[^\d.,-]/g,'').replace(',','.'))*100)/100;
 if(!isFinite(v)||v<0){toast(t('tf_bad'));render();return}
 const o=f.get();if(v===o){render();return}
 const b=tfSnap();f.set(v);syncCOST();const a=tfSnap();
 const n=new Date(),hm=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
 TFLOG.unshift({at:'18.11 '+hm,r:ROLE,n:f.n,o,v:f.get(),u:f.u,b:f.b});
 if(TK.ok&&Math.round(a.tp)!==Math.round(b.tp)){TK.ok=0;TK.sent=1;render();toast(t('tf_reok'));return}
 render();
 const dd=(x,y)=>{const d=Math.round(x-y);return (d>0?'+':'−')+'$ '+Math.abs(d).toLocaleString('tr-TR')};
 toast(!isBoss()?t('saved'):Math.round(a.mk)!==Math.round(b.mk)?`${t('saved')} · ${t('cost')} ${dd(a.mk,b.mk)}`:Math.round(a.tp)!==Math.round(b.tp)?`${t('saved')} · ${t('price')} ${dd(a.tp,b.tp)}`:t('saved'));
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-pe],[data-tft],[data-cmr]');if(!b)return;e.stopPropagation();e.preventDefault();
 if(b.dataset.tft){tfT=b.dataset.tft;render();return}
 if(b.dataset.cmr){delete COSTMAN[b.dataset.cmr];render();toast(t('saved'));return}
 const f=tfF(b.dataset.pe);if(!canTF(f))return;
 const i=document.createElement('input');i.className='pei';i.dataset.tf=f.k;i.inputMode='decimal';i.value=f.get();i.setAttribute('aria-label',f.n);
 b.replaceWith(i);i.focus();i.select();i.addEventListener('blur',()=>{if(i.isConnected)setTimeout(()=>{if(i.isConnected)render()},0)});
},true);
document.addEventListener('change',e=>{const el=e.target;if(!el.dataset||!el.dataset.tf)return;e.stopPropagation();tfSet(el.dataset.tf,el.value)},true);
document.addEventListener('keydown',e=>{const el=e.target;if(!el.dataset||!el.dataset.tf)return;
 if(e.key==='Enter'){e.preventDefault();el.blur();if(el.isConnected)tfSet(el.dataset.tf,el.value)}else if(e.key==='Escape'){e.preventDefault();render()}},true);
document.addEventListener('input',e=>{const el=e.target;if(el.dataset&&el.dataset.c&&AUTOK[el.dataset.c])COSTMAN[el.dataset.c]=1},true);
"""
rep("\nfunction render(){",JS+"\nfunction render(){")

if ver:
    s=re.sub(r"const VER='UZ-v\d+'","const VER='%s'"%ver,s)
    s=re.sub(r'(<button class="ver" id="verb" type="button">)UZ-v\d+',r'\g<1>'+ver,s)
    rep("const CHANGES=[","const CHANGES=[['%s','18.11.2026','Fiyat ve tarifeler: tercüman ve rehber günlüğü, otel gece fiyatı, restoran kişi başı, ulaşım sefer fiyatı, salon ve oturum kirası, kiosk, baskı, giriş kartı, ikram, konuşmacı, gezi giriş ve tren bileti, sağlık paketi, B2B paket payı ve kâr payı ekrandan değiştirilir. Lojistik, Mekân, Rehber ve sağlık ekranlarında fiyatın yanında ✎ ile satır içi düzenleme. Fiyat değişince gider, teklif, finans (tedarikçi ödemesi, hak ediş, verilen teklif) ve pano anında yeniden hesaplanır; onaylı teklifin fiyatı değişirse yeniden onay ister. Kâr payı, satış fiyatı ve paket payı yalnız yöneticide; Lojistik tedarikçi fiyatını girer, toplam ve kârı görmez. Son değişiklikler kaydı.'],"%ver)
open(p,'w').write(s);print('ok',ver or '(sürüm değişmedi)')
