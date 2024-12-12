import { eraseAcount } from "../controllers/erase";
import { Router } from "express";
import { jwtvalidation } from "../middlewares/jwtvalidation";

const eraseRouter = Router()

eraseRouter.delete("/erase", jwtvalidation, eraseAcount)

export default eraseRouter