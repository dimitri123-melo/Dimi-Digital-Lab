'use client';

import { ContactForm } from '@/components/ui/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MessageSquare, Globe, Clock, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-50 dark:bg-surface relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
            {t.contact.sectionNumber} · {t.contact.sectionSubtitle}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-2">
            {t.contact.heading}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            {t.contact.subheading}
          </p>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Form */}
          <ScrollReveal delay={200} className="lg:col-span-7 w-full">
            <div className="rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 p-8 sm:p-10 shadow-lg">
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Right Column: Direct Verified Channels */}
          <ScrollReveal delay={300} direction="right" className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-xl font-extrabold text-zinc-950 dark:text-white mb-2">
                {t.contact.connectHeading}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                {t.contact.connectSubheading}
              </p>

              <div className="flex flex-col gap-4">
                {/* Email Direct */}
                <a
                  href="mailto:novaskill237@gmail.com"
                  className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 p-4 flex items-center gap-4 hover:border-brand-blue transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase">
                      {t.contact.direct.emailLabel}
                    </span>
                    <span className="font-bold text-zinc-950 dark:text-white text-sm mt-0.5">
                      novaskill237@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-brand-blue" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/237682764947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 p-4 flex items-center gap-4 hover:border-brand-blue transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase">
                      {t.contact.direct.whatsappLabel}
                    </span>
                    <span className="font-bold text-zinc-950 dark:text-white text-sm mt-0.5">
                      +237 682 76 49 47
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-brand-blue" />
                </a>

                {/* Response Notice & Location */}
                <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-surface-200 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase">
                      Response Guarantee
                    </span>
                    <span className="text-xs text-zinc-800 dark:text-zinc-200 font-semibold mt-0.5">
                      {t.contact.direct.responseNotice}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-surface-200 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase">
                      {t.contact.direct.locationLabel}
                    </span>
                    <span className="text-xs text-zinc-800 dark:text-zinc-200 font-semibold mt-0.5">
                      {t.contact.direct.locationValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
