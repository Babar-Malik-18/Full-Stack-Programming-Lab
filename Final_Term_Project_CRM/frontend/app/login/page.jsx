'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import Toast from '@/components/Toast';
import api, { messageFromError } from '@/lib/api';
import { saveSession } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const login = async form => {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', form);
      saveSession(data);
      showToast('Login successful. Opening dashboard...');
      setTimeout(() => router.push('/dashboard'), 600);
    } catch (error) {
      showToast(messageFromError(error), 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatedBackground />
      <Toast toast={toast} />
      <AuthCard mode="login" onSubmit={login} loading={loading} />
    </>
  );
}
