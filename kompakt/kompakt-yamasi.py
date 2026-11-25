# Kompakt yaması: uzun ekranlarda kartlar açılır kutu olur; rehber adımları tek satır.
# Kullanım: python3 kompakt-yamasi.py ../kaynak/uz.src.html   (yerinde günceller; iki kez uygulanmaz)
import sys
p=sys.argv[1];s=open(p).read()
if 'function fold(' in s: sys.exit('zaten uygulanmış')
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)

CSS=r"""
/* KOMPAKT: açılır kartlar */
.c.fz{position:relative}
.fzh{padding-right:40px;cursor:pointer}
.c.fz>h2.fzh{display:block}
.fzb{position:absolute;top:13px;right:13px;width:28px;height:28px;padding:0;border-radius:9px;border:1px solid var(--line);background:var(--card);color:var(--rc);display:grid;place-items:center;cursor:pointer;transition:background .15s,border-color .15s;z-index:1}
.fzb:hover{background:var(--soft);border-color:var(--rc)}
.fzb:focus-visible{outline:2px solid var(--rc);outline-offset:2px}
.fzb svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.c.fz:not(.fzc) .fzb svg{transform:rotate(180deg)}
.c.fzc{align-self:start;padding-top:12px;padding-bottom:12px;box-shadow:none}
.c.fzc:hover{border-color:var(--rc)}
.c.fzc>.fzh~*:not(.fzb){display:none!important}
.c.fzc>.fzh,.c.fzc>.fzh .cs,.c.fzc>.fzh h2{margin-bottom:0!important}
.c.fzc>.ch{align-items:center}
.fzn{display:none;margin-left:8px;vertical-align:2px;padding:1px 8px;border-radius:999px;background:var(--soft);color:var(--rc);font-size:.68rem;font-weight:700;letter-spacing:0;white-space:nowrap}
.c.fzc .fzn{display:inline-block}
.fzbar{display:flex;justify-content:flex-end;gap:6px;margin:-4px 0 10px}
.fzbar .btn{font-size:.74rem;padding:5px 10px}
@media (max-width:820px){.fzbar{margin-top:0}.c.fzc .ch .r{display:none}.g4:has(>.kp){grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px}.g4>.kp{padding:12px 14px}}
@media (max-width:560px){.li{flex-wrap:wrap;row-gap:6px}.li>.t{flex:1 1 58%}}
/* KOMPAKT: kart içi alt bölümler */
.fzsh{cursor:pointer;display:flex!important;align-items:center;gap:8px;border-radius:8px;user-select:none}
.fzsh:hover{color:var(--rc)}
.fzsh:focus-visible{outline:2px solid var(--rc);outline-offset:2px}
.fzi{width:15px;height:15px;flex:none;margin-left:auto;fill:none;stroke:var(--rc);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.fzs:not(.fzsc)>.fzsh .fzi{transform:rotate(180deg)}
.fzs.fzsc>:not(.fzsh){display:none!important}
.fzs.fzsc>.fzsh{margin-bottom:0!important}
.fzs.fzsc .fzsn{display:inline-block;margin-left:0}
/* KOMPAKT: rehber adımları tek satır */
.yr.yc{grid-template-columns:30px minmax(0,1fr) auto!important;padding:7px 0}
.yr.yc .a{grid-column:auto!important;flex-wrap:nowrap;gap:4px}
.yr.yc .cs{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.yb{width:30px;height:30px;padding:0!important;display:inline-grid!important;place-items:center;font-size:.8rem!important}
"""
rep('</style>',CSS+'</style>')

