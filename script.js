@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Outfit:wght@300;400;600;800;900&display=swap');

/* ── GLOBAL ELEMENTS (TEXT OVERFLOW FIX) ── */
*, *::before, *::after { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}
a { text-decoration: none !important; }
p, h1, h2, h3, h4, span, div { 
  overflow-wrap: break-word; 
  word-wrap: break-word; 
  word-break: break-word;
}

:root {
  --bg-core:         #020306; /* Pura dark background high contrast ke liye */
  --panel-bg:        rgba(10, 14, 26, 0.85); /* Darker and more solid glassmorphism */
  --text-main:       #ffffff; /* Ekdum pure white high visibility ke liye */
  --text-dim:        #cbd5e1; /* Brighter grey-white text paragraphs ke liye */
  
  --accent-primary:  #00f0ff; /* Super Bright Electric Cyan */
  --accent-secondary:#9d4edd; /* High-Vibrancy Purple */
  --alert-red:       #ff0055;
  --neon-orange:     #ff6b00;

  --font:            'Outfit', sans-serif;
  --mono:            'Fira Code', monospace;
  --ease:            cubic-bezier(0.16, 1, 0.3, 1);
}

html { scroll-behavior: smooth; overflow-x: hidden; width: 100vw; }

body {
  font-family: var(--font);
  background: var(--bg-core);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  cursor: none; 
}

/* ── HIGH VISIBILITY BACKGROUND ── */
.ambient-bg {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: -2; overflow: hidden; pointer-events: none;
  background-image: 
    linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
.glow-orb {
  position: absolute; border-radius: 50%; filter: blur(150px); opacity: 0.35;
  animation: float 20s infinite alternate ease-in-out;
}
.orb-1 { width: 800px; height: 800px; background: var(--accent-secondary); top: -10%; left: -10%; }
.orb-2 { width: 600px; height: 600px; background: var(--accent-primary); bottom: -20%; right: -10%; animation-delay: -5s; }

@keyframes float { 100% { transform: translate(50px, 50px) scale(1.1); } }

.star-fall { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: -1; }
.star-fall span {
  position: absolute; width: 1px; height: 150px;
  background: linear-gradient(to bottom, transparent, var(--accent-primary));
  animation: fall linear infinite; opacity: 0;
}
.star-fall span::after {
  content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 3px; height: 3px; background: #ffffff; border-radius: 100%;
  box-shadow: 0 0 10px 3px var(--accent-primary), 0 0 20px 5px #ffffff;
}
@keyframes fall {
  0% { transform: translateY(-200px); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

/* ── CURSOR EFFECTS ── */
.cursor-dot { position: fixed; width: 4px; height: 4px; background: var(--accent-primary); border-radius: 50%; pointer-events: none; z-index: 10001; transform: translate(-50%, -50%); box-shadow: 0 0 12px var(--accent-primary); transition: background 0.2s;}
.cursor-ring { 
  position: fixed; width: 28px; height: 28px; border-radius: 50%; pointer-events: none; z-index: 10000; 
  transform: translate(-50%, -50%); transition: width 0.3s, height 0.3s, background 0.3s, border-color 0.3s; 
  border: 1.5px solid var(--accent-primary); background: transparent;
}
.cursor-ring.hover { 
  width: 45px; height: 45px; background: rgba(0, 229, 255, 0.08); border: 1.5px solid var(--accent-primary);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4); animation: cursorMotion 2s linear infinite;
}
@keyframes cursorMotion {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.05); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}
.cursor-torch { position: fixed; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, rgba(255,255,255,0) 65%); pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); opacity: 0; transition: opacity 0.5s ease; }

@media (hover: none) and (pointer: coarse) {
  .cursor-dot, .cursor-ring, .cursor-torch { display: none !important; }
}

