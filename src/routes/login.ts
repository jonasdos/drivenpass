import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemas"
import { loginSchema, newUserSchema } from "../schemas/loginSchemas"
import { signUp } from "../controllers/signUp"
import { signIn } from "../controllers/signIn"

const loginRouter = Router()

loginRouter.post("/sign-up", validateSchema(newUserSchema), signUp)
loginRouter.post("/sign-in", validateSchema(loginSchema), signIn)

export default loginRouter