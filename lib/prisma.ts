import { PrismaClient } from '@prisma/client';

// Reuse a single PrismaClient instance across hot reloads in development
// to avoid exhausting the database connection limit.
// https://pris.ly/d/help/next-js-best-practices
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
