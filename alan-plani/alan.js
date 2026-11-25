/* ---- UZ-v16: Fiziki alan planı (salon krokisi, oturma şablonu, malzeme, kurulum) ---- */
IK.alan='<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 10h5M14 3v4M10 21v-3"/><rect class="af" x="12.5" y="11" width="5" height="3.2" rx=".8"/><path class="a" d="M6 14.5h3M6 17h3"/>';
/* Öğe türleri: ad, en × boy (m), oturma, birim maliyet $, malzeme/baskı, tedarikçi, renk */
const AT={
 backdrop:{n:T4('Backdrop · fotoğraf arkalığı','Backdrop · foto fon','Бэкдроп · фотостена','Backdrop · photo wall'),w:5,h:.5,c:420,m:1,p:1,sp:'5 × 3 m · branda + truss',su:'Samarqand Print Studio',col:'#2b4f9e'},
 rollup:{n:T4('Roll-up','Roll-up','Ролл-ап','Roll-up'),w:.85,h:.4,c:65,m:1,p:1,sp:'85 × 200 cm',su:'Samarqand Print Studio',col:'#2b8fb8'},
 tabela:{n:T4('Kapı tabelası','Eshik lavhasi','Табличка на дверь','Door sign'),w:.7,h:.25,c:25,m:1,p:1,sp:'A1 · forex',su:'Samarqand Print Studio',col:'#5b6b7d'},
 qr:{n:T4('QR geri bildirim standı','QR fikr-mulohaza stendi','QR-стойка для отзывов','QR feedback stand'),w:.5,h:.5,c:35,m:1,p:1,sp:'A4 yatay · anket QR',su:'Samarqand Print Studio',col:'#139a83'},
 bayrak:{n:T4('Bayrak direği TR · UZ','Bayroq ustuni TR · UZ','Флагшток TR · UZ','Flag stand TR · UZ'),w:.8,h:.4,c:40,m:1,p:0,sp:'2 bayrak + direk',su:'Samarqand Print Studio',col:'#c4473a'},
 kayit:{n:T4('Kayıt masası','Roʻyxat stoli','Стойка регистрации','Registration desk'),w:1.8,h:.8,c:15,m:1,p:0,sp:'masa + siyah örtü + 2 sandalye',su:'Registan Park',col:'#0b2545'},
 kiosk:{n:T4('Kiosk','Kiosk','Киоск','Kiosk'),w:.6,h:.6,c:0,m:0,col:'#0b2545'},
 sahne:{n:T4('Sahne','Sahna','Сцена','Stage'),w:6,h:2.6,c:900,m:1,p:0,sp:'6 × 2,6 m · 40 cm',su:'Registan Park · teknik',col:'#0b2545'},
 ekran:{n:T4('LED ekran','LED ekran','LED-экран','LED screen'),w:4,h:.35,c:1200,m:1,p:0,sp:'4 × 2,25 m · ses dahil',su:'Registan Park · teknik',col:'#1f6fc5'},
 kursu:{n:T4('Kürsü','Minbar','Трибуна','Lectern'),w:.6,h:.5,c:0,m:0,col:'#5b6b7d'},
 sira:{n:T4('Sandalye sırası (8)','Stullar qatori (8)','Ряд стульев (8)','Chair row (8)'),w:4,h:.5,s:8,c:0,m:0,col:'#8ea2b8'},
 sinif:{n:T4('Sınıf masası (3)','Sinf stoli (3)','Стол класса (3)','Classroom table (3)'),w:2.4,h:.6,s:3,c:0,m:0,col:'#8ea2b8'},
 yuvarlak:{n:T4('Yuvarlak masa (10)','Dumaloq stol (10)','Круглый стол (10)','Round table (10)'),w:1.8,h:1.8,s:10,c:0,m:0,col:'#8ea2b8'},
 b2b:{n:T4('B2B masası (4)','B2B stoli (4)','B2B-стол (4)','B2B table (4)'),w:1.2,h:.8,s:4,c:12,m:1,p:1,sp:'masa numarası + masa bayrağı',su:'Samarqand Print Studio',col:'#2b8fb8'},
 kabin:{n:T4('Tercüman kabini','Tarjimon kabinasi','Кабина переводчика','Interpreter booth'),w:2,h:1.6,c:350,m:1,p:0,sp:'2 kişilik · kulaklık 60',su:'Tarjimon Texnika',col:'#7a5bd0'},
 ikram:{n:T4('İkram masası','Mehmondorchilik stoli','Стол кейтеринга','Catering table'),w:2.4,h:.8,c:0,m:0,col:'#139a83'},
 kapi:{n:T4('Salon kapısı','Zal eshigi','Дверь зала','Hall door'),w:1.6,h:.3,c:0,m:0,col:'#c27a12'},
 giris:{n:T4('Giriş','Kirish','Вход','Entrance'),w:1.6,h:.3,c:0,m:0,col:'#139a83'},
 cikis:{n:T4('Acil çıkış','Favqulodda chiqish','Аварийный выход','Emergency exit'),w:1.2,h:.3,c:0,m:0,col:'#c4473a'}
};
const ALPAL=['backdrop','rollup','tabela','qr','bayrak','kayit','kiosk','sahne','ekran','kursu','sira','sinif','yuvarlak','b2b','kabin','ikram','kapi','giris','cikis'];
const ALY={karsilama:T4('Karşılama (fuaye)','Kutib olish (foye)','Встреча (фойе)','Welcome (foyer)'),tiyatro:T4('Tiyatro','Teatr','Театр','Theatre'),sinif:T4('Sınıf','Sinf','Класс','Classroom'),u:T4('U düzeni','U shakl','П-образная','U-shape'),yuvarlak:T4('Yuvarlak masa','Dumaloq stollar','Банкет','Banquet'),b2b:T4('B2B masaları','B2B stollari','B2B-столы','B2B tables')};
const ALM2={tiyatro:1,sinif:1.8,u:3,yuvarlak:1.5,b2b:7};
let AL={ev:'makine',z:'fuaye',sel:'',seq:0,undo:null,sent:'16.11 18:30',pl:'tr',
 Z:[{id:'fuaye',n:T4('Fuaye ve karşılama','Foye va kutib olish','Фойе и встреча','Foyer & welcome'),w:18,h:8,lay:'karsilama'},
    {id:'A',hl:'A',w:24,h:17.5,lay:'b2b',need:[12,'masa']},
    {id:'B',hl:'B',w:12,h:10,lay:'tiyatro',need:['hl','kisi']},
    {id:'T',hl:'T',w:20,h:14,lay:'yuvarlak',need:[120,'kisi',T4('Akşam yemeği','Kechki ovqat','Ужин','Dinner')]}],
 P:{},S:{},
 SET:[['06:30',T4('Backdrop ve truss montajı','Backdrop va truss oʻrnatish','Монтаж бэкдропа и фермы','Backdrop & truss set-up'),'e0','fuaye',1,'06:52'],
  ['07:00',T4('Roll-up ×3 ve kapı tabelaları','Roll-up ×3 va eshik lavhalari','Ролл-апы ×3 и таблички','Roll-ups ×3 and door signs'),'e5','fuaye',1,'07:14'],
  ['07:15',T4('Kayıt masası, örtü ve kiosk testi (K1, K2)','Roʻyxat stoli va kiosk testi (K1, K2)','Стойка регистрации, тест киосков (K1, K2)','Registration desk, kiosk test (K1, K2)'),'e3','fuaye',0,''],
  ['07:30',T4('QR geri bildirim standları','QR fikr-mulohaza stendlari','QR-стойки для отзывов','QR feedback stands'),'e5','fuaye',0,''],
  ['07:45',T4('B2B masaları: numara, bayrak, 4 sandalye','B2B stollari: raqam, bayroq, 4 stul','B2B-столы: номер, флажок, 4 стула','B2B tables: number, flag, 4 chairs'),'e1','A',0,''],
  ['08:00',T4('Salon B: sahne, ekran ve ses testi','Zal B: sahna, ekran, ovoz testi','Зал B: сцена, экран, звук','Hall B: stage, screen, sound check'),'e0','B',0,''],
  ['08:15',T4('Acil çıkış yolları açık, işaretler yerinde','Favqulodda chiqish yoʻllari ochiq','Аварийные выходы свободны','Emergency routes clear, signs in place'),'e0','',0,''],
  ['08:30',T4('Son tur: her alanın fotoğrafı ekibe','Yakuniy aylanish: foto jamoaga','Финальный обход: фото команде','Final walk: photo of each area to team'),'e6','',0,'']]};
