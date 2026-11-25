# event360 UZ · Videolu kullanım rehberi (UZ-v10 ekranlarıyla, 18.11.2026)

- Yayın: https://claude.ai/artifact/77MbSQcns1tcoCSXq1aoQC  (derin link: `#uz-teklif` gibi ekran, `#rol-sat` gibi rol)
- `index.html` + `video/*.mp4` (27 klip, 10–28 sn, 1280×800) + `kapak/*.jpg`
- Roller ve sıra: Herkes için → Yönetici → Satış → Çağrı merkezi → Program → Lojistik ve gezi → Yayın ve medya → Saha → Finans

## Yeniden üretmek (prototip değişince)
1. `kaynak/clips.js`: her ekranın adımları (altyazı + tıklanacak öğe).
2. Prototipi `full.html` olarak hazırla (doctype sarmalı), `node kaynak/rec.js [ekran]` → `raw/*.webm`.
3. ffmpeg ile `video/*.mp4` (crf 30, faststart) ve `kapak/*.jpg`.
4. `steps.json` üret, `rehber.tpl.html` içindeki `__DATA__` yerine koy → `index.html`, aynı URL'ye yeniden yayınla.

## Sıra (UZ-v12)
Firma evreninden (firma girişi) başlar, iş akışıyla tek çizgide 24 adım + 3 günlük ekran. Prototipte `kaynak/yardim-sira-yamasi.py <uz.src.html> UZ-v12`.

## Prototip yaması (UZ-v11)
`kaynak/yardim-yamasi.py <uz.src.html> UZ-v11`: menüye "Kullanım rehberi" ekranı (#uz-yardim), üst çubuğa ? butonu (ekranın adımları + "Videoyu izle" rehber linki), ikonlar.json'a `yardim` ikonu, VER/CHANGES. Ana thread uygular ve yayınlar.
