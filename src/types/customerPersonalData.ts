import { customerPersonalDataErrorCodes } from '../constants'

export interface CustomerPersonalDataRequestType {
  token: string,
  fiscalNumber: string,
}

export type CustomerPersonalDataErrorCode = typeof customerPersonalDataErrorCodes[number]

export interface DossierPersonalData { // TODO pmcleite: Confirmar o tipo porque não existe no PDF
  address: string,
  addressExtension: string,
  zipCode: string,
  zipCodeExtension: string,
  city: string,
  cellNumber: string,
  email: string,
  fiscalAddress: string,
  fiscalAddressExtension: string,
  fiscalZipCode: string,
  fiscalZipCodeExtension: string,
  fiscalCity: string,
  hasSingleAddress: boolean,
  hasForeignAddress: boolean,
  addressCountryCode: string
}

export interface DossierPersonalBankData { // TODO pmcleite: Confirmar o tipo porque não existe no PDF
  bankCode: string,
  bankAgencyCode: string,
  bankAccountNumber: string,
  bankAccountCheckDigit: string,
  ibanPrefix: string,
  bicCode: string,
}

export interface CustomerPersonalDataResponseType {
  holder: DossierPersonalData,
  bankInfos: DossierPersonalBankData[],
}
