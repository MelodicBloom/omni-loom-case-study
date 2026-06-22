// Spec Pack content — all six sections.
// Stored as template literals so each section can be copied or downloaded as a raw file.

export const SCHEMA_REFERENCE = `// caseStudySchema.ts
// Canonical type definitions for the Omni-Loom pipeline.
// These interfaces are the source of truth for all structured data in the system.

export interface ArchitectureBlock {
  name: string;               // Layer name (e.g. "FrayNode", "CMYO Fabrication Bridge")
  type: string;               // Role classification (e.g. "Semantic front-end router")
  responsibility: string;     // Plain-language description of what this layer does
  inputs: string[];           // Named input artifacts this layer accepts
  outputs: string[];          // Named output artifacts this layer produces
  constraints: string[];      // Hard rules this layer must enforce
}

export interface PipelineStep {
  step: number;               // Ordinal position in the pipeline (1-indexed)
  label: string;              // Short display name
  description: string;        // One-sentence explanation of this step's role
}

export interface SkillEvidence {
  skill: string;              // Skill or capability demonstrated
  evidence: string;           // Specific architectural decision that demonstrates it
}

export interface RoadmapItem {
  phase: string;              // Phase label (e.g. "Phase 1")
  name: string;               // Short name
  status: 'complete'          // All deliverables shipped and live
         | 'in-progress'      // Actively being built
         | 'planned'          // Scoped and sequenced, not yet started
         | 'future';          // Aspirational -- not yet scoped
  description: string;        // What this phase delivers
}

export interface CaseStudy {
  slug: string;               // URL-safe identifier (e.g. "omni-loom")
  title: string;              // Display title
  tagline: string;            // One-line description
  thesis: string;             // Core argument
  problem: string;            // Problem statement (paragraph)
  architecture: ArchitectureBlock[];
  pipeline: PipelineStep[];
  skills: SkillEvidence[];
  roadmap: RoadmapItem[];
}
`;

export const TOOLPLAN_CONTRACT = `// toolPlanContract.ts
// Defines the ToolPlan execution layer: what a tool is, what it may do,
// and what disqualifies it from the allowlist.

// --- Core types ---

export type ToolStatus = 'pending' | 'running' | 'complete' | 'failed';

export interface DemoToolStep {
  step: number;               // Ordinal execution order
  tool: string;               // Tool identifier -- must match AllowlistedTool
  status: ToolStatus;
}

export type AllowlistedTool =
  | 'parse_intent'
  | 'validate_schema'
  | 'cleanse_vectors'
  | 'check_closed_contours'
  | 'compile_artifact_manifest';
  // Any tool not in this union is REJECTED at the registry boundary.

export interface ToolPlan {
  jobId: string;              // Must reference a valid JobEnvelope id
  steps: DemoToolStep[];      // Ordered, deterministic sequence
  allowedTools: AllowlistedTool[];
  createdAt: string;          // ISO 8601
}

// --- Governance rules ---

// A tool is DISQUALIFIED from the allowlist if it:
//   1. Calls any external API (LLM, REST, hardware)
//   2. Generates geometry or patterns stochastically
//   3. Reads or writes state outside its declared input/output contract
//   4. Has non-deterministic output for the same input
//   5. Dispatches fabrication commands of any kind

// The orchestration layer MUST:
//   - Validate every tool in a ToolPlan against AllowlistedTool before execution
//   - Reject any ToolPlan containing an unrecognized tool identifier
//   - Enforce step order -- no step may run before its predecessor completes
//   - Surface gate failures immediately and halt execution

export interface DemoResult {
  jobEnvelope: {
    id: string;
    intent: string;
    outputType: string;
    targetAdapters: string[];
    fabricationLocked: boolean;  // Always true
  };
  toolPlan: DemoToolStep[];
  gates: {
    schemaValid: boolean;
    geometryVerified: boolean;
    calibrationPresent: boolean;
    fabricationDispatch: 'locked' | 'disabled' | 'enabled';  // Never 'enabled' in demo
  };
  manifest: {
    artifactId: string;
    checksum: string;
    status: string;           // Always 'preview_only' in demo
    dispatch: string;         // Always 'disabled' in demo
  };
}
`;

