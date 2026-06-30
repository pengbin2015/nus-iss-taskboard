<!-- This file is read automatically by GitHub Copilot in VS Code.
     It is a condensed summary of AGENTS.md. Keep both consistent. -->

# TaskBoard API — Copilot Instructions

## Stack: Node 20 · TypeScript 5 · Express 4 · Vitest · Supertest
## Storage: in-memory store only (src/store.ts) — no real database

## Key commands
- `pnpm dev` — start server
- `pnpm test` — run all tests
- `pnpm lint` — ESLint

## Conventions
- Functional handlers (no classes)
- Errors: `res.status(N).json({ error: "..." })`
- IDs: always use `uuidv4()` from the `uuid` package
- Tests: call `store.reset()` in `beforeEach()`
- Conventional Commits

## Boundaries
- No database, no new dependencies without asking
- Don't change existing API response shapes
- Don't edit `src/types/task.ts` unless a lab says to
