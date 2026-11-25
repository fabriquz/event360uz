# Açılır kutu yaması: tüm seçimler tek tip (aramalı) açılır kutu.
# Kullanım: python3 acilir-kutu-yamasi.py ../kaynak/uz.src.html   (dosyayı yerinde günceller; iki kez uygulanmaz)
import re,sys
p=sys.argv[1];s=open(p).read()
if 'function ddEnh(' in s: sys.exit('zaten uygulanmış')
def rep(a,b,cnt=1):
    global s
    n=s.count(a)
    if n!=cnt: sys.exit(f'beklenen {cnt}, bulunan {n}: {a[:90]}')
    s=s.replace(a,b)

# ---- 1) Dil seçimleri (dosya/katalog/bülten/medya/rapor/şablon) -> açılır kutu
def langseg(m):
    st=m.group(2) or ''
    st=st[len(' style="'):-1] if st else ''
    return "${langSel('%s',%s,'%s')}"%(m.group(3),m.group(4),st)
s,n=re.subn(r'<div class="seg"( id="fl")?( style="[^"]*")?>\$\{LANGS\.map\(x=>`<button type="button" data-([a-z0-9]+)="\$\{x\}" class="\$\{([a-zA-Z]+)===x\?\'on\':\'\'\}">\$\{x\.toUpperCase\(\)\}</button>`\)\.join\(\'\'\)\}</div>',langseg,s)
if n!=10: sys.exit('dil seg sayısı %d'%n)

# ---- 2) Diğer değer seçimleri
rep("""${gzV===3?`<div class="seg" style="margin-top:10px">${['ucak','tren'].map(k=>`<button type="button" data-hz="${k}" class="${gzHz===k?'on':''}">${t('hz_'+k)}</button>`).join('')}</div>`:''}""",
    """${gzV===3?`<div style="margin-top:10px">${segSel('hz',['ucak','tren'].map(k=>[k,t('hz_'+k)]),gzHz,'Harezm')}</div>`:''}""")
rep("""<div class="seg">${Object.keys(CITY4).map(k=>`<button type="button" data-gc="${k}" class="${gzC===k?'on':''}">${CITY4[k][L]}</button>`).join('')}</div>""",
    """${segSel('gc',Object.keys(CITY4).map(k=>[k,CITY4[k][L]]),gzC,t('city'),'min-width:190px')}""")
rep("""<div class="seg" style="margin-bottom:8px">${Object.keys(PLT).map(k=>`<button type="button" data-mp="${k}" class="${mdP===k?'on':''}">${PLT[k][0]}</button>`).join('')}</div>""",
    """<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">${segSel('mp',Object.keys(PLT).map(k=>[k,PLT[k][0]]),mdP,'Platform','min-width:200px')}""")
# medya dil kutusu platformla aynı satıra
rep("""${langSel('ml2',mdL,'margin-bottom:12px')}""","""${langSel('ml2',mdL,'')}</div>""")
rep("""<div class="seg"><button type="button" data-rpa="ic" class="${rpA==='ic'?'on':''}">${TT('İç rapor','Ichki','Внутренний','Internal')[L]}</button><button type="button" data-rpa="musteri" class="${rpA==='musteri'?'on':''}">${TT('Müşteri raporu','Mijoz uchun','Для клиента','Client report')[L]}</button></div>""",
    """${segSel('rpa',[['ic',TT('İç rapor','Ichki','Внутренний','Internal')[L]],['musteri',TT('Müşteri raporu','Mijoz uchun','Для клиента','Client report')[L]]],rpA,'rapor')}""")
rep("""<div class="seg">${[['ty',t('evtype')],['sec',t('sector')],['city',t('city')],['src',t('source')]].map(([k,n])=>`<button type="button" data-rpg="${k}" class="${rpG===k?'on':''}">${n}</button>`).join('')}</div>""",
    """${segSel('rpg',[['ty',t('evtype')],['sec',t('sector')],['city',t('city')],['src',t('source')]],rpG,'kırılım')}""")
rep("""<div class="seg" style="margin-top:8px">${['davet','teyit','hatir'].map(k=>`<button type="button" data-tk="${k}" class="${tplK===k?'on':''}">${t('tpl_'+k)}</button>`).join('')}</div>""","")
rep("""<div class="seg">${Object.keys(CHN).map(k=>`<button type="button" data-tc="${k}" class="${tplC===k?'on':''}">${CHN[k]}</button>`).join('')}</div>""",
    """${segSel('tk',['davet','teyit','hatir'].map(k=>[k,t('tpl_'+k)]),tplK,'şablon')}${segSel('tc',Object.keys(CHN).map(k=>[k,CHN[k]]),tplC,'kanal')}""")
