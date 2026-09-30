# Roadmap

High-level implementation order, broken into very small, independently
shippable phases. Each phase should leave the app in a working, deployable
state.

## Phase 0 — Project scaffold

- Initialize Next.js (App Router) + TypeScript in the existing repo.
- Add Tailwind CSS, ESLint, Prettier.
- Add Vitest and a trivial passing test.
- Verify `npm run build` and `npm run dev` work.

## Phase 1 — Database foundation

- Add Prisma with SQLite.
- Define initial schema: `Agent` only (id, name, contact info).
- Run first migration; add a seed script with a couple of sample agents.

## Phase 2 — Static dashboard shell

- Add a bare dashboard route (`/dashboard`) listing seeded agents from the
  database, no auth yet, no styling polish.
- Confirms server components + Prisma read path works end-to-end.

## Phase 3 — Authentication

- Add Auth.js (NextAuth) with a simple credentials or email-based provider.
- Two roles: `agent` and `staff`.
- Gate `/dashboard` behind login.

## Phase 4 — Ailments & Therapies

- Extend schema: `Ailment` (linked to `Agent`).
- Agent-facing page to report/view their own ailments.
- Staff-facing page to view all ailments.
- Extend schema: `Therapy`, and a link between `Ailment` and recommended
  `Therapy`.
- Staff can assign a therapy to an ailment.
- Agent can view therapies assigned to them.

## Phase 5 — Appointments (booking)

- Extend schema: `Appointment` (agent, staff, therapy, time slot, status).
- Agent-facing flow to request/book an appointment.
- Staff-facing view to see and manage upcoming appointments.

## Phase 6 — Dashboard polish

- Apply Tailwind styling for an attractive, modern look across agent and
  staff dashboards (Steve's requirement).
- Responsive layout check on modern browsers.

## Phase 7 — Reliability hardening

- Add error boundaries / loading states to key pages.
- Add Playwright end-to-end tests for: login, report ailment, book
  appointment.
- Add basic input validation on all forms and API routes.

## Phase 8 — Stretch / future

- Notifications/reminders for upcoming appointments.
- Search/filter on dashboards.
- Move from SQLite to PostgreSQL if scale requires it.

## Working agreement

- Each phase = one or a few small PRs, each independently testable.
- Don't start a phase until the previous phase builds, runs, and (from
  Phase 1 onward) has at least one passing test.
