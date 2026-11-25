# Alan planı yaması (UZ-v16 adayı): salon krokisi (şablon + sürükle-bırak), 3D görünüm, oturma kapasitesi,
# malzeme ve baskı listesi (gider teklife/finansa geçer), kurulum kontrol listesi, alan planı PDF (4 dil).
# Kullanım: python3 -I alan-yamasi.py <uz.src.html> [SÜRÜM]   (alan.js bu dosyanın yanında olmalı)
# Dosyayı yerinde günceller; iki kez uygulanmaz.
import os,sys
p=sys.argv[1];ver=sys.argv[2] if len(sys.argv)>2 else None
s=open(p).read()
if "'uz-alan'" in s: sys.exit('zaten uygulanmış')
js=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'alan.js')).read()
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)
rep("let mSel='M9';","let mSel='M9';\n"+js)
rep("['uz-mekan','mekan',null],","['uz-mekan','mekan',null],['uz-alan','alan',null],")
rep("'uz-mekan','uz-kiosk'],loj:","'uz-mekan','uz-alan','uz-kiosk'],loj:")
rep("'uz-mekan','uz-gezi','uz-rehber','uz-acil'],","'uz-mekan','uz-alan','uz-gezi','uz-rehber','uz-acil'],")
rep("saha:['uz-kiosk','uz-gun','uz-acil']","saha:['uz-kiosk','uz-gun','uz-acil','uz-alan']")
rep("'uz-mekan','uz-gezi','uz-rehber'],fin:","'uz-mekan','uz-alan','uz-gezi','uz-rehber'],fin:")
rep("['uz-numune','loj'],['uz-tarife'","['uz-numune','loj'],['uz-alan','loj','prg'],['uz-tarife'")
rep("['saglik',hpCostT(),'uz-rehber']];","['saglik',hpCostT(),'uz-rehber'],['kurulum',alCost(),'uz-alan']];")
rep("[2,'Salon opsiyonu kesinleştir','e0','08.11',1,'uz-mekan','loj'],","[2,'Salon opsiyonu kesinleştir','e0','08.11',1,'uz-mekan','loj'],[4,'Alan planı: backdrop, roll-up, tabela ve QR standı siparişi','e1','20.01',0,'uz-alan','loj'],")
rep("""<p class="cs">${v.n}</p></div><div class="r"><span class="pill wr">${t('nointerp')}</span></div>""","""<p class="cs">${v.n}</p></div><div class="r"><span class="pill wr">${t('nointerp')}</span>${canR(ROLE,'uz-alan')?`<a class="btn" href="#uz-alan" style="font-size:.76rem">${ik('alan','ik-16')}${t('uz-alan')}</a>`:''}</div>""")
rep('const HS={','const HS={"uz-alan": {"t": "Alan planı", "sn": 24, "st": ["Alan planı: fuaye, kongre salonu, salon B ve yemek alanı tek ekranda; üstteki sekmeden alanı seçin.", "Oturma düzeni şablonunu seçin (tiyatro, sınıf, U, yuvarlak masa, B2B); kapasite gün akışıyla karşılaştırılır.", "Paletten roll-up, backdrop, QR standı gibi öğe ekleyin ve kroki üzerinde sürükleyin.", "3D düğmesiyle salonu döndürerek görün.", "Malzeme listesi adetleri kendiliğinden çıkar; gider teklife ve finansa geçer.", "Kurulum kontrol listesini fotoğrafla işaretleyin; plan PDF olarak otele gider."]}, ')
if ver:
    import re
    s=re.sub(r"const VER='UZ-v\d+';",f"const VER='{ver}';",s,count=1)
    rep("const CHANGES=[",f"const CHANGES=[['{ver}','19.11.2026','Alan planı: fuaye, kongre salonu, salon B ve yemek alanı krokisi; şablon (karşılama, tiyatro, sınıf, U, yuvarlak masa, B2B) + sürükle-bırak; 3D görünüm (döndür, yakınlaş); kapasite gün akışıyla karşılaştırılır, çakışma ve acil çıkış kontrolü; backdrop, roll-up, kapı tabelası, QR standı, bayrak, B2B masa seti, sahne, ekran ve tercüman kabini malzeme listesi (baskı dili, tedarikçi, sipariş); Alan kurulumu ve baskı gideri teklife ve finansa geçer; kurulum kontrol listesi görevli panosuna gider; alan planı PDF 4 dilde.'],")
open(p,'w').write(s)
print('ok')
