'use client';

import React from 'react';
import { SkillGroup as SkillGroupType } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Megaphone, Palette, Code2, Cpu, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  palette: Palette,
  'code-2': Code2,
  code2: Code2,
  cpu: Cpu,
};

interface SkillGroupProps {
  group: SkillGroupType;
}

const levelConfig = {
  core: { label: 'CORE', dotClass: 'bg-brand-blue', textClass: 'text-brand-blue' },
  proficient: { label: 'PROFICIENT', dotClass: 'bg-zinc-400', textClass: 'text-zinc-600 dark:text-zinc-400' },
  working: { label: 'WORKING', dotClass: 'bg-zinc-400', textClass: 'text-zinc-500 dark:text-zinc-500' },
};

export function SkillGroup({ group }: SkillGroupProps) {
  const { language } = useLanguage();
  const Icon = iconMap[group.icon] || Cpu;
  const title = language === 'fr' && group.titleFr ? group.titleFr : group.title;

  return (
    <div className="card-surface rounded-xl p-6 hover:border-brand-blue/40 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-heading font-semibold text-zinc-900 dark:text-white tracking-wide text-base">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {group.skills.map((skill, i) => {
          const config = levelConfig[skill.level];
          return (
            <li key={i} className="flex items-center justify-between">
              <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                {skill.name}
              </span>
              <span className={`flex items-center gap-1.5 text-[11px] font-mono tracking-wider ${config.textClass}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass}`} />
                {config.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