s=s.replace("""<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">${segSel('tk'""","""<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">${segSel('tk'""")

# ---- 3) Program PDF: firma seçimi
rep("""const PTR=['Kuzey Makine',""","""let prF='Kuzey Makine';
const PTR=['Kuzey Makine',""")
rep("""${langSel('fl',fLang,'')}
    <div style="margin-top:12px"><button class="btn p" type="button" data-doc="program">${ik('ajanda','ik-16')}${t('progfile')} · Kuzey Makine</button></div></div>""",
    """<div style="display:flex;gap:8px;flex-wrap:wrap"><select data-prf="1" aria-label="${t('firm')}" style="flex:1;min-width:190px">${MF.map(f=>`<option ${f===prF?'selected':''}>${f}</option>`).join('')}</select>${langSel('fl',fLang,'')}</div>
    <div style="margin-top:12px"><button class="btn p" type="button" data-doc="program">${ik('ajanda','ik-16')}${t('progfile')} · ${prF}</button></div></div>""")
rep("""if(k==='program'){body=`<table><thead><tr><th>${d[2]}</th><th>${d[3]}</th><th>${d[4]}</th></tr></thead><tbody>${SL.map((s,j)=>`<tr><td>${s}</td><td>${PUZ[j%8]}</td><td>M1</td></tr>`).join('')}</tbody></table>`}""",
    """if(k==='program'){const fi=Math.max(0,MF.indexOf(prF));d[1]=d[1].replace('Kuzey Makine',prF);body=`<table><thead><tr><th>${d[2]}</th><th>${d[3]}</th><th>${d[4]}</th></tr></thead><tbody>${SL.map((s,j)=>`<tr><td>${s}</td><td>${PUZ[(j+fi)%8]}</td><td>${MT[fi]||'M1'}</td></tr>`).join('')}</tbody></table>`}""")

# ---- 4) Görevler: sorumlu atama
rep("""<span>${t('owner')}: ${sn(g[2])} · <span style="color:${RK[g[6]].c}""",
    """<span>${t('owner')}: <select data-gown="${i}" aria-label="${t('owner')}" style="font-size:.76rem;padding:1px 7px">${TEAM.map(x=>`<option value="${x.id}" ${x.id===g[2]?'selected':''}>${sn(x.id)}</option>`).join('')}</select> · <span style="color:${RK[g[6]].c}""")

# ---- 5) Mekân: tercüman ↔ masa
rep("""<th>${t('tables')}</th><th></th></tr></thead>""","""<th>${t('tables')}</th></tr></thead>""")
rep("""<td>${x[4]?`<span class="pill ok">${x[4]} · ${t('assigned')}</span>`:`<span class="pill mu">${t('avail')}</span>`}</td><td style="text-align:right">${x[4]?`<button class="btn" type="button" data-tu="${i}" style="padding:3px 9px">${t('unassign')}</button>`:`<button class="btn p" type="button" data-ta="${i}" style="padding:3px 9px" ${miss.length?'':'disabled'}>${t('assign')}${miss.length?' → '+miss[0]:''}</button>`}</td>""",
    """<td><select data-tpm="${i}" aria-label="${t('tables')} · ${x[0]}" style="min-width:230px"><option value="">${t('avail')}</option>${MT.filter(m=>!NORU.includes(m)).map(m=>{const o=TP.find(y=>y[4]===m&&y!==x);return `<option value="${m}" ${x[4]===m?'selected':''}>${m} · ${MF[MT.indexOf(m)]}${o?' · '+o[0]:''}</option>`}).join('')}</select></td>""")
rep("""<span>${st?`${st[0]} · ${st[1]} · $ ${st[2]} / ${t('days')}`:NORU.includes(s)?'RU · '+t('notneeded'):t('nointerp')}</span></span></div></div>""",
    """<span>${st?`${st[0]} · ${st[1]} · $ ${st[2]} / ${t('days')}`:NORU.includes(s)?'RU · '+t('notneeded'):t('nointerp')}</span></span>${NORU.includes(s)?'':`<select data-mtp="${s}" aria-label="${t('interp')} · ${s}" style="min-width:200px"><option value="">${t('nointerp')}</option>${TP.map((x,i)=>`<option value="${i}" ${x[4]===s?'selected':''}>${x[0]} · ${x[1]}${x[4]&&x[4]!==s?' · '+x[4]:''}</option>`).join('')}</select>`}</div></div>""")

