# Kullanım rehberini iş akışı sırasına çevirir (firma girişinden sonuca tek çizgi). UZ-YARDIM yaması uygulanmış kaynağa uygulanır.
# Kullanım: python3 -I yardim-sira-yamasi.py <uz.src.html> UZ-v12
import json,os,re,sys
src,ver=sys.argv[1],sys.argv[2]
h=os.path.dirname(os.path.abspath(__file__))
s=open(src).read()
if 'UZ-YARDIM' not in s: sys.exit('önce yardim-yamasi.py')
if 'YSIRA' in s: sys.exit('zaten uygulanmış')
HS={k:{'t':v['t'],'sn':v['sn'],'st':v['st']} for k,v in json.load(open(os.path.join(h,'steps.json'))).items()}
s,c=re.subn(r"const HS=\{.*?\};\n","const HS="+json.dumps(HS,ensure_ascii=False).replace('\\','\\\\')+";\n",s,count=1,flags=re.S);assert c==1
a=s.index('function vYardim(){');b=s.index("V['uz-yardim']=vYardim")
new=r'''/* YSIRA: rehber iş akışı sırasıyla, firma girişinden sonuca */
const YPH=[[T4('Hazırlık ve satış','Tayyorgarlik va savdo','Подготовка и продажи','Preparation & sales'),[['uz-evren','sat'],['uz-etkinlik','sat'],['uz-teklif','sat','yon'],['uz-sponsor','sat']]],
 [T4('Davet ve kayıt','Taklif va roʻyxat','Приглашения и регистрация','Invitations & registration'),[['uz-cagri','cag'],['uz-riza','cag']]],
 [T4('Program','Dastur','Программа','Program'),[['uz-program','prg'],['uz-akis','prg'],['uz-mekan','prg','loj']]],
 [T4('Lojistik ve gezi','Logistika va sayohat','Логистика и поездки','Logistics & tours'),[['uz-lojistik','loj'],['uz-gezi','loj'],['uz-rehber','loj'],['uz-numune','loj']]],
 [T4('Yayın ve tanıtım','Nashr va targʻibot','Публикации','Publishing'),[['uz-katalog','yay'],['uz-telegram','yay'],['uz-bulten','yay'],['uz-medya','yay']]],
 [T4('Etkinlik günü','Tadbir kuni','День мероприятия','Event day'),[['uz-kiosk','saha','prg'],['uz-gun','saha'],['uz-acil','saha','loj']]],
 [T4('Sonuç ve para','Natija va moliya','Итоги и деньги','Outcome & money'),[['uz-sonuc','cag'],['uz-finans','fin'],['uz-rapor','fin','yon'],['uz-pano','yon']]],
 [T4('Ek: her gün kullanılan ekranlar','Har kuni','Каждый день','Daily screens'),[['uz-ana'],['uz-gorev'],['uz-ekip','yon']]]];
Object.assign(D,{yours:{tr:'Sizin işiniz',uz:'Sizning ishingiz',ru:'Ваша задача',en:'Your step'},onlymine:{tr:'Yalnız rolümün adımları',uz:'Faqat mening rolim',ru:'Только моя роль',en:'Only my role'},ystep:{tr:'Aşama',uz:'Bosqich',ru:'Этап',en:'Stage'}});
D.s_yardim={tr:'Bir etkinliğin akışı firma bilgilerinin girişiyle başlar ve sonuçla biter. Her adımın kısa videosu ve maddeleri var; her ekranda üst çubuktaki ? aynı adımı açar.',uz:'Jarayon firma maʼlumotlarini kiritishdan boshlanib, natija bilan tugaydi. Har ekranda ? shu qadamni ochadi.',ru:'Процесс начинается с ввода данных о фирмах и заканчивается итогами. Кнопка ? на каждом экране открывает этот шаг.',en:'The flow starts with entering firm data and ends with outcomes. The ? on each screen opens that step.'};
function vYardim(){let n=0;
 return head('uz-yardim')+`
 <div class="note" style="align-items:center;flex-wrap:wrap">${ik('rehber','ik-16')}<span style="flex:1;min-width:200px"><b>${RK[ROLE].n[L]}</b> · ${Object.keys(HS).length} video · ${t('trnote')}</span><a class="btn" href="${GUIDE}rol-${ROLE}" target="_blank" rel="noopener">${t('onlymine')} ↗</a><a class="btn p" href="${GUIDE}faz-0" target="_blank" rel="noopener">▶ ${t('allg')} ↗</a></div>
 <div class="grid g2" style="margin-top:14px">${YPH.map((p,pi)=>`<div class="c"><div class="ey">${pi<YPH.length-1?t('ystep')+' '+(pi+1):'+'}</div><h2 style="margin:2px 0 8px">${p[0][L]}</h2><div>${p[1].map(x=>{const k=x[0],rs=x.slice(1),me=ROLE==='yon'||rs.includes(ROLE),no=pi<YPH.length-1?++n:'·',hh=HS[k];
  return `<div class="yr nar" style="${me&&rs.length?'background:var(--soft);border-radius:10px;padding-inline:8px;':''}"><span style="width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:#0b2545;color:#fff;font-weight:800;font-size:.8rem">${no}</span><div style="min-width:0"><b style="font-size:.88rem">${t(k)}</b> ${rs.map(r=>`<span class="rk" style="color:${RK[r].c};font-size:.7rem">${RK[r].n[L]}</span>`).join(' ')}${me&&rs.length&&ROLE!=='yon'?` <span class="pill ok">${t('yours')}</span>`:''}<div class="cs" style="margin:0;font-size:.76rem">${hh?hh.sn+' sn · '+hh.st[0]:''}</div></div><div class="a"><button class="btn" type="button" data-hlp="${k}" style="font-size:.76rem">${t('hsteps')}</button><a class="btn p" href="${GUIDE}${k}" target="_blank" rel="noopener" style="font-size:.76rem">▶ ${t('watch')}</a>${canR(ROLE,k)?`<a class="btn" href="#${k}" style="font-size:.76rem">${t('openscr')}</a>`:''}</div></div>`}).join('')}</div></div>`).join('')}</div>`}
'''
s=s[:a]+new+s[b:]
s=re.sub(r"const VER='UZ-v\d+'","const VER='%s'"%ver,s)
s=re.sub(r'(<button class="ver" id="verb" type="button">)UZ-v\d+',r'\g<1>'+ver,s)
assert s.count("const CHANGES=[")==1
s=s.replace("const CHANGES=[","const CHANGES=[['%s','18.11.2026','Kullanım rehberi iş akışı sırasıyla: firma bilgilerinin girişinden (Firma evreni) başlar; Hazırlık ve satış → Davet ve kayıt → Program → Lojistik ve gezi → Yayın → Etkinlik günü → Sonuç ve para, 24 numaralı adım + her gün kullanılan 3 ekran. Her adımda sorumlu rol, rolünüzün adımları vurgulu; ayrı rehber sayfası da aynı sırada (Yalnız rolümün adımları filtresi).'],"%ver)
open(src,'w').write(s);print('ok',ver)
