import React from 'react';

interface DeviceMockupProps {
  type: 'browser' | 'phone' | 'tablet';
  children: React.ReactNode;
  className?: string;
}

export function DeviceMockup({ type, children, className = '' }: DeviceMockupProps) {
  if (type === 'browser') {
    return (
      <div className={`flex flex-col rounded-xl border border-zinc-800 bg-surface-50 overflow-hidden ${className}`}>
        <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-surface-50/50">
          <div className="flex gap-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 bg-surface-100 rounded px-3 py-1 text-xs text-zinc-600 truncate">
            dimidigitallab.com
          </div>
        </div>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  if (type === 'phone') {
    return (
      <div className={`flex flex-col rounded-[2rem] border-[3px] border-zinc-700 bg-surface-50 overflow-hidden ${className}`}>
        <div className="flex justify-center py-2">
          <div className="w-20 h-5 bg-surface rounded-full" />
        </div>
        <div className="overflow-hidden rounded-b-[1.8rem]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col rounded-2xl border-2 border-zinc-700 bg-surface-50 overflow-hidden ${className}`}>
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  );
}
