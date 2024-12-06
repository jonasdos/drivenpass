import { NewUserRequest } from "protocols/types";
import { prisma } from "../database/database";
import bcrypt from "bcrypt"

async function getUserByEmail(email: string) {
  const result = prisma.user.findUnique({
    where: {email: email}
  })
  return result
}
async function createNewUser(user: NewUserRequest) {
  const password = await bcrypt.hash(user.password,10)
  const result = await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      password: password
    }
  })

return result
}

const repository = {
  getUserByEmail, 
  createNewUser
}

export default repository