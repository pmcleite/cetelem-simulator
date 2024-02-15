import { CustomerPersonalDataResponseType, DossierPersonalData, DossierPersonalBankData } from '../types/customerPersonalData'

const dummyDossierPersonalBankData: DossierPersonalBankData = {
  bankCode: '1234',
  bankAgencyCode: '1234',
  bankAccountNumber: '12345678911',
  bankAccountCheckDigit: '12',
  ibanPrefix: '1234',
  bicCode: '12345678911',
}

const dummyDossierPersonalData: DossierPersonalData = {
  address: 'address',
  addressExtension: '',
  zipCode: '1234',
  zipCodeExtension: '123',
  city: 'city',
  cellNumber: '123456789',
  email: 'email@email.com',
  fiscalAddress: 'fiscalAddress',
  fiscalAddressExtension: '',
  fiscalZipCode: '1234',
  fiscalZipCodeExtension: '123',
  fiscalCity: 'fiscalCity',
  hasSingleAddress: true,
  hasForeignAddress: false,
  addressCountryCode: 'PRT',
}

export const dummyPersonalData: CustomerPersonalDataResponseType = {
  holder: dummyDossierPersonalData,
  bankInfos: [dummyDossierPersonalBankData],
}

export default dummyPersonalData
