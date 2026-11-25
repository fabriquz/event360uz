/* ---- UZ-v18 adayı: Etkinlik günü araçları (kulaklık dağıtımı, imza listesi, ürün QR kartları, davetiye ve kayıt afişi, kroki fotoğrafı, elle yapılacak işler) ---- */
const EGX={
 kl:T4('Simültane kulaklıklar','Sinxron tarjima quloqchinlari','Приёмники синхронного перевода','Interpretation receivers'),
 klh:T4('Numaralı alıcı · dil kanalı · kime verildi · iade. Kayıp bedeli giderlere kendiliğinden geçer.','Raqamli qabul qilgich · til kanali · kimga berildi · qaytarish.','Номер приёмника · канал · кому выдан · возврат. Потери идут в расходы.','Numbered receiver · channel · issued to · returned. Losses flow to costs.'),
 tot:T4('Toplam','Jami','Всего','Total'),out:T4('Dağıtılan','Berilgan','Выдано','Issued'),ret:T4('İade edilen','Qaytarilgan','Возвращено','Returned'),miss:T4('Eksik','Yetishmaydi','Не возвращено','Missing'),depo:T4('Depoda','Omborda','На складе','In stock'),lost:T4('Kayıp','Yoʻqolgan','Утерян','Lost'),
 all:T4('Tümü','Hammasi','Все','All'),no:T4('No','№','№','No'),ch:T4('Kanal','Kanal','Канал','Channel'),who:T4('Kime','Kimga','Кому','Issued to'),st:T4('Durum','Holat','Статус','Status'),
 give:T4('Ver','Berish','Выдать','Issue'),take:T4('İade al','Qaytarib olish','Принять','Take back'),mlost:T4('Kayıp yaz','Yoʻqolgan deb belgilash','Отметить утерю','Mark lost'),pick:T4('Kişi seç','Kishini tanlang','Выберите участника','Pick a person'),
 rent:T4('Kiralama','Ijara','Аренда','Rental'),lostc:T4('kayıp bedeli','yoʻqotish narxi','стоимость утери','loss charge'),chmix:T4('Kanal dağılımı','Kanallar boʻyicha','По каналам','By channel'),
 sign:T4('Basılı imza listesi','Bosma imzo roʻyxati','Печатный лист подписей','Printed signature list'),
 signh:T4('Kayıtlı isimler numaralı ve alfabetik basılır; sonda boş satırlar kalır. Elle yazılanlar etkinlikten sonra buraya aktarılır.','Roʻyxatdagi ismlar raqamlangan holda bosiladi; oxirida boʻsh qatorlar qoladi.','Зарегистрированные печатаются по алфавиту с номерами; в конце пустые строки. Рукописные строки переносятся сюда после мероприятия.','Registered names print numbered and sorted; blank rows follow. Handwritten rows are entered here afterwards.'),
 reg:T4('Kayıtlı','Roʻyxatda','Зарегистрировано','Registered'),kio:T4('Kioskta okutan','Kioskda skanerlagan','Через киоск','Scanned at kiosk'),hand:T4('Kâğıda elle yazılan','Qoʻlda yozilgan','Вписано от руки','Handwritten'),done:T4('Aktarıldı','Kiritildi','Перенесено','Entered'),
 blank:T4('Boş satır','Boʻsh qator','Пустых строк','Blank rows'),pdf:T4('İmza listesi PDF','Imzo roʻyxati PDF','PDF листа подписей','Signature list PDF'),
 later:T4('Sonradan aktar','Keyin kiritish','Перенести позже','Enter afterwards'),phone:T4('Telefon','Telefon','Телефон','Phone'),
 add:T4('Satır ekle','Qator qoʻshish','Добавить строку','Add row'),xfer:T4('Katılıma ekle','Ishtirokka qoʻshish','Добавить в участники','Add to attendance'),came:T4('Geldi işaretle','Keldi deb belgilash','Отметить приход','Mark attended'),
 dup:T4('Kayıtlı kişi: kioskta okutmamış','Roʻyxatda bor: kioskda skanerlamagan','Уже в списке: не сканировал в киоске','Registered: did not scan at kiosk'),new_:T4('Yeni kişi','Yangi kishi','Новый участник','New person'),
 qr:T4('Ürün ve firma QR kartları','Mahsulot va firma QR kartalari','QR-карточки продукции','Product & company QR cards'),
 qrh:T4('Her firma için 4 dilli “Katalog için okutun” kartı; QR heyet kataloğundaki firma sayfasını açar. A4’e 4 kart, kesim çizgili.','Har firma uchun 4 tilli karta; QR katalogdagi firma sahifasini ochadi.','Карточка на 4 языках для каждой фирмы; QR открывает страницу фирмы в каталоге. 4 на A4, с линиями реза.','A 4-language card per company; the QR opens its catalogue page. 4 per A4 with cut marks.'),
 scan:['Katalog için okutun','Katalog uchun skanerlang','Сканируйте для каталога','Scan for the catalogue'],
 qrp:T4('A4 PDF · 4’lü','A4 PDF · 4 tadan','A4 PDF · по 4','A4 PDF · 4-up'),tested:T4('okutma testi','skaner sinovi','тест сканирования','scan test'),sets:T4('firma başı 2 takım','firma boshiga 2 toʻplam','2 комплекта на фирму','2 sets per company'),
 inv:T4('Davetiye ve kayıt afişi','Taklifnoma va roʻyxat afishasi','Приглашение и афиша регистрации','Invitation & registration poster'),
 invh:T4('Etkinlik kartındaki bilgiden kendiliğinden çıkar: tarih, mekân, organizatör, iletişim, Telegram bot QR’ı. Afişin QR’ı kiosk kaydını açar.','Tadbir kartasidan avtomatik: sana, joy, tashkilotchi, aloqa, Telegram bot QR.','Собирается из карточки мероприятия: дата, место, организатор, контакты, QR Telegram-бота. QR афиши ведёт на регистрацию в киоске.','Built from the event card: date, venue, organiser, contacts, Telegram bot QR. The poster QR opens kiosk registration.'),
 dav:T4('Davetiye · A5','Taklifnoma · A5','Приглашение · A5','Invitation · A5'),afis:T4('Kayıt afişi · A4','Roʻyxat afishasi · A4','Афиша регистрации · A4','Registration poster · A4'),
 regscan:['Kayıt için okutun','Roʻyxatdan oʻtish uchun skanerlang','Отсканируйте для регистрации','Scan to register'],
 dear:T4('Sayın katılımcı,','Hurmatli ishtirokchi,','Уважаемый участник,','Dear participant,'),
 invt:T4('Türk makine ve elektrik üreticileri ile Özbek alıcıları 15 dakikalık önceden planlanmış birebir görüşmelerde buluşturuyoruz. Sizi aramızda görmekten memnuniyet duyarız.','Turk mashinasozlik va elektr ishlab chiqaruvchilarini oʻzbek xaridorlari bilan 15 daqiqalik oldindan rejalashtirilgan uchrashuvlarda uchrashtiramiz. Sizni kutib qolamiz.','Мы проводим заранее спланированные 15-минутные встречи турецких производителей машин и электрооборудования с узбекскими покупателями. Будем рады видеть вас.','We bring Turkish machinery and electrical makers together with Uzbek buyers in pre-scheduled 15-minute meetings. We look forward to seeing you.'),
 org:T4('Organizatör','Tashkilotchi','Организатор','Organiser'),info:T4('Bilgi ve kayıt','Maʼlumot va roʻyxat','Информация и регистрация','Info & registration'),bot:T4('Telegram bot','Telegram bot','Telegram-бот','Telegram bot'),
 sample:T4('Örnek veri · telefon ve bot adı taklit','Namuna maʼlumot','Пример данных · телефон и бот условные','Sample data · phone and bot are placeholders'),
 kroki:T4('Elle çizilen kroki','Qoʻlda chizilgan sxema','Рукописная схема','Hand-drawn sketch'),
 krokih:T4('Sahada kâğıda çizilen yerleşim notunun fotoğrafını ekleyin; ekip planı buna göre günceller.','Joyda chizilgan sxema rasmini qoʻshing.','Добавьте фото схемы, нарисованной на месте; команда обновит план.','Add a photo of the layout note drawn on site; the team updates the plan from it.'),
 krup:T4('Fotoğraf ekle','Rasm qoʻshish','Добавить фото','Add photo'),
 manual:T4('Elle yapılacak işler planı','Qoʻlda bajariladigan ishlar rejasi','План ручных работ','Manual work plan'),
 manualh:T4('Basma, kesme, laminasyon, kulaklık sayımı ve imza listesinin aktarımı: kim, ne zaman (T-14 → T+7), kontrol listesi. Yazdırıp uygulayın.','Bosish, kesish, quloqchin sanash: kim, qachon, nazorat roʻyxati.','Печать, резка, ламинирование, подсчёт приёмников, перенос листа подписей: кто, когда (T-14 → T+7), чек-лист.','Printing, cutting, laminating, receiver count and signature-list entry: who, when (T-14 → T+7), checklist.'),
 open:T4('Dokümanı aç','Hujjatni ochish','Открыть документ','Open document'),manualtag:T4('elle','qoʻlda','вручную','manual'),
};
const eg=k=>EGX[k][L]||EGX[k].tr;
const LI_=l=>LANGS.indexOf(l);
const MANUAL_URL='https://claude.ai/artifact/RBmK4Wd83uhShgfitozeT3';

