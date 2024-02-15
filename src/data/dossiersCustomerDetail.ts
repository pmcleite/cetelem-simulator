import { DossiersCustomerDetailResponseType } from '../types/dossiersCustomerDetail'

export const dummyDossiersCustomerDetail: DossiersCustomerDetailResponseType = {
  // eslint-disable-next-line id-denylist
  number: '1',
  dossierType: 'PROPOSAL',
  shortDescription: 'Crédito Clássico Pessoal',
  status: 'Status Dossier Code',
  lastUpdate: new Date(),
  creditType: 'Credit Type',
  goodCode: '204',
  goodDescription: 'Projectos até 2400€',
  prodAlpha: 'EXT',
  amount: 1000,
  totalRemainingCapital: 1000,
  term: 12,
  monthlyPayment: 100,
  hasInsurance: true,
  insuranceMonthlyPayment: 10,
  monthlyPaymentWithInsurance: 110,
  tan: 0.1,
  taeg: 0.2,
  mtic: 1100,
  cardAmount: 1000,
  resolvePercentage: 1,
}

export default dummyDossiersCustomerDetail
