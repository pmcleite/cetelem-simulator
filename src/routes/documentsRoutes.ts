import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { DocumentsRequestType } from '../types/documents'
import documentsSchema from '../validators/documentsSchema'
import { documents } from '../controllers/documentsControllers'
import { documentsErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => documentsErrorCodes[1]

// Returns document list associated to Customer
router.get(
  STATIC_ROUTES.DOCUMENTS,
  validateSchema<DocumentsRequestType>(documentsSchema, 'body', getErrorMessage),
  documents,
)

export default router
