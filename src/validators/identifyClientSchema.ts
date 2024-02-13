import Joi, { ObjectSchema } from 'joi'
import { IdentifyClientRequestType } from '../types/identifyClient'

const identifyClientSchema: ObjectSchema<IdentifyClientRequestType> =
  Joi.object({
    cellNumber: Joi.string().required(),
    fiscalNumber: Joi.number().required(),
  })

export default identifyClientSchema
