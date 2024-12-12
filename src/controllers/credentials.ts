import { Request, Response } from "express";
import { NewCredentialRequest } from "../protocols/types";
import { createCredentialService, getAllCredentialsService, getCredentialByIdService } from "../services/CredentialService";
import { userData } from "../middlewares/jwtvalidation";




export async function createNewCredential(req: Request, res: Response) {
  const newCrendential = req.body as NewCredentialRequest
  const result =  await createCredentialService(newCrendential)
  res.status(201).send(result)
}

export async function getCredentials(req: Request, res: Response) {
  const userTokenData = await userData(req.headers.authorization)
  if(req.params.id) {
    const credential = await getCredentialByIdService(Number(req.params.id))
    if(!credential) {
      throw {
        type: "Not Found",
        message: "Credencial inexistente"
      }
    }
    res.status(200).send(credential)
    return
  }
  const allCredentials = await getAllCredentialsService(userTokenData.user.id)
  if(!allCredentials) {
    throw {
      type: "Not Found",
      message: "Usuário sem credencial cadastrada"
    }
  }
  res.status(200).send(allCredentials)

}