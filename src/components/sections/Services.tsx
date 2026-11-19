'use client';

import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Code2, TrendingUp, Video, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const domainIcons: Record<string, React.ReactNode> = {
    'digital-development': <Code2 className="w-6 h-6 text-brand-blue" />,
    'digital-marketing': <TrendingUp className="w-6 h-6 text-brand-blue" />,
    'content-creation': <Video className="w-6 h-6 text-brand-blue" />,
    'automation-ai': <Cpu className="w-6 h-6 text-brand-blue" />,
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-surface-50 relative transition-colors duration-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={3}
            title={t.services.sectionTitle}
            subtitle={t.services.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-center text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto -mt-4 text-base leading-relaxed">
            {t.services.intro}
          </p>
        </ScrollReveal>

        {/* 4 Major Professional Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {t.services.domains.map((domain, idx) => (
            <ScrollReveal key={domain.id} delay={100 * (idx + 1)}>
              <div className="h-full rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50/80 dark:bg-surface-100/70 hover:border-brand-blue dark:hover:border-brand-blue p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="flex flex-col gap-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-white dark:bg-surface-200 border border-zinc-300 dark:border-zinc-700 text-brand-blue">
                      DOMAIN {domain.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {domainIcons[domain.id] || <Code2 className="w-6 h-6 text-brand-blue" />}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white group-hover:text-brand-blue transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1 font-semibold">
                      {domain.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {domain.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs uppercase tracking-wider font-mono text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                      Key Capabilities
                    </span>
                    {domain.capabilities.map((cap, capIdx) => (
                      <div key={capIdx} className="flex items-start gap-2.5 text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                        <CheckCircle2 size={15} className="text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech / Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {domain.tech.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-surface-200 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold shadow-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to Discuss This Service */}
                <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-dark dark:hover:text-brand-blue-light transition-colors"
                  >
                    <span>{t.services.ctaButton}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
