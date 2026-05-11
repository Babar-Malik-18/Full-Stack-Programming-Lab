// Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dots span');
  function goSlide(n) {
    slides[currentSlide].style.display = 'none';
    dots[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].style.display = 'flex';
    dots[currentSlide].classList.add('active');
  }
  setInterval(() => goSlide((currentSlide + 1) % slides.length), 4000);

  // Add to cart animation
  document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      this.textContent = '✓ ADDED!';
      this.style.background = '#28a745';
      setTimeout(() => {
        this.innerHTML = '<i class="fa fa-shopping-cart"></i> ADD TO CART';
        this.style.background = '';
      }, 1500);
    });
  });
