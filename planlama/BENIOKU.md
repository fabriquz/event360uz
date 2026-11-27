# Örnek etkinlik planlama yaması (UZ-v22 üstüne, 27.11.2026)
- Yeni ekran `#uz-plan` (Satış ve hazırlık, Etkinlikler'in altı): 8 aşama, 17 soru (neden, kim öder, maliyet/fiyat, tarih-mekân, alan, davet, rıza, sponsor, gün akışı, eşleştirme, lojistik, gezi-rehber-sağlık, numune, duyuru, etkinlik günü, sonuç, 12 ay takip). Her soru: sorumlu rol, örnek cevap, rakam çipleri, ilgili ekranlara bağ (rol açamıyorsa gri çip).
- Örnek etkinlik seçici (Gıda/Tekstil/Makine/İnşaat): cevaplar etkinliğin aşamasına göre dolar/bekler. Tutarlar yalnız patrona açık (fmt).
- Uygula: `python3 build.py` (kaynak/uz.src.html'e dokunmaz, onizleme-planlama.html üretir) ya da `python3 -I plan-yamasi.py <uz.src.html>` sonra kaynak/build.py. VER ve CHANGES'e dokunmaz (UZ-v23 ana thread'de).
- Rehber videosu (HS) eklenmedi; 4 dil tam, 390px'te yana taşma yok.
