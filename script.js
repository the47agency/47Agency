/* ── Navbar scroll effect ──────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

/* ── Smooth scroll helper ─────────────────────────────── */
/* NOTE: named goTo to avoid shadowing native window.scrollTo */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; /* account for fixed navbar height */
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ── Mobile menu toggle ───────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ── Scroll-triggered fade-in animations ─────────────── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => el.classList.add('visible'), delay * 1000);
      fadeObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '-30px 0px' });

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
  .forEach(el => fadeObserver.observe(el));

/* ── Manifesto strikethrough trigger ─────────────────── */
const strikeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('struck');
      strikeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const strikeWord = document.querySelector('.strike-word');
if (strikeWord) strikeObserver.observe(strikeWord);

/* ── Contact form no-op submit ────────────────────────── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#16a34a';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
    }, 3000);
  });
}

/* ── Footer year ──────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
