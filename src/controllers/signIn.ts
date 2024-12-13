import { Request, Response } from "express";
import { UserLoginRequest } from "../protocols/types";
import { loginService } from "../services/signInService";


export async function signIn(req: Request, res: Response) {
  const loginRequest = req.body as UserLoginRequest
  const token = await loginService(loginRequest)
  res.status(200).send(token)
  
}