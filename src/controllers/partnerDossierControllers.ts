import { Request, Response } from 'express'
import dummyDossierData from '../data/dossierData'
import dummyDossierDataResponse from '../data/dossierDataResponse'
import { PartnerDossierRequestType, PartnerDossierResponseType } from '../types/partnerDossier'

export const getPartnerDossier = (
  req: Request<null>,
  res: Response<PartnerDossierRequestType>,
) => {
  res.send(dummyDossierData)
}

export const createPartnerDossier = (
  req: Request<any, any, PartnerDossierRequestType>,
  res: Response<PartnerDossierResponseType>,
) => {
  res.send(dummyDossierDataResponse)
}