Object.assign(CL,{kurulum:{tr:'Alan kurulumu ve baskı',uz:'Maydon jihozlash va bosma',ru:'Оформление площадки и печать',en:'Venue set-up & print'}});
Object.assign(D,{'uz-alan':{tr:'Alan planı',uz:'Maydon rejasi',ru:'План площадки',en:'Floor plan'},
 s_alan:{tr:'Salon krokisi, oturma düzeni, backdrop, roll-up ve stand gibi malzemeler, kurulum kontrol listesi. Gider teklife ve finansa kendiliğinden geçer.',uz:'Zal sxemasi, oʻtirish tartibi, backdrop, roll-up va stendlar, jihozlash roʻyxati. Xarajat taklif va moliyaga oʻtadi.',ru:'Схема зала, рассадка, бэкдроп, ролл-апы и стойки, чек-лист монтажа. Затраты сразу попадают в предложение и финансы.',en:'Hall layout, seating, backdrop, roll-ups and stands, set-up checklist. Costs flow into the offer and finance.'}});
const alZ=id=>AL.Z.find(z=>z.id===(id||AL.z));
const alN=(z,l)=>z.hl?HL[z.hl][0][l||L]:z.n[l||L];
const alSz=it=>{const a=AT[it.k];return it.r?[a.h,a.w]:[a.w,a.h]};
function alGen(z,kind){
 const W=z.w,H=z.h,it=[],add=(k,x,y,r,lb)=>{const o={id:'i'+(++AL.seq),k,x:Math.round(x*2)/2,y:Math.round(y*2)/2,r:r||0,lb:lb||''};it.push(o);return o};
 if(kind==='karsilama'){
  add('kapi',2,0,0,'A');add('tabela',3.9,.4,0,'A');add('rollup',3.9,1,0);
  add('kapi',14.5,0,0,'B');add('tabela',13.5,.4,0,'B');add('rollup',13.5,1,0);
  add('backdrop',6.5,.5);add('qr',12,1.5);add('bayrak',5.5,1.5);
  add('kayit',3,5);add('kiosk',5.5,5,0,'K1');add('kiosk',6.5,5,0,'K2');add('qr',2,5);add('rollup',10,7);
  add('ikram',14.5,4.5);add('ikram',14.5,5.5);add('giris',W/2-.8,H-.3);
  return it}
 add('giris',W/2-.8,H-.3);add('cikis',W-.3,H/2-.6,90);
 if(kind==='tiyatro'||kind==='sinif'||kind==='u'){add('ekran',W/2-2,0);add('sahne',W/2-3,.5);add('bayrak',W/2-4,1)}
 if(kind==='tiyatro'){const cols=Math.max(1,Math.floor((W-2+1.2)/5.2)),sx=(W-(cols*4+(cols-1)*1.2))/2;for(let y=3.5;y+.5<=H-1.5;y+=1)for(let c=0;c<cols;c++)add('sira',sx+c*5.2,y)}
 else if(kind==='sinif'){const cols=Math.max(1,Math.floor((W-2+1.2)/3.6)),sx=(W-(cols*2.4+(cols-1)*1.2))/2;for(let y=4;y+.6<=H-1.5;y+=1.5)for(let c=0;c<cols;c++)add('sinif',sx+c*3.6,y)}
 else if(kind==='u'){for(let y=4;y+2.4<=H-3.5;y+=2.5){add('sinif',2,y,90);add('sinif',W-2.6,y,90)}for(let x=2;x+2.4<=W-2;x+=2.5)add('sinif',x,H-3.5)}
 else if(kind==='yuvarlak'){const cols=Math.floor((W-1)/3.2),rows=Math.floor((H-2.5)/3.2),sx=(W-cols*3.2)/2+.7;add('ikram',1,.5);add('ikram',3.6,.5);for(let r=0;r<rows;r++)for(let c=0;c<cols;c++)add('yuvarlak',sx+c*3.2,2+r*3.2)}
 else if(kind==='b2b'){add('ekran',W/2-2,0);add('bayrak',W/2-3,.5);add('kabin',1,1);const cols=Math.floor((W-3)/3),n=z.need&&z.need[1]==='masa'?z.need[0]:99,sx=(W-cols*3)/2+.9;let i=0;for(let y=3;y+.8<=H-2&&i<n;y+=2.6)for(let c=0;c<cols&&i<n;c++)add('b2b',sx+c*3,y,0,'M'+(++i))}
 return it}
