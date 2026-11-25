/* ---- UZ-v17 adayı: Etkinlik sonrası 12 aylık takip (aylık hatırlatma, temas kaydı, sonuç türleri, anket, rapor) ---- */
const TKX={
 s_son:T4('Etkinlik Sonuç aşamasına geçince her B2B eşleşmesi için 12 aylık takip planı kendiliğinden açılır. Ekip her ay hatırlatılır; temaslar, sonraki adımlar ve sonuçlar (temsilcilik, distribütörlük, satış, şirket kurulumu…) burada tutulur. Sonuç raporu kuruluşa dosya olarak gider.','Tadbir Natija bosqichiga oʻtgach, har bir B2B juftlik uchun 12 oylik kuzatuv rejasi avtomatik ochiladi. Jamoaga har oy eslatiladi; aloqalar, keyingi qadamlar va natijalar shu yerda.','Когда мероприятие переходит в этап «Итоги», для каждой B2B-пары автоматически открывается 12-месячный план контроля. Команде приходит ежемесячное напоминание; контакты, шаги и результаты хранятся здесь.','When an event reaches Results, a 12-month follow-up plan opens for every B2B match. The team gets a monthly reminder; contacts, next steps and outcomes are kept here.'),
 ay:T4('Bu ay','Shu oy','Этот месяц','This month'),plan:T4('12 ay planı','12 oylik reja','План на 12 мес.','12-month plan'),sonuc:T4('Sonuçlar','Natijalar','Результаты','Outcomes'),rapor:T4('Etkinlik sonucu','Tadbir natijasi','Итоги мероприятия','Event results'),
 due:T4('Bu ay aranacak / yazılacak','Shu oy qoʻngʻiroq / xabar','В этом месяце связаться','Due this month'),late:T4('Geciken takip','Kechikkan kuzatuv','Просроченный контроль','Overdue follow-ups'),
 heat:T4('Sıcak · ılık · soğuk','Issiq · iliq · sovuq','Горячие · тёплые · холодные','Hot · warm · cold'),res:T4('Takipten sonuç','Kuzatuv natijasi','Результаты контроля','Outcomes from follow-up'),
 h:T4('Sıcak','Issiq','Горячий','Hot'),w:T4('Ilık','Iliq','Тёплый','Warm'),c:T4('Soğuk','Sovuq','Холодный','Cold'),
 all:T4('Tümü','Hammasi','Все','All'),allev:T4('Tüm etkinlikler','Barcha tadbirlar','Все мероприятия','All events'),allow:T4('Tüm sorumlular','Barcha masʼullar','Все ответственные','All owners'),
 auto:T4('Plan otomatik açıldı','Reja avtomatik ochildi','План открыт автоматически','Plan opened automatically'),
 autod:T4('eşleşme · Makine B2B Sonuç aşamasına geçince (18.02.2027) 96 görüşmeden plan açılır.','juftlik · Mashinasozlik B2B natija bosqichiga oʻtganda (18.02.2027) reja ochiladi.','пар · план для B2B Машиностроение откроется после этапа «Итоги» (18.02.2027).','matches · Machinery B2B opens its plan when it reaches Results (18 Feb 2027).'),
 remset:T4('Hatırlatma: her ayın 1’i 09:00 ve takip tarihinden 3 gün önce, sorumluya Telegram + e-posta (prototipte taklit).','Eslatma: har oyning 1-kuni 09:00 va muddatdan 3 kun oldin, masʼulga Telegram + e-pochta (prototipda taqlid).','Напоминание: 1-го числа в 09:00 и за 3 дня до срока, ответственному в Telegram + e-mail (в прототипе имитация).','Reminder: on the 1st at 09:00 and 3 days before each due date, to the owner by Telegram + e-mail (simulated).'),
 remind:T4('Ekibe hatırlat','Jamoaga eslatish','Напомнить команде','Remind the team'),
 month:T4('ay','oy','мес.','month'),mo:T4('. ay','-oy','-й мес.',' mo'),
 arama:T4('Arama','Qoʻngʻiroq','Звонок','Call'),mesaj:T4('Mesaj','Xabar','Сообщение','Message'),gorusme:T4('Online görüşme','Onlayn uchrashuv','Онлайн-встреча','Online meeting'),ziyaret:T4('Ziyaret','Tashrif','Визит','Visit'),numune:T4('Numune','Namuna','Образец','Sample'),teklif:T4('Teklif','Taklif','Предложение','Offer'),siparis:T4('Sipariş','Buyurtma','Заказ','Order'),
 thanks:T4('Teşekkür + numune kontrolü','Minnatdorchilik + namuna','Благодарность + образцы','Thank-you + samples'),check:T4('Kısa kontrol','Qisqa nazorat','Короткая проверка','Quick check'),call:T4('Takip araması','Kuzatuv qoʻngʻirogʻi','Контрольный звонок','Follow-up call'),survey:T4('Arama + anket','Qoʻngʻiroq + soʻrovnoma','Звонок + опрос','Call + survey'),visit:T4('Arama veya ziyaret','Qoʻngʻiroq yoki tashrif','Звонок или визит','Call or visit'),close:T4('Arama + anket + kapanış','Qoʻngʻiroq + soʻrovnoma + yakun','Звонок + опрос + закрытие','Call + survey + close'),
 tpl:T4('Şablon','Shablon','Шаблон','Template'),open:T4('Aç','Ochish','Открыть','Open'),
 nxt:T4('Sonraki adım','Keyingi qadam','Следующий шаг','Next step'),when:T4('Tarih','Sana','Дата','Date'),
 tl:T4('12 aylık zaman çizgisi','12 oylik vaqt chizigʻi','Хронология 12 мес.','12-month timeline'),
 log:T4('Temas kaydet','Aloqani yozish','Записать контакт','Log a contact'),ctype:T4('Temas türü','Aloqa turi','Тип контакта','Contact type'),note:T4('Not','Izoh','Заметка','Note'),save:T4('Kaydet','Saqlash','Сохранить','Save'),
 notep:T4('Ne konuşuldu?','Nima gaplashildi?','О чём говорили?','What was discussed?'),nxp:T4('ör. teklif revizyonu gönderilecek','mas. taklif qayta yuboriladi','напр. отправить новое предложение','e.g. send revised offer'),
 out:T4('Sonuç ekle','Natija qoʻshish','Добавить результат','Add outcome'),otype:T4('Sonuç türü','Natija turi','Тип результата','Outcome type'),amt:T4('Tutar ($)','Summa ($)','Сумма ($)','Amount ($)'),olab:T4('Sonuç (serbest metin)','Natija (erkin matn)','Результат (свободный текст)','Outcome (free text)'),
 outs:T4('Sonuçlar','Natijalar','Результаты','Outcomes'),none:T4('Henüz sonuç yok','Hali natija yoʻq','Пока нет результата','No outcome yet'),
 sv:T4('ay anketi','oy soʻrovnomasi','опрос (мес.)','month survey'),sat:T4('Memnuniyet','Mamnunlik','Оценка','Satisfaction'),again:T4('Yine katılır mı?','Yana qatnashadimi?','Примет участие снова?','Would join again?'),yes:T4('Evet','Ha','Да','Yes'),may:T4('Belki','Balki','Возможно','Maybe'),no:T4('Hayır','Yoʻq','Нет','No'),svdone:T4('Anket kaydedildi','Soʻrovnoma saqlandi','Опрос сохранён','Survey saved'),
 svnote:T4('Ekip anketi telefonda doldurur ya da mesaja gelen yanıtı girer; firmalar sisteme girmez.','Soʻrovnomani jamoa telefonda toʻldiradi; firmalar tizimga kirmaydi.','Команда заполняет опрос по телефону; компании в систему не входят.','The team fills the survey on the call; firms never log in.'),
 funnel:T4('Dönüşüm hunisi','Konversiya voronkasi','Воронка конверсии','Conversion funnel'),dist:T4('Sonuç türü dağılımı','Natija turlari','Распределение результатов','Outcome types'),
 f0:T4('B2B görüşme','B2B uchrashuv','B2B-встреча','B2B meeting'),f1:T4('İletişim sürüyor','Aloqa davom etyapti','Общение продолжается','Still in touch'),f2:T4('Numune / deneme','Namuna / sinov','Образцы / проба','Sample / trial'),f3:T4('Teklif / müzakere','Taklif / muzokara','Предложение / переговоры','Offer / negotiation'),f4:T4('Sonuç alındı','Natija olindi','Есть результат','Outcome reached'),
 pair:T4('Firma ↔ alıcı','Firma ↔ xaridor','Компания ↔ покупатель','Firm ↔ buyer'),ev:T4('Etkinlik','Tadbir','Мероприятие','Event'),
 tkm:T4('Mesaj şablonu','Xabar shabloni','Шаблон сообщения','Message template'),to:T4('Alıcı','Qabul qiluvchi','Получатель','Recipient'),trf:T4('TR firma','TR firma','Турецкая компания','TR firm'),uzb:T4('UZ alıcı','UZ xaridor','UZ покупатель','UZ buyer'),
 sent:T4('Gönderildi, kayda ekle','Yuborildi, tarixga qoʻshish','Отправлено, в историю','Sent, add to log'),copy:T4('Kopyala','Nusxalash','Копировать','Copy'),
 callnote:T4('12 ay takip','12 oy kuzatuv','Контроль 12 мес.','12-month follow-up'),
 home:T4('Bu ay takip','Shu oy kuzatuv','Контроль в этом месяце','Follow-up this month'),
 tasks:T4('Aylık takip (etkinlik sonrası)','Oylik kuzatuv (tadbirdan keyin)','Ежемесячный контроль (после мероприятия)','Monthly follow-up (after events)'),
 ago:T4('gün gecikti','kun kechikdi','дн. просрочено','days late'),
 rep:T4('12 aylık takip raporu','12 oylik kuzatuv hisoboti','Отчёт о контроле за 12 мес.','12-month follow-up report'),
 extra:T4('ek temas','qoʻshimcha aloqa','доп. контакт','extra contact'),
 pick:T4('Soldan bir eşleşme seçin.','Chapdan juftlikni tanlang.','Выберите пару слева.','Pick a match on the left.'),
 nolate:T4('Geciken takip yok.','Kechikkan kuzatuv yoʻq.','Просроченных нет.','No overdue follow-ups.'),
 closed:T4('12 ay tamamlandı','12 oy yakunlandi','12 мес. завершены','12 months complete'),
};
const tk_=k=>TKX[k][L];
const OT={
 temsil:{n:T4('Temsilcilik açma','Vakolatxona ochish','Открытие представительства','Representative office'),c:'#1f6fc5'},
 dist:{n:T4('Distribütörlük','Distribyutorlik','Дистрибуция','Distributorship'),c:'#2b8fb8'},
 satis:{n:T4('Satış / sipariş','Savdo / buyurtma','Продажа / заказ','Sale / order'),c:'#139a83'},
 sirket:{n:T4('Şirket kurulumu','Kompaniya ochish','Открытие компании','Company set-up'),c:'#7a5bd0'},
 ortak:{n:T4('Ortak girişim','Qoʻshma korxona','Совместное предприятие','Joint venture'),c:'#0b2545'},
 numune:{n:T4('Numune / deneme','Namuna / sinov','Образцы / проба','Sample / trial'),c:'#c27a12'},
 yok:{n:T4('Sonuç yok','Natija yoʻq','Нет результата','No outcome'),c:'#8ea2b8'},
 diger:{n:T4('Diğer','Boshqa','Другое','Other'),c:'#5b6b7d'},
};
const OTPOS=['temsil','dist','satis','sirket','ortak','diger'];
const CTY=['arama','mesaj','gorusme','ziyaret','numune','teklif','siparis'];
/* Etkinlik bitiş tarihi = takip başlangıcı */
const TKE={mobilya:[2026,5,23],kimya:[2026,9,4],insaat:[2026,10,16]};
const TKEN={mobilya:T4('Mobilya ve Dekorasyon B2B (Taşkent)','Mebel va dekor B2B (Toshkent)','B2B Мебель и декор (Ташкент)','Furniture & Décor B2B (Tashkent)'),kimya:T4('Kimya ve Plastik B2B (Taşkent)','Kimyo va plastmassa B2B (Toshkent)','B2B Химия и пластик (Ташкент)','Chemicals & Plastics B2B (Tashkent)'),insaat:T4('İnşaat Malzemeleri B2B (Taşkent)','Qurilish materiallari B2B (Toshkent)','B2B Стройматериалы (Ташкент)','Building Materials B2B (Tashkent)')};
/* Eşleşmeler: örnek veri. log: [tarih, tür, ekip, not, ay, ek?] · dn: kaydı özetlenmiş tamamlanan aylar · O: [tür, tarih, tutar, not, sonraki adım, serbest ad] */
const TKP=[
 {id:'t1',ev:'mobilya',tr:'İnegöl Mobilya',uz:'ООО «Ташкент Мебель Групп»',ug:'Taşkent Mobilya Grup Ltd.',ow:'e2',h:'h',st:3,dn:[3,5],nx:['23.11.2026','6. ay araması + anket'],
  log:[['02.06.2026','gorusme','e2','Online görüşme: Rusça fiyat listesi istendi.',1],['14.07.2026','numune','e2','12 parça numune Taşkent showroom’a ulaştı.',2],['12.09.2026','siparis','e4','Distribütörlük sözleşmesi imzalandı, ilk sipariş geldi.',4]],
  O:[['dist','12.09.2026',86000,'Taşkent ve Semerkant için 2 yıllık distribütörlük','Ocak’ta 2. sipariş']]},
 {id:'t2',ev:'mobilya',tr:'Kayseri Ofis Mobilya',uz:'«Samarqand Mebel Savdo» MChJ',ug:'Semerkant Mobilya Ticaret Ltd.',ow:'e4',h:'w',st:3,dn:[1,2,3,4,5],nx:['23.11.2026','6. ay araması + anket'],
  log:[['28.08.2026','siparis','e4','Ofis koltuğu ilk siparişi (deneme partisi).',0,1]],O:[['satis','28.08.2026',24500,'Ofis koltuğu, 180 adet','Aralık’ta tekrar sipariş']]},
 {id:'t3',ev:'mobilya',tr:'Ankara Dekor Kumaş',uz:'«Namangan Interyer» MChJ',ug:'Namangan İç Mimari Ltd.',ow:'e2',h:'c',st:0,dn:[1,2,3],nx:['18.11.2026','Telegram ile yeniden yaz'],
  log:[['25.09.2026','arama','e2','Ulaşılamadı, telefon kapalı.',0,1]],O:[]},
 {id:'t4',ev:'mobilya',tr:'Bursa Ahşap Panel',uz:'ООО «Ташкент Мебель Групп»',ug:'Taşkent Mobilya Grup Ltd.',ow:'e3',h:'h',st:3,dn:[1,2,3,4,5],nx:['23.11.2026','Hukuk danışmanıyla toplantı'],
  log:[['10.10.2026','ziyaret','e3','Taşkent’te ofis yeri gezildi; temsilcilik kararı alındı.',0,1]],O:[['temsil','10.10.2026',0,'Taşkent’te temsilcilik ofisi açılıyor','Kayıt için hukuk danışmanı (Aralık)']]},
 {id:'t5',ev:'kimya',tr:'Kocaeli Plastik',uz:'«Buxoro Plast» XK',ug:'Buhara Plast ÖŞ',ow:'e4',h:'h',st:3,dn:[1,2],nx:['04.12.2026','3. ay araması: yıllık anlaşma'],
  log:[['20.10.2026','siparis','e4','PE granül, 3 konteyner sipariş.',0,1]],O:[['satis','20.10.2026',61000,'PE granül, 3 konteyner','Yıllık anlaşma görüşmesi Ocak']]},
 {id:'t6',ev:'kimya',tr:'Dilovası Boya',uz:'«Toshkent Kimyo Savdo» MChJ',ug:'Taşkent Kimya Ticaret Ltd.',ow:'e2',h:'w',st:1,dn:[1],nx:['20.11.2026','Laboratuvar sonucu sor'],
  log:[['25.09.2026','numune','e2','Boya numunesi laboratuvar testinde.',1]],O:[['numune','25.09.2026',0,'20 kg boya numunesi testte','Test sonucu Kasım sonu']]},
 {id:'t7',ev:'kimya',tr:'Gebze Ambalaj Film',uz:'«Namangan Oziq-ovqat» MChJ',ug:'Namangan Gıda Ltd.',ow:'e3',h:'w',st:2,dn:[1,2],nx:['28.11.2026','Teklif revizyonu gönderilecek'],log:[],O:[]},
 {id:'t8',ev:'kimya',tr:'İzmir Kimya',uz:'«Andijon Polimer» MChJ',ug:'Andican Polimer Ltd.',ow:'e2',h:'c',st:0,dn:[],nx:['18.11.2026','Son kez ara, ilgi yoksa 6. ayda tekrar'],
  log:[['30.09.2026','arama','e2','Yerli tedarikçiyle devam ediyor.',0,1]],O:[['yok','30.09.2026',0,'Alıcı yerli tedarikçiyle devam ediyor','6. ayda tekrar dene']]},
 {id:'t9',ev:'insaat',tr:'Erciyes Yapı Kimya',uz:'«Toshkent Qurilish Savdo» MChJ',ug:'Taşkent İnşaat Ticaret Ltd.',ow:'e4',h:'h',st:2,dn:[],nx:['10.12.2026','Fizibilite toplantısı'],
  log:[['10.11.2026','gorusme','e4','Dolum tesisi için ortak girişim görüşmesi.',1]],O:[['ortak','10.11.2026',0,'Taşkent’te yapı kimyasalı dolum tesisi','Fizibilite Aralık']]},
 {id:'t10',ev:'insaat',tr:'Anadolu Seramik',uz:'ООО «Самарканд Керамика»',ug:'Semerkant Seramik Ltd.',ow:'e3',h:'w',st:1,dn:[1],nx:['05.12.2026','Numune geri bildirimi'],log:[],O:[]},
 {id:'t11',ev:'insaat',tr:'Ankara Hırdavat',uz:'«Xorazm Savdo Uyi» MChJ',ug:'Harezm Ticaret Evi Ltd.',ow:'e2',h:'c',st:0,dn:[],nx:['16.11.2026','1. ay teşekkür mesajı'],log:[],O:[]},
 {id:'t12',ev:'insaat',tr:'Bilecik Mermer',uz:'«Qarshi Qurilish» MChJ',ug:'Karşi İnşaat Ltd.',ow:'e2',h:'w',st:0,dn:[],nx:['16.11.2026','1. ay teşekkür mesajı'],
  log:[['12.11.2026','mesaj','e2','Taşkent yapı fuarında ortak stant önerdiler.',0,1]],O:[['diger','12.11.2026',0,'Fuarda ortak stant','Fuar başvurusu Ocak','Ortak fuar katılımı']]},
 {id:'t13',ev:'insaat',tr:'Kayseri Alüminyum Profil',uz:'«Toshkent Qurilish Savdo» MChJ',ug:'Taşkent İnşaat Ticaret Ltd.',ow:'e4',h:'h',st:2,dn:[1],nx:['08.12.2026','Cizzah serbest bölge görüşmesi'],
  log:[['05.11.2026','gorusme','e4','Özbekistan’da üretim şirketi kurmak istiyor; yer arıyor.',0,1]],O:[['sirket','05.11.2026',0,'Profil üretimi için şirket kurulumu','Serbest bölge (Cizzah) Aralık']]},
];
let TKS={tab:'ay',sel:'t6',ev:'all',ow:'all',hf:'all',ct:'arama',ot:'satis',f:{},sv:{},m:{ch:'Telegram',side:'uz',l:''}};
const tkp=id=>TKP.find(p=>p.id===id);
const tkPad=n=>String(n).padStart(2,'0');
const tkDn=s=>{const a=s.split('.').map(Number);return a[2]*10000+a[1]*100+a[0]};
const tkDue=(p,m)=>{const e=TKE[p.ev];let mo=e[1]+m,y=e[0]+Math.floor((mo-1)/12);mo=(mo-1)%12+1;return {n:y*10000+mo*100+e[2],s:tkPad(e[2])+'.'+tkPad(mo)+'.'+y}};
const TKM=Math.floor(TODAY/100);
const tkKind=m=>m===1?['mesaj','thanks']:m===12?['arama','close']:m===6?['arama','survey']:m===9?['arama','visit']:m===3?['arama','call']:['mesaj','check'];
const tkKindL=m=>tk_(tkKind(m)[1]);
const tkDone=p=>{const s=new Set(p.dn);p.log.forEach(l=>{if(l[4]&&!l[5])s.add(l[4])});return s};
const tkSt=(p,m)=>{if(tkDone(p).has(m))return 'ok';const d=tkDue(p,m).n;if(d<TODAY)return 'bad';if(Math.floor(d/100)===TKM)return 'wr';return 'mu'};
const tkOpen=p=>{const r=[];for(let m=1;m<=12;m++){const s=tkSt(p,m);if(s==='bad'||s==='wr')r.push([m,s])}return r};
const tkElapsed=p=>{let k=0;for(let m=1;m<=12;m++)if(Math.floor(tkDue(p,m).n/100)<=TKM)k=m;return k};
const tkF=()=>TKP.filter(p=>(TKS.ev==='all'||p.ev===TKS.ev)&&(TKS.ow==='all'||p.ow===TKS.ow)&&(TKS.hf==='all'||p.h===TKS.hf));
const tkLateDays=(p,m)=>{const d=tkDue(p,m),a=new Date(Math.floor(d.n/10000),Math.floor(d.n/100)%100-1,d.n%100),b=new Date(Math.floor(TODAY/10000),Math.floor(TODAY/100)%100-1,TODAY%100);return Math.round((b-a)/864e5)};
const tkHeatP=h=>`<span class="pill ${h==='h'?'bad':h==='w'?'wr':'mu'}">${tk_(h)}</span>`;
const tkAmt=n=>n?'$ '+Math.round(n).toLocaleString('tr-TR'):'—';
const tkUz=p=>`${p.uz}<span class="gl" style="display:block">${p.ug}</span>`;
const tkEvS=id=>ev(id).n.replace(' B2B','');
const tkPos=p=>p.O.filter(o=>OTPOS.includes(o[0]));
const tkON=o=>o[0]==='diger'&&o[5]?o[5]:OT[o[0]].n[L];
function tkFun(list){const n=list.length;return [[tk_('f0'),n],[tk_('f1'),list.filter(p=>p.h!=='c').length],[tk_('f2'),list.filter(p=>p.st>=1||p.O.some(o=>o[0]==='numune')).length],[tk_('f3'),list.filter(p=>p.st>=2).length],[tk_('f4'),list.filter(p=>tkPos(p).length).length]]}
function tkDist(list){const m={};list.forEach(p=>p.O.forEach(o=>{m[o[0]]=m[o[0]]||{n:0,a:0};m[o[0]].n++;m[o[0]].a+=o[2]||0}));return Object.keys(OT).filter(k=>m[k]).map(k=>[k,m[k].n,m[k].a])}
function tkFunHTML(list){const f=tkFun(list),mx=Math.max(1,f[0][1]);return f.map((x,i)=>`<div class="bar"><span>${x[0]}</span><span class="tr"><i style="width:${x[1]/mx*100}%;background:${['var(--rc2)','var(--rc)','var(--wr)','#7a5bd0','var(--ok)'][i]}"></i></span><b>${x[1]}${i?` <span class="gl" style="display:inline">%${Math.round(x[1]/mx*100)}</span>`:''}</b></div>`).join('')}
function tkDistHTML(list){const d=tkDist(list),mx=Math.max(1,...d.map(x=>x[1]));return d.length?d.map(x=>`<div class="bar"><span>${OT[x[0]].n[L]}</span><span class="tr"><i style="width:${x[1]/mx*100}%;background:${OT[x[0]].c}"></i></span><b>${x[1]}${x[2]?` <span class="gl" style="display:inline">${tkAmt(x[2])}</span>`:''}</b></div>`).join(''):`<p class="cs">${tk_('none')}</p>`}

