'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Training() {
  const { t } = useLanguage();

  return (
    <section
      id="training"
      className="py-24 bg-zinc-50 dark:bg-surface relative transition-colors duration-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={6}
            title={t.training.sectionTitle}
            subtitle={t.training.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-center text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto -mt-4 text-base leading-relaxed">
            {t.training.intro}
          </p>
        </ScrollReveal>

        {/* 4 Training Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {t.training.programs.map((prog, idx) => (
            <ScrollReveal key={prog.id} delay={100 * (idx + 1)}>
              <div className="h-full rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Visual Banner */}
                  <div className="relative aspect-[16/8] w-full overflow-hidden bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-brand-blue" />
                      <span>{prog.category}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col gap-5">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white group-hover:text-brand-blue transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-2 leading-relaxed font-normal">
                        {prog.description}
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div className="p-3.5 rounded-xl bg-zinc-100/80 dark:bg-surface-200 border border-zinc-300/80 dark:border-zinc-700/80 flex items-start gap-3">
                      <Users size={16} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-700 dark:text-zinc-300 font-bold block">
                          {t.training.audienceLabel}
                        </span>
                        <p className="text-xs text-zinc-900 dark:text-zinc-100 font-bold mt-0.5">
                          {prog.audience}
                        </p>
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="text-xs uppercase tracking-wider font-mono text-zinc-800 dark:text-zinc-200 font-bold">
                        {t.training.outcomesLabel}
                      </span>
                      {prog.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2.5 text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                          <CheckCircle2 size={14} className="text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enquire CTA */}
                <div className="p-6 sm:p-8 pt-0 border-t border-zinc-200 dark:border-zinc-800 mt-4">
                  <Link
                    href={`#contact?course=${prog.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs tracking-wide shadow-md shadow-brand-blue/20 transition-all"
                  >
                    <span>{t.training.ctaButton}</span>
                    <ArrowUpRight size={15} />
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
