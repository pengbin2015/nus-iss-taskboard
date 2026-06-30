---
name: api-testing
description: Guide for testing the TaskBoard API using Vitest and Supertest. Use this when asked to create or run API tests.
---

# API Testing with Vitest + Supertest

This skill helps you create and run HTTP-level tests for the TaskBoard API.

## When to use this skill

Use this skill when you need to:
- Add tests for a new route or endpoint
- Debug a failing API test
- Increase coverage for existing handlers

## Creating tests

1. Review the [test template](./test-template.ts) for the standard test structure
2. Identify the route and HTTP method to test (e.g. `POST /tasks`)
3. Add a `describe` block named after the route: `describe("POST /tasks", ...)`
4. Write one `it` per scenario: happy path, validation errors, not-found
5. Place the test file in `tests/`

## Running tests

```
pnpm test            # run all tests once
pnpm test:watch      # watch mode
pnpm test:coverage   # coverage report
```

## Best practices

- Use `createApp()` from `../src/app` — never import `server.ts` or call `listen()`
- Import `{ store }` as a named export, not a default import
- Call `store.reset()` in `beforeEach()` at the top level, not inside a `describe` block
- Name each test `"returns X when Y"` — one focused assertion per test
- Mirror the route in `describe`: `describe("GET /tasks/:id", ...)`

## Gotchas

- `store` is a **named** export: `import { store } from "../src/store"` — curly braces required
- Never call `app.listen()` in tests — pass `app` directly to `request(app)` via Supertest
- Use Vitest imports (`import { describe, it, expect, beforeEach } from "vitest"`), not Jest globals
