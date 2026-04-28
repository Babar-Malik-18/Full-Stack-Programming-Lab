const express = require('express');
const app = express();
const PORT = 3001;

const students = [
  { id: 1, name: "Ali Hassan",    grade: "A+", subject: "Mathematics",      gpa: "4.0", avatar: "AH" },
  { id: 2, name: "Sara Khan",     grade: "A",  subject: "Physics",          gpa: "3.8", avatar: "SK" },
  { id: 3, name: "Usman Malik",   grade: "B+", subject: "Chemistry",        gpa: "3.5", avatar: "UM" },
  { id: 4, name: "Ayesha Raza",   grade: "A+", subject: "Computer Science", gpa: "4.0", avatar: "AR" },
  { id: 5, name: "Bilal Ahmed",   grade: "B",  subject: "Biology",          gpa: "3.2", avatar: "BA" },
  { id: 6, name: "Fatima Zahra",  grade: "A",  subject: "English Lit",      gpa: "3.7", avatar: "FZ" },
  { id: 7, name: "Omar Farooq",   grade: "A+", subject: "Data Structures",  gpa: "4.0", avatar: "OF" },
  { id: 8, name: "Hina Tariq",    grade: "B+", subject: "Calculus",         gpa: "3.4", avatar: "HT" },
];

const gradeInfo = {
  "A+": { color: "#4ade80", bg: "rgba(74,222,128,0.12)", bar: 100 },
  "A":  { color: "#60a5fa", bg: "rgba(96,165,250,0.12)", bar: 88  },
  "B+": { color: "#fbbf24", bg: "rgba(251,191,36,0.12)",  bar: 75  },
  "B":  { color: "#f87171", bg: "rgba(248,113,113,0.12)", bar: 65  },
};

const avatarGradients = [
  "linear-gradient(135deg,#667eea,#764ba2)",
  "linear-gradient(135deg,#f093fb,#f5576c)",
  "linear-gradient(135deg,#4facfe,#00f2fe)",
  "linear-gradient(135deg,#43e97b,#38f9d7)",
  "linear-gradient(135deg,#fa709a,#fee140)",
  "linear-gradient(135deg,#a18cd1,#fbc2eb)",
  "linear-gradient(135deg,#ffecd2,#fcb69f)",
  "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
];

