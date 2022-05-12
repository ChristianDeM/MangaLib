const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const Manga1 = await prisma.explorer.upsert({
      where: { name: 'onepiece' },
      update: {},
      create: {
        name: 'onepiece',
		editorial: 'ajolonauta',
		tomosN: 2,
        precio: 69,
      },
    });

    
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();