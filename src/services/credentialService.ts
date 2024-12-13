import Cryptr from "cryptr";
import dotenv from "dotenv"
import { NewCredentialRequest, UpdateCredential } from "../protocols/types";
import { createNewCredentialRepository, deleteCredentialRepository, getAllCredentialsByIdRepository, getCredentialByIdRepository, getCredentialsByUserIdRepository, updateCredentialRepository } from "../repositories/credentialsRepository";

dotenv.config()
const cryptr = new Cryptr(process.env.SECRET)

export async function createCredentialService(newCrendential: NewCredentialRequest, userId: number) {
  const userCredentials = await getCredentialsByUserIdRepository(userId)
  userCredentials.map(item => {
    if(item.title === newCrendential.title || item.username === newCrendential.username ) {
      throw {
        type: "Conflict",
        message: "O usuário já possuí esse titulo ou username de credencial cadastrado."
      }
    }
  })
  newCrendential.password = cryptr.encrypt(newCrendential.password)
  const result = await createNewCredentialRepository(newCrendential, userId)
  return result
}

export async function getCredentialByIdService(id: number) {
  const result = await getCredentialByIdRepository(id)
 
   if(result === null) {
    throw {
      type: "Not Found",
      message: "Credencial não existe"
    }
  }
  result.password = cryptr.decrypt(result.password)
  return result
}
export async function getAllCredentialsService(id: number) {
  const result = await getAllCredentialsByIdRepository(id)
  
  for(let i=0;i<result.length;i++) {
    result[i].password = cryptr.decrypt(result[i].password)
  }
  return result
}

export async function updateCredentialService(userId: number, credentialId: number, credentialData: UpdateCredential) {
  const oldCredential = await getCredentialByIdRepository(credentialId)
  if(oldCredential === null) {
    throw {
      type: "Not Found",
      message: "Credencial não encontrada"
    }
  }
  const userCredentials = await getCredentialsByUserIdRepository(userId)
  userCredentials.map(item => {
    if(item.title === credentialData.title && item.id != credentialId  ) {
      throw {
        type: "Conflict",
        message: "Titulo da credencial indisponivel para este usuário."
      }
    }
  })
  
  credentialData.password = cryptr.encrypt(credentialData.password)
  console.log("encriptografou a nova senha")

  const result = await updateCredentialRepository(userId, credentialId, credentialData)
  if(!result) {
    throw {
      type: "Not Found",
      message: "Erro ao atualizar credencial"
    }
  }
  return result
}
export async function deleteCredentialService(id: number) {
  const result = await deleteCredentialRepository(id)
  return result 
}