function vTakip(){
 const all=TKP,list=tkF(),op=all.map(p=>[p,tkOpen(p)]).filter(x=>x[1].length);
 const dueN=op.filter(x=>x[1].some(o=>o[1]==='wr')).length,late=op.filter(x=>x[1].some(o=>o[1]==='bad'));
 const pos=all.reduce((a,p)=>a+tkPos(p).length,0),amt=all.reduce((a,p)=>a+p.O.reduce((s,o)=>s+(o[2]||0),0),0);
 const tabs=[['ay',tk_('ay')],['plan',tk_('plan')],['sonuc',tk_('sonuc')],['rapor',tk_('rapor')]];
 const evs=[...new Set(TKP.map(p=>p.ev))];
 const top=`<div class="grid g4" style="margin-bottom:14px">
  <div class="c kp"><small>${tk_('due')}</small><b>${dueN}</b><span>${['Kas 2026','Noy 2026','Ноя 2026','Nov 2026'][LANGS.indexOf(L)]} · ${evs.length} ${t('events').toLowerCase()}</span></div>
  <div class="c kp"><small>${tk_('late')}</small><b style="color:${late.length?'var(--bad)':'inherit'}">${late.length}</b><span>${[...new Set(late.map(x=>sn(x[0].ow)))].join(', ')||'—'}</span></div>
  <div class="c kp"><small>${tk_('heat')}</small><b>${['h','w','c'].map(h=>all.filter(p=>p.h===h).length).join(' · ')}</b><span>${all.length} ${tk_('pair').toLowerCase()}</span></div>
  <div class="c kp"><small>${tk_('res')}</small><b>${pos}</b><span>${tkAmt(amt)} · ${tkDist(all).filter(x=>OTPOS.includes(x[0])).length} ${tk_('otype').toLowerCase()}</span></div>
 </div>
 <div class="note">${ik('takip','ik-16')}<span><b>${tk_('auto')}</b>: ${evs.map(tkEvS).join(', ')} · ${all.length} ${tk_('autod')}<br>${tk_('remset')}</span><button class="btn" type="button" data-furem="1" style="margin-left:auto;flex:none">${ik('bildirim','ik-16')}${tk_('remind')} (${op.length})</button></div>
 <div class="c" style="margin-bottom:14px;padding:10px 12px"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><div class="seg">${tabs.map(([k,n])=>`<button type="button" data-fut="${k}" class="${TKS.tab===k?'on':''}">${n}</button>`).join('')}</div>
  ${TKS.tab!=='rapor'?`<span style="margin-left:auto;display:flex;gap:6px;flex-wrap:wrap">${segSel('fuev',[['all',tk_('allev')]].concat(evs.map(e=>[e,tkEvS(e)])),TKS.ev,tk_('ev'))}${segSel('fuow',[['all',tk_('allow')]].concat([...new Set(TKP.map(p=>p.ow))].map(o=>[o,sn(o)])),TKS.ow,t('owner'))}${segSel('fuhf',[['all',tk_('all')],['h',tk_('h')],['w',tk_('w')],['c',tk_('c')]],TKS.hf,tk_('heat'))}</span>`:''}</div></div>`;
 if(TKS.tab==='rapor'){const h=head('uz-sonuc'),o=vSon();return h+top+o.slice(h.length)}
 const left=TKS.tab==='ay'?tkAy(list):TKS.tab==='plan'?tkPlan(list):tkSonuc(list);
 return head('uz-sonuc')+top+`<div class="grid g21">${left}${tkDetail()}</div>`;
}
function tkRow(p,m,s){const k=tkKind(m),on=TKS.sel===p.id;return `<div class="li" data-fus="${p.id}" style="cursor:pointer;${on?'background:var(--soft);border-radius:10px;padding-left:8px;padding-right:8px':''}"><span class="dt" style="${s==='bad'?'color:var(--bad);background:var(--badb)':''}">${tkDue(p,m).s.slice(0,5)}</span><span class="t"><b>${p.tr} ↔ ${p.uz}</b><span>${tkEvS(p.ev)} · ${m}${tk_('mo')} · ${tkKindL(m)} · ${sn(p.ow)}${s==='bad'?` · <b style="color:var(--bad)">${tkLateDays(p,m)} ${tk_('ago')}</b>`:''}</span></span>${tkHeatP(p.h)}<button class="btn" type="button" data-fumsg="${p.id}" style="padding:3px 9px;font-size:.74rem">${ik(k[0]==='arama'?'cagri':'mesaj','ik-16')}${tk_('tpl')}</button></div>`}
function tkAy(list){
 const it=[];list.forEach(p=>{const o=tkOpen(p);if(o.length)it.push([p,o[0][0],o[0][1],o.length])});
 const late=it.filter(x=>x[2]==='bad').sort((a,b)=>tkDue(a[0],a[1]).n-tkDue(b[0],b[1]).n),due=it.filter(x=>x[2]==='wr').sort((a,b)=>tkDue(a[0],a[1]).n-tkDue(b[0],b[1]).n);
 return `<div class="c"><div class="ch"><div><h2>${tk_('late')}</h2><p class="cs">${late.length} · ${tk_('remset').split(':')[0]}</p></div></div><div class="list">${late.length?late.map(x=>tkRow(x[0],x[1],'bad')).join(''):`<p class="cs">${tk_('nolate')}</p>`}</div>
  <div class="ch" style="margin-top:16px"><div><h2>${tk_('due')}</h2><p class="cs">${due.length}</p></div></div><div class="list">${due.map(x=>tkRow(x[0],x[1],'wr')).join('')||'<p class="cs">—</p>'}</div></div>`;
}
function tkPlan(list){
 const cell=(p,m)=>{const s=tkSt(p,m),k=tkKind(m),bg={ok:'var(--ok)',bad:'var(--bad)',wr:'var(--wr)',mu:'var(--line2)'}[s];return `<td style="padding:4px 2px;text-align:center"><span title="${m}${tk_('mo')} · ${tkDue(p,m).s} · ${tkKindL(m)}" style="display:inline-grid;place-items:center;width:20px;height:20px;border-radius:6px;background:${bg};color:${s==='mu'?'var(--mut)':'#fff'};font:700 .6rem var(--f-m)">${s==='ok'?'✓':k[0]==='arama'?'A':'M'}</span></td>`};
 return `<div class="c"><div class="ch"><div><h2>${tk_('plan')}</h2><p class="cs"><span style="color:var(--ok)">■</span> ${t('done')} · <span style="color:var(--wr)">■</span> ${tk_('ay')} · <span style="color:var(--bad)">■</span> ${t('overdue')} · A ${tk_('arama')} · M ${tk_('mesaj')}</p></div></div>
  <div class="tw"><table style="min-width:760px"><thead><tr><th>${tk_('pair')}</th>${Array.from({length:12},(_,i)=>`<th style="text-align:center;padding:4px 2px">${i+1}</th>`).join('')}<th>${tk_('outs')}</th></tr></thead><tbody>${list.map(p=>`<tr data-fus="${p.id}" style="cursor:pointer;${TKS.sel===p.id?'background:var(--soft)':''}"><td><b>${p.tr}</b><span class="gl">↔ ${p.uz} · ${tkEvS(p.ev)}</span></td>${Array.from({length:12},(_,i)=>cell(p,i+1)).join('')}<td style="min-width:120px">${p.O.map(o=>`<span class="tag" style="white-space:normal;display:inline-block;margin:1px 0;border-color:${OT[o[0]].c};color:${OT[o[0]].c}">${tkON(o)}</span>`).join(' ')||'—'}</td></tr>`).join('')}</tbody></table></div></div>`;
}
function tkSonuc(list){
 const rows=[];list.forEach(p=>p.O.forEach(o=>rows.push([p,o])));rows.sort((a,b)=>tkDn(b[1][1])-tkDn(a[1][1]));
 return `<div class="grid" style="align-content:start"><div class="grid g2"><div class="c"><h2>${tk_('funnel')}</h2><p class="cs">${list.length} ${tk_('pair').toLowerCase()}</p>${tkFunHTML(list)}</div><div class="c"><h2>${tk_('dist')}</h2><p class="cs">${rows.length}</p>${tkDistHTML(list)}</div></div>
  <div class="c"><h2>${tk_('outs')}</h2><div class="tw"><table style="min-width:620px"><thead><tr><th>${tk_('otype')}</th><th>${tk_('pair')}</th><th>${tk_('when')}</th><th class="num">${tk_('amt')}</th><th>${tk_('nxt')}</th></tr></thead><tbody>${rows.map(([p,o])=>`<tr data-fus="${p.id}" style="cursor:pointer"><td><span class="tag" style="border-color:${OT[o[0]].c};color:${OT[o[0]].c}">${tkON(o)}</span></td><td><b>${p.tr}</b><span class="gl">↔ ${p.uz}</span><span class="gl">${o[3]}</span></td><td>${o[1]}</td><td class="num">${tkAmt(o[2])}</td><td>${o[4]||'—'}</td></tr>`).join('')}</tbody></table></div></div></div>`;
}
function tkDetail(){
 const p=tkp(TKS.sel);if(!p)return `<div class="c"><p class="cs">${tk_('pick')}</p></div>`;
 const dn=tkDone(p),f=TKS.f,svm=[6,12].find(m=>{const s=tkSt(p,m);return s==='wr'||s==='bad'||(p.sv&&p.sv[m])});
 const logsOf=m=>{const a=p.log.filter(l=>l[4]===m);if(!a.length&&dn.has(m)){const k=tkKind(m);a.push([tkDue(p,m).s,k[0],p.ow,k[0]==='arama'?'Takip araması yapıldı; iletişim sürüyor.':'Kontrol mesajı gönderildi, yanıt geldi.',m])}return a};
 const lg=l=>`<div style="font-size:.76rem;color:var(--ink2);margin:2px 0 0 18px"><span class="tag">${tk_(l[1])}</span> ${l[0].slice(0,5)} · ${sn(l[2])}${l[5]?` · ${tk_('extra')}`:''} — ${l[3]}</div>`;
 const extra=p.log.filter(l=>!l[4]);
 const tl=Array.from({length:12},(_,i)=>{const m=i+1,s=tkSt(p,m),d=tkDue(p,m);return `<div style="padding:5px 0;border-bottom:1px solid var(--line2)"><div style="display:flex;gap:8px;align-items:center;font-size:.8rem"><span style="width:10px;height:10px;border-radius:50%;flex:none;background:${{ok:'var(--ok)',bad:'var(--bad)',wr:'var(--wr)',mu:'var(--line)'}[s]}"></span><b style="min-width:42px">${m}${tk_('mo')}</b><span style="font-family:var(--f-m);font-size:.72rem;color:var(--mut)">${d.s}</span><span style="color:var(--ink2)">${tkKindL(m)}</span>${s==='bad'?`<span class="pill bad" style="margin-left:auto">${t('overdue')}</span>`:s==='wr'?`<span class="pill wr" style="margin-left:auto">${tk_('ay')}</span>`:''}</div>${logsOf(m).map(lg).join('')}${extra.filter(l=>{const n=tkDn(l[0]);return (m===1||n>=d.n)&&(m===12||n<tkDue(p,m+1).n)}).map(lg).join('')}</div>`}).join('');
 const inp=(k,ph,ty,st)=>`<input data-fuf="${k}" type="${ty||'text'}" value="${(f[k]||'').replace(/"/g,'&quot;')}" placeholder="${ph||''}" aria-label="${ph||k}" style="width:100%;border:1px solid var(--line);border-radius:8px;padding:6px 9px;font-size:.82rem;background:var(--card);color:var(--ink);${st||''}">`;
 return `<div class="grid" style="align-content:start">
  <div class="c"><div class="ch"><div><h2 style="font-size:1rem">${p.tr} ↔ ${p.uz}</h2><p class="cs">${p.ug} · ${tkEvS(p.ev)} · ${tkElapsed(p)} / 12 ${tk_('month')}</p></div></div>
   <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:6px"><div class="seg">${['h','w','c'].map(h=>`<button type="button" data-fuh="${h}" class="${p.h===h?'on':''}">${tk_(h)}</button>`).join('')}</div><span class="cs" style="margin-left:auto">${t('owner')}</span>${segSel('fupo',TEAM.filter(x=>x.r.some(r=>['cag','sat','prg'].includes(r))).map(x=>[x.id,sn(x.id)]),p.ow,t('owner'))}</div>
   <div class="li" style="margin-top:6px"><span class="dt">${p.nx[0].slice(0,5)}</span><span class="t"><b>${p.nx[1]}</b><span>${tk_('nxt')} · ${sn(p.ow)}</span></span><button class="btn p" type="button" data-fumsg="${p.id}" style="padding:4px 10px;font-size:.76rem">${ik('mesaj','ik-16')}${tk_('tpl')}</button></div></div>
  <div class="c"><h2>${tk_('log')}</h2>
   <div style="display:grid;gap:6px;margin-top:8px">${segSel('fuct',CTY.map(k=>[k,tk_(k)]),TKS.ct,tk_('ctype'))}${inp('note',tk_('notep'))}<div style="display:grid;grid-template-columns:1fr 130px;gap:6px">${inp('nx',tk_('nxt')+': '+tk_('nxp'))}${inp('nd','','date')}</div>
   <button class="btn p" type="button" data-fusave="1" style="justify-self:start">${ik('kayit','ik-16')}${tk_('save')}</button></div></div>
  <div class="c"><h2>${tk_('outs')}</h2>${p.O.length?p.O.map(o=>`<div class="li" style="padding:7px 0"><span class="t"><b><span style="color:${OT[o[0]].c}">●</span> ${tkON(o)}${o[2]?' · '+tkAmt(o[2]):''}</b><span>${o[1]} · ${o[3]}${o[4]?' · '+tk_('nxt')+': '+o[4]:''}</span></span></div>`).join(''):`<p class="cs">${tk_('none')}</p>`}
   <div style="display:grid;gap:6px;margin-top:10px;border-top:1px dashed var(--line);padding-top:10px"><b style="font-size:.82rem">${tk_('out')}</b>${segSel('fuot',Object.keys(OT).map(k=>[k,OT[k].n[L]]),TKS.ot,tk_('otype'))}${TKS.ot==='diger'?inp('olab',tk_('olab')):''}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${inp('odate','','date')}${inp('oamt',tk_('amt'),'number')}</div>${inp('onote',tk_('note'))}${inp('onx',tk_('nxt'))}
    <button class="btn" type="button" data-fuosave="1" style="justify-self:start">${ik('sonuc','ik-16')}${tk_('out')}</button></div></div>
  ${svm?tkSurvey(p,svm):''}
  <div class="c"><h2>${tk_('tl')}</h2><div style="margin-top:6px">${tl}</div></div>
 </div>`;
}
function tkSurvey(p,m){const s=(p.sv&&p.sv[m])||TKS.sv[p.id+':'+m]||{},dn=p.sv&&p.sv[m];
 return `<div class="c"><h2>${m}. ${tk_('sv')}</h2><p class="cs">${tk_('svnote')}</p>
  <div style="display:grid;gap:8px;margin-top:8px"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="cs" style="min-width:110px">${tk_('sat')}</span><div class="seg">${[1,2,3,4,5].map(v=>`<button type="button" data-fusvs="${m}:${v}" class="${s.sat===v?'on':''}">${v}</button>`).join('')}</div></div>
   <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="cs" style="min-width:110px">${tk_('again')}</span><div class="seg">${['yes','may','no'].map(v=>`<button type="button" data-fusva="${m}:${v}" class="${s.ag===v?'on':''}">${tk_(v)}</button>`).join('')}</div></div>
   <p class="cs" style="margin:0">${tk_('otype')}: ${p.O.map(tkON).join(', ')||tk_('none')} · ${tk_('out')} ↑</p>
   ${dn?`<span class="pill ok" style="justify-self:start">${tk_('svdone')} · ${dn.at}</span>`:`<button class="btn" type="button" data-fusv="${m}" style="justify-self:start">${ik('kayit','ik-16')}${tk_('save')}</button>`}</div></div>`}
