# Kullanım: python3 build.py  -> uz.src.html + ikonlar.json => ../event360-uz-<sürüm>.html (sürüm kaynaktaki VER)
import json,os,re
h=os.path.dirname(os.path.abspath(__file__))
s=open(os.path.join(h,'uz.src.html')).read()
s=s.replace("const c=calc();ts.textContent","const c=calc(),$=i=>document.getElementById(i);$('ts').textContent").replace(";tk.textContent",";$('tk').textContent").replace(";tp.textContent",";$('tp').textContent").replace(";tf.textContent",";$('tf').textContent").replace(";to.textContent",";$('to').textContent")
s=s.replace('/*IK*/',json.dumps(json.load(open(os.path.join(h,'ikonlar.json'))),ensure_ascii=False))
v=re.search(r"const VER='UZ-(v\d+)'",s).group(1)
open(os.path.join(h,'onizleme-menu-sirasi.html'),'w').write(s)
print('event360-uz-'+v+'.html')
