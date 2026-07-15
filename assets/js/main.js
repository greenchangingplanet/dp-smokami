document.addEventListener('DOMContentLoaded', () => {
  // 1. Zmiana tła nagłówka podczas przewijania (Scroll Header)
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Obsługa menu mobilnego (Hamburger)
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('active');
    });
  }

  // 3. Prosty paralaks dla tła w świetnej lokalizacji (tylko na ekranach stacjonarnych)
  const parallaxBg = document.querySelector('.location-bg');
  if (parallaxBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;
      // Przesuwamy obrazek wolniej niż przewija się strona
      parallaxBg.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
    });
  }
});
