import { Request, Response } from 'express'
import Joi, { ObjectSchema } from 'joi'

function validateSchema<T>(
  schema: ObjectSchema<T>,
  type: 'body' | 'query' | 'params' = 'body',
  getErrorMessage?: (error: Joi.ValidationError) => string,
): (req: Request, res: Response, next: Function) => void {
  return (req: Request, res: Response, next: Function) => {
    const { error } = schema.validate(req[type])
    if (!req[type]) {
      return res
        .status(400)
        .json({ error: `${type === 'body' ? 'Body' : 'Query'} is empty` })
    }
    if (error) {
      return res.status(400).json({ error: getErrorMessage ? getErrorMessage(error) : error.details[0].message })
    } else {
      next()
    }
  }
}

export default validateSchema
