# Örnek etkinlik planlama yaması (UZ-v22 üstüne, UZ-v23 adayı)
# Kullanım: python3 -I plan-yamasi.py <uz.src.html>   (plan.js bu dosyanın yanında olmalı). İki kez uygulanmaz.
import os,sys
p=sys.argv[1];s=open(p).read()
if "'uz-plan'" in s: sys.exit('zaten uygulanmış')
js=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'plan.js')).read()
css="""
.pl-in{font-size:.95rem;color:var(--ink2);max-width:62ch;margin:0 0 16px}
.pl{display:grid;gap:10px;max-width:860px}
.pls{background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.pls>summary{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;list-style:none;font-size:1rem}.pls>summary::-webkit-details-marker{display:none}
.pls>summary b{flex:1;letter-spacing:-.01em}.pls .pln{width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:var(--soft);color:var(--rc);font-weight:700}
.pls .plc{font-size:.74rem;color:var(--mut)}.pls .fzi{width:18px;height:18px;fill:none;stroke:var(--mut);stroke-width:2;transition:transform .2s}.pls[open]>summary .fzi{transform:rotate(180deg)}
.pls[open]>summary{border-bottom:1px solid var(--line2)}.plb{padding:4px 16px 12px}
.plq{padding:10px 0;border-bottom:1px solid var(--line2)}.plq:last-child{border:0}
.plq>summary{cursor:pointer;font-weight:600;font-size:.9rem;list-style:none}.plq>summary::-webkit-details-marker{display:none}.plq>summary::before{content:"+";display:inline-block;width:18px;color:var(--rc)}.plq[open]>summary::before{content:"–"}
.plq p{margin:8px 0 10px 18px;color:var(--ink2);font-size:.86rem;line-height:1.5}.plq a,.plq .cs{margin-left:18px}
"""
def rep(a,b):
    global s
    n=s.count(a)
    if n!=1: sys.exit(f'beklenen 1, bulunan {n}: {a[:80]}')
    s=s.replace(a,b)
rep("['uz-etkinlik','etkinlik','grp1'],","['uz-etkinlik','etkinlik','grp1'],['uz-plan','plan',null],")
rep("</style>",css+"</style>")
rep("\nrender();ddEnh();\n</script>","\n"+js+"\nrender();ddEnh();\n</script>")
open(p,'w').write(s);print('ok')
