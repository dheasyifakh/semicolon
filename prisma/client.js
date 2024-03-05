import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

if (!global.prisma) {
  global.prisma = prismaClientSingleton();
}

export default global.prisma;

if (process.env.NODE_ENV !== 'production') global.prisma = global.prisma;