/* Mesaj şablonu (4 dil) */
function tkTpl(p,m,side,l){
 const cp=side==='uz'?p.tr:p.uz,eN=TKEN[p.ev][l],who=tm_(p.ow).n,an=m===6||m===12;
 const A={tr:`Merhaba, ${eN} sonrası ${cp} ile yaptığınız görüşmenin ${m}. ayı. İletişiminiz sürüyor mu, numune, teklif veya sipariş için desteğe ihtiyacınız var mı? Fabriq ekibi olarak yanınızdayız.`,
  uz:`Assalomu alaykum! ${eN} dan keyin ${cp} bilan uchrashuvingizga ${m} oy boʻldi. Aloqa davom etyaptimi, namuna, taklif yoki buyurtma boʻyicha yordam kerakmi? Fabriq jamoasi doim yoningizda.`,
  ru:`Здравствуйте! Прошло ${m} мес. после вашей встречи с ${cp} на ${eN}. Продолжается ли общение, нужна ли помощь с образцами, предложением или заказом? Команда Fabriq на связи.`,
  en:`Hello! It has been ${m} month(s) since your meeting with ${cp} at ${eN}. Are you still in touch, and do you need help with samples, an offer or an order? The Fabriq team is here to help.`};
 const S={tr:` Kısa ${m}. ay değerlendirmesi: 1) Sonuç: satış, distribütörlük, temsilcilik, şirket kurulumu, ortak girişim, numune ya da henüz yok? 2) Tutar (varsa) 3) Memnuniyet 1–5. Bu mesaja yanıt yazmanız yeterli.`,
  uz:` ${m}-oy qisqa soʻrov: 1) Natija: savdo, distribyutorlik, vakolatxona, kompaniya ochish, qoʻshma korxona, namuna yoki hali yoʻq? 2) Summa (boʻlsa) 3) Mamnunlik 1–5. Shu xabarga javob yozsangiz kifoya.`,
  ru:` Короткий опрос (${m}-й месяц): 1) Результат: продажа, дистрибуция, представительство, открытие компании, совместное предприятие, образцы или пока нет? 2) Сумма (если есть) 3) Оценка 1–5. Просто ответьте на это сообщение.`,
  en:` Quick month-${m} check: 1) Outcome: sale, distributorship, representative office, company set-up, joint venture, samples, or none yet? 2) Amount (if any) 3) Satisfaction 1–5. Just reply to this message.`};
 return A[l]+(an?S[l]:'')+`\n\n${who} · Fabriq`;
}
function tkMsgOpen(id){
 const p=tkp(id),o=tkOpen(p),m=o.length?o[0][0]:Math.max(1,tkElapsed(p)),M=TKS.m;if(id!==M.id){M.id=id;M.side='uz';M.l=''}
 const l=M.l||(M.side==='tr'?'tr':/[А-я]/.test(p.uz)?'ru':'uz'),txt=tkTpl(p,m,M.side,l),ov=document.getElementById('ov');
 const b=(k,v,on,lab)=>`<button type="button" class="btn" data-${k}="${v}" style="padding:3px 9px;font-size:.74rem;${on?'background:var(--ink);color:var(--card)':''}">${lab}</button>`;
 ov.innerHTML=`<div class="modal" id="md"><div class="doc" role="dialog" aria-label="${tk_('tkm')}" style="width:min(640px,100%)"><div style="font:700 .7rem var(--f-m);letter-spacing:.1em;color:#5f7186">FABRIQ · ${tk_('tkm')} · ${m}${tk_('mo')} · ${tkKindL(m)}</div>
  <h2 style="margin:6px 0 2px">${M.side==='uz'?p.uz:p.tr}</h2><p style="margin:0 0 10px;color:#5f7186;font-size:.8rem">${M.side==='uz'?p.ug+' · ':''}${tkEvS(p.ev)} · ${t('owner')}: ${tm_(p.ow).n}</p>
  <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:8px"><span style="font-size:.74rem;color:#5f7186">${tk_('to')}</span>${b('fumside','uz',M.side==='uz',tk_('uzb'))}${b('fumside','tr',M.side==='tr',tk_('trf'))}<span style="width:8px"></span>${['Telegram','WhatsApp','E-posta'].map(c=>b('fumc',c,M.ch===c,c)).join('')}<span style="width:8px"></span>${LANGS.map(x=>b('fuml',x,x===l,x.toUpperCase())).join('')}</div>
  <textarea id="tkmt" rows="7" style="width:100%;font:inherit;font-size:.86rem;border:1px solid #e2eaf3;border-radius:10px;padding:10px">${txt}</textarea>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px;flex-wrap:wrap"><button class="btn" type="button" data-fumcopy="1">${tk_('copy')}</button><button class="btn p" type="button" data-fumsent="${m}">${ik('mesaj','ik-16')}${tk_('sent')}</button><button class="btn" type="button" id="mc">${t('close')}</button></div></div></div>`;
 const c=()=>ov.innerHTML='';document.getElementById('mc').onclick=c;document.getElementById('md').onclick=e=>{if(e.target.id==='md')c()};
}
function tkNow(){const d=String(TODAY);return d.slice(6)+'.'+d.slice(4,6)+'.'+d.slice(0,4)}
function tkLog(p,ty,note,nx,nd){const o=tkOpen(p),m=o.length?o[0][0]:tkElapsed(p);p.log.push([tkNow(),ty,p.ow,note||tk_(ty),m,o.length?0:1]);if(nx||nd)p.nx=[nd?nd.split('-').reverse().join('.'):p.nx[0],nx||p.nx[1]];return m}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-fut],[data-fus],[data-fuh],[data-fusave],[data-fuosave],[data-fumsg],[data-furem],[data-fusv],[data-fusvs],[data-fusva],[data-fumside],[data-fumc],[data-fuml],[data-fumsent],[data-fumcopy],[data-fuev],[data-fuow],[data-fuhf],[data-fupo],[data-fuct],[data-fuot]');if(!b)return;
 const d=b.dataset,p=tkp(TKS.sel);
 if(d.fumsg){tkMsgOpen(d.fumsg);return}
 if(d.fumside){TKS.m.side=d.fumside;TKS.m.l='';tkMsgOpen(TKS.m.id);return}
 if(d.fumc){TKS.m.ch=d.fumc;tkMsgOpen(TKS.m.id);return}
 if(d.fuml){TKS.m.l=d.fuml;tkMsgOpen(TKS.m.id);return}
 if(d.fumcopy){const x=document.getElementById('tkmt');try{navigator.clipboard.writeText(x.value)}catch(_){}toast(t('copied'));return}
 if(d.fumsent){const q=tkp(TKS.m.id);const m=tkLog(q,'mesaj',TKS.m.ch+' · '+(TKS.m.side==='uz'?tk_('uzb'):tk_('trf'))+' · '+(TKS.m.l||'').toUpperCase());document.getElementById('ov').innerHTML='';TKS.sel=q.id;toast(m+tk_('mo')+' ✓');render();return}
 if(d.fut)TKS.tab=d.fut;
 else if(d.fus)TKS.sel=d.fus;
 else if(d.fuev)TKS.ev=d.fuev;else if(d.fuow)TKS.ow=d.fuow;else if(d.fuhf)TKS.hf=d.fuhf;
 else if(d.fuct)TKS.ct=d.fuct;else if(d.fuot)TKS.ot=d.fuot;
 else if(d.fupo&&p){p.ow=d.fupo;toast(t('saved'))}
 else if(d.fuh&&p){p.h=d.fuh}
 else if(d.furem){const n=TKP.filter(x=>tkOpen(x).length),o=[...new Set(n.map(x=>x.ow))];toast(tk_('remind')+' · '+o.map(sn).join(', ')+' · '+n.length+' · Telegram + e-posta')}
 else if(d.fusave&&p){const f=TKS.f,m=tkLog(p,TKS.ct,f.note,f.nx,f.nd);if(TKS.ct==='numune'&&p.st<1)p.st=1;if(['teklif','siparis'].includes(TKS.ct)&&p.st<2)p.st=2;if(p.h==='c'&&['gorusme','ziyaret','numune','teklif','siparis'].includes(TKS.ct))p.h='w';TKS.f={};toast(tk_(TKS.ct)+' · '+m+tk_('mo')+' ✓')}
 else if(d.fuosave&&p){const f=TKS.f,k=TKS.ot;p.O.push([k,f.odate?f.odate.split('-').reverse().join('.'):tkNow(),+f.oamt||0,f.onote||OT[k].n[L],f.onx||'',k==='diger'?(f.olab||OT.diger.n[L]):'']);if(OTPOS.includes(k)){p.st=3;p.h='h'}if(k==='numune'&&p.st<1)p.st=1;if(k==='yok')p.h='c';if(f.onx)p.nx=[p.nx[0],f.onx];TKS.f={};toast(tk_('out')+' · '+(k==='diger'&&f.olab?f.olab:OT[k].n[L])+' ✓')}
 else if(d.fusvs||d.fusva){const [m,v]=(d.fusvs||d.fusva).split(':'),k=TKS.sel+':'+m;TKS.sv[k]=TKS.sv[k]||{};if(d.fusvs)TKS.sv[k].sat=+v;else TKS.sv[k].ag=v}
 else if(d.fusv&&p){const m=+d.fusv,k=p.id+':'+m;p.sv=p.sv||{};p.sv[m]=Object.assign({at:tkNow()},TKS.sv[k]||{});if(tkSt(p,m)!=='ok')p.log.push([tkNow(),'arama',p.ow,m+'. '+tk_('sv')+' ✓',m]);toast(tk_('svdone'))}
 else return;
 render()});