AL.Z.forEach(z=>z.it=alGen(z,z.lay));
const alSeats=z=>z.it.reduce((a,i)=>a+(AT[i.k].s||0),0);
const alNeed=z=>{if(!z.need)return null;if(z.need[0]==='hl')return [HL[z.hl][1],'kisi',T4('Gün akışı','Kun tartibi','Программа дня','Day flow')];return z.need};
const alHave=z=>{const n=alNeed(z);return n&&n[1]==='masa'?z.it.filter(i=>i.k==='b2b').length:alSeats(z)};
function alIssues(z){
 const o=[],it=z.it,box=i=>{const [w,h]=alSz(i);return [i.x,i.y,i.x+w,i.y+h]};
 const nd=alNeed(z),hv=alHave(z);
 if(nd&&hv<nd[0])o.push(['bad',T4(`${nd[0]-hv} ${nd[1]==='masa'?'masa eksik':'kişi sığmıyor'} (${hv} / ${nd[0]})`,`${nd[0]-hv} ${nd[1]==='masa'?'stol yetmaydi':'kishi sigʻmaydi'}`,`Не хватает ${nd[0]-hv} ${nd[1]==='masa'?'столов':'мест'}`,`${nd[0]-hv} ${nd[1]==='masa'?'tables short':'seats short'}`)]);
 if(z.hl&&!it.some(i=>i.k==='cikis'))o.push(['bad',T4('Acil çıkış işaretlenmedi','Favqulodda chiqish belgilanmagan','Не отмечен аварийный выход','No emergency exit marked')]);
 it.forEach(i=>{const b=box(i);if(b[0]<-.01||b[1]<-.01||b[2]>z.w+.01||b[3]>z.h+.01)o.push(['wr',T4(`${AT[i.k].n.tr} alan dışında`,`${AT[i.k].n.uz} maydondan tashqarida`,`${AT[i.k].n.ru}: за границей зала`,`${AT[i.k].n.en} outside the area`),i.id])});
 const fl=['giris','cikis','kapi'];
 for(let a=0;a<it.length;a++)for(let b=a+1;b<it.length;b++){const p=it[a],q=it[b];if(fl.includes(p.k)&&fl.includes(q.k))continue;const A=box(p),B=box(q);if(A[0]<B[2]-.05&&B[0]<A[2]-.05&&A[1]<B[3]-.05&&B[1]<A[3]-.05){o.push(['wr',T4(`Çakışma: ${AT[p.k].n.tr} ↔ ${AT[q.k].n.tr}`,`Toʻqnashuv: ${AT[p.k].n.uz} ↔ ${AT[q.k].n.uz}`,`Пересечение: ${AT[p.k].n.ru} ↔ ${AT[q.k].n.ru}`,`Overlap: ${AT[p.k].n.en} ↔ ${AT[q.k].n.en}`),p.id]);if(o.length>6)return o}}
 return o}
