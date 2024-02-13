import { Router } from 'express'
import partnerSimulationDataRoutes from './partnerSimulationDataRoutes'
import partnerDossierRoutes from './partnerDossierRoutes'

const router = Router()
router.use(
  partnerSimulationDataRoutes,
  partnerDossierRoutes,
)

export default router
