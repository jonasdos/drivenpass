import { NextFunction, Request, Response } from "express";
import { Error } from "protocols/types";



export default async function errorHandler(
  error: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction) {
    console.log(error)
if(error.type === "Conflict") {
  res.status(409).send(error.message)
  return
}
if(error.type === "Unauthorized") {
  res.status(401).send(error.message)
  return
}

if(error.type === "Unprocessable Entity") {
  res.status(422).send(error.message)
  return
}
if(error.type === "Not Found") {
  res.status(404).send(error.message)
  return
}
if(error.type === "teste") {
  res.status(404).send(error.message)
  return
}
if(error.type === "Bad Request") {
  res.status(400).send(error.message)
  return
}

res.status(500).send("Erro desconhecido")
return
}


export function paramsErrorVerify( error: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction) {
 if(Number(req.params.id)<0) {
  throw {
type: "Bad Request",
message: "Rota invalida"
  }
 }
 console.log("Validou parametro")
 next()
}