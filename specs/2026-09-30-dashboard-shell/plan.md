# Plan — Static Dashboard Shell (Phase 2)

## 1. Add the `/api/agents` route handler

1.1. Create `app/api/agents/route.ts` with a `GET` handler.
1.2. Import the shared Prisma client from `lib/prisma.ts` and query all
     `Agent` rows (`id`, `name`, `email`, `createdAt`), ordered by
     `createdAt` ascending.
1.3. Return the result as JSON (`NextResponse.json(...)`) with a 200
     status.
1.4. Extract the query itself into a small exported helper function
     (e.g. `getAgents()`), separate from the route handler wrapper, so
     it can be unit tested without going through HTTP.

## 2. Add the `/dashboard` page

2.1. Create `app/dashboard/page.tsx` as a client component
     (`"use client"`).
2.2. On mount, `fetch('/api/agents')`, parse the JSON response, and
     store it in state.
2.3. Render a simple list/table of agents showing `name`, `email`, and
     `createdAt` (formatted as a readable date string).
2.4. While the request is in flight, render a minimal "Loading…" state.
2.5. If the fetched list is empty, render "No agents yet." instead of an
     empty table/list.

## 3. Wire up minimal styling

3.1. Apply basic Tailwind utility classes for readability (e.g. spacing,
     a simple table/list layout) — no design-system work, matching the
     "no styling polish" scope for this phase.

## 4. Unit test the data path

4.1. Add `tests/agents-route.test.ts` that imports the `getAgents()`
     helper from `app/api/agents/route.ts`.
4.2. Reuse the pattern from `tests/seed.test.ts`: spin up an isolated
     temp SQLite database (via `prisma migrate deploy`), seed 1-2 known
     agents into it, and assert `getAgents()` returns them with the
     expected shape/order.
4.3. Ensure the test cleans up its temp database file and does not
     touch `prisma/dev.db`.

## 5. Verify the toolchain end to end

5.1. Run `npm run build` — must succeed (including the new route and
     page).
5.2. Run `npm run lint` — must pass.
5.3. Run `npx prettier --check .` — must pass.
5.4. Run `npm test` — all existing tests plus the new agents-route test
     must pass.
5.5. Run `npm run dev`, seed the dev database if needed
     (`npx prisma db seed`), and manually load `http://localhost:3000/dashboard`
     to confirm seeded agents render (manual check).

## 6. Housekeeping

6.1. Update root `README.md` with a short note on the `/dashboard` route
     and `/api/agents` endpoint.
6.2. Commit the dashboard shell work.
