import { Request, Response } from "express";
import { NewCredentialRequest, UpdateCredential } from "../protocols/types";
import { createCredentialService, deleteCredentialService, getAllCredentialsService, getCredentialByIdService, updateCredentialService } from "../services/credentialService";
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

export async function updateCredential(req: Request, res: Response) {
  const userTokenData = await userData(req.headers.authorization)
  const credentialId = Number(req.params.id) 
  const updateCredentialData = req.body as UpdateCredential

  await updateCredentialService(userTokenData.user.id, credentialId, updateCredentialData)

  res.status(204).send("Credencial atualizada com sucesso")
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = Number(req.params.id) 
  const userTokenData = await userData(req.headers.authorization)
  const allCredentials = await getAllCredentialsService(userTokenData.user.id)
  let credencialIsValid = false as boolean
  allCredentials.map(item => {
    item.id === credentialId ? credencialIsValid = true : ''
  })
  if(!credencialIsValid) {
    throw {
      type: "Not Found",
      message: "Item não encontrado"
    }
  }

 await deleteCredentialService(credentialId)

 res.status(204).send("No Content")
}