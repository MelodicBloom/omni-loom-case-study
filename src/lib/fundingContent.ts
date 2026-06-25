// fundingContent.ts
// All funding page section content as typed constants.

export const FUNDING_THESIS = {
  label: 'Funding Thesis',
  headline: 'Infrastructure for Governed Generative Systems',
  body: [
    'Omni-Loom is a deterministic generative compiler for cyber-physical creativity. It converts human intent into structured, auditable, fabrication-aware outputs — replacing opaque AI improvisation with a governed pipeline of validated stages, typed contracts, and locked dispatch boundaries.',
    'The opportunity is not only to build a novel interface layer for creative systems. It is to release a reusable open-source foundation — schemas, contracts, validation gates, and reference adapters — that other builders can adopt, extend, and test in public. The system is already technical proof: schema-first architecture, staged execution, QA gate logic, artifact manifesting, and a public spec pack are live today.',
    'The funding case is strongest when framed as infrastructure. Omni-Loom demonstrates how AI systems can be governed, constrained, audited, and translated into real production workflows. That pattern is reusable far beyond this project.',
  ],
};

export const PILOT_PROPOSAL = {
  label: 'Open-Source Pilot Proposal',
  headline: '12-Week Open Pilot',
  summary:
    'We are seeking support for a 12-week open-source pilot that transforms Omni-Loom from a case study and interactive demo into a contributor-ready technical foundation. The pilot publishes stable schemas, governed execution contracts, validation gates, reference adapters, onboarding documentation, and an adoption measurement framework — with a midpoint deliverable that is already useful to outside contributors.',
  question:
    'Can an open-source community meaningfully adopt and extend a governed generative pipeline when the architecture is documented as contracts rather than prompts alone?',
  deliverables: [
    { item: 'Core schema layer', detail: 'Stable TypeScript interfaces for CaseStudy, ToolPlan, JobEnvelope, and ArtifactManifest published as a versioned package.' },
    { item: 'Deterministic ToolPlan registry', detail: 'Governed execution contract with allowlist enforcement, disqualification rules, and step-order validation.' },
    { item: 'Reference adapters (CNC + Laser)', detail: 'Two working adapter implementations with geometry validation, calibration contracts, and preview-only output.' },
    { item: 'QA gate framework', detail: 'All five gates implemented as callable functions with typed pass/fail results and production-implementation notes.' },
    { item: 'Contributor-ready docs', detail: 'CONTRIBUTING.md, tagged starter issues, onboarding guide, and documented extension points for new adapters.' },
  ],
  timeline: [
    { weeks: 'Weeks 1–2', label: 'Community Bonding', description: 'Contributor docs, repository hygiene, visible roadmap, tagged starter issues, and pilot scope confirmation with community feedback.' },
    { weeks: 'Weeks 3–6', label: 'Core Implementation', description: 'Stable schemas, ToolPlan types, validation rules, and one working reference adapter path with tests. Midterm: a contributor can run and inspect the pipeline end-to-end.' },
    { weeks: 'Weeks 7–10', label: 'Adoption Extension', description: 'Second adapter support, improved docs, sample manifests, contribution templates, and example extension tasks for outside contributors.' },
    { weeks: 'Weeks 11–12', label: 'Stabilisation', description: 'Code freeze, test reliability, docs cleanup, onboarding improvements, and final public release of all pilot deliverables.' },
  ],
  successCriteria: [
    'Public repo with clear Apache 2.0 license and working docs',
    'At least one outside contributor pathway confirmed (starter issues, contribution guide)',
    'Reproducible demo behavior across environments',
    'Community-readable interfaces enabling third-party adapters without access to original author',
    'Measurable activation: time-to-first-artifact under 30 minutes from clone',
  ],
};

export const LICENSING_MODEL = {
  label: 'Licensing Model',
  headline: 'Apache 2.0 — Open by Default',
  statement:
    'Omni-Loom is being developed as an open-source technical foundation for deterministic generative workflows. Software components are released under the Apache 2.0 license to maximise reuse, contribution, and interoperability while preserving attribution, warranty disclaimers, and an explicit patent grant. Documentation and reference specifications remain openly accessible so researchers, developers, and creative technologists can adopt the architecture, test the governance model, and build new adapters on the public contracts.',
  model: [
    { layer: 'Software code', license: 'Apache 2.0', rationale: 'Permissive, patent grant, business-friendly, no copyleft friction for commercial integrators.' },
    { layer: 'Docs & specs', license: 'CC BY 4.0', rationale: 'Open sharing with attribution — keeps reference material freely usable and citable.' },
    { layer: 'Design assets', license: 'Clearly separated', rationale: 'Documented per asset to avoid ambiguity in mixed-media creative outputs.' },
  ],
  principles: [
    'Use an established license — never a custom one. Clarity and compatibility matter more than novelty.',
    'Publish the license in the repository root and reference it in the README on day one.',
    'No non-commercial restrictions. True open source means commercial reuse is allowed.',
    'Apache 2.0 patent grant protects contributors and adopters as the adapter ecosystem grows.',
  ],
};

