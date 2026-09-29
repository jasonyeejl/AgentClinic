# AgentClinic Tech Stack

## Decision Summary
AgentClinic should use a **server-side TypeScript foundation** and standard, well-supported web tooling.

Because the current repository only contains baseline TypeScript setup and stakeholder input calls for a reliable, popular stack, the default recommendation is to adopt a TypeScript-first framework that supports server-rendered pages, routing, APIs, and modern browser delivery from one codebase.

## Recommended Direction
### Application Framework
- **Primary recommendation:** `Next.js` with `TypeScript`
- **Why:**
  - Widely adopted and well supported
  - Good fit for dashboards and forms
  - Supports server-side rendering, route handlers, and incremental growth
  - Reduces early architecture overhead versus splitting frontend and backend immediately

### UI Layer
- `React`
- `TypeScript`
- `Tailwind CSS`
- Optional component primitives from a mature accessibility-focused library

### Server-Side Runtime
- `Node.js`
- Server logic written in `TypeScript`
- Framework-managed server routes for early phases

### Data Layer
- `SQLite` as the default relational database, especially for local development, workshops, demos, and early product phases
- `PostgreSQL` as an optional later upgrade path if the project outgrows SQLite needs
- `Prisma` as the ORM and schema management tool

### Authentication
- Start with a standard session-based auth solution compatible with the chosen framework
- Support at least two roles from the beginning:
  - `agent`
  - `staff`

### Testing
- `Vitest` for unit and integration tests where practical
- `Playwright` for end-to-end browser coverage on critical flows

### Quality Tooling
- `ESLint`
- `Prettier`
- TypeScript strict mode
- CI checks for build, lint, and tests

## Why This Fits Stakeholder Input
### Engineering
Mary asked for a reliable site built on a popular TypeScript-based stack with dashboards for agents and staff. This direction satisfies that by using proven mainstream tools and a structure that supports separate dashboard experiences.

### Product
Susan asked for features around agents, ailments, therapies, and appointment booking. A relational model with typed server code is a strong fit for these connected entities and workflows, and SQLite keeps the setup lightweight for early iterations.

### Marketing
Steve asked for an attractive site that works well in a modern browser. React-based UI with modern CSS tooling supports polished, responsive experiences.

## Architecture Principles
1. **Keep early deployment simple.** Prefer a unified application before splitting services.
2. **Type safety end to end.** Share domain concepts through TypeScript wherever possible.
3. **Server-first where useful.** Use server rendering and server actions/handlers when it improves reliability and speed.
4. **Optimize for dashboard workflows.** Form-heavy staff views should be fast and low-friction.
5. **Defer complexity.** Avoid microservices, event buses, and premature scaling decisions early on.

## Initial Domain Model
At minimum, the system should expect these core entities:
- `Agent`
- `Ailment`
- `Therapy`
- `Appointment`
- `StaffUser`

Likely relationships:
- An agent can have many ailments.
- An ailment can have one or more recommended therapies.
- An agent can book many appointments.
- A staff user can manage many appointments and therapy plans.

## Suggested Repository Evolution
The repository currently starts as a basic TypeScript project. A likely next evolution is:
1. Introduce the chosen framework at the root.
2. Add app routing and dashboard layouts.
3. Add database schema and local development configuration.
4. Add auth and role-based access.
5. Add tests and CI automation.

## Deferred Decisions
These do not need to be locked immediately:
- Hosting provider
- Background job infrastructure
- Realtime features
- Design system depth
- Analytics stack

## Constraints
- Stay TypeScript-first
- Target modern evergreen browsers
- Favor widely adopted libraries over niche options
- Keep the path from prototype to production straightforward

