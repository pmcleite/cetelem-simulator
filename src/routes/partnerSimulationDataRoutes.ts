import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import partnerSimulationDataSchema from '../validators/partnerSimulationDataSchema'
import { PartnerSimulationDataRequestType } from '../types/partnerSimulationData'
import { getSimulationData } from '../controllers/partnerSimulationDataControllers'
import { STATIC_ROUTES } from './cetelemRoutes'
const router = Router()

// Retrieves a Simulation Data object
router.get(
  STATIC_ROUTES.PARTNER_SIMULATION_DATA,
  validateSchema<PartnerSimulationDataRequestType>(
    partnerSimulationDataSchema,
    'params',
  ),
  getSimulationData,
)

export default router
