# AgentClinic

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.

## Getting started

This project uses Next.js (App Router) + TypeScript + Tailwind CSS, with
ESLint/Prettier and Vitest.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Other useful scripts:

```bash
npm run build   # production build
npm run lint     # lint with ESLint
npm run format   # format with Prettier
npm test         # run Vitest tests
```

## Database

This project uses [Prisma](https://www.prisma.io) with a local SQLite
database (`prisma/dev.db`, gitignored).

```bash
npx prisma migrate dev   # create/apply migrations from prisma/schema.prisma
npx prisma db seed       # populate the database with sample agents
```

`prisma/schema.prisma` defines the data model. `prisma/seed.ts` contains
the (idempotent) seed data.
