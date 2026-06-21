'use client';

import React, { useState } from 'react';

const NODES = [
  { id: 'intent', label: 'Human Intent', color: '#8B5CF6' },
  { id: 'fraynode', label: 'FrayNode', color: '#22D3EE' },
  { id: 'job', label: 'JobEnvelope', color: '#22D3EE' },
  { id: 'csa', label: 'CSA API', color: '#22D3EE' },
  { id: 'toolplan', label: 'ToolPlan', color: '#22D3EE' },
  { id: 'registry', label: 'Tool Registry', color: '#FBBF24' },
  { id: 'geometry', label: 'Geometry Validation', color: '#34D399' },
  { id: 'cmyo', label: 'CMYO Bridge', color: '#34D399' },
  { id: 'manifest', label: 'Artifact Manifest', color: '#FBBF24' },
  { id: 'adapters', label: 'CNC / Laser / Embroidery', color: '#94A3B8' },
  { id: 'output', label: 'Preview Only — Locked', color: '#FB7185' },
];

export default function CompilerPipelineDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="p-6 rounded border border-[#263244] bg-[#111827]">
      <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase mb-6">Compiler Graph</p>
      <div className="flex flex-wrap items-center gap-2">
        {NODES.map((node, i) => (
          <React.Fragment key={node.id}>
            <button
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              className={`px-3 py-2 rounded border text-xs font-mono transition-all duration-150 ${hovered === node.id ? 'scale-105' : 'opacity-80'}`}
              style={{ borderColor: `${node.color}40`, color: node.color, backgroundColor: `${node.color}10`, boxShadow: hovered === node.id ? `0 0 16px ${node.color}30` : undefined }}
            >
              {node.label}
            </button>
            {i < NODES.length - 1 && <span className="text-[#263244] text-sm">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
