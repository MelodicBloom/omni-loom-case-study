'use client';

import React, { useEffect, useRef, useState } from 'react';

const NODES = [
  {
    id: 'intent',
    label: 'Creative Intent',
    sublabel: 'Natural language + constraints',
    x: 80,
    y: 200,
    color: '#a78bfa',
    accent: '#7c3aed',
  },
  {
    id: 'job',
    label: 'Job Compiler',
    sublabel: 'Typed manifest + validation',
    x: 280,
    y: 200,
    color: '#818cf8',
    accent: '#4338ca',
  },
  {
    id: 'toolplan',
    label: 'Tool Plan',
    sublabel: 'Deterministic op sequence',
    x: 480,
    y: 200,
    color: '#38bdf8',
    accent: '#0369a1',
  },
  {
    id: 'geometry',
    label: 'Geometry Kernel',
    sublabel: 'Fabrication-aware primitives',
    x: 680,
    y: 200,
    color: '#34d399',
    accent: '#047857',
  },
  {
    id: 'artifact',
    label: 'Artifact Output',
    sublabel: 'G-code · SVG · Mesh',
    x: 880,
    y: 200,
    color: '#fbbf24',
    accent: '#b45309',
  },
];

const EDGES = [
  { from: 'intent', to: 'job', label: 'intent graph' },
  { from: 'job', to: 'toolplan', label: 'job manifest' },
  { from: 'toolplan', to: 'geometry', label: 'op sequence' },
  { from: 'geometry', to: 'artifact', label: 'geometry' },
];

const NODE_W = 140;
const NODE_H = 72;
const SVG_W = 1020;
const SVG_H = 400;

function getNodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function edgePath(from: string, to: string) {
  const f = getNodeById(from);
  const t = getNodeById(to);
  const x1 = f.x + NODE_W;
  const y1 = f.y + NODE_H / 2;
  const x2 = t.x;
  const y2 = t.y + NODE_H / 2;
  const cx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
}

