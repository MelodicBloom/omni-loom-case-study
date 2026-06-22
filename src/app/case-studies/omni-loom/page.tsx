import React from 'react';
import type { CaseStudy } from '@/lib/caseStudySchema';
import caseStudyData from '@/content/omni-loom.case-study.json';
import HeroCompilerThesis from '@/components/HeroCompilerThesis';
import PipelineDiagram from '@/components/PipelineDiagram';
import TraceabilityPanel from '@/components/TraceabilityPanel';
import FabricationOutputCards from '@/components/FabricationOutputCards';
import SectionHeading from '@/components/case-study/SectionHeading';
import NarrativeBlock from '@/components/case-study/NarrativeBlock';
import ArchitectureCard from '@/components/case-study/ArchitectureCard';
import PipelineStepCard from '@/components/case-study/PipelineStepCard';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import DemoConsole from '@/components/demo/DemoConsole';

const data = caseStudyData as CaseStudy;

export const metadata = {
  title: 'Omni-Loom — Deterministic Generative Compiler',
  description: data.tagline,
};

export default function OmniLoomCaseStudy() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F8FAFC]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* 1. Hero */}
      <HeroCompilerThesis
        title={data.title}
        tagline={data.tagline}
        thesis={data.thesis}
      />

      {/* 2. Problem */}
      <section id="problem" className="px-6 py-24 bg-[#0D111A]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="The Problem"
            title="AI Creativity Lacks Deterministic Pipelines"
            description="When AI output moves into interfaces, materials, and machines, black-box improvisation becomes a liability."
          />
          <NarrativeBlock variant="thesis">
            {data.problem}
          </NarrativeBlock>
        </div>
      </section>

      {/* 3. Architecture cards */}
      <section id="architecture" className="px-6 py-24 bg-[#080A0F]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="System Architecture"
            title="The Compiler Stack"
            description="Seven tightly-specified layers convert human intent into fabrication-ready artifacts — without black-box geometry or unaudited dispatch."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {data.architecture.map((block) => (
              <ArchitectureCard key={block.name} block={block} />
            ))}
          </div>

          {/* Phase 2: Interactive architecture diagram */}
          <SectionHeading
            label="Architecture Map"
            title="System Graph"
            description="Hover any node to inspect its role in the compiler pipeline."
          />
          <ArchitectureDiagram />
        </div>
      </section>

      {/* 4. Pipeline diagram (interactive hover) */}
      <PipelineDiagram steps={data.pipeline} />

      {/* 5. Pipeline detail (vertical stepper) */}
      <section id="pipeline-detail" className="px-6 py-24 bg-[#0D111A]">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            label="Step by Step"
            title="Pipeline in Detail"
            description="Each stage enforces contracts — no stage produces output until its inputs are validated."
          />
          <div className="mt-8">
            {data.pipeline.map((step, i) => (
              <PipelineStepCard
                key={step.step}
                step={step}
                isLast={i === data.pipeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Traceability / QA gates */}
      <TraceabilityPanel />

      {/* 7. Fabrication outputs */}
      <FabricationOutputCards />

      {/* 8. Phase 3: Interactive demo console */}
      <DemoConsole />

      {/* 9. Portfolio skills */}
      <section id="skills" className="px-6 py-24 bg-[#0D111A]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Portfolio Evidence"
            title="Skills Demonstrated"
            description="Each architectural decision maps to a demonstrable engineering and design capability."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {data.skills.map((item) => (
              <div key={item.skill} className="p-5 rounded border border-[#263244] bg-[#111827]">
                <p className="text-sm font-bold text-[#22D3EE] mb-2">{item.skill}</p>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{item.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Roadmap */}
      <section id="roadmap" className="px-6 py-24 bg-[#080A0F]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Build Roadmap"
            title="From Case Study to Product"
            description="Six phases take Omni-Loom from portfolio artifact to fundable, licensable runtime prototype."
          />
          <div className="space-y-4">
            {data.roadmap.map((item) => {
              const statusColors: Record<string, string> = {
                complete: 'text-[#34D399] border-[#34D399]/30 bg-[#34D399]/10',
                'in-progress': 'text-[#22D3EE] border-[#22D3EE]/30 bg-[#22D3EE]/10',
                planned: 'text-[#FBBF24] border-[#FBBF24]/30 bg-[#FBBF24]/10',
                future: 'text-[#94A3B8] border-[#263244] bg-[#111827]/50',
              };
              return (
                <div key={item.phase} className="flex gap-4 p-5 rounded border border-[#263244] bg-[#111827]">
                  <div className="shrink-0 w-20">
                    <p className="text-xs font-mono text-[#94A3B8]">{item.phase}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-sm font-bold text-[#F8FAFC]">{item.name}</p>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        statusColors[item.status] ?? statusColors.future
                      }`}>
                        {item.status.toUpperCase().replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-[#94A3B8]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <section className="px-6 py-24 bg-[#0D111A] border-t border-[#263244]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-4">Omni-Loom</p>
          <h2
            className="text-3xl font-bold text-[#F8FAFC] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Worth building because it shows how AI can be governed.
          </h2>
          <p className="text-[#94A3B8] mb-10 leading-relaxed">
            Omni-Loom does not merely show what AI can generate.
            It shows how AI systems can be governed, constrained, trusted, and translated
            into real production workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#demo"
              className="px-6 py-3 rounded bg-[#22D3EE] text-[#080A0F] font-semibold text-sm hover:bg-[#22D3EE]/90 transition-colors"
            >
              Try the Demo
            </a>
            <a
              href="#architecture"
              className="px-6 py-3 rounded border border-[#263244] text-[#F8FAFC] font-semibold text-sm hover:border-[#22D3EE]/50 transition-colors"
            >
              Explore Architecture
            </a>
            <a
              href="#roadmap"
              className="px-6 py-3 rounded border border-[#263244] text-[#94A3B8] font-semibold text-sm hover:border-[#8B5CF6]/50 transition-colors"
            >
              View Roadmap
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
