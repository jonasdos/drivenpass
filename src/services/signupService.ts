import repository from "../repositories/newUserRepository";
import { NewUserRequest } from "../protocols/types";


export async function newUserService(userRequest: NewUserRequest) {
  const emailExist = await repository.getUserByEmail(userRequest.email)
    if(emailExist) {
      throw {
        type: "Conflict",
        message: "E-mail ou senha inválidos"
      }
    }
  const result = await repository.createNewUser(userRequest)
  return result
}