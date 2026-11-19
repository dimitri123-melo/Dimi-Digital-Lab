'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Video, Film, Sliders, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContentCreation() {
  const { t } = useLanguage();

  const pillarIcons = [
    <Film key="film" className="w-5 h-5 text-brand-blue" />,
    <Video key="video" className="w-5 h-5 text-brand-blue" />,
    <Sliders key="sliders" className="w-5 h-5 text-brand-blue" />,
    <Cpu key="cpu" className="w-5 h-5 text-brand-blue" />,
  ];

  return (
    <section
      id="creative"
      className="py-24 bg-white dark:bg-surface-50 relative transition-colors duration-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={5}
            title={t.creative.sectionTitle}
            subtitle={t.creative.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-center text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto -mt-4 text-base leading-relaxed">
            {t.creative.intro}
          </p>
        </ScrollReveal>

        {/* 4 Creative Production Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {t.creative.pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} delay={100 * (idx + 1)}>
              <div className="h-full rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50/80 dark:bg-surface-100/70 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Real Production Asset Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      {pillarIcons[idx] || <Video className="w-5 h-5 text-brand-blue" />}
                    </div>
                  </div>

                  {/* Narrative & Details */}
                  <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-zinc-950 dark:text-white group-hover:text-brand-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1 font-semibold">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      {pillar.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                          <CheckCircle2 size={14} className="text-brand-blue flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-dark dark:hover:text-brand-blue-light transition-colors"
                  >
                    <span>{t.creative.ctaButton}</span>
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
