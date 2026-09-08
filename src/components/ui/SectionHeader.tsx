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
  const formattedNumber = typeof number === 'number' 
    ? String(number).padStart(2, '0') 
    : number;

  return (
    <ScrollReveal>
      <div className={`flex flex-col ${alignment === 'center' ? 'items-center text-center' : 'items-start text-left'} space-y-4 mb-16`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-widest text-brand-blue uppercase">
            {formattedNumber}
          </span>
          <span className="h-px w-8 bg-brand-blue/30" />
          <span className="text-zinc-400 tracking-wide uppercase text-sm">
            {subtitle}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-zinc-500 max-w-2xl text-lg mt-4">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