/* ---- Kulaklık envanteri (Mekân ve tercüman) ---- */
const KLCH=[['00',T4('Salon sesi','Zal ovozi','Зал','Floor')],['01',T4('Türkçe','Turkcha','Турецкий','Turkish')],['02',T4('Rusça','Ruscha','Русский','Russian')],['03',T4('İngilizce','Inglizcha','Английский','English')],['04',T4('Özbekçe','Oʻzbekcha','Узбекский','Uzbek')]];
const KLC={rent:6,lost:95,n:60};
const KL=[];
(()=>{const ps=REG.filter(p=>p.ty==='tr'||p.ty==='uz');for(let i=0;i<KLC.n;i++){const p=ps[i];const o={no:String(i+1).padStart(2,'0'),ch:'00',p:'',s:'depo'};
 if(p&&p.ci){o.p=p.id;o.ch=p.ty==='tr'?'01':(i%3===0?'02':'04');o.s=[3,11,27].includes(i)?'out':'ret'}else if(p&&i%5===0){o.p=p.id;o.ch=p.ty==='tr'?'01':'04';o.s='out'}KL.push(o)}})();
let klF='all';
const klN=s=>KL.filter(k=>s==='out'?k.s!=='depo':k.s===s).length;
const klCost=()=>KLC.n*KLC.rent*VEN.makine.days+klN('lost')*KLC.lost;
const klOf=id=>KL.find(k=>k.p===id&&k.s!=='depo');
function klCard(){
 const out=klN('out'),ret=klN('ret'),lost=klN('lost'),miss=KL.filter(k=>k.s==='out').length,free=REG.filter(p=>(p.ty==='tr'||p.ty==='uz')&&!klOf(p.id));
 const list=KL.filter(k=>klF==='all'||(klF==='miss'?k.s==='out':k.s===klF));
 const pill=k=>k.s==='ret'?`<span class="pill ok">${eg('ret')}</span>`:k.s==='out'?`<span class="pill wr">${eg('out')}</span>`:k.s==='lost'?`<span class="pill bad">${eg('lost')}</span>`:`<span class="pill">${eg('depo')}</span>`;
 const chM=KLCH.map(c=>[c,KL.filter(k=>k.s!=='depo'&&k.ch===c[0]).length]),mx=Math.max(1,...chM.map(x=>x[1]));
 return `<div class="c" id="klk" style="margin-top:14px"><div class="ch"><div><h2>${ik('mekan','ik-16')} ${eg('kl')}</h2><p class="cs">${eg('klh')}</p></div><div class="r"><span class="pill">${t('uz-finans')} · ${fmt(klCost())}</span></div></div>
  <div class="grid g4" style="margin:4px 0 12px">
   <div class="c kp"><small>${eg('tot')}</small><b>${KLC.n}</b><span>${eg('rent')} $ ${KLC.rent} × ${VEN.makine.days} ${t('days')}</span></div>
   <div class="c kp"><small>${eg('out')}</small><b>${out}</b><span>${KLC.n-out} ${eg('depo').toLowerCase()}</span></div>
   <div class="c kp"><small>${eg('ret')}</small><b>${ret}</b><span>${out?Math.round(ret/out*100):0}%</span></div>
   <div class="c kp" style="${miss?'border-color:color-mix(in srgb,var(--bad) 45%,var(--line))':''}"><small>${eg('miss')}</small><b style="${miss?'color:var(--bad)':''}">${miss}</b><span>${lost} ${eg('lost').toLowerCase()} · $ ${KLC.lost} ${eg('lostc')}</span></div>
  </div>
  <div class="grid g21">
   <div><div class="seg" style="margin-bottom:8px">${[['all',eg('all')],['out',eg('out')],['miss',eg('miss')],['depo',eg('depo')]].map(x=>`<button type="button" data-klf="${x[0]}" class="${klF===x[0]?'on':''}">${x[1]}</button>`).join('')}</div>
    <div class="tw" style="max-height:340px;overflow:auto"><table style="min-width:600px"><thead><tr><th>${eg('no')}</th><th>${eg('ch')}</th><th>${eg('who')}</th><th>${eg('st')}</th><th></th></tr></thead><tbody>${list.map(k=>{const p=k.p&&rg(k.p);return `<tr${k.s==='out'?' style="background:color-mix(in srgb,var(--wrb) 45%,transparent)"':''}><td><b style="font-family:var(--f-m)">${k.no}</b></td><td><select data-klch="${k.no}" aria-label="${eg('ch')} ${k.no}" style="min-width:120px">${KLCH.map(c=>`<option value="${c[0]}" ${c[0]===k.ch?'selected':''}>${c[0]} · ${c[1][L]}</option>`).join('')}</select></td><td>${p?`<b>${p.n}</b><span class="gl">${p.f}</span>`:k.s==='depo'?`<select data-klg="${k.no}" aria-label="${eg('pick')}" style="min-width:180px"><option value="">${eg('pick')}</option>${free.map(q=>`<option value="${q.id}">${q.n} · ${q.f}</option>`).join('')}</select>`:'—'}</td><td>${pill(k)}</td><td style="white-space:nowrap">${k.s==='out'?`<button class="btn" type="button" data-klr="${k.no}" style="font-size:.74rem">${eg('take')}</button> <button class="btn" type="button" data-kll="${k.no}" style="font-size:.74rem;color:var(--bad)">${eg('mlost')}</button>`:''}</td></tr>`}).join('')}</tbody></table></div></div>
   <div><h3 style="font-size:.86rem;margin:4px 0 8px">${eg('chmix')}</h3>${chM.map(x=>`<div class="bar"><span>${x[0][0]} · ${x[0][1][L]}</span><span class="tr"><i style="width:${x[1]/mx*100}%;background:var(--rc2)"></i></span><b>${x[1]}</b></div>`).join('')}
    <p class="gl" style="margin-top:10px">${TT('Kulaklık numarası imza listesine ve giriş kartı kaydına yazılır.','Quloqchin raqami imzo roʻyxatiga yoziladi.','Номер приёмника пишется в лист подписей.','The receiver number is written on the signature list.')[L]} <a href="#uz-kiosk~imza" style="color:var(--rc);text-decoration:none">${t('uz-kiosk')}</a> · <a href="${MANUAL_URL}" target="_blank" rel="noopener" style="color:var(--rc);text-decoration:none">${eg('manual')}</a></p></div>
  </div></div>`;
}

