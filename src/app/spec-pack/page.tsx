import React from 'react';
import SpecPackNav from '@/components/spec-pack/SpecPackNav';
import SpecSection from '@/components/spec-pack/SpecSection';
import {
  SCHEMA_REFERENCE,
  TOOLPLAN_CONTRACT,
  QA_GATE_CHECKLIST,
  JOB_ENVELOPE_SPEC,
  IMPLEMENTATION_PROMPTS,
  CMYO_COLOR_MODEL,
} from '@/lib/specPackContent';

export const metadata = {
  title: 'Omni-Loom Spec Pack — Schemas, Contracts & Implementation Reference',
  description:
    'Downloadable schemas, QA gate checklists, ToolPlan contracts, JobEnvelope spec, implementation prompts, and CMYO color model reference for the Omni-Loom compiler system.',
};

export default function SpecPackPage() {
  return (
    <div className="min-h-screen bg-[#080A0F] text-[#F8FAFC]" style={{ fontFamily: "'Inter', sans-serif" }}>

      <header className="border-b border-[#263244] px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">
            <a href="/case-studies/omni-loom" className="hover:text-[#22D3EE]/80 transition-colors">← Omni-Loom</a>
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Spec Pack
          </h1>
          <p className="text-[#94A3B8] max-w-2xl">
            Schemas, contracts, checklists, and reference specifications for building on or evaluating
            the Omni-Loom compiler system. All documents are open and downloadable.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex gap-0 md:gap-10 px-6 py-12">
        <aside className="hidden md:block w-52 shrink-0">
          <SpecPackNav />
        </aside>
        <main className="flex-1 space-y-16 min-w-0">
          <SpecSection
            id="schema-reference"
            label="Section 01"
            title="TypeScript Schema Reference"
            description="The canonical type definitions for every data structure in the Omni-Loom pipeline. Schema-first means these interfaces are the source of truth — not the prose."
            language="typescript"
            filename="caseStudySchema.ts"
            content={SCHEMA_REFERENCE}
          />
          <SpecSection
            id="toolplan-contract"
            label="Section 02"
            title="ToolPlan Contract"
            description="Type definitions and governance rules for the ToolPlan execution layer. Defines what a tool is permitted to do, what disqualifies it from the allowlist, and what the orchestration layer must validate before dispatch."
            language="typescript"
            filename="toolPlanContract.ts"
            content={TOOLPLAN_CONTRACT}
          />
          <SpecSection
            id="qa-gate-checklist"
            label="Section 03"
            title="QA Gate Checklist"
            description="Five gates that every artifact must clear before fabrication output can be produced. Each gate defines its pass condition, failure behavior, and production implementation requirement."
            language="markdown"
            filename="qa-gate-checklist.md"
            content={QA_GATE_CHECKLIST}
          />
          <SpecSection
            id="job-envelope-spec"
            label="Section 04"
            title="JobEnvelope Specification"
            description="Field-by-field documentation of the JobEnvelope — the structured intent object that FrayNode produces and the orchestration layer validates before generating a ToolPlan."
            language="markdown"
            filename="job-envelope-spec.md"
            content={JOB_ENVELOPE_SPEC}
          />
          <SpecSection
            id="implementation-prompts"
            label="Section 05"
            title="Implementation Prompts"
            description="LLM prompts for scaffolding each compiler layer. Written specifically for Omni-Loom's constraints — not generic boilerplate."
            language="markdown"
            filename="implementation-prompts.md"
            content={IMPLEMENTATION_PROMPTS}
          />
          <SpecSection
            id="cmyo-color-model"
            label="Section 06"
            title="CMYO Color Model"
            description="Specification for the Cyan-Magenta-Yellow-Overcoat subtractive color model used in the CMYO Fabrication Bridge. Defines channel semantics, separation rules, overcoat behavior, and adapter translation contracts."
            language="markdown"
            filename="cmyo-color-model.md"
            content={CMYO_COLOR_MODEL}
          />
        </main>
      </div>
    </div>
  );
}