export const QA_GATE_CHECKLIST = `# QA Gate Checklist
# Omni-Loom Compiler System

Every artifact must clear all five gates before fabrication output is produced.
Fabrication dispatch remains locked unless all prerequisites pass in a production implementation.

---

## Gate 1 -- Schema Gate

**Pass condition:** JobEnvelope and ToolPlan match their required TypeScript interfaces.
**Failure behavior:** Pipeline halts. No ToolPlan is generated. Error surfaces to FrayNode.
**Production requirement:** Runtime schema validation (e.g. Zod) on every JobEnvelope before orchestration begins.

- [ ] JobEnvelope fields are all present and correctly typed
- [ ] ToolPlan references a valid jobId
- [ ] All tools in ToolPlan are in the AllowlistedTool union
- [ ] No extra fields that would indicate schema drift

---

## Gate 2 -- Tool Registry Gate

**Pass condition:** All requested tools are allowlisted and deterministic.
**Failure behavior:** Unrecognized tool identifier causes immediate rejection. No partial execution.
**Production requirement:** Static registry with locked allowlist. No dynamic tool registration at runtime.

- [ ] Every tool identifier matches an entry in AllowlistedTool
- [ ] No tool calls an external API
- [ ] No tool generates geometry stochastically
- [ ] Tool execution order matches declared ToolPlan step sequence

---

## Gate 3 -- Geometry Gate

**Pass condition:** Vectors are closed, cleansed, and free from known invalid states.
**Failure behavior:** Invalid geometry halts the pipeline before manifest compilation.
**Production requirement:** Vector cleansing pass, closed-contour check, self-intersection removal.

- [ ] All contours are closed (start point === end point)
- [ ] No self-intersecting paths
- [ ] Duplicate nodes removed
- [ ] Coordinate values within device bounds
- [ ] No degenerate segments (zero-length edges)

---

## Gate 4 -- Calibration Gate

**Pass condition:** A valid calibration profile is present for the target device.
**Failure behavior:** Missing calibration data blocks manifest compilation. Preview may still render.
**Production requirement:** Device calibration profile management with versioning and expiry.

- [ ] Calibration profile present for each target adapter
- [ ] Profile is not expired
- [ ] Profile matches device identifier in JobEnvelope
- [ ] No double compensation applied (single calibration pass only)

---

## Gate 5 -- Fabrication Gate

**Pass condition:** All four preceding gates pass AND explicit dispatch authorization is present.
**Failure behavior:** Dispatch is always locked in demo. In production, requires explicit operator confirmation.
**Production requirement:** Two-factor dispatch authorization. Audit log entry on every dispatch attempt.

- [ ] Gates 1-4 all pass
- [ ] Explicit dispatch authorization token present
- [ ] Operator confirmation recorded
- [ ] Dispatch event written to audit log with timestamp and artifact checksum
- [ ] Physical machine in ready state (production only)
`;

