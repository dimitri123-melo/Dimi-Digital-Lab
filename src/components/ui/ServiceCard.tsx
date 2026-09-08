'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Service } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import {
  Target, Users, TrendingUp, BarChart3, Calendar, MessageSquare,
  Search, Globe, Palette, Video, Image as ImageIcon, Sparkles, Wand2, Camera,
  Film, Layers, Code2, Layout, Database, Server, Smartphone, Monitor,
  Cpu, Zap, Settings, PenTool, Share2, LineChart, Megaphone,
  ShoppingBag, FileText, Lightbulb, Rocket, Eye, Box, Hash, Mail,
  ChevronDown, LucideIcon, Maximize2, CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  target: Target, users: Users, 'trending-up': TrendingUp, 'bar-chart-3': BarChart3,
  'bar-chart-2': BarChart3, calendar: Calendar, 'message-square': MessageSquare,
  search: Search, globe: Globe, palette: Palette, video: Video, image: ImageIcon,
  sparkles: Sparkles, wand2: Wand2, camera: Camera, film: Film, layers: Layers,
  'code-2': Code2, code2: Code2, layout: Layout, database: Database, server: Server,
  smartphone: Smartphone, monitor: Monitor, cpu: Cpu, zap: Zap, settings: Settings,
  'pen-tool': PenTool, 'share-2': Share2, 'line-chart': LineChart, megaphone: Megaphone,
  'shopping-bag': ShoppingBag, 'file-text': FileText, lightbulb: Lightbulb,
  rocket: Rocket, eye: Eye, box: Box, hash: Hash, mail: Mail,
};

interface ServiceCardProps {
  service: Service;
  index: number;
  onInspectProof?: (proofId: string) => void;
}

export function ServiceCard({ service, index, onInspectProof }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();
  const Icon = iconMap[service.icon] || Sparkles;

  const name = language === 'fr' && service.nameFr ? service.nameFr : service.name;
  const description = language === 'fr' && service.descriptionFr ? service.descriptionFr : service.description;
  const deliverables = language === 'fr' && service.deliverablesFr ? service.deliverablesFr : service.deliverables;
  const targetAudience = language === 'fr' && service.targetAudienceFr ? service.targetAudienceFr : service.targetAudience;
  const outcome = language === 'fr' && service.outcomeFr ? service.outcomeFr : service.outcome;

  return (
    <div
      className={`card-surface rounded-xl p-6 transition-all duration-300 ${
        isExpanded
          ? 'border-brand-blue/60 ring-1 ring-brand-blue/20 bg-zinc-50 dark:bg-surface-100'
          : 'hover:border-brand-blue/40 hover:shadow-md'
      }`}
    >
      <div
        className="flex items-start justify-between cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-zinc-900 dark:text-white text-base md:text-lg">
              {name}
            </h4>
            {service.proofSrc && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-blue">
                <CheckCircle2 size={11} />
                {t.services.categoryProofBadge}
              </span>
            )}
          </div>
        </div>

        <button
          className="p-1 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          aria-label={isExpanded ? 'Collapse service details' : 'Expand service details'}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isExpanded ? 'rotate-180 text-brand-blue' : ''
            }`}
          />
        </button>
      </div>

      <p
        className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {description}
      </p>

      {/* Expanded Details */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isExpanded ? '600px' : '0px', opacity: isExpanded ? 1 : 0 }}
      >
        <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              {t.services.whatIDeliver}
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 text-xs md:text-sm mt-0.5">
              {deliverables}
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              {t.services.whoItsFor}
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 text-xs md:text-sm mt-0.5">
              {targetAudience}
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              {t.services.expectedOutcome}
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 text-xs md:text-sm mt-0.5">
              {outcome}
            </p>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {service.tools.map((tool, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-surface-200 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Linked Visual Proof Button */}
          {service.proofSrc && service.proofId && onInspectProof && (
            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onInspectProof(service.proofId!);
                }}
                className="w-full mt-2 py-2 px-3 rounded-lg border border-brand-blue/30 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue-dark dark:text-brand-blue-light text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Maximize2 size={13} />
                {t.services.inspectProof}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
