# 12 aylık takip yaması (UZ-v17 adayı): etkinlik sonrası her B2B eşleşmesi için 12 aylık plan, aylık hatırlatma,
# temas kaydı, sonuç türleri (temsilcilik, distribütörlük, satış, şirket kurulumu, ortak girişim, numune, sonuç yok, diğer),
# 6. ve 12. ay anketi, 4 dilde mesaj şablonu; Ana sayfa, Görevler, Çağrı merkezi, Pano ve Raporlara bağlı.
# Kullanım: python3 -I takip-yamasi.py <uz.src.html> [SÜRÜM]   (takip.js bu dosyanın yanında olmalı)
# Dosyayı yerinde günceller; iki kez uygulanmaz.
import os,re,sys
p=sys.argv[1];ver=sys.argv[2] if len(sys.argv)>2 else None
s=open(p).read()
if 'function vTakip()' in s: sys.exit('zaten uygulanmış')
js=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'takip.js')).read()
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)
rep("render();ddEnh();",js+"\nrender();ddEnh();")
# Ana sayfa (patron + roller): Bu ay takip kartı
rep('<div class="grid" style="align-content:start">${inboxCard()}','<div class="grid" style="align-content:start">${inboxCard()}${tkHome()}',2)
rep(" ['25 Kas','Kimya B2B: 3. ay takip formları (4 firma gecikti)','uz-sonuc','bad'],\n","")
# Görevler: aylık takip kartı + plan görevi
rep("<div class=\"c\"><h2>${t('thisweek')}</h2>","${tkTaskCard()}<div class=\"c\"><h2>${t('thisweek')}</h2>")
rep("[7,'3. ay takip aramaları','e2','18.05',0,'uz-sonuc','cag']","[7,'12 ay takip planı açılır (96 görüşme), sorumlular atanır','e2','25.02',0,'uz-sonuc','cag']")
# Çağrı merkezi: takip notu
rep("return head('uz-cagri')+`","return head('uz-cagri')+tkCallNote()+`")
# Raporlar: 12 ay takip raporu
rep("['finans',TT('Finans özeti','Moliya','Финансы','Finance summary')]];","['finans',TT('Finans özeti','Moliya','Финансы','Finance summary')],['takip',TT('12 ay takip','12 oy kuzatuv','Контроль 12 мес.','12-month follow-up')]];")
# Satış rolü de takibi görür
rep("sat:['uz-etkinlik','uz-evren','uz-teklif','uz-sponsor','uz-gorev']","sat:['uz-etkinlik','uz-evren','uz-teklif','uz-sponsor','uz-gorev','uz-sonuc']")
# Rehber adımları
s,n=re.subn(r'"uz-sonuc": \{"t": "Sonuç ve takip", "sn": \d+, "st": \[[^\]]*\]\}','"uz-sonuc": {"t": "Sonuç ve takip", "sn": 18, "st": ["Bu ay: aranacak ve yazılacak firmalar; gecikenler kırmızı. Ekibe hatırlat ile sorumlulara Telegram + e-posta gider.", "Bir eşleşmeyi seçin; sağda 12 aylık zaman çizgisi, sıcak/ılık/soğuk ve sorumlu açılır.", "Temas kaydedin: tür, not, sonraki adım ve tarih. O ayın takibi tamamlanır.", "Sonuç ekleyin: temsilcilik, distribütörlük, satış, şirket kurulumu, ortak girişim, numune, sonuç yok veya diğer (serbest metin).", "Şablon: alıcıya veya Türk firmaya 4 dilde mesaj; gönderince kayda düşer. 6. ve 12. ayda anket.", "12 ay planı ve Sonuçlar sekmesinde huni ve sonuç türleri; rapor Raporlar ekranında."]}',s,count=1)
if n!=1: sys.exit('rehber adımı bulunamadı')
if ver:
    s=re.sub(r"const VER='UZ-v\d+';",f"const VER='{ver}';",s,count=1)
    rep("const CHANGES=[",f"const CHANGES=[['{ver}','19.11.2026','Etkinlik sonrası 12 aylık takip: etkinlik Sonuç aşamasına geçince her B2B eşleşmesi (TR firma ↔ Özbek alıcı) için 12 aylık plan kendiliğinden açılır (1. ay teşekkür, 3/6/9/12. ay arama, aralarda kısa kontrol). Aylık hatırlatma: Bu ay aranacaklar ve gecikenler Sonuç ve takip, Ana sayfa, Görevler ve Çağrı merkezinde; sorumluya Telegram + e-posta (taklit). Temas kaydı (arama, mesaj, online görüşme, ziyaret, numune, teklif, sipariş), sonraki adım ve tarih, sorumlu, sıcak/ılık/soğuk. Sonuç türleri: temsilcilik açma, distribütörlük, satış/sipariş, şirket kurulumu, ortak girişim, numune/deneme, sonuç yok, diğer (serbest metin); her birinde tarih, tutar, not ve sonraki adım. 6. ve 12. ay anketi. 4 dilde takip mesajı şablonu. Firma bazlı 12 aylık zaman çizgisi. Pano ve Raporlarda dönüşüm hunisi ve sonuç türü dağılımı (12 ay takip raporu PDF/Excel).'],")
open(p,'w').write(s)
print('ok')
