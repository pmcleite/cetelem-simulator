import { dossiersCustomerDetailListErrorCodes } from '../constants'

export type DossiersCustomerDetailErrorCode = typeof dossiersCustomerDetailListErrorCodes[number]

export interface DossiersCustomerDetailRequestType {
  // eslint-disable-next-line id-denylist
  number: string,
  dossierType: 'PROPOSAL' | 'CONTRACT',
}

export interface DossiersCustomerDetailResponseType {
  // eslint-disable-next-line id-denylist
  number: string,
  dossierType: 'PROPOSAL' | 'CONTRACT',
  shortDescription: string,
  status: string,
  lastUpdate: Date,
  creditType: string,
  goodCode: string,
  goodDescription: string,
  prodAlpha: string,
  amount: number,
  totalRemainingCapital: number,
  term: number,
  monthlyPayment: number,
  hasInsurance: boolean,
  insuranceMonthlyPayment: number,
  monthlyPaymentWithInsurance: number,
  tan: number,
  taeg: number,
  mtic: number,
  cardAmount: number,
  resolvePercentage: number,
}
