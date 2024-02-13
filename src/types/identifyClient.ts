import { identifyClientErrorCodes } from '../constants'

export type IdentifyClientErrorCode = typeof identifyClientErrorCodes[number]

export interface IdentifyClientRequestType {
  cellNumber: string,
  fiscalNumber: number,
}
