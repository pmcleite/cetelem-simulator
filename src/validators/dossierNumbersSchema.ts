import Joi, { ObjectSchema } from 'joi'
import { DossierNumbersRequestType } from '../types/dossierNumbers'

const dossierNumbersSchema: ObjectSchema<DossierNumbersRequestType> =
  Joi.object({
    identificationNumber: Joi.string().required(),
    contactNumber: Joi.string().required(),
    authenticationToken: Joi.string().optional(),
  })

export default dossierNumbersSchema