function alMat(){const m={};AL.Z.forEach(z=>z.it.forEach(i=>{const a=AT[i.k];if(!a.m)return;m[i.k]=m[i.k]||{k:i.k,n:0,z:new Set()};m[i.k].n++;m[i.k].z.add(z.id)}));return ALPAL.filter(k=>m[k]).map(k=>m[k])}
const alCost=()=>alMat().reduce((a,x)=>a+x.n*AT[x.k].c,0);
/* Kroki çizimi; pr=true: dosya (sabit açık renkler) */
function alSvg(z,pr,l){
 l=l||L;const S=22,W=z.w*S,H=z.h*S,P=pr?{bg:'#f6f9fc',ln:'#d5e0ea',ink:'#0b2545',mut:'#5f7186',card:'#fff',sel:'#1f6fc5'}:{bg:'var(--bg2)',ln:'var(--line)',ink:'var(--ink)',mut:'var(--mut)',card:'var(--card)',sel:'var(--rc2)'};
 const bad=new Set(pr?[]:alIssues(z).map(x=>x[2]).filter(Boolean));
 let g='';for(let x=1;x<z.w;x++)g+=`<line x1="${x*S}" y1="0" x2="${x*S}" y2="${H}" stroke="${P.ln}" stroke-width=".5" opacity=".6"/>`;for(let y=1;y<z.h;y++)g+=`<line x1="0" y1="${y*S}" x2="${W}" y2="${y*S}" stroke="${P.ln}" stroke-width=".5" opacity=".6"/>`;
 const lab=(i,w,h)=>{const a=AT[i.k],nm=i.lb||a.n[l].split(' ·')[0].split(' (')[0];return w>=1.5*S||i.k==='kiosk'||i.k==='b2b'?`<text x="${w/2}" y="${h/2+3.5}" text-anchor="middle" font-size="${Math.max(6,Math.min(10,w/(nm.length*.62)))}" font-weight="700" fill="${['sahne','kayit','kiosk','backdrop','ekran'].includes(i.k)?'#fff':P.ink}" pointer-events="none">${nm}</text>`:''};
 const body=i=>{const a=AT[i.k],[ew,eh]=alSz(i),w=ew*S,h=eh*S,on=!pr&&AL.sel===i.id,er=bad.has(i.id),st=`stroke="${on?P.sel:er?'#c27a12':a.col}" stroke-width="${on?2.5:er?2:1}"${er?' stroke-dasharray="3 2"':''}`;let s='';
  if(i.k==='sira'||i.k==='sinif'){const n=a.s,v=!!i.r;s=`<rect width="${w}" height="${h}" rx="3" fill="${i.k==='sinif'?P.card:'transparent'}" ${st}/>`;for(let c=0;c<n;c++){const t=(c+.5)/n;s+=`<circle cx="${v?w/2:t*w}" cy="${v?t*h:h/2}" r="${Math.min(w,h)/2.8}" fill="${a.col}" opacity=".75"/>`}}
  else if(i.k==='yuvarlak'){s=`<circle cx="${w/2}" cy="${h/2}" r="${w/2-5}" fill="${P.card}" ${st}/>`;for(let c=0;c<10;c++){const t=c/10*Math.PI*2;s+=`<circle cx="${w/2+Math.cos(t)*(w/2-2)}" cy="${h/2+Math.sin(t)*(h/2-2)}" r="2.6" fill="${a.col}"/>`}}
  else if(i.k==='b2b'){s=`<rect x="0" y="0" width="${w}" height="${h}" rx="3" fill="${P.card}" ${st}/>`+[[-4,h*.3],[-4,h*.7],[w+4,h*.3],[w+4,h*.7]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${a.col}" opacity=".7"/>`).join('')}
  else if(['giris','cikis','kapi'].includes(i.k)){s=`<rect width="${w}" height="${h}" fill="${a.col}" ${st}/>`+(i.k!=='kapi'?`<text x="${i.r?w+4:w/2}" y="${i.r?h/2+3:-4}" text-anchor="${i.r?'start':'middle'}" font-size="8.5" font-weight="700" fill="${a.col}">${a.n[l].toUpperCase()}</text>`:`<text x="${w/2}" y="${h+10}" text-anchor="middle" font-size="8.5" font-weight="700" fill="${a.col}">${i.lb?alN(alZ(i.lb),l):''}</text>`);return s}
  else{const dark=['sahne','kayit','kiosk','backdrop','ekran'].includes(i.k);s=`<rect width="${w}" height="${h}" rx="${i.k==='rollup'||i.k==='tabela'?1:3}" fill="${dark?a.col:`color-mix(in srgb,${a.col} 14%,${P.card})`}" ${st}/>`;if(i.k==='qr')s+=`<rect x="${w*.25}" y="${h*.25}" width="${w*.5}" height="${h*.5}" fill="none" stroke="${a.col}" stroke-width="1.5"/><rect x="${w*.4}" y="${h*.4}" width="${w*.2}" height="${h*.2}" fill="${a.col}"/>`}
  return s+lab(i,w,h)};
 return `<svg ${pr?'':'id="alsvg"'} viewBox="-14 -14 ${W+28} ${H+28}" style="width:100%;height:auto;display:block;${pr?'':'touch-action:none;min-width:520px'}" role="img" aria-label="${alN(z,l)} · ${z.w} × ${z.h} m">
  <rect x="0" y="0" width="${W}" height="${H}" rx="6" fill="${P.bg}" stroke="${P.ink}" stroke-width="2"/>${g}
  <text x="${W}" y="${H+11}" text-anchor="end" font-size="8.5" fill="${P.mut}">${z.w} × ${z.h} m · ${Math.round(z.w*z.h)} m² · 1 □ = 1 m</text>
  ${z.it.map(i=>`<g data-ai="${i.id}" transform="translate(${i.x*S},${i.y*S})" style="${pr?'':'cursor:grab'}">${body(i)}</g>`).join('')}</svg>`}
const ALT={plan:T4('Kroki','Sxema','Схема','Layout'),pal:T4('Öğe ekle','Element qoʻshish','Добавить','Add item'),lay:T4('Oturma düzeni şablonu','Oʻtirish shabloni','Шаблон рассадки','Seating template'),
 seat:T4('Oturma','Oʻrin','Мест','Seats'),mat:T4('Malzeme ve baskı','Material va bosma','Материалы и печать','Materials & print'),set:T4('Kurulum kontrol listesi','Jihozlash roʻyxati','Чек-лист монтажа','Set-up checklist'),
 chk:T4('Kontrol','Tekshiruv','Проверка','Check'),ok:T4('Sorun yok','Muammo yoʻq','Всё в порядке','All clear'),drag:T4('Öğeleri sürükleyin; seçili öğe ok tuşlarıyla 0,5 m kayar.','Elementlarni suring; strelkalar bilan 0,5 m.','Перетаскивайте; стрелки сдвигают на 0,5 м.','Drag items; arrow keys nudge 0.5 m.'),
 undo:T4('Geri al','Bekor qilish','Отменить','Undo'),rot:T4('Döndür','Burish','Повернуть','Rotate'),dup:T4('Kopyala','Nusxa','Копировать','Duplicate'),del:T4('Sil','Oʻchirish','Удалить','Delete'),
 w:T4('En (m)','Eni (m)','Ширина (м)','Width (m)'),h:T4('Boy (m)','Boʻyi (m)','Длина (м)','Length (m)'),est:T4('m² ile tahmini en çok','m² boʻyicha taxminan','Оценка по м²','Estimate by m²'),
 qty:T4('Adet','Soni','Кол-во','Qty'),unit:T4('Birim','Birlik','Цена','Unit'),sup:T4('Tedarikçi','Yetkazuvchi','Поставщик','Supplier'),plang:T4('Baskı dili','Bosma tili','Язык печати','Print language'),ord:T4('Sipariş','Buyurtma','Заказ','Order'),
 file:T4('Alan planı dosyası','Maydon rejasi fayli','Файл плана','Floor plan file'),toh:T4('Otele ve kuruluşa gider','Mehmonxona va tashkilotga','Отелю и организации','For hotel and partner'),
 send:T4('Görevli panosuna gönder','Navbatchilar taxtasiga yuborish','Отправить на доску постов','Send to duty board'),photo:T4('fotoğrafla teyit','foto bilan tasdiq','подтверждено фото','photo-confirmed'),
 links:T4('Bağlı ekranlar','Bogʻliq ekranlar','Связанные экраны','Linked screens'),d3h:T4('Krokiden kendiliğinden oluşur · sürükleyerek döndürün, tekerlekle yakınlaşın','Sxemadan avtomatik · suring, gʻildirak bilan yaqinlashtiring','Строится из схемы · вращайте мышью, колесо — масштаб','Built from the layout · drag to orbit, wheel to zoom'),top:T4('Üstten','Yuqoridan','Сверху','Top'),eye:T4('Giriş açısı','Kirish nuqtasi','Со входа','From entrance'),sel0:T4('Bir öğeye tıklayın: boyut, döndür, kopyala, sil.','Elementni bosing.','Нажмите на элемент.','Click an item.'),tot:T4('Kurulum gideri','Jihozlash xarajati','Затраты на монтаж','Set-up cost')};
const alT=k=>ALT[k][L];
function vAlan(){
 const e=ev(AL.ev),z=alZ(),iss=alIssues(z),nd=alNeed(z),hv=alHave(z),mat=alMat(),sel=z.it.find(i=>i.id===AL.sel),tm2=AL.Z.reduce((a,x)=>a+x.w*x.h,0);
 const allIss=AL.Z.reduce((a,x)=>a+alIssues(x).length,0),done=AL.SET.filter(s=>s[4]).length;
 const zb=AL.Z.map(x=>{const n=alIssues(x).length;return `<button type="button" data-alz="${x.id}" class="${x.id===AL.z?'on':''}">${alN(x)}${n?` <span style="color:${x.id===AL.z?'#ffd28a':'var(--wr)'}">● ${n}</span>`:''}</button>`}).join('');
 const lays=z.hl?['tiyatro','sinif','u','yuvarlak','b2b']:['karsilama'];
 if(AL.v3)requestAnimationFrame(al3d);
 return head('uz-alan')+`
 <div class="note">${ik('alan','ik-16')}<span><b>${e.n}</b> · ${VEN.makine.n.split(' · ')[0]} · ${e.d} · ${TT('Örnek veri. Fuaye şablonu gerçek bir forum kurulumundan alındı: backdrop, roll-up, kapı tabelası, kayıt masası ve QR standı.','Namuna maʼlumot. Foye shabloni haqiqiy forum jihozlashidan olingan.','Пример. Шаблон фойе взят с реального форума: бэкдроп, ролл-апы, таблички, регистрация, QR-стойка.','Sample data. The foyer template comes from a real forum set-up: backdrop, roll-ups, door signs, registration desk, QR stand.')[L]}</span></div>
 <div class="grid g4" style="margin-bottom:14px">
  <div class="c kp"><small>${TT('Alanlar','Maydonlar','Зоны','Areas')[L]}</small><b>${AL.Z.length}</b><span>${Math.round(tm2)} m²</span></div>
  <div class="c kp"><small>${alT('seat')} · ${alN(z)}</small><b>${nd?`${hv} / ${nd[0]}`:alSeats(z)||'—'}</b><span>${nd?(nd[1]==='masa'?TT('B2B masası','B2B stol','B2B-столов','B2B tables')[L]:(nd[2]?nd[2][L]+' · ':'')+t('people')):ALY[z.lay][L]}</span></div>
  <div class="c kp"><small>${alT('mat')}</small><b>${mat.reduce((a,x)=>a+x.n,0)}</b><span>${mat.filter(x=>AT[x.k].p).reduce((a,x)=>a+x.n,0)} ${TT('baskı','bosma','печать','print')[L]} · ${mat.filter(x=>AL.S[x.k]).length}/${mat.length} ${alT('ord').toLowerCase()}</span></div>
  <div class="c kp"><small>${alT('tot')}</small><b>${fmt(alCost())}</b><span>${allIss?`<span style="color:var(--wr)">${allIss} ${alT('chk').toLowerCase()}</span>`:alT('ok')} · ${done}/${AL.SET.length} ${TT('kurulum','jihoz','монтаж','set-up')[L]}</span></div>
 </div>
 <div class="c" style="margin-bottom:14px;padding:10px 12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center"><div class="seg">${zb}</div>
  <div style="margin-left:auto;display:flex;gap:6px;flex-wrap:wrap;align-items:center">${AL.undo?`<button class="btn" type="button" data-alundo="1" style="font-size:.78rem">↶ ${alT('undo')}</button>`:''}<button class="btn p" type="button" data-alpdf="1" style="font-size:.78rem">${ik('rapor','ik-16')}${alT('file')} · PDF</button></div></div>
 <div class="grid g21" style="margin-bottom:14px">
  <div class="c"><div class="ch"><div><h2>${alN(z)}</h2><p class="cs">${z.w} × ${z.h} m · ${Math.round(z.w*z.h)} m² · ${AL.v3?alT('d3h'):alT('drag')}</p></div><div class="r"><div class="seg"><button type="button" data-alv="2" class="${AL.v3?'':'on'}">2D</button><button type="button" data-alv="3" class="${AL.v3?'on':''}">3D</button></div></div></div>
   ${AL.v3?`<div style="position:relative"><canvas id="alcv" style="width:100%;height:480px;display:block;border-radius:12px;cursor:grab;touch-action:none" aria-label="${alN(z)} · 3D"></canvas><div style="position:absolute;right:8px;top:8px;display:flex;gap:4px">${[['l','↺ 45°'],['r','↻ 45°'],['top',alT('top')],['eye',alT('eye')]].map(x=>`<button class="btn" type="button" data-al3="${x[0]}" style="padding:3px 8px;font-size:.72rem">${x[1]}</button>`).join('')}</div></div>`:`<div class="tw" style="margin:0">${alSvg(z)}</div>`}
   <div style="margin-top:12px"><span class="gl" style="margin-bottom:6px">${alT('pal')}</span><div style="display:flex;gap:6px;flex-wrap:wrap">${ALPAL.map(k=>`<button class="btn" type="button" data-aladd="${k}" style="padding:3px 9px;font-size:.74rem;gap:6px"><i style="width:9px;height:9px;border-radius:2px;background:${AT[k].col};display:inline-block"></i>${AT[k].n[L]}</button>`).join('')}</div></div></div>
  <div class="grid" style="align-content:start">
   <div class="c"><h2>${alT('lay')}</h2><p class="cs">${TT('Şablon seçilince düzen yeniden kurulur; Geri al ile dönülür.','Shablon tanlansa tartib qayta tuziladi.','Шаблон перестраивает зону; можно отменить.','A template rebuilds the area; Undo returns.')[L]}</p>
    <div class="seg">${lays.map(k=>`<button type="button" data-allay="${k}" class="${z.lay===k?'on':''}">${ALY[k][L]}</button>`).join('')}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">${['w','h'].map(k=>`<label class="gl">${alT(k)}<input type="number" min="4" max="60" step=".5" value="${z[k]}" data-al${k}="1" style="width:100%;margin-top:4px;border:1px solid var(--line);border-radius:8px;padding:6px 8px;font:600 .82rem var(--f-d);background:var(--card);color:var(--ink)"></label>`).join('')}</div>
    ${z.hl?`<div class="li" style="padding:8px 0 0;border:0"><span class="t"><span class="gl">${alT('est')} · ${ALY[z.lay]?ALY[z.lay][L]:''}</span><b>${ALM2[z.lay]?Math.floor(z.w*z.h/ALM2[z.lay]):'—'} ${z.lay==='b2b'?TT('masa','stol','столов','tables')[L]:t('people')}</b></span><a class="tag" href="#uz-akis" style="text-decoration:none;color:var(--rc)">${t('uz-akis')} · ${HL[z.hl][1]} ${t('people')}</a></div>`:''}
   </div>
   <div class="c"><h2>${alT('chk')}</h2>${iss.length?iss.map(x=>`<div class="li" style="padding:6px 0${x[2]?';cursor:pointer':''}"${x[2]?` data-alsel="${x[2]}"`:''}><span class="t" style="font-size:.8rem;color:${x[0]==='bad'?'var(--bad)':'var(--wr)'};font-weight:600">${x[0]==='bad'?'!':'•'} ${x[1][L]}</span></div>`).join(''):`<p class="cs" style="margin:0;color:var(--ok);font-weight:600">✓ ${alT('ok')}</p>`}</div>
   <div class="c">${sel?`<div class="ch"><div><h2>${sel.lb?sel.lb+' · ':''}${AT[sel.k].n[L]}</h2><p class="cs">${alSz(sel).map(v=>String(v).replace('.',',')).join(' × ')} m · x ${String(sel.x).replace('.',',')} · y ${String(sel.y).replace('.',',')}${AT[sel.k].sp?' · '+AT[sel.k].sp:''}</p></div></div>
    <div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn" type="button" data-alrot="1">↻ ${alT('rot')}</button><button class="btn" type="button" data-aldup="1">⧉ ${alT('dup')}</button><button class="btn" type="button" data-aldel="1" style="color:var(--bad)">${alT('del')}</button></div>`:`<p class="cs" style="margin:0">${alT('sel0')}</p>`}</div>
  </div>
 </div>
 <div class="grid g21">
  <div class="c"><div class="ch"><div><h2>${alT('mat')}</h2><p class="cs">${TT('Kroki değişince adetler kendiliğinden güncellenir · USD · gider teklife ve finansa geçer','Sxema oʻzgarsa soni yangilanadi','Количество обновляется по схеме · USD','Quantities follow the layout · USD')[L]}</p></div></div>
   <div class="tw"><table style="min-width:640px"><thead><tr><th>${TT('Malzeme','Material','Материал','Item')[L]}</th><th class="num">${alT('qty')}</th><th>${alT('plang')}</th><th>${alT('sup')}</th><th class="num">${alT('unit')}</th><th class="num">${t('cost')}</th><th>${alT('ord')}</th></tr></thead><tbody>
   ${mat.map(x=>{const a=AT[x.k];return `<tr><td><b>${a.n[L]}</b><span class="gl">${a.sp} · ${[...x.z].map(id=>alN(alZ(id))).join(', ')}</span></td><td class="num">${x.n}</td><td>${a.p?`<select data-alpl="${x.k}" aria-label="${alT('plang')}">${['TR · UZ','UZ · RU','TR · UZ · RU · EN','EN'].map(o=>`<option ${(AL.P[x.k]||'TR · UZ')===o?'selected':''}>${o}</option>`).join('')}</select>`:'<span class="gl">—</span>'}</td><td style="font-size:.78rem">${a.su}</td><td class="num">${fmt(a.c)}</td><td class="num"><b>${fmt(a.c*x.n)}</b></td><td><input type="checkbox" data-alord="${x.k}" ${AL.S[x.k]?'checked':''} aria-label="${alT('ord')} · ${a.n[L]}" style="width:16px;height:16px;accent-color:var(--rc2)"></td></tr>`}).join('')}
   </tbody></table></div><div class="tot"><span>${alT('tot')} · <a href="#uz-finans" style="color:var(--rc);text-decoration:none">${t('uz-finans')}</a> · <a href="#uz-teklif" style="color:var(--rc);text-decoration:none">${t('uz-teklif')}</a></span><b>${fmt(alCost())}</b></div></div>
  <div class="c"><div class="ch"><div><h2>${alT('set')}</h2><p class="cs">16.02 · ${done}/${AL.SET.length} · ${TT('Kioskta görevli panosunda','Kioskda navbatchilar taxtasida','На доске постов в киоске','On the kiosk duty board')[L]}: ${AL.sent}</p></div></div>
   ${AL.SET.map((s,i)=>`<label class="li" style="padding:7px 0;cursor:pointer;align-items:flex-start"><input type="checkbox" data-alset="${i}" ${s[4]?'checked':''} style="width:16px;height:16px;margin-top:2px;accent-color:var(--ok)"><span class="dt" style="min-width:46px;padding:3px 6px">${s[0]}</span><span class="t"><b style="font-size:.8rem;font-weight:600;${s[4]?'text-decoration:line-through;color:var(--mut)':''}">${s[1][L]}</b><span>${sn(s[2])}${s[3]?' · '+alN(alZ(s[3])):''}${s[4]?` · <span style="color:var(--ok)">✓ ${s[5]} ${alT('photo')}</span>`:''}</span></span></label>`).join('')}
   <button class="btn" type="button" data-alsend="1" style="margin-top:10px;width:100%;justify-content:center">${ik('kiosk','ik-16')}${alT('send')}</button>
   <p class="gl" style="margin-top:12px">${alT('links')}: ${['uz-mekan','uz-akis','uz-kiosk','uz-gun','uz-acil'].map(r=>`<a href="#${r}" style="color:var(--rc);text-decoration:none">${t(r)}</a>`).join(' · ')}</p></div>
 </div>`;
}
function alPdf(){
 const l=AL.pl,e=ev(AL.ev),mat=alMat(),ov=document.getElementById('ov');
 ov.innerHTML=`<div class="modal" id="md"><div class="doc" style="width:min(820px,100%)"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><div style="font:700 .7rem var(--f-m);letter-spacing:.1em;color:#5f7186">FABRIQ · event360 UZ</div><div style="margin-left:auto;display:flex;gap:4px">${LANGS.map(x=>`<button type="button" class="btn" data-alpl2="${x}" style="padding:2px 8px;font-size:.72rem;${x===l?'background:#0b2545;color:#fff':''}">${x.toUpperCase()}</button>`).join('')}</div></div>
  <h2 style="margin:8px 0 2px">${ALT.file[l]} · ${e.n}</h2><p style="margin:0 0 14px;color:#5f7186;font-size:.82rem">${VEN.makine.n.split(' · ')[0]} · ${e.d} · ${ALT.toh[l]}</p>
  ${AL.Z.map(z=>`<h3 style="font-size:.92rem;margin:14px 0 6px">${alN(z,l)} · ${z.w} × ${z.h} m${z.hl?' · '+ALY[z.lay][l]:''}</h3>${alSvg(z,1,l)}`).join('')}
  <h3 style="font-size:.92rem;margin:16px 0 6px">${ALT.mat[l]}</h3><table style="width:100%;font-size:.78rem;border-collapse:collapse">${mat.map(x=>`<tr style="border-bottom:1px solid #e3eaf1"><td style="padding:5px 0">${AT[x.k].n[l]}</td><td>${AT[x.k].sp}</td><td style="text-align:right"><b>${x.n}</b></td></tr>`).join('')}</table>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px"><button class="btn p" type="button" data-toast="1">PDF</button><button class="btn" type="button" id="mc">${t('close')}</button></div></div></div>`;
 const c=()=>ov.innerHTML='';document.getElementById('mc').onclick=c;document.getElementById('md').onclick=ev_=>{if(ev_.target.id==='md')c()}}
function alSnap(){AL.undo=JSON.stringify(AL.Z.map(z=>({id:z.id,w:z.w,h:z.h,lay:z.lay,it:z.it})))}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-alz],[data-aladd],[data-allay],[data-alrot],[data-aldup],[data-aldel],[data-alundo],[data-alpdf],[data-alpl2],[data-alsend],[data-alsel],[data-alv]');if(!b)return;
 const z=alZ(),d=b.dataset,it=z.it.find(i=>i.id===AL.sel);
 if(d.alv){AL.v3=d.alv==='3'}
 else if(d.alz){AL.z=d.alz;AL.sel=''}
 else if(d.alsel){AL.sel=d.alsel}
 else if(d.aladd){alSnap();const a=AT[d.aladd],o={id:'i'+(++AL.seq),k:d.aladd,x:Math.max(0,Math.round((z.w-a.w)))/2,y:Math.max(0,Math.round((z.h-a.h)))/2,r:0,lb:d.aladd==='b2b'?'M'+(z.it.filter(i=>i.k==='b2b').length+1):d.aladd==='kiosk'?'K'+(AL.Z.reduce((s,x)=>s+x.it.filter(i=>i.k==='kiosk').length,0)+1):''};z.it.push(o);AL.sel=o.id;toast(a.n[L]+' +')}
 else if(d.allay){alSnap();z.lay=d.allay;z.it=alGen(z,z.lay);AL.sel='';toast(ALY[z.lay][L]+' ✓')}
 else if(d.alrot&&it){alSnap();it.r=it.r?0:90}
 else if(d.aldup&&it){alSnap();const o=Object.assign({},it,{id:'i'+(++AL.seq),x:it.x+.5,y:it.y+.5});z.it.push(o);AL.sel=o.id}
 else if(d.aldel&&it){alSnap();z.it=z.it.filter(i=>i!==it);AL.sel=''}
 else if(d.alundo&&AL.undo){JSON.parse(AL.undo).forEach(s=>Object.assign(alZ(s.id),s));AL.undo=null;AL.sel=''}
 else if(d.alpdf){alPdf();return}
 else if(d.alpl2){AL.pl=d.alpl2;alPdf();return}
 else if(d.alsend){const n=new Date();AL.sent='17.11 '+String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');toast(alT('send')+' ✓')}
 else return;
 render()});
