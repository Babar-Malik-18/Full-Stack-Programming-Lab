'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/auth';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(getToken() ? '/dashboard' : '/login');
  }, [router]);

  return (
    <main className="screen-center">
      <AnimatedBackground />
      <div className="loader-ring" />
      <p>Launching CRM Pro...</p>
    </main>
  );
}
