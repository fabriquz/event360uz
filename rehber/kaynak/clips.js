// [route, role, title, steps]; step: [caption, action?]  action: {c:sel} click, {s:px} scroll, {sel:[sel,val]}, {js:code}, {w:ms}
module.exports=[
['uz-ana','yon','Ana sayfa',[
 ['Ana sayfa: sıradaki etkinlik, onay bekleyen işler ve yapılacaklar tek ekranda.',{w:1800}],
 ['Aşağı kaydırınca bugünün yapılacakları ve devirler görünür.',{s:450}],
 ['Sol menüdeki “Şu rolle bak” ile ekranı başka bir rolün gözüyle açarsınız.',{sel:['#rolSel','sat']}],
 ['Menü ve tutarlar seçilen role göre değişir. Patron rolüne geri dönelim.',{sel:['#rolSel','yon']}]]],
['uz-ekip','yon','Ekip ve roller',[
 ['Ekip tek listede: her kişinin rolleri burada. Bir kişiye birden çok rol verilebilir.',{w:1800}],
 ['Roller kartları kimin hangi ekranı ve hangi tutarı gördüğünü anlatır.',{s:600}],
 ['İş akışı: her aşamanın sorumlusu ve işin kime devredildiği.',{s:1200}],
 ['“Bu kişi gibi bak” ile o kişinin ekranını açarsınız.',{c:'[data-asr]'}]]],
['uz-etkinlik','sat','Etkinlikler',[
 ['Tüm etkinlikler aşamasıyla listelenir: Fikir → Teklif → Kazanıldı → … → Kapandı.',{w:1600}],
 ['Bir etkinliğe tıklayınca kartı açılır: tür, kaynak, modüller ve gün akışı.',{c:'[data-ev]>>nth=1'}],
 ['Kart ayrıntıları: katılımcı sayısı, modüller, tahsilat durumu.',{s:500}],
 ['Yeni etkinlik için “Yeni etkinlik”e basın. Tür, şehir, tarih ve modülleri seçin.',{c:'[data-evnew]'}],
 ['Tüm alanlar seçmeli; gün akışı şablonu ile hızlı kurulur.',{w:2200}]]],
['uz-evren','sat','Firma evreni',[
 ['Her şey firma bilgileriyle başlar: Türk ihracatçılar ve Özbek alıcılar tek havuzda.',{w:1800}],
 ['Yeni Özbek alıcıyı “Özbek firma ekle” ile girin: unvan, sektör, ürün, şehir.',{c:'text=Özbek firma ekle'}],
 ['Özbek veri girildiği dilde saklanır, yanında Türkçesi görünür. Filtre ile yalnız Özbek alıcılar.',{c:'[data-f]>>nth=2'}],
 ['Türk ihracatçılara geçin.',{c:'[data-f]>>nth=1'}],
 ['Bu listeden etkinliğe hedef firmalar çıkarılır; sonraki adım Etkinlikler.',{s:600}]]],
['uz-teklif','yon','Teklif',[
 ['Teklif: maliyet kalemleri otomatik gelir (otel, ulaşım, tercüman, kiosk…).',{w:1800}],
 ['Kâr marjını sürgüyle ayarlayın; fiyat anında hesaplanır.',{c:'#mg'}],
 ['Satış onaya gönderir, patron “Fiyatı onayla” der.',{c:'[data-tko]'}],
 ['Teklif dosyasının dilini seçin (TR, UZ, RU, EN).',{dd:['[data-sg=fl]','UZ']}],
 ['Onaylı teklifi PDF olarak kuruluşa veya müşavirliğe gönderin.',{c:'text=Teklif dosyası · PDF'}]]],
['uz-sponsor','sat','Sponsor',[
 ['Sponsor ve partnerler: paket, tutar ve durum.',{w:1800}],
 ['Yeni sponsor ekleyin; gelir kâra ve teklife otomatik yansır.',{c:'[data-spadd]'}],
 ['“Nerede görünüyor”: logo katalogda, kioskta ve bültende çıkar.',{s:500}]]],
['uz-cagri','cag','Çağrı merkezi',[
 ['Arama listesi durumlara göre filtrelenir: aranacak, ulaşılamadı, teyit…',{c:'[data-cf]>>nth=1'}],
 ['Bir firmayı seçin; sağda bilgisi ve görüşme kaydı açılır.',{c:'[data-cc]>>nth=2'}],
 ['Görüşme sonucunu tek tuşla işaretleyin.',{c:'[data-cs="ok"],[data-cs]>>nth=1'}],
 ['Mesaj şablonu: türü, kanalı ve dili açılır kutulardan seçin (ör. Telegram).',{dd:['[data-sg=tc]','Telegram']}],
 ['Gönderdikten sonra “Gönderildi, kayda ekle” ile kayda düşer.',{c:'[data-tsend]'}],
 ['Tanıtım kartını seçilen dilde PDF olarak gönderin.',{c:'text=Tanıtım kartı · PDF'}]]],
['uz-riza','cag','Rıza ve belgeler',[
 ['Eksik rızalar ve belgeler listesi: katılımcı, alıcı, tercüman.',{w:1800}],
 ['Tümünü görmek için filtreyi değiştirin.',{c:'[data-rzf]>>nth=1'}],
 ['Gelen rızayı ✓ ile işaretleyin.',{c:'[data-rzok]'}],
 ['Eksiklerin hepsine tek tuşla hatırlatma gönderin.',{c:'[data-rzall]'}]]],
['uz-program','prg','Eşleştirme ve program',[
 ['Eşleştirme motoru Türk firmaları ve Özbek alıcıları puanlar.',{w:1800}],
 ['15 dakikalık B2B programı masa masa oluşur.',{s:400}],
 ['Program PDF’i için firmayı açılır kutudan seçin.',{dd:['[data-prf]','Konya Pompa']}],
 ['PDF dilini seçin; firma kendi dilinde alır.',{dd:['[data-sg=fl]','RU']}],
 ['Program bitince “Kioska aktar”: kiosk, katalog ve bot güncellenir. Aktarılmışsa buton pasif görünür.',{h:'[data-pub]'}]]],
['uz-akis','prg','Gün akışı',[
 ['Gün akışı: açılış → paralel salonlar → B2B → akşam yemeği.',{w:1600}],
 ['Günü seçin.',{c:'[data-akd]>>nth=1'}],
 ['Şablondan kurun: tek tuşla tüm gün oluşur.',{c:'[data-akt]>>nth=0'}],
 ['Kontrol paneli salon çakışmasını ve kapasiteyi uyarır.',{s:700}],
 ['Hazır olunca “Kioska aktar”.',{c:'[data-pub]'}]]],
['uz-gorev','yon','Görevler',[
 ['Görevler: her rolün işleri, sorumlu kişi ve son tarih.',{w:1800}],
 ['Bu haftanın işleri aşağıda; aşama değişince görevler kendiliğinden açılır.',{s:700}]]],
['uz-lojistik','loj','Lojistik',[
 ['Heyet listesi: kim hangi otelde, hangi transferde.',{w:1600}],
 ['Anlaşmalı oteller: bir otel seçin, fiyat ve oda bilgisi açılır.',{c:'[data-hs]>>nth=2'}],
 ['Restoranlar sekmesinde yemek planı ve firma atama.',{c:'[data-sup]>>nth=1'}],
 ['Ulaşım sekmesinde transferler.',{c:'[data-sup]>>nth=2'}],
 ['Giderler teklife ve kâra otomatik yansır; plan bitince kioska aktarın.',{c:'[data-pub]'}]]],
['uz-numune','loj','Numune ve kargo',[
 ['Numune ve kargo: firma, ürün, takip numarası ve durum.',{w:1800}],
 ['Gümrük ve teslim durumları aşağıda.',{s:500}]]],
['uz-mekan','prg','Mekân ve tercüman',[
 ['Salon krokisi: masalar ve kapasite.',{w:1600}],
 ['Maliyet kalemleri teklife gider.',{s:600}],
 ['Tercüman havuzu: boş masaya açılır kutudan tercüman seçin.',{dd:['[data-mtp=M9]','Bekzod']}]]],
['uz-gezi','loj','Gezi planı',[
 ['Standart programlar: 0 / +1 / +2 / +3 gün (Taşkent, Semerkant, Buhara, Harezm).',{c:'[data-gv]>>nth=2'}],
 ['Gün gün program: “+ yer ekle” kutusundan yer ekleyin.',{dd:['[data-ga="0"]','Şah-ı Zinde']}],
 ['Yer kütüphanesinde şehri açılır kutudan seçin.',{dd:['[data-sg=gc]','Semerkant']}],
 ['Afrosiyob biletleri: alınınca “Bilet alındı”.',{c:'[data-tkt]'}],
 ['Gezi maliyeti gidere yansır; programı 4 dilde PDF yapın.',{c:'text=Gezi programı · PDF'}]]],
['uz-rehber','loj','Rehber ve sağlık güvencesi',[
 ['Rehber atamaları: hangi gün hangi rehber, hangi dil.',{w:1600}],
 ['Rehber havuzu ve heyet sağlık güvencesi.',{s:700}],
 ['Güvenceyi tüm heyete tek tuşla ekleyin.',{c:'[data-hpall]'}]]],
['uz-katalog','yay','Heyet kataloğu',[
 ['Heyet kataloğu: firma bilgisi, logo ve program.',{w:1600}],
 ['Katalog dilini açılır kutudan seçin.',{dd:['[data-sg=katl]','UZ']}],
 ['Online katalogu yayınlayın; link kopyalanır.',{c:'[data-katpub]'}],
 ['Baskı için PDF.',{c:'text=Baskı PDF'}]]],
['uz-telegram','yay','Telegram bot',[
 ['Bağlı firmalar ve bot dili.',{w:1600}],
 ['Bir firmaya kendi programını kendi dilinde gönderin.',{c:'[data-tgs]'}],
 ['Değişiklik ve hatırlatmalar otomatik gider (prototipte taklit).',{s:600}],
 ['Programı tüm bağlı firmalara toplu gönderin.',{c:'[data-tgall]'}]]],
['uz-bulten','yay','Bülten',[
 ['Bülten sayıları: etkinlik öncesi, 1. gün, 2. gün, sonuç.',{w:1600}],
 ['Bülten dilini açılır kutudan seçin.',{dd:['[data-sg=bll]','RU']}],
 ['Yayınlayın ve kanal seçerek gönderin.',{c:'[data-blpub]'}],
 ['Telegram ile gönder.',{c:'[data-blsend]>>nth=1'}]]],
['uz-medya','yay','Medya ve sosyal medya',[
 ['Medya arşivi: fotoğraflarda kişi izni işaretlidir.',{w:1600}],
 ['Platformu açılır kutudan seçin (Instagram, LinkedIn, Telegram…).',{dd:['[data-sg=mp]','LinkedIn']}],
 ['Paylaşım dilini seçin.',{dd:['[data-sg=ml2]','UZ']}],
 ['Planlayın ya da hemen paylaşın.',{c:'[data-mpost]>>nth=0'}]]],
['uz-kiosk','saha','Kiosk ve giriş kartı',[
 ['Kioskta yalnız aktarılmış programlar görünür.',{w:1600}],
 ['Ziyaretçi dilini kendi seçer.',{c:'[data-kq]>>nth=1'}],
 ['Giriş kartı: QR veya firma seçimiyle otomatik basılır.',{s:900}],
 ['Kayıt listesinden bekleyenlere kart basın.',{c:'[data-rp]>>nth=1'}],
 ['Görevliler ve görev yerleri: kim nerede, hangi vardiyada.',{s:2000}]]],
['uz-gun','saha','Etkinlik günü',[
 ['Etkinlik günü: masaların canlı durumu.',{w:1800}],
 ['Kiosk ekranında dili değiştirin.',{c:'[data-kl]>>nth=1'}],
 ['Rusça görünüm.',{c:'[data-kl]>>nth=2'}]]],
['uz-acil','saha','Acil durum',[
 ['Acil durum senaryoları ve yapılacaklar.',{w:1600}],
 ['Kim aranır, hastane ve temsilcilik telefonları (doğrulanmadı).',{s:600}],
 ['Kioska aktarınca kioskta SOS butonu görünür.',{c:'[data-pub]'}]]],
['uz-sonuc','cag','Sonuç ve takip',[
 ['Takip görevleri: 3, 6 ve 12. ay aramaları.',{w:1600}],
 ['Gecikenlere hatırlatma gönderin.',{c:'text=Hatırlat'}],
 ['Sonuç raporu ve görüşme sonrası anket.',{s:700}],
 ['Raporu seçilen dilde PDF veya Excel alın.',{c:'text=Sonuç raporu · PDF'}]]],
['uz-pano','yon','Pano',[
 ['Pano: yıllık etkinlik, görüşme, gelir ve kâr.',{w:2000}],
 ['Aylık gelir-kâr ve sektöre göre kâr (yalnız patron görür).',{s:400}]]],
['uz-finans','fin','Finans',[
 ['Tahsilat: firma ve kuruluş ödemeleri.',{w:1400}],
 ['Gelen ödemeyi “Ödendi işaretle”.',{c:'[data-arp]'}],
 ['Tedarikçi ödemeleri.',{c:'[data-fnt]>>nth=1'}],
 ['Hak edişler ve verilen teklifler.',{c:'[data-fnt]>>nth=2'}]]],
['uz-rapor','fin','Raporlar',[
 ['İç rapor mu, müşteri raporu mu? Müşteri raporunda maliyet ve kâr gizlidir.',{dd:['[data-sg=rpa]','Müşteri']}],
 ['Rapor türünü seçin: etkinlik, kârlılık, görüşme, finans.',{c:'[data-rpt]>>nth=2'}],
 ['Rapor dilini açılır kutudan seçin.',{dd:['[data-sg=rpl]','UZ']}],
 ['PDF veya Excel olarak dışa aktarın.',{c:'[data-rpdo]>>nth=1'}]]],
];
