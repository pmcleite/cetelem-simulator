import { customerDossierListErrorCodes } from '../constants'

export type CustomerDossierListErrorCode = typeof customerDossierListErrorCodes[number]

export interface CustomerDossierListRequestType {
  fiscalNumber: string,
  cellNumber: string,
  returnCreditClassic: boolean,
  returnCreditCard: boolean,
}

export interface DossierCustomerDTO {
  // eslint-disable-next-line id-denylist
  number: string,
  amount: number,
  lastUpdate: Date,
  status: string,
  creditType: string,
  goodCode: string,
  goodDescription: string,
  term: number,
  cardAmount: number,
  resolvePercentage: number,
  dossierType: 'PROPOSAL' | 'CONTRACT',
}

export interface CustomerDossierListResponseType {
  dossierCustomers: DossierCustomerDTO[],
}
