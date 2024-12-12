import { Request, Response } from "express";
import { userData } from "../middlewares/jwtvalidation";
import { deleteUserService } from "../services/deleteUserService";


export async function eraseAcount(req: Request, res: Response) {
  const tokenData = await userData(req.headers.authorization) 
  const result =  await deleteUserService(tokenData.user.id)

  res.status(204).send("Usuário deletado")
}