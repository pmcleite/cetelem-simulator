import { Request, Response } from 'express'
import { CustomerPersonalDataRequestType, CustomerPersonalDataResponseType } from '../types/customerPersonalData'
import dummyPersonalData from '../data/personalData'

export const customerPersonalData = (
  req: Request<any, any, CustomerPersonalDataRequestType>,
  res: Response<CustomerPersonalDataResponseType>,
) => {
  res.send(dummyPersonalData)
}
