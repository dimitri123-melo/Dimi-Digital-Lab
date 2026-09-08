'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

interface PortfolioProps {
  onInspectProof?: (proofId: string) => void;
}

export default function Portfolio({ onInspectProof }: PortfolioProps) {
  const [activeCategoryKey, setActiveCategoryKey] = useState<'all' | 'digital-marketing' | 'ai-creative' | 'web-development' | 'software'>('all');
  const { t } = useLanguage();

  const categoryFilters = [
    { key: 'all' as const, label: t.portfolio.categories.all },
    { key: 'digital-marketing' as const, label: t.portfolio.categories.marketing },
    { key: 'ai-creative' as const, label: t.portfolio.categories.aiCreative },
    { key: 'web-development' as const, label: t.portfolio.categories.webDev },
    { key: 'software' as const, label: t.portfolio.categories.software },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategoryKey === 'all') return true;
    return project.category === activeCategoryKey;
  });

  return (
    <section id="work" className="py-24 bg-white dark:bg-surface-50 relative transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={2}
            title={t.portfolio.sectionTitle}
            subtitle={t.portfolio.sectionSubtitle}
          />
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex overflow-x-auto pb-4 mb-16 gap-3 hide-scrollbar">
            {categoryFilters.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategoryKey(category.key)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategoryKey === category.key
                    ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20'
                    : 'bg-zinc-100 dark:bg-surface-100 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects List with Real Visual Proofs */}
        <div className="flex flex-col gap-24 transition-opacity duration-500 ease-in-out min-h-[500px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx % 2 === 0 ? 100 : 200}>
                <ProjectCard
                  project={project}
                  index={idx}
                  reversed={idx % 2 !== 0}
                  onInspectProof={onInspectProof}
                />
              </ScrollReveal>
            ))
          ) : (
            <div className="text-center py-20 text-zinc-500 font-mono text-sm">
              {t.portfolio.noProjects}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-32 text-center flex flex-col items-center gap-6 p-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-surface">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-900 dark:text-white">
              {t.portfolio.ctaTitle}
            </h3>
            <Button variant="primary" size="lg" href="#contact">
              {t.portfolio.ctaButton}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
