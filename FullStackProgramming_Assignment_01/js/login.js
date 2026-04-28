function validateLogin() {
  let valid = true;
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value.trim();
  const emailErr = document.getElementById('emailErr');
  const passErr = document.getElementById('passErr');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRe.test(email)) {
    emailErr.style.display = 'block';
    document.getElementById('loginEmail').style.borderColor = '#cc0000';
    valid = false;
  } else {
    emailErr.style.display = 'none';
    document.getElementById('loginEmail').style.borderColor = '#28a745';
  }

  if (!pass) {
    passErr.style.display = 'block';
    document.getElementById('loginPassword').style.borderColor = '#cc0000';
    valid = false;
  } else {
    passErr.style.display = 'none';
    document.getElementById('loginPassword').style.borderColor = '#28a745';
  }

  if (valid) {
    window.location.href = 'my-account.html';
  }
  return false;
}

function scrollRelated(dir) {
  const slider = document.getElementById('relatedSlider');
  slider.scrollBy({ left: dir * 180, behavior: 'smooth' });
}
