import Joi, { ObjectSchema } from 'joi'
import { CustomerDossierListRequestType } from '../types/customerDossierList'

const customerDossierListSchema: ObjectSchema<CustomerDossierListRequestType> =
  Joi.object({
    fiscalNumber: Joi.string().required(),
    cellNumber: Joi.string().required(),
    returnCreditClassic: Joi.boolean().required(),
    returnCreditCard: Joi.boolean().required(),
  })

export default customerDossierListSchema
