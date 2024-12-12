import Cryptr from "cryptr";
import dotenv from "dotenv"
import { NewCredentialRequest } from "../protocols/types";
import { createNewCredentialRepository, getAllCredentialsByIdRepository, getCredentialByIdRepository, getCredentialsByUserIdRepository } from "../repositories/credentialsRepository";

dotenv.config()
const cryptr = new Cryptr(process.env.SECRET)

export async function createCredentialService(newCrendential: NewCredentialRequest) {
  const userCredentials = await getCredentialsByUserIdRepository(newCrendential.userId)
  userCredentials.map(item => {
    if(item.title === newCrendential.title) {
      throw {
        type: "Conflict",
        message: "O usuário já possuí esse titulo de credencial associado."
      }
    }
  })
  newCrendential.password = cryptr.encrypt(newCrendential.password)
  const result = await createNewCredentialRepository(newCrendential)
  return result
}

export async function getCredentialByIdService(id: number) {
  const result = await getCredentialByIdRepository(id)
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