document.addEventListener('change',e=>{const el=e.target,d=el.dataset;if(!d)return;const z=alZ();
 if(d.alw||d.alh){const v=Math.min(60,Math.max(4,Math.round(+el.value*2)/2||0));alSnap();z[d.alw?'w':'h']=v;if(z.hl)z.it=alGen(z,z.lay)}
 else if(d.alpl){AL.P[d.alpl]=el.value;toast(t('saved'))}
 else if(d.alord){AL.S[d.alord]=el.checked?1:0}
 else if(d.alset){const s=AL.SET[+d.alset],n=new Date();s[4]=el.checked?1:0;s[5]=el.checked?String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0'):''}
 else return;render()});
/* Sürükle-bırak (0,5 m ızgaraya oturur) */
let alDr=null;
document.addEventListener('pointerdown',e=>{const g=e.target.closest&&e.target.closest('#alsvg [data-ai]');if(!g)return;const svg=g.ownerSVGElement,z=alZ(),it=z.it.find(i=>i.id===g.dataset.ai);if(!it)return;
 const m=svg.getScreenCTM().inverse(),p=new DOMPoint(e.clientX,e.clientY).matrixTransform(m);alDr={g,it,svg,m,px:p.x,py:p.y,x0:it.x,y0:it.y,mv:0};g.setPointerCapture&&g.setPointerCapture(e.pointerId);e.preventDefault()});
document.addEventListener('pointermove',e=>{if(!alDr)return;const p=new DOMPoint(e.clientX,e.clientY).matrixTransform(alDr.m),dx=(p.x-alDr.px)/22,dy=(p.y-alDr.py)/22;
 if(Math.abs(dx)+Math.abs(dy)>.15)alDr.mv=1;const z=alZ(),[w,h]=alSz(alDr.it);
 alDr.nx=Math.min(z.w-w,Math.max(0,Math.round((alDr.x0+dx)*2)/2));alDr.ny=Math.min(z.h-h,Math.max(0,Math.round((alDr.y0+dy)*2)/2));alDr.g.setAttribute('transform',`translate(${alDr.nx*22},${alDr.ny*22})`)});
document.addEventListener('pointerup',()=>{if(!alDr)return;const d=alDr;alDr=null;if(d.mv&&d.nx!=null&&(d.nx!==d.x0||d.ny!==d.y0)){alSnap();d.it.x=d.nx;d.it.y=d.ny}AL.sel=d.it.id;render()});
document.addEventListener('keydown',e=>{if(CUR!=='uz-alan'||!AL.sel||/INPUT|SELECT|TEXTAREA/.test((e.target.tagName||''))||document.getElementById('md'))return;const z=alZ(),it=z.it.find(i=>i.id===AL.sel);if(!it)return;
 const mv={ArrowLeft:[-.5,0],ArrowRight:[.5,0],ArrowUp:[0,-.5],ArrowDown:[0,.5]}[e.key];
 if(mv){e.preventDefault();const [w,h]=alSz(it);it.x=Math.min(z.w-w,Math.max(0,it.x+mv[0]));it.y=Math.min(z.h-h,Math.max(0,it.y+mv[1]));render()}
 else if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();alSnap();z.it=z.it.filter(i=>i!==it);AL.sel='';render()}});
