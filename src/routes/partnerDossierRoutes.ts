import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { PartnerDossierRequestType } from '../types/partnerDossier'
import partnerDossierSchema from '../validators/partnerDossierSchema'
import { createPartnerDossier, getPartnerDossier } from '../controllers/partnerDossierControllers'

const router = Router()

router.get(
  '/contractSignUp/distribution/v2.0/subscriptionRecord/getDummy',
  getPartnerDossier,
)

router.post(
  '/contractSignUp/distribution/v2.0/subscriptionRecord/create',
  validateSchema<PartnerDossierRequestType>(partnerDossierSchema),
  createPartnerDossier,
)

export default router
