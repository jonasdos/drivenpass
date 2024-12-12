import Joi from "joi";
import { NewCredentialRequest } from "../protocols/types";

export const NewCredentialData = Joi.object<NewCredentialRequest>({
  url: Joi.string().required(),
  title: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  userId: Joi.number().required()
})