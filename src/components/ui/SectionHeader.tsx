import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
  number: string | number;
  title: string;
  subtitle: string;
  description?: string;
  alignment?: 'left' | 'center';
}

export function SectionHeader({
  number,
  title,
  subtitle,
  description,
  alignment = 'left',
}: SectionHeaderProps) {
  const formattedNumber =
    typeof number === 'number' ? String(number).padStart(2, '0') : number;

  return (
    <ScrollReveal>
      <div
        className={`flex flex-col ${
          alignment === 'center' ? 'items-center text-center' : 'items-start text-left'
        } space-y-3 mb-12`}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-brand-blue font-bold uppercase">
            {formattedNumber}
          </span>
          <span className="h-px w-8 bg-brand-blue/50" />
          <span className="text-zinc-700 dark:text-zinc-300 tracking-wider uppercase text-xs sm:text-sm font-semibold font-mono">
            {subtitle}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-zinc-950 dark:text-white leading-tight tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl text-base sm:text-lg mt-3 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
