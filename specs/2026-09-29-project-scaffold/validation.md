# Validation — Project Scaffold (Phase 0)

This phase is ready to merge when all of the following are true.

## Build & run

- [ ] `npm run build` completes with no errors.
- [ ] `npm run dev` starts successfully and the home page loads at
      `http://localhost:3000` in a modern browser with no console errors.

## Lint & format

- [ ] `npm run lint` passes (Next.js default ESLint config), with no
      errors (warnings acceptable only if they come from the unmodified
      scaffold defaults).
- [ ] Prettier is configured and running `npm run format` (or equivalent)
      produces no unexpected diffs on a clean checkout.

## Tests

- [ ] `npm test` runs Vitest and the single smoke test passes.
- [ ] Test output clearly shows 1 passing test, 0 failing.

## Structure / housekeeping

- [ ] Old bare-TS scaffold (`src/index.ts`, old root `tsconfig.json`) is
      removed and replaced by the Next.js-generated equivalents.
- [ ] `.gitignore` excludes `.next/`, `node_modules/`, and other build
      artifacts.
- [ ] `package.json` has working `dev`, `build`, `lint`, and `test`
      scripts.
- [ ] TypeScript `strict` mode is enabled in `tsconfig.json`.
- [ ] Tailwind CSS is installed/configured and visibly applied on the
      default home page (e.g. inspect a Tailwind utility class in the
      rendered HTML or dev tools).

## Alignment check

- [ ] No product features (agents, ailments, therapies, appointments,
      auth, database) were introduced — confirms scope stayed within
      Phase 0 per `specs/roadmap.md`.
- [ ] Stack choices match `specs/tech-stack.md` (Next.js, TypeScript,
      Tailwind, ESLint/Prettier, Vitest, npm).

## Merge criteria

All checkboxes above are checked, `git status` is clean (no stray/
untracked scaffold files), and the branch
`2026-09-29-project-scaffold` is rebased/up to date with `main` before
opening the PR.
