import { Request, Response } from 'express'
import { IdentifyClientErrorCode, IdentifyClientRequestType } from '../types/identifyClient'
import { identifyClientErrorCodes } from '../constants'

export const identifyClient = (
  req: Request<any, any, IdentifyClientRequestType>,
  res: Response<IdentifyClientErrorCode>,
) => {
  try {
    res.sendStatus(200)
  } catch (error) {
    res.send(identifyClientErrorCodes[0])
  }
}
