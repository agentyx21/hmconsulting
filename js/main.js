/* ============================================================
   HM Home Solutions — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav: transparent → solid on scroll ── */
  const nav = document.querySelector('.nav');
  const heroSection = document.querySelector('.hero, .page-hero');

  function updateNav() {
    if (!nav) return;
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('nav--scrolled', scrolled);
    if (heroSection && !scrolled) {
      nav.classList.add('nav--hero');
    } else {
      nav.classList.remove('nav--hero');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Mobile menu ── */
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Intersection Observer: fade-up animations ── */
  const fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Contact form: client-side validation + submission ── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      /* Simulate async send (replace with real endpoint / formspree / etc.) */
      setTimeout(() => {
        const notice = form.querySelector('.form-notice');
        if (notice) {
          notice.textContent = 'Message received. We\'ll be in touch shortly.';
          notice.style.color = '#2D8A4E';
          notice.style.fontWeight = '500';
        }
        btn.textContent = 'Message Sent';
        btn.style.background = '#2D8A4E';
        form.querySelectorAll('input, select, textarea').forEach(el => {
          el.value = '';
        });
      }, 1400);
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
