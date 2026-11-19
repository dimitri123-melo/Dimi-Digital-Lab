'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, TrendingUp, Cpu, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Trust() {
  const { t } = useLanguage();

  const cardIcons = [
    <Layers key="layers" className="w-6 h-6 text-brand-blue" />,
    <TrendingUp key="trending" className="w-6 h-6 text-brand-blue" />,
    <Cpu key="cpu" className="w-6 h-6 text-brand-blue" />,
  ];

  const statIcons = [
    <CheckCircle2 key="check" className="w-5 h-5 text-brand-blue" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-brand-blue" />,
    <Globe key="globe" className="w-5 h-5 text-brand-blue" />,
  ];

  return (
    <section
      id="trust"
      className="py-24 bg-white dark:bg-surface-50 relative transition-colors duration-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={7}
            title={t.trust.sectionTitle}
            subtitle={t.trust.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        {/* 3 Core Grounded Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          {t.trust.cards.map((card, idx) => (
            <ScrollReveal key={idx} delay={100 * (idx + 1)}>
              <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-surface-100 p-8 flex flex-col justify-between hover:border-brand-blue/50 transition-all duration-300 shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-6">
                    {cardIcons[idx] || <Layers className="w-6 h-6 text-brand-blue" />}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Verified Facts & Operational Standards Bar */}
        <ScrollReveal delay={350}>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-surface-100 p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-zinc-200 dark:md:divide-zinc-800">
              {t.trust.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 ${
                    idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {statIcons[idx]}
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-brand-blue font-mono text-xs uppercase tracking-wider font-semibold">
                    {stat.label}
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
