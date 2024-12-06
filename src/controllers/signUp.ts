import { Request, Response } from "express";
import { Error, NewUserRequest } from "../protocols/types";
import { newUserService } from "../services/signupService";


export async function signUp(req: Request, res: Response) {
  const newUser = req.body as NewUserRequest
  if(newUser.password != newUser.password2) {
    throw {
      type: "Unprocessable Entity",
      message: "Falha ao confirmar a senha"
    } as Error
  }
  await newUserService(newUser)

  res.status(201).send("Usuário criado com sucesso")
  
}