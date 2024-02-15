import Joi, { ObjectSchema } from 'joi'
import { DocumentsRequestType } from '../types/documents'

const documentsSchema: ObjectSchema<DocumentsRequestType> =
  Joi.object({
    dossierNumber: Joi.number().required(),
    identificationNumber: Joi.string().required(),
  })

export default documentsSchema
