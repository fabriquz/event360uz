# Etkileşimli planlama ekranı (UZ-v26 üstüne, 27.11.2026): aşamaları doldur, bütçe/takvim canlı, Teklif/Görevler/Gün akışına aktar.
# Kullanım: python3 -I plan-sade-yamasi.py <uz.src.html>   (plan-etkilesim-blok.js ve plan-etkilesim.css yanında olmalı)
import os,sys,re
p=sys.argv[1];s=open(p).read();h=os.path.dirname(os.path.abspath(__file__))
if 'const pzDef' in s: sys.exit('zaten uygulanmış')
blk=open(os.path.join(h,'plan-etkilesim-blok.js')).read();css=open(os.path.join(h,'plan-etkilesim.css')).read()
a=s.index('const PLX=');b=s.index("V['uz-plan']=vPlan;")
# eski blok: PLX ... vPlan; ardından eski RA_ ve click satırları
e=s.index("document.addEventListener('click',e=>{const b=e.target.closest('[data-plev]')") if "[data-plev]" in s else None
rest=s[b:]
rest=re.sub(r"V\['uz-plan'\]=vPlan;\nObject.keys\(RA_\).*\n","",rest,count=1)
rest=re.sub(r"document.addEventListener\('click',e=>\{const b=e.target.closest\('\[data-plev\]'\).*\n","",rest)
s=s[:a]+blk+rest
assert s.count('</style>')==1
s=s.replace('</style>',css+'</style>')
open(p,'w').write(s);print('ok')