/* ── COMMON SECTIONS (HIGH CONTRAST BORDERS) ── */
.section { position: relative; z-index: 5; width: 100%; padding: 5rem 0; margin-top: 2rem; }
.section-boundary {
  background: rgba(8, 12, 24, 0.8); 
  border: 1px solid rgba(0, 240, 255, 0.2); /* Glowing Border */
  border-radius: 20px; padding: 4rem; backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(0,0,0,0.6);
}
.hero-boundary { border: none; background: transparent; box-shadow: none; padding: 0; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }
.container { width: 100%; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10;}

.section-header-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 3.5rem; flex-wrap: wrap; }
.section-num { font-family: var(--mono); font-size: 1rem; color: var(--accent-primary); font-weight: 700; text-shadow: 0 0 8px rgba(0,240,255,0.4); }
.section-big-title { font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 900; color: var(--text-main); letter-spacing: -1px; text-transform: uppercase; text-shadow: 0 0 15px rgba(255,255,255,0.1); }

/* ── PRELOADER & STYLISH NAVBAR ── */
.preloader { position: fixed; inset: 0; background: var(--bg-core); z-index: 99999; display: flex; align-items: center; justify-content: center; transition: opacity 0.6s ease; }
.preloader.done { opacity: 0; pointer-events: none; }
.preloader-content { text-align: center; }
.preloader-number { font-family: var(--mono); font-size: 4rem; font-weight: 800; color: var(--accent-primary); text-shadow: 0 0 15px var(--accent-primary); }
.preloader-number::after { content: '%'; font-size: 2rem; color: var(--text-dim); }
.preloader-bar-track { width: 250px; height: 4px; background: rgba(255,255,255,0.1); margin: 1rem auto; border-radius: 2px; overflow: hidden; }
.preloader-bar-fill { height: 100%; width: 0%; background: var(--accent-primary); box-shadow: 0 0 10px var(--accent-primary); }
.preloader-label { font-family: var(--mono); font-size: 0.85rem; color: var(--text-dim); letter-spacing: 2px; }

