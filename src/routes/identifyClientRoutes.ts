import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { IdentifyClientRequestType } from '../types/identifyClient'
import identifyClientSchema from '../validators/identifyClientSchema'
import { identifyClient } from '../controllers/identifyClientControllers'
import { identifyClientErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => identifyClientErrorCodes[1]

// Identifies a client using the client’s personal information.
router.get(
  STATIC_ROUTES.IDENTIFY_CLIENT,
  validateSchema<IdentifyClientRequestType>(identifyClientSchema, 'body', getErrorMessage),
  identifyClient,
)

export default router
