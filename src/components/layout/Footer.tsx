'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Mail, MessageSquare, Globe } from 'lucide-react';
import { socialLinks } from '@/data/navigation';
import { useLanguage } from '@/context/LanguageContext';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.creative, href: '#creative' },
    { label: t.nav.training, href: '#training' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-surface-50 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8 transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm bg-black p-0.5">
                <Image
                  src="/icon.png"
                  alt="DIMI DIGITAL LAB"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold tracking-wider text-base text-zinc-900 dark:text-white">
                DIMI DIGITAL LAB
              </span>
            </div>
            <p className="text-brand-blue text-xs tracking-wider uppercase font-semibold font-mono">
              {t.footer.slogan}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-blue mt-1">
              <Globe size={14} />
              <span>{t.footer.cameroonToWorld}</span>
            </div>
          </div>

          {/* 4 Professional Domains */}
          <div>
            <h3 className="text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-wider font-semibold mb-5 font-mono">
              {t.footer.servicesTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {t.services.domains.map((domain) => (
                <li key={domain.id}>
                  <Link
                    href="#services"
                    className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                  >
                    {domain.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-wider font-semibold mb-5 font-mono">
              {t.footer.navTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connect */}
          <div>
            <h3 className="text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-wider font-semibold mb-5 font-mono">
              {t.footer.connectTitle}
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:novaskill237@gmail.com"
                className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-brand-blue transition-colors"
              >
                <Mail size={14} className="text-brand-blue" />
                <span>novaskill237@gmail.com</span>
              </a>
              <a
                href="https://wa.me/237682764947"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-brand-blue transition-colors"
              >
                <MessageSquare size={14} className="text-brand-blue" />
                <span>+237 682 76 49 47</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = (LucideIcons as any)[link.icon] || LucideIcons.Link;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-surface-200 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} DIMI DIGITAL LAB · {t.footer.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.footer.designedAndBuilt}</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-surface-200 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
