import Joi, { ObjectSchema } from 'joi'
import { PartnerSimulationDataRequestType } from '../types/partnerSimulationData'
import { isoPattern } from './schema'

const partnerSimulationDataSchema: ObjectSchema<PartnerSimulationDataRequestType> =
  Joi.object({
    syncDate: isoPattern.required(),
  })

export default partnerSimulationDataSchema
