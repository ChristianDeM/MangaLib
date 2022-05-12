const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const Manga1 = await prisma.manga.upsert({
      where: { name: 'onepiece' },
      update: {},
      create: {
        name: 'onepiece',
		editorial: 'Panini',
		tomosN: 2,
        precio: 69,
      },
    });

    console.log('update manga'); 
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();