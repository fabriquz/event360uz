# Kullanım: python3 renk-yamasi.py  -> uz.src.html (UZ-v21) üzerine menü grup renklerini uygular, onizleme-menu-renk.html üretir
import json,os,re
h=os.path.dirname(os.path.abspath(__file__))
p=os.path.join(h,'uz.src.html');s=open(p).read()
if 'NAVRENK' not in s:
    css='''/*NAVRENK*/
.nav{--g:var(--rc)}
.nav .gp1{--g:#2f6fd0;--gt:#1d4f9e}.nav .gp5{--g:#12908a;--gt:#0b6662}.nav .gp4{--g:#7c5cc4;--gt:#5a3ca0}.nav .gp2{--g:#d4811a;--gt:#9a5a0a}.nav .gp3{--g:#cc4777;--gt:#a02755}.nav .gp6{--g:#5b9a2a;--gt:#3f7016}
:root[data-theme="dark"] .nav .gp1,:root[data-theme="dark"] .nav .gp5,:root[data-theme="dark"] .nav .gp4,:root[data-theme="dark"] .nav .gp2,:root[data-theme="dark"] .nav .gp3,:root[data-theme="dark"] .nav .gp6{--gt:var(--g)}
:root[data-theme="dark"] .nav .gp1{--g:#6aa0f0}:root[data-theme="dark"] .nav .gp5{--g:#3cc7bf}:root[data-theme="dark"] .nav .gp4{--g:#a58cf0}:root[data-theme="dark"] .nav .gp2{--g:#f0a548}:root[data-theme="dark"] .nav .gp3{--g:#f27ea6}:root[data-theme="dark"] .nav .gp6{--g:#8fcf5a}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .nav .gp1{--g:#6aa0f0;--gt:#6aa0f0}:root:not([data-theme="light"]) .nav .gp5{--g:#3cc7bf;--gt:#3cc7bf}:root:not([data-theme="light"]) .nav .gp4{--g:#a58cf0;--gt:#a58cf0}:root:not([data-theme="light"]) .nav .gp2{--g:#f0a548;--gt:#f0a548}:root:not([data-theme="light"]) .nav .gp3{--g:#f27ea6;--gt:#f27ea6}:root:not([data-theme="light"]) .nav .gp6{--g:#8fcf5a;--gt:#8fcf5a}}
.nav button.sep{margin-top:10px;padding:7px 10px;border-radius:10px;background:color-mix(in srgb,var(--g) 11%,transparent);color:var(--gt,var(--g));font-size:.68rem;letter-spacing:.08em;border:1px solid color-mix(in srgb,var(--g) 22%,transparent);position:relative}
.nav button.sep:first-of-type{margin-top:4px}
.nav button.sep::before{content:"";width:9px;height:9px;border-radius:3px;background:var(--g);flex:none;order:-1}
.nav button.sep:hover{background:color-mix(in srgb,var(--g) 18%,transparent);color:var(--gt,var(--g))}
.nav button.sep .nc{background:var(--g);color:#fff;font-weight:700;min-width:20px;text-align:center}
:root[data-theme="dark"] .nav button.sep .nc{color:#0b1522}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .nav button.sep .nc{color:#0b1522}}
.nav button.sep.act{background:color-mix(in srgb,var(--g) 20%,transparent);border-color:color-mix(in srgb,var(--g) 45%,transparent)}
.nav .ng{margin:3px 0 0 8px;padding:2px 0 2px 6px;border-left:2px solid color-mix(in srgb,var(--g) 35%,transparent)}
.nav .ng a .ik{color:var(--g)}
.nav .ng a:hover{background:color-mix(in srgb,var(--g) 9%,transparent)}
.nav .ng a.on{background:color-mix(in srgb,var(--g) 17%,transparent);color:var(--ink);font-weight:800;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--g) 30%,transparent)}
.nav .ng a.on::before{left:-8px;top:4px;bottom:4px;width:4px;background:var(--g)}
.nav .ng a.on .ik{stroke-width:2.1}
.nav a.on{background:color-mix(in srgb,var(--rc) 15%,transparent)}
.navh a.on{background:color-mix(in srgb,var(--rc) 15%,transparent);font-weight:800}
'''
    a='.nav .ng{display:flex;flex-direction:column;gap:1px}.nav .ng[hidden]{display:none}'
    assert a in s
    s=s.replace(a,a+'\n'+css,1)
    o='<button type="button" class="sep ${x.g===act?\'act\':\'\'}" data-ng="${x.g}"'
    assert o in s
    s=s.replace(o,'<button type="button" class="sep gp${x.g.slice(3)} ${x.g===act?\'act\':\'\'}" data-ng="${x.g}"')
    o2='<div class="ng" ${o?\'\':\'hidden\'}>'
    assert o2 in s
    s=s.replace(o2,'<div class="ng gp${x.g.slice(3)}" ${o?\'\':\'hidden\'}>')
    open(p,'w').write(s)
t=s.replace('/*IK*/',json.dumps(json.load(open(os.path.join(h,'ikonlar.json'))),ensure_ascii=False))
t=t.replace("const c=calc();ts.textContent","const c=calc(),$=i=>document.getElementById(i);$('ts').textContent").replace(";tk.textContent",";$('tk').textContent").replace(";tp.textContent",";$('tp').textContent").replace(";tf.textContent",";$('tf').textContent").replace(";to.textContent",";$('to').textContent")
open(os.path.join(h,'onizleme-menu-renk.html'),'w').write(t)
print('ok')