# ---- 6) Etkinlik formu: müşteri/kuruluş aramalı kutu (yeni ad eklenebilir)
rep("""`<input id="fo" value="${(e.org==='—'?'':e.org||'').replace(/"/g,'&quot;')}" style="font:inherit;font-size:.9rem;text-transform:none;font-weight:500;border:1px solid var(--line);border-radius:9px;padding:7px 9px;color:#0b2545">`""",
    """orgSel(e.org)""")
rep("""const fld=(l,h)=>""","""const orgSel=v=>{v=v==='—'?'':(v||'');const og=[...new Set(['OAİB','İTHİB','İKMİB','Kayseri TO','Taşkent Ticaret Müşavirliği · OAİB',...EV.filter(x=>x.src!=='ozel').map(x=>x.org)])].filter(x=>x&&x!=='—'),fm=[...new Set([...TRF.map(x=>x[0]),...EV.filter(x=>x.src==='ozel').map(x=>x.org)])].filter(x=>x&&x!=='—'&&!og.includes(x));if(v&&!og.includes(v)&&!fm.includes(v))fm.unshift(v);const op=x=>`<option ${x===v?'selected':''}>${x.replace(/</g,'&lt;')}</option>`;return `<select id="fo" data-free="1" style="text-transform:none;font-weight:500;font-size:.86rem;color:#0b2545"><option value="">—</option><optgroup label="${TT('Kuruluşlar','Tashkilotlar','Организации','Organisations')[L]}">${og.map(op).join('')}</optgroup><optgroup label="${TT('Firmalar','Firmalar','Компании','Companies')[L]}">${fm.map(op).join('')}</optgroup></select>`};
 const fld=(l,h)=>""")

# ---- 7) Kiosk: firma ile bul -> aramalı kutu (tüm firmalar)
rep("""else if(kStep==='firm'){const fs=[...new Set(REG.filter(p=>p.ty==='tr'||p.ty==='uz').sort((a,b)=>(a.pr-b.pr)).map(p=>p.f))].slice(0,8);body=`<b style="font-size:1.1rem">${K('byfirm')}</b><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">${fs.map(f=>`<button type="button" data-kf="${f.replace(/"/g,'&quot;')}" style="${big};font-size:.86rem;padding:11px 12px">${f}</button>`).join('')}</div>`}""",
    """else if(kStep==='firm'){const fs=[...new Set(REG.filter(p=>p.ty==='tr'||p.ty==='uz').map(p=>p.f))].sort((a,b)=>a.localeCompare(b,'tr'));body=`<b style="font-size:1.1rem">${K('byfirm')}</b><div style="margin-top:12px"><select data-kfsel="1" aria-label="${K('byfirm')}" style="width:100%;font-size:1.05rem;padding:13px 14px;border-radius:12px"><option value="">${K('byfirm')} · ${fs.length}</option>${fs.map(f=>`<option>${f.replace(/</g,'&lt;')}</option>`).join('')}</select></div>`}""")

# ---- 8) Olay bağlama
rep("""document.addEventListener('change',e=>{const el=e.target;
 if(el.dataset.gt)""","""document.addEventListener('change',e=>{const el=e.target;
 if(el.dataset.sg){const b=document.createElement('button');b.type='button';b.hidden=true;b.dataset[el.dataset.sg]=el.value;document.body.appendChild(b);b.click();b.remove();return}
 if(el.dataset.prf){prF=el.value;render();return}
 if(el.dataset.gown){GV[+el.dataset.gown][2]=el.value;render();toast(t('saved'));return}
 if(el.dataset.tpm){const i=+el.dataset.tpm,v=el.value;TP.forEach((x,j)=>{if(j!==i&&v&&x[4]===v)x[4]=''});TP[i][4]=v;if(v)mSel=v;render();toast(t('saved'));return}
 if(el.dataset.mtp){const m=el.dataset.mtp;TP.forEach(x=>{if(x[4]===m)x[4]=''});if(el.value!=='')TP[+el.value][4]=m;render();toast(t('saved'));return}
 if(el.dataset.kfsel){if(el.value){kFirm=el.value;kStep='person';render()}return}
 if(el.dataset.gt)""")

