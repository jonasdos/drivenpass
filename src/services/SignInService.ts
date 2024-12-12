import repository from "../repositories/newUserRepository";
import { UserLoginRequest } from "../protocols/types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export async function loginService(loginData: UserLoginRequest) {
  const user = await repository.getUserByEmail(loginData.email)
  if(!user) {
    throw {
      type: "Not Found",
      message: "Usuário não existe"
    }
  }
  const match = await bcrypt.compare(loginData.password, user.password)
  if(match) {
    const token = jwt.sign({user}, process.env.SECRET, {expiresIn: 3000})
    return token
  } else {
    throw {
      type: "Unauthorized",
      message: "Senha inválida"
    }
  }
}