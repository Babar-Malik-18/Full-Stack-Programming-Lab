const express = require('express');
const app = express();
const PORT = 3002;

const pages = {
  home: {
    emoji: '🏠', label: 'HOME',
    title: 'Welcome Home',
    sub: 'You\'ve arrived at the starting point',
    desc: 'This is the home page of your Express application. Every great web app starts here — a central hub where users land, orient themselves, and begin their journey.',
    accent: '#6366f1',
    glow1: '#6366f1', glow2: '#8b5cf6',
    mesh: 'radial-gradient(ellipse 80% 60% at 20% 0%,rgba(99,102,241,.25) 0%,transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%,rgba(139,92,246,.2) 0%,transparent 60%)',
    next: 'about', nextLabel: 'About →',
    fact: 'Route: /home',
  },
  about: {
    emoji: '✦',  label: 'ABOUT',
    title: 'About Us',
    sub: 'Learn what we\'re all about',
    desc: 'This is the about page. Here you tell your story — who you are, what you do, and why it matters. Built with pure Node.js and Express, no framework overhead.',
    accent: '#ec4899',
    glow1: '#ec4899', glow2: '#f43f5e',
    mesh: 'radial-gradient(ellipse 80% 60% at 80% 0%,rgba(236,72,153,.25) 0%,transparent 70%), radial-gradient(ellipse 60% 50% at 10% 100%,rgba(244,63,94,.2) 0%,transparent 60%)',
    next: 'contact', nextLabel: 'Contact →',
    fact: 'Route: /about',
  },
  contact: {
    emoji: '✉',  label: 'CONTACT',
    title: 'Get In Touch',
    sub: 'We\'d love to hear from you',
    desc: 'This is the contact page. In a real app, this would hold a form, email address, or social links. For now, it demonstrates dynamic Express routing perfectly.',
    accent: '#10b981',
    glow1: '#10b981', glow2: '#06b6d4',
    mesh: 'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(16,185,129,.22) 0%,transparent 70%), radial-gradient(ellipse 60% 50% at 80% 90%,rgba(6,182,212,.18) 0%,transparent 60%)',
    next: 'home', nextLabel: '← Home',
    fact: 'Route: /contact',
  },
};

function buildPage(key) {
  const p = pages[key];
  const navLinks = Object.entries(pages).map(([k, v]) =>
    `<a href="/${k}" class="nav-link ${k === key ? 'active' : ''}" style="${k === key ? `--c:${p.accent}` : ''}">
      ${v.emoji} ${v.label}
    </a>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${p.title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--accent:${p.accent}}

    html,body{height:100%}

    body {
      font-family:'DM Sans',sans-serif;
      background:#08090f;
      color:#f8fafc;
      min-height:100vh;
      display:flex;flex-direction:column;
      overflow-x:hidden;
    }

    /* mesh background */
    .mesh {
      position:fixed;inset:0;z-index:0;pointer-events:none;
      background:${p.mesh};
    }

    /* animated orbs */
    .orb {
      position:fixed;border-radius:50%;filter:blur(100px);
      pointer-events:none;z-index:0;
    }
    .orb1{
      width:500px;height:500px;
      background:${p.glow1};opacity:.12;
      top:-200px;left:-150px;
      animation:orbFloat1 14s ease-in-out infinite alternate;
    }
    .orb2{
      width:400px;height:400px;
      background:${p.glow2};opacity:.1;
      bottom:-150px;right:-100px;
      animation:orbFloat2 18s ease-in-out infinite alternate;
    }

    /* NAV */
    nav {
      position:relative;z-index:10;
      display:flex;justify-content:space-between;align-items:center;
      padding:1.2rem 2.5rem;
      border-bottom:1px solid rgba(255,255,255,.06);
      backdrop-filter:blur(20px);
      background:rgba(8,9,15,.6);
    }

    .nav-brand {
      font-family:'Bebas Neue',sans-serif;
      font-size:1.3rem;letter-spacing:.15em;
      color:rgba(255,255,255,.25);
    }

    .nav-links{display:flex;gap:.4rem;}

    .nav-link {
      text-decoration:none;font-size:.72rem;font-weight:600;
      letter-spacing:.12em;text-transform:uppercase;
      padding:.45rem 1.1rem;border-radius:100px;
      border:1px solid transparent;
      color:rgba(255,255,255,.35);
      transition:all .2s ease;
    }
    .nav-link:hover{color:rgba(255,255,255,.7);background:rgba(255,255,255,.06);}
    .nav-link.active{
      color:var(--c, var(--accent));
      background:color-mix(in srgb, var(--c, var(--accent)) 12%, transparent);
      border-color:color-mix(in srgb, var(--c, var(--accent)) 30%, transparent);
    }

    /* MAIN */
    main {
      position:relative;z-index:2;
      flex:1;display:flex;flex-direction:column;
      align-items:center;justify-content:center;
      padding:4rem 2rem;
      text-align:center;
    }

    .page-label {
      display:inline-block;
      font-family:'Bebas Neue',sans-serif;
      font-size:.75rem;letter-spacing:.4em;
      color:var(--accent);
      background:color-mix(in srgb, var(--accent) 12%, transparent);
      border:1px solid color-mix(in srgb, var(--accent) 30%, transparent);
      padding:.35rem 1.2rem;border-radius:100px;
      margin-bottom:2rem;
      animation:popIn .5s cubic-bezier(.34,1.56,.64,1) both;
    }

    .big-emoji {
      font-size:4.5rem;line-height:1;
      margin-bottom:1.5rem;display:block;
      filter:drop-shadow(0 0 30px color-mix(in srgb, var(--accent) 60%, transparent));
      animation:floatEmoji 4s ease-in-out infinite;
    }

    h1 {
      font-family:'Bebas Neue',sans-serif;
      font-size:clamp(4rem,10vw,8rem);
      letter-spacing:.04em;line-height:.95;
      margin-bottom:1rem;
      animation:slideUp .6s .1s ease both;opacity:0;animation-fill-mode:forwards;
    }

    h1 .line1{
      display:block;
      background:linear-gradient(135deg,#fff 40%,rgba(255,255,255,.4));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
    }
    h1 .line2{
      display:block;color:var(--accent);
      -webkit-text-fill-color:var(--accent);
      text-shadow:0 0 60px color-mix(in srgb, var(--accent) 50%, transparent);
    }

    .sub-text {
      font-size:1rem;color:rgba(255,255,255,.35);font-weight:300;
      margin-bottom:2.5rem;
      animation:slideUp .6s .2s ease both;opacity:0;animation-fill-mode:forwards;
    }

    .desc-card {
      background:rgba(255,255,255,.03);
      border:1px solid rgba(255,255,255,.08);
      border-radius:20px;padding:1.6rem 2.4rem;
      max-width:540px;line-height:1.75;
      color:rgba(255,255,255,.5);font-size:.93rem;
      animation:slideUp .6s .3s ease both;opacity:0;animation-fill-mode:forwards;
      backdrop-filter:blur(12px);
      margin-bottom:2.5rem;
    }

    /* BOTTOM ROW */
    .bottom-row {
      display:flex;align-items:center;gap:1.5rem;
      animation:slideUp .6s .4s ease both;opacity:0;animation-fill-mode:forwards;
    }

    .next-btn {
      text-decoration:none;
      font-size:.85rem;font-weight:600;letter-spacing:.06em;
      color:var(--accent);
      background:color-mix(in srgb, var(--accent) 10%, transparent);
      border:1px solid color-mix(in srgb, var(--accent) 35%, transparent);
      padding:.65rem 1.8rem;border-radius:100px;
      transition:all .25s ease;
    }
    .next-btn:hover{
      background:color-mix(in srgb, var(--accent) 20%, transparent);
      transform:translateX(4px);
      box-shadow:0 0 24px color-mix(in srgb, var(--accent) 25%, transparent);
    }

    .fact-chip {
      font-size:.72rem;color:rgba(255,255,255,.2);letter-spacing:.1em;
      border:1px solid rgba(255,255,255,.06);padding:.4rem .9rem;border-radius:100px;
    }

    /* FOOTER */
    footer {
      position:relative;z-index:2;
      text-align:center;padding:1.4rem;
      font-size:.7rem;color:rgba(255,255,255,.1);letter-spacing:.12em;text-transform:uppercase;
      border-top:1px solid rgba(255,255,255,.04);
    }

    /* ANIMATIONS */
    @keyframes slideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    @keyframes popIn{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}
    @keyframes floatEmoji{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(2deg)}}
    @keyframes orbFloat1{from{transform:translate(0,0)}to{transform:translate(50px,40px)}}
    @keyframes orbFloat2{from{transform:translate(0,0)}to{transform:translate(-40px,-30px)}}
  </style>
</head>
<body>
  <div class="mesh"></div>
  <div class="orb orb1"></div>
  <div class="orb orb2"></div>

  <nav>
    <span class="nav-brand">Lab 10</span>
    <div class="nav-links">${navLinks}</div>
  </nav>

  <main>
    <span class="page-label">${p.fact}</span>
    <span class="big-emoji">${p.emoji}</span>
    <h1>
      <span class="line1">${p.title.split(' ')[0]}</span>
      <span class="line2">${p.title.split(' ').slice(1).join(' ') || p.title}</span>
    </h1>
    <p class="sub-text">${p.sub}</p>
    <div class="desc-card">${p.desc}</div>
    <div class="bottom-row">
      <a href="/${p.next}" class="next-btn">${p.nextLabel}</a>
      <span class="fact-chip">Express GET Route</span>
    </div>
  </main>

  <footer>Lab 10 · Task 2 · Node.js + Express · Message Routes</footer>
</body>
</html>`;
}

app.get('/home',    (req, res) => res.send(buildPage('home')));
app.get('/about',   (req, res) => res.send(buildPage('about')));
app.get('/contact', (req, res) => res.send(buildPage('contact')));
app.get('/',        (req, res) => res.redirect('/home'));

app.listen(PORT, () => {
  console.log(`✅ Task 2 → http://localhost:${PORT}`);
  console.log(`   /home  /about  /contact`);
});