/* ---- İmza listesi ve sonradan aktarma (Kiosk) ---- */
const IM={blank:40,hand:[
 {n:REG.filter(p=>p.ty==='uz'&&!p.ci)[0].n,f:REG.filter(p=>p.ty==='uz'&&!p.ci)[0].f,tel:'+998 90 ··· 41 07',done:0},
 {n:'Dilshod Karimov',f:'Navoiy Elektr Montaj',tel:'+998 93 ··· 18 52',done:0},
 {n:'Malika Yusupova',f:'Toshkent Nasos Savdo',tel:'+998 97 ··· 63 20',done:0},
 {n:'Sardor Aliyev',f:'Fargʻona Mashina Servis',tel:'+998 91 ··· 05 77',done:1},
]};
const imReg=()=>REG.filter(p=>p.ty==='tr'||p.ty==='uz').slice().sort((a,b)=>a.n.localeCompare(b.n,'tr'));
const imTel=p=>{let h=0;for(const c of p.id)h=(h*31+c.charCodeAt(0))>>>0;return p.ty==='tr'?`+90 5${h%10}${(h>>3)%10} ··· ${String(h%100).padStart(2,'0')} ${String((h>>5)%100).padStart(2,'0')}`:`+998 9${h%10} ··· ${String(h%100).padStart(2,'0')} ${String((h>>5)%100).padStart(2,'0')}`};
const imMatch=r=>REG.find(p=>p.n===r.n&&(p.ty==='tr'||p.ty==='uz'));
function imCard(){
 const rs=imReg(),kio=rs.filter(p=>p.ci).length,dn=IM.hand.filter(r=>r.done).length;
 return `<div class="c" id="imza" style="margin-top:14px"><div class="ch"><div><h2>${ik('kayit','ik-16')} ${eg('sign')}</h2><p class="cs">${eg('signh')}</p></div><div class="r"><button class="btn p" type="button" data-imp="1">${eg('pdf')}</button></div></div>
  <div class="grid g4" style="margin:4px 0 12px">
   <div class="c kp"><small>${eg('reg')}</small><b>${rs.length}</b><span>${Math.ceil((rs.length+IM.blank)/25)} A4 · 2 ${TT('kopya','nusxa','копии','copies')[L]}</span></div>
   <div class="c kp"><small>${eg('kio')}</small><b>${kio}</b><span>${rs.length-kio} ${TT('okutmadı','skanerlamadi','без скана','not scanned')[L]}</span></div>
   <div class="c kp"><small>${eg('hand')}</small><b>${IM.hand.length}</b><span>${eg('blank')}: ${IM.blank}</span></div>
   <div class="c kp"><small>${eg('done')}</small><b>${dn} / ${IM.hand.length}</b><span>${dn===IM.hand.length?'✓':TT('T+1 son gün','T+1 oxirgi kun','срок T+1','due T+1')[L]}</span></div>
  </div>
  <h3 style="font-size:.86rem;margin:0 0 6px">${eg('later')}</h3>
  <div class="tw"><table style="min-width:640px"><thead><tr><th>#</th><th>${t('pname')}</th><th>${t('firm')}</th><th>${eg('phone')}</th><th>${eg('st')}</th><th></th></tr></thead><tbody>${IM.hand.map((r,i)=>{const m=imMatch(r);return `<tr><td class="num">${rs.length+i+1}</td><td><b>${r.n}</b></td><td>${r.f}</td><td style="font-family:var(--f-m);font-size:.8rem">${r.tel}</td><td>${r.done?`<span class="pill ok">${eg('done')}</span>`:m?`<span class="pill wr">${eg('dup')}</span>`:`<span class="pill">${eg('new_')}</span>`}</td><td>${r.done?'':`<button class="btn" type="button" data-imx="${i}" style="font-size:.74rem">${m?eg('came'):eg('xfer')}</button>`}</td></tr>`}).join('')}
   <tr><td></td><td><input id="imn" placeholder="${t('pname')}" aria-label="${t('pname')}" style="width:100%"></td><td><input id="imf" placeholder="${t('firm')}" aria-label="${t('firm')}" style="width:100%"></td><td><input id="imt" placeholder="+998 …" aria-label="${eg('phone')}" style="width:100%"></td><td colspan="2"><button class="btn" type="button" data-imadd="1">${eg('add')}</button></td></tr></tbody></table></div>
  <p class="gl" style="margin-top:10px">${TT('Aynı ad veya telefon kayıtlıysa sistem uyarır; kayıtlı kişi yalnız “Geldi” olur, yeni kişi katılım listesine eklenir.','Ism yoki telefon mos kelsa ogohlantiradi.','При совпадении имени или телефона система предупредит.','Matching name or phone triggers a warning.')[L]} <a href="#uz-mekan~klk" style="color:var(--rc);text-decoration:none">${eg('kl')}</a> · <a href="${MANUAL_URL}" target="_blank" rel="noopener" style="color:var(--rc);text-decoration:none">${eg('manual')}</a></p></div>`;
}
let imL='tr';
function imPdf(){
 const l=imL,i=LI_(l),rs=imReg().slice(0,22),ov=document.getElementById('ov');
 const H=[['No','№','№','No'],['Ad Soyad','Ism familiya','ФИО','Full name'],['Firma','Firma','Компания','Company'],['Telefon','Telefon','Телефон','Phone'],['E-posta','E-pochta','E-mail','E-mail'],['Kulaklık','Quloqchin','Приёмник','Receiver'],['İmza','Imzo','Подпись','Signature']];
 const T=['Katılım ve imza listesi','Ishtirokchilar va imzolar roʻyxati','Список участников и подписи','Attendance & signature list'];
 const td='border:1px solid #c9d5e3;padding:4px 6px;font-size:.72rem;height:22px';
 ov.innerHTML=`<div class="modal" id="md"><div class="doc" style="width:min(900px,100%)"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><div style="font:700 .7rem var(--f-m);letter-spacing:.1em;color:#5f7186">FABRIQ · event360 UZ · A4 ${TT('yatay','gorizontal','альбомная','landscape')[L]}</div><div style="margin-left:auto;display:flex;gap:4px">${LANGS.map(x=>`<button type="button" class="btn" data-iml="${x}" style="padding:2px 8px;font-size:.72rem;${x===l?'background:#0b2545;color:#fff':''}">${x.toUpperCase()}</button>`).join('')}</div></div>
  <div style="display:flex;justify-content:space-between;align-items:flex-end;margin:10px 0 8px"><div><h2 style="margin:0">${T[i]}</h2><span style="color:#5f7186;font-size:.8rem">${EVN.makine[l]} · 16.02.2027 · ${VEN.makine.n.split(' · ')[0]}</span></div><b style="font:700 .78rem var(--f-m);color:#5f7186">1 / ${Math.ceil((imReg().length+IM.blank)/25)}</b></div>
  <table style="width:100%;border-collapse:collapse"><thead><tr>${H.map((h,j)=>`<th style="${td};background:#0b2545;color:#fff;text-align:left;${j===0?'width:34px':j===5?'width:64px':j===6?'width:110px':''}">${h[i]}</th>`).join('')}</tr></thead><tbody>
  ${rs.map((p,j)=>{const k=klOf(p.id);return `<tr><td style="${td};font-family:var(--f-m)">${j+1}</td><td style="${td}"><b>${p.n}</b></td><td style="${td}">${p.f}</td><td style="${td};font-family:var(--f-m)">${imTel(p)}</td><td style="${td}"></td><td style="${td};font-family:var(--f-m)">${k?k.no:''}</td><td style="${td}">${p.ci?'<span style="color:#139a83;font-size:.66rem">K · '+p.ci+'</span>':''}</td></tr>`}).join('')}
  ${[0,1,2].map(j=>`<tr>${H.map((h,c)=>`<td style="${td}">${c===0?`<span style="font-family:var(--f-m)">${rs.length+j+1}</span>`:''}</td>`).join('')}</tr>`).join('')}
  </tbody></table>
  <p style="color:#5f7186;font-size:.72rem;margin-top:8px">${['K = kioskta okutuldu · sonda','K = kioskda skanerlandi · oxirida','K = отсканирован в киоске · в конце','K = scanned at kiosk · followed by'][i]} ${IM.blank} ${['boş satır','boʻsh qator','пустых строк','blank rows'][i]} · ${eg('sample')}</p>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px"><button class="btn p" type="button" data-toast="1">PDF</button><button class="btn" type="button" id="mc">${t('close')}</button></div></div></div>`;
 const c=()=>ov.innerHTML='';document.getElementById('mc').onclick=c;document.getElementById('md').onclick=e=>{if(e.target.id==='md')c()}}

