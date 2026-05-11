const express = require('express');
const app = express();
const PORT = 3004;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>The Express Chronicle</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

    :root{
      --gold:#c9a84c;
      --gold-light:#e8c876;
      --paper:#faf7f0;
      --ink:#1a1510;
      --muted:#6b6355;
      --rule:#d4c9b0;
      --bg:#f5f0e4;
    }

    html{scroll-behavior:smooth;}

    body{
      background:var(--bg);
      color:var(--ink);
      font-family:'Source Sans 3',sans-serif;
      min-height:100vh;
    }

    /* ── TOP TICKER ── */
    .ticker{
      background:var(--ink);color:rgba(255,255,255,.6);
      font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;
      padding:.45rem 0;overflow:hidden;
    }
    .ticker-inner{
      display:flex;gap:4rem;
      animation:ticker 25s linear infinite;
      white-space:nowrap;width:max-content;
    }
    .ticker-item span{color:var(--gold);}
    @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}

    /* ── MASTHEAD ── */
    .masthead{
      background:var(--paper);
      border-bottom:4px double var(--ink);
      padding:2rem 2.5rem 1.6rem;
      text-align:center;
    }

    .masthead-meta{
      display:flex;justify-content:space-between;
      font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;
      color:var(--muted);margin-bottom:.8rem;
      font-family:'Source Sans 3',sans-serif;
    }

    .masthead h1{
      font-family:'Playfair Display',serif;
      font-size:clamp(2.8rem,7vw,5.5rem);
      font-weight:900;letter-spacing:-.01em;
      color:var(--ink);line-height:1;
      margin-bottom:.4rem;
    }

    .masthead h1 .gold{color:var(--gold);}

    .masthead-sub{
      font-size:.72rem;letter-spacing:.35em;text-transform:uppercase;
      color:var(--muted);
    }

    /* ── FEATURED BAND ── */
    .featured-band{
      background:var(--ink);
      padding:.7rem 2.5rem;
      display:flex;align-items:center;gap:1rem;
    }
    .featured-tag{
      background:var(--gold);color:var(--ink);
      font-size:.6rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
      padding:.25rem .7rem;border-radius:2px;flex-shrink:0;
    }
    .featured-hl{
      font-family:'Playfair Display',serif;
      font-size:.92rem;font-style:italic;color:rgba(255,255,255,.7);
    }

    /* ── MAIN GRID ── */
    .container{max-width:1100px;margin:0 auto;padding:0 1.5rem;}

    .main-grid{
      display:grid;
      grid-template-columns:220px 1fr 200px;
      gap:0;
      border-bottom:2px solid var(--ink);
    }

    @media(max-width:780px){
      .main-grid{grid-template-columns:1fr;}
      .col-left,.col-right{border:none !important;padding:1.5rem !important;}
    }

    /* ── COLUMNS ── */
    .col-left{
      border-right:1px solid var(--rule);
      padding:2rem 1.5rem;
    }
    .col-center{
      padding:2rem 2rem;
      border-right:1px solid var(--rule);
    }
    .col-right{
      padding:2rem 1.4rem;
    }

    /* ── SECTION LABELS ── */
    .section-label{
      font-size:.6rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase;
      color:var(--gold);border-bottom:2px solid var(--gold);
      padding-bottom:.35rem;margin-bottom:1.2rem;
      display:flex;align-items:center;gap:.5rem;
    }
    .section-label::before{
      content:'';width:6px;height:6px;border-radius:50%;
      background:var(--gold);flex-shrink:0;
    }

    /* ── SIDEBAR LISTS ── */
    .sidebar-list{list-style:none;display:flex;flex-direction:column;gap:0;}
    .sidebar-list li{
      font-size:.82rem;color:var(--muted);
      padding:.5rem 0;
      border-bottom:1px dotted var(--rule);
      display:flex;align-items:flex-start;gap:.6rem;
      transition:color .15s;cursor:default;
      line-height:1.4;
    }
    .sidebar-list li:hover{color:var(--ink);}
    .sidebar-list li::before{
      content:'◆';color:var(--gold);font-size:.5rem;
      margin-top:.25rem;flex-shrink:0;
    }

    /* ── CENTER ARTICLE ── */
    .article-kicker{
      font-size:.65rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase;
      color:var(--gold);margin-bottom:.6rem;
    }

    h2.headline{
      font-family:'Playfair Display',serif;
      font-size:clamp(1.9rem,3.5vw,2.7rem);
      font-weight:900;letter-spacing:-.02em;line-height:1.18;
      margin-bottom:.8rem;color:var(--ink);
    }

    h2.headline em{font-style:italic;color:var(--gold);}

    .byline{
      font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;
      color:var(--muted);padding:.8rem 0;
      border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);
      margin-bottom:1.5rem;
      display:flex;justify-content:space-between;
    }

    /* Drop cap */
    p.lead::first-letter{
      font-family:'Playfair Display',serif;
      float:left;font-size:4rem;line-height:.75;
      margin-right:.1em;margin-top:.08em;
      font-weight:900;color:var(--gold);
    }

    p.body-p{
      font-size:.97rem;line-height:1.85;
      color:#3a3228;margin-bottom:1.3rem;
    }

    /* ── PULL QUOTE ── */
    .pull-quote{
      border-top:3px solid var(--ink);
      border-bottom:1px solid var(--ink);
      padding:1.2rem 0;margin:1.8rem 0;
      text-align:center;
    }
    .pull-quote p{
      font-family:'Playfair Display',serif;
      font-size:1.35rem;font-style:italic;
      color:var(--ink);line-height:1.5;
    }
    .pull-quote cite{
      display:block;font-size:.65rem;letter-spacing:.2em;
      text-transform:uppercase;color:var(--muted);
      margin-top:.6rem;font-style:normal;
    }

    /* ── FEATURE BOX ── */
    .feature-box{
      background:var(--ink);padding:1.5rem;
      border-radius:2px;margin:1.8rem 0;
    }
    .feature-box .fb-title{
      font-family:'Playfair Display',serif;
      font-size:1rem;font-weight:700;color:var(--gold);
      margin-bottom:1rem;padding-bottom:.5rem;
      border-bottom:1px solid rgba(255,255,255,.1);
    }
    .feature-list{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem;}
    .feature-list li{
      font-size:.82rem;color:rgba(255,255,255,.6);
      padding:.4rem .5rem;
      border-left:2px solid var(--gold);
      padding-left:.7rem;
      line-height:1.35;
    }
    .feature-list li strong{color:rgba(255,255,255,.9);display:block;font-size:.75rem;}

    /* ── RIGHT COLUMN ── */
    .digest-card{
      background:var(--paper);
      border:1px solid var(--rule);
      border-radius:2px;padding:1rem;
      margin-bottom:1.2rem;
    }
    .digest-card .dc-num{
      font-family:'Playfair Display',serif;
      font-size:2.5rem;font-weight:900;color:var(--gold);
      line-height:1;
    }
    .digest-card .dc-label{
      font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;
      color:var(--muted);
    }
    .digest-card .dc-text{
      font-size:.8rem;color:var(--muted);margin-top:.5rem;line-height:1.5;
    }

    .gold-quote{
      border-left:3px solid var(--gold);
      padding:.8rem 1rem;
      background:rgba(201,168,76,.06);
      font-family:'Playfair Display',serif;
      font-style:italic;font-size:.88rem;
      color:var(--muted);line-height:1.6;
      margin-top:1.2rem;
    }

    /* ── FOOTER ── */
    .page-footer{
      background:var(--ink);
      padding:1.4rem 2.5rem;
      display:flex;justify-content:space-between;align-items:center;
      flex-wrap:wrap;gap:.5rem;
    }
    .page-footer span{
      font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;
      color:rgba(255,255,255,.25);
    }
    .page-footer .pf-brand{
      font-family:'Playfair Display',serif;
      font-size:1.1rem;font-style:italic;color:var(--gold);
      letter-spacing:0;
    }

    /* ── ANIMATIONS ── */
    .fade-in{animation:fi .7s ease both;}
    .fade-in-d1{animation:fi .7s .1s ease both;opacity:0;animation-fill-mode:forwards;}
    .fade-in-d2{animation:fi .7s .2s ease both;opacity:0;animation-fill-mode:forwards;}
    .fade-in-d3{animation:fi .7s .35s ease both;opacity:0;animation-fill-mode:forwards;}
    @keyframes fi{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  </style>
</head>
<body>

  <!-- TICKER -->
  <div class="ticker">
    <div class="ticker-inner">
      <span class="ticker-item">Breaking: <span>Express.js renders HTML directly from server</span></span>
      <span class="ticker-item">Lab 10 — <span>Task 4 Complete</span></span>
      <span class="ticker-item">Node.js <span>running on Port 3004</span></span>
      <span class="ticker-item">GET / → <span>res.send() HTML string</span></span>
      <span class="ticker-item">Breaking: <span>Express.js renders HTML directly from server</span></span>
      <span class="ticker-item">Lab 10 — <span>Task 4 Complete</span></span>
      <span class="ticker-item">Node.js <span>running on Port 3004</span></span>
      <span class="ticker-item">GET / → <span>res.send() HTML string</span></span>
    </div>
  </div>

  <!-- MASTHEAD -->
  <header class="masthead fade-in">
    <div class="masthead-meta">
      <span>Volume I · Issue IV</span>
      <span>The Full-Stack Edition</span>
      <span>Node.js + Express</span>
    </div>
    <hr style="border:none;height:1px;background:var(--rule);margin-bottom:.8rem"/>
    <h1>The <span class="gold">Express</span> Chronicle</h1>
    <hr style="border:none;height:1px;background:var(--rule);margin:.8rem 0"/>
    <p class="masthead-sub">A Full HTML Page Served Directly from an Express Route</p>
  </header>

  <!-- FEATURED BAND -->
  <div class="featured-band fade-in-d1">
    <span class="featured-tag">Today's Feature</span>
    <span class="featured-hl">How a single res.send() call delivers a complete, styled HTML experience</span>
  </div>

  <!-- MAIN CONTENT -->
  <div class="container">
    <div class="main-grid">

      <!-- LEFT SIDEBAR -->
      <aside class="col-left fade-in-d2">
        <div class="section-label">Inside This Issue</div>
        <ul class="sidebar-list">
          <li>Setting up the Express server</li>
          <li>Defining GET routes</li>
          <li>Sending HTML via res.send()</li>
          <li>Inline CSS styling techniques</li>
          <li>HTML lists and paragraphs</li>
          <li>No template engines needed</li>
        </ul>

        <br/>

        <div class="section-label">Key Concepts</div>
        <ul class="sidebar-list">
          <li>app.get() handler</li>
          <li>req &amp; res objects</li>
          <li>Template literals in JS</li>
          <li>HTTP 200 response</li>
        </ul>

        <br/>

        <div class="gold-quote">
          "Simplicity is the ultimate sophistication."
        </div>
      </aside>

      <!-- CENTER ARTICLE -->
      <article class="col-center fade-in-d2">
        <div class="article-kicker">Feature Article · Lab 10 · Task 4</div>

        <h2 class="headline">
          <em>Express.js:</em> The Art of Sending Full HTML from a Single Route
        </h2>

        <div class="byline">
          <span>By A Full-Stack Developer</span>
          <span>GET / · Port 3004</span>
        </div>

        <p class="body-p lead">
          Express.js is a minimalist web framework for Node.js that strips away
          complexity and hands you raw, powerful control over HTTP. At its simplest — and
          most elegant — an Express app can serve a fully designed HTML page using just
          one function call.
        </p>

        <p class="body-p">
          The <strong>res.send()</strong> method is the workhorse of Express routing.
          Pass it an HTML string and the browser receives a complete, renderable document
          — complete with styles, structure, and content — without any build tools, no
          bundlers, no template engines required.
        </p>

        <div class="pull-quote">
          <p>"The web started as plain text over HTTP. Express brings you back to that pure, powerful simplicity."</p>
          <cite>— Express.js Philosophy</cite>
        </div>

        <p class="body-p">
          This technique forms the conceptual bedrock of all server-side rendering. Whether
          you later use EJS, Pug, or React on the server — the idea is identical: the server
          constructs HTML and sends it. The browser renders it. Clean. Direct. Effective.
        </p>

        <div class="feature-box">
          <div class="fb-title">✦ Concepts Demonstrated in This Task</div>
          <ul class="feature-list">
            <li><strong>Express Setup</strong>require + app init</li>
            <li><strong>GET Route</strong>app.get('/', ...)</li>
            <li><strong>HTML Response</strong>res.send(html)</li>
            <li><strong>Page Title</strong>&lt;title&gt; tag</li>
            <li><strong>Paragraph</strong>&lt;p&gt; element</li>
            <li><strong>Unordered List</strong>&lt;ul&gt; + &lt;li&gt;</li>
          </ul>
        </div>

        <p class="body-p">
          The real power lies in JavaScript template literals — backtick strings that
          let you embed variables, loops, and logic directly into your HTML.
          A students array becomes a list. A user's name becomes a headline.
          Dynamic data becomes a living web page.
        </p>
      </article>

      <!-- RIGHT COLUMN -->
      <aside class="col-right fade-in-d3">
        <div class="section-label">By the Numbers</div>

        <div class="digest-card">
          <div class="dc-num">4</div>
          <div class="dc-label">Lab Tasks</div>
          <div class="dc-text">Each on a different port, each with its own Express server.</div>
        </div>

        <div class="digest-card">
          <div class="dc-num">1</div>
          <div class="dc-label">Route Used</div>
          <div class="dc-text">Just GET / — the root route returning full HTML.</div>
        </div>

        <div class="digest-card">
          <div class="dc-num">0</div>
          <div class="dc-label">Databases</div>
          <div class="dc-text">Pure JS arrays. No MongoDB, no SQL, no ORMs.</div>
        </div>

        <br/>
        <div class="section-label">Also in Lab 10</div>
        <ul class="sidebar-list">
          <li>Student list display</li>
          <li>Message route system</li>
          <li>Dynamic user pages</li>
        </ul>
      </aside>

    </div>
  </div>

  <!-- FOOTER -->
  <footer class="page-footer">
    <span>Lab 10 · Task 4</span>
    <span class="pf-brand">The Express Chronicle</span>
    <span>Node.js + Express · GET / · Port 3004</span>
  </footer>

</body>
</html>`);
});

app.listen(PORT, () => console.log(`✅ Task 4 → http://localhost:${PORT}`));