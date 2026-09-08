'use client';

import React, { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { hasBeenInView } = useInView(ref, { threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  const directionTransforms: Record<string, string> = {
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(24px)',
    right: 'translateX(-24px)',
  };

  const baseTransform = prefersReducedMotion ? 'none' : directionTransforms[direction];

  const style: React.CSSProperties = {
    opacity: hasBeenInView ? 1 : 0,
    transform: hasBeenInView ? 'none' : baseTransform,
    transition: prefersReducedMotion
      ? `opacity ${duration}ms ease-out ${delay}ms`
      : `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