export const OPEN_SOURCE_IMPACT = {
  label: 'Open-Source Impact',
  headline: 'Releasing a Method, Not Just Code',
  body: [
    'The strongest open-source impact story for Omni-Loom is that it releases not just code, but a method: how to govern generative systems that cross from language into materials, interfaces, and machine-linked outputs.',
    'That impact is larger than a single demo. The reusable pieces — schemas, ToolPlan contracts, QA gate checklists, manifest structures, and adapter boundaries — can be adopted independently by other projects that need deterministic, auditable AI pipelines.',
  ],
  layers: [
    { title: 'Lower the cost of experimentation', description: 'Builders get a starting scaffold instead of improvising architecture from scratch. Every layer is documented as a contract, not a convention.' },
    { title: 'Create a shared language', description: 'The JobEnvelope, ToolPlan, and ArtifactManifest vocabulary gives collaborators a way to compare implementations and discuss governance decisions precisely.' },
    { title: 'Provide a public governance pattern', description: 'Validation gates, locked fabrication dispatch, and Shytech dormant-system patterns are reusable safety primitives others can adopt and extend safely.' },
  ],
};

export const ADOPTION_METRICS = {
  label: 'Adoption Metrics',
  headline: 'A Funnel, Not a Follower Count',
  intro:
    'Converting open-source adoption into a convincing funding narrative requires tracking movement through a full funnel — from discovery to activation to extension to pilot deployment — rather than isolated popularity metrics.',
  funnel: [
    { stage: 'Discovery', metric: 'Repo views, stars, spec pack visits', why: 'Shows initial interest in the problem space' },
    { stage: 'Activation', metric: 'Local build success, demo runs, spec downloads', why: 'Shows the project is actually usable' },
    { stage: 'Engagement', metric: 'Issues opened, docs feedback, repeat visits', why: 'Shows the project is understandable enough to interact with' },
    { stage: 'Contribution', metric: 'PRs, merged fixes, adapter experiments, schema proposals', why: 'Shows community members are investing labour' },
    { stage: 'Adoption', metric: 'Forks with custom adapters, external mentions, pilot requests', why: 'Shows real-world reuse beyond the original repo' },
    { stage: 'Conversion', metric: 'Funded pilots, partnerships, licensing inquiries', why: 'Shows open source is generating concrete opportunity' },
  ],
  keyMetrics: [
    'Time to first successful demo run (target: < 30 min from clone)',
    'Spec pack section downloads per week',
    'Contributors who modify schemas or adapter interfaces',
    'External pilot conversations initiated after technical review',
  ],
};

export const PARTNER_OUTREACH = {
  label: 'Partner Outreach',
  headline: 'Who This Is Built For',
  intro:
    'Omni-Loom is most useful to teams that need to bridge generative AI with physical or production-grade outputs — and who need that bridge to be auditable, extensible, and trustworthy.',
  targets: [
    { type: 'Research Labs', fit: 'Teams studying AI governance, cyber-physical systems, or creative computing who need a reference implementation of a deterministic pipeline.' },
    { type: 'Makerspaces & Fab Labs', fit: 'Spaces with CNC, laser, or embroidery equipment who want AI-assisted design without black-box dispatch risks.' },
    { type: 'Design Systems Teams', fit: 'Teams building AI-assisted tooling for designers who need deterministic, reproducible outputs across physical and digital surfaces.' },
    { type: 'Hardware Vendors', fit: 'Companies building machine control interfaces who need an open adapter contract layer for AI-generated toolpaths.' },
    { type: 'Open-Source Sponsors', fit: 'Foundations and individuals who fund governance-first technical infrastructure for AI systems.' },
  ],
  template: `Subject: Omni-Loom — Deterministic AI Compiler for Cyber-Physical Workflows

Hi [Name],

I'm reaching out because [your organisation / lab / project] works at the intersection of [fabrication / AI tooling / creative computing / hardware interfaces] — exactly the space Omni-Loom is designed to address.

Omni-Loom is an open-source deterministic generative compiler: a governed pipeline that converts natural language intent into validated, fabrication-aware artifacts without black-box geometry generation or unaudited dispatch. The system is schema-first, every stage is typed and validated, and physical output is locked behind explicit QA gates.

The project is live today with:
- An interactive demo console (intent → JobEnvelope → ToolPlan → QA gates → artifact manifest)
- A public spec pack (schemas, contracts, checklists, and CMYO color model spec — all downloadable)
- A roadmap from case study to open-source pilot to runtime prototype

I'd welcome a conversation about [collaboration / research use / adapter integration / pilot deployment].

Full case study: [URL]
Spec pack: [URL]/spec-pack
Funding overview: [URL]/funding

Best,
[Your name]`,
};