# ---- 9) Ortak bileşen: aramalı açılır kutu (tüm <select>'leri sarar, değişim olayını korur)
JS=r"""
/* ---------- Açılır kutu: tüm seçimler tek tip, uzun listede arama ---------- */
const LNM={tr:'Türkçe',uz:'Oʻzbekcha',ru:'Русский',en:'English'};
const segSel=(k,items,cur,lab,st)=>`<select data-sg="${k}" aria-label="${lab||''}"${st?` style="${st}"`:''}>${items.map(([v,n])=>`<option value="${v}" ${v===cur?'selected':''}>${n}</option>`).join('')}</select>`;
const langSel=(k,cur,st)=>segSel(k,LANGS.map(x=>[x,x.toUpperCase()+' · '+LNM[x]]),cur,t('filelang'),st||'min-width:150px');
const DDT={q:T4('Ara…','Qidirish…','Поиск…','Search…'),no:T4('Sonuç yok','Topilmadi','Ничего не найдено','No results'),add:T4('Ekle','Qoʻshish','Добавить','Add')};
const DDC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const DDS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
const DDK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>';
let ddP=null;
const ddNorm=x=>String(x).toLocaleLowerCase('tr').replace(/ı/g,'i').normalize('NFD').replace(/[̀-ͯ«»"'ʻʼ’`]/g,'');
const ddEsc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;');
function ddLab(sl){const o=sl.options[sl.selectedIndex];return o?o.textContent:''}
function ddEnh(){
 document.querySelectorAll('select:not([data-dd])').forEach(sl=>{
  sl.dataset.dd='1';const w=document.createElement('span');w.className='dd';
  const cs=sl.style;['marginLeft','marginTop','marginBottom','marginRight','width','minWidth','maxWidth','flex'].forEach(k=>{if(cs[k])w.style[k]=cs[k]});
  const b=document.createElement('button');b.type='button';b.className='dd-b';b.setAttribute('aria-haspopup','listbox');b.setAttribute('aria-expanded','false');
  const al=sl.getAttribute('aria-label');if(al)b.setAttribute('aria-label',al);
  ['fontSize','fontWeight','padding','borderRadius','textTransform','color'].forEach(k=>{if(cs[k])b.style[k]=cs[k]});
  b.disabled=sl.disabled;b.innerHTML='<span class="dd-v"></span>'+DDC;b.firstChild.textContent=ddLab(sl);
  sl.parentNode.insertBefore(w,sl);w.appendChild(b);w.appendChild(sl);sl.tabIndex=-1;sl.setAttribute('aria-hidden','true');
 });
 document.querySelectorAll('.dd').forEach(w=>{const sl=w.querySelector('select'),v=w.querySelector('.dd-v');if(sl&&v&&v.textContent!==ddLab(sl))v.textContent=ddLab(sl)});
}
function ddClose(focus){if(!ddP)return;const {p,b}=ddP;p.remove();b.classList.remove('on');b.setAttribute('aria-expanded','false');ddP=null;if(focus&&b.isConnected)b.focus()}
function ddRows(){const {sl,q}=ddP,n=ddNorm(q.trim());const r=[];let g=null;
 [...sl.options].forEach((o,i)=>{if(n&&!ddNorm(o.textContent).includes(n))return;const gl=o.parentNode.tagName==='OPTGROUP'?o.parentNode.label:'';if(gl&&gl!==g){g=gl;r.push({g:gl})}r.push({i,tx:o.textContent,sel:i===sl.selectedIndex,dis:o.disabled})});
 if(n&&sl.dataset.free!==undefined&&![...sl.options].some(o=>ddNorm(o.textContent)===n))r.push({add:q.trim()});
 return r}
function ddDraw(){const {p}=ddP,rows=ddRows(),opts=rows.filter(x=>!x.g&&!x.dis);ddP.vis=opts;if(ddP.act>=opts.length)ddP.act=opts.length-1;
 const l=p.querySelector('.dd-l'),hl=tx=>{const q=ddP.q.trim();if(!q)return ddEsc(tx);const k=ddNorm(tx).indexOf(ddNorm(q));return k<0||ddNorm(tx).length!==tx.length?ddEsc(tx):ddEsc(tx.slice(0,k))+'<mark>'+ddEsc(tx.slice(k,k+q.length))+'</mark>'+ddEsc(tx.slice(k+q.length))};
 l.innerHTML=rows.length?rows.map(x=>x.g?`<div class="dd-g">${ddEsc(x.g)}</div>`:x.add!==undefined?`<div class="dd-o add${opts[ddP.act]===x?' act':''}" data-dda="1" role="option">+ ${DDT.add[L]}: <b>${ddEsc(x.add)}</b></div>`:`<div class="dd-o${x.sel?' sel':''}${x.dis?' dis':''}${opts[ddP.act]===x?' act':''}" data-ddo="${x.i}" role="option" aria-selected="${x.sel}"><span class="dd-k">${x.sel?DDK:''}</span><span>${hl(x.tx)}</span></div>`).join(''):`<div class="dd-e">${DDT.no[L]}</div>`;
 const a=l.querySelector('.act');if(a)a.scrollIntoView({block:'nearest'})}
function ddPos(){const {p,b}=ddP,r=b.getBoundingClientRect(),W=innerWidth,H=innerHeight,w=Math.min(Math.max(r.width,260),380,W-16);
 p.style.width=w+'px';p.style.left=Math.max(8,Math.min(r.left,W-w-8))+'px';const below=H-r.bottom-12,above=r.top-12,up=below<240&&above>below,room=Math.max(140,Math.min(360,(up?above:below)));
 p.querySelector('.dd-l').style.maxHeight=(room-(p.querySelector('.dd-s')?52:12))+'px';
 if(up){p.style.top='';p.style.bottom=(H-r.top+4)+'px'}else{p.style.bottom='';p.style.top=(r.bottom+4)+'px'}}
function ddOpen(b){const sl=b.parentNode.querySelector('select');if(!sl||sl.disabled)return;ddClose();
 const srch=sl.options.length>7||sl.dataset.free!==undefined,p=document.createElement('div');p.className='dd-p';p.setAttribute('role','listbox');if(b.closest('.kio,[data-kiosk]'))p.classList.add('big');
 p.innerHTML=(srch?`<label class="dd-s">${DDS}<input type="text" placeholder="${DDT.q[L]}" aria-label="${DDT.q[L]}" autocomplete="off"><span class="dd-c">${sl.options.length}</span></label>`:'')+'<div class="dd-l"></div>';
 document.body.appendChild(p);ddP={sl,b,p,q:'',act:-1,vis:[]};b.classList.add('on');b.setAttribute('aria-expanded','true');
 ddDraw();const cur=ddP.vis.findIndex(x=>x.sel);ddP.act=cur;ddDraw();ddPos();
 const inp=p.querySelector('input');if(inp){inp.focus();inp.addEventListener('input',()=>{ddP.q=inp.value;ddP.act=inp.value.trim()?0:-1;ddDraw()})}else{p.tabIndex=-1;p.focus()}
 p.addEventListener('keydown',ddKey);
}
function ddPick(x){const {sl}=ddP;if(x.add!==undefined){const o=document.createElement('option');o.textContent=x.add;const g=sl.querySelector('optgroup:last-of-type');(g||sl).appendChild(o);sl.value=x.add}else sl.selectedIndex=x.i;
 ddClose(true);ddEnh();sl.dispatchEvent(new Event('change',{bubbles:true}))}
function ddKey(e){if(!ddP)return;const n=ddP.vis.length;
 if(e.key==='ArrowDown'){e.preventDefault();ddP.act=n?(ddP.act+1)%n:-1;ddDraw()}
 else if(e.key==='ArrowUp'){e.preventDefault();ddP.act=n?(ddP.act<=0?n-1:ddP.act-1):-1;ddDraw()}
 else if(e.key==='Enter'){e.preventDefault();const x=ddP.vis[ddP.act<0?0:ddP.act];if(x)ddPick(x)}
 else if(e.key==='Escape'){e.preventDefault();e.stopPropagation();ddClose(true)}
 else if(e.key==='Tab'){ddClose()}}
document.addEventListener('click',e=>{
 const b=e.target.closest('.dd-b');if(b){e.stopPropagation();e.preventDefault();if(ddP&&ddP.b===b)ddClose();else ddOpen(b);return}
 if(ddP&&ddP.p.contains(e.target)){e.stopPropagation();const o=e.target.closest('[data-ddo],[data-dda]');if(o){const x=o.dataset.dda?ddP.vis.find(y=>y.add!==undefined):ddP.vis.find(y=>y.i===+o.dataset.ddo);if(x)ddPick(x)}return}
 if(ddP)ddClose();
},true);
document.addEventListener('keydown',e=>{const b=e.target.closest&&e.target.closest('.dd-b');if(b&&(e.key==='ArrowDown'||e.key==='ArrowUp')){e.preventDefault();ddOpen(b)}},true);
addEventListener('scroll',e=>{if(ddP&&!ddP.p.contains(e.target))ddPos()},true);
addEventListener('resize',()=>ddClose());
let ddQ=0;new MutationObserver(()=>{if(ddQ)return;ddQ=1;queueMicrotask(()=>{ddQ=0;if(ddP&&!ddP.b.isConnected)ddClose();ddEnh()})}).observe(document.body,{childList:true,subtree:true});
"""
rep("""window.addEventListener('hashchange',()=>{render();scrollTo(0,0)});""",JS+"""window.addEventListener('hashchange',()=>{render();scrollTo(0,0)});""")
rep("""\nrender();\n</script>""","""\nrender();ddEnh();\n</script>""")

