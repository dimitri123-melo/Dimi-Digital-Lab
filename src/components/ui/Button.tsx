'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  icon,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (size !== 'lg' || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.15;
    const y = (e.clientY - top - height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (size !== 'lg') return;
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out active:scale-[0.98] hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none rounded-lg';
  
  const variantStyles = {
    primary: 'bg-brand-blue hover:bg-brand-blue-dark text-white shadow-sm hover:shadow-md shadow-brand-blue/20',
    secondary: 'bg-transparent border border-zinc-700 hover:border-brand-blue text-white',
    ghost: 'bg-transparent hover:bg-surface-100 text-zinc-400 hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const combinedClassName = [baseStyles, variantStyles[variant], sizeStyles[size], className].filter(Boolean).join(' ');
  
  const transformStyle = size === 'lg' ? { transform: `translate3d(${position.x}px, ${position.y}px, 0)` } : {};

  if (href) {
    return (
      <Link
        href={href}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={combinedClassName}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
