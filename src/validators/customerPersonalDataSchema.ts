import Joi, { ObjectSchema } from 'joi'
import { CustomerPersonalDataRequestType } from '../types/customerPersonalData'

const customerPersonalDataSchema: ObjectSchema<CustomerPersonalDataRequestType> =
  Joi.object({
    token: Joi.string().required(),
    fiscalNumber: Joi.string().required(),
  })

export default customerPersonalDataSchema
