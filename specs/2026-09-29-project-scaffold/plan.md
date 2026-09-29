# Plan — Project Scaffold (Phase 0)

## 1. Remove old bare-TS scaffold

1.1. Delete `src/index.ts` and root `tsconfig.json` (will be replaced by
     Next.js's generated versions).
1.2. Note current `package.json` contents in case anything (e.g.
     `name`/`description`) should be preserved.

## 2. Initialize Next.js + TypeScript

2.1. Scaffold Next.js App Router + TypeScript into the repo root using
     npm, non-interactively where possible (App Router, no `src/` dir vs
     `src/` dir — pick one and note it in requirements if it changes).
2.2. Confirm `package.json` scripts (`dev`, `build`, `start`, `lint`) are
     present.
2.3. Confirm `tsconfig.json` is the Next.js-generated one with `strict`
     mode on.

## 3. Add Tailwind CSS

3.1. Install and configure Tailwind (or confirm it's already included by
     the scaffold step).
3.2. Confirm Tailwind directives are wired into the global stylesheet and
     the default home page renders with Tailwind classes applied.

## 4. Add ESLint + Prettier

4.1. Confirm/enable Next.js's default ESLint config.
4.2. Add Prettier with a minimal config (e.g. `.prettierrc`) that doesn't
     conflict with ESLint.
4.3. Add `lint` script (if not already present) and a `format` script.

## 5. Add Vitest with a smoke test

5.1. Install Vitest and any needed config for TypeScript + React/Next
     compatibility.
5.2. Add a `test` script to `package.json`.
5.3. Add one trivial passing test (e.g. `1 + 1 === 2`) under a `tests/` or
     `__tests__/` directory.

## 6. Verify the toolchain end to end

6.1. Run `npm run build` — must succeed.
6.2. Run `npm run dev` — start the server, confirm the home page loads in
     a browser (manual check).
6.3. Run `npm run lint` — must succeed (or show only expected
     scaffold-default warnings).
6.4. Run `npm test` — the smoke test must pass.

## 7. Housekeeping

7.1. Update `.gitignore` for Next.js artifacts (`.next/`, `node_modules/`,
     etc.) if not already covered.
7.2. Update root `README.md` if scaffold changes affect how to run the
     project (e.g. add a "Getting started" section).
7.3. Commit the scaffold.
