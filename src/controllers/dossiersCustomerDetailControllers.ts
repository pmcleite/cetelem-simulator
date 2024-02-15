import { Request, Response } from 'express'
import { DossiersCustomerDetailRequestType, DossiersCustomerDetailErrorCode, DossiersCustomerDetailResponseType } from '../types/dossiersCustomerDetail'
import { dossiersCustomerDetailListErrorCodes } from '../constants'
import dummyDossiersCustomerDetail from '../data/dossiersCustomerDetail'

export const dossiersCustomerDetail = (
  req: Request<any, any, DossiersCustomerDetailRequestType>,
  res: Response<DossiersCustomerDetailResponseType | DossiersCustomerDetailErrorCode>,
) => {
  try {
    res.send(dummyDossiersCustomerDetail)
  } catch (error) {
    res.send(dossiersCustomerDetailListErrorCodes[0])
  }
}
