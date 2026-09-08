'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Maximize2, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  reversed?: boolean;
  onInspectProof?: (proofId: string) => void;
}

export function ProjectCard({
  project,
  index,
  reversed = false,
  onInspectProof,
}: ProjectCardProps) {
  const { language, t } = useLanguage();

  const title = language === 'fr' && project.titleFr ? project.titleFr : project.title;
  const description = language === 'fr' && project.descriptionFr ? project.descriptionFr : project.description;
  const objective = language === 'fr' && project.objectiveFr ? project.objectiveFr : project.objective;
  const outcome = language === 'fr' && project.outcomeFr ? project.outcomeFr : project.outcome;
  const categoryLabel = language === 'fr' && project.categoryLabelFr ? project.categoryLabelFr : project.categoryLabel;
  const proofLabel = language === 'fr' && project.proofLabelFr ? project.proofLabelFr : project.proofLabel;
  const services = language === 'fr' && project.servicesFr ? project.servicesFr : project.services;

  const mainImage = project.images && project.images[0] ? project.images[0] : null;

  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group ${
        reversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Visual Proof Display Area */}
      <div className="w-full lg:w-3/5">
        <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-surface-100 shadow-xl dark:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
          {/* Browser-style Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-surface-50/90 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate max-w-[200px] sm:max-w-xs">
                dimidigitallab.com · proof-asset/{project.id}
              </span>
            </div>

            {/* Quick Inspect Trigger */}
            {onInspectProof && (
              <button
                onClick={() => onInspectProof(project.proofId)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-brand-blue hover:text-white hover:bg-brand-blue transition-colors"
                title={t.portfolio.inspectProof}
                aria-label={t.portfolio.inspectProof}
              >
                <Maximize2 size={13} />
                <span className="hidden sm:inline">{t.portfolio.inspectProof}</span>
              </button>
            )}
          </div>

          {/* Actual Real Image */}
          <div
            className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 cursor-pointer group/img"
            onClick={() => onInspectProof && onInspectProof(project.proofId)}
          >
            {mainImage ? (
              <Image
                src={mainImage.src}
                alt={mainImage.alt || title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-500">
                Visual Proof Asset
              </div>
            )}

            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-white border border-white/10 shadow-lg">
                <CheckCircle2 size={12} className="text-brand-blue" />
                {proofLabel}
              </span>
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-semibold shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                <Maximize2 size={14} />
                {t.portfolio.inspectProof}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-2/5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/20 px-3 py-1 rounded-full font-medium">
            {categoryLabel}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            {project.client}
          </span>
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
          {title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {objective && (
          <div className="pt-1">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              {t.portfolio.objective}
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 text-xs md:text-sm mt-0.5 leading-relaxed">
              {objective}
            </p>
          </div>
        )}

        {outcome && (
          <div>
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              {t.portfolio.outcome}
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 text-xs md:text-sm mt-0.5 leading-relaxed">
              {outcome}
            </p>
          </div>
        )}

        {/* Services & Tech Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-2 flex items-center gap-4">
          {onInspectProof && (
            <button
              onClick={() => onInspectProof(project.proofId)}
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark dark:hover:text-brand-blue-light font-medium text-sm group/link"
            >
              {t.portfolio.inspectProof}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
