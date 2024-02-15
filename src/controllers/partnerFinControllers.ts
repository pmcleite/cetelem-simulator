import { Request, Response } from 'express'
import { PartnerFinRequestType, PartnerFinResponseType } from '../types/partnerFin'

export const partnerFin = (
  req: Request<any, any, PartnerFinRequestType>,
  res: Response<PartnerFinResponseType>,
) => {
  res.send({ fin: 'base64' }) // TODO pmcleite: base64
}