.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 4%; background: transparent; transition: all 0.4s ease; border-bottom: 1px solid transparent; width: 100vw; }
.navbar.scrolled { padding: 1rem 4%; background: rgba(4, 6, 12, 0.9); backdrop-filter: blur(20px); border-bottom-color: rgba(0, 240, 255, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.nav-logo { font-family: var(--mono); font-size: 1.2rem; font-weight: 700; color: var(--text-main); letter-spacing: 1px; white-space: nowrap; }
.nav-links { display: flex; gap: 1.5rem; list-style: none; align-items: center; }
.nav-link { font-family: var(--mono); font-size: 0.85rem; font-weight: 600; color: var(--text-dim); padding: 0.5rem 0.8rem; transition: all 0.3s; position: relative;}
.nav-link::after { content:''; position:absolute; left:0; bottom:0; width:0%; height:2px; background:var(--accent-primary); transition:width 0.3s; box-shadow: 0 0 12px var(--accent-primary);}
.nav-link:hover::after, .nav-link.active::after { width:100%; }
.nav-link:hover, .nav-link.active { color: var(--accent-primary); text-shadow: 0 0 10px rgba(0, 240, 255, 0.6); }
.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; z-index: 110; cursor: pointer; }
.hamburger span { display: block; width: 25px; height: 2px; background: var(--text-main); border-radius: 2px; transition: all 0.3s;}

/* ── HERO SECTION ── */
.hero { display: flex; flex-direction: column; justify-content: center; min-height: 100vh; padding-top: 6rem;}
.hero-3d-wrapper { width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 4%; position: relative; will-change: transform;}
.hero-cartoon { position: absolute; right: 0%; top: 50%; transform: translateY(-50%) translateZ(-50px) scale(1); width: 550px; opacity: 0.3; z-index: 0; pointer-events: none;}
.hero-cartoon img { width: 100%; height: auto; border-radius: 20px; filter: drop-shadow(0 0 25px rgba(0, 240, 255, 0.3)); }
.hero-massive-text { margin-bottom: 3rem; position: relative; z-index: 1; text-align: left; }
.hero-massive-text .line { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; line-height: 1.05; color: var(--text-main); opacity: 0; transform: translateY(20px); letter-spacing: -1px; text-transform: uppercase;}
.hero-massive-text.animate .line { animation: slideUp 0.6s var(--ease) forwards; }
.hero-massive-text.animate .line-1 { animation-delay: 0.1s; color: #ffffff; }
.hero-massive-text.animate .gradient-text-cyber { animation-delay: 0.2s; background: linear-gradient(270deg, var(--alert-red), var(--neon-orange), var(--accent-secondary), var(--alert-red)); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: slideUp 0.6s var(--ease) forwards, fireGradient 6s ease infinite; }
@keyframes fireGradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
.hero-massive-text.animate .line-4 { animation-delay: 0.4s; color: #ffffff; }
@keyframes slideUp { 100% { opacity: 1; transform: translateY(0); } }

.hero-bottom { display: flex; justify-content: space-between; align-items: center; gap: 3rem; z-index: 2; position: relative; flex-wrap: wrap; }
.hero-bottom-left { flex: 1; min-width: 300px; }
.hero-bottom-right { flex: 1; min-width: 300px; }
.hero-tech-chips { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.chip { font-family: var(--mono); font-size: 0.8rem; font-weight: 600; padding: 0.5rem 1rem; color: var(--text-main); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 8px; transition: all 0.3s; background: rgba(0, 240, 255, 0.03);}
.chip i { margin-right: 5px; color: var(--accent-primary); }
.chip:hover { background: rgba(0, 240, 255, 0.1); color: var(--accent-primary); border-color: var(--accent-primary); transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 240, 255, 0.3);}
.hero-description { font-size: 1.05rem; color: var(--text-dim); line-height: 1.8; margin-bottom: 1.5rem; font-weight: 400;}

/* ── GLASS CARDS (BRIGHT & CRISP) ── */
.glass-card { 
  position: relative; background: var(--panel-bg); border-radius: 16px; 
  padding: 2.2rem; z-index: 1; border: 1px solid rgba(0, 240, 255, 0.15); 
  box-shadow: 0 15px 40px rgba(0,0,0,0.5); 
  backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); 
  transition: transform 0.4s var(--ease), box-shadow 0.4s ease, border-color 0.4s, background 0.4s; 
  width: 100%; overflow: hidden; 
}
.glass-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(0, 240, 255, 0.15), transparent); transform: skewX(-25deg); transition: 0.7s ease-in-out; z-index: 10; pointer-events: none; }
.glass-card > * { position: relative; z-index: 4; }
.interactive-card { -webkit-tap-highlight-color: transparent; will-change: transform, box-shadow; }

.interactive-card:hover, .interactive-card.in-view { 
  transform: translateY(-5px); 
  box-shadow: 0 20px 45px rgba(0, 240, 255, 0.2); 
  border-color: var(--accent-primary); 
  background: rgba(14, 20, 38, 0.95);
  z-index: 10; 
}
.interactive-card:hover::before, .interactive-card.in-view::before { left: 150%; }

/* Moving Cyber Glowing Border */
.glass-card::after { content: ''; position: absolute; inset: 0; border-radius: 16px; padding: 1.5px; background: linear-gradient(115deg, var(--accent-primary), var(--accent-secondary), var(--alert-red), var(--neon-orange), var(--accent-primary)); background-size: 300% 300%; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: 5; opacity: 0; transition: opacity 0.4s ease; pointer-events: none; }
.interactive-card:hover::after, .interactive-card.in-view::after { opacity: 1; animation: movingColorfulLight 3s linear infinite; }
@keyframes movingColorfulLight { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

/* ── BUTTONS & LINKS ── */
.cta-outline { display: inline-flex; align-items: center; gap: 0.8rem; font-family: var(--mono); font-size: 0.9rem; font-weight: 700; padding: 0.6rem 1.2rem; background: rgba(0, 240, 255, 0.08); color: var(--text-main); border: 1.5px solid var(--accent-primary); border-radius: 8px; transition: all 0.3s ease; box-shadow: 0 0 10px rgba(0, 240, 255, 0.1); }
.cta-outline:hover { background: var(--accent-primary); color: var(--bg-core); border-color: var(--accent-primary); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4); }
.cta-outline .arrow-circle { font-size: 1.2rem; transition: transform 0.3s; font-family: system-ui;}
.cta-outline:hover .arrow-circle { transform: translateX(5px); }
.btn-live { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.8rem; font-weight: 700; color: var(--accent-primary); background: rgba(0, 240, 255, 0.05); padding: 0.5rem 1rem; border-radius: 6px; border: 1px solid var(--accent-primary); transition: all 0.3s; margin-top: 0.5rem; box-shadow: 0 0 8px rgba(0,240,255,0.1); }
.btn-live:hover { background: var(--accent-primary); color: var(--bg-core); transform: translateY(-2px); box-shadow: 0 0 15px var(--accent-primary); }
.live-dot { width: 8px; height: 8px; background-color: #00ff88; border-radius: 50%; box-shadow: 0 0 8px #00ff88; animation: pulse 1.5s infinite; }
@keyframes pulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } 100% { opacity: 1; transform: scale(1); } }

