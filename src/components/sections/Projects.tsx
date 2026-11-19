'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, CheckCircle2, X } from 'lucide-react';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 dark:bg-surface relative transition-colors duration-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            number={4}
            title={t.projects.sectionTitle}
            subtitle={t.projects.sectionSubtitle}
            alignment="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-center text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto -mt-4 text-base leading-relaxed">
            {t.projects.intro}
          </p>
        </ScrollReveal>

        {/* Projects List */}
        <div className="flex flex-col gap-20 mt-14">
          {t.projects.items.map((project, idx) => {
            const isReversed = idx % 2 !== 0;
            const isLive = project.status === 'live';

            return (
              <ScrollReveal key={project.id} delay={150}>
                <div
                  className={`rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-surface-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Gallery / Screenshots Showcase */}
                  <div
                    className={`lg:col-span-6 flex flex-col gap-4 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Primary Hero Screenshot */}
                    <div
                      className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-900 group cursor-pointer shadow-sm"
                      onClick={() =>
                        setSelectedImage({
                          src: project.images[0].src,
                          alt: project.images[0].alt,
                        })
                      }
                    >
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                        Click to enlarge screenshot
                      </div>
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 backdrop-blur-md text-white border border-white/20">
                        {project.images[0].caption || 'Main Dashboard'}
                      </div>
                    </div>

                    {/* Secondary Thumbnails */}
                    {project.images.length > 1 && (
                      <div className="grid grid-cols-3 gap-3">
                        {project.images.slice(1, 4).map((img, thumbIdx) => (
                          <div
                            key={thumbIdx}
                            className="relative aspect-video rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-900 group cursor-pointer shadow-sm"
                            onClick={() => setSelectedImage({ src: img.src, alt: img.alt })}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 1024px) 33vw, 15vw"
                            />
                            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/80 text-white">
                              {img.caption || `View 0${thumbIdx + 2}`}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details & Value Proposition */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between gap-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                            isLive
                              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              isLive ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                          />
                          <span>{isLive ? t.projects.liveBadge : t.projects.devBadge}</span>
                        </span>

                        <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-semibold uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white">
                          {project.name}
                        </h3>
                        <p className="text-sm font-bold text-brand-blue mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Problem Solved */}
                      <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-surface-200 border border-zinc-300/80 dark:border-zinc-700/80">
                        <span className="text-xs uppercase tracking-wider font-mono text-zinc-800 dark:text-zinc-200 font-bold block mb-1">
                          {t.projects.problemLabel}
                        </span>
                        <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Key Capabilities */}
                      <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-wider font-mono text-zinc-800 dark:text-zinc-200 font-bold">
                          {t.projects.capabilitiesLabel}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.capabilities.map((cap, capIdx) => (
                            <div
                              key={capIdx}
                              className="flex items-start gap-2 text-xs text-zinc-800 dark:text-zinc-200 font-medium"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-brand-blue flex-shrink-0 mt-0.5"
                              />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-surface-200 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                      {isLive && project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs tracking-wide shadow-md shadow-brand-blue/20 transition-colors"
                        >
                          <span>{t.projects.visitLiveCta}</span>
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-bold text-xs tracking-wide transition-colors"
                        >
                          <span>{t.projects.comingSoonCta}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for High-Res Screenshots */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
