// ============================
// Portfolio Website Scripts
// ============================

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const backToTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('.section, .hero');

  // ============================
  // 1. Dark / Light Mode Toggle
  // ============================
  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Apply saved/preferred theme on load
  applyTheme(getPreferredTheme());

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
    // Re-render lucide icons so they pick up color changes
    if (window.lucide) lucide.createIcons();
  });

  // ============================
  // 2. Mobile Hamburger Menu
  // ============================
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // ============================
  // 3. Smooth Scrolling for Nav Links
  // ============================
  navLinkItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // 9. Close mobile menu when a nav link is clicked
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ============================
  // 4. Active Nav Link on Scroll (Intersection Observer)
  // ============================
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -75% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // ============================
  // 5 & 6 & 7. Contact Form — Validation & Submission
  // ============================
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    // 6. Client-side validation
    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.classList.add('error');
      return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.classList.add('error');
      return;
    }

    // 5. Submit via Web3Forms fetch API
    const submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      // 7. Show success/error message
      if (result.success) {
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.classList.add('success');
        contactForm.reset();
      } else {
        formStatus.textContent = 'Something went wrong. Please try again.';
        formStatus.classList.add('error');
      }
    } catch {
      formStatus.textContent = 'Network error. Please check your connection and try again.';
      formStatus.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i data-lucide="send"></i> Send Message';
      if (window.lucide) lucide.createIcons();
    }
  });

  // ============================
  // 8. Back-to-Top Button
  // ============================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================
  // 11. Typewriter Effect
  // ============================
  const typedEl = document.getElementById('typed-subtitle');
  if (typedEl) {
    const text = typedEl.textContent.trim();
    typedEl.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    typedEl.appendChild(cursor);
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i]);
        i++;
        setTimeout(typeChar, 55 + Math.random() * 50);
      }
    }
    setTimeout(typeChar, 950);
  }

  // ============================
  // 12. Glitch Effect on Hero Name
  // ============================
  const glitchEl = document.getElementById('glitch-name');
  if (glitchEl) {
    function triggerGlitch() {
      glitchEl.classList.add('glitch');
      setTimeout(() => glitchEl.classList.remove('glitch'), 280);
      setTimeout(triggerGlitch, 4500 + Math.random() * 3500);
    }
    setTimeout(triggerGlitch, 2200);
  }

  // ============================
  // 13. Scroll Reveal
  // ============================
  const revealTargets = document.querySelectorAll(
    '.section-title, .about-text, .skills-category, .project-card, .contact-text, .contact-form'
  );
  revealTargets.forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(idx % 4) * 0.1}s`;
  });
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));

  // ============================
  // 10. Tech Background Canvas
  // ============================
  const techCanvas = document.getElementById('tech-bg');
  const techCtx = techCanvas.getContext('2d');
  const PARTICLE_COUNT = 70;
  const MAX_CONNECT = 130;
  let techParticles = [];

  function resizeTechCanvas() {
    techCanvas.width = window.innerWidth;
    techCanvas.height = window.innerHeight;
  }

  function initTechParticles() {
    techParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * techCanvas.width,
      y: Math.random() * techCanvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.5 + 0.5,
    }));
  }

  function drawTechFrame() {
    techCtx.clearRect(0, 0, techCanvas.width, techCanvas.height);
    const isDark = html.getAttribute('data-theme') === 'dark';
    const rgb = isDark ? '56,189,248' : '37,99,235';
    const dotAlpha = isDark ? 0.75 : 0.45;
    const lineAlphaMax = isDark ? 0.22 : 0.12;

    techParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > techCanvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > techCanvas.height) p.vy *= -1;
      techCtx.beginPath();
      techCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      techCtx.fillStyle = `rgba(${rgb},${dotAlpha})`;
      techCtx.fill();
    });

    for (let i = 0; i < techParticles.length; i++) {
      for (let j = i + 1; j < techParticles.length; j++) {
        const dx = techParticles[i].x - techParticles[j].x;
        const dy = techParticles[i].y - techParticles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_CONNECT) {
          techCtx.strokeStyle = `rgba(${rgb},${(1 - dist / MAX_CONNECT) * lineAlphaMax})`;
          techCtx.lineWidth = 0.8;
          techCtx.beginPath();
          techCtx.moveTo(techParticles[i].x, techParticles[i].y);
          techCtx.lineTo(techParticles[j].x, techParticles[j].y);
          techCtx.stroke();
        }
      }
    }
    requestAnimationFrame(drawTechFrame);
  }

  window.addEventListener('resize', () => {
    resizeTechCanvas();
    initTechParticles();
  }, { passive: true });

  resizeTechCanvas();
  initTechParticles();
  drawTechFrame();
});
