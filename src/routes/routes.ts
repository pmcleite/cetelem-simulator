import { Router } from 'express'
import partnerSimulationDataRoutes from './partnerSimulationDataRoutes'
import partnerDossierRoutes from './partnerDossierRoutes'
import registerProspectRoutes from './registerProspectRoutes'
import identifyClientRoutes from './identifyClientRoutes'
import customerPersonalDataRoutes from './customerPersonalDataRoutes'
import partnerFinRoutes from './partnerFinRoutes'
import customerDossierListRoutes from './customerDossierListRoutes'
import dossiersCustomerDetailRoutes from './dossiersCustomerDetailRoutes'
import dossierNumbersRoutes from './dossierNumbersRoutes'

const router = Router()
router.use(
  partnerSimulationDataRoutes,
  partnerDossierRoutes,
  registerProspectRoutes,
  identifyClientRoutes,
  customerPersonalDataRoutes,
  partnerFinRoutes,
  customerDossierListRoutes,
  dossiersCustomerDetailRoutes,
  dossierNumbersRoutes,
)

export default router