/* ---- Ürün ve firma QR kartları (Heyet kataloğu) ---- */
const QK={off:{},ok:{0:1,1:1,4:1}};
const qkCode=i=>MF[i].split(' ').map(w=>w[0]).join('').toLocaleUpperCase('tr').replace(/[^A-ZÇĞİÖŞÜ]/g,'')+'-'+String(i+1).padStart(2,'0');
function qkCardHTML(i,w,l){const big=w>220;
 return `<div style="width:${w}px;background:#fff;color:#0b2545;border:1px solid #c9d5e3;border-radius:${big?4:10}px;padding:${big?16:10}px;font-family:var(--f-d);box-sizing:border-box">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><div style="min-width:0"><div style="font-size:${big?.68:.58}rem;font-weight:800;color:#2b8fb8;letter-spacing:.04em">${MF[i].toLocaleUpperCase('tr')}</div><div style="font-size:${big?.74:.62}rem;font-weight:600;line-height:1.25;margin-top:3px">${KF[i][4][l]}</div>${l!=='en'?`<div style="font-size:${big?.6:.52}rem;color:#5f7186">${KF[i][4].en}</div>`:''}</div><b style="font:800 ${big?1.3:.95}rem var(--f-m);white-space:nowrap">${qkCode(i)}</b></div>
  <div style="display:flex;gap:${big?14:8}px;align-items:center;margin-top:${big?14:8}px">${qrSVG('kat:'+MF[i],big?110:62)}<div style="font-size:${big?.66:.54}rem;line-height:1.45">${EGX.scan.map((s,j)=>`<div style="${LANGS[j]===l?'font-weight:800':'color:#5f7186'}">${s}</div>`).join('')}</div></div></div>`}
