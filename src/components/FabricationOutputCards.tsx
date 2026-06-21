'use client';

import React from 'react';

const OUTPUTS = [
  { adapter: 'CNC', format: 'G-code preview', description: 'Toolpath simulation for subtractive milling. Closed contours validated. No machine dispatch.', color: '#22D3EE' },
  { adapter: 'Laser', format: 'SVG vector preview', description: 'Vector output with cleansed paths and closed-contour validation. Kerf compensation not yet applied.', color: '#8B5CF6' },
  { adapter: 'Embroidery', format: 'Stitch plan preview', description: 'Stitch density, fill direction, and thread routing simulated from CMYO color separations.', color: '#FBBF24' },
  { adapter: 'CMYO Bridge', format: 'Color separation layers', description: 'Subtractive color model — Cyan, Magenta, Yellow, Overcoat — applied before adapter translation.', color: '#34D399' },
];

export default function FabricationOutputCards() {
  return (
    <section id="outputs" className="px-6 py-24 bg-[#0D111A]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">Cyber-Physical Output</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Fabrication Adapters</h2>
        <p className="text-[#94A3B8] mb-12 max-w-xl">Validated artifacts are translated into process-specific previews. All outputs are preview-only. Physical dispatch is intentionally locked.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OUTPUTS.map((output) => (
            <div key={output.adapter} className="p-5 rounded border border-[#263244] bg-[#111827] flex flex-col gap-3 hover:border-[#263244]/80 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold" style={{ color: output.color }}>{output.adapter}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]">LOCKED</span>
              </div>
              <p className="text-xs font-mono text-[#94A3B8]">{output.format}</p>
              <p className="text-xs text-[#94A3B8]/80 leading-relaxed flex-1">{output.description}</p>
              <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${output.color}40, transparent)` }} />
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 rounded border border-[#263244] bg-[#111827]/50">
          <p className="text-xs font-mono text-[#94A3B8]"><span className="text-[#FBBF24]">Note:</span> CMYO fabrication dispatch is intentionally disabled. Calibration lock, manifest checksum, and QA gate requirements must all pass before dispatch could be enabled in a future production implementation.</p>
        </div>
      </div>
    </section>
  );
}
