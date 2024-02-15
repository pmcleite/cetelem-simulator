import { DossierNumbersResponseType, CreditDetails } from '../types/dossierNumbers'

const dummyCreditDetails: CreditDetails = {
  // eslint-disable-next-line id-denylist
  number: 123456789,
  shortDescription: 'description',
  amount: 1000,
  lastUpdate: new Date(),
  dossierStatus: 'Status Dossier Code',
  goodCode: '204',
  goodDescription: 'Projectos até 2400€',
  prodAlpha: 'Product Type',
  hasInsurance: false,
  creditType: 'Credit Type',
  term: 12,
}

export const dummyDossierNumbers: DossierNumbersResponseType = {
  loans: [dummyCreditDetails],
}
