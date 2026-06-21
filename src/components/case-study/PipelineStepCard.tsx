import React from 'react';
import type { PipelineStep } from '@/lib/caseStudySchema';

interface PipelineStepCardProps {
  step: PipelineStep;
  isLast?: boolean;
}

export default function PipelineStepCard({ step, isLast }: PipelineStepCardProps) {
  const isLocked = step.label === 'Fabrication Output';
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono shrink-0 ${isLocked ? 'border-[#FB7185] text-[#FB7185] bg-[#FB7185]/10' : 'border-[#22D3EE] text-[#22D3EE] bg-[#22D3EE]/10'}`}>
          {String(step.step).padStart(2, '0')}
        </div>
        {!isLast && <div className="w-px flex-1 bg-[#263244] mt-1" />}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-semibold text-[#F8FAFC]">{step.label}</p>
          {isLocked && <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]">LOCKED</span>}
        </div>
        <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
