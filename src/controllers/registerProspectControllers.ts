import { Request, Response } from 'express'
import { RegisterProspectErrorCode, RegisterProspectRequestType, RegisterProspectResponseType } from '../types/registerProspect'
import { prospectErrorCodes } from '../constants'

export const registerProspect = (
  req: Request<any, any, RegisterProspectRequestType>,
  res: Response<RegisterProspectResponseType | RegisterProspectErrorCode>,
) => {
  try {
    res.send({ creditsNumber: 1 })
  } catch (error) {
    res.send(prospectErrorCodes[0])
  }
}
