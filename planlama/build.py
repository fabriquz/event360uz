# python3 build.py -> ../kaynak/uz.src.html'e plan yamasını uygular, onizleme-planlama.html üretir (kaynak dosyaya dokunmaz)
import json,os,subprocess,shutil
h=os.path.dirname(os.path.abspath(__file__))
shutil.copy(os.path.join(h,'..','kaynak','uz.src.html'),os.path.join(h,'uz.src.html'))
subprocess.check_call(['python3','-I',os.path.join(h,'plan-yamasi.py'),os.path.join(h,'uz.src.html')])
s=open(os.path.join(h,'uz.src.html')).read()
s=s.replace("const c=calc();ts.textContent","const c=calc(),$=i=>document.getElementById(i);$('ts').textContent").replace(";tk.textContent",";$('tk').textContent").replace(";tp.textContent",";$('tp').textContent").replace(";tf.textContent",";$('tf').textContent").replace(";to.textContent",";$('to').textContent")
s=s.replace('/*IK*/',json.dumps(json.load(open(os.path.join(h,'..','kaynak','ikonlar.json'))),ensure_ascii=False))
open(os.path.join(h,'onizleme-planlama.html'),'w').write(s)
