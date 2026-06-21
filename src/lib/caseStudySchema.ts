// Reusable schema for all portfolio case studies
// Supports: Omni-Loom, Indigo Lattice, NacreOS, Design Language System, and future studies

export interface ArchitectureBlock {
  name: string;
  type: string;
  responsibility: string;
  inputs: string[];
  outputs: string[];
  constraints: string[];
}

export interface PipelineStep {
  step: number;
  label: string;
  description: string;
}

export interface SkillEvidence {
  skill: string;
  evidence: string;
}

export interface RoadmapItem {
  phase: string;
  name: string;
  status: 'complete' | 'in-progress' | 'planned' | 'future';
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  thesis: string;
  problem: string;
  architecture: ArchitectureBlock[];
  pipeline: PipelineStep[];
  skills: SkillEvidence[];
  roadmap: RoadmapItem[];
}
