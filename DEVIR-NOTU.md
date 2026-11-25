# event360 UZ · Devir notu (UZ-v1 · 17.11.2026)

event360.ai iki ürüne ayrıldı:
- **AI versiyonu:** ticaret müşavirlikleri için. Eski projede kalır, bu pakete dahil değildir.
- **UZ versiyonu:** Fabriq'in Özbekistan özel sektöründe kullandığı iç B2B organizasyon sistemi. Bu paket onun devridir.

## Paket içeriği
- `event360-uz-v1.html`: çalışan prototip (tek dosya, 8 ekran, 4 dil)
- `kaynak/uz.src.html`: düzenlenecek kaynak dosya (ikonlar `/*IK*/` yer tutucusu ile)
- `kaynak/ikonlar.json`: event360 ikon setinden kullanılan 19 ikon
- `kaynak/build.py`: `python3 kaynak/build.py` komutu kaynağı ve ikonları birleştirip `event360-uz-v1.html` dosyasını yeniden üretir
- `kaynak/ekran-cek.js`: Playwright ile ekran resmi alır (`node ekran-cek.js ../event360-uz-v1.html uz-teklif ...`)
- `ekranlar/`: 8 ekranın 1440×900 resmi
- Yayın: https://claude.ai/artifact/AWFeEFjEh3TAEykgeri5D1 (açılış ekranı için `#uz-teklif` gibi bir rota ekleyin)

## Onaylı kararlar (grill-me, 17.11.2026)
1. **Ne:** UZ versiyonu Fabriq'in iç aracıdır. Fabriq B2B organizasyon firması olarak çalışır; gerektiğinde müşavirlikten gelen etkinlikleri de alır.
2. **Kim kullanır:** yalnız Fabriq ekibi. Türk firmalar, işbirliği kuruluşları ve Özbek alıcılar sisteme girmez, platformu görmez ("bizim iç gücümüz"). Güçlü yan: B2B ve eşleştirme.
3. **Modüller:**
   - Kalır: Firma evreni (TR firmalar + Özbek alıcılar), Özbek firma kaydı, eşleştirme motoru, 15 dk B2B programı, B2B turu, kiosk, sonuç + 3/6/12 ay takip, Firma ajanı.
   - Yeni: Etkinlik teklifi hazırlama (maliyet + kâr = fiyat), kuruluşa veya müşavirliğe sunulur.
   - Çıkar: Takvim/Plan 2027, başvuru görüşü, destek denetimleri, Bakanlık etki ve raporu, kamu sitesi, roller ve portallar.
   - Dışarıya giden her şey dosyadır: program PDF, teklif, sonuç raporu (PDF/Excel).
4. **Dil:** TR, UZ (Latin), RU, EN her yerde var. Ekip ekranı varsayılan Türkçe; Özbek veri girildiği dilde saklanır, yanında Türkçesi görünür; dosyalar seçilen dilde üretilir; kiosk dilini ziyaretçi seçer.
5. **Veri yerelleştirme:** firma verisi (unvan, sektör, ürün, şehir) her yerde tutulabilir. Kişi verisi (ad, telefon, e-posta, pasaport) Özbekistan'daki sunucuda (ör. Uztelecom bulut). Fabriq Özbekistan'da kişisel veri işleyicisi olarak kayıt yaptırır. Hukuki görüş gelene kadar yalnız örnek veri.
6. **Para:** Türk katılımcı firma B2B görüşme paketini öder; işbirliği kuruluşu veya müşavirlik organizasyon bedelini öder. Fatura platform dışında kesilir. Teklif ekranı maliyet + kâr hesaplar; etkinlik kartında gelir, gider, kâr ve tahsilat (bekliyor/ödendi); panoda yıllık etkinlik, görüşme, gelir, kâr ve en çok kazandıran sektör.
7. **AI versiyonuyla paylaşım:** şimdilik yok. İki versiyon bitip iş modeli netleşince yeniden düşünülecek.

## Açık konu
- Özbek alıcıların kişi verisi için hukuki görüş (yerelleştirme ve işleyici kaydı).

## Sol menü (UZ-v1)
Profil (Fabriq ekibi · B2B organizasyon firması) → Ana sayfa → **Hazırlık:** Firma evreni, Etkinlikler, Teklif → **Etkinlik:** Eşleştirme ve program, Etkinlik günü → **Sonuç:** Sonuç ve takip, Pano.

Rotalar (derin link): `#uz-ana`, `#uz-evren`, `#uz-etkinlik`, `#uz-teklif`, `#uz-program`, `#uz-gun`, `#uz-sonuc`, `#uz-pano`.

