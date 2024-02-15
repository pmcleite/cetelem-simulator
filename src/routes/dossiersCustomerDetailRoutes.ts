import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import { DossiersCustomerDetailRequestType } from '../types/dossiersCustomerDetail'
import dossiersCustomerDetailSchema from '../validators/dossiersCustomerDetailSchema'
import { dossiersCustomerDetail } from '../controllers/dossiersCustomerDetailControllers'
import { dossiersCustomerDetailListErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => dossiersCustomerDetailListErrorCodes[1]

// Consult detail of a proposal or credit for a given client, regardless of their state.
router.get(
  STATIC_ROUTES.DOSSIERS_CUSTOMER_DETAIL,
  validateSchema<DossiersCustomerDetailRequestType>(dossiersCustomerDetailSchema, 'body', getErrorMessage),
  dossiersCustomerDetail,
)

export default router
