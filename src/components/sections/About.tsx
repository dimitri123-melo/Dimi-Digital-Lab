'use client';

import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, ShieldCheck } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-surface relative transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={3}
            title={t.about.sectionTitle}
            subtitle={t.about.sectionSubtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column - Authentic Portrait */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal delay={100} direction="right">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800 p-2.5 bg-white dark:bg-surface-100 shadow-xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/images/dimitri.jpg"
                    alt="Dimitri Kuete — Founder, DIMI DIGITAL LAB"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="mt-4 text-center lg:text-left">
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white tracking-wide">
                  {t.about.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium mt-0.5">
                  {t.about.founderTitle}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-brand-blue-dark dark:text-brand-blue-light font-medium mt-2">
                  <Globe size={13} />
                  <span>Based in Cameroon · Serving Clients Worldwide</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Professional Philosophy & Bio */}
          <div className="lg:col-span-8 flex flex-col gap-8 lg:pl-4">
            <ScrollReveal delay={200}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
                {t.about.headline} <span className="text-brand-blue">{t.about.headlineAccent}</span>
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-5 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
              <ScrollReveal delay={300}>
                <p>{t.about.bioParagraph1}</p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p>{t.about.bioParagraph2}</p>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <p>{t.about.bioParagraph3}</p>
              </ScrollReveal>
            </div>

            {/* Capability Badges */}
            <ScrollReveal delay={600}>
              <div className="flex flex-wrap gap-2.5 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                {t.about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-100 text-zinc-800 dark:text-zinc-300 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
