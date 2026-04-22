/* ── Helpers ── */
  function showErr(id, msg) {
    const el = document.getElementById(id + 'Err');
    if (msg) el.innerHTML = '<i class="fa fa-exclamation-circle"></i> ' + msg;
    el.classList.add('show');
    document.getElementById(id).classList.add('error');
    document.getElementById(id).classList.remove('valid');
  }
  function clearError(id) {
    document.getElementById(id + 'Err').classList.remove('show');
    document.getElementById(id).classList.remove('error');
  }
  function markValid(id) {
    document.getElementById(id).classList.add('valid');
    document.getElementById(id).classList.remove('error');
    document.getElementById(id + 'Err').classList.remove('show');
  }

  /* ── Password strength ── */
  function checkStrength(pw) {
    const bar   = document.getElementById('strengthFill');
    const label = document.getElementById('strengthLabel');
    const wrap  = document.getElementById('pwStrength');

    if (!pw) { wrap.classList.remove('show'); return; }
    wrap.classList.add('show');

    let score = 0;
    if (pw.length >= 6)  score++;
    if (pw.length >= 10) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    const levels = [
      { pct:'20%', color:'#e74c3c', text:'Very Weak' },
      { pct:'40%', color:'#e67e22', text:'Weak' },
      { pct:'60%', color:'#f1c40f', text:'Fair' },
      { pct:'80%', color:'#2ecc71', text:'Strong' },
      { pct:'100%', color:'#27ae60', text:'Very Strong' },
    ];
    const lvl = levels[Math.min(score - 1, 4)] || levels[0];
    bar.style.width    = lvl.pct;
    bar.style.background = lvl.color;
    label.textContent  = lvl.text;
    label.style.color  = lvl.color;
  }

  /* ── Form Submission ── */
  function submitRegister(e) {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'firstName', check: v => v.length >= 2, msg: 'First name must be at least 2 characters.' },
      { id: 'lastName',  check: v => v.length >= 2, msg: 'Last name must be at least 2 characters.' },
      { id: 'regEmail',  check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please enter a valid email address.' },
      { id: 'regPassword', check: v => v.length >= 6 && v.length <= 20, msg: 'Password must be 6–20 characters.' },
    ];

    fields.forEach(f => {
      const val = document.getElementById(f.id).value.trim();
      if (!f.check(val)) { showErr(f.id, f.msg); valid = false; }
      else markValid(f.id);
    });

    // Confirm password
    const pw  = document.getElementById('regPassword').value;
    const cnf = document.getElementById('regConfirm').value;
    if (!cnf || pw !== cnf) {
      showErr('regConfirm', 'Passwords do not match.'); valid = false;
    } else if (valid) {
      markValid('regConfirm');
    }

    if (!valid) return;

    // Simulate success
    document.getElementById('regSuccess').classList.add('show');
    document.querySelector('.btn-create').disabled = true;
    document.querySelector('.btn-create').style.opacity = '.6';
    setTimeout(() => { window.location.href = 'my-account.html'; }, 2500);
  }
