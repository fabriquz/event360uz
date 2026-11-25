# Akış + yapı yaması (UZ-v22 üstüne). Kullanım: python3 akis-yapi-yamasi.py uz.src.html ikonlar.json  (yerinde; iki kez uygulanmaz)
# 1) Rol matrisi düzeltildi + Ekip ekranında Rol×modül matrisi  2) Rolün açamadığı bağlar kilitli çip  3) Eşleştirme değişince B2B "yeniden aktar"
# 4) Teklif modül kalemleri (gezi, oturum, numune, rehber+sağlık)  5) Kayıt listesi (kiosk) eşleştirmeden yenilenir
# 6) Tüm ekranlarda cam görünümlü, açılır kartlar  7) Başlık ve düğmelerde otomatik ikon
import sys,json
p,ip=sys.argv[1],sys.argv[2];s=open(p).read()
if 'function enhance(' in s: sys.exit('zaten uygulanmış')
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)

# ---- 1) roller
rep("const RA_={sat:['uz-etkinlik','uz-evren','uz-teklif','uz-sponsor','uz-gorev','uz-sonuc'],cag:['uz-etkinlik','uz-evren','uz-cagri','uz-riza','uz-gorev','uz-sonuc'],prg:['uz-etkinlik','uz-evren','uz-program','uz-akis','uz-gorev','uz-mekan','uz-alan','uz-kiosk'],loj:['uz-etkinlik','uz-gorev','uz-tarife','uz-lojistik','uz-numune','uz-mekan','uz-alan','uz-gezi','uz-rehber','uz-acil'],yay:['uz-etkinlik','uz-gorev','uz-katalog','uz-telegram','uz-bulten','uz-medya'],fin:['uz-etkinlik','uz-gorev','uz-finans','uz-rapor'],saha:['uz-kiosk','uz-gun','uz-acil','uz-alan']};",
"const RA_={sat:['uz-etkinlik','uz-evren','uz-teklif','uz-sponsor','uz-gorev','uz-sonuc'],cag:['uz-etkinlik','uz-evren','uz-cagri','uz-riza','uz-gorev','uz-sonuc'],prg:['uz-etkinlik','uz-evren','uz-program','uz-akis','uz-gorev','uz-mekan','uz-alan','uz-kiosk','uz-gun'],loj:['uz-etkinlik','uz-gorev','uz-tarife','uz-lojistik','uz-numune','uz-mekan','uz-alan','uz-gezi','uz-rehber','uz-riza','uz-acil','uz-gun'],yay:['uz-etkinlik','uz-gorev','uz-sponsor','uz-katalog','uz-telegram','uz-bulten','uz-medya','uz-sonuc'],fin:['uz-etkinlik','uz-gorev','uz-sponsor','uz-finans','uz-sonuc','uz-rapor'],saha:['uz-kiosk','uz-gun','uz-acil','uz-alan','uz-mekan','uz-program']};/* UZ-v23: Finans Sonuç'ta tahsilatı kapatır; Yayın sponsor logosu ve sonuç sayısını görür; herkes Ekip'i salt okunur görür */")
rep("const canR=(r,k)=>k==='uz-ana'||k==='uz-yardim'||","const canR=(r,k)=>k==='uz-ana'||k==='uz-yardim'||k==='uz-ekip'||")
# Ekip: yalnız patron değiştirir
rep("function vLock(r){return `<div class=\"ey\">event360 UZ</div><div class=\"ph\"><div class=\"bx\">${ik(ICON[r]||'gorev')}</div><h1>${t(r)}</h1></div>\n <div class=\"c\" style=\"max-width:560px\"><h2>${t('locked')}</h2><p class=\"cs\">${RK[ROLE].n[L]} · ${RK[ROLE].d[L]}</p>",
"function vLock(r){return `<div class=\"ey\">event360 UZ</div><div class=\"ph\"><div class=\"bx\">${ik(ICON[r]||'gorev')}</div><h1>${t(r)}</h1></div>\n <div class=\"c\" style=\"max-width:560px\"><h2>${ik('lock','ik-16')} ${t('locked')}</h2><p class=\"cs\">${RK[ROLE].n[L]} · ${RK[ROLE].d[L]}</p><div class=\"cs\" style=\"margin-top:10px\"><b>${t('whoopen')}</b></div><div style=\"display:flex;gap:6px;flex-wrap:wrap;margin-top:6px\">${Object.keys(RK).filter(k=>canR(k,r)).map(k=>`<button type=\"button\" class=\"rk\" data-asr=\"${k}\" style=\"color:${RK[k].c};cursor:pointer\" title=\"${t('roleview')}\">${RK[k].n[L]}</button>`).join('')}</div>")

