'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, Sparkles, Code2, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Trust() {
  const { t } = useLanguage();

  const icons = [
    <Layers key="layers" className="w-6 h-6 text-brand-blue" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-brand-blue" />,
    <Code2 key="code" className="w-6 h-6 text-brand-blue" />,
  ];

  return (
    <section id="trust" className="py-24 bg-white dark:bg-surface-50 relative transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={6}
            title={t.trust.sectionTitle}
            subtitle={t.trust.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        {/* 3 Core Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
          {t.trust.cards.map((card, idx) => (
            <ScrollReveal key={idx} delay={100 * (idx + 1)}>
              <div className="card-surface rounded-2xl p-8 hover:border-brand-blue/50 transition-all duration-300 h-full flex flex-col">
                <div className="bg-brand-blue/10 dark:bg-brand-blue/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {icons[idx]}
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Authentic Key Facts Bar */}
        <ScrollReveal delay={350}>
          <div className="card-surface rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-zinc-200 dark:md:divide-zinc-800">
              {/* Fact 1 */}
              <div className="flex flex-col gap-2 md:pr-8">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                    {t.trust.facts.fact1Value}
                  </span>
                </div>
                <span className="text-brand-blue-dark dark:text-brand-blue-light font-mono text-xs uppercase tracking-wider font-semibold">
                  {t.trust.facts.fact1Label}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  {t.trust.facts.fact1Desc}
                </p>
              </div>

              {/* Fact 2 */}
              <div className="flex flex-col gap-2 md:px-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                    {t.trust.facts.fact2Value}
                  </span>
                </div>
                <span className="text-brand-blue-dark dark:text-brand-blue-light font-mono text-xs uppercase tracking-wider font-semibold">
                  {t.trust.facts.fact2Label}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  {t.trust.facts.fact2Desc}
                </p>
              </div>

              {/* Fact 3 */}
              <div className="flex flex-col gap-2 md:pl-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                    {t.trust.facts.fact3Value}
                  </span>
                </div>
                <span className="text-brand-blue-dark dark:text-brand-blue-light font-mono text-xs uppercase tracking-wider font-semibold">
                  {t.trust.facts.fact3Label}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  {t.trust.facts.fact3Desc}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
