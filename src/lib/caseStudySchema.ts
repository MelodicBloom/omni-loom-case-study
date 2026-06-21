// Unified CaseStudy schema — merges PR #1 rich types with PR #2 flat fields

export interface CaseStudy {
  // Identity
  id?: string;
  slug: string;
  title: string;
  tagline: string;
  subtitle?: string;

  // Narrative
  thesis: string;
  problem: string;

  // Architecture (flat string array for prose list)
  architecture: string[];

  // Pipeline (structured stages)
  pipeline: PipelineStage[];

  // Traceability audit entries
  traceability: TraceabilityEntry[];

  // Demo CTA
  demo: DemoConfig;

  // Skills (supports both plain strings and rich objects)
  skills: string[] | SkillEvidence[];

  // Roadmap
  roadmap: RoadmapItem[];
  futureRoadmap?: string[];
}

export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  input: string;
  output: string;
}

export interface TraceabilityEntry {
  id: string;
  jobId: string;
  toolPlan: string;
  geometryHash: string;
  artifactRef: string;
  timestamp: string;
  status: 'pending' | 'compiled' | 'fabricated' | 'verified';
}

export interface DemoConfig {
  title: string;
  description: string;
  cta: string;
}

export interface SkillEvidence {
  domain: string;
  artifacts?: string[];
}

export interface RoadmapItem {
  phase: string;
  objective: string;
  fundingPath?: string;
}

export const caseStudySchemaVersion = '1.0.0';
