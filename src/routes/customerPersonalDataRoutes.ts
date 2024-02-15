import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import customerPersonalDataSchema from '../validators/customerPersonalDataSchema'
import { CustomerPersonalDataRequestType } from '../types/customerPersonalData'
import { customerPersonalData } from '../controllers/customerPersonalDataControllers'
import { customerPersonalDataErrorCodes } from '../constants'
import { STATIC_ROUTES } from './cetelemRoutes'

const router = Router()

const getErrorMessage = () => customerPersonalDataErrorCodes[1]

// Retrieves a client’s personal information, used to prefill the form.
router.get(
  STATIC_ROUTES.CUSTOMER_PERSONAL_DATA,
  validateSchema<CustomerPersonalDataRequestType>(customerPersonalDataSchema, 'body', getErrorMessage),
  customerPersonalData,
)

export default router
