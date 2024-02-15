import { Request, Response } from 'express'
import { DossierNumbersRequestType, DossierNumbersResponseType, DossierNumbersErrorCode } from '../types/dossierNumbers'
import { dossierNumbersErrorCodes } from '../constants'
import { dummyDossierNumbers } from '../data/dossierNumbers'

export const dossierNumbers = (
  req: Request<any, any, DossierNumbersRequestType>,
  res: Response<DossierNumbersResponseType | DossierNumbersErrorCode>,
) => {
  try {
    res.send(dummyDossierNumbers)
  } catch (error) {
    res.send(dossierNumbersErrorCodes[0])
  }
}
