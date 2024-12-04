import express, { Request, Response } from "express" 
import "express-async-errors"
import dotenv from "dotenv" 
import errorHandler from "./middlewares/errorHandler"
import { Error } from "protocols/types"
import { validateSchema } from "./middlewares/validateSchemas"
import { newUserSchema } from "./schemas/loginSchemas"
import { userLogin } from "./controllers/userControllers"

dotenv.config() 
const app = express()
app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm, OK!")
})
app.post("/login", validateSchema(newUserSchema), userLogin)

app.use(errorHandler)
app.listen(process.env.PORT, ()=> {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})