'use client';

import React, { useState } from 'react';

const GATES = [
  { id: 'schema', label: 'Schema Gate', pass: true, detail: 'JobEnvelope and ToolPlan match required schemas.' },
  { id: 'registry', label: 'Tool Registry Gate', pass: true, detail: 'All requested tools are allowlisted and deterministic.' },
  { id: 'geometry', label: 'Geometry Gate', pass: true, detail: 'Vectors are closed, cleansed, and free from known invalid states.' },
  { id: 'calibration', label: 'Calibration Gate', pass: false, detail: 'Calibration data is absent — device profile not yet supplied.' },
  { id: 'fabrication', label: 'Fabrication Gate', pass: false, detail: 'Dispatch always locked in this demo. All prerequisites must pass in production.' },
];

const MANIFEST = {
  artifactId: 'omni-demo-001',
  checksum: 'sha256-demo-placeholder',
  status: 'preview_only',
  dispatch: 'disabled',
};

export default function TraceabilityPanel() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="traceability" className="px-6 py-24 bg-[#080A0F]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">Audit Trail</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Traceability & QA Gates</h2>
        <p className="text-[#94A3B8] mb-12 max-w-xl">Every output is traceable to intent, JobEnvelope, ToolPlan, gate results, and artifact manifest. Fabrication remains locked until all prerequisites pass.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase mb-4">QA Gates</p>
            {GATES.map((gate) => (
              <button key={gate.id} onClick={() => setExpanded(expanded === gate.id ? null : gate.id)} className="w-full text-left p-4 rounded border border-[#263244] bg-[#111827] hover:border-[#263244]/80 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#F8FAFC]">{gate.label}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${gate.pass ? 'bg-[#34D399]/10 border-[#34D399]/30 text-[#34D399]' : 'bg-[#FB7185]/10 border-[#FB7185]/30 text-[#FB7185]'}`}>
                    {gate.pass ? 'PASS' : 'LOCKED'}
                  </span>
                </div>
                {expanded === gate.id && <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">{gate.detail}</p>}
              </button>
            ))}
          </div>
          <div className="p-6 rounded border border-[#263244] bg-[#111827] h-fit">
            <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase mb-4">Artifact Manifest</p>
            <div className="space-y-3 font-mono text-sm">
              {Object.entries(MANIFEST).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-[#94A3B8]">{key}</span>
                  <span className="text-[#22D3EE] text-right break-all">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 rounded border border-[#FB7185]/30 bg-[#FB7185]/5">
              <p className="text-xs text-[#FB7185] font-mono">⚠ Preview only — physical fabrication dispatch is intentionally disabled in this demo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
