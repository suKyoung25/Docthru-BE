import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + "?connection_limit=1&pool_timeout=20&connect_timeout=60",
    },
  },
});

export default prisma;