document.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.fuf;if(k)TKS.f[k]=e.target.value},true);
/* Bağlantılar: Ana sayfa, Görevler, Çağrı merkezi, Pano, Raporlar */
function tkHome(){if(!canR(ROLE,'uz-sonuc'))return '';const it=[];TKP.forEach(p=>{const o=tkOpen(p);if(o.length&&(isBoss()||TEAM.find(x=>x.id===p.ow).r.includes(ROLE)))it.push([p,o[0][0],o[0][1]])});it.sort((a,b)=>(a[2]==='bad'?0:1)-(b[2]==='bad'?0:1)||tkDue(a[0],a[1]).n-tkDue(b[0],b[1]).n);const lt=it.filter(x=>x[2]==='bad').length;
 return `<div class="c"><div class="ch"><div><h2>${tk_('home')}</h2><p class="cs">${it.length} · <span style="color:${lt?'var(--bad)':'inherit'}">${lt} ${t('overdue').toLowerCase()}</span></p></div><div class="r"><a class="btn" href="#uz-sonuc" style="font-size:.76rem">${ik('takip','ik-16')}${t('uz-sonuc')}</a></div></div><div class="list">${it.slice(0,5).map(([p,m,s])=>`<a class="li" href="#uz-sonuc" data-fus="${p.id}" style="text-decoration:none;color:inherit"><span class="dt" style="${s==='bad'?'color:var(--bad);background:var(--badb)':''}">${tkDue(p,m).s.slice(0,5)}</span><span class="t"><b>${p.tr} ↔ ${p.uz}</b><span>${m}${tk_('mo')} · ${tkKindL(m)} · ${sn(p.ow)}</span></span></a>`).join('')}</div></div>`}