JS=r"""
/* KOMPAKT: uzun ekranlarda kartlar açılır kutu; ilk bölüm açık, durum ekran başına saklanır */
Object.assign(D,{fz_row:{tr:'satır',uz:'qator',ru:'строк',en:'rows'},fz_step:{tr:'adım',uz:'qadam',ru:'шагов',en:'steps'},fz_item:{tr:'öğe',uz:'band',ru:'пунктов',en:'items'},fz_more:{tr:'Diğer sayfalar',uz:'Boshqa sahifalar',ru:'Остальные страницы',en:'More pages'},fz_open:{tr:'Tümünü aç',uz:'Hammasini ochish',ru:'Развернуть всё',en:'Expand all'},fz_close:{tr:'Tümünü kapat',uz:'Hammasini yopish',ru:'Свернуть всё',en:'Collapse all'},fz_tg:{tr:'Aç / kapat',uz:'Ochish / yopish',ru:'Развернуть / свернуть',en:'Expand / collapse'}});
const FZ={},FZON={};
function fzSum(c){const q=x=>c.querySelectorAll(x).length;let n=q('tbody tr')||[...c.querySelectorAll('table tr')].filter(r=>!r.querySelector('th')).length;if(n)return n+' '+t('fz_row');n=q('.yr');if(n)return n+' '+t('fz_step');n=q('.li')||q('.list>*')||q('ol>li,ul>li');return n>1?n+' '+t('fz_item'):''}
function fold(r,anc){const pg=document.getElementById('pg');
 pg.querySelectorAll('.fzs').forEach((w,i)=>{const h=w.firstElementChild;if(!h||w.children.length<2)return;const key=r+':s:'+i;if(anc&&w.querySelector('#'+CSS.escape(anc)))FZ[key]=1;const op=FZ[key]===undefined?w.dataset.fzo==='1':!!FZ[key];
  w.classList.toggle('fzsc',!op);w.dataset.fzk=key;h.classList.add('fzsh');h.setAttribute('role','button');h.tabIndex=0;h.setAttribute('aria-expanded',op);const sm=fzSum(w);
  h.insertAdjacentHTML('beforeend',`${sm?`<span class="fzn fzsn">${sm}</span>`:''}<svg class="fzi" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`)});
 if(FZON[r]===undefined)FZON[r]=pg.scrollHeight>innerHeight*1.35;if(!FZON[r])return;
 const fs=[];let big=0;[...pg.querySelectorAll('.c')].forEach(c=>{if(c.parentElement.closest('.c')||c.closest('.modal'))return;const h2=c.querySelector('h2');let hd=h2;if(hd)while(hd.parentElement!==c)hd=hd.parentElement;
  const ks=[...c.children];if(!h2||ks.indexOf(hd)===ks.length-1||c.offsetHeight<260){if(!fs.length&&c.offsetHeight>400)big=1;return}fs.push([c,hd,h2])});
 if(!fs.length)return;
 fs.forEach(([c,hd,h2],k)=>{const key=r+':'+k;if(anc&&c.querySelector('#'+CSS.escape(anc)))FZ[key]=1;const op=FZ[key]===undefined?(k===0&&!big):FZ[key];
  c.classList.add('fz');c.classList.toggle('fzc',!op);c.dataset.fzk=key;hd.classList.add('fzh');
  const sm=fzSum(c);if(sm)h2.insertAdjacentHTML('beforeend',`<span class="fzn">${sm}</span>`);
  c.insertAdjacentHTML('beforeend',`<button type="button" class="fzb" aria-expanded="${op}" aria-label="${t('fz_tg')}: ${h2.textContent.replace(/"/g,'')}" title="${t('fz_tg')}"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>`)});
 const all=fs.every(([c])=>!c.classList.contains('fzc'));
 const g=fs[0][0].parentElement.closest('#pg>*')||fs[0][0];g.insertAdjacentHTML('beforebegin',`<div class="fzbar"><button type="button" class="btn fzall" data-fzall="${all?0:1}">${t(all?'fz_close':'fz_open')}</button></div>`)}
function fzSet(c,op){c.classList.toggle('fzc',!op);FZ[c.dataset.fzk]=op?1:0;const b=c.querySelector(':scope>.fzb');if(b)b.setAttribute('aria-expanded',op);return op&&c.querySelector('canvas')}
function fzSub(w){const op=w.classList.contains('fzsc');w.classList.toggle('fzsc',!op);FZ[w.dataset.fzk]=op?1:0;w.firstElementChild.setAttribute('aria-expanded',op)}
document.addEventListener('keydown',e=>{const h=e.target.closest&&e.target.closest('.fzsh');if(h&&e.target===h&&(e.key==='Enter'||e.key===' ')){e.preventDefault();fzSub(h.parentElement)}});
document.addEventListener('click',e=>{const a=e.target.closest('.fzall');
 if(a){e.stopPropagation();const op=a.dataset.fzall==='1';let rr=0;document.querySelectorAll('#pg .c.fz').forEach(c=>{if(fzSet(c,op))rr=1});rr?render():(a.dataset.fzall=op?0:1,a.textContent=t(op?'fz_close':'fz_open'));return}
 const sh=e.target.closest('.fzsh');if(sh&&!e.target.closest('a,button,input,select,textarea,label')){e.stopPropagation();fzSub(sh.parentElement);return}
 const b=e.target.closest('.fzb'),h=b?null:e.target.closest('.fzh');if(!b&&!h)return;
 if(h&&e.target.closest('a,button,input,select,textarea,label,summary,.seg,[data-dd],[role=button],[tabindex]')){const c=h.closest('.c.fzc');if(c)fzSet(c,true);return}
 const c=(b||h).closest('.c.fz');if(!c)return;e.stopPropagation();if(fzSet(c,c.classList.contains('fzc')))render()},true);
"""
rep("function render(){",JS+"function render(){")
rep(" document.getElementById('pg').innerHTML=canR(ROLE,r)?V[r]():vLock(r);\n document.querySelectorAll('[data-i]').forEach(s=>s.innerHTML=IK[s.dataset.i]);",
    " document.getElementById('pg').innerHTML=canR(ROLE,r)?V[r]():vLock(r);\n document.querySelectorAll('[data-i]').forEach(s=>s.innerHTML=IK[s.dataset.i]);\n fold(r,anc);")

