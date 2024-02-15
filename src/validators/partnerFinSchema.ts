import Joi, { ObjectSchema } from 'joi'
import { PartnerFinRequestType } from '../types/partnerFin'

const partnerFinSchema: ObjectSchema<PartnerFinRequestType> =
  Joi.object({
    productCode: Joi.string().optional(),
    goodCode: Joi.string().optional(),
    amount: Joi.number().optional(),
    term: Joi.number().optional(),
    revolving: Joi.number().optional(),
    simulationItemId: Joi.number().optional(),
  })

export default partnerFinSchema
