import { CustomerDossierListResponseType, DossierCustomerDTO } from '../types/customerDossierList'

export const dummyDossierCustomerDTO: DossierCustomerDTO = {
  // eslint-disable-next-line id-denylist
  number: '1',
  amount: 1000,
  lastUpdate: new Date(),
  status: 'Status Dossier Code',
  creditType: 'Credit Type',
  goodCode: '204',
  goodDescription: 'Projectos até 2400€',
  term: 12,
  cardAmount: 1000,
  resolvePercentage: 1,
  dossierType: 'PROPOSAL',
}

export const dummyCustomerDossierListRequestType: CustomerDossierListResponseType = {
  dossierCustomers: [dummyDossierCustomerDTO],
}

export default dummyCustomerDossierListRequestType
