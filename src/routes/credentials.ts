import { Router } from "express";
import { jwtvalidation } from "../middlewares/jwtvalidation";
import { createNewCredential, getCredentials } from "../controllers/credentials";
import { validateSchema } from "../middlewares/validateSchemas";
import { NewCredentialData } from "../schemas/credentialsSchema";

const credentialsRouter = Router()

credentialsRouter.post("/credentials", jwtvalidation, validateSchema(NewCredentialData),createNewCredential )
credentialsRouter.get("/credentials/",  jwtvalidation, getCredentials )
credentialsRouter.get("/credentials/:id",  jwtvalidation, getCredentials )

export default credentialsRouter