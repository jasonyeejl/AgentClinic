# Requirements — Static Dashboard Shell (Phase 2)

## Scope

This is Phase 2 from `specs/roadmap.md`: prove that a page can read agents
out of the database and render them, via a bare `/dashboard` route. No
auth, no styling polish, no other product features — just the vertical
slice of API route handler → client fetch → render.

In scope:

- A new `app/api/agents/route.ts` `GET` route handler that reads all
  `Agent` rows via Prisma and returns them as JSON.
- A new `/dashboard` route (`app/dashboard/page.tsx`) that is a client
  component, fetches from `/api/agents`, and renders the list.
- Each row displays: `id`, `name`, `email`, `createdAt`.
- A minimal empty state ("No agents yet") when the list is empty.
- One unit test covering the data-fetching logic (not a full
  browser/HTTP integration test).

Out of scope (deferred to later phases):

- Authentication / role gating of `/dashboard` (Phase 3).
- Visual/styling polish beyond what Tailwind's defaults give for free
  (Phase 7).
- Loading skeletons, error boundaries, retry logic (Phase 8).
- Any other models/routes (`Ailment`, `Therapy`, `Appointment` — Phases
  4-6) or write/mutation endpoints.
- End-to-end/browser tests (Phase 8, Playwright).

## Decisions

- **Data fetching approach:** A client component (`"use client"`) on
  `/dashboard` fetches JSON from a new `GET /api/agents` Next.js Route
  Handler, rather than a server component reading Prisma directly. The
  route handler is the one place server-side code touches
  `lib/prisma.ts` for this phase; the page component only knows about
  `fetch('/api/agents')`.
- **Fields displayed:** `id`, `name`, `email`, `createdAt` per agent row,
  matching the `Agent` model from Phase 1. `updatedAt` is not shown (not
  meaningful yet with no edit flow).
- **Empty/loading state:** Minimal only — while the fetch is in flight,
  render nothing/a simple "Loading…" text; if the list comes back empty,
  render "No agents yet." No error boundary or retry UI (that's Phase
  8's job).
- **Testing:** One test that exercises the `/api/agents` route handler's
  data-fetching logic directly (calling the handler function or the
  underlying query against a seeded/isolated test database) and asserts
  it returns the expected agents as JSON. No component-rendering or
  browser test yet, consistent with the "no component rendering tests
  yet" decision carried over from Phase 0.
- **No auth:** `/dashboard` remains unauthenticated and unguarded in this
  phase, per the roadmap ("no auth yet"). Phase 3 adds gating.

## Context

- Mission (`specs/mission.md`): staff need a dashboard to see agents;
  this phase is the smallest possible slice proving that path works
  end-to-end, before layering auth or other data on top.
- Tech stack (`specs/tech-stack.md`): Next.js App Router (Route Handlers
  under `app/api/**`), TypeScript strict mode, Prisma for data access,
  Tailwind for any incidental styling, Vitest for tests.
- Roadmap (`specs/roadmap.md`): Phase 2 explicitly scopes to "a bare
  dashboard route... no auth yet, no styling polish" — this spec does
  not expand that scope.
- Working agreement (`specs/roadmap.md`): don't start Phase 3 until this
  phase builds, runs, and has at least one passing test.
