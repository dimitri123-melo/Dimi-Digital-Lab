'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side Content */}
          <div className="w-full lg:w-[56%] flex flex-col gap-6">
            {/* Studio Badge & Location */}
            <ScrollReveal delay={100} duration={700}>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue-dark dark:text-brand-blue-light text-xs font-semibold">
                  <Sparkles size={12} />
                  <span>{t.hero.taglineBadge}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                  <Globe size={13} className="text-brand-blue" />
                  <span>{t.hero.location}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Slogan Headline */}
            <ScrollReveal delay={200} duration={800}>
              <h1 className="font-heading font-bold text-zinc-900 dark:text-white text-[clamp(2.75rem,5.5vw,5rem)] leading-[1.05] tracking-tight">
                {t.hero.heading1}<span className="text-brand-blue"></span><br />
                {t.hero.heading2}<span className="text-brand-blue"></span><br />
                {t.hero.heading3}<span className="text-brand-blue"></span>
              </h1>
            </ScrollReveal>

            {/* Positioning Subtitle */}
            <ScrollReveal delay={300} duration={800}>
              <p className="text-brand-blue font-mono font-medium text-sm sm:text-base tracking-wide">
                {t.hero.role}
              </p>
            </ScrollReveal>

            {/* Narrative Description */}
            <ScrollReveal delay={400} duration={800}>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed">
                {t.hero.description}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={500} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button variant="primary" size="lg" href="#contact">
                  {t.hero.startProject}
                </Button>
                <Button variant="secondary" size="lg" href="#work">
                  {t.hero.viewWork}
                </Button>
              </div>
            </ScrollReveal>

            {/* Credible Capabilities Bar */}
            <ScrollReveal delay={600} duration={800}>
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800">
                  {t.hero.badge1}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800">
                  {t.hero.badge2}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800">
                  {t.hero.badge3}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Founder Profile Photo */}
          <div className="w-full lg:w-[44%] flex justify-center lg:justify-end">
            <ScrollReveal delay={250} duration={900} className="relative w-full max-w-[360px] sm:max-w-[420px]">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800 p-2.5 bg-white/70 dark:bg-surface-100/70 shadow-2xl backdrop-blur-sm">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/images/dimitri.jpg"
                    alt="Dimitri Kuete — Founder & Lead Specialist at DIMI DIGITAL LAB"
                    fill
                    className="object-cover object-center scale-[1.02] hover:scale-100 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  {/* Subtle edge gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Founder Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-20 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-sm tracking-wide">Dimitri Kuete</div>
                    <div className="text-[11px] text-zinc-300 font-mono">DIMI DIGITAL LAB Founder</div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Available for projects" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
