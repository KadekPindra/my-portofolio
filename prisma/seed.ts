import { PrismaClient } from "@/app/generated/prisma";
import users from "./seeders/userData";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seedUsers() {
  const saltRounds = 10;

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    await prisma.user.create({
      data: user,
    });
  }
}

export async function main() {
  console.log(`Start seeding ...`);

  await seedUsers();

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error("Error while seeding database: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });