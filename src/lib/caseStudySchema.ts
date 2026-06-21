export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  thesis: string;
  problem: string;
  architecture: string[];
  pipeline: PipelineStage[];
  traceability: TraceabilityEntry[];
  demo: DemoConfig;
  skills: string[] | SkillEvidence[];
  futureRoadmap: string[];
  roadmap: RoadmapItem[];
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
