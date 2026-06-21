import React from 'react';
import type { ArchitectureBlock } from '@/lib/caseStudySchema';

interface ArchitectureCardProps {
  block: ArchitectureBlock;
}

export default function ArchitectureCard({ block }: ArchitectureCardProps) {
  return (
    <div className="p-5 rounded border border-[#263244] bg-[#111827] flex flex-col gap-4 hover:border-[#22D3EE]/30 transition-colors">
      <div>
        <p className="text-xs font-mono text-[#22D3EE] mb-1">{block.type}</p>
        <h3 className="text-base font-bold text-[#F8FAFC]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{block.name}</h3>
      </div>
      <p className="text-sm text-[#94A3B8] leading-relaxed">{block.responsibility}</p>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div>
          <p className="font-mono text-[#34D399] mb-1 uppercase tracking-wide">Inputs</p>
          <ul className="space-y-0.5">{block.inputs.map((input) => <li key={input} className="text-[#94A3B8]">{input}</li>)}</ul>
        </div>
        <div>
          <p className="font-mono text-[#8B5CF6] mb-1 uppercase tracking-wide">Outputs</p>
          <ul className="space-y-0.5">{block.outputs.map((output) => <li key={output} className="text-[#94A3B8]">{output}</li>)}</ul>
        </div>
      </div>
      <div>
        <p className="font-mono text-[10px] text-[#FB7185] uppercase tracking-wide mb-1">Constraints</p>
        <div className="flex flex-wrap gap-1">
          {block.constraints.map((c) => <span key={c} className="text-[10px] px-2 py-0.5 rounded border border-[#263244] text-[#94A3B8] font-mono">{c}</span>)}
        </div>
      </div>
    </div>
  );
}