Etkinlik aşamaları: Fikir → Teklif → Kazanıldı → Katılımcılar → Program → Etkinlik günü → Sonuç → Takip → Kapandı. Kaynak: Kendi etkinliğimiz / İşbirliği kuruluşu / Müşavirlikten.

## Çalışma kuralları
- **Link kuralı:** her iş bitince yalnız o işin kendi önizleme linkini ver. Link doğrudan değişen ekranı açsın (ana sayfa veya giriş değil). Linki göndermeden önce açılış ekranını aç, resmini çek, resmi linkle aynı mesajda gönder. Açılış ekranı yanlışsa önce düzelt.
- Her değişikliğe sürüm numarası: UZ-v1, UZ-v2… (`VER` ve `CHANGES` kaynakta; logo yanındaki rozet sürüm notlarını açar).
- Cevaplar Türkçe, kısa ve doğrudan. Gereksiz soru yok. Soru gerekirse tek soru, numaralı "Rol: ne yapar" maddeleri ve bir öneri.
- Tasarım: event360 dili (Plus Jakarta Sans, beyaz→buz mavisi, mürekkep #0b2545, organizasyon rengi #2b8fb8), her menüde ikon, sade ve kompakt.

## Yeni projeye yapıştırılacak proje talimatı
```
Kısa ve doğrudan cevap ver, Türkçe yaz. Gereksiz giriş, tekrar ve soru yok. Kod ve teknik bilgi eksiksiz kalsın.
Bu proje event360 UZ: Fabriq'in Özbekistan özel sektöründe kullandığı iç B2B organizasyon sistemi. Yalnız Fabriq ekibi kullanır; firmalar, kurumlar ve alıcılar sisteme girmez, onlara dosya gider.
LİNK KURALI: Her iş bitince yalnız o işin kendi önizleme linkini ver; link doğrudan değişen ekranı açsın. Göndermeden önce açılış ekranının resmini çek ve resmi linkle aynı mesajda gönder. Açılış ekranı yanlışsa önce düzelt.
Her değişikliğe sürüm numarası ver (UZ-v1, UZ-v2…).
```

## Yeni projenin hafızasına yapıştırılacak metin
```
event360 UZ (2026-11-17'de event360.ai'den ayrıldı; AI versiyonu müşavirlikler için ayrı projede kalır).
- Ürün: Fabriq'in Özbekistan özel sektöründe kendi iç B2B organizasyon aracı. Fabriq = B2B organizasyon firması; gerektiğinde müşavirlikten gelen etkinlikleri de alır.
- Kullanıcı: yalnız Fabriq ekibi. Firmalar, kuruluşlar, Özbek alıcılar sisteme girmez; onlara dosya gider (program PDF, teklif, sonuç raporu PDF/Excel).
- Modüller: Firma evreni (TR + UZ alıcılar), Özbek firma kaydı, eşleştirme, 15 dk program, B2B turu, kiosk, sonuç + 3/6/12 ay takip, Firma ajanı, Teklif (maliyet + kâr). Müşavirlik/Bakanlık ekranları, takvim, plan, denetim, kamu sitesi, roller yok.
- Dil: TR, UZ (Latin), RU, EN her yerde. Ekip ekranı Türkçe; Özbek veri orijinal + Türkçe; dosya seçilen dilde; kiosk dili ziyaretçi seçer.
- Veri: kişi verisi Özbekistan sunucusunda (ör. Uztelecom), Fabriq UZ'de kişisel veri işleyicisi kaydı yaptırır; hukuki görüş AÇIK; o zamana kadar yalnız örnek veri.
- Para: TR katılımcı firma B2B paketini, kuruluş/müşavirlik organizasyon bedelini öder; fatura platform dışı. Kartta gelir/gider/kâr + tahsilat; panoda yıllık gelir/kâr ve en kârlı sektör.
- AI versiyonuyla veri paylaşımı: şimdilik yok; iki versiyon bitip iş modeli netleşince bakılacak.
- Prototip: UZ-v1 https://claude.ai/artifact/AWFeEFjEh3TAEykgeri5D1 ; kaynak devir paketinde (kaynak/uz.src.html + build.py). Rotalar #uz-ana, #uz-evren, #uz-etkinlik, #uz-teklif, #uz-program, #uz-gun, #uz-sonuc, #uz-pano.
- Çalışma tercihi: tek soru, numaralı "Rol: ne yapar" maddeleri + öneri; kullanıcı "tamam" ya da numarayla düzeltir.
```
