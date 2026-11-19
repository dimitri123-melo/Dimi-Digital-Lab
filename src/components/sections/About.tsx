'use client';

import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-zinc-50 dark:bg-surface relative transition-colors duration-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={2}
            title={t.about.sectionTitle}
            subtitle={t.about.sectionSubtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
          {/* Left Column: Authentic Portrait Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal delay={100} direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-800 p-3 bg-white dark:bg-surface-100 shadow-xl">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200/60 to-zinc-200/90 dark:from-surface-200 dark:via-surface-100 dark:to-surface flex items-end justify-center border border-zinc-200/80 dark:border-zinc-700/60">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,102,255,0.08),transparent_65%)] dark:bg-[radial-gradient(circle_at_50%_35%,rgba(0,102,255,0.2),transparent_65%)] pointer-events-none" />
                  <Image
                    src="/images/dimitri_transparent.png"
                    alt="Dimitri Kuete — Founder, DIMI DIGITAL LAB"
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-4 flex flex-col">
                  <h3 className="font-heading text-lg font-extrabold text-zinc-950 dark:text-white">
                    {t.about.name}
                  </h3>
                  <p className="text-brand-blue font-mono text-xs font-bold mt-0.5">
                    {t.about.roleTitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-semibold mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                    <Globe size={13} className="text-brand-blue" />
                    <span>Cameroon · Available Worldwide</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio Narrative, 5 Pillars, and Experience */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Headline */}
            <ScrollReveal delay={150}>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white leading-snug tracking-tight">
                {t.about.headline}{' '}
                <span className="text-brand-blue">{t.about.headlineAccent}</span>
              </h2>
            </ScrollReveal>

            {/* High-Contrast Natural Biography */}
            <div className="flex flex-col gap-4 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed">
              <ScrollReveal delay={200}>
                <p>{t.about.bioParagraph1}</p>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <p>{t.about.bioParagraph2}</p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p>{t.about.bioParagraph3}</p>
              </ScrollReveal>
            </div>

            {/* 5 Core Multidisciplinary Pillars */}
            <ScrollReveal delay={350}>
              <div className="pt-8 border-t border-zinc-300 dark:border-zinc-800">
                <h3 className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold mb-6 flex items-center gap-2">
                  <Sparkles size={14} />
                  <span>{t.about.pillarsTitle}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.about.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 shadow-sm flex flex-col gap-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-brand-blue flex-shrink-0" />
                        <h4 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 pl-6 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Professional Experience */}
            <ScrollReveal delay={400}>
              <div className="pt-8 border-t border-zinc-300 dark:border-zinc-800">
                <div className="flex flex-col gap-1 mb-6">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-brand-blue font-bold flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>{t.about.experienceTitle}</span>
                  </h3>
                  <p className="text-xs text-zinc-700 dark:text-zinc-400 font-mono font-medium">
                    {t.about.experienceSubtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {t.about.experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                            {exp.role}
                          </h4>
                          <span className="text-zinc-400 text-xs">·</span>
                          <span className="text-xs font-bold text-brand-blue">
                            {exp.organization}
                          </span>
                          {exp.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue font-semibold border border-brand-blue/20">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed mt-1">
                          {exp.description}
                        </p>
                      </div>

                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-semibold whitespace-nowrap self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
