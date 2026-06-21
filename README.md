# Omni-Loom — Flagship Case Study

> A deterministic generative compiler for cyber-physical creativity.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** + CSS custom properties
- **lucide-react** for icons
- **clsx** + **tailwind-merge** for class composition

## Path Aliases

`@/*` maps to `./src/*` via `tsconfig.json`.

## Route

`/case-studies/omni-loom` — main case study page  
Root `/` redirects automatically.

## Dev

```bash
npm install
npm run dev        # localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint
npm run build
```

## Merge Order

| PR | Branch | Purpose |
|---|---|---|
| #1 ✅ | `feature/omni-loom-case-study-architecture` | Component scaffold |
| #4 | `feature/runtime-foundation` | App shell + routing |
| #3 | `feature/architecture-diagram` | Interactive SVG diagram |

## Approval Gate

All merges require **Jennipher’s explicit approval**.
