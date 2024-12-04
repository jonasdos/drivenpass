import express, { Request, Response } from "express" 
import "express-async-errors"
import dotenv from "dotenv" 
import errorHandler from "./middlewares/errorHandler"
import { Error } from "protocols/types"

dotenv.config() 
const app = express()
app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm, OK!")
})
app.get("/verifica", () => {
  throw {
    type: "Conflict",
    message: "Testando o middleware"
  } as Error
})
app.use(errorHandler)
app.listen(process.env.PORT, ()=> {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})