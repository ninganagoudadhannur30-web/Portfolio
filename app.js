/* =============================================
   NINGANAGOUDDA PORTFOLIO — JS
   ============================================= */

// ===== CURSOR =====
const cursor = document.getElementById('cursor');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  cx += (mx - cx) * 0.13;
  cy += (my - cy) * 0.13;
  if (cursor) { cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px'; }
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .pcard').forEach(el => {
  el.addEventListener('mouseenter', () => cursor && cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('big'));
});

document.addEventListener('mouseleave', () => cursor && (cursor.style.opacity = '0'));
document.addEventListener('mouseenter', () => cursor && (cursor.style.opacity = '1'));


// ===== SCROLL FADE-IN =====
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 55);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pcard, .tl-item, .skl-col, .contact-left, .contact-right, .about-left, .about-right, .stat').forEach(el => {
  el.classList.add('fi');
  obs.observe(el);
});


// ===== SKILL BARS =====
const bObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bfill').forEach(b => {
        setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 250);
      });
      bObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => bObs.observe(el));


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});


// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
const fok  = document.getElementById('formOk');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Sent ✓';
      fok.classList.add('show');
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        fok.classList.remove('show');
      }, 4000);
    }, 1000);
  });
}


// ===== TICKER PAUSE =====
const track = document.querySelector('.ticker-track');
if (track) {
  track.parentElement.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.parentElement.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}


// ===== NAV ACTIVE LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#f5f5f5' : '';
  });
});


// ===== CONSOLE =====
console.log('%cNINGANAGOUDDA M D', 'font-size:22px;font-weight:900;color:#fff;font-family:monospace;');
console.log('%cFinal Year CSE · VVCE · Open to opportunities 2026', 'font-size:11px;color:#666;font-family:monospace;');
