import { NewCredentialRequest } from "../protocols/types";
import { prisma } from "../database/database";



export async function getCredentialsByUserIdRepository(userId: number) {
  const result = await prisma.credential.findMany({
    where: {userId: userId}
  })
  return result
}

export async function createNewCredentialRepository(newCrendential: NewCredentialRequest) {
  const result = await prisma.credential.create(
    {data: newCrendential}
  )
  return result
}

export async function getAllCredentialsByIdRepository(userId: number) {
  const result = await prisma.credential.findMany({
    where: {userId: userId}
  
  })
  return result
}
export async function getCredentialByIdRepository(credentialId: number) {
  const result = await prisma.credential.findUnique({
    where: {
      id: credentialId
    }
  })
  return result
}