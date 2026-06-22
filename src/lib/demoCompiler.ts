// Simulated demo compiler — no real AI, hardware, or fabrication APIs called.
// Fabrication dispatch is always locked.

export type DemoState =
  | 'idle'
  | 'parsing_intent'
  | 'job_envelope_created'
  | 'tool_plan_created'
  | 'geometry_validated'
  | 'manifest_generated'
  | 'fabrication_locked';

export interface DemoToolStep {
  step: number;
  tool: string;
  status: 'pending' | 'running' | 'complete';
}

export interface DemoResult {
  jobEnvelope: {
    id: string;
    intent: string;
    outputType: string;
    targetAdapters: string[];
    fabricationLocked: boolean;
  };
  toolPlan: DemoToolStep[];
  gates: {
    schemaValid: boolean;
    geometryVerified: boolean;
    calibrationPresent: boolean;
    fabricationDispatch: 'locked' | 'disabled' | 'enabled';
  };
  manifest: {
    artifactId: string;
    checksum: string;
    status: string;
    dispatch: string;
  };
}

export function compileDemoIntent(intent: string): DemoResult {
  return {
    jobEnvelope: {
      id: 'job_omni_demo_001',
      intent,
      outputType: 'fabrication_preview',
      targetAdapters: ['CMYO', 'Embroidery'],
      fabricationLocked: true,
    },
    toolPlan: [
      { step: 1, tool: 'parse_intent', status: 'complete' },
      { step: 2, tool: 'validate_schema', status: 'complete' },
      { step: 3, tool: 'cleanse_vectors', status: 'complete' },
      { step: 4, tool: 'check_closed_contours', status: 'complete' },
      { step: 5, tool: 'compile_artifact_manifest', status: 'complete' },
    ],
    gates: {
      schemaValid: true,
      geometryVerified: true,
      calibrationPresent: false,
      fabricationDispatch: 'locked',
    },
    manifest: {
      artifactId: 'omni-demo-001',
      checksum: 'sha256-demo-placeholder',
      status: 'preview_only',
      dispatch: 'disabled',
    },
  };
}

// Returns the sequence of states for animated playback
export const DEMO_STATES: DemoState[] = [
  'parsing_intent',
  'job_envelope_created',
  'tool_plan_created',
  'geometry_validated',
  'manifest_generated',
  'fabrication_locked',
];

export const DEMO_STATE_LABELS: Record<DemoState, string> = {
  idle: 'Waiting for intent…',
  parsing_intent: 'Parsing intent…',
  job_envelope_created: 'JobEnvelope created',
  tool_plan_created: 'ToolPlan generated',
  geometry_validated: 'Geometry validated',
  manifest_generated: 'Artifact manifest compiled',
  fabrication_locked: 'Fabrication lock confirmed',
};
