import { Request, Response } from 'express'
import { CustomerPersonalDataErrorCode, CustomerPersonalDataRequestType, CustomerPersonalDataResponseType } from '../types/customerPersonalData'
import dummyPersonalData from '../data/personalData'
import { customerPersonalDataErrorCodes } from '../constants'

export const customerPersonalData = (
  req: Request<any, any, CustomerPersonalDataRequestType>,
  res: Response<CustomerPersonalDataResponseType | CustomerPersonalDataErrorCode>,
) => {
  try {
    res.send(dummyPersonalData)
  } catch (error) {
    res.send(customerPersonalDataErrorCodes[0])
  }
}
