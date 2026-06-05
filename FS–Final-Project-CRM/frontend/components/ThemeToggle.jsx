'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle({ compact = false }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('crm-theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('crm-theme', next);
  };

  return (
    <button className={`theme-toggle ${compact ? 'theme-toggle-compact' : ''}`} onClick={toggleTheme} type="button" aria-label="Toggle day and night theme">
      <span className="toggle-track">
        <span className="toggle-thumb">{theme === 'dark' ? '🌙' : '☀️'}</span>
      </span>
      {!compact && <strong>{theme === 'dark' ? 'Night' : 'Day'}</strong>}
    </button>
  );
}
