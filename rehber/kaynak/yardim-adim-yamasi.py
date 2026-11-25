# Prototipteki rehber adım metinlerini (HS) steps.json ile eşitler. Kullanım: python3 -I yardim-adim-yamasi.py <uz.src.html> UZ-vN "değişiklik notu"
import json,os,re,sys
src,ver,note=sys.argv[1],sys.argv[2],sys.argv[3]
h=os.path.dirname(os.path.abspath(__file__))
s=open(src).read()
HS={k:{'t':v['t'],'sn':v['sn'],'st':v['st']} for k,v in json.load(open(os.path.join(h,'steps.json'))).items()}
js=json.dumps(HS,ensure_ascii=False)
s,c=re.subn(r"const HS=\{.*?\};\n",lambda m:"const HS="+js+";\n",s,count=1,flags=re.S);assert c==1
s=re.sub(r"const VER='UZ-v\d+'","const VER='%s'"%ver,s)
s=re.sub(r'(<button class="ver" id="verb" type="button">)UZ-v\d+',r'\g<1>'+ver,s)
assert s.count("const CHANGES=[")==1
s=s.replace("const CHANGES=[","const CHANGES=[['%s','18.11.2026',%s],"%(ver,json.dumps(note,ensure_ascii=False).replace("\"","'") if "'" not in note else json.dumps(note,ensure_ascii=False)))
open(src,'w').write(s);print('ok',ver)
