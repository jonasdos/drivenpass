import Joi from "joi";
import { NewCredentialRequest, UpdateCredential } from "../protocols/types";

export const NewCredentialData = Joi.object<NewCredentialRequest>({
  url: Joi.string().required(),
  title: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required()

})

export const updateCredentialData = Joi.object<UpdateCredential>({
  url: Joi.string().required(),
  title: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required()
})