export const JOB_ENVELOPE_SPEC = `# JobEnvelope Specification
# Omni-Loom Compiler System

The JobEnvelope is the structured intent object that FrayNode produces from raw natural language input.
It is the contract boundary between human intent and machine execution.
Nothing downstream may execute without a validated JobEnvelope.

---

## Field Reference

### id
- Type: string
- Format: job_{descriptor}_{sequence} (e.g. job_omni_demo_001)
- Set by: FrayNode
- Validated by: Schema Gate
- Notes: Must be unique per session. Used as foreign key in ToolPlan and Artifact Manifest.

### intent
- Type: string
- Format: Raw natural language -- preserved verbatim from user input
- Set by: FrayNode
- Validated by: Schema Gate (presence only -- no semantic validation at gate layer)
- Notes: Never mutated after envelope creation. Downstream stages read but do not modify.

### outputType
- Type: string (enum)
- Values: fabrication_preview | geometry_only | manifest_only
- Set by: FrayNode (inferred from intent)
- Validated by: Schema Gate
- Notes: Controls which pipeline stages are active. fabrication_preview runs the full pipeline.

### targetAdapters
- Type: string[]
- Values: CMYO | CNC | Laser | Embroidery
- Set by: FrayNode (inferred from intent)
- Validated by: Tool Registry Gate
- Notes: Each adapter in this list must have a matching calibration profile at Gate 4.

### fabricationLocked
- Type: boolean
- Value: Always true in demo and preview contexts
- Set by: FrayNode
- Validated by: Fabrication Gate
- Notes: Cannot be set to false by FrayNode. Only the Fabrication Gate authorization
  flow may unlock dispatch, and only in a production implementation with explicit
  operator confirmation.

---

## FrayNode Responsibilities

FrayNode MUST:
- Parse raw intent into a valid JobEnvelope
- Infer outputType and targetAdapters from intent semantics
- Set fabricationLocked to true unconditionally
- Produce a well-formed envelope before any downstream stage executes

FrayNode MUST NOT:
- Execute any tools
- Generate geometry
- Call external APIs
- Modify the intent string
- Set fabricationLocked to false

---

## Orchestration Layer Responsibilities

The CSA Tool Orchestration API MUST:
- Validate the JobEnvelope against the schema before generating a ToolPlan
- Reject any envelope that fails Schema Gate validation
- Use the jobId as the foreign key in all downstream artifacts
- Generate a ToolPlan that only references AllowlistedTool entries
`;

export const IMPLEMENTATION_PROMPTS = `# Implementation Prompts
# Omni-Loom Compiler System

Each prompt scaffolds one compiler layer. Use with any capable LLM.
All prompts enforce Omni-Loom's core constraint: no real APIs, no stochastic geometry, no fabrication dispatch.

---

## Prompt 1 -- FrayNode

You are implementing FrayNode, the semantic front-end router for the Omni-Loom compiler system.

FrayNode receives raw natural language intent from a user and produces a structured JobEnvelope.
It must NOT execute any tools, generate geometry, call external APIs, or set fabricationLocked to false.

Implement a TypeScript function:
  parseIntent(intent: string): JobEnvelope

The function must:
- Infer outputType from the intent (fabrication_preview | geometry_only | manifest_only)
- Infer targetAdapters from the intent (CMYO | CNC | Laser | Embroidery)
- Generate a unique job id in the format job_{descriptor}_{sequence}
- Set fabricationLocked to true unconditionally
- Preserve the raw intent string verbatim
- Return a complete, valid JobEnvelope

Do not call any external APIs. Do not use Math.random() for adapter inference -- use keyword matching.

---

## Prompt 2 -- CSA Tool Orchestration API

You are implementing the CSA Tool Orchestration API for the Omni-Loom compiler system.

This layer receives a validated JobEnvelope and produces a deterministic ToolPlan.
It must only reference tools from the AllowlistedTool union.
It must validate the JobEnvelope against the schema before producing any output.

Implement a TypeScript function:
  generateToolPlan(envelope: JobEnvelope): ToolPlan

The function must:
- Validate the envelope (all required fields present and correctly typed)
- Produce a ToolPlan with steps in this fixed order:
    1. parse_intent
    2. validate_schema
    3. cleanse_vectors
    4. check_closed_contours
    5. compile_artifact_manifest
- Set each step status to 'pending'
- Reference the jobId from the envelope
- Reject any envelope that fails validation by throwing a typed error

---

## Prompt 3 -- Geometry Validator

You are implementing the Geometry Validation layer for the Omni-Loom compiler system.

This layer receives vector path data and must verify it meets fabrication-safe requirements
before an Artifact Manifest can be compiled.

Implement a TypeScript function:
  validateGeometry(paths: VectorPath[]): GeometryValidationResult

where VectorPath is { points: [number, number][]; closed: boolean } and
GeometryValidationResult is { valid: boolean; errors: string[] }.

The function must check:
- All contours are closed (first point equals last point, or closed flag is true)
- No zero-length segments (consecutive identical points)
- No obviously degenerate paths (fewer than 3 points)
- No coordinate values outside the range [0, 10000] on either axis

Do not call any external APIs. Do not use stochastic methods. Pure deterministic validation only.

---

## Prompt 4 -- Artifact Manifest Compiler

You are implementing the Artifact Manifest compiler for the Omni-Loom compiler system.

This layer receives a validated ToolPlan and geometry validation result and produces
a traceable Artifact Manifest. Fabrication dispatch must always be set to 'disabled'.

Implement a TypeScript function:
  compileManifest(toolPlan: ToolPlan, geometryResult: GeometryValidationResult): ArtifactManifest

where ArtifactManifest is:
  { artifactId: string; jobId: string; checksum: string; status: 'preview_only'; dispatch: 'disabled'; compiledAt: string }

The function must:
- Reject if geometryResult.valid is false
- Generate a deterministic artifactId from the jobId
- Set status to 'preview_only' unconditionally
- Set dispatch to 'disabled' unconditionally
- Generate a checksum (sha256 of jobId + compiledAt timestamp is acceptable for demo)
- Set compiledAt to the current ISO 8601 timestamp
`;

