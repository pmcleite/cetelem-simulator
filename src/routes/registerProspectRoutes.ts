import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { registerProspect } from '../controllers/registerProspectControllers'
import registerProspectSchema from '../validators/registerProspectSchema'
import { RegisterProspectRequestType } from '../types/registerProspect'
import { prospectErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => prospectErrorCodes[1]

// Registers a customer proposal from the internet.
// Must be used on the Identification form block to check if the client has any ongoing credit proposal.
router.post(
  STATIC_ROUTES.REGISTER_PROSPECT,
  validateSchema<RegisterProspectRequestType>(registerProspectSchema, 'body', getErrorMessage),
  registerProspect,
)

export default router
