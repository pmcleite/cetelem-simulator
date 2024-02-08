import Joi, { ObjectSchema } from 'joi'
import { PartnerSimulationDataRequestType } from '../types/partnerSimulationData'

const partnerSimulationDataSchema: ObjectSchema<PartnerSimulationDataRequestType> =
  Joi.object({
    syncDate: Joi.string()
      .pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/)
      .required(),
  })

export default partnerSimulationDataSchema
