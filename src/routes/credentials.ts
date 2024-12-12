import { Router } from "express";
import { jwtvalidation } from "../middlewares/jwtvalidation";
import { createNewCredential, deleteCredential, getCredentials, updateCredential } from "../controllers/credentials";
import { validateSchema } from "../middlewares/validateSchemas";
import { NewCredentialData, updateCredentialData } from "../schemas/credentialsSchema";


const credentialsRouter = Router()

credentialsRouter.post("/credentials", jwtvalidation, validateSchema(NewCredentialData),createNewCredential )
credentialsRouter.get("/credentials/",  jwtvalidation, getCredentials )
credentialsRouter.get("/credentials/:id",  jwtvalidation, getCredentials )
credentialsRouter.put("/credentials/:id", jwtvalidation,validateSchema(updateCredentialData), updateCredential )
credentialsRouter.delete("/credentials/:id", jwtvalidation, deleteCredential )
export default credentialsRouter