export function ArchitectureDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const [pulse, setPulse] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance pulse through pipeline nodes
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPulse((p) => (p + 1) % NODES.length);
    }, 1200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const activeNode = active ?? NODES[pulse].id;

  return (
    <section className="border-b border-border bg-background px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Compiler Architecture
          </p>
        </div>
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
          Intent → Artifact Pipeline
        </h3>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Hover any stage to inspect it. The pipeline pulses automatically to show the
          deterministic compilation flow from creative intent to physical artifact.
        </p>

        {/* SVG Diagram */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-lg">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            width="100%"
            style={{ minWidth: 640, display: 'block' }}
            aria-label="Omni-Loom compiler architecture diagram"
          >
            <defs>
              {/* Animated gradient for active edge */}
              <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
              </linearGradient>

              {/* Arrowhead marker */}
              {NODES.map((node) => (
                <marker
                  key={node.id}
                  id={`arrow-${node.id}`}
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill={node.color} opacity="0.7" />
                </marker>
              ))}

              {/* Glow filter */}
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Node gradient fills */}
              {NODES.map((node) => (
                <linearGradient
                  key={`grad-${node.id}`}
                  id={`grad-${node.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={node.color} stopOpacity="0.18" />
                  <stop offset="100%" stopColor={node.accent} stopOpacity="0.08" />
                </linearGradient>
              ))}
            </defs>

            {/* Stage index labels */}
            {NODES.map((node, i) => (
              <text
                key={`idx-${node.id}`}
                x={node.x + NODE_W / 2}
                y={node.y - 14}
                textAnchor="middle"
                fill="#6b7280"
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="2"
              >
                STAGE {i + 1}
              </text>
            ))}

            {/* Edges */}
            {EDGES.map((edge) => {
              const fromNode = getNodeById(edge.from);
              const toNode = getNodeById(edge.to);
              const isActive =
                activeNode === edge.from || activeNode === edge.to;
              const midX =
                fromNode.x + NODE_W + (toNode.x - fromNode.x - NODE_W) / 2;
              const midY = fromNode.y + NODE_H / 2 - 18;

              return (
                <g key={`edge-${edge.from}-${edge.to}`}>
                  <path
                    d={edgePath(edge.from, edge.to)}
                    fill="none"
                    stroke={isActive ? 'url(#edge-grad)' : '#27272a'}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    strokeDasharray={isActive ? 'none' : '4 4'}
                    markerEnd={`url(#arrow-${edge.to})`}
                    style={{
                      transition: 'stroke 0.4s, stroke-width 0.3s',
                      filter: isActive ? 'url(#glow)' : 'none',
                    }}
                  />
                  <text
                    x={midX}
                    y={midY}
                    textAnchor="middle"
                    fill={isActive ? '#94a3b8' : '#3f3f46'}
                    fontSize="9"
                    fontFamily="monospace"
                    style={{ transition: 'fill 0.3s' }}
                  >
                    {edge.label}
                  </text>
                </g>
              );
            })}

            {/* Nodes */}
            {NODES.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <g
                  key={node.id}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => {
                    setActive(node.id);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                  }}
                  onMouseLeave={() => {
                    setActive(null);
                    intervalRef.current = setInterval(() => {
                      setPulse((p) => (p + 1) % NODES.length);
                    }, 1200);
                  }}
                >
                  {/* Glow ring when active */}
                  {isActive && (
                    <rect
                      x={node.x - 4}
                      y={node.y - 4}
                      width={NODE_W + 8}
                      height={NODE_H + 8}
                      rx={14}
                      fill="none"
                      stroke={node.color}
                      strokeWidth={1.5}
                      opacity={0.4}
                      filter="url(#glow)"
                    />
                  )}

                  {/* Node background */}
                  <rect
                    x={node.x}
                    y={node.y}
                    width={NODE_W}
                    height={NODE_H}
                    rx={10}
                    fill={`url(#grad-${node.id})`}
                    stroke={isActive ? node.color : '#3f3f46'}
                    strokeWidth={isActive ? 1.5 : 1}
                    style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                  />

                  {/* Colored top accent bar */}
                  <rect
                    x={node.x + 10}
                    y={node.y + 8}
                    width={isActive ? NODE_W - 20 : 24}
                    height={3}
                    rx={2}
                    fill={node.color}
                    opacity={isActive ? 0.9 : 0.5}
                    style={{ transition: 'width 0.4s ease, opacity 0.3s' }}
                  />

                  {/* Label */}
                  <text
                    x={node.x + NODE_W / 2}
                    y={node.y + 32}
                    textAnchor="middle"
                    fill={isActive ? '#f4f4f5' : '#a1a1aa'}
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="system-ui, sans-serif"
                    style={{ transition: 'fill 0.3s' }}
                  >
                    {node.label}
                  </text>

                  {/* Sublabel */}
                  <text
                    x={node.x + NODE_W / 2}
                    y={node.y + 50}
                    textAnchor="middle"
                    fill={isActive ? '#71717a' : '#3f3f46'}
                    fontSize="9"
                    fontFamily="monospace"
                    style={{ transition: 'fill 0.3s' }}
                  >
                    {node.sublabel}
                  </text>
                </g>
              );
            })}

            {/* Bottom: active node detail */}
            {(() => {
              const node = getNodeById(activeNode);
              return (
                <g>
                  <rect
                    x={40}
                    y={310}
                    width={SVG_W - 80}
                    height={60}
                    rx={8}
                    fill="#09090b"
                    stroke={node.color}
                    strokeWidth={1}
                    opacity={0.9}
                  />
                  <text
                    x={60}
                    y={333}
                    fill={node.color}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="2"
                  >
                    {node.id.toUpperCase()}
                  </text>
                  <text
                    x={60}
                    y={352}
                    fill="#a1a1aa"
                    fontSize="11"
                    fontFamily="system-ui, sans-serif"
                  >
                    {node.label} — {node.sublabel}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4">
          {NODES.map((node) => (
            <button
              key={node.id}
              onClick={() => setActive(active === node.id ? null : node.id)}
              className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <span
                className="block h-2 w-2 rounded-full"
                style={{ background: node.color }}
              />
              {node.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
