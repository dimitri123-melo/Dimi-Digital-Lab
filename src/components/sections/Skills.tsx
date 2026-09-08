'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillGroup as SkillGroupComponent } from '@/components/ui/SkillGroup';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { skillGroups } from '@/data/skills';
import { useLanguage } from '@/context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const frontendTech = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
    'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery',
  ];

  const backendTech = [
    'PHP', 'Java', 'Spring Boot', 'Kotlin', 'REST APIs',
  ];

  const databaseTech = [
    'MySQL', 'Database Architecture', 'Relational Schemas', 'SQL Query Optimization',
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-surface-50 relative transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={4}
            title={t.skills.sectionTitle}
            subtitle={t.skills.sectionSubtitle}
          />
        </ScrollReveal>

        {/* 4 Core Competency Quadrants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-20">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={group.title} delay={100 * (idx + 1)}>
              <SkillGroupComponent group={group} />
            </ScrollReveal>
          ))}
        </div>

        {/* Official Technology Ecosystem */}
        <ScrollReveal delay={200}>
          <div className="pt-16 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-blue">
                  Production Toolchain
                </span>
                <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                  {t.skills.techStackTitle}
                </h3>
              </div>
              <p className="text-xs text-zinc-500 font-mono">
                Clean Architectures · Standardized Stacks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Ecosystem */}
              <div className="card-surface rounded-xl p-6">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-4">
                  {t.skills.frontend}
                </span>
                <div className="flex flex-wrap gap-2">
                  {frontendTech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-mono text-zinc-800 dark:text-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Ecosystem */}
              <div className="card-surface rounded-xl p-6">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-4">
                  {t.skills.backend}
                </span>
                <div className="flex flex-wrap gap-2">
                  {backendTech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-mono text-zinc-800 dark:text-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database & Data Ecosystem */}
              <div className="card-surface rounded-xl p-6">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-4">
                  {t.skills.database}
                </span>
                <div className="flex flex-wrap gap-2">
                  {databaseTech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-100 dark:bg-surface-100 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-mono text-zinc-800 dark:text-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
