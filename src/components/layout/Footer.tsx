'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Mail, MessageSquare, Globe } from 'lucide-react';
import { socialLinks } from '@/data/navigation';
import { useLanguage } from '@/context/LanguageContext';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-100 dark:bg-surface-50 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8 transition-colors duration-200">
      <div className="container-main mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-800 shadow-sm">
                <Image
                  src="/images/logo.jpg"
                  alt="DIMI DIGITAL LAB"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-heading font-bold tracking-widest text-lg text-zinc-900 dark:text-white">
                DIMI
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs tracking-wider uppercase font-semibold">
              {t.footer.slogan}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-blue-dark dark:text-brand-blue-light mt-1">
              <Globe size={14} />
              <span>{t.footer.cameroonToWorld}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-wider font-semibold mb-5 font-mono">
              {t.footer.servicesTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: t.services.divisions.marketing.title, href: '#services' },
                { label: t.services.divisions.aiCreative.title, href: '#services' },
                { label: t.services.divisions.webSoftware.title, href: '#services' },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                  >
                    {service.label}
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
              {[
                { label: t.nav.services, href: '#services' },
                { label: t.nav.portfolio, href: '#work' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.skills, href: '#skills' },
                { label: t.nav.process, href: '#process' },
                { label: t.nav.trust, href: '#trust' },
                { label: t.nav.contact, href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
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

          {/* Connect */}
          <div>
            <h3 className="text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-wider font-semibold mb-5 font-mono">
              {t.footer.connectTitle}
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link) => {
                const Icon = (LucideIcons as any)[link.icon] || LucideIcons.Link;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-100 flex items-center justify-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:border-brand-blue/50 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="mailto:novaskill237@gmail.com"
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <Mail size={13} className="text-brand-blue" />
                novaskill237@gmail.com
              </a>
              <a
                href="https://wa.me/237682764947"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <MessageSquare size={13} className="text-brand-blue" />
                +237 682 76 49 47
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200 dark:border-zinc-800/80 gap-4">
          <p className="text-zinc-500 dark:text-zinc-500 text-xs">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-zinc-500 dark:text-zinc-500 text-xs">
              {t.footer.designedAndBuilt}
            </p>
            <a
              href="#home"
              className="w-8 h-8 rounded-lg bg-zinc-200/80 dark:bg-zinc-800/60 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
