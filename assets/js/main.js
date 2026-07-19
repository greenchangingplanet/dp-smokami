document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. ZMIANA TŁA NAGŁÓWKA I OPÓŹNIENIE MAŁEGO LOGO (zmienione na 300px)
  // ==========================================================================
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================================================
  // 2. OBSŁUGA MENU MOBILNEGO (HAMBURGER)
  // ==========================================================================
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('active');
    });
  }

  // ==========================================================================
  // 3. PROSTY PARALAKS DLA SEKCJI LOKALIZACJA (TYLKO NA PC)
  // ==========================================================================
  const parallaxBg = document.querySelector('.location-bg');
  if (parallaxBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;
      parallaxBg.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
    });
  }

  // ==========================================================================
  // 4. INICJACJA KARUZELI UDOGODNIEŃ (Swiper.js)
  // ==========================================================================
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

  // ==========================================================================
  // 5. INICJACJA KARUZELI APARTAMENTÓW (Swiper.js)
  // ==========================================================================
  if (document.querySelector('.swiper-apartments')) {
    new Swiper('.swiper-apartments', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-apartments .swiper-button-next',
        prevEl: '.swiper-apartments .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-apartments .swiper-pagination',
        clickable: true,
      },
    });
  }

}); // Jeden, prawidłowy nawias zamykający na sam koniec pliku
