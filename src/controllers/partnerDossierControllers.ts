import { Request, Response } from 'express'
import dummyDossierData from '../data/dossierData'
import { PartnerDossierRequestType } from '../types/partnerDossier'

export const getPartnerDossier = (
  req: Request<null>,
  res: Response<PartnerDossierRequestType>,
) => {
  res.send(dummyDossierData)
}

export const createPartnerDossier = (
  req: Request<any, any, PartnerDossierRequestType>,
  res: Response<string>,
) => {
  res.send(JSON.stringify(req.body))
}
