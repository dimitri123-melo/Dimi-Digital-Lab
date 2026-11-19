'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import MobileMenu from './MobileMenu';
import { ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { isScrolled } = useScrollPosition();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.training, href: '#training' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-surface/95 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-main mx-auto h-14 flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="#home" className="flex items-center gap-3 relative z-50 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-800 shadow-sm bg-black p-0.5">
              <Image
                src="/icon.png"
                alt="DIMI DIGITAL LAB"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold tracking-wider text-zinc-950 dark:text-white text-base leading-none">
                DIMI
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-blue font-bold mt-0.5">
                DIGITAL LAB
              </span>
            </div>
          </Link>

          {/* Clean 6-Item Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-wider transition-colors relative py-1.5 ${
                    isActive
                      ? 'text-brand-blue font-bold'
                      : 'text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white font-semibold'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls & Primary CTA */}
          <div className="flex items-center gap-3 relative z-50">
            <LanguageToggle />
            <ThemeToggle />

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm shadow-brand-blue/20 hover:shadow-md hover:shadow-brand-blue/30"
            >
              <span>{t.nav.workWithMe}</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-surface-100 text-zinc-900 dark:text-zinc-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`w-5 h-0.5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current my-1 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
