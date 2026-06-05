'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import LogoMark from './LogoMark';

export default function AuthCard({ mode, onSubmit, loading }) {
  const isRegister = mode === 'register';
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = event => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <main className={`auth-shell auth-page ${isRegister ? 'auth-register-page' : 'auth-login-page'}`}>
      <div className="auth-theme"><ThemeToggle /></div>

      <section className="auth-hero panel glow-card reveal-up">
        <div className="brand-row">
          <LogoMark />
          <div>
            <strong>CRM Pro</strong>
            <span>Premium customer command center</span>
          </div>
        </div>
        <h1>Customer operations that look and feel executive.</h1>
        <p>
          Secure access, smart customer records, live pipeline insights, PDF invoices,
          status control, activity feedback and a rule-based dashboard assistant in one polished CRM.
        </p>
        <div className="auth-metrics">
          <span><b>JWT</b> Protected</span>
          <span><b>15+</b> Seed Records</span>
          <span><b>PDF</b> Billing</span>
          <span><b>AI-Free</b> Rule Bot</span>
        </div>
      </section>

      <section className="auth-form panel reveal-up delay-1">
        <div className="form-header">
          <LogoMark small />
          <div>
            <h2>{isRegister ? 'Create Account' : 'Welcome Back'}</h2>
            <p>{isRegister ? 'Start your secure CRM workspace.' : 'Login to open your protected dashboard.'}</p>
          </div>
        </div>

        <form onSubmit={submit} className="stacked-form">
          {isRegister && (
            <label>
              Full Name
              <input name="name" placeholder="Enter full name" value={form.name} onChange={handleChange} required />
            </label>
          )}
          <label>
            Email Address
            <input name="email" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Minimum 6 characters" value={form.password} onChange={handleChange} minLength="6" required />
          </label>
          <button className="primary-btn" disabled={loading}>
            {loading ? 'Processing...' : isRegister ? 'Create Secure Account' : 'Enter Dashboard'}
          </button>
        </form>

        <p className="switch-auth">
          {isRegister ? 'Already registered?' : 'Need an account?'}{' '}
          <Link href={isRegister ? '/login' : '/register'}>{isRegister ? 'Login here' : 'Register here'}</Link>
        </p>
      </section>
    </main>
  );
}
