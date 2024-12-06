import Joi from "joi";
import { NewUserRequest } from "protocols/types";


export const newUserSchema = Joi.object<NewUserRequest>({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  password2: Joi.string().min(6).required()
})
