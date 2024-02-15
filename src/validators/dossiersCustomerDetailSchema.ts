import Joi, { ObjectSchema } from 'joi'
import { DossiersCustomerDetailRequestType } from '../types/dossiersCustomerDetail'

const dossiersCustomerDetailSchema: ObjectSchema<DossiersCustomerDetailRequestType> =
  Joi.object({
    // eslint-disable-next-line id-denylist
    number: Joi.string().required(),
    dossierType: Joi.string().valid('PROPOSAL', 'CONTRACT').required(),
  })

export default dossiersCustomerDetailSchema
