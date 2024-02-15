import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { PartnerFinRequestType } from '../types/partnerFin'
import partnerFinSchema from '../validators/partnerFinSchema'
import { partnerFin } from '../controllers/partnerFinControllers'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

// Generates a FIN (Ficha de Informação Normalizada) for current simulation. The generated FIN is returned as a base64 string that must be decoded.
router.get(
  STATIC_ROUTES.PARTNER_FIN,
  validateSchema<PartnerFinRequestType>(partnerFinSchema, 'body'),
  partnerFin,
)

export default router
