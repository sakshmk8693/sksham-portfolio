/* ═══════════════════════════════════════════
   PORTFOLIO SCRIPT — SAKSHAM KAUSHIK
   ═══════════════════════════════════════════ */

const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
const torch = document.getElementById('cursorTorch');

const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

/* ── CUSTOM CURSOR (DESKTOP ONLY) ── */
if (!isTouchDevice) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let torchOpacity = 0;
  let lastMouseX = mouseX;
  let lastMouseY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if(dot) { dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`; }
  });

  function animateCursorElements() {
    if(!ring || !torch) return;
    const dxRing = mouseX - ringX;
    const dyRing = mouseY - ringY;
    
    ringX += dxRing * 0.80; 
    ringY += dyRing * 0.80;
    
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    torch.style.left = `${mouseX}px`;
    torch.style.top = `${mouseY}px`;

    const vx = mouseX - lastMouseX;
    const vy = mouseY - lastMouseY;
    const mouseVelocity = Math.sqrt(vx * vx + vy * vy);
    
    if (mouseVelocity > 2) { 
      torchOpacity = Math.min(torchOpacity + 0.1, 1);
    } else {
      torchOpacity = Math.max(torchOpacity - 0.05, 0); 
    }
    
    torch.style.opacity = torchOpacity;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    
    requestAnimationFrame(animateCursorElements);
  }
  animateCursorElements();

  const hoverTargets = 'a, button, input, textarea, label, .chip, .meta-tag, .btn-live, .contact-link-item, .glass-card, i, .nav-link';
  document.addEventListener('mouseover', (e) => {
    if (ring && e.target.closest(hoverTargets)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (ring && e.target.closest(hoverTargets)) ring.classList.remove('hover');
  });

  document.addEventListener('mouseleave', () => {
    if(dot) dot.style.opacity = '0'; 
    if(ring) ring.style.opacity = '0'; 
    torchOpacity = 0;
  });
  document.addEventListener('mouseenter', () => {
    if(dot) dot.style.opacity = '1'; 
    if(ring) ring.style.opacity = '1';
  });
}

/* ── PRELOADER ── */
window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('preloaderNumber');
  const bar = document.getElementById('preloaderBar');
  const overlay = document.getElementById('preloader');
  
  if (!el || !bar || !overlay) return;

  let count = 0; const target = 100; const duration = 1000; const steps = 50;
  const intervalMs = duration / steps;
  function easeOutQuart(t) { return 1 - (--t) * t * t * t; }

  let frame = 0;
  const timer = setInterval(() => {
    frame++;
    const progress = easeOutQuart(frame / steps);
    count = Math.min(Math.round(progress * target), target);
    el.textContent = count;
    bar.style.width = count + '%';

    if (frame >= steps) {
      clearInterval(timer);
      el.textContent = '100'; bar.style.width = '100%';

      setTimeout(() => {
        overlay.classList.add('done');
        const heroText = document.querySelector('.hero-massive-text');
        if (heroText) heroText.classList.add('animate');
        setTimeout(() => overlay.remove(), 800);
      }, 200);
    }
  }, intervalMs);
});

/* ── NAVBAR & SCROLL LOGIC ── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinksList = document.getElementById('navLinks');

let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
      updateActiveNav();
      cinematicScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

if (hamburger && navLinksList) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksList.classList.toggle('open');
    document.body.style.overflow = navLinksList.classList.contains('open') ? 'hidden' : '';
  });

  navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksList.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

const sections = document.querySelectorAll('section[id]');
function updateActiveNav() {
  const scrollY = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) { link.classList.add('active'); } 
      else { link.classList.remove('active'); }
    }
  });
}

/* ── HERO 3D SCROLL (DESKTOP) ── */
const hero3d = document.getElementById('hero3d');
const heroCartoon = document.getElementById('heroCartoon');

function cinematicScroll() {
  if (!hero3d || window.innerWidth < 1024) return; 
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
  if (scrollY > vh + 200) return;

  const progress = Math.min(scrollY / vh, 1); 
  const rotX = progress * 5;        
  const rotY = progress * -2;        
  const translateZ = progress * -40; 
  const scale = 1 - progress * 0.03;

  hero3d.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${translateZ}px) scale(${scale})`;

  if (heroCartoon) {
    const cartoonY = -50 + progress * -15;
    heroCartoon.style.transform = `translateY(${cartoonY}%) translateZ(-50px) scale(1)`;
  }
}

/* ── REVEAL ANIMATIONS ── */
const revealElements = document.querySelectorAll('.reveal-item');
if (revealElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const item = entry.target;
        const idx = item.dataset.index || 0;
        setTimeout(() => { item.classList.add('visible'); }, idx * 80);
        observer.unobserve(item);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -10px 0px' });

  revealElements.forEach((el, index) => {
    if (!el.hasAttribute('data-index')) el.setAttribute('data-index', index % 4); 
    observer.observe(el);
  });
}

/* ── CONTACT FORM LOGIC ── */
const form = document.getElementById('contactForm');
const btnText = document.getElementById('btnText');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();
    if (!name || !email || !message) return;

    if (btnText) btnText.innerHTML = '<i class="fa-solid fa-lock"></i> ENCRYPTING...';
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) submitBtn.disabled = true;

    const subject = encodeURIComponent("New Requirement / Uplink from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=Sakshmkaushik96@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank");

    setTimeout(() => {
      if (formSuccess) formSuccess.style.display = 'block';
      if (btnText) btnText.innerHTML = '<i class="fa-solid fa-paper-plane"></i> TRANSMIT DATA';
      if (submitBtn) submitBtn.disabled = false;
      form.reset();
      setTimeout(() => { if (formSuccess) formSuccess.style.display = 'none'; }, 5000);
    }, 1200);
  });
}

/* ── THEME TOGGLE ── */
const modeSwitch = document.getElementById('mode-switch');
if (modeSwitch) {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    modeSwitch.checked = true;
  }
  modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}

/* ══════════════════════════════════════════════
   MOBILE SPECIFIC INTERACTION LOGIC
   ══════════════════════════════════════════════ */

if (isTouchDevice) {
  // NORMAL CARDS: ONLY CLICK TO EXPAND
  const cards = document.querySelectorAll('.interactive-card');
  cards.forEach(card => {
    // About wale box ko chhod kar baaki sab par ye rule lagega
    if (card.id !== 'aboutRightCard') {
      card.addEventListener('click', (e) => {
        // Agar andar kisi button ya link par tap kiya hai, toh card band/open mat karna
        if (!e.target.closest('a, button')) {
          card.classList.toggle('in-view');
        }
      });
    }
  });
}

/* ── ABOUT CARD 3-STAGE LOGIC ── */
// 1. Box par click karne par half expand hoga
document.getElementById('aboutRightCard')?.addEventListener('click', function(e) {
  if (window.innerWidth <= 768) {
    // Agar view more button nahi dabaya hai, aur pehle se aadha ya pura khula hua nahi hai
    if (!e.target.closest('#viewMoreBtn') && !this.classList.contains('half-expanded') && !this.classList.contains('fully-expanded')) {
      this.classList.add('half-expanded');
    }
  }
});

// 2. View More button par click karne par fully expand hoga
// Ye function HTML mein onClick se call ho raha hai
window.expandAboutFully = function(event) {
  event.stopPropagation(); // Box ke normal click ko trigger hone se rokna
  const card = document.getElementById('aboutRightCard');
  if (card) {
    card.classList.remove('half-expanded');
    card.classList.add('fully-expanded');
  }
};