function qkCard(){
 const on=MF.map((_,i)=>i).filter(i=>!QK.off[i]),pg=Math.ceil(on.length*2/4),ok=on.filter(i=>QK.ok[i]).length;
 return `<div class="c" id="qrk" style="margin-top:14px"><div class="ch"><div><h2>${ik('katalog','ik-16')} ${eg('qr')}</h2><p class="cs">${eg('qrh')}</p></div><div class="r"><span class="pill ${ok===on.length?'ok':'wr'}">${ok} / ${on.length} ${eg('tested')}</span><button class="btn p" type="button" data-qkp="1">${eg('qrp')}</button></div></div>
  <p class="gl" style="margin:0 0 10px">${on.length} ${TT('kart','karta','карточек','cards')[L]} · ${eg('sets')} · ${pg} A4 · ${TT('kes, lamine et, firma masasına koy','kesing, laminatsiya, stolga qoʻying','разрезать, заламинировать, на стол фирмы','cut, laminate, place on company table')[L]}</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(212px,1fr));gap:10px">${MF.map((_,i)=>`<div style="display:flex;flex-direction:column;gap:6px;${QK.off[i]?'opacity:.45':''}">${qkCardHTML(i,212,L)}<div style="display:flex;gap:10px;font-size:.72rem;color:var(--mut)"><label style="display:flex;gap:4px;align-items:center;cursor:pointer"><input type="checkbox" data-qks="${i}" ${QK.off[i]?'':'checked'} style="accent-color:var(--rc2)">${TT('bas','bosish','печать','print')[L]}</label><label style="display:flex;gap:4px;align-items:center;cursor:pointer"><input type="checkbox" data-qkt="${i}" ${QK.ok[i]?'checked':''} style="accent-color:var(--ok)">${eg('tested')}</label></div></div>`).join('')}</div></div>`;
}
let qkL='tr';
function qkPdf(){
 const l=qkL,on=MF.map((_,i)=>i).filter(i=>!QK.off[i]).slice(0,4),ov=document.getElementById('ov');
 ov.innerHTML=`<div class="modal" id="md"><div class="doc" style="width:min(760px,100%)"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><div style="font:700 .7rem var(--f-m);letter-spacing:.1em;color:#5f7186">FABRIQ · event360 UZ · A4 · 4</div><div style="margin-left:auto;display:flex;gap:4px">${LANGS.map(x=>`<button type="button" class="btn" data-qkl="${x}" style="padding:2px 8px;font-size:.72rem;${x===l?'background:#0b2545;color:#fff':''}">${x.toUpperCase()}</button>`).join('')}</div></div>
  <h2 style="margin:8px 0 2px">${EGX.qr[l]}</h2><p style="margin:0 0 12px;color:#5f7186;font-size:.8rem">${EVN.makine[l]} · 1 / ${Math.ceil(MF.filter((_,i)=>!QK.off[i]).length*2/4)}</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;border:1px dashed #9fb3c8">${on.map((i,j)=>`<div style="padding:14px;display:grid;place-items:center;${j%2===0?'border-right:1px dashed #9fb3c8;':''}${j<2?'border-bottom:1px dashed #9fb3c8;':''}">${qkCardHTML(i,300,l)}</div>`).join('')}</div>
  <p style="color:#5f7186;font-size:.72rem;margin-top:8px">✂ ${TT('Kesik çizgiden kesin, lamine edin. Basmadan önce her QR’ı iki telefonla okutun.','Uzuq chiziqdan kesing, laminatsiya qiling.','Резать по пунктиру, ламинировать. Перед печатью проверить каждый QR двумя телефонами.','Cut along the dashed lines and laminate. Test every QR with two phones first.')[L]}</p>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px"><button class="btn p" type="button" data-toast="1">PDF</button><button class="btn" type="button" id="mc">${t('close')}</button></div></div></div>`;
 const c=()=>ov.innerHTML='';document.getElementById('mc').onclick=c;document.getElementById('md').onclick=e=>{if(e.target.id==='md')c()}}

