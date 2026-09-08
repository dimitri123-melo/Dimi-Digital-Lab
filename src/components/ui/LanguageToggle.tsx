'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-lg border border-zinc-700/60 dark:border-zinc-800 bg-zinc-100 dark:bg-surface-100 text-xs font-mono font-medium ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded transition-all ${
          language === 'en'
            ? 'bg-brand-blue text-white shadow-sm'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`px-2.5 py-1 rounded transition-all ${
          language === 'fr'
            ? 'bg-brand-blue text-white shadow-sm'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
        }`}
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
    </div>
  );
}
