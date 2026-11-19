'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white dark:bg-surface-50 transition-colors duration-200"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Core Positioning & Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Pill */}
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-surface-100 text-xs font-mono text-zinc-900 dark:text-zinc-100 font-semibold shadow-sm w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.hero.statusAvailable}</span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={200}>
              <h1 className="font-heading font-extrabold text-zinc-950 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight">
                {t.hero.headlinePart1}{' '}
                <span className="block text-zinc-900 dark:text-zinc-100">
                  {t.hero.headlinePart2}
                </span>
                <span className="block text-brand-blue">
                  {t.hero.headlinePart3}
                </span>
              </h1>
            </ScrollReveal>

            {/* Professional Role Title */}
            <ScrollReveal delay={250}>
              <p className="text-xs sm:text-sm uppercase tracking-wider font-mono font-bold text-brand-blue">
                {t.hero.role}
              </p>
            </ScrollReveal>

            {/* Supporting Description with Maximum Contrast */}
            <ScrollReveal delay={300}>
              <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {t.hero.description}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={350}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm tracking-wide shadow-md shadow-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/35 transition-all"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100/80 hover:bg-zinc-200/80 dark:bg-surface-100 dark:hover:bg-surface-200 text-zinc-950 dark:text-white font-semibold text-sm tracking-wide transition-all shadow-sm"
                >
                  <span>{t.hero.secondaryCta}</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Live SaaS Preview Cards */}
            <ScrollReveal delay={400}>
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-700 dark:text-zinc-300 font-bold">
                  {t.hero.saasLabel}
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://school-ios.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white dark:bg-surface-100 border border-zinc-300 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 hover:border-brand-blue transition-colors shadow-sm group"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold">SchoolIOS</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">Education SaaS</span>
                    <ExternalLink size={13} className="text-zinc-500 group-hover:text-brand-blue" />
                  </a>

                  <a
                    href="https://www.chop237.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white dark:bg-surface-100 border border-zinc-300 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 hover:border-brand-blue transition-colors shadow-sm group"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold">Chop237</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">Food SaaS</span>
                    <ExternalLink size={13} className="text-zinc-500 group-hover:text-brand-blue" />
                  </a>

                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100/70 dark:bg-surface-200/50 border border-dashed border-zinc-300 dark:border-zinc-700 text-xs text-zinc-700 dark:text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-semibold">CardLink</span>
                    <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400">In Dev</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Crisp High-Resolution Portrait Studio Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={250} className="w-full max-w-[380px] sm:max-w-[420px]">
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white via-zinc-100 to-zinc-200 dark:from-surface-100 dark:via-surface dark:to-black border border-zinc-300 dark:border-zinc-800 shadow-xl backdrop-blur-md">
                {/* Studio Stage with Ambient Light */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200/60 to-zinc-200/90 dark:from-surface-200 dark:via-surface-100 dark:to-surface flex items-end justify-center border border-zinc-200/80 dark:border-zinc-700/60">
                  {/* Subtle backlight glow behind Dimitri's head */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,102,255,0.08),transparent_65%)] dark:bg-[radial-gradient(circle_at_50%_35%,rgba(0,102,255,0.22),transparent_65%)] pointer-events-none" />

                  <Image
                    src="/images/dimitri_transparent.png"
                    alt="Dimitri Kuete — Founder of DIMI DIGITAL LAB"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain object-bottom"
                    priority
                  />
                </div>

                {/* Identity Badge Overlay */}
                <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-surface-200 border border-zinc-300 dark:border-zinc-700 shadow-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-sm text-zinc-950 dark:text-white">
                      Dimitri Kuete
                    </span>
                    <span className="text-[11px] font-mono text-brand-blue font-bold">
                      DIMI DIGITAL LAB · Founder
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                    <Globe size={13} className="text-brand-blue" />
                    <span>Cameroon</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
