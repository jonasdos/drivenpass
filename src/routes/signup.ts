import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemas"
import { newUserSchema } from "../schemas/loginSchemas"
import { signUp } from "../controllers/signUpControllers"

const signUpRouter = Router()

signUpRouter.post("/sign-up", validateSchema(newUserSchema), signUp)


export default signUpRouter