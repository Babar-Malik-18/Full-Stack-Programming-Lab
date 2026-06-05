'use client';

import { useState } from 'react';

export default function LogoMark({ small = false }) {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div className={`logo-mark ${small ? 'logo-mark-small' : ''}`}>
      {!showFallback ? (
        <img src="/logo.svg" alt="CRM logo" onError={() => setShowFallback(true)} />
      ) : (
        <span>CP</span>
      )}
    </div>
  );
}
