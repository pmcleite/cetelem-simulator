import { dossierNumbersErrorCodes } from '../constants'

export type DossierNumbersErrorCode = typeof dossierNumbersErrorCodes[number]

export interface DossierNumbersRequestType {
  identificationNumber: string,
  contactNumber: string,
  authenticationToken?: string,
}

export interface CreditDetails {
  // eslint-disable-next-line id-denylist
  number: number,
  shortDescription: string,
  amount: number,
  lastUpdate: Date,
  dossierStatus: string,
  goodCode: string,
  goodDescription: string,
  prodAlpha: string,
  hasInsurance: boolean,
  creditType: string,
  term: number,
}

export interface DossierNumbersResponseType {
  loans: CreditDetails[],
}
