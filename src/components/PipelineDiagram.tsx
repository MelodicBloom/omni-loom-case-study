'use client';

import React, { useState } from 'react';
import type { PipelineStep } from '@/lib/caseStudySchema';

interface PipelineDiagramProps {
  steps: PipelineStep[];
}

export default function PipelineDiagram({ steps }: PipelineDiagramProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="pipeline" className="px-6 py-24 bg-[#0D111A]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">Compiler Pipeline</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Intent → Artifact
        </h2>
        <p className="text-[#94A3B8] mb-12 max-w-xl">
          Every step is deterministic, validated, and auditable. Hover a stage to inspect its role.
        </p>

        {/* Desktop horizontal flow */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.step}>
              <button
                onMouseEnter={() => setActive(step.step)}
                onMouseLeave={() => setActive(null)}
                className={`flex-1 group flex flex-col items-center text-center p-4 rounded border transition-all duration-200 ${
                  active === step.step
                    ? 'border-[#22D3EE] bg-[#111827] shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                    : 'border-[#263244] bg-[#111827]/50 hover:border-[#263244]/80'
                }`}
              >
                <span className="text-xs font-mono text-[#22D3EE]/60 mb-2">0{step.step}</span>
                <span className="text-sm font-semibold text-[#F8FAFC] leading-tight mb-2">{step.label}</span>
                <span
                  className={`text-xs text-[#94A3B8] leading-relaxed transition-all duration-200 ${
                    active === step.step ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  {step.description}
                </span>
                {step.label === 'Fabrication Output' && (
                  <span className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]">
                    LOCKED
                  </span>
                )}
              </button>
              {i < steps.length - 1 && (
                <div className="flex items-center px-1 pt-6">
                  <span className="text-[#263244] text-lg">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="flex md:hidden flex-col gap-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex gap-4 p-4 rounded border border-[#263244] bg-[#111827]"
            >
              <span className="text-xs font-mono text-[#22D3EE] mt-0.5 w-6 shrink-0">0{step.step}</span>
              <div>
                <p className="text-sm font-semibold text-[#F8FAFC] mb-1">{step.label}</p>
                <p className="text-xs text-[#94A3B8]">{step.description}</p>
                {step.label === 'Fabrication Output' && (
                  <span className="mt-2 inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]">
                    LOCKED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
