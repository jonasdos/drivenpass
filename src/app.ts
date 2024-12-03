import express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200)
})


app.listen(process.env.PORT || 5500, ()=> {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})