Object.assign(V,{'uz-alan':vAlan});Object.assign(ICON,{'uz-alan':'alan'});Object.assign(SUBK,{'uz-alan':'s_alan'});
/* ---- 3D görünüm: dış kütüphanesiz, krokiden otomatik (ortografik, ressam sıralaması) ---- */
const A3={yaw:-.35,pit:.95,zm:1.15};
const A3H={backdrop:3,rollup:2,tabela:1.6,qr:1.2,bayrak:2.4,kiosk:1.5,sahne:.4,ekran:2.6,kursu:1.1,kabin:2.2,ikram:.9,kapi:2.3,giris:.02,cikis:2.3};
function alBoxes(z){const B=[],it=z.it;
 it.forEach(i=>{const a=AT[i.k],[W,D]=alSz(i),mp=(u,v)=>i.r?[i.x+v,i.y+u]:[i.x+u,i.y+v],bx=(u,v,w,d,z0,h,c,lb,fr)=>{const [x,y]=mp(u,v),[ww,dd]=i.r?[d,w]:[w,d];B.push({x,y,w:ww,d:dd,z0,h,c,lb,fr})};
  const chair=(u,v,c,back)=>{bx(u,v,.42,.42,0,.45,c);if(back==='n')bx(u,v,.42,.06,.45,.45,c);else if(back==='s')bx(u,v+.36,.42,.06,.45,.45,c);else if(back==='w')bx(u,v,.06,.42,.45,.45,c);else bx(u+.36,v,.06,.42,.45,.45,c)};
  if(i.k==='sira'){for(let c=0;c<8;c++)chair(c*.5+.04,.04,'#c9a24a','s')}
  else if(i.k==='sinif'){bx(0,0,2.4,.6,.7,.05,'#e8edf3');bx(.1,.05,.08,.5,0,.7,'#8a96a3');bx(2.22,.05,.08,.5,0,.7,'#8a96a3');for(let c=0;c<3;c++)chair(c*.8+.19,.7,'#c9a24a','s')}
  else if(i.k==='b2b'){bx(0,0,1.2,.8,0,.75,'#1d2a3a',i.lb,1);chair(-.5,.19,'#c9a24a','w');chair(1.28,.19,'#c9a24a','e');chair(.39,-.5,'#c9a24a','n');chair(.39,.88,'#c9a24a','s')}
  else if(i.k==='yuvarlak'){B.push({cyl:1,x:i.x+.9,y:i.y+.9,r:.75,z0:0,h:.75,c:'#f2f4f7'});for(let c=0;c<10;c++){const t=c/10*Math.PI*2;bx(.9+Math.cos(t)*1.05-.2,.9+Math.sin(t)*1.05-.2,.4,.4,0,.45,'#c9a24a')}}
  else if(i.k==='kayit'){bx(0,0,1.8,.8,0,.75,'#151a22',TT('KAYIT','ROʻYXAT','РЕГИСТРАЦИЯ','REGISTRATION')[L],1);chair(.3,-.55,'#c9a24a','n');chair(1.1,-.55,'#c9a24a','n')}
  else if(i.k==='ekran'){bx(0,0,W,D,1,2.25,'#0f2d5c',TT('EKRAN','EKRAN','ЭКРАН','SCREEN')[L],1);bx(W/2-.1,.1,.2,.15,0,1,'#555')}
  else if(i.k==='bayrak'){bx(.05,.15,.06,.06,0,2.4,'#999');bx(.11,.15,.32,.04,1.8,.55,'#e30a17');bx(.45,.15,.06,.06,0,2.4,'#999');bx(.51,.15,.32,.04,1.8,.55,'#1eb53a')}
  else if(i.k==='qr'){bx(W/2-.03,D/2-.03,.06,.06,0,1.05,'#c7ccd2');bx(.02,.05,W-.04,.35,1.05,.3,'#ffffff','QR',1)}
  else if(i.k==='tabela'){bx(W/2-.03,.1,.06,.06,0,1.1,'#c7ccd2');bx(0,.08,W,.06,1.1,.6,'#ffffff',i.lb?alN(alZ(i.lb)):'',1)}
  else if(i.k==='rollup'){bx(0,.1,W,.2,0,.08,'#c7ccd2');bx(.02,.18,W-.04,.03,.08,1.92,'#3f7fd0','event360',1)}
  else if(i.k==='backdrop'){bx(0,0,W,D,0,3,'#24307a',TT('FORUM 2027','FORUM 2027','ФОРУМ 2027','FORUM 2027')[L],1)}
  else if(i.k==='kiosk'){bx(.1,.1,.4,.4,0,1,'#0b2545');bx(.05,.05,.5,.12,1,.5,'#163a63',i.lb,1)}
  else if(i.k==='giris'||i.k==='cikis'){bx(0,0,W,D,0,.02,a.col);if(i.k==='cikis')bx(0,0,W,D,2.2,.25,'#c4473a','EXIT',1)}
  else if(i.k==='kapi')bx(0,0,W,.12,0,2.3,'#c9a46a');else bx(0,0,W,D,0,A3H[i.k]||.75,a.col,i.k==='sahne'||i.k==='kabin'?a.n[L].split(' (')[0]:'',i.k==='kabin')});
 return B}