/* ---- Davetiye ve kayıt afişi (Bülten / Yayın ve tanıtım) ---- */
const DV={k:'dav',l:'tr'};
const DVC={tel:['+998 71 200 00 00','+998 90 000 00 00'],bot:'@event360uz_bot'};
function dvHTML(k,l,w){const i=LI_(l),s=w/340;
 if(k==='dav')return `<div style="width:${w}px;max-width:100%;background:#fff;color:#0b2545;border-radius:10px;overflow:hidden;box-shadow:0 10px 30px -14px rgba(11,37,69,.5);border:1px solid #e2eaf3;font-family:var(--f-d)">
  <div style="background:linear-gradient(135deg,#0b2545,#1f6fc5 70%,#2b8fb8);color:#fff;padding:${18*s}px ${18*s}px ${16*s}px"><div style="font-size:${.6*s}rem;letter-spacing:.14em;opacity:.8;font-weight:700">FABRIQ · B2B</div><div style="font-size:${1.25*s}rem;font-weight:800;line-height:1.15;margin-top:${8*s}px;letter-spacing:-.02em">${EVN.makine[l].split(' · ')[0]}</div><div style="font-size:${.72*s}rem;margin-top:${6*s}px;opacity:.9">${['Türkiye – Özbekistan','Turkiya – Oʻzbekiston','Турция – Узбекистан','Türkiye – Uzbekistan'][i]}</div></div>
  <div style="padding:${14*s}px ${18*s}px ${16*s}px"><div style="font-size:${.74*s}rem;font-weight:700">${EGX.dear[l]}</div><p style="font-size:${.68*s}rem;line-height:1.5;margin:${4*s}px 0 ${10*s}px;color:#34465c">${EGX.invt[l]}</p>
   <div style="display:grid;grid-template-columns:1fr auto;gap:${10*s}px;align-items:end"><div style="font-size:${.66*s}rem;line-height:1.55"><div><b>16–18.02.2027</b> · 09:00–18:00</div><div>${VEN.makine.n.split(' · ')[0]} · ${(EVN.makine[l].split(' · ')[1]||'').split(',')[0]}</div><div style="margin-top:${6*s}px;color:#5f7186">${EGX.org[l]}: <b style="color:#0b2545">Fabriq</b></div><div style="color:#5f7186">${EGX.info[l]}: <b style="color:#0b2545">${DVC.tel.join(' · ')}</b></div></div>
   <div style="text-align:center">${qrSVG('tg:'+DVC.bot,64*s)}<div style="font-size:${.54*s}rem;color:#5f7186;margin-top:2px">${EGX.bot[l]}</div></div></div></div></div>`;
 return `<div style="width:${w}px;max-width:100%;background:#fff;color:#0b2545;border-radius:6px;box-shadow:0 10px 30px -14px rgba(11,37,69,.5);border:1px solid #e2eaf3;font-family:var(--f-d);padding:${22*s}px ${20*s}px;text-align:center">
  <div style="font-size:${.6*s}rem;letter-spacing:.14em;color:#2b8fb8;font-weight:800">FABRIQ</div><div style="font-size:${1.15*s}rem;font-weight:800;line-height:1.2;margin-top:${8*s}px">${EVN.makine[l].split(' · ')[0]}</div><div style="font-size:${.66*s}rem;color:#5f7186;margin-top:${4*s}px">16–18.02.2027 · ${VEN.makine.n.split(' · ')[0]} · ${(EVN.makine[l].split(' · ')[1]||'').split(',')[0]}</div>
  <div style="display:inline-block;border:1.5px solid #0b2545;padding:${10*s}px;margin:${16*s}px 0;border-radius:6px">${qrSVG('reg:makine',150*s)}</div>
  <div style="font-size:${.74*s}rem;line-height:1.55">${EGX.regscan.map((x,j)=>`<div style="${j===i?'font-weight:800;font-size:'+(.86*s)+'rem':''}">${x}</div>`).join('')}</div></div>`}
