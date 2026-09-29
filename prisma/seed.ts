import { PrismaClient } from '@prisma/client';
import { prisma } from '../lib/prisma';

export const sampleAgents = [
  { name: 'Ada Lovelace', email: 'ada@agentclinic.test' },
  { name: 'Grace Hopper', email: 'grace@agentclinic.test' },
  { name: 'Alan Turing', email: 'alan@agentclinic.test' },
];

export async function seedAgents(client: PrismaClient) {
  for (const agent of sampleAgents) {
    await client.agent.upsert({
      where: { email: agent.email },
      update: {},
      create: agent,
    });
  }
}

async function main() {
  await seedAgents(prisma);
}

if (typeof require !== 'undefined' && require.main === module) {
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (error) => {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    });
}