/* ── ID CARD & PHOTO FIX (IMAGE BOUNDARY) ── */
.about-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem; width: 100%; }
.id-card-content { display: flex; flex-direction: column; height: 100%; justify-content: space-between; }
.profile-square-wrap { 
  width: 100%; flex: 1; min-height: 250px; margin-bottom: 1.5rem; 
  border-radius: 16px; padding: 2px; 
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); 
  background-size: 200% 200%; animation: squareGlow 5s ease infinite; 
  overflow: hidden; /* IMAGE BOUNDARY FIX - Image bahar nahi niklegi */
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 240, 255, 0.2);
}
.profile-img-square { 
  width: 100%; height: 100%; object-fit: cover; object-position: top center; 
  border-radius: inherit; display: block; background: transparent; 
}
.id-bottom-info { text-align: center; padding: 1.2rem; border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 12px; background: rgba(4, 6, 14, 0.6); }
.id-name { font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.2rem; letter-spacing: 1px; }
.id-title { font-family: var(--mono); font-size: 0.8rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 1rem; text-shadow: 0 0 5px rgba(0,240,255,0.3); }
.id-links { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;}
.id-links a { display: inline-flex; align-items: center; gap: 6px; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 8px; background: rgba(0, 240, 255, 0.02); font-size: 0.8rem; font-family: var(--mono); color: var(--text-main); transition: all 0.3s;}
.id-links a:hover { border-color: var(--accent-primary); color: var(--accent-primary); background: rgba(0, 240, 255, 0.08); transform: translateY(-2px); box-shadow: 0 0 10px rgba(0,240,255,0.2); }

.about-subtitle { font-family: var(--mono); font-size: 1.1rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 1.2rem; text-shadow: 0 0 5px rgba(0,240,255,0.3); }
.about-para { font-size: 1.05rem; color: var(--text-dim); line-height: 1.8; margin-bottom: 1.5rem; font-weight: 400;}

/* ── DESKTOP TEXT SCROLLER ── */
.profile-skills-scroller {
  margin-top: auto; padding-top: 1.5rem;
  display: flex; flex-direction: column; gap: 0.8rem;
  overflow: hidden; width: 100%;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
.scroller-track { display: flex; gap: 0.8rem; width: max-content; animation: scrollLeft 15s linear infinite; }
.track-reverse { animation: scrollRight 15s linear infinite; }
.skill-pill {
  padding: 0.4rem 1rem; font-family: var(--mono); font-size: 0.75rem; font-weight: 600;
  color: var(--accent-primary); background: rgba(0, 240, 255, 0.03);
  border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 12px;
  white-space: nowrap; transition: all 0.3s;
}
.skill-pill:hover { background: rgba(0, 240, 255, 0.1); border-color: var(--accent-primary); transform: scale(1.05); }

/* ── EDUCATION, EXPERIENCE & SKILLS (NO OVERFLOW) ── */
.certs-grid, .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; width: 100%; }
.cert-card { padding: 2rem; display: flex; flex-direction: column; justify-content: center;}
.cert-title { font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 10px; }
.cert-issuer { font-size: 0.85rem; color: var(--accent-primary); font-family: var(--mono); margin-bottom: 1rem; font-weight: 600; }
.cert-desc { font-size: 0.95rem; color: var(--text-dim); line-height: 1.6; }

