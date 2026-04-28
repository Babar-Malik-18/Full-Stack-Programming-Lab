/* ── Floating scroll-to-top ── */
  window.addEventListener('scroll', function () {
    const btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) btn.classList.add('visible');
    else btn.classList.remove('visible');
  });

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Download PDF (print dialog fallback) ── */
  function downloadPage() {
    window.print();
  }

  /* ── Highlight active section on scroll ── */
  const sections = document.querySelectorAll('.tc-section');
  const tocLinks = document.querySelectorAll('.toc a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    tocLinks.forEach(link => {
      link.style.fontWeight = link.getAttribute('href') === '#' + current ? '700' : '';
      link.style.color = link.getAttribute('href') === '#' + current ? '#aa0000' : '';
    });
  });
