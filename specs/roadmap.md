# AgentClinic Roadmap

## Planning Principle
Implementation should proceed in **very small phases of work**, with each phase leaving the product in a more demonstrable, teachable, and reviewable state than before.

You asked for **nano phases**, a **vertical-slice implementation order**, and a roadmap that strongly supports:
- students learning spec-driven development with AI coding agents
- developers giving AI coding demos at conference booths

That means the roadmap should favor tiny end-to-end slices over broad unfinished layers.

## Roadmap Rules
- Each phase should be small enough to explain and demo quickly.
- Each phase should create an artifact that is useful for both product progress and teaching.
- Each phase should prefer real user flow progress over isolated technical depth.
- Each phase should keep local setup simple enough for demos and workshops.
- Each phase should build toward a believable clinic experience for both agents and staff.

## Phase 0 — Constitution and Product Framing
**Goal:** align on what AgentClinic is before building.

Deliverables:
- Mission definition
- Tech stack direction
- Implementation roadmap
- Initial product vocabulary: agent, ailment, therapy, appointment, staff

Exit criteria:
- Team agrees on product intent and development direction

## Phase 1 — Demo-Friendly Project Bootstrap
**Goal:** make the project easy to run, explain, and extend.

Deliverables:
- Framework setup
- TypeScript configuration aligned with the chosen framework
- Basic scripts for local startup and build
- Minimal starter page proving the app runs locally
- Short orientation notes for students and demo presenters

Exit criteria:
- App runs locally in the browser
- A new contributor can understand where to start
- The project can be launched reliably in a workshop or booth setting

## Phase 2 — Brand Shell and Navigation
**Goal:** create the smallest believable AgentClinic experience.

Deliverables:
- Global layout
- Top-level navigation
- Visual theme and typography direction
- Landing page or home screen introducing the product premise

Exit criteria:
- The product feels recognizable and presentable
- Demo presenters have a polished entry point

## Phase 3 — Agent Dashboard Slice with Mock Data
**Goal:** ship the first visible user-facing workflow slice.

Deliverables:
- Agent dashboard route
- Mocked profile summary
- Mocked active ailments list
- Mocked therapy recommendations
- Mocked upcoming appointments

Exit criteria:
- A learner can see one complete role-based screen
- A presenter can demo the core concept from the agent perspective

## Phase 4 — Staff Dashboard Slice with Mock Data
**Goal:** add the second major role without backend complexity.

Deliverables:
- Staff dashboard route
- Mocked appointment queue
- Mocked agent list
- Mocked treatment overview

Exit criteria:
- Agent and staff views can be compared side by side
- The dual-dashboard concept is easy to teach and demonstrate

## Phase 5 — Shared UI Patterns and Empty States
**Goal:** stabilize the experience before persistence work starts.

Deliverables:
- Card, list, badge, and status patterns
- Empty states for no ailments, no therapies, and no appointments
- Loading and error display patterns
- Reusable page section structure for future features

Exit criteria:
- The mock product looks consistent
- Future slices can reuse common interface pieces

## Phase 6 — Appointment Booking UI Slice
**Goal:** make the first interaction flow real at the interface level.

Deliverables:
- Appointment booking form
- Appointment confirmation state
- Staff-side appointment detail or review screen
- Validation messaging for core form inputs

Exit criteria:
- The booking flow can be walked through end to end with mock data
- Students can trace a single feature from spec to interface

## Phase 7 — Domain Model and SQLite Setup
**Goal:** introduce the smallest real persistence layer.

Deliverables:
- SQLite configuration
- Prisma schema or equivalent schema definition
- Core entities:
  - agents
  - ailments
  - therapies
  - appointments
  - staff users
- Seed data for local development and demos

Exit criteria:
- The app has a reliable local database story
- Demo environments remain lightweight and repeatable

## Phase 8 — Read-Only Data Wiring for Dashboards
**Goal:** replace mock dashboard data with real records.

Deliverables:
- Server-side data loading for agent dashboard
- Server-side data loading for staff dashboard
- Record-not-found and empty-data handling

Exit criteria:
- Both dashboards are backed by SQLite seed data
- The product still feels demo-friendly after data integration

## Phase 9 — Authentication and Role Routing
**Goal:** make the two-audience dashboard model real in the app.

Deliverables:
- Sign-in flow
- Agent role access rules
- Staff role access rules
- Protected dashboard routes

Exit criteria:
- Agents cannot reach staff-only screens
- Staff access matches the intended workflow boundaries

## Phase 10 — Appointment Booking End to End
**Goal:** complete the first true vertical feature.

Deliverables:
- Persisted appointment creation
- Appointment list backed by the database
- Staff-side appointment updates
- Basic scheduling constraints or conflict checks

Exit criteria:
- An agent can book a real appointment
- Staff can review and manage that appointment

## Phase 11 — Ailments and Therapies End to End
**Goal:** make care information operational, not just presentational.

Deliverables:
- Create and update ailments
- Create and update therapies
- Associate therapies with ailments or agents
- Show active care plans on dashboards

Exit criteria:
- Staff can manage care details through the product
- Agents can see useful treatment information clearly

## Phase 12 — Teaching and Demo Support Pack
**Goal:** make the product easier to use in classrooms and conference booths.

Deliverables:
- Seed scenarios that are easy to present live
- Guided demo path through the main screens
- Notes on how the spec maps to implementation slices
- Resettable local data workflow for repeated demos

Exit criteria:
- A presenter can reliably run a short live demo
- A student can connect roadmap phases to concrete implementation steps

## Phase 13 — Reliability and Quality Pass
**Goal:** make the MVP dependable.

Deliverables:
- Unit tests for core domain logic
- End-to-end tests for login, dashboard, and booking flows
- Linting, formatting, and CI automation
- Performance and accessibility pass on primary screens

Exit criteria:
- Critical flows are covered by automated checks
- Basic release confidence is established

## Phase 14 — MVP Release Readiness
**Goal:** prepare for real users.

Deliverables:
- Deployment setup
- Environment configuration
- Basic observability and error reporting
- Short operator/admin documentation

Exit criteria:
- Team can deploy predictably
- MVP is usable by pilot users

## Rules For Future Phases
- Prefer vertical slices over large unfinished systems
- Keep each phase small enough to demo in one sitting
- Do not add major platform complexity before the booking flow works end to end
- When in doubt, improve clarity for agents and staff before adding breadth
- Preserve workshop and booth friendliness as the product grows
- Use the roadmap as a teaching sequence, not just a delivery checklist

