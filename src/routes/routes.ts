import { Router } from 'express'
import partnerSimulationDataRoutes from './partnerSimulationDataRoutes'
import partnerDossierRoutes from './partnerDossierRoutes'
import registerProspectRoutes from './registerProspectRoutes'

const router = Router()
router.use(
  partnerSimulationDataRoutes,
  partnerDossierRoutes,
  registerProspectRoutes,
)

export default router
