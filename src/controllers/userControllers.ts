import { Request, Response } from "express";


export async function userLogin(req: Request, res: Response) {
  console.log("Validou")
  res.status(200).send(req.body)
  
}