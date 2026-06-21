import React from 'react';

interface SystemSignalCardProps {
  signal: string;
  value: string;
  status: 'active' | 'dormant' | 'locked' | 'validated';
  description?: string;
}

const statusConfig = {
  active: { label: 'ACTIVE', color: '#34D399' },
  dormant: { label: 'DORMANT', color: '#94A3B8' },
  locked: { label: 'LOCKED', color: '#FB7185' },
  validated: { label: 'VALIDATED', color: '#22D3EE' },
};

export default function SystemSignalCard({ signal, value, status, description }: SystemSignalCardProps) {
  const cfg = statusConfig[status];
  return (
    <div className="p-4 rounded border border-[#263244] bg-[#111827] flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wide">{signal}</span>
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded border"
          style={{ color: cfg.color, borderColor: `${cfg.color}40`, backgroundColor: `${cfg.color}10` }}
        >
          {cfg.label}
        </span>
      </div>
      <p className="text-sm font-semibold text-[#F8FAFC]">{value}</p>
      {description && <p className="text-xs text-[#94A3B8] leading-relaxed">{description}</p>}
    </div>
  );
}
