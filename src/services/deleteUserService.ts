import repository from "../repositories/userRepository";
import { deleteCredentialRepository, getAllCredentialsByIdRepository } from "../repositories/credentialsRepository";


export async function deleteUserService(id: number) {
  const userCredentials = await getAllCredentialsByIdRepository(id)
  const promises = userCredentials.map(item => {return deleteCredentialRepository(item.id)})
  await Promise.all(promises)
  const result = await repository.deleteUser(id)
  return result
}