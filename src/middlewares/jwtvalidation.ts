
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { UserData } from "protocols/types";

dotenv.config()


export async function jwtvalidation (req: Request, res: Response, next: NextFunction) {
  if(!req.headers.authorization) {
    throw {
      type: "Unauthorized",
      message: "Acesso negado"
    }
  }
    const token = req.headers.authorization.split(" ")[1]
    const validateToken = jwt.verify(token, process.env.SECRET as string)
   
  if(validateToken) {
    console.log("validou token")
    next()
  }
  else {
    throw {
      type: "Unauthorized",
      message: "Acesso negado"
    }
  }
}

export async function userData(defaultToken: string): Promise<UserData> {
 
  const token = defaultToken.split(" ")[1]
  const tokenData = jwt.verify(token, process.env.SECRET as string) as UserData

return tokenData
}