# Requirements — Database Foundation (Phase 1)

## Scope

This is Phase 1 from `specs/roadmap.md`: give the app a real database so
later phases (dashboard, auth, ailments, therapies, appointments) have
somewhere to read and write data. No UI routes are added in this phase —
only the schema, migration, and seed data.

In scope:

- Add Prisma as the ORM, with SQLite as the database.
- Define an initial `Agent` model: `id`, `name`, `email`, `createdAt`,
  `updatedAt`.
- Run the first Prisma migration.
- Add a seed script that creates a couple of sample agents.
- One passing test that exercises the seed path (per the roadmap's
  working agreement: every phase from Phase 1 onward needs at least one
  passing test).

Out of scope (deferred to later phases):

- Any dashboard route or UI that reads from the database (Phase 2).
- Authentication / roles (Phase 3).
- `Ailment`, `Therapy`, `Appointment` models (Phases 4-6).
- Switching away from SQLite (noted as a Phase 9 stretch item only).

## Decisions

- **ORM/database:** Prisma + SQLite, per `specs/tech-stack.md`. The SQLite
  file lives at `prisma/dev.db` using Prisma's default conventions.
- **Schema for this phase:** `Agent` model only, with fields `id` (cuid),
  `name` (string), `email` (string, unique), `createdAt` (datetime,
  default now), `updatedAt` (datetime, auto-updated). No relations yet —
  those are added when `Ailment`/`Therapy`/`Appointment` are introduced.
- **Migrations:** Use `prisma migrate dev` to generate and apply the first
  migration. Migration files under `prisma/migrations/` are committed to
  git; the SQLite database file (`prisma/dev.db`) is gitignored, matching
  standard Prisma + SQLite convention (the db is derived from migrations
  and seed data, not a source artifact).
- **Seed script:** A `prisma/seed.ts` script (run via `prisma db seed`)
  creates 2-3 plausible placeholder agents (invented names/emails, no
  real personal data). It is idempotent (safe to re-run) using
  `upsert` keyed on email.
- **Testing:** One Vitest test that runs the seed logic against a
  throwaway/test SQLite database and asserts the expected number of
  agents were created. This builds on the Vitest setup from Phase 0
  without introducing a new test runner.
- **Prisma Client:** Generated to its default location
  (`node_modules/@prisma/client`) and imported via a small shared helper
  (e.g. `lib/prisma.ts`) so later phases (and tests) reuse a single
  client instance.

## Context

- Mission (`specs/mission.md`): favors small, working increments and
  reliability — this phase intentionally adds only the data foundation,
  not any user-facing feature.
- Tech stack (`specs/tech-stack.md`): Prisma + SQLite is the specified
  database layer; TypeScript strict mode and Vitest continue to apply.
- Roadmap (`specs/roadmap.md`): Phase 1 explicitly scopes to "Agent only"
  schema, first migration, and a seed script with a couple of sample
  agents — this spec does not expand that scope.
- Working agreement (`specs/roadmap.md`): don't start Phase 2 until this
  phase builds, runs, and has at least one passing test.
