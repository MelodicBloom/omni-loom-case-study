export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  thesis: string;
  problem: Section;
  architecture: Section & { diagram: DiagramNode[] };
  pipeline: PipelineStage[];
  traceability: TraceabilityEntry[];
  demo: DemoConfig;
  skills: SkillEvidence[];
  roadmap: RoadmapItem[];
}

export interface Section {
  heading: string;
  body: string[];
  highlights?: string[];
}

export interface DiagramNode {
  id: string;
  label: string;
  description: string;
  connections: string[];
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
  status: "pending" | "compiled" | "fabricated" | "verified";
}

export interface DemoConfig {
  title: string;
  description: string;
  cta: string;
}

export interface SkillEvidence {
  domain: string;
  artifacts: string[];
}

export interface RoadmapItem {
  phase: string;
  objective: string;
  fundingPath?: string;
}

export const caseStudySchemaVersion = "1.0.0";
