// Main JS File

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle (with ARIA)
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      const icon = document.querySelector('#menu-btn i');
      const isHidden = menu.classList.toggle('hidden');
      // update aria attributes
      menu.setAttribute('aria-hidden', isHidden ? 'true' : 'false');
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', (!expanded).toString());
      // icon swap
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });

    // Hero Slider
    // const slides = document.querySelectorAll('.slide');
    // const dots = document.querySelectorAll('.dot');
    // let current = 0;
    // // mark initial dot pressed
    // if (dots.length) dots.forEach((d, i) => d.setAttribute('aria-pressed', i === 0 ? 'true' : 'false'));
    // setInterval(() => {
    //   slides[current].classList.remove('active');
    //   slides[current].style.opacity = '0';
    //   dots[current].classList.remove('bg-primary');
    //   dots[current].setAttribute('aria-pressed', 'false');
    //   current = (current + 1) % slides.length;
    //   slides[current].classList.add('active');
    //   slides[current].style.opacity = '1';
    //   dots[current].classList.add('bg-primary');
    //   dots[current].setAttribute('aria-pressed', 'true');
    // }, 5000);

    // Current Year
    document.getElementById('year').textContent = new Date().getFullYear();

  

    // Animate skill bars when the skills section enters the viewport
    (function () {
      const skillsSection = document.getElementById('skills');
      if (!skillsSection) return;
      const bars = Array.from(skillsSection.querySelectorAll('.skill-bar'));
      function animateBars() {
        bars.forEach(bar => {
          const level = parseInt(bar.getAttribute('data-level') || '0', 10);
          bar.style.width = level + '%';
          bar.setAttribute('aria-valuenow', level.toString());
        });
      }

      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateBars();
              observer.disconnect();
            }
          });
        }, { root: null, threshold: 0.2 });
        obs.observe(skillsSection);
      } else {
        // fallback: animate after a small delay
        window.addEventListener('load', () => setTimeout(animateBars, 500));
      }
    })();

    const swiper = new Swiper('.swiper', {
      // Optional parameters
        autoplay:false,
        loop: true,
        // autoplay: {
        // delay: 5000,
        // disableOnInteraction: false,
        // },
        navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    });


});
