import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import partnerSimulationDataSchema from '../validators/partnerSimulationDataSchema'
import { PartnerSimulationDataRequestType } from '../types/partnerSimulationData'
import { getSimulationData } from '../controllers/partnerSimulationDataControllers'
const router = Router()

// Retrieves a Simulation Data object
router.get(
  '/interests/distribution/v1.1/simulations/:syncDate',
  validateSchema<PartnerSimulationDataRequestType>(
    partnerSimulationDataSchema,
    'params',
  ),
  getSimulationData,
)

export default router