export const CMYO_COLOR_MODEL = `# CMYO Color Model Specification
# Omni-Loom Compiler System

CMYO is the subtractive color model used in the Omni-Loom Fabrication Bridge.
It extends the traditional CMY model with an Overcoat (O) channel for surface finishing,
protection, and specialty material application.

---

## Channel Definitions

### C -- Cyan
- Role: Primary subtractive color channel
- Value range: 0-100 (percentage ink/dye coverage)
- Physical analog: Cyan pigment, dye, or material layer
- Notes: Applied first in standard CMYO layer order.

### M -- Magenta
- Role: Primary subtractive color channel
- Value range: 0-100
- Physical analog: Magenta pigment, dye, or material layer
- Notes: Applied second in standard CMYO layer order.

### Y -- Yellow
- Role: Primary subtractive color channel
- Value range: 0-100
- Physical analog: Yellow pigment, dye, or material layer
- Notes: Applied third in standard CMYO layer order.

### O -- Overcoat
- Role: Surface finishing and specialty application channel
- Value range: 0-100
- Physical analog: Protective coating, metallic finish, gloss/matte layer,
  heat-activated adhesive, or specialty material
- Notes: Applied last. The Overcoat channel is adapter-specific -- its physical
  meaning is declared in the adapter calibration profile, not the color model itself.

---

## Separation Rules

1. No implicit black generation. CMYO does not use a K (key/black) channel.
   Deep neutrals are produced by combining C+M+Y at high coverage,
   subject to adapter total ink limits.

2. No double compensation. Color separation is applied once per artifact.
   Adapter calibration profiles account for substrate and device variance.
   The separation layer must not re-apply calibration that the adapter already handles.

3. Channel independence. Each channel is separated and validated independently.
   A failure in one channel (e.g. geometry invalidity in the Magenta layer)
   halts compilation for that channel without affecting others.

4. Overcoat is non-colorimetric. The O channel does not participate in color
   mixing calculations. It is passed through to the adapter as a separate layer
   with its own geometry and coverage values.

5. Coverage limits are adapter-defined. Maximum total ink coverage (C+M+Y+O)
   is specified in the adapter calibration profile, not in the color model.
   The CMYO Bridge enforces the limit declared by the active calibration.

---

## Adapter Translation Contracts

### CNC Adapter
- CMYO channels map to cutting depth or material removal passes
- Overcoat channel maps to finishing pass (e.g. surface scoring, engraving)
- Color values are reinterpreted as toolpath intensity, not chromatic values

### Laser Adapter
- CMYO channels map to laser power and speed curves per separation layer
- Overcoat channel maps to final sealing or marking pass
- Channel order preserved; each layer is a separate laser pass

### Embroidery Adapter
- CMYO channels map to thread color families
- Overcoat channel maps to specialty thread (metallic, reflective, heat-activated)
- Stitch density and fill direction are calculated per channel, not per composite
- Closed contours required for fill regions in all channels

---

## Fabrication Lock

CMYO separation and adapter translation produce preview-only output.
Physical dispatch of any CMYO-separated artifact requires:
1. Calibration Gate to pass for each active adapter
2. Fabrication Gate authorization (operator confirmation + audit log entry)
3. Device ready state confirmed

In this implementation, fabrication dispatch is intentionally disabled.
`;
