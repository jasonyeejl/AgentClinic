# Requirements — Project Scaffold (Phase 0)

## Scope

This is Phase 0 from `specs/roadmap.md`: establish the project scaffold
that every later phase builds on. No product features (agents, ailments,
therapies, appointments) are implemented here — only the app shell,
tooling, and a proof that the toolchain works end to end.

In scope:

- Initialize Next.js (App Router) + TypeScript in the existing repo, per
  `specs/tech-stack.md`.
- Add Tailwind CSS.
- Add ESLint + Prettier.
- Add Vitest with one trivial passing test.
- Verify `npm run build` and `npm run dev` work.

Out of scope (deferred to later phases):

- Database/Prisma setup (Phase 1).
- Any dashboard content, routes beyond the default home page (Phase 2+).
- Authentication (Phase 3).
- CI pipeline / hosted deployment.

## Decisions

- **Replace existing scaffold:** The current bare `src/index.ts` +
  root `tsconfig.json` (plain `tsc` build) will be removed and replaced by
  the Next.js App Router scaffold and its generated `tsconfig.json`.
- **Package manager:** npm, matching the existing `package-lock.json`.
- **ESLint:** Use Next.js's default ESLint config (`next lint`) as-is; no
  custom rules yet.
- **Testing:** Vitest is added with a single smoke test (e.g. `1 + 1 === 2`)
  to prove the test runner is wired up correctly. No component rendering
  tests yet — that starts once real UI exists.
- **Styling:** Tailwind CSS installed and configured, but no custom design
  system yet — default Next.js starter page is acceptable.
- **Verification:** Local-only for this phase — `npm run build` and
  `npm run dev` must succeed, and the home page must load in a browser.
  No CI workflow is added in this phase.

## Context

- Mission (`specs/mission.md`): favors small, working increments and
  reliability over cleverness — this phase intentionally does the minimum
  needed to get a working, testable foundation.
- Tech stack (`specs/tech-stack.md`): Next.js + TypeScript + Tailwind +
  Prisma/SQLite + Vitest/Playwright + ESLint/Prettier, single deployable
  app, npm package management.
- Working agreement (`specs/roadmap.md`): don't start the next phase until
  this one builds, runs, and has at least one passing test.
