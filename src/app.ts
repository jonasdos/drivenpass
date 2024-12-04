import express, { Request, Response } from "express" 
import dotenv from "dotenv" 

dotenv.config() 
const app = express()
app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm, OK!")
})

app.listen(process.env.PORT, ()=> {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`)
})