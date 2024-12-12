import { User, Credential } from "@prisma/client"
export type Error = {
  type: string,
  message: string
}
export type UserData = {
  user: {
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: string,
  },
  iat: number,
  exp: number,
}

export type NewUserRequest = Omit<User, "id" | "createdAt"> & {
  password2: string
}

export type UserLoginRequest = Omit<User, "id" | "createdAt" | "name"> 

export type NewCredentialRequest = Omit<Credential,"id" | "createdAt" >

