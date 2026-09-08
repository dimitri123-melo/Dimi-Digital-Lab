'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { VisualProof } from '@/data/proofs';
import { useLanguage } from '@/context/LanguageContext';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ImageViewerModalProps {
  proof: VisualProof | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function ImageViewerModal({
  proof,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: ImageViewerModalProps) {
  const { language, t } = useLanguage();
  const [scale, setScale] = useState(1);

  // Reset zoom whenever image changes or opens
  useEffect(() => {
    setScale(1);
  }, [proof, isOpen]);

  // Handle escape and arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext && hasNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen || !proof) return null;

  const title = language === 'fr' ? proof.titleFr : proof.titleEn;
  const serviceName = language === 'fr' ? proof.serviceNameFr : proof.serviceNameEn;
  const description = language === 'fr' ? proof.descriptionFr : proof.descriptionEn;
  const status = language === 'fr' ? proof.authenticityStatusFr : proof.authenticityStatusEn;
  const highlights = language === 'fr' ? proof.highlightsFr : proof.highlightsEn;

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full h-16 border-b border-zinc-800/80 px-4 md:px-8 flex items-center justify-between z-20 bg-zinc-950/80 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/20 text-brand-blue-light border border-brand-blue/30">
            <CheckCircle2 size={13} />
            {t.modal.visualProof}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            {status}
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            title={t.modal.zoomOut}
            aria-label={t.modal.zoomOut}
          >
            <ZoomOut size={18} />
          </button>
          <span className="text-xs font-mono text-zinc-400 w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            title={t.modal.zoomIn}
            aria-label={t.modal.zoomIn}
          >
            <ZoomIn size={18} />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            title={t.modal.reset}
            aria-label={t.modal.reset}
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={onClose}
            className="ml-3 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-colors"
            title={t.modal.close}
            aria-label={t.modal.close}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Navigation Arrows */}
        {hasPrev && onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
            aria-label={t.modal.prev}
            title={t.modal.prev}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {hasNext && onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
            aria-label={t.modal.next}
            title={t.modal.next}
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image Container */}
        <div
          className="relative max-w-6xl w-full max-h-[75vh] h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{ transform: `scale(${scale})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={proof.src}
            alt={title}
            fill
            className="object-contain drop-shadow-2xl select-none"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        className="w-full border-t border-zinc-800/80 p-4 md:px-8 bg-zinc-950/90 backdrop-blur-md z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-xs uppercase font-mono tracking-wider text-brand-blue">
              {serviceName}
            </span>
            <span className="text-zinc-600">·</span>
            <h3 className="font-heading font-semibold text-white text-base md:text-lg">
              {title}
            </h3>
          </div>
          <p className="text-zinc-400 text-xs md:text-sm max-w-3xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {highlights.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          onClick={() => onClose()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white text-xs md:text-sm font-medium transition-colors whitespace-nowrap shadow-lg shadow-brand-blue/20"
        >
          {t.modal.startProjectWithCapability}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