.skill-group-title { font-family: var(--mono); font-size: 0.9rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.5rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(0,240,255,0.1); letter-spacing: 1px;}
.skill-group-title i { margin-right: 8px; color: var(--accent-primary); text-shadow: 0 0 5px var(--accent-primary);}
.skill-list { display: flex; flex-direction: column; gap: 1rem; }
.skill-item { display: flex; align-items: center; gap: 1rem; font-size: 0.95rem; color: var(--text-dim); transition: all 0.3s;}
.skill-item:hover { color: var(--text-main); transform: translateX(5px); }
.skill-line { width: 6px; height: 6px; background: rgba(0,240,255,0.3); transition: all 0.3s; border-radius: 50%;}
.skill-item:hover .skill-line { background: var(--accent-primary); width: 20px; border-radius: 4px; box-shadow: 0 0 8px var(--accent-primary);}

/* ── PROJECTS ── */
.project-list { display: flex; flex-direction: column; gap: 2rem; width: 100%; }
.project-item { display: flex; flex-direction: column; padding: 2.5rem; position: relative; overflow: hidden; }
.project-index { 
  position: absolute; right: 10px; bottom: -15px; 
  font-family: var(--font); font-size: 7rem; font-weight: 900; 
  color: rgba(255, 255, 255, 0.02); line-height: 1;
  z-index: 0; pointer-events: none; transition: all 0.5s ease;
}
.project-item:hover .project-index { color: rgba(0, 240, 255, 0.04); }
.project-body { z-index: 2; position: relative; width: 100%; }
.project-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; }
.project-name { font-size: 1.3rem; font-weight: 700; color: var(--text-main); flex: 1; display: flex; align-items: center; gap: 10px; text-shadow: 0 0 5px rgba(255,255,255,0.05); }
.project-name i { color: var(--accent-primary); font-size: 1.1rem; }
.project-desc { font-size: 1rem; color: var(--text-dim); line-height: 1.7; margin-bottom: 1.5rem; max-width: 85%; }
.project-meta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem; }
.meta-tag { display: inline-flex; align-items: center; font-family: var(--mono); font-size: 0.75rem; font-weight: 600; padding: 0.4rem 0.8rem; background: rgba(0, 240, 255, 0.02); border-radius: 6px; color: var(--text-dim); border: 1px solid rgba(0, 240, 255, 0.1); transition: all 0.3s;}
.project-item:hover .meta-tag { border-color: rgba(0, 240, 255, 0.4); color: var(--text-main); }
.project-challenge { display: flex; gap: 1rem; font-size: 0.95rem; color: var(--text-dim); padding-top: 1.5rem; border-top: 1px dashed rgba(0,240,255,0.1); }
.challenge-line { width: 3px; background: var(--accent-secondary); border-radius: 2px; box-shadow: 0 0 8px var(--accent-secondary); }

/* ── CONTACT & FORM ── */
.contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; width: 100%; }
.contact-headline { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; color: var(--text-main); }
.contact-headline span { color: var(--accent-primary); text-shadow: 0 0 10px rgba(0,240,255,0.3); }
.contact-link-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; padding: 1.2rem; border: 1px solid rgba(0, 240, 255, 0.15); border-radius: 12px; transition: all 0.3s; }
.contact-label { font-family: var(--mono); font-size: 0.8rem; font-weight: 600; color: var(--text-dim); min-width: 90px; }
.contact-value { font-size: 0.95rem; font-weight: 500; color: var(--text-main); flex: 1; }
.contact-arrow { font-size: 1.2rem; color: var(--text-dim); transition: transform 0.3s; margin-left: auto;}
.contact-link-item:hover { border-color: var(--accent-primary); box-shadow: 0 0 15px rgba(0,240,255,0.15); }
.contact-link-item:hover .contact-arrow { color: var(--accent-primary); transform: translateX(5px) translateY(-5px); }

