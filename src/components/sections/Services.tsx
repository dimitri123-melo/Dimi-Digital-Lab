'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { serviceDivisions } from '@/data/services';
import { visualProofs } from '@/data/proofs';
import { useLanguage } from '@/context/LanguageContext';
import { Maximize2, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesProps {
  onInspectProof?: (proofId: string) => void;
}

export default function Services({ onInspectProof }: ServicesProps) {
  const [activeDivision, setActiveDivision] = useState(0);
  const { language, t } = useLanguage();

  const division = serviceDivisions[activeDivision];
  const divisionTitle = language === 'fr' && division.titleFr ? division.titleFr : division.title;
  const divisionSubtitle = language === 'fr' && division.subtitleFr ? division.subtitleFr : division.subtitle;
  const divisionDescription = language === 'fr' && division.descriptionFr ? division.descriptionFr : division.description;

  // Find all proofs belonging to this division
  const divisionProofs = visualProofs.filter((p) => {
    if (division.id === 'digital-marketing') return p.division === 'digital-marketing';
    if (division.id === 'ai-creative-studio') return p.division === 'ai-creative';
    if (division.id === 'web-software-development') {
      return p.division === 'web-development' || p.division === 'software';
    }
    return false;
  });

  const heroProof = divisionProofs.find((p) => p.id === division.heroProofId) || divisionProofs[0];
  const heroProofTitle = heroProof
    ? language === 'fr'
      ? heroProof.titleFr
      : heroProof.titleEn
    : '';

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-surface relative transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={1}
            title={t.services.sectionTitle}
            subtitle={t.services.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        {/* Division Selector Tabs (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-12">
          {serviceDivisions.map((div, idx) => {
            const title = language === 'fr' && div.titleFr ? div.titleFr : div.title;
            const subtitle = language === 'fr' && div.subtitleFr ? div.subtitleFr : div.subtitle;
            const isActive = activeDivision === idx;

            return (
              <button
                key={div.id}
                onClick={() => setActiveDivision(idx)}
                className={`flex flex-col items-start p-6 rounded-xl text-left transition-all duration-300 border ${
                  isActive
                    ? 'border-brand-blue bg-white dark:bg-surface-50 shadow-md ring-1 ring-brand-blue/20'
                    : 'border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-surface-100/50 hover:bg-white dark:hover:bg-surface-50 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-brand-blue text-white'
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-mono text-brand-blue flex items-center gap-1">
                      <Sparkles size={12} />
                      Active Division
                    </span>
                  )}
                </div>
                <span className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-1">
                  {title}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  {subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Division Accordion Pills (Mobile) */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-8 hide-scrollbar">
          {serviceDivisions.map((div, idx) => {
            const title = language === 'fr' && div.titleFr ? div.titleFr : div.title;
            const isActive = activeDivision === idx;

            return (
              <button
                key={div.id}
                onClick={() => setActiveDivision(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all border ${
                  isActive
                    ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                    : 'bg-white dark:bg-surface-100 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
                }`}
              >
                0{idx + 1} · {title}
              </button>
            );
          })}
        </div>

        {/* Active Division Overview */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue">
                Division 0{activeDivision + 1} · {divisionSubtitle}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
                {divisionTitle}
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
              {divisionDescription}
            </p>
          </div>
        </div>

        {/* Primary Visual Hero Proof for this Division */}
        {heroProof && (
          <ScrollReveal delay={150}>
            <div className="mb-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-50 shadow-xl">
              {/* Proof Header Bar */}
              <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-surface-100/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    {heroProofTitle}
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                    {language === 'fr' ? heroProof.authenticityStatusFr : heroProof.authenticityStatusEn}
                  </span>
                </div>

                {onInspectProof && (
                  <button
                    onClick={() => onInspectProof(heroProof.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue-dark transition-colors shadow-sm"
                  >
                    <Maximize2 size={13} />
                    <span>{t.services.inspectProof}</span>
                  </button>
                )}
              </div>

              {/* Proof Image in Frame */}
              <div
                className="relative aspect-[16/9] w-full bg-zinc-950 cursor-pointer group/proof"
                onClick={() => onInspectProof && onInspectProof(heroProof.id)}
              >
                <Image
                  src={heroProof.src}
                  alt={heroProofTitle}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover/proof:scale-[1.01]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/proof:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-semibold shadow-2xl">
                    <Maximize2 size={15} />
                    {t.services.inspectProof}
                  </span>
                </div>
              </div>

              {/* Proof Description Footer */}
              <div className="p-6 bg-zinc-50 dark:bg-surface-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm max-w-3xl leading-relaxed">
                  {language === 'fr' ? heroProof.descriptionFr : heroProof.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(language === 'fr' ? heroProof.highlightsFr : heroProof.highlightsEn).map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded bg-white dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Services Grid */}
        <div className="mb-20">
          <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-6">
            Detailed Service Capabilities · {division.services.length} Specializations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                onInspectProof={onInspectProof}
              />
            ))}
          </div>
        </div>

        {/* Division Visual Proof Showcase Gallery (All remaining approved images for this division) */}
        <div className="mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue">
                Visual Proof Library
              </span>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-0.5">
                {divisionTitle} · Workstation & Deliverable Proofs
              </h4>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              {divisionProofs.length} Official Assets Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisionProofs.map((proof) => {
              const pTitle = language === 'fr' ? proof.titleFr : proof.titleEn;
              const pService = language === 'fr' ? proof.serviceNameFr : proof.serviceNameEn;
              const pStatus = language === 'fr' ? proof.authenticityStatusFr : proof.authenticityStatusEn;

              return (
                <div
                  key={proof.id}
                  className="card-surface rounded-xl overflow-hidden group/thumb cursor-pointer flex flex-col"
                  onClick={() => onInspectProof && onInspectProof(proof.id)}
                >
                  <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
                    <Image
                      src={proof.src}
                      alt={pTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/80 backdrop-blur-md text-white border border-white/10">
                        {pStatus}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <Maximize2 size={13} />
                        {t.services.viewVisualProof}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-brand-blue uppercase tracking-wider">
                        {pService}
                      </span>
                      <h5 className="font-heading font-semibold text-zinc-900 dark:text-white text-sm mt-0.5 line-clamp-1">
                        {pTitle}
                      </h5>
                    </div>
                    <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                      <span>Click to inspect</span>
                      <ArrowUpRight size={14} className="text-brand-blue" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Division CTA */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold tracking-wide transition-colors shadow-lg shadow-brand-blue/20"
            >
              {t.services.startProject}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
