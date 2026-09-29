import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { PrismaClient } from '@prisma/client';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { sampleAgents, seedAgents } from '../prisma/seed';

const projectRoot = join(__dirname, '..');
let tempDir: string;
let dbPath: string;
let prisma: PrismaClient;

describe('prisma seed script', () => {
  beforeAll(() => {
    // Run migrations against an isolated, throwaway SQLite database so this
    // test never touches prisma/dev.db.
    tempDir = mkdtempSync(join(tmpdir(), 'agentclinic-seed-test-'));
    dbPath = join(tempDir, 'test.db');
    const databaseUrl = `file:${dbPath}`;

    execFileSync(
      'npx',
      ['prisma', 'migrate', 'deploy', '--config', 'prisma.config.ts'],
      {
        cwd: projectRoot,
        env: { ...process.env, DATABASE_URL: databaseUrl },
        stdio: 'pipe',
      },
    );

    prisma = new PrismaClient({ datasourceUrl: databaseUrl });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('creates the expected number of sample agents', async () => {
    await seedAgents(prisma);

    const agents = await prisma.agent.findMany();
    expect(agents).toHaveLength(sampleAgents.length);

    const emails = agents.map((agent) => agent.email).sort();
    expect(emails).toEqual(
      [...sampleAgents.map((agent) => agent.email)].sort(),
    );
  });

  it('is idempotent when run twice', async () => {
    await seedAgents(prisma);
    await seedAgents(prisma);

    const agents = await prisma.agent.findMany();
    expect(agents).toHaveLength(sampleAgents.length);
  });

  it('leaves the real dev database file untouched', () => {
    expect(existsSync(join(projectRoot, 'prisma', 'dev.db'))).toBe(true);
    expect(dbPath).not.toBe(join(projectRoot, 'prisma', 'dev.db'));
  });
});
