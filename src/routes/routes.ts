import { Router } from 'express'
import partnerSimulationDataRoutes from './partnerSimulationDataRoutes'
import partnerDossierRoutes from './partnerDossierRoutes'
import registerProspectRoutes from './registerProspectRoutes'
import identifyClientRoutes from './identifyClientRoutes'
import customerPersonalDataRoutes from './customerPersonalDataRoutes'

const router = Router()
router.use(
  partnerSimulationDataRoutes,
  partnerDossierRoutes,
  registerProspectRoutes,
  identifyClientRoutes,
  customerPersonalDataRoutes,
)

export default router
