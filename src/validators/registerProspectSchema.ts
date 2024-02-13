import Joi, { ObjectSchema } from 'joi'
import { RegisterProspectRequestType } from '../types/registerProspect'

const registerProspectSchema: ObjectSchema<RegisterProspectRequestType> =
  Joi.object({
    holderFiscalNumber: Joi.string().required(),
    holderCompleteName: Joi.string().required(),
    holderEmail: Joi.string().email().required(),
    holderCellNumber: Joi.string().required(),
    simulationId: Joi.number().required(),
    goodCode: Joi.string().valid('Yes', 'No').required(),
    hasInsurance: Joi.boolean().required(),
    typology: Joi.string().optional(),
  })

export default registerProspectSchema
