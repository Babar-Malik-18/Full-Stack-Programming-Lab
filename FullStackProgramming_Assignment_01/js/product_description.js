/* ── Image switcher ── */
  function switchImg(thumb, src) {
    document.getElementById('mainImg').src = src;
    document.querySelectorAll('.img-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }

  /* ── Tab switcher ── */
  function switchTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    btn.classList.add('active');
  }

  /* ── Price calculator ── */
  const BASE = 1979;
  function updateTotal() {
    let extra = 0;
    document.querySelectorAll('#configOptions select').forEach(s => {
      extra += parseInt(s.value) || 0;
    });
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    const total = (BASE + extra) * qty;
    document.getElementById('totalPrice').textContent = '$' + total.toLocaleString('en-US', {minimumFractionDigits:2});
  }

  /* ── Quantity ── */
  function changeQty(delta) {
    const input = document.getElementById('qtyInput');
    const v = Math.max(1, Math.min(99, (parseInt(input.value) || 1) + delta));
    input.value = v;
    updateTotal();
  }

  /* ── Add to cart ── */
  let cartCount = 0;
  function addToCart() {
    const btn = document.getElementById('addToCartBtn');
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa fa-check"></i> ADDED TO CART';
    showToast('Item added to your cart!');
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fa fa-shopping-cart"></i> ADD TO CART';
    }, 2000);
  }

  /* ── Toast ── */
  function showToast(msg) {
    const t = document.getElementById('toastMsg');
    document.getElementById('toastText').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  /* ── Related scroll ── */
  function scrollRel(dir) {
    document.getElementById('relatedScroll').scrollBy({ left: dir * 210, behavior: 'smooth' });
  }

  /* ── Star rating ── */
  let selectedRating = 0;
  function setRating(n) {
    selectedRating = n;
    const stars = document.querySelectorAll('#starRating span');
    stars.forEach((s, i) => { s.style.color = i < n ? '#f5a623' : '#ccc'; });
  }
  document.querySelectorAll('#starRating span').forEach((s, i) => {
    s.addEventListener('mouseover', () => {
      document.querySelectorAll('#starRating span').forEach((ss, j) => { ss.style.color = j <= i ? '#f5a623' : '#ccc'; });
    });
    s.addEventListener('mouseout', () => {
      document.querySelectorAll('#starRating span').forEach((ss, j) => { ss.style.color = j < selectedRating ? '#f5a623' : '#ccc'; });
    });
  });

  /* ── Submit review ── */
  function submitReview() { showToast('Thank you! Your review has been submitted for approval.'); }
