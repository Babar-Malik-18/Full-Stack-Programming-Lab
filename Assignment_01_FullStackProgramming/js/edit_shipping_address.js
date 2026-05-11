function clearF(id){
    const el=document.getElementById(id);
    if(el){ el.classList.remove('error'); }
    const err=document.getElementById(id+'Err');
    if(err) err.classList.remove('show');
  }
  function markErr(id,msg){
    const el=document.getElementById(id);
    if(el) el.classList.add('error');
    const err=document.getElementById(id+'Err');
    if(err){ if(msg) err.innerHTML='<i class="fa fa-exclamation-circle"></i> '+msg; err.classList.add('show'); }
  }
  function markOk(id){
    const el=document.getElementById(id);
    if(el){ el.classList.add('valid'); el.classList.remove('error'); }
    const err=document.getElementById(id+'Err');
    if(err) err.classList.remove('show');
  }

  function submitAddr(e, type){
    e.preventDefault();
    const pre = type==='shipping' ? 'b_' : 's_';
    let valid=true;
    const emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checks=[
      {id:pre+'firstName', test:v=>v.length>=1, msg:'First name is required.'},
      {id:pre+'lastName',  test:v=>v.length>=1, msg:'Last name is required.'},
      {id:pre+'email',     test:v=>emailRe.test(v), msg:'Valid email is required.'},
      {id:pre+'phone',     test:v=>v.length>=7, msg:'Phone number is required.'},
      {id:pre+'address',   test:v=>v.length>=3, msg:'Street address is required.'},
      {id:pre+'city',      test:v=>v.length>=1, msg:'City is required.'},
      {id:pre+'zip',       test:v=>v.length>=4, msg:'Zip code is required.'},
    ];

    checks.forEach(c=>{
      const el=document.getElementById(c.id);
      if(!el) return;
      const v=el.value.trim();
      if(!c.test(v)){ markErr(c.id,c.msg); valid=false; } else markOk(c.id);
    });

    // Dropdowns
    ['state','country'].forEach(f=>{
      const el=document.getElementById(pre+f);
      if(!el) return;
      if(el.value.startsWith('--')){ markErr(pre+f,'Please make a selection.'); valid=false; } else markOk(pre+f);
    });

    if(!valid){ document.querySelector('.field-input.error, .field-select.error')?.scrollIntoView({behavior:'smooth',block:'center'}); return; }

    const succId = type==='shipping' ? 'shippingSuccess' : 'shippingSuccess';
    document.getElementById(succId).classList.add('show');
    document.querySelector('.btn-update').disabled=true;
    document.querySelector('.btn-update').style.opacity='.6';

    if(type==='shipping' && !document.getElementById('sameAsBilling')?.checked){
      setTimeout(()=>{ window.location.href='edit-shipping-address.html'; }, 2000);
    } else {
      setTimeout(()=>{ window.location.href='my-account.html'; }, 2000);
    }
  }
