'use client';

import { ContactForm } from '@/components/ui/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Globe, MessageSquare } from 'lucide-react';
import { socialLinks } from '@/data/navigation';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-surface relative overflow-hidden transition-colors duration-200">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-brand-blue/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-semibold">
            07 · {t.contact.sectionSubtitle}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mt-2">
            {t.contact.heading}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {t.contact.subheading}
          </p>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <ScrollReveal delay={200} className="lg:col-span-7 w-full">
            <div className="card-surface p-8 rounded-2xl">
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Contact Direct Info */}
          <ScrollReveal delay={300} direction="right" className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {t.contact.connectHeading}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                {t.contact.connectSubheading}
              </p>

              <div className="flex flex-col gap-5">
                {/* Email */}
                <a
                  href="mailto:novaskill237@gmail.com"
                  className="card-surface p-4 rounded-xl flex items-center gap-4 hover:border-brand-blue/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">
                      {t.contact.direct.emailLabel}
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm mt-0.5">
                      novaskill237@gmail.com
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/237682764947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface p-4 rounded-xl flex items-center gap-4 hover:border-brand-blue/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">
                      {t.contact.direct.whatsappLabel}
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm mt-0.5">
                      +237 682 76 49 47
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="card-surface p-4 rounded-xl flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-zinc-100 dark:bg-surface-200 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">
                      {t.contact.direct.locationLabel}
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm mt-0.5">
                      {t.contact.direct.locationValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="text-xs font-mono text-zinc-500 uppercase mb-3">
                {t.contact.direct.followMe}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-100 hover:border-brand-blue/50 text-zinc-700 dark:text-zinc-300 hover:text-brand-blue text-xs font-mono font-medium transition-colors"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
