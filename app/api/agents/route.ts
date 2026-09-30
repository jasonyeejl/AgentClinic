import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function getAgents() {
  return prisma.agent.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
}

export async function GET() {
  const agents = await getAgents();
  return NextResponse.json(agents);
}
