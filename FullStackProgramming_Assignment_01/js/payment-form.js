function clr(id){const el=document.getElementById(id);if(el){el.classList.remove('err');el.classList.remove('ok');}const e=document.getElementById(id+'E');if(e)e.classList.remove('show');}
function sErr(id,msg){const el=document.getElementById(id);if(el)el.classList.add('err');const e=document.getElementById(id+'E');if(e){if(msg)e.textContent=msg;e.classList.add('show');}return false;}
function sOk(id){const el=document.getElementById(id);if(el){el.classList.remove('err');el.classList.add('ok');}const e=document.getElementById(id+'E');if(e)e.classList.remove('show');}
function v(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function fmtCard(el){let n=el.value.replace(/\D/g,'').substring(0,16);el.value=n.replace(/(.{4})/g,'$1 ').trim();}
function toggleShip(cb){const a=document.getElementById('shipAddr');cb.checked?a.classList.add('open'):a.classList.remove('open');}
function placeOrder(e){
  e.preventDefault();
  let ok=true;
  const emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!v('b_fn')){sErr('b_fn','Required');ok=false;}else sOk('b_fn');
  if(!v('b_ln')){sErr('b_ln','Required');ok=false;}else sOk('b_ln');
  if(!v('b_em')||!emailRe.test(v('b_em'))){sErr('b_em','Valid email required');ok=false;}else sOk('b_em');
  if(!v('b_ph')){sErr('b_ph','Required');ok=false;}else sOk('b_ph');
  if(!v('b_ad')){sErr('b_ad','Required');ok=false;}else sOk('b_ad');
  if(!v('b_zp')){sErr('b_zp','Required');ok=false;}else sOk('b_zp');
  if(!v('c_ty')){sErr('c_ty','Required');ok=false;}else sOk('c_ty');
  if(v('c_nu').replace(/\s/g,'').length<15){sErr('c_nu','Valid card number required');ok=false;}else sOk('c_nu');
  if(!v('c_cv')||v('c_cv').length<3){sErr('c_cv','3-4 digit CVV required');ok=false;}else sOk('c_cv');
  const tc=document.getElementById('tcChk');
  const tcE=document.getElementById('tcE');
  if(!tc.checked){tcE.classList.add('show');ok=false;}else tcE.classList.remove('show');
  if(!ok){document.querySelector('.fi.err')?.scrollIntoView({behavior:'smooth',block:'center'});return;}
  const s=document.getElementById('orderSuccess');
  s.classList.add('show');
  s.scrollIntoView({behavior:'smooth',block:'start'});
  document.querySelector('.btn-place').disabled=true;
  document.querySelector('.btn-place').style.opacity='.6';
  setTimeout(()=>{window.location.href='order-summary.html';},2500);
}
