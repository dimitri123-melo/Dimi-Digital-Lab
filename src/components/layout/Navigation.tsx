'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isScrolled } = useScrollPosition();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#work' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.trust, href: '#trust' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
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
          isScrolled ? 'glass py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-main mx-auto h-16 flex items-center justify-between">
          {/* Left: Brand Logo & Title */}
          <Link href="#home" className="flex items-center gap-3 relative z-50 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-800 shadow-sm">
              <Image
                src="/images/logo.jpg"
                alt="DIMI DIGITAL LAB — Official Logo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold tracking-widest text-zinc-900 dark:text-white text-sm sm:text-base leading-none">
                DIMI
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 dark:text-zinc-400">
                DIGITAL LAB
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-2 ${
                  activeSection === item.href
                    ? 'text-brand-blue font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Controls & CTA */}
          <div className="flex items-center gap-3 relative z-50">
            {/* Language Switcher */}
            <LanguageToggle />

            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Desktop Start a Project Button */}
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors shadow-sm shadow-brand-blue/20"
            >
              {t.nav.startProject}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="xl:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-surface-100 text-zinc-800 dark:text-zinc-200 focus:outline-none"
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
