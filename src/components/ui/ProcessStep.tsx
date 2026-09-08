'use client';

import React from 'react';
import { ProcessStep as ProcessStepType } from '@/types';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isActive: boolean;
  totalSteps: number;
}

export function ProcessStep({ step, index, isActive, totalSteps }: ProcessStepProps) {
  return (
    <div
      className={`relative flex flex-col gap-3 p-6 rounded-xl border transition-all duration-300 ${
        isActive
          ? 'bg-white dark:bg-surface-100 border-brand-blue/50 shadow-md ring-1 ring-brand-blue/20'
          : 'bg-zinc-100/50 dark:bg-surface-50/50 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-heading text-3xl sm:text-4xl font-bold transition-colors duration-300 ${
            isActive ? 'text-brand-blue' : 'text-zinc-300 dark:text-zinc-700'
          }`}
        >
          {step.number}
        </span>
        <span
          className={`w-2 h-2 rounded-full ${
            isActive ? 'bg-brand-blue animate-ping' : 'bg-transparent'
          }`}
        />
      </div>

      <div>
        <h3
          className={`font-heading text-base sm:text-lg font-bold transition-colors duration-300 ${
            isActive ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400'
          }`}
        >
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
          {step.description}
        </p>

        {step.details && step.details.length > 0 && (
          <ul className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-1.5">
            {step.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
