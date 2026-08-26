/* Somnium Atlas — minimal progressive enhancement */

(function () {
  'use strict';

  /* Nav: add .scrolled class once page scrolls past the nav height */
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Hero parallax: subtle upward drift on the background image */
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var offset = window.scrollY;
      heroBg.style.transform = 'scale(1.05) translateY(' + (offset * 0.18) + 'px)';
    }, { passive: true });
  }

  /* Table of contents: highlight the active section */
  var tocLinks = document.querySelectorAll('.notes-toc a');
  if (tocLinks.length) {
    var headings = Array.from(document.querySelectorAll('.notes-body h2[id]'));
    var onScrollToc = function () {
      var scrollY = window.scrollY + 100;
      var active = headings[0];
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].offsetTop <= scrollY) { active = headings[i]; }
      }
      tocLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + (active && active.id));
      });
    };
    window.addEventListener('scroll', onScrollToc, { passive: true });
    onScrollToc();
  }

  /* Fade-in on scroll for territory cards and entries */
  var fadeEls = document.querySelectorAll('.territory-card, .territory-entry, .callout');
  if ('IntersectionObserver' in window && fadeEls.length) {
    /* Set initial state */
    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '';
          entry.target.style.transform = '';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  }
})();
