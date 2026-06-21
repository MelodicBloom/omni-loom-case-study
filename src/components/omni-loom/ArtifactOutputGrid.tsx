import React from 'react';

interface Artifact {
  id: string;
  adapter: string;
  format: string;
  checksum: string;
  status: string;
}

interface ArtifactOutputGridProps {
  artifacts?: Artifact[];
}

const DEFAULT_ARTIFACTS: Artifact[] = [
  { id: 'art-001', adapter: 'CMYO Bridge', format: 'Color separation layers', checksum: 'sha256-cmyo-preview', status: 'preview_only' },
  { id: 'art-002', adapter: 'CNC Adapter', format: 'G-code preview', checksum: 'sha256-cnc-preview', status: 'preview_only' },
  { id: 'art-003', adapter: 'Laser Adapter', format: 'SVG vector', checksum: 'sha256-laser-preview', status: 'preview_only' },
  { id: 'art-004', adapter: 'Embroidery Adapter', format: 'Stitch plan', checksum: 'sha256-emb-preview', status: 'preview_only' },
];

export default function ArtifactOutputGrid({ artifacts = DEFAULT_ARTIFACTS }: ArtifactOutputGridProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {artifacts.map((art) => (
        <div key={art.id} className="p-4 rounded border border-[#263244] bg-[#111827] font-mono text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#22D3EE] font-semibold">{art.adapter}</span>
            <span className="px-2 py-0.5 rounded bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185] text-[10px]">
              {art.status}
            </span>
          </div>
          <p className="text-[#94A3B8]">{art.format}</p>
          <p className="text-[#263244] truncate">{art.checksum}</p>
        </div>
      ))}
    </div>
  );
}