# Rehber: adım satırı tek satır, düğmeler ikon
old="""return `<div class="yr nar" style="${me&&rs.length?'background:var(--soft);border-radius:10px;padding-inline:8px;':''}">"""
rep(old,old.replace('class="yr nar"','class="yr yc"'))
rep("""<div class="a"><button class="btn" type="button" data-hlp="${k}" style="font-size:.76rem">${t('hsteps')}</button><a class="btn p" href="${GUIDE}${k}" target="_blank" rel="noopener" style="font-size:.76rem">▶ ${t('watch')}</a>${canR(ROLE,k)?`<a class="btn" href="#${k}" style="font-size:.76rem">${t('openscr')}</a>`:''}</div></div>`}).join('')}</div></div>`).join('')}</div>`}""",
    """<div class="a"><button class="btn yb" type="button" data-hlp="${k}" title="${t('hsteps')}" aria-label="${t('hsteps')}: ${t(k)}">☰</button><a class="btn p yb" href="${GUIDE}${k}" target="_blank" rel="noopener" title="${t('watch')}" aria-label="${t('watch')}: ${t(k)}">▶</a>${canR(ROLE,k)?`<a class="btn yb" href="#${k}" title="${t('openscr')}" aria-label="${t('openscr')}: ${t(k)}">↗</a>`:''}</div></div>`}).join('')}</div></div>`).join('')}</div>`}""")
# Görevler: aşama grupları açılır; yalnız şu anki aşama ve açık görevi kalan önceki aşamalar açık
rep('''return `<div style="margin-top:14px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><b style="font-size:.86rem">${ST[L][s]}</b>''',
    '''return `<div class="fzs" data-fzo="${s===e.st||prevOpen?1:''}" style="margin-top:14px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><b style="font-size:.86rem">${ST[L][s]}</b>''')
# Etkinlik kartı: maliyet kalemleri kapalı
rep('''${expOf(e.id)?`<div style="margin-top:12px"><div class="ey">${t('costs')} · ${t('auto')}</div>''','''${expOf(e.id)?`<div class="fzs" style="margin-top:12px"><div class="ey">${t('costs')} · ${t('auto')}</div>''')
# Rapor önizlemesi: Program kapalı, Finans açık
H='<div style="margin-top:14px;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:#2b8fb8;font-weight:700">'
rep("${(AK[e.id]||[]).length?`"+H+"${R(TT('Program'","${(AK[e.id]||[]).length?`<div class=\"fzs\">"+H+"${R(TT('Program'")
rep("</tr>`).join('')}</table>`:''}\n   ${cl?'':`"+H+"${R(TT('Finans'","</tr>`).join('')}</table></div>`:''}\n   ${cl?'':`<div class=\"fzs\" data-fzo=\"1\">"+H+"${R(TT('Finans'")
rep("${fmt(r[1])}</td></tr>`).join('')}</table>`:''}`}","${fmt(r[1])}</td></tr>`).join('')}</table>`:''}</div>`}")
# Gezi planı: her gün açılır kutu; ilk gün açık
rep('''${GZ.map((day,di)=>`<div style="border:1px solid var(--line2);border-radius:12px;padding:10px 12px;margin-bottom:10px;background:var(--bg2)">''','''${GZ.map((day,di)=>`<div class="fzs" data-fzo="${di===0?1:''}" style="border:1px solid var(--line2);border-radius:12px;padding:10px 12px;margin-bottom:10px;background:var(--bg2)">''')
# Heyet kataloğu: ilk 4 sayfa görünür, kalanı açılır kutuda
rep('''gap:12px">${pg.join('')}</div></div>''','''gap:12px">${pg.slice(0,4).join('')}${pg.length>4?`<div class="fzs" style="grid-column:1/-1"><div class="ey" style="padding:6px 2px">${t('fz_more')} · ${pg.length-4}</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-top:8px">${pg.slice(4).join('')}</div></div>`:''}</div></div>''')
open(p,'w').write(s);print('ok')
