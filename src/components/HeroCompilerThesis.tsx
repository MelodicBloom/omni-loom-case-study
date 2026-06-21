'use client';

import React from 'react';

interface HeroCompilerThesisProps {
  title: string;
  tagline: string;
  thesis: string;
}

export default function HeroCompilerThesis({ title, tagline, thesis }: HeroCompilerThesisProps) {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 py-24 bg-[#080A0F] overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Compiler line accent */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#22D3EE]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-xs font-mono tracking-[0.25em] text-[#22D3EE] uppercase mb-6">
          Flagship Case Study
        </p>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#F8FAFC] leading-none mb-4"
            style={{ fontFamily: "'Space Grotesk', 'Inter Tight', sans-serif" }}>
          {title}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[#94A3B8] mb-10 max-w-2xl"
           style={{ fontFamily: "'Inter', sans-serif" }}>
          {tagline}
        </p>

        {/* Thesis block */}
        <div className="border-l-2 border-[#8B5CF6] pl-6 py-2 mb-12">
          <p className="text-base md:text-lg text-[#F8FAFC]/80 leading-relaxed max-w-2xl"
             style={{ fontFamily: "'Inter', sans-serif" }}>
            {thesis}
          </p>
        </div>

        {/* Pipeline preview */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#94A3B8]">
          {['Intent', 'JobEnvelope', 'ToolPlan', 'Validated Geometry', 'Artifact Manifest', 'Fabrication Output'].map(
            (node, i, arr) => (
              <React.Fragment key={node}>
                <span className="px-3 py-1.5 rounded border border-[#263244] bg-[#111827] text-[#22D3EE]">
                  {node}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[#263244]">→</span>
                )}
              </React.Fragment>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#architecture"
            className="px-6 py-3 rounded bg-[#22D3EE] text-[#080A0F] font-semibold text-sm hover:bg-[#22D3EE]/90 transition-colors"
          >
            Explore Architecture
          </a>
          <a
            href="#pipeline"
            className="px-6 py-3 rounded border border-[#263244] text-[#F8FAFC] font-semibold text-sm hover:border-[#22D3EE]/50 transition-colors"
          >
            View Pipeline
          </a>
          <a
            href="#roadmap"
            className="px-6 py-3 rounded border border-[#263244] text-[#94A3B8] font-semibold text-sm hover:border-[#8B5CF6]/50 transition-colors"
          >
            Build Roadmap
          </a>
        </div>
      </div>
    </section>
  );
}
