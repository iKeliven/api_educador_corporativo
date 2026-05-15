const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("123456", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@email.com",
    },
    update: {},
    create: {
      name: "Administrador",
      email: "admin@email.com",
      password: passwordHash,
    },
  });

  console.log("Usuário criado com sucesso");
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });