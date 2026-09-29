# Validation — Database Foundation (Phase 1)

This phase is ready to merge when all of the following are true.

## Schema & migration

- [ ] `prisma/schema.prisma` defines the `Agent` model with `id`, `name`,
      `email` (unique), `createdAt`, `updatedAt`.
- [ ] `datasource db` uses the `sqlite` provider with
      `DATABASE_URL="file:./dev.db"`.
- [ ] `prisma/migrations/` contains a committed initial migration
      (`..._init`) that matches the schema.
- [ ] `npx prisma migrate deploy` (or `migrate dev`) applies cleanly to a
      fresh checkout with no manual intervention.

## Seed data

- [ ] `npx prisma db seed` runs with no errors and creates 2-3 sample
      `Agent` rows.
- [ ] Running the seed script a second time does not error or create
      duplicate agents (upsert-based, keyed on `email`).

## Build & run

- [ ] `npm run build` completes with no errors.
- [ ] `npm run dev` still starts successfully and the home page still
      loads (no product UI changes expected in this phase).

## Lint & format

- [ ] `npm run lint` passes with no new errors.
- [ ] `npx prettier --check .` (or `npm run format`) shows no unexpected
      diffs.

## Tests

- [ ] `npm test` runs Vitest and shows both the Phase 0 smoke test and
      the new seed test passing, 0 failing.
- [ ] The seed test uses an isolated test database and does not depend on
      or mutate `prisma/dev.db`.

## Structure / housekeeping

- [ ] `prisma/dev.db` (and any `*.db-journal` files) are gitignored, not
      committed.
- [ ] `lib/prisma.ts` exports a single shared Prisma client instance.
- [ ] `package.json` has a working `prisma.seed` entry and any new
      scripts/dependencies it needs (e.g. `tsx`).
- [ ] `README.md` documents how to run migrations and seed the database.

## Alignment check

- [ ] No product features (dashboard routes, auth, ailments, therapies,
      appointments) were introduced — confirms scope stayed within
      Phase 1 per `specs/roadmap.md`.
- [ ] Only the `Agent` model exists in the schema — no speculative
      relations or extra models added ahead of their phase.
- [ ] Stack choices match `specs/tech-stack.md` (Prisma, SQLite,
      TypeScript strict mode, Vitest).

## Merge criteria

All checkboxes above are checked, `git status` is clean (no stray/
untracked files, no uncommitted `prisma/dev.db`), and the branch
`2026-09-29-database-foundation` is rebased/up to date with
`2026-09-29-project-scaffold` (or `main`, once merged) before opening
the PR.
