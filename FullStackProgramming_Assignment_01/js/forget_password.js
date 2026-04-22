function submitForgot(e) {
    e.preventDefault();
    const emailEl = document.getElementById('fpEmail');
    const errEl   = document.getElementById('fpEmailErr');
    const sucEl   = document.getElementById('fpSuccess');
    const val     = emailEl.value.trim();
    const re      = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset
    emailEl.classList.remove('error', 'success');
    errEl.classList.remove('show');
    sucEl.classList.remove('show');

    if (!val || !re.test(val)) {
      emailEl.classList.add('error');
      errEl.classList.add('show');
      emailEl.focus();
      return;
    }

    // Simulate submission
    emailEl.classList.add('success');
    sucEl.classList.add('show');
    emailEl.disabled = true;
    document.querySelector('.btn-submit').disabled = true;
    document.querySelector('.btn-submit').style.opacity = '.6';
  }

  function doSearch() {
    const q = document.getElementById('searchInput').value.trim();
    if (q) alert('Searching for: ' + q);
  }