CSS="""
/* Açılır kutu */
.dd{position:relative;display:inline-flex;vertical-align:middle;max-width:100%;min-width:0}
.dd>select{position:absolute;inset:0;width:100%;height:100%;opacity:0;pointer-events:none}
.dd-b{display:flex;align-items:center;gap:8px;width:100%;min-width:0;border:1px solid var(--line);border-radius:9px;padding:6px 9px;background:var(--card);color:var(--ink);cursor:pointer;text-align:left;line-height:1.35;transition:border-color .15s,box-shadow .15s}
.dd-b:hover{border-color:color-mix(in srgb,var(--rc) 50%,var(--line))}
.dd-b:focus-visible,.dd-b.on{outline:none;border-color:var(--rc);box-shadow:0 0 0 3px color-mix(in srgb,var(--rc) 20%,transparent)}
.dd-b:disabled{opacity:.55;cursor:not-allowed}
.dd-v{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dd-b svg{flex:none;width:14px;height:14px;color:var(--mut);transition:transform .18s}
.dd-b.on svg{transform:rotate(180deg);color:var(--rc)}
.rolsel .dd,label>.dd{width:100%;display:flex}
.rolsel .dd-b{font-size:.82rem;font-weight:600}
.dd-p{position:fixed;z-index:400;display:flex;flex-direction:column;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:6px;box-shadow:0 14px 34px rgba(11,37,69,.16),0 2px 6px rgba(11,37,69,.06);font-size:.86rem;font-weight:500;text-transform:none;letter-spacing:0;animation:ddin .16s ease-out}
.dd-p.big{font-size:1rem}
@keyframes ddin{from{opacity:0;transform:translateY(-4px)}}
.dd-s{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:8px;padding:7px 9px;margin-bottom:6px;background:var(--bg2);cursor:text}
.dd-s:focus-within{border-color:var(--rc)}
.dd-s svg{width:15px;height:15px;color:var(--mut);flex:none}
.dd-s input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;color:var(--ink);padding:0}
.dd-c{font:500 .68rem var(--f-m);color:var(--mut)}
.dd-l{overflow:auto;overscroll-behavior:contain}
.dd-g{padding:8px 8px 4px;font-size:.66rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--mut)}
.dd-o{display:flex;align-items:center;gap:6px;padding:7px 8px;border-radius:7px;cursor:pointer;line-height:1.3}
.dd-o:hover,.dd-o.act{background:var(--soft)}
.dd-o.sel{color:var(--rc2);font-weight:600}
.dd-o.dis{opacity:.45;pointer-events:none}
.dd-o.add{color:var(--rc2)}
.dd-k{width:15px;flex:none;display:inline-flex}.dd-k svg{width:15px;height:15px}
.dd-o mark{background:none;color:inherit;font-weight:700;text-decoration:underline;text-decoration-color:var(--rc);text-underline-offset:2px}
.dd-e{padding:12px 8px;color:var(--mut)}
"""
i=s.index('</style>');s=s[:i]+CSS+s[i:]
open(p,'w').write(s);print('tamam')
