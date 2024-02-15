import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { DossierNumbersRequestType } from '../types/dossierNumbers'
import dossierNumbersSchema from '../validators/dossierNumbersSchema'
import { dossierNumbers } from '../controllers/dossierNumbersControllers'
import { dossierNumbersErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => dossierNumbersErrorCodes[1]

// Retrieves all available proposal numbers for a given client.
router.get(
  STATIC_ROUTES.DOSSIER_NUMBERS,
  validateSchema<DossierNumbersRequestType>(dossierNumbersSchema, 'body', getErrorMessage),
  dossierNumbers,
)

export default router
