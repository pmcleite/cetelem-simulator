import { Router } from 'express'
import validateSchema from '../validators/validateSchema'
import customerPersonalDataSchema from '../validators/customerPersonalDataSchema'
import { CustomerPersonalDataRequestType } from '../types/customerPersonalData'
import { customerPersonalData } from '../controllers/customerPersonalDataControllers'

const router = Router()

// Retrieves a client’s personal information, used to prefill the form.
router.get(
  '/contractSignUp/distribution/v1.0/subscriptionRecord/client/data',
  validateSchema<CustomerPersonalDataRequestType>(customerPersonalDataSchema, 'body'),
  customerPersonalData,
)

export default router
