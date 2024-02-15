import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { DossierNumbersRequestType } from '../types/dossierNumbers'
import dossierNumbersSchema from '../validators/dossierNumbersSchema'
import { dossierNumbers } from '../controllers/dossierNumbersControllers'
import { dossierNumbersErrorCodes } from '../constants'

const router = Router()

const getErrorMessage = () => dossierNumbersErrorCodes[1]

// Retrieves all available proposal numbers for a given client.
router.get(
  '/contractSignUp/distribution/v1.1/subscriptionRecord',
  validateSchema<DossierNumbersRequestType>(dossierNumbersSchema, 'body', getErrorMessage),
  dossierNumbers,
)

export default router