# menü/başlık ikonu tutarlılığı, Finans tutar görünürlüğü, profil avatarı
rep("document.getElementById('profN').textContent=pp.length?pp.map(x=>sn(x.id)).join(', '):'Fabriq ekibi';","pp.sort((a,b)=>(a.r[0]===ROLE?0:1)-(b.r[0]===ROLE?0:1));document.getElementById('profN').textContent=pp.length?sn(pp[0].id)+(pp.length>1?' +'+(pp.length-1):''):'Fabriq ekibi';document.getElementById('profN').title=pp.map(x=>x.n).join(', ');")
# ---- 2/6/7) render kancası
rep(" fold(r,anc);\n document.getElementById('sb')"," fold(r,anc);enhance(r);\n document.getElementById('sb')")

# ---- 3) B2B anlık görüntüsü eşleştirmeden
rep("PUB.b2b.d=true;","PUB.b2b.d=true;progSnap.b2b=()=>JSON.stringify(TP.map(x=>x[4]));PUB.b2b.s=progSnap.b2b();")

# ---- 4) teklif kalemleri
rep(" Object.keys(a).forEach(k=>{if(!COSTMAN[k])COST[k]=a[k]})}",
""" Object.keys(a).forEach(k=>{if(!COSTMAN[k])COST[k]=a[k]});
 const M=(ev('tekstil').mods||[]),X={gezi:['uz-gezi',()=>gzCost().s],oturum:['uz-akis',()=>akCost()],numune:['uz-numune',()=>numCost()],rehber:['uz-rehber',()=>rCost()+hpCostT()]};
 Object.keys(X).forEach(k=>{if(M.includes(X[k][0])){AUTOK[k]=X[k][0];if(!COSTMAN[k])COST[k]=X[k][1]()}else{delete COST[k];delete COSTMAN[k]}})}
function syncREG(){const ex=REG.filter(p=>p.ty==='int'),old={};ex.forEach(p=>old[p.n+'|'+p.f]=p);for(let i=REG.length-1;i>=0;i--)if(REG[i].ty==='int')REG.splice(i,1);
 TP.filter(x=>x[4]).forEach((x,i)=>{const o=old[x[0]+'|'+x[1]];REG.push({id:o?o.id:'i'+i,n:x[0],f:x[1],g:'',ty:'int',tb:x[4],ci:o?o.ci:'08:'+String(10+i*2),pr:o?o.pr:true})})}""")
rep("syncCOST();if(!TFB)","syncCOST();syncREG();if(!TFB)")

# ---- 6) cam + açılır kutu eşikleri
rep("if(FZON[r]===undefined)FZON[r]=pg.scrollHeight>innerHeight*1.35;if(!FZON[r])return;","FZON[r]=true;")
rep("c.offsetHeight<260","c.offsetHeight<150")
rep("if(!fs.length)return;\n fs.forEach","if(fs.length<2)return;\n fs.forEach")
rep("const op=FZ[key]===undefined?(k===0&&!big):FZ[key];","const op=FZ[key]===undefined?(k<(r==='uz-ana'||r==='uz-gun'?3:1)&&!big):FZ[key];")

