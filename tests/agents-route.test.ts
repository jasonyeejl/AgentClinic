import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { PrismaClient } from '@prisma/client';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { seedAgents } from '../prisma/seed';

const projectRoot = join(__dirname, '..');
let tempDir: string;
let dbPath: string;
let prisma: PrismaClient;

vi.mock('../lib/prisma', () => ({
  get prisma() {
    return prisma;
  },
}));

describe('GET /api/agents data path', () => {
  beforeAll(() => {
    // Run migrations against an isolated, throwaway SQLite database so this
    // test never touches prisma/dev.db.
    tempDir = mkdtempSync(join(tmpdir(), 'agentclinic-agents-route-test-'));
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

  it('returns seeded agents ordered by createdAt ascending', async () => {
    await seedAgents(prisma);

    const { getAgents } = await import('../app/api/agents/route');
    const agents = await getAgents();

    const seededCount = await prisma.agent.count();
    expect(agents).toHaveLength(seededCount);

    for (const agent of agents) {
      expect(agent).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
      });
      expect(agent.createdAt).toBeInstanceOf(Date);
    }

    const timestamps = agents.map((agent) => agent.createdAt.getTime());
    const sorted = [...timestamps].sort((a, b) => a - b);
    expect(timestamps).toEqual(sorted);
  });
});
