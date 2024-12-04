import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";


export function validateSchema(schema: ObjectSchema) {

  return (req: Request, res: Response, next: NextFunction)=> {
    const validate = schema.validate(req.body, {
      abortEarly: false
    })
    if(validate.error) {
      res.status(400).send({
        errors: validate.error.details.map(
          detail => detail.message
        )
      })
      return
    }
    next()
  }
  
}