# ---- Ekip: rol × modül matrisi (RA_'dan hesaplanır, tutarsızlık olamaz)
rep(" <div class=\"grid g21\">\n  <div class=\"c\"><div class=\"ch\"><div><h2>${t('roles')}</h2>",
" ${rolMatris()}\n <div class=\"grid g21\">\n  <div class=\"c\"><div class=\"ch\"><div><h2>${t('roles')}</h2>")

JS=r"""
/* ================= UZ-v23: akış bağları · rol matrisi · cam kutular · otomatik ikon ================= */
Object.assign(D,{whoopen:{tr:'Bu ekranı açabilenler (bakmak için seç):',uz:'Bu ekranni ocha oladiganlar:',ru:'Кто может открыть (выберите):',en:'Who can open it (pick to view):'},
 mtx:{tr:'Rol × modül matrisi',uz:'Rol × modul jadvali',ru:'Матрица роль × модуль',en:'Role × module matrix'},
 mtxs:{tr:'Hangi rol hangi ekranı açar. Matris roller ekranından hesaplanır; menü, bağlar ve kilitler hep aynı kaynaktan gelir.',uz:'Qaysi rol qaysi ekranni ochadi.',ru:'Какая роль какой экран открывает.',en:'Which role opens which screen. Computed from the role list, so menu, links and locks always agree.'},
 allr:{tr:'Herkes',uz:'Hamma',ru:'Все',en:'Everyone'},bossr:{tr:'Yalnız yönetici',uz:'Faqat rahbar',ru:'Только руководитель',en:'Owner only'},
 ro:{tr:'salt okunur',uz:'faqat oʻqish',ru:'только чтение',en:'read-only'},
 nolk:{tr:'Bu bağı açamazsınız · sorumlu:',uz:'Ochib boʻlmaydi · masʼul:',ru:'Нет доступа · ответственные:',en:'No access · owner:'}});
ICON['uz-gun']='ajanda';ICON['uz-tarife']='tarife';ROUTES.find(z=>z[0]==='uz-tarife')[1]='tarife';MS.fin.push('uz-sponsor','uz-sonuc');
function rolMatris(){const ks=Object.keys(RK);let gp='',rows='';
 ROUTES.forEach(([k,i,g])=>{if(k==='uz-yardim')return;let h='';if(g){gp=g;h=`<tr class="mxg"><th colspan="${ks.length+2}"><span class="mxs gp${g.slice(3)}"></span>${t(g)}</th></tr>`}
  const all=k==='uz-ana'||k==='uz-ekip';
  rows+=h+`<tr><td><a href="#${k}" class="mxl">${ik(i,'ik-16')}<span>${t(k)}</span></a>${k==='uz-ekip'?`<span class="gl">${t('ro')}</span>`:''}</td>${ks.map(r=>`<td class="mxc">${canR(r,k)?`<span style="color:${RK[r].c}" title="${RK[r].n[L]}">${ik('check','ik-16')}</span>`:'<span class="mxn">–</span>'}</td>`).join('')}<td class="mxc gl">${all?t('allr'):ks.filter(r=>r!=='yon'&&canR(r,k)).length?'':t('bossr')}</td></tr>`});
 return `<div class="c" style="margin-bottom:14px"><div class="ch" id="rolmx"><div><h2>${t('mtx')}</h2><p class="cs">${t('mtxs')}</p></div></div><div class="tw"><table class="mx" style="min-width:760px"><thead><tr><th></th>${ks.map(r=>`<th class="mxc"><span style="color:${RK[r].c}">${RK[r].n[L]}</span></th>`).join('')}<th></th></tr></thead><tbody>${rows}</tbody></table></div></div>`}

/* Küçük genel ikon seti (ikonlar.json'a eklendi) ve otomatik atama */
const GIK=[[/^\+|ekle|qo.?sh|добав|\badd\b|yeni |new /i,'plus'],[/sil\b|o.?chir|удал|delete|remove|^[×✕]$/i,'trash'],[/kopyala|nusxa|копир|copy/i,'copy'],[/yükle\b|upload|загруз|yuklash/i,'upload'],[/pdf|excel|indir|yuklab|скача|download|dışa|export/i,'download'],[/yazdır|\bbas\b|yeniden bas|chop|печат|print/i,'printer'],[/düzenle|tahrir|редакт|edit/i,'edit'],[/gönder|yubor|отправ|send|paylaş|share|yayınla|publish|nashr|опубл|aktar|uzat|передат|push|davet/i,'send'],[/✓|onay|kaydet|saqla|сохран|save|approve|tasdiq|утверд|ödendi|paid|оплач|işaretle|mark|belgila|отмет|teyit|confirm|bitti|done|kayda/i,'check'],[/geri|orqaga|назад|back/i,'back'],[/kapat|yopish|закрыть|close/i,'x'],[/sıfırla|reset|qayta|заново|refresh|yenile/i,'refresh'],[/aç\b|ochish|открыть|open|bak\b|gör|ko.?r|view|önizle|preview|просмотр|like/i,'eye']];
const GHD=[[/gider|xarajat|расход|cost|expense|ödeme|payment|toʻlov|оплат|finans|moliya|финанс|tahsilat|gelir|income|kâr|profit|foyda|прибыл|fiyat|price|tarif|narx|цен/i,'finans'],[/otel|hotel|mehmonxona|отел|konaklama/i,'otel'],[/gezi|tour|sayohat|поездк|экскурс|rota/i,'gezi'],[/rapor|report|hisobot|отчёт|отчет|anket|survey/i,'rapor'],[/kiosk|киоск|kart\b|badge|karta/i,'kart'],[/rol|role|ekip|team|jamoa|команд|kişi|person|участник|katılımcı|heyet|delegat|firma|company|фирм|alıcı|buyer|xaridor|покупат/i,'katilimci'],[/görev|task|vazifa|задач|aşama|stage/i,'gorev'],[/mesaj|şablon|template|message|xabar|сообщ|шаблон|davet/i,'mesaj'],[/telegram|bot/i,'telegram'],[/rıza|consent|riza|согласи|belge|document|hujjat|sigorta|insur/i,'riza'],[/acil|emergency|sos|favqulodda|экстрен|hastane|hospital/i,'acil'],[/paket|package|kargo|cargo|numune|sample|namuna|груз|образц/i,'paket'],[/sponsor|спонсор/i,'sponsor'],[/medya|media|медиа|instagram|linkedin/i,'medya'],[/katalog|catalog|каталог/i,'katalog'],[/bülten|bulletin|byulleten|бюллетень/i,'bulten'],[/tarih|date|takvim|calendar|sana|дата|plan\b|zaman/i,'takvim'],[/program|dastur|програм|schedule|oturum|akış|session|seans|salon|zal\b|зал|alan\b|mekân|venue|masa|table|stol|стол/i,'akis'],[/arama|call|qoʻng|звонок|çağrı/i,'cagri'],[/yardım|help|rehber|guide|gid\b|гид|ёрдам|помощ|adım|step/i,'rehber'],[/lojistik|logist|transfer|ulaşım|transport|uçuş|flight|yemek|restoran|meal/i,'lojistik'],[/takip|follow|sonuç|result|natija|итог|результат|görüşme|meeting|uchrashuv|встреч/i,'takip'],[/evren|universe|katalog|firmalar/i,'evren']];
function gIcon(txt,rules,dflt){for(const [re,n] of rules)if(re.test(txt))return n;return dflt}
function enhance(r){const pg=document.getElementById('pg');
 /* bağlar: rolün açamadığı ekrana giden bağ kilitli çip olur (vLock'a düşmesin) */
 if(ROLE!=='yon')pg.querySelectorAll('a[href^="#uz-"]').forEach(a=>{const k=a.getAttribute('href').slice(1).split('~')[0];if(!V[k]||canR(ROLE,k))return;
  const who=Object.keys(RK).filter(x=>canR(x,k)).map(x=>RK[x].n[L]).join(', ');a.removeAttribute('href');a.classList.add('nolink');a.setAttribute('aria-disabled','true');a.title=t('nolk')+' '+who;if(!a.querySelector('.nlk'))a.insertAdjacentHTML('afterbegin',ik('lock','ik-16 nlk'))});
 /* Ekip: yalnız patron değiştirir */
 if(r==='uz-ekip'&&!isBoss()){pg.querySelectorAll('select[data-tadd]').forEach(x=>x.remove());pg.querySelectorAll('[data-trm]').forEach(x=>x.remove())}
 /* işlem yetkisi: tahsilatı Finans/patron kapatır; etkinliği Satış/patron açar ve düzenler */
 if(!isBoss()&&ROLE!=='fin')pg.querySelectorAll('[data-paid]').forEach(x=>x.remove());
 if(!isBoss()&&ROLE!=='sat')pg.querySelectorAll('[data-evedit],[data-evdel],[data-evnew]').forEach(x=>x.remove());
 /* başlıklara ikon */
 const mi=(ICON[r]||(ROUTES.find(z=>z[0]===r)||[])[1]||'gorev');
 pg.querySelectorAll('.c h2').forEach(h=>{if(h.closest('.modal')||h.querySelector('svg')||h.querySelector('.ik'))return;h.insertAdjacentHTML('afterbegin',ik(gIcon(h.textContent,GHD,mi),'ik-16 hi'))});
 /* düğmelere ikon */
 pg.querySelectorAll('.btn').forEach(b=>{if(b.closest('.fzbar,.seg')||b.querySelector('svg')||b.classList.contains('nolink'))return;const tx=b.textContent.trim();if(!tx)return;
  let n=gIcon(tx,GIK,'');if(!n){const hf=(b.getAttribute('href')||'').slice(1).split('~')[0];if(hf&&V[hf])n=(ICON[hf]||(ROUTES.find(z=>z[0]===hf)||[])[1]);}
  if(!n)n=b.dataset.pub?'kiosk':'arrow';
  if(/^[✓×✕+▶☰]$/.test(tx)){b.setAttribute('aria-label',b.getAttribute('aria-label')||tx);b.innerHTML=ik(tx==='+'?'plus':tx==='✓'?'check':tx==='▶'?'eye':tx==='☰'?'rapor':'x','ik-16');return}
  b.insertAdjacentHTML('afterbegin',ik(n,'ik-16 bi'))});
 pg.querySelectorAll('.fzh h2 .hi,.fzh .hi').forEach(x=>x.style.color='var(--rc)')}
"""
CSS=r"""
/* UZ-v23: cam görünümlü kartlar, rol matrisi, kilitli bağ */
body{background:radial-gradient(900px 520px at 88% -8%,color-mix(in srgb,var(--rc) 28%,transparent),transparent 62%),radial-gradient(760px 520px at -6% 28%,color-mix(in srgb,#2f6fd0 18%,transparent),transparent 60%),radial-gradient(700px 480px at 60% 110%,color-mix(in srgb,#7c5cc4 15%,transparent),transparent 62%),linear-gradient(180deg,var(--bg2),var(--bg));background-attachment:fixed}
.c{background:color-mix(in srgb,var(--card) 56%,transparent);-webkit-backdrop-filter:blur(14px) saturate(1.3);backdrop-filter:blur(14px) saturate(1.3);border-color:color-mix(in srgb,var(--line) 70%,#fff);box-shadow:0 1px 0 rgba(255,255,255,.55) inset,0 6px 22px -14px rgba(11,37,69,.28)}
.c.fzc{background:color-mix(in srgb,var(--card) 42%,transparent)}
.c .hi{margin-right:7px;vertical-align:-3px;color:var(--rc)}
.btn .bi{opacity:.9}
.btn{background:color-mix(in srgb,var(--card) 74%,transparent)}
.nolink{opacity:.5;cursor:not-allowed!important;pointer-events:auto;text-decoration:none!important}
.nolink .nlk{margin-right:5px}
table.mx{border-collapse:collapse;width:100%}
.mx td,.mx th{background:none!important;border-radius:0!important;box-shadow:none!important}
.mx td:first-child{text-align:left;white-space:nowrap}
.mx td:first-child .gl{display:inline;margin-left:8px}
.mx tbody tr:not(.mxg):hover td{background:color-mix(in srgb,var(--soft) 45%,transparent)!important}
.mx th,.mx td{padding:6px 8px;font-size:.78rem;border-bottom:1px solid var(--line2);vertical-align:middle}
.mx thead th{font-size:.68rem;text-align:center;font-weight:700;white-space:normal}
.mx .mxc{text-align:center}.mx .mxn{color:var(--mut);opacity:.5}
.mx .mxg th{text-align:left;background:color-mix(in srgb,var(--soft) 60%,transparent);font-size:.7rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ink2)}
.mx .mxs{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px;background:var(--g,var(--rc))}
.mx .mxs.gp1{--g:#2f6fd0}.mx .mxs.gp5{--g:#12908a}.mx .mxs.gp4{--g:#7c5cc4}.mx .mxs.gp2{--g:#d4811a}.mx .mxs.gp3{--g:#cc4777}.mx .mxs.gp6{--g:#5b9a2a}
.mx .mxl{display:inline-flex;gap:7px;align-items:center;color:var(--ink);text-decoration:none;font-weight:600}
.mx .mxl:hover{color:var(--rc)}
.rk[data-asr]{border:1px solid var(--line);background:var(--card)}
"""
rep('</style>',CSS+'</style>')
# JS: fold betiğinden hemen sonra (fzSub keydown öncesi) ekle
i=s.index("document.addEventListener('keydown',e=>{const h=e.target.closest&&e.target.closest('.fzsh')")
s=s[:i]+JS+s[i:]
open(p,'w').write(s)
ik=json.load(open(ip))
G={'plus':'<path class="a" d="M12 7v10M7 12h10"/><circle cx="12" cy="12" r="9"/>',
'check':'<circle cx="12" cy="12" r="9"/><path class="a" d="m8 12.5 2.8 2.8L16 9.5"/>',
'send':'<path d="M21 3 3 10.5l7 2.5 2.5 7z"/><path class="a" d="M10 13 21 3"/>',
'copy':'<rect x="9" y="9" width="11" height="11" rx="2.5"/><path class="a" d="M5 15V6a2 2 0 0 1 2-2h8"/>',
'download':'<path d="M4 17v3h16v-3"/><path class="a" d="M12 4v11m-4-4 4 4 4-4"/>',
'upload':'<path d="M4 17v3h16v-3"/><path class="a" d="M12 15V4m-4 4 4-4 4 4"/>',
'edit':'<path d="M4 20h4L19 9l-4-4L4 16z"/><path class="a" d="m13.5 6.5 4 4"/>',
'trash':'<path d="M5 7h14M9 7V4.5h6V7M7 7l1 13h8l1-13"/><path class="a" d="M10 11v6M14 11v6"/>',
'x':'<circle cx="12" cy="12" r="9"/><path class="a" d="m9 9 6 6m0-6-6 6"/>',
'arrow':'<path d="M5 12h13"/><path class="a" d="m13 7 5 5-5 5"/>',
'back':'<path d="M19 12H6"/><path class="a" d="m11 7-5 5 5 5"/>',
'eye':'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle class="a" cx="12" cy="12" r="2.8"/>',
'refresh':'<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path class="a" d="M20 4v5h-5"/>',
'lock':'<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path class="a" d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3M12 14.5v2"/>',
'tarife':'<path d="M3.5 12.5V4.5h8l9 9-8 8z"/><circle class="a" cx="8" cy="9" r="1.6"/><path class="a" d="m12 13 3 3"/>',
'printer':'<path d="M7 9V3.5h10V9M7 17H4.5v-7h15v7H17"/><path class="a" d="M7 14h10v6.5H7z"/>'}
ik.update(G);json.dump(ik,open(ip,'w'),ensure_ascii=False)
print('tamam')
