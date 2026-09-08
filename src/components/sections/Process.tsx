'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProcessStep } from '@/components/ui/ProcessStep';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useLanguage();

  const steps = t.process.steps;

  return (
    <section id="process" className="py-24 bg-zinc-50 dark:bg-surface relative transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={5}
            title={t.process.sectionTitle}
            subtitle={t.process.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className="cursor-pointer"
              >
                <ProcessStep
                  step={step}
                  index={idx}
                  isActive={activeStep === idx}
                  totalSteps={steps.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