function dvCard(){
 return `<div class="c" id="dav" style="margin-top:14px"><div class="ch"><div><h2>${ik('bulten','ik-16')} ${eg('inv')}</h2><p class="cs">${eg('invh')}</p></div><div class="r"><button class="btn p" type="button" data-toast="1">PDF · ${DV.l.toUpperCase()}</button></div></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><div class="seg">${[['dav',eg('dav')],['afis',eg('afis')]].map(x=>`<button type="button" data-dvk="${x[0]}" class="${DV.k===x[0]?'on':''}">${x[1]}</button>`).join('')}</div><div class="seg">${LANGS.map(x=>`<button type="button" data-dvl="${x}" class="${DV.l===x?'on':''}">${x.toUpperCase()}</button>`).join('')}</div></div>
  <div class="grid g21" style="align-items:start"><div style="display:grid;grid-template-columns:minmax(0,1fr);place-items:center;background:var(--bg2);border:1px solid var(--line2);border-radius:12px;padding:18px">${dvHTML(DV.k,DV.l,DV.k==='dav'?380:320)}</div>
   <div class="list">${[[TT('Kaynak','Manba','Источник','Source')[L],`${t('uz-etkinlik')} · ${t('uz-mekan')}`],[TT('Kayıt QR’ı','Roʻyxat QR','QR регистрации','Registration QR')[L],`${t('uz-kiosk')} · ${TT('aynı kayıt linki','bir xil havola','та же ссылка','same registration link')[L]}`],[EGX.bot[L],`${DVC.bot} · <a href="#uz-telegram" style="color:var(--rc);text-decoration:none">${t('uz-telegram')}</a>`],[TT('Baskı','Bosma','Печать','Print')[L],DV.k==='dav'?TT('A5 çift yüz · kayıtlı + %20','A5 · roʻyxat + 20%','A5 двусторонняя · +20%','A5 double-sided · registered + 20%')[L]:TT('A4 · 3 adet · lamine','A4 · 3 dona','A4 · 3 шт. · ламинация','A4 · 3 copies · laminated')[L]]].map(r=>`<div class="li"><span class="t"><b>${r[0]}</b><span>${r[1]}</span></span></div>`).join('')}
    <p class="gl" style="margin-top:10px">${eg('sample')} · <a href="${MANUAL_URL}" target="_blank" rel="noopener" style="color:var(--rc);text-decoration:none">${eg('manual')}</a></p></div></div></div>`;
}

/* ---- Kroki fotoğrafı (Alan planı) ---- */
let KRK=null;
function krCard(){
 return `<div class="c" id="kroki" style="margin-top:14px"><div class="ch"><div><h2>${ik('mekan','ik-16')} ${eg('kroki')}</h2><p class="cs">${eg('krokih')}</p></div><div class="r"><label class="btn" style="cursor:pointer">${eg('krup')}<input type="file" accept="image/*" data-krf="1" style="display:none"></label></div></div>
  ${KRK?`<img src="${KRK.u}" alt="${eg('kroki')}" style="max-width:100%;max-height:360px;border-radius:10px;border:1px solid var(--line2);display:block"><p class="gl" style="margin-top:6px">${KRK.n} · ${KRK.at}</p>`:`<div style="border:1.5px dashed var(--line);border-radius:12px;padding:22px;text-align:center;color:var(--mut);font-size:.82rem">${TT('Henüz fotoğraf yok. Telefonla çekip ekleyin; plan bu notla karşılaştırılır.','Hali rasm yoʻq.','Фото пока нет. Снимите на телефон и добавьте.','No photo yet. Snap it on a phone and add it.')[L]}</div>`}</div>`;
}

/* ---- Görevler: elle yapılacak işler ---- */
function gvManual(){
 return `<div class="note" style="align-items:center;flex-wrap:wrap;margin-bottom:14px">${ik('gorev','ik-16')}<span style="flex:1;min-width:220px"><b>${eg('manual')}</b> · ${eg('manualh')}</span><a class="btn p" href="${MANUAL_URL}" target="_blank" rel="noopener">${eg('open')}</a></div>`;
}
Object.assign(AUTO,{
 klk:()=>[KL.filter(k=>k.s!=='depo').length>0,`${KLC.n}`],
 klki:()=>{const m=KL.filter(k=>k.s==='out').length;return [m===0,m?`${m} ${eg('miss').toLowerCase()}`:'✓']},
 imza:()=>[false,`${imReg().length}+${IM.blank}`],
 akt:()=>{const d=IM.hand.filter(r=>r.done).length;return [d===IM.hand.length,`${d} / ${IM.hand.length}`]},
 qrk:()=>{const on=MF.map((_,i)=>i).filter(i=>!QK.off[i]),k=on.filter(i=>QK.ok[i]).length;return [k===on.length,`${k} / ${on.length}`]},
});
GV.push([4,'Kulaklık ihtiyacı ve kiralama teklifi (elle)','e1','02.02',0,'uz-mekan','loj','klk'],[5,'Davetiye 4 dilde + kayıt QR afişi (elle bas)','e5','06.02',0,'uz-bulten','yay'],[5,'Ürün QR kartları: bas, kes, lamine et, okut (elle)','e5','11.02',0,'uz-katalog','yay','qrk'],[5,'İmza listesi bas: 2 kopya + boş sayfa (elle)','e0','15.02',0,'uz-kiosk','saha','imza'],[6,'İmza listesi el yazısı satırları aktar (T+1)','e0','19.02',0,'uz-kiosk','saha','akt'],[6,'Kulaklık iade sayımı, kiralama firmasına teslim (elle)','e1','21.02',0,'uz-mekan','loj','klki']);
AL.SET.push(['07:20',T4('Kulaklık masası: numara sırası, kanal testi','Quloqchin stoli: raqam tartibi, kanal sinovi','Стол приёмников: по номерам, тест каналов','Receiver desk: in number order, channel test'),'e1','fuaye',0,''],['07:25',T4('İmza listesi (2 kopya), kalem, zımba; kayıt QR afişi standda','Imzo roʻyxati, ruchka; QR afisha stendda','Лист подписей (2 копии), ручки; QR-афиша на стойке','Signature list ×2, pens; registration QR poster on stand'),'e3','fuaye',0,''],['07:50',T4('Firma masalarına ürün QR kartları (lamine)','Firma stollariga QR kartalar','QR-карточки на столы фирм','Product QR cards on company tables'),'e5','A',0,'']);
AL.SET.sort((a,b)=>a[0].localeCompare(b[0]));
Object.assign(CL,{kulaklik:{tr:'Simültane kulaklık',uz:'Sinxron quloqchinlar',ru:'Приёмники синхроперевода',en:'Interpretation receivers'}});

/* ---- Ekranlara bağla ---- */
(()=>{const _V=Object.assign({},V),top=(k,x)=>()=>{const h=head(k),o=_V[k]();return o.startsWith(h)?h+x()+o.slice(h.length):x()+o};
 V['uz-mekan']=()=>_V['uz-mekan']()+klCard();
 V['uz-kiosk']=()=>_V['uz-kiosk']()+imCard();
 V['uz-katalog']=()=>_V['uz-katalog']()+qkCard();
 V['uz-bulten']=()=>_V['uz-bulten']()+dvCard();
 V['uz-alan']=()=>_V['uz-alan']()+krCard();
 V['uz-gorev']=top('uz-gorev',gvManual);})();

document.addEventListener('click',e=>{
 const b=e.target.closest('[data-klf],[data-klr],[data-kll],[data-imp],[data-iml],[data-imx],[data-imadd],[data-qkp],[data-qkl],[data-dvk],[data-dvl]');if(!b)return;const d=b.dataset,kl=n=>KL.find(k=>k.no===n);
 if(d.klf){klF=d.klf}
 else if(d.klr){kl(d.klr).s='ret';toast(`${d.klr} · ${eg('ret')}`)}
 else if(d.kll){kl(d.kll).s='lost';toast(`${d.kll} · ${eg('lost')} · $ ${KLC.lost} → ${t('uz-finans')}`)}
 else if(d.imp){imL=L;imPdf();return}
 else if(d.iml){imL=d.iml;imPdf();return}
 else if(d.imx){const r=IM.hand[+d.imx],m=imMatch(r);if(m){const n=new Date();m.ci=m.ci||'09:'+String(n.getMinutes()).padStart(2,'0')}else REG.push({id:'h'+d.imx,n:r.n,f:r.f,g:'',ty:'uz',tb:'',ci:'09:40',pr:false});r.done=1;toast(`${r.n} · ${eg('done')}`)}
 else if(d.imadd){const g=i=>(document.getElementById(i).value||'').trim(),n=g('imn');if(!n){document.getElementById('imn').focus();return}IM.hand.push({n,f:g('imf')||'—',tel:g('imt')||'—',done:0})}
 else if(d.qkp){qkL=L;qkPdf();return}
 else if(d.qkl){qkL=d.qkl;qkPdf();return}
 else if(d.dvk){DV.k=d.dvk}
 else if(d.dvl){DV.l=d.dvl}
 render()});
document.addEventListener('change',e=>{const el=e.target,d=el.dataset;if(!d)return;
 if(d.klch){KL.find(k=>k.no===d.klch).ch=el.value;render()}
 else if(d.klg&&el.value){const k=KL.find(x=>x.no===d.klg);k.p=el.value;k.s='out';const p=rg(el.value);if(p&&k.ch==='00')k.ch=p.ty==='tr'?'01':'04';toast(`${k.no} → ${p?p.n:''}`);render()}
 else if(d.qks){QK.off[d.qks]=!el.checked;render()}
 else if(d.qkt){QK.ok[d.qkt]=el.checked?1:0;render()}
 else if(d.krf&&el.files&&el.files[0]){const f=el.files[0],n=new Date();KRK={u:URL.createObjectURL(f),n:f.name,at:String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0')};render()}
});
