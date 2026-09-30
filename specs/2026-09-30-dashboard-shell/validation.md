# Validation — Static Dashboard Shell (Phase 2)

This phase is ready to merge when all of the following are true.

## API route

- [ ] `GET /api/agents` returns a 200 with a JSON array of agents
      (`id`, `name`, `email`, `createdAt`).
- [ ] The query logic lives in an exported, independently testable
      function (e.g. `getAgents()`), not only inline in the route
      handler.
- [ ] Agents are returned in a stable, deterministic order (e.g. by
      `createdAt` ascending).

## Dashboard page

- [ ] `/dashboard` renders without errors and lists seeded agents'
      `name`, `email`, and `createdAt`.
- [ ] While the fetch is in flight, a minimal loading indicator is shown.
- [ ] If there are no agents, "No agents yet." is shown instead of an
      empty list/table.
- [ ] `/dashboard` is reachable without logging in (no auth in this
      phase, per `specs/roadmap.md`).

## Build & run

- [ ] `npm run build` completes with no errors.
- [ ] `npm run dev` starts successfully; `http://localhost:3000/dashboard`
      loads in a browser and shows seeded agents after running
      `npx prisma db seed`.

## Lint & format

- [ ] `npm run lint` passes with no new errors.
- [ ] `npx prettier --check .` shows no unexpected diffs.

## Tests

- [ ] `npm test` runs Vitest and shows the Phase 0 smoke test, the
      Phase 1 seed test, and the new agents-route test all passing, 0
      failing.
- [ ] The new test exercises `getAgents()` against an isolated test
      database (not `prisma/dev.db`) and asserts the returned agents
      match what was seeded into it.

## Structure / housekeeping

- [ ] `README.md` documents the `/dashboard` route and `/api/agents`
      endpoint.
- [ ] No stray/untracked files left behind (temp test databases are
      cleaned up by the test itself).

## Alignment check

- [ ] No auth, styling polish, loading skeletons, error boundaries, or
      other product models were introduced — confirms scope stayed
      within Phase 2 per `specs/roadmap.md`.
- [ ] Stack choices match `specs/tech-stack.md` (Next.js Route Handlers,
      TypeScript strict mode, Prisma, Tailwind, Vitest).

## Merge criteria

All checkboxes above are checked, `git status` is clean (no stray/
untracked files, no uncommitted `prisma/dev.db`), and the branch
`2026-09-30-dashboard-shell` is rebased/up to date with `main` before
opening the PR.
