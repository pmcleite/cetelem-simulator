import { prospectErrorCodes } from '../constants'

export type RegisterProspectErrorCode = typeof prospectErrorCodes[number]

export interface RegisterProspectRequestType {
  holderFiscalNumber: string,
  holderCompleteName: string,
  holderEmail: string,
  holderCellNumber: string,
  simulationId: number,
  goodCode: 'Yes' | 'No',
  hasInsurance: boolean,
  typology?: string,
}

export interface RegisterProspectResponseType {
  creditsNumber: number,
}
