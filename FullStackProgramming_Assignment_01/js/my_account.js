function togglePasswordForm() {
  const f = document.getElementById('passwordForm');
  f.classList.toggle('active');
}

function savePassword() {
  const cur = document.getElementById('currentPass').value.trim();
  const nw = document.getElementById('newPass').value.trim();
  const conf = document.getElementById('confirmPass').value.trim();
  const err = document.getElementById('passFormErr');
  if (!cur) { err.style.display='block'; err.textContent='Please enter your current password.'; return; }
  if (nw.length < 6) { err.style.display='block'; err.textContent='New password must be at least 6 characters.'; return; }
  if (nw !== conf) { err.style.display='block'; err.textContent='Passwords do not match.'; return; }
  err.style.display='none';
  alert('Password updated successfully!');
  togglePasswordForm();
}

function toggleEditAddr(n) {
  const f = document.getElementById('editAddr' + n);
  f.classList.toggle('active');
}

function saveAddr(n) {
  const name = document.getElementById('a'+n+'name').value.trim();
  const company = document.getElementById('a'+n+'company').value.trim();
  const street = document.getElementById('a'+n+'street').value.trim();
  const city = document.getElementById('a'+n+'city').value.trim();
  const state = document.getElementById('a'+n+'state').value.trim();
  const zip = document.getElementById('a'+n+'zip').value.trim();
  const country = document.getElementById('a'+n+'country').value.trim();
  const err = document.getElementById('addr'+n+'Err');

  if (!name || !street || !city || !zip) {
    err.style.display='block'; err.textContent='Please fill in all required fields.'; return;
  }
  err.style.display='none';
  const addr = document.getElementById('addr'+n);
  addr.innerHTML = `${name}<br>${company}<br>${street}<br>${city}, ${state} ${zip}<br>${country}`;
  toggleEditAddr(n);
}

function viewOrder(id) {
  alert('Viewing order #' + id + ' details.\n(This would navigate to the order detail page)');
}
