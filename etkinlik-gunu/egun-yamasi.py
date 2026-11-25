# Etkinlik günü araçları yaması (UZ-v18 adayı): simültane kulaklık envanteri ve dağıtım/iade (Mekân ve tercüman),
# basılı imza listesi PDF + sonradan aktarma (Kiosk), 4 dilli ürün/firma QR kartları A4'e 4 (Heyet kataloğu),
# davetiye ve kayıt QR afişi (Bülten), kroki fotoğrafı (Alan planı), elle yapılacak işler planı bağlantısı (Görevler),
# kurulum listesine 3 yeni madde, kulaklık gideri Finans'a. Derin link: #uz-mekan~klk, #uz-kiosk~imza, #uz-katalog~qrk, #uz-bulten~dav, #uz-alan~kroki
# Kullanım: python3 -I egun-yamasi.py <uz.src.html> [SÜRÜM]   (egun.js bu dosyanın yanında olmalı)
# Dosyayı yerinde günceller; iki kez uygulanmaz.
import os,re,sys
p=sys.argv[1];ver=sys.argv[2] if len(sys.argv)>2 else None
s=open(p).read()
if 'function klCard()' in s: sys.exit('zaten uygulanmış')
js=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'egun.js')).read()
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)
rep("render();ddEnh();",js+"\nrender();ddEnh();")
# Derin link: #ekran~bolum -> ekranı açar, bölüme kaydırır
rep("let r=(location.hash||'').slice(1);if(!V[r])r='uz-ana';","let r=(location.hash||'').slice(1),anc='';if(r.includes('~'))[r,anc]=r.split('~');if(!V[r])r='uz-ana';")
rep(" if(r==='uz-evren')requestAnimationFrame(cloud);\n}"," if(r==='uz-evren')requestAnimationFrame(cloud);\n if(anc)setTimeout(()=>{const el=document.getElementById(anc);if(el&&render.a_!==location.hash){render.a_=location.hash;el.scrollIntoView({block:'start'})}},30);\n}")
# Kulaklık gideri
rep("['kurulum',alCost(),'uz-alan']];","['kurulum',alCost(),'uz-alan'],['kulaklik',klCost(),'uz-mekan']];")
if ver:
    s=re.sub(r"const VER='UZ-v\d+';",f"const VER='{ver}';",s,count=1)
    rep("const CHANGES=[",f"const CHANGES=[['{ver}','19.11.2026','Etkinlik günü araçları (gerçek bir forumdaki masadan): Mekân ve tercüman ekranında simültane kulaklık envanteri: 60 numaralı alıcı, dil kanalı (00 salon, 01 TR, 02 RU, 03 EN, 04 UZ), kime verildi, iade al, kayıp yaz; eksikler kırmızı, kiralama ve kayıp bedeli Finans’a. Kiosk ekranında basılı imza listesi: kayıtlı isimler alfabetik ve numaralı, telefon, kulaklık no, kioskta okutanlar K ile; sonda boş satırlar; 4 dilde PDF. Sonradan aktar: el yazısı satırlar girilir, kayıtlı kişi Geldi olur, yeni kişi katılıma eklenir. Heyet kataloğunda 4 dilli ürün/firma QR kartları (Katalog için okutun), A4’e 4 kesim çizgili, okutma testi. Bülten ekranında davetiye (A5, Telegram bot QR’lı) ve kayıt QR afişi (A4, 4 dil). Alan planında elle çizilen kroki fotoğrafı ve kurulum listesine kulaklık masası, imza listesi, QR kartlar. Görevlerde elle yapılacak işler planı (T-14 → T+7) ve 6 yeni görev.'],")
open(p,'w').write(s)
print('ok')
