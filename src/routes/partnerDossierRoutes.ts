import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { PartnerDossierRequestType } from '../types/partnerDossier'
import partnerDossierSchema from '../validators/partnerDossierSchema'
import { createPartnerDossier, getPartnerDossier } from '../controllers/partnerDossierControllers'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

// Submits a credit proposal
router.get(
  STATIC_ROUTES.PARTNER_DOSSIER_GET,
  getPartnerDossier,
)

router.post(
  STATIC_ROUTES.PARTNER_DOSSIER_REQUEST,
  validateSchema<PartnerDossierRequestType>(partnerDossierSchema),
  createPartnerDossier,
)

export default router