function tkTaskCard(){const own=[...new Set(TKP.map(p=>p.ow))];return `<div class="c"><h2>${tk_('tasks')}</h2><p class="cs">${['Kasım 2026','Noyabr 2026','Ноябрь 2026','November 2026'][LANGS.indexOf(L)]} · ${tk_('remset').split('(')[0]}</p>${own.map(o=>{const ps=TKP.filter(p=>p.ow===o),op=ps.filter(p=>tkOpen(p).length),lt=ps.filter(p=>tkOpen(p).some(x=>x[1]==='bad'));return `<a class="agt" href="#uz-sonuc" style="text-decoration:none;color:inherit"><span class="av">${ini(o)}</span><span class="t"><b>${tm_(o).n}</b><span>${op.length} / ${ps.length} ${tk_('pair').toLowerCase()} · ${tk_('ay').toLowerCase()}</span></span>${lt.length?`<span class="pill bad">${lt.length} ${t('overdue').toLowerCase()}</span>`:`<span class="pill ok">✓</span>`}</a>`}).join('')}</div>`}
function tkCallNote(){if(!canR(ROLE,'uz-sonuc'))return '';const op=TKP.filter(p=>tkOpen(p).length),lt=TKP.filter(p=>tkOpen(p).some(x=>x[1]==='bad'));return `<div class="note">${ik('takip','ik-16')}<span><b>${tk_('callnote')}</b>: ${op.length} ${tk_('pair').toLowerCase()} ${tk_('ay').toLowerCase()} · <b style="color:var(--bad)">${lt.length} ${t('overdue').toLowerCase()}</b> · ${tk_('tkm')} 4 ${['dil','til','языка','languages'][LANGS.indexOf(L)]}</span><a class="btn" href="#uz-sonuc" style="margin-left:auto;flex:none;font-size:.76rem">${t('uz-sonuc')}</a></div>`}
const _vPano=V['uz-pano'];V['uz-pano']=()=>_vPano()+`<div class="grid g2" style="margin-top:14px"><div class="c"><h2>${tk_('callnote')} · ${tk_('funnel')}</h2><p class="cs">${TKP.length} ${tk_('pair').toLowerCase()} · ${[...new Set(TKP.map(p=>p.ev))].map(tkEvS).join(', ')}</p>${tkFunHTML(TKP)}</div><div class="c"><h2>${tk_('dist')}</h2><p class="cs">${tk_('res')}: ${tkAmt(TKP.reduce((a,p)=>a+p.O.reduce((s,o)=>s+(o[2]||0),0),0))}</p>${tkDistHTML(TKP)}</div></div>`;
V['uz-sonuc']=vTakip;
function tkRep(l){const R=x=>x[l],box='background:#fff;color:#0b2545;border:1px solid #e2eaf3;border-radius:12px;padding:20px 22px',fN=tkFun(TKP),dist=tkDist(TKP),mx=Math.max(1,fN[0][1]);
 const nm=k=>OT[k].n[l],hd=s=>`<div style="margin-top:14px;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:#2b8fb8;font-weight:700">${s}</div>`;
 return `<div style="${box}"><div style="font-size:1.1rem;font-weight:800">${R(TKX.rep)}</div><div style="font-size:.78rem;color:#5f7186">${[...new Set(TKP.map(p=>p.ev))].map(e=>TKEN[e][l]).join(' · ')}</div>
  ${hd(R(TKX.funnel))}${fN.map((x,i)=>`<div style="display:flex;gap:8px;align-items:center;font-size:.8rem;margin-top:4px"><span style="width:150px">${[TKX.f0,TKX.f1,TKX.f2,TKX.f3,TKX.f4][i][l]}</span><span style="flex:1;height:8px;background:#edf2f8;border-radius:4px;overflow:hidden"><i style="display:block;height:100%;width:${x[1]/mx*100}%;background:#2b8fb8"></i></span><b style="width:70px;text-align:right">${x[1]} · %${Math.round(x[1]/mx*100)}</b></div>`).join('')}
  ${hd(R(TKX.dist))}<table style="width:100%;font-size:.8rem;margin-top:4px">${dist.map(x=>`<tr style="border-top:1px solid #edf2f8"><td style="padding:5px 0"><span style="color:${OT[x[0]].c}">●</span> ${nm(x[0])}</td><td style="text-align:right">${x[1]}</td><td style="text-align:right;font-family:var(--f-m)">${tkAmt(x[2])}</td></tr>`).join('')}</table>
  ${[...new Set(TKP.map(p=>p.ev))].map(e=>`${hd(TKEN[e][l])}<table style="width:100%;font-size:.78rem;margin-top:4px">${TKP.filter(p=>p.ev===e).map(p=>`<tr style="border-top:1px solid #edf2f8"><td style="padding:5px 0"><b>${p.tr}</b> ↔ ${p.uz}</td><td style="white-space:nowrap">${tkElapsed(p)} / 12</td><td>${p.O.map(o=>o[0]==='diger'&&o[5]?o[5]:nm(o[0])).join(', ')||'—'}</td><td style="text-align:right;font-family:var(--f-m)">${tkAmt(p.O.reduce((s,o)=>s+(o[2]||0),0))}</td></tr>`).join('')}</table>`).join('')}
  <div style="margin-top:14px;font-size:.66rem;color:#5f7186">Fabriq · event360 UZ · ${l.toUpperCase()} · ${R(TT('maliyet ve kâr yok · örnek veri','xarajat va foyda yoʻq · namuna','без затрат и прибыли · пример','no cost or profit · sample data'))}</div></div>`}
const _rpBody=rpBody;rpBody=function(l,f){return rpT==='takip'?tkRep(l):_rpBody(l,f)};
const _rpCSV=rpCSV;rpCSV=function(){if(rpT!=='takip')return _rpCSV();const rows=[['event360 UZ','takip-12ay',rpL.toUpperCase()],['event','tr_firm','uz_buyer','owner','heat','month','outcomes','amount_usd','next_step','next_date']];TKP.forEach(p=>rows.push([ev(p.ev).n,p.tr,p.uz,tm_(p.ow).n,p.h,tkElapsed(p)+'/12',p.O.map(o=>o[0]==='diger'&&o[5]?o[5]:OT[o[0]].n[rpL]).join(' + '),p.O.reduce((s,o)=>s+(o[2]||0),0),p.nx[1],p.nx[0]]));return '﻿'+rows.map(r=>r.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(';')).join('\n')};
D.s_son=TKX.s_son;
