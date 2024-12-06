import { Request, Response } from "express";
import { UserLoginRequest } from "../protocols/types";
import { newUserService } from "../services/signupService";
import { loginService } from "../services/SignInService";


export async function signIn(req: Request, res: Response) {
  const loginData = req.body as UserLoginRequest
  const result = await loginService(loginData)
  res.status(200).send(result)
  
}