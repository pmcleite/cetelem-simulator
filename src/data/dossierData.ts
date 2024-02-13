import { PartnerAggregatedCredit, PartnerDossierAggregatedCredit, PartnerDossierBankInfo, PartnerDossierContacts, PartnerDossierHousingAndBudget, PartnerDossierPerson, PartnerDossierPersonsRelationship, PartnerDossierRequestType, PartnerDossierSimulation, PartnerDossierSimulationData, PartnerUser } from '../types/partnerDossier';

const dummyPartnerDossierBankInfo: PartnerDossierBankInfo = {
  bankCode: '1234',
  bankAgencyCode: '1234',
  bankAccountNumber: '12345678911',
  bankAccountCheckDigit: '12',
  ibanPrefix: '1234',
  bicCode: '12345678911',
}

const dummyPartnerDossierPersonsRelationship: PartnerDossierPersonsRelationship = {
  code: '123',
}

const dummyPartnerDossierHousingAndBudget: PartnerDossierHousingAndBudget = {
  monthlyWage: 1000,
  otherIncome: 0,
  housingType: 'L',
  housingYear: 2021,
  housingExpenses: 100,
  housingRentalExpenses: 100,
}

const dummyPartnerDossierContacts: PartnerDossierContacts = {
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

const dummyPartnerAggregatedCredit: PartnerAggregatedCredit = {
  fiscalNumber: 123456789,
  creditEntity: '123',
  financialProduct: '123',
  totalRemainingCapital: 1000,
  monthlyPayment: 100,
  cancelCreditCard: false,
}

const dummyPartnerDossierAggregatedCredit: PartnerDossierAggregatedCredit = {
  credits: [dummyPartnerAggregatedCredit],
  additionalAmount: 0,
}

const dummyPartnerDossierSimulation: PartnerDossierSimulation = {
  id: '123',
  amount: 1000,
  goodCode: '123',
  typology: '123',
}

const dummyPartnerDossierSimulationData: PartnerDossierSimulationData = {
  simulations: [dummyPartnerDossierSimulation],
  hasInsurance: true,
}

const dummyPartnerUser: PartnerUser = {
  retailerCode: 1,
  id: '123',
  name: 'John Doe Ltda',
  group: 'Group 1',
}

const dummyPartnerDossierPerson: PartnerDossierPerson = {
  gender: 'M',
  fiscalNumber: 123456789,
  identityType: 1,
  identityCode: '123456789012',
  identityCheckDigit: 1,
  identityExpireDate: new Date(),
  completeName: 'John Doe',
  shortName: 'John',
  nationalityCode: 'P',
  countryCode: 'PRT',
  birthDate: new Date(),
  maritalStatus: 'S',
  childrenNumber: 0,
  personalContacts: dummyPartnerDossierContacts,
  contractType: 'C',
  contractEndDate: new Date(),
  companyName: 'John Doe Ltda',
  companyDate: new Date(),
  professionalCode: '12',
  hasPublicPosition: false,
  publicPositionDescription: '',
  birthPlaceCountryCode: 'PRT',
  hasOtherNationality: true,
  otherNationalityCountryCode: 'PRT',
  otherNationalityCountryCode2: 'PRT',
  activitySectorCode: '123',
  housingAndBudget: dummyPartnerDossierHousingAndBudget,
  mainActivityCountryCode: 'PRT',
}

export const dummyDossierData: PartnerDossierRequestType = {
  partnerDossier: {
    // eslint-disable-next-line id-denylist
    number: 123456789,
    user: dummyPartnerUser,
    loyaltyCode: '1234567890122',
    holder: dummyPartnerDossierPerson,
    coHolder: dummyPartnerDossierPerson,
    simulationData: dummyPartnerDossierSimulationData,
    aggregatedCredit: dummyPartnerDossierAggregatedCredit,
    bankInfo: dummyPartnerDossierBankInfo,
    hasPartnerInCredit: true,
    hasHouseholdSingleAddress: true,
    homebankingPreSaleFlag: true,
    submissionType: 'FULL',
    dossierPersonsRelationship: dummyPartnerDossierPersonsRelationship,
    marketingFlag: false,
  },
}

export default dummyDossierData
