'use client';

import { useRouter } from 'next/navigation';
import { clearSession } from '@/lib/auth';
import ThemeToggle from './ThemeToggle';
import LogoMark from './LogoMark';

export default function Navbar({ user }) {
  const router = useRouter();

  const logout = () => {
    clearSession();
    router.replace('/login');
  };

  return (
    <nav className="topbar">
      <div className="brand-wrap">
        <LogoMark small />
        <div>
          <strong>CRM Pro</strong>
          <span>Customer Relationship Command Center</span>
        </div>
      </div>
      <div className="nav-actions">
        <ThemeToggle compact />
        <span className="user-pill">👤 {user?.name || 'User'}</span>
        <button className="ghost-btn" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
