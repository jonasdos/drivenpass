import { prisma } from "../src/database/database";
import bcrypt from "bcrypt"

async function defaultUser() {

await prisma.user.upsert({
  where: {email: "demo@driven.com.br"},
  update: {},
  create: {
    name: "Demo",
    email: "demo@driven.com.br",
    password: await bcrypt.hash("demo123", 10)
  }
})
}
defaultUser()
.then(async () => {
await prisma.$disconnect()
console.log("Arquivo seed executado com sucesso")
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
}
)