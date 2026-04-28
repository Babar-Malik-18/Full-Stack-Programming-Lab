const express = require('express');
const app = express();
const PORT = 3003;

function hashCode(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return Math.abs(h);
}

const themes = [
  { accent:'#22d3ee', shadow:'#22d3ee', glow:'rgba(34,211,238,.15)', grad:'linear-gradient(135deg,#164e63,#0e7490)' },
  { accent:'#a78bfa', shadow:'#a78bfa', glow:'rgba(167,139,250,.15)', grad:'linear-gradient(135deg,#2e1065,#4c1d95)' },
  { accent:'#34d399', shadow:'#34d399', glow:'rgba(52,211,153,.15)', grad:'linear-gradient(135deg,#064e3b,#065f46)' },
  { accent:'#f472b6', shadow:'#f472b6', glow:'rgba(244,114,182,.15)', grad:'linear-gradient(135deg,#500724,#881337)' },
  { accent:'#fb923c', shadow:'#fb923c', glow:'rgba(251,146,60,.15)',  grad:'linear-gradient(135deg,#431407,#7c2d12)' },
  { accent:'#facc15', shadow:'#facc15', glow:'rgba(250,204,21,.15)',  grad:'linear-gradient(135deg,#422006,#713f12)' },
];

const greetings = ['Hello', 'Hey there', 'Welcome', 'Hi', 'Greetings', 'Howdy'];
const taglines  = [
  'Great to have you here!',
  'The legend has entered the chat.',
  'Ready to build something amazing?',
  'You look absolutely fantastic today.',
  'This page was made just for you.',
  'Making the internet a better place.',
];

app.get('/user/:name', (req, res) => {
  const raw  = req.params.name;
  const name = raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
  const hash = hashCode(name);
  const t    = themes[hash % themes.length];
  const greet   = greetings[hash % greetings.length];
  const tagline = taglines[(hash >> 3) % taglines.length];
  const initials = name.slice(0, 2).toUpperCase();

  const suggestions = ['Ali','Sara','Omar','Fatima','Bilal','Hina']
    .filter(n => n.toLowerCase() !== name.toLowerCase())
    .slice(0, 4);

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Hello, ${name}!</title>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --accent:${t.accent};
      --glow:${t.glow};
      --grad:${t.grad};
    }

    body{
      font-family:'Lexend',sans-serif;
      min-height:100vh;
      background:#060810;
      color:#f1f5f9;
      display:flex;flex-direction:column;
      align-items:center;justify-content:center;
      padding:2rem;
      overflow:hidden;
    }

    /* ── PARTICLE CANVAS ── */
    canvas{position:fixed;inset:0;z-index:0;pointer-events:none;}

    /* ── GRID LINES ── */
    .grid{
      position:fixed;inset:0;z-index:0;pointer-events:none;
      background-image:
        linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
      background-size:60px 60px;
    }

    /* ── GLOW CORE ── */
    .core-glow{
      position:fixed;
      width:600px;height:600px;
      background:radial-gradient(circle, var(--accent) 0%, transparent 70%);
      opacity:.06;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
      pointer-events:none;z-index:0;
      animation:breathe 4s ease-in-out infinite;
    }

    /* ── CARD ── */
    .card{
      position:relative;z-index:2;
      background:rgba(255,255,255,.03);
      border:1px solid rgba(255,255,255,.09);
      border-radius:28px;
      padding:3rem 3rem 2.5rem;
      max-width:480px;width:100%;
      text-align:center;
      backdrop-filter:blur(24px);
      box-shadow:0 30px 80px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.04);
      animation:cardIn .8s cubic-bezier(.34,1.4,.64,1) both;
    }

    /* corner accents */
    .card::before,.card::after{
      content:'';position:absolute;
      width:60px;height:60px;
      border-color:var(--accent);border-style:solid;border-radius:4px;
      opacity:.3;
    }
    .card::before{top:14px;left:14px;border-width:2px 0 0 2px;}
    .card::after {bottom:14px;right:14px;border-width:0 2px 2px 0;}

    /* ── AVATAR ── */
    .avatar-ring{
      width:96px;height:96px;border-radius:50%;
      padding:3px;
      background:conic-gradient(var(--accent), transparent 60%, var(--accent));
      margin:0 auto 1.8rem;
      animation:spin 8s linear infinite;
    }
    .avatar-inner{
      width:100%;height:100%;border-radius:50%;
      background:var(--grad);
      display:flex;align-items:center;justify-content:center;
      font-size:1.5rem;font-weight:700;color:#fff;
      letter-spacing:.05em;
    }

    /* ── TEXT ── */
    .route-chip{
      display:inline-block;
      font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;
      color:var(--accent);
      background:var(--glow);
      border:1px solid color-mix(in srgb, var(--accent) 25%, transparent);
      padding:.3rem .9rem;border-radius:100px;
      margin-bottom:1.2rem;
      animation:fadeUp .5s .3s ease both;opacity:0;animation-fill-mode:forwards;
    }

    .greeting{
      font-size:.9rem;font-weight:300;color:rgba(255,255,255,.35);
      margin-bottom:.3rem;
      animation:fadeUp .5s .4s ease both;opacity:0;animation-fill-mode:forwards;
    }

    h1{
      font-size:clamp(2.5rem,8vw,3.8rem);
      font-weight:900;letter-spacing:-.03em;
      color:var(--accent);
      text-shadow:0 0 40px color-mix(in srgb, var(--accent) 50%, transparent);
      margin-bottom:.5rem;
      animation:fadeUp .5s .5s ease both;opacity:0;animation-fill-mode:forwards;
    }

    .tagline{
      font-size:.9rem;font-weight:300;
      color:rgba(255,255,255,.3);
      margin-bottom:2rem;
      animation:fadeUp .5s .6s ease both;opacity:0;animation-fill-mode:forwards;
    }

    /* ── INFO PILLS ── */
    .info-row{
      display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;
      margin-bottom:2rem;
      animation:fadeUp .5s .7s ease both;opacity:0;animation-fill-mode:forwards;
    }
    .info-pill{
      font-size:.72rem;color:rgba(255,255,255,.3);
      background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.08);
      padding:.3rem .8rem;border-radius:8px;
    }
    .info-pill span{color:rgba(255,255,255,.6);font-weight:500;}

    /* ── DIVIDER ── */
    .divider{
      height:1px;
      background:linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
      margin:0 0 1.8rem;
      animation:fadeUp .5s .75s ease both;opacity:0;animation-fill-mode:forwards;
    }

    /* ── TRY OTHERS ── */
    .try-label{
      font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;
      color:rgba(255,255,255,.18);margin-bottom:.8rem;
      animation:fadeUp .5s .8s ease both;opacity:0;animation-fill-mode:forwards;
    }
    .chips{
      display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;
      animation:fadeUp .5s .85s ease both;opacity:0;animation-fill-mode:forwards;
    }
    .chip{
      text-decoration:none;font-size:.8rem;font-weight:500;
      color:var(--accent);
      background:var(--glow);
      border:1px solid color-mix(in srgb, var(--accent) 20%, transparent);
      padding:.35rem .95rem;border-radius:100px;
      transition:all .2s ease;
    }
    .chip:hover{
      background:color-mix(in srgb, var(--accent) 18%, transparent);
      transform:translateY(-3px);
      box-shadow:0 6px 20px color-mix(in srgb, var(--accent) 20%, transparent);
    }

    footer{
      position:relative;z-index:2;
      margin-top:1.8rem;font-size:.68rem;
      color:rgba(255,255,255,.1);letter-spacing:.12em;text-transform:uppercase;
    }

    /* ANIMATIONS */
    @keyframes cardIn{from{opacity:0;transform:scale(.85) translateY(30px)}to{opacity:1;transform:scale(1) translateY(0)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes breathe{0%,100%{opacity:.06}50%{opacity:.12}}
  </style>
</head>
<body>
  <canvas id="c"></canvas>
  <div class="grid"></div>
  <div class="core-glow"></div>

  <div class="card">
    <div class="avatar-ring">
      <div class="avatar-inner">${initials}</div>
    </div>

    <div class="route-chip">/user/${raw}</div>
    <p class="greeting">${greet},</p>
    <h1>${name}!</h1>
    <p class="tagline">${tagline}</p>

    <div class="info-row">
      <div class="info-pill">URL param: <span>:name</span></div>
      <div class="info-pill">Value: <span>"${raw}"</span></div>
      <div class="info-pill">Port: <span>3003</span></div>
    </div>

    <div class="divider"></div>

    <p class="try-label">Try other names</p>
    <div class="chips">
      ${suggestions.map(n => `<a class="chip" href="/user/${n}">${n}</a>`).join('')}
    </div>
  </div>

  <footer>Lab 10 · Task 3 · Dynamic Route — req.params.name</footer>

  <script>
    // ── Particle system ──
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const ACCENT = '${t.accent}';

    function resize(){ canvas.width=innerWidth; canvas.height=innerHeight; }
    resize(); window.addEventListener('resize', resize);

    const N = 55;
    const pts = Array.from({length:N}, () => ({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      vx:(Math.random()-.5)*.4,
      vy:(Math.random()-.5)*.4,
      r: Math.random()*2+1,
    }));

    function hexToRgb(hex){
      const r=parseInt(hex.slice(1,3),16);
      const g=parseInt(hex.slice(3,5),16);
      const b=parseInt(hex.slice(5,7),16);
      return r+','+g+','+b;
    }
    const rgb = hexToRgb(ACCENT);

    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width) p.vx*=-1;
        if(p.y<0||p.y>canvas.height) p.vy*=-1;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba('+rgb+',.4)';
        ctx.fill();
      });
      pts.forEach((a,i)=>{
        pts.slice(i+1).forEach(b=>{
          const dx=a.x-b.x, dy=a.y-b.y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<120){
            ctx.beginPath();
            ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
            ctx.strokeStyle='rgba('+rgb+','+(1-dist/120)*.12+')';
            ctx.lineWidth=1;ctx.stroke();
          }
        });
      });
      requestAnimationFrame(draw);
    }
    draw();
  </script>
</body>
</html>`);
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"/><title>Task 3</title>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap" rel="stylesheet"/>
<style>
  body{background:#060810;color:#fff;font-family:'Lexend',sans-serif;
    min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;}
  h2{color:#22d3ee;font-size:1.5rem;}
  a{color:#22d3ee;text-decoration:none;font-size:1.1rem;background:rgba(34,211,238,.1);
    padding:.6rem 1.5rem;border-radius:12px;border:1px solid rgba(34,211,238,.25);}
  a:hover{background:rgba(34,211,238,.2);}
  code{background:#1e293b;padding:.3rem .7rem;border-radius:8px;color:#7dd3fc;}
</style></head>
<body>
  <h2>Task 3 — Dynamic User Page</h2>
  <p style="color:#475569">Visit <code>/user/YourName</code> to see your page</p>
  <a href="/user/Ali">Try /user/Ali →</a>
</body></html>`);
});

app.listen(PORT, () => {
  console.log(`✅ Task 3 → http://localhost:${PORT}/user/Ali`);
});