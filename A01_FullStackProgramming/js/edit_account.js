function clearE(id) {
    document.getElementById(id).classList.remove('error');
    document.getElementById(id + 'Err').classList.remove('show');
  }
  function setErr(id) {
    document.getElementById(id).classList.add('error');
    document.getElementById(id + 'Err').classList.add('show');
  }
  function setOk(id) {
    document.getElementById(id).classList.remove('error');
    document.getElementById(id).classList.add('valid');
    document.getElementById(id + 'Err').classList.remove('show');
  }

  function checkStrength(pw) {
    const wrap = document.getElementById('pwStrengthWrap');
    const fill = document.getElementById('pwFill');
    const lbl  = document.getElementById('pwLabel');
    if (!pw) { wrap.classList.remove('show'); return; }
    wrap.classList.add('show');
    let s = 0;
    if (pw.length >= 6)  s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    const lvls = [
      { w:'20%', c:'#e74c3c', t:'Very Weak' },
      { w:'40%', c:'#e67e22', t:'Weak' },
      { w:'60%', c:'#f1c40f', t:'Fair' },
      { w:'80%', c:'#2ecc71', t:'Strong' },
      { w:'100%',c:'#27ae60', t:'Very Strong' },
    ];
    const l = lvls[Math.min(s - 1, 4)] || lvls[0];
    fill.style.width = l.w; fill.style.background = l.c;
    lbl.textContent = l.t; lbl.style.color = l.c;
  }

  function submitProfile(e) {
    e.preventDefault();
    let ok = true;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fn = document.getElementById('ep_first').value.trim();
    const ln = document.getElementById('ep_last').value.trim();
    const em = document.getElementById('ep_email').value.trim();
    const cp = document.getElementById('ep_curpass').value.trim();
    const np = document.getElementById('ep_newpass').value.trim();
    const cf = document.getElementById('ep_confirm').value.trim();

    if (!fn) { setErr('ep_first'); ok = false; } else setOk('ep_first');
    if (!ln) { setErr('ep_last');  ok = false; } else setOk('ep_last');
    if (!em || !emailRe.test(em)) { setErr('ep_email'); ok = false; } else setOk('ep_email');
    if (!cp) { setErr('ep_curpass'); ok = false; } else setOk('ep_curpass');
    if (!np || np.length < 6) { setErr('ep_newpass'); ok = false; } else setOk('ep_newpass');
    if (!cf || cf !== np) { setErr('ep_confirm'); ok = false; } else setOk('ep_confirm');

    if (!ok) return;
    document.getElementById('epSuccess').classList.add('show');
    document.querySelector('.btn-update').disabled = true;
    document.querySelector('.btn-update').style.opacity = '.6';
  }
