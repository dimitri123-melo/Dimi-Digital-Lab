'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg border border-zinc-700/60 dark:border-zinc-800 bg-zinc-100 dark:bg-surface-100 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-brand-blue/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          size={18}
          className={`transition-all duration-300 transform ${
            theme === 'dark'
              ? 'opacity-0 rotate-90 scale-0 absolute'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          size={18}
          className={`transition-all duration-300 transform ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0 absolute'
          }`}
        />
      </div>
    </button>
  );
}
