import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    
    const users = await prisma.user.findMany();
    console.log("Connected to the database. Users:", users);
  } catch (e) {
    console.error("Error connecting to the database:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
