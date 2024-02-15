import { Request, Response } from 'express'
import { CustomerDossierListErrorCode, CustomerDossierListRequestType, CustomerDossierListResponseType } from '../types/customerDossierList'
import { customerDossierListErrorCodes } from '../constants'
import dummyCustomerDossierListRequestType from '../data/customerDossierList'

export const customerDossierList = (
  req: Request<any, any, CustomerDossierListRequestType>,
  res: Response<CustomerDossierListResponseType | CustomerDossierListErrorCode>,
) => {
  try {
    res.send(dummyCustomerDossierListRequestType)
  } catch (error) {
    res.send(customerDossierListErrorCodes[0])
  }
}
