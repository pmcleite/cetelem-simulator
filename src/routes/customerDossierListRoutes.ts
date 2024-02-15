import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { CustomerDossierListRequestType } from '../types/customerDossierList'
import customerDossierListSchema from '../validators/customerDossierListSchema'
import { customerDossierList } from '../controllers/customerDossierListControllers'
import { customerDossierListErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => customerDossierListErrorCodes[1]

// Consult listing of all existing proposals or credits for a given client, regardless of their state.
router.get(
  STATIC_ROUTES.CUSTOMER_DOSSIER_LIST,
  validateSchema<CustomerDossierListRequestType>(customerDossierListSchema, 'body', getErrorMessage),
  customerDossierList,
)

export default router
