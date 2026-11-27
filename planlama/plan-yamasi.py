# Örnek etkinlik planlama yaması (UZ-v22 üstüne, UZ-v23 adayı)
# Kullanım: python3 -I plan-yamasi.py <uz.src.html>   (plan.js bu dosyanın yanında olmalı). İki kez uygulanmaz.
import os,sys
p=sys.argv[1];s=open(p).read()
if "'uz-plan'" in s: sys.exit('zaten uygulanmış')
js=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'plan.js')).read()
css="""
.pq{display:grid;grid-template-columns:30px minmax(0,1fr);gap:12px;padding:12px 0;border-bottom:1px solid var(--line2)}.pq:last-child{border:0}
.pq .n{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;font-weight:700;font-size:.8rem;background:var(--soft);color:var(--rc)}
.pq.dn .n{background:var(--okb);color:var(--ok)}.pq.nx .n{background:var(--rc);color:#fff}
.pq .pqt{display:flex;gap:8px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap}.pq h3{margin:0;font-size:.92rem;letter-spacing:-.01em}
.pq .hint{color:var(--mut);font-size:.78rem;margin:3px 0 0}
.pq .ans{background:var(--soft);border-radius:10px;padding:9px 11px;margin-top:8px;font-size:.84rem;color:var(--ink2);line-height:1.5}
.pq .chs{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}.pq .chs span{border:1px solid var(--line);border-radius:9px;padding:3px 9px;font-size:.74rem;color:var(--mut)}.pq .chs b{color:var(--ink);font-weight:700;margin-left:3px}
.pq .lk{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}
.plt{display:grid;grid-template-columns:repeat(9,minmax(0,1fr));gap:6px}.plt div{text-align:center;font-size:.7rem;color:var(--mut)}.plt i{display:block;height:6px;border-radius:3px;background:var(--line);margin-bottom:6px}.plt .pd i{background:var(--ok)}.plt .pc i{background:var(--rc)}.plt .pc{color:var(--ink);font-weight:700}
@media (max-width:640px){.plt{grid-template-columns:repeat(3,minmax(0,1fr))}.pq{grid-template-columns:26px minmax(0,1fr);gap:10px}.pq .n{width:26px;height:26px}}
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
