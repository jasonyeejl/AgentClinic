# Plan — Database Foundation (Phase 1)

## 1. Install Prisma

1.1. Add `prisma` (CLI, dev dependency) and `@prisma/client` (runtime
     dependency) to `package.json`.
1.2. Run `npx prisma init --datasource-provider sqlite` to scaffold
     `prisma/schema.prisma` and a `.env` with `DATABASE_URL`.
1.3. Point `DATABASE_URL` at `file:./dev.db` (i.e. `prisma/dev.db`).

## 2. Define the `Agent` schema

2.1. In `prisma/schema.prisma`, define the `Agent` model: `id` (cuid,
     `@id @default(cuid())`), `name` (`String`), `email` (`String`,
     `@unique`), `createdAt` (`DateTime`, `@default(now())`), `updatedAt`
     (`DateTime`, `@updatedAt`).
2.2. Confirm the `generator client` block and `datasource db` block are
     present and correct (provider `sqlite`).

## 3. First migration

3.1. Run `npx prisma migrate dev --name init` to create the first
     migration under `prisma/migrations/` and apply it to `prisma/dev.db`.
3.2. Confirm `prisma/migrations/` is committed and `prisma/dev.db` is
     gitignored.
3.3. Run `npx prisma generate` (or confirm `migrate dev` already
     generated) so `@prisma/client` types are up to date.

## 4. Shared Prisma client helper

4.1. Add `lib/prisma.ts` exporting a single shared `PrismaClient`
     instance (guarding against multiple instances in dev via a global,
     the standard Next.js + Prisma pattern).

## 5. Seed script

5.1. Add `prisma/seed.ts` that upserts 2-3 sample agents (invented
     names/emails), keyed by `email` so re-running is safe.
5.2. Wire it up via the `prisma.seed` config in `package.json`
     (`"prisma": { "seed": "tsx prisma/seed.ts" }` or equivalent runner).
5.3. Add any needed dev dependency (e.g. `tsx`) to run the TypeScript
     seed script.
5.4. Run `npx prisma db seed` and confirm it creates the sample agents
     with no errors, and is safe to run twice.

## 6. Test the seed path

6.1. Add a Vitest test (e.g. `tests/seed.test.ts`) that runs the seed
     logic against an isolated SQLite test database (e.g. a temp file or
     `file::memory:`-style URL suitable for SQLite via Prisma) and
     asserts the expected number of `Agent` rows exist afterward.
6.2. Ensure the test cleans up any temp database file it creates.

## 7. Verify the toolchain end to end

7.1. Run `npm run build` — must still succeed.
7.2. Run `npm run lint` — must still pass.
7.3. Run `npm test` — Phase 0 smoke test and the new seed test must both
     pass.
7.4. Run `npx prisma studio` (or inspect `prisma/dev.db` directly) to
     manually confirm seeded agents exist (manual check).

## 8. Housekeeping

8.1. Update `.gitignore` for Prisma artifacts (`prisma/dev.db` and any
     `*.db-journal` files) if not already covered.
8.2. Update root `README.md` with a "Database" section: how to run
     migrations (`npx prisma migrate dev`) and seed data
     (`npx prisma db seed`).
8.3. Commit the database foundation work.
