function removeItem(id, e) {
    e.preventDefault();
    const el = document.getElementById(id);
    el.style.opacity = '0';
    el.style.transition = 'opacity .35s';
    setTimeout(() => {
      el.style.maxHeight = el.offsetHeight + 'px';
      el.style.overflow = 'hidden';
      el.style.transition = 'max-height .35s, padding .35s, margin .35s';
      setTimeout(() => { el.style.maxHeight = '0'; el.style.paddingTop = '0'; el.style.paddingBottom = '0'; }, 10);
      setTimeout(() => { el.remove(); showToast('Item removed from cart'); }, 370);
    }, 300);
  }
  function showToast(msg) {
    const t = document.getElementById('toastMsg');
    document.getElementById('toastText').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  }
