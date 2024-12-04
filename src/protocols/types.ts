import { User } from "@prisma/client"
export type Error = {
  type: string,
  message: string
}

export type NewUserRequest = Omit<User, "id" | "creatAt" | "credentials">