function al3d(){
 const cv=document.getElementById('alcv');if(!cv)return;const z=alZ(),dp=devicePixelRatio||1,Wc=cv.clientWidth,Hc=cv.clientHeight;cv.width=Wc*dp;cv.height=Hc*dp;
 const g=cv.getContext('2d');g.setTransform(dp,0,0,dp,0,0);const cs=getComputedStyle(document.documentElement),bg=cs.getPropertyValue('--bg2').trim()||'#f3f7fb',ink=cs.getPropertyValue('--ink').trim()||'#0b2545';
 g.fillStyle=bg;g.fillRect(0,0,Wc,Hc);
 const cx=z.w/2,cy=z.h/2,cY=Math.cos(A3.yaw),sY=Math.sin(A3.yaw),cP=Math.cos(A3.pit),sP=Math.sin(A3.pit);
 const sc=Math.min(Wc/(Math.hypot(z.w,z.h)*1.08),Hc/((Math.hypot(z.w,z.h)*sP+4*cP)*1.05))*A3.zm;
 const P=(x,y,h)=>{const X=(x-cx)*cY-(y-cy)*sY,Y=(x-cx)*sY+(y-cy)*cY;return [Wc/2+X*sc,Hc/2+(Y*sP-h*cP)*sc+ (1.5*cP)*sc,Y*cP+h*sP]};
 const sh=(hex,f)=>{const n=parseInt(hex.slice(1),16),r=n>>16,gg=n>>8&255,b=n&255;return `rgb(${Math.round(r*f)},${Math.round(gg*f)},${Math.round(b*f)})`};
 const poly=(pts,fill,st)=>{g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fillStyle=fill;g.fill();if(st){g.strokeStyle=st;g.lineWidth=.6;g.stroke()}};
 /* zemin + ızgara + arka duvarlar */
 const fl=[[0,0],[z.w,0],[z.w,z.h],[0,z.h]];poly(fl.map(p=>P(p[0],p[1],0)),'#4e6b3c');
 g.strokeStyle='rgba(255,255,255,.08)';g.lineWidth=1;for(let x=1;x<z.w;x++){const a=P(x,0,0),b=P(x,z.h,0);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}for(let y=1;y<z.h;y++){const a=P(0,y,0),b=P(z.w,y,0);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
 const WH=3.2,walls=[[0,0,z.w,0],[z.w,0,z.w,z.h],[z.w,z.h,0,z.h],[0,z.h,0,0]].map(w=>({w,d:P((w[0]+w[2])/2,(w[1]+w[3])/2,0)[2]})).sort((a,b)=>a.d-b.d).slice(0,2);
 walls.forEach(({w})=>poly([P(w[0],w[1],0),P(w[2],w[3],0),P(w[2],w[3],WH),P(w[0],w[1],WH)],'rgba(222,208,180,.85)','rgba(120,100,70,.4)'));
 /* kutular: uzaktan yakına */
 const B=alBoxes(z).map(b=>({...b,dd:b.cyl?P(b.x,b.y,b.z0+b.h/2)[2]:P(b.x+b.w/2,b.y+b.d/2,b.z0+b.h/2)[2]})).sort((a,b)=>a.dd-b.dd);
 const V=[sY*cP,cY*cP];/* görüş yönü (zeminde) */
 B.forEach(b=>{
  if(b.cyl){const n=12,pts=k=>Array.from({length:n},(_,i)=>{const t=i/n*Math.PI*2;return P(b.x+Math.cos(t)*b.r,b.y+Math.sin(t)*b.r,k)});
   const bot=pts(b.z0),top=pts(b.z0+b.h);for(let i=0;i<n;i++){const j=(i+1)%n,t=(i+.5)/n*Math.PI*2,dot=Math.cos(t)*sY+Math.sin(t)*cY;if(dot>0)poly([bot[i],bot[j],top[j],top[i]],sh(b.c,.7+.2*dot))}poly(top,b.c,'rgba(0,0,0,.15)');return}
  const x0=b.x,y0=b.y,x1=b.x+b.w,y1=b.y+b.d,z0=b.z0,z1=b.z0+b.h;
  const faces=[[[x0,y1],[x1,y1],[0,1]],[[x1,y0],[x0,y0],[0,-1]],[[x1,y1],[x1,y0],[1,0]],[[x0,y0],[x0,y1],[-1,0]]];
  faces.forEach(([a,c,n])=>{const dot=n[0]*sY+n[1]*cY;if(dot<=0)return;poly([P(a[0],a[1],z0),P(c[0],c[1],z0),P(c[0],c[1],z1),P(a[0],a[1],z1)],sh(b.c,.62+.25*dot),'rgba(0,0,0,.12)')});
  poly([P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)],b.c,'rgba(0,0,0,.12)');
  if(b.lb){const c=P((x0+x1)/2,(y0+y1)/2,b.fr?z0+b.h*.55:z1+.15),fs=Math.max(8,Math.min(13,sc*.32));g.font=`700 ${fs}px "Plus Jakarta Sans",system-ui,sans-serif`;g.textAlign='center';g.fillStyle=b.fr&&b.c!=='#ffffff'&&b.c!=='#f2f4f7'?'#fff':ink;g.fillText(b.lb,c[0],c[1]+fs/3)}});
 g.font='600 11px "IBM Plex Mono",monospace';g.textAlign='left';g.fillStyle=ink;g.globalAlpha=.6;g.fillText(`${alN(z)} · ${z.w} × ${z.h} m · 3D`,10,Hc-10);g.globalAlpha=1}
