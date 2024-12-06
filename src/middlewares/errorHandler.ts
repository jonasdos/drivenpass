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
res.status(500).send("Erro desconhecido")
return
}