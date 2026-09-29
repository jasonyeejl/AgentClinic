# Tech Stack

Chosen to satisfy Mary's request for a reliable, popular TypeScript stack,
Susan's need for rich data-driven features, and Steve's need for an
attractive, modern-browser-friendly site — all with a single cohesive
full-stack framework.

## Core framework

- **Next.js** (App Router) with **React** and **TypeScript**.
  - Server-rendered pages and API routes in one deployable app.
  - Popular, well-documented, and actively maintained.

## Backend

- **Full-stack in Next.js**: business logic and data access live in Next.js
  Route Handlers (`app/api/**`) and server components/actions — no separate
  API service to deploy or version.
- **Prisma** as the ORM/query layer for type-safe database access.

## Database

- **SQLite**, accessed via Prisma.
  - Zero-config, file-based, ideal for getting started quickly and for
    small/medium clinic data volumes.
  - Prisma's schema makes a future move to PostgreSQL straightforward if
    the clinic outgrows SQLite.

## Frontend / UI

- **React + TypeScript** function components.
- **Tailwind CSS** for styling — fast to build an attractive, modern,
  responsive UI (Steve's requirement).
- Dashboards (for agents and for staff) built as authenticated Next.js
  routes.

## Testing & quality

- **TypeScript strict mode** across the codebase.
- **Vitest** (or Jest) for unit/integration tests.
- **Playwright** for key end-to-end flows (booking an appointment, viewing
  the dashboard).
- **ESLint + Prettier** for consistent code style.

## Tooling & environment

- **Node.js LTS**.
- **npm** for package management (matches existing `package-lock.json`).
- Single repository (no monorepo) while the app is small.

## Non-goals (for now)

- No microservices split — keep it one deployable app until there's a
  clear need to split it.
- No custom auth system — use a well-established auth library
  (e.g., Auth.js/NextAuth) rather than building our own.
