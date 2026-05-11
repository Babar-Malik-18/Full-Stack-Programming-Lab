function clearFieldErr(id){
    document.getElementById(id+'Err').classList.remove('show');
    document.getElementById(id).classList.remove('error');
  }
  function markValid(id){ document.getElementById(id).classList.add('valid'); document.getElementById(id).classList.remove('error'); }
  function markError(id, msg){
    const err = document.getElementById(id+'Err');
    if(msg) err.innerHTML = '<i class="fa fa-exclamation-circle"></i> ' + msg;
    err.classList.add('show');
    document.getElementById(id).classList.add('error');
    document.getElementById(id).classList.remove('valid');
  }

  function submitContact(e){
    e.preventDefault();
    let valid = true;
    const fn = document.getElementById('cfFirstName').value.trim();
    const sub = document.getElementById('cfSubject').value.trim();
    const em = document.getElementById('cfEmail').value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!fn){ markError('cfFirstName','First name is required.'); valid=false; } else markValid('cfFirstName');
    if(!sub){ markError('cfSubject','Subject is required.'); valid=false; } else markValid('cfSubject');
    if(!em || !emailRe.test(em)){ markError('cfEmail','Please enter a valid email address.'); valid=false; } else markValid('cfEmail');

    if(!valid) return;
    document.getElementById('cfSuccess').classList.add('show');
    document.querySelector('.btn-submit').disabled=true;
    document.querySelector('.btn-submit').style.opacity='.6';
  }
