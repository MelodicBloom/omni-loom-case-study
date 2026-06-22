'use client';

import React, { useState, useRef } from 'react';
import {
  compileDemoIntent,
  DEMO_STATES,
  DEMO_STATE_LABELS,
  type DemoState,
  type DemoResult,
} from '@/lib/demoCompiler';

const DEFAULT_INTENT = 'Create a layered CMYO textile pattern with validated contours and embroidery-safe output.';

const GATE_LABELS = [
  { key: 'schemaValid', label: 'Schema Gate' },
  { key: 'geometryVerified', label: 'Geometry Gate' },
  { key: 'calibrationPresent', label: 'Calibration Gate' },
  { key: 'fabricationDispatch', label: 'Fabrication Gate' },
] as const;

export default function DemoConsole() {
  const [intent, setIntent] = useState(DEFAULT_INTENT);
  const [state, setState] = useState<DemoState>('idle');
  const [result, setResult] = useState<DemoResult | null>(null);
  const [visibleStep, setVisibleStep] = useState(0);
  const [running, setRunning] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearTimeouts() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }

  function runDemo() {
    if (running) return;
    clearTimeouts();
    setResult(null);
    setVisibleStep(0);
    setRunning(true);

    const compiled = compileDemoIntent(intent);

    DEMO_STATES.forEach((s, i) => {
      const t = setTimeout(() => {
        setState(s);
        setVisibleStep(i + 1);
        if (i === DEMO_STATES.length - 1) {
          setResult(compiled);
          setRunning(false);
        }
      }, (i + 1) * 600);
      timeoutsRef.current.push(t);
    });
  }

  function reset() {
    clearTimeouts();
    setState('idle');
    setResult(null);
    setVisibleStep(0);
    setRunning(false);
    setIntent(DEFAULT_INTENT);
  }

  const gateValue = (key: string) => {
    if (!result) return null;
    return result.gates[key as keyof typeof result.gates];
  };

  const gatePass = (key: string) => {
    const v = gateValue(key);
    if (typeof v === 'boolean') return v;
    return false;
  };

  return (
    <section id="demo" className="px-6 py-24 bg-[#080A0F]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">Interactive Demo</p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Simulate the Compiler
        </h2>
        <p className="text-[#94A3B8] mb-3 max-w-xl">
          Enter a creative intent and watch Omni-Loom parse it into a JobEnvelope, generate a ToolPlan,
          validate geometry, compile an artifact manifest, and confirm the fabrication lock.
        </p>
        <div className="mb-10 inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#FB7185]/30 bg-[#FB7185]/5">
          <span className="text-[10px] font-mono text-[#FB7185]">
            ⚠ Simulated demo — no real AI APIs, hardware APIs, or fabrication dispatch are called.
          </span>
        </div>

        {/* Three-panel layout */}
        <div className="grid lg:grid-cols-3 gap-4">

          {/* LEFT: Intent input */}
          <div className="flex flex-col gap-4">
            <div className="p-5 rounded border border-[#263244] bg-[#111827] flex flex-col gap-4 h-full">
              <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase">Intent Input</p>
              <textarea
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                disabled={running}
                rows={5}
                className="w-full bg-[#0D111A] border border-[#263244] rounded p-3 text-sm text-[#F8FAFC] font-mono resize-none focus:outline-none focus:border-[#22D3EE]/50 disabled:opacity-50 transition-colors"
                placeholder="Describe your creative intent…"
              />
              <div className="flex gap-2">
                <button
                  onClick={runDemo}
                  disabled={running || !intent.trim()}
                  className="flex-1 px-4 py-2.5 rounded bg-[#22D3EE] text-[#080A0F] font-semibold text-sm hover:bg-[#22D3EE]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  {running ? 'Compiling…' : 'Run Compiler'}
                </button>
                <button
                  onClick={reset}
                  disabled={running}
                  className="px-4 py-2.5 rounded border border-[#263244] text-[#94A3B8] text-sm hover:border-[#94A3B8]/50 disabled:opacity-40 transition-all"
                >
                  Reset
                </button>
              </div>

              {/* State indicator */}
              <div className="pt-2 border-t border-[#263244]">
                <p className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest mb-2">Compiler State</p>
                <p className={`text-sm font-mono transition-colors ${
                  state === 'fabrication_locked' ? 'text-[#FB7185]' :
                  state === 'idle' ? 'text-[#94A3B8]' : 'text-[#22D3EE]'
                }`}>
                  {DEMO_STATE_LABELS[state]}
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE: Compiler stages */}
          <div className="p-5 rounded border border-[#263244] bg-[#111827] flex flex-col gap-3">
            <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase mb-2">ToolPlan Execution</p>

            {/* Pipeline stages */}
            {[
              { step: 1, label: 'parse_intent', state: 'parsing_intent' },
              { step: 2, label: 'validate_schema', state: 'job_envelope_created' },
              { step: 3, label: 'cleanse_vectors', state: 'tool_plan_created' },
              { step: 4, label: 'check_closed_contours', state: 'geometry_validated' },
              { step: 5, label: 'compile_artifact_manifest', state: 'manifest_generated' },
            ].map((s) => {
              const done = visibleStep > s.step;
              const active = visibleStep === s.step;
              return (
                <div
                  key={s.step}
                  className={`flex items-center gap-3 p-3 rounded border transition-all duration-300 ${
                    done ? 'border-[#34D399]/30 bg-[#34D399]/5' :
                    active ? 'border-[#22D3EE]/50 bg-[#22D3EE]/5' :
                    'border-[#263244] bg-transparent opacity-40'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-mono shrink-0 ${
                    done ? 'border-[#34D399] text-[#34D399]' :
                    active ? 'border-[#22D3EE] text-[#22D3EE]' :
                    'border-[#263244] text-[#263244]'
                  }`}>
                    {done ? '✓' : s.step}
                  </span>
                  <span className={`text-xs font-mono ${
                    done ? 'text-[#34D399]' : active ? 'text-[#22D3EE]' : 'text-[#94A3B8]'
                  }`}>
                    {s.label}
                  </span>
                  {active && (
                    <span className="ml-auto text-[10px] font-mono text-[#22D3EE] animate-pulse">running</span>
                  )}
                  {done && (
                    <span className="ml-auto text-[10px] font-mono text-[#34D399]">complete</span>
                  )}
                </div>
              );
            })}

            {/* JobEnvelope preview */}
            {result && (
              <div className="mt-4 pt-4 border-t border-[#263244]">
                <p className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest mb-3">JobEnvelope</p>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex gap-2">
                    <span className="text-[#94A3B8] shrink-0">id</span>
                    <span className="text-[#22D3EE] truncate">{result.jobEnvelope.id}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#94A3B8] shrink-0">adapters</span>
                    <span className="text-[#22D3EE]">{result.jobEnvelope.targetAdapters.join(', ')}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#94A3B8] shrink-0">locked</span>
                    <span className="text-[#FB7185]">true</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Gates + Manifest */}
          <div className="flex flex-col gap-4">
            {/* QA Gates */}
            <div className="p-5 rounded border border-[#263244] bg-[#111827]">
              <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase mb-4">QA Gates</p>
              <div className="space-y-2">
                {GATE_LABELS.map(({ key, label }) => {
                  const pass = result ? gatePass(key) : null;
                  return (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-xs text-[#94A3B8]">{label}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-all ${
                        pass === null ? 'border-[#263244] text-[#263244]' :
                        pass ? 'border-[#34D399]/30 bg-[#34D399]/10 text-[#34D399]' :
                        'border-[#FB7185]/30 bg-[#FB7185]/10 text-[#FB7185]'
                      }`}>
                        {pass === null ? '—' : pass ? 'PASS' : 'LOCKED'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Artifact Manifest */}
            <div className="p-5 rounded border border-[#263244] bg-[#111827] flex-1">
              <p className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase mb-4">Artifact Manifest</p>
              {result ? (
                <div className="space-y-2 font-mono text-xs">
                  {Object.entries(result.manifest).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2">
                      <span className="text-[#94A3B8]">{k}</span>
                      <span className="text-[#22D3EE] text-right break-all">{v}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-mono text-[#263244]">Awaiting compilation…</p>
              )}

              {result && (
                <div className="mt-4 p-3 rounded border border-[#FB7185]/30 bg-[#FB7185]/5">
                  <p className="text-[10px] font-mono text-[#FB7185]">
                    ⚠ Preview only — physical fabrication dispatch is intentionally disabled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