app.get('/', (req, res) => {
  const totalA = students.filter(s => s.grade === "A+" || s.grade === "A").length;
  const avgGpa = (students.reduce((sum, s) => sum + parseFloat(s.gpa), 0) / students.length).toFixed(1);

  const cards = students.map((s, i) => {
    const g = gradeInfo[s.grade];
    return `
    <li class="card" style="animation-delay:${i * 0.07}s">
      <div class="card-left">
        <div class="avatar" style="background:${avatarGradients[i]}">${s.avatar}</div>
        <div class="info">
          <span class="name">${s.name}</span>
          <span class="subject">${s.subject}</span>
        </div>
      </div>
      <div class="card-right">
        <div class="progress-wrap">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${g.bar}%;background:${g.color}"></div>
          </div>
          <span class="gpa">GPA ${s.gpa}</span>
        </div>
        <div class="grade-pill" style="color:${g.color};background:${g.bg};border-color:${g.color}30">
          ${s.grade}
        </div>
      </div>
    </li>`;
  }).join('');

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Student Registry</title>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

    body {
      font-family:'Manrope',sans-serif;
      min-height:100vh;
      background:#030712;
      color:#f1f5f9;
      overflow-x:hidden;
    }

    /* ── AURORA BACKGROUND ── */
    .aurora {
      position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;
    }
    .aurora span {
      position:absolute;border-radius:50%;filter:blur(80px);opacity:0.35;
      animation:drift linear infinite alternate;
    }
    .aurora span:nth-child(1){width:600px;height:600px;background:#3b82f6;top:-200px;left:-150px;animation-duration:12s;}
    .aurora span:nth-child(2){width:500px;height:500px;background:#8b5cf6;bottom:-150px;right:-100px;animation-duration:15s;}
    .aurora span:nth-child(3){width:350px;height:350px;background:#06b6d4;top:40%;left:35%;animation-duration:10s;}
    @keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(40px,30px) scale(1.15)}}

    /* ── NOISE OVERLAY ── */
    body::after {
      content:'';position:fixed;inset:0;z-index:1;pointer-events:none;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity:0.4;
    }

    /* ── LAYOUT ── */
    .page {
      position:relative;z-index:2;
      max-width:820px;margin:0 auto;padding:3.5rem 1.5rem 5rem;
    }

    /* ── HEADER ── */
    .header { text-align:center;margin-bottom:3rem;animation:fadeDown .7s ease both; }

    .badge {
      display:inline-flex;align-items:center;gap:.5rem;
      background:rgba(99,102,241,.15);border:1px solid rgba(99,102,241,.35);
      color:#a5b4fc;padding:.35rem 1rem;border-radius:100px;
      font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
      margin-bottom:1.2rem;
    }
    .badge::before{content:'●';font-size:.5rem;color:#4ade80;animation:pulse 2s infinite;}

    h1 {
      font-size:clamp(2.2rem,5vw,3.4rem);font-weight:800;letter-spacing:-.03em;
      background:linear-gradient(135deg,#fff 30%,#94a3b8);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      margin-bottom:.6rem;
    }
    .subtitle { color:#475569;font-size:.95rem;font-weight:400; }

    /* ── STATS ── */
    .stats {
      display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;
      margin-bottom:2.5rem;animation:fadeUp .6s .15s ease both;opacity:0;animation-fill-mode:forwards;
    }
    .stat-card {
      background:rgba(255,255,255,.03);
      border:1px solid rgba(255,255,255,.08);
      border-radius:16px;padding:1.2rem 1rem;text-align:center;
      backdrop-filter:blur(12px);
      transition:transform .2s,border-color .2s;
    }
    .stat-card:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.16);}
    .stat-num{font-size:2rem;font-weight:800;background:linear-gradient(135deg,#60a5fa,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .stat-lbl{font-size:.7rem;color:#475569;text-transform:uppercase;letter-spacing:.12em;margin-top:.2rem;}

    /* ── LIST ── */
    ul { list-style:none;display:flex;flex-direction:column;gap:.75rem; }

    .card {
      background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.07);
      border-radius:18px;padding:1.1rem 1.4rem;
      display:flex;align-items:center;justify-content:space-between;gap:1rem;
      backdrop-filter:blur(16px);
      transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;
      animation:slideIn .5s ease both;opacity:0;animation-fill-mode:forwards;
      cursor:default;
    }
    .card:hover {
      transform:translateX(8px) scale(1.01);
      border-color:rgba(255,255,255,.18);
      box-shadow:0 8px 40px rgba(0,0,0,.4);
    }
    .card-left{display:flex;align-items:center;gap:1rem;}
    .avatar {
      width:48px;height:48px;border-radius:14px;
      display:flex;align-items:center;justify-content:center;
      font-weight:700;font-size:.8rem;color:#fff;flex-shrink:0;
      box-shadow:0 4px 16px rgba(0,0,0,.3);
    }
    .info{display:flex;flex-direction:column;gap:.2rem;}
    .name{font-weight:700;font-size:1rem;color:#e2e8f0;}
    .subject{font-size:.77rem;color:#475569;}

    .card-right{display:flex;align-items:center;gap:1rem;flex-shrink:0;}
    .progress-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:.3rem;}
    .progress-bar{width:90px;height:4px;background:rgba(255,255,255,.06);border-radius:4px;overflow:hidden;}
    .progress-fill{height:100%;border-radius:4px;transition:width .8s ease;}
    .gpa{font-size:.7rem;color:#475569;font-weight:500;}

    .grade-pill{
      font-size:.82rem;font-weight:700;padding:.3rem .85rem;
      border-radius:10px;border:1px solid;letter-spacing:.05em;
    }

    /* ── FOOTER ── */
    footer{
      position:relative;z-index:2;text-align:center;margin-top:3rem;
      color:#1e293b;font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;
    }

    /* ── ANIMATIONS ── */
    @keyframes fadeDown{from{opacity:0;transform:translateY(-22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
  </style>
</head>
<body>
  <div class="aurora">
    <span></span><span></span><span></span>
  </div>

  <div class="page">
    <header class="header">
      <div class="badge">● Live Student Data</div>
      <h1>Student Registry</h1>
      <p class="subtitle">All enrolled students — stored in JavaScript array</p>
    </header>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-num">${students.length}</div>
        <div class="stat-lbl">Total Students</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${totalA}</div>
        <div class="stat-lbl">A Grade</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${avgGpa}</div>
        <div class="stat-lbl">Avg GPA</div>
      </div>
    </div>

    <ul>${cards}</ul>
  </div>

  <footer>Lab 10 · Task 1 · Node.js + Express · GET Route</footer>
</body>
</html>`);
});

app.listen(PORT, () => console.log(`✅ Task 1 → http://localhost:${PORT}`));