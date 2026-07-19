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
      parallaxBg.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
    });
  }

  // 4. INICJACJA KARUZELI UDOGODNIEŃ (Swiper.js)
  if (document.querySelector('.swiper-amenities')) {
    new Swiper('.swiper-amenities', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});