.form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
.form-label { font-family: var(--mono); font-size: 0.85rem; font-weight: 600; color: var(--text-dim); }
.form-input { background: rgba(2,3,6,0.6); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 8px; padding: 1rem; font-family: var(--font); font-size: 0.95rem; color: var(--text-main); outline: none; transition: all 0.3s; width: 100%; }
.form-input:focus { border-color: var(--accent-primary); background: rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(0, 240, 255, 0.25);}
.btn-submit { display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%; font-family: var(--mono); font-size: 1rem; font-weight: 700; color: var(--bg-core); background: var(--text-main); border: none; border-radius: 8px; padding: 1rem; transition: all 0.3s; cursor: pointer;}
.btn-submit:hover { background: var(--accent-primary); transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4);}

/* ── FOOTER (PREMIUM GLOW) ── */
.footer { padding: 2rem 0; border-top: 1px solid rgba(0, 240, 255, 0.2); background: rgba(4, 6, 12, 0.9); width: 100%; backdrop-filter: blur(15px); box-shadow: 0 -10px 30px rgba(0,0,0,0.5); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-family: var(--mono); font-size: 0.85rem; font-weight: 600; color: var(--text-dim); }
.footer-left i { color: var(--accent-primary); text-shadow: 0 0 5px var(--accent-primary); }
.footer-right i { color: #00ff88; text-shadow: 0 0 5px #00ff88; }


/* ══════════════════════════════════════════════
   MOBILE & WORKaround FOR 3-STAGE CARD EXPANSION
   ══════════════════════════════════════════════ */
@media (max-width: 768px) {
  .section-boundary { padding: 2rem 1.5rem; border-radius: 16px; margin: 0 4%; width: 92%; }
  .navbar { padding: 1.2rem 5%; }
  .nav-links { display: none; position: fixed; inset: 0; background: rgba(3,4,8,0.99); flex-direction: column; justify-content: center; z-index: 105; }
  .nav-links.open { display: flex; }
  .hamburger { display: flex; }
  .section { padding: 3rem 0; margin-top: 1rem;}
  
  /* Hero Left Align Fix */
  .hero-3d-wrapper { padding: 0 !important; width: 100% !important; margin: 0 !important; }
  .hero-bottom { flex-direction: column; align-items: flex-start; gap: 2rem; width: 100% !important; padding: 0 1.5rem !important; margin: 0 !important; }
  .hero-massive-text { text-align: left !important; margin-left: 0 !important; margin-bottom: 2rem; width: 100% !important; padding: 0 1.5rem !important;}
  .hero-massive-text .line { font-size: clamp(2.1rem, 7vw, 2.8rem); letter-spacing: -1px; text-align: left !important; width: 100%; }
  .hero-bottom-left, .hero-bottom-right { width: 100% !important; max-width: 100%; text-align: left !important; padding: 0 !important; margin: 0 !important;}
  .hero-bottom-right { padding: 1.5rem !important; align-items: flex-start !important; }
  .hero-tech-chips { justify-content: flex-start !important; }
  .hero-cartoon { display: none !important; } 
  
  .about-layout { display: flex; flex-direction: column; gap: 1.5rem; }
  .contact-layout { display: flex; flex-direction: column; gap: 2rem; }
  .certs-grid, .skills-grid { grid-template-columns: 1fr; gap: 1rem; }

  /* ── FIX: ABOUT PROFILE 3-STAGE SMOOTH EXPANSION ── */
  #aboutRightCard {
    max-height: 90px; /* 1. Stage: Completely Shrunk */
    overflow: hidden;
    transition: max-height 0.6s var(--ease), background 0.4s, border-color 0.4s;
  }
  
  /* Card ka andar ka text wrap bhi limit mein rahega tabhi button dikhega */
  #aboutRightCard #aboutTextWrap {
    max-height: 0;
    opacity: 0;
    transition: max-height 0.6s var(--ease), opacity 0.4s ease;
  }

  /* 2. Stage: Half Expanded (Jab card par click hoga) */
  #aboutRightCard.half-expanded {
    max-height: 480px; /* Thoda space badaya taaki button perfect fit ho */
    border-color: rgba(0, 240, 255, 0.5);
  }
  #aboutRightCard.half-expanded #aboutTextWrap {
    max-height: 220px; /* Text itne par cut hoga aur nichhe button safe rahega */
    opacity: 1;
    overflow: hidden;
    position: relative;
  }
  /* Half state me gradient fade text ke upar taaki view more premium lage */
  #aboutRightCard.half-expanded #aboutTextWrap::after {
    content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 60px;
    background: linear-gradient(to top, var(--panel-bg), transparent);
    pointer-events: none;
  }

  /* 3. Stage: Fully Expanded (Jab button par click hoga) */
  #aboutRightCard.fully-expanded {
    max-height: 3000px;
  }
  #aboutRightCard.fully-expanded #aboutTextWrap {
    max-height: 2500px;
    opacity: 1;
  }
  #aboutRightCard.fully-expanded #aboutTextWrap::after { display: none; }

  /* Buttons visibility logic based on stages */
  #aboutRightCard #viewMoreBtn { display: none !important; }
  #aboutRightCard.half-expanded #viewMoreBtn { 
    display: inline-flex !important; 
    width: 100%;
    justify-content: center;
    box-shadow: 0 0 15px var(--accent-primary);
  }
  #aboutRightCard.fully-expanded #viewMoreBtn { display: none !important; }

  /* ── OTHER CARDS CLICK LOGIC (NO OVERFLOW) ── */
  .project-item, .cert-card { padding: 1.5rem; cursor: pointer; }
  .project-desc { max-width: 100%; }
  
  .project-desc, .project-challenge, .cert-desc, .project-meta-row, .cert-issuer {
    max-height: 0; opacity: 0; overflow: hidden; 
    margin: 0; padding: 0; border: none;
    transition: max-height 0.5s ease, opacity 0.4s ease, margin 0.3s ease;
  }

  .interactive-card.in-view .project-desc,
  .interactive-card.in-view .project-challenge,
  .interactive-card.in-view .cert-desc,
  .interactive-card.in-view .project-meta-row,
  .interactive-card.in-view .cert-issuer {
    max-height: 600px; opacity: 1; 
  }
  .interactive-card.in-view .project-desc, .interactive-card.in-view .cert-desc { margin-bottom: 1rem; }
  .interactive-card.in-view .cert-issuer { margin-bottom: 1rem; }
  .interactive-card.in-view .project-meta-row { margin-bottom: 1rem; }
  .interactive-card.in-view .project-challenge { margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed rgba(0,240,255,0.2); }
  
  .project-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .footer-inner { flex-direction: column; text-align: center; gap: 0.8rem; }
}

/* ── MOBILE TEXT RESPONSIVENESS (AUTO CHHOTA TEXT) ── */
@media (max-width: 768px) {
  .section-big-title { font-size: 1.7rem !important; }
  .about-subtitle { font-size: 1rem !important; margin-bottom: 0.8rem !important; }
  .about-para { font-size: 0.9rem !important; line-height: 1.6 !important; margin-bottom: 1rem !important; }
  .hero-description { font-size: 0.95rem !important; line-height: 1.6 !important; }
  .id-name { font-size: 1.3rem !important; }
  .id-title { font-size: 0.75rem !important; }
  .project-name, .cert-title { font-size: 1.1rem !important; }
  .project-desc, .cert-desc { font-size: 0.85rem !important; line-height: 1.5 !important; }
  .skill-group-title { font-size: 0.85rem !important; }
  .skill-item { font-size: 0.85rem !important; }
  .footer-inner { font-size: 0.75rem !important; }
}

@media (max-width: 480px) {
  .contact-link-item { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .contact-arrow { display: none; }
  .project-index { font-size: 4.5rem; }
}