let a3D=null;
document.addEventListener('pointerdown',e=>{if(e.target.id!=='alcv')return;a3D={x:e.clientX,y:e.clientY,yaw:A3.yaw,pit:A3.pit};e.target.setPointerCapture&&e.target.setPointerCapture(e.pointerId)});
document.addEventListener('pointermove',e=>{if(!a3D)return;A3.yaw=a3D.yaw-(e.clientX-a3D.x)*.008;A3.pit=Math.min(1.45,Math.max(.35,a3D.pit-(e.clientY-a3D.y)*.006));al3d()});
document.addEventListener('pointerup',()=>{a3D=null});
document.addEventListener('wheel',e=>{if(e.target.id!=='alcv')return;e.preventDefault();A3.zm=Math.min(3,Math.max(.6,A3.zm*(e.deltaY<0?1.1:.9)));al3d()},{passive:false});
document.addEventListener('click',e=>{const b=e.target.closest('[data-al3]');if(!b)return;const k=b.dataset.al3;if(k==='l')A3.yaw+=Math.PI/4;else if(k==='r')A3.yaw-=Math.PI/4;else if(k==='top'){A3.pit=1.45;A3.yaw=0}else{A3.pit=.55;A3.yaw=0;A3.zm=1.15}al3d()});
addEventListener('resize',()=>{if(CUR==='uz-alan'&&AL.v3)al3d()});
