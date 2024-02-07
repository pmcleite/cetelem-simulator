import { Request, Response } from 'express'
import { ObjectSchema } from 'joi'

function validateSchema<T>(
  schema: ObjectSchema<T>,
  type: 'body' | 'query' | 'params' = 'body',
) {
  return (req: Request, res: Response, next: Function) => {
    const { error } = schema.validate(req[type])
    if (!req[type]) {
      return res
        .status(400)
        .json({ error: `${type === 'body' ? 'Body' : 'Query'} is empty` })
    }
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    } else {
      next()
    }
  }
}

export default validateSchema
