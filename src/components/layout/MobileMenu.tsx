'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { socialLinks } from '@/data/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-40 bg-white/98 dark:bg-surface/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-in slide-in-from-right-full duration-300 text-zinc-900 dark:text-white"
    >
      {/* Top Controls in Drawer */}
      <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col">
          <span className="font-heading font-bold text-base tracking-wider text-zinc-900 dark:text-white">
            DIMI
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-blue font-semibold">
            DIGITAL LAB
          </span>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-5 mt-8">
        {navLinks.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group flex items-baseline gap-4"
          >
            <span className="text-brand-blue font-mono text-sm font-semibold">
              0{index + 1}
            </span>
            <span className="text-2xl sm:text-3xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-brand-blue transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-12 flex flex-col gap-6">
        <Link
          href="#contact"
          onClick={onClose}
          className="w-full py-3.5 bg-brand-blue text-white text-center rounded-xl font-semibold tracking-wide hover:bg-brand-blue-dark transition-colors shadow-md shadow-brand-blue/20 text-sm flex items-center justify-center gap-2"
        >
          <span>{t.nav.workWithMe}</span>
          <ArrowUpRight size={16} />
        </Link>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          {socialLinks.map((link) => {
            const Icon = (LucideIcons as any)[link.icon] || LucideIcons.Link;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors p-2"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
