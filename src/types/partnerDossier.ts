export interface PartnerDossierPersonsRelationship {
  code: string,
}

export interface PartnerDossierHousingAndBudget {
  monthlyWage: number,
  otherIncome: number,
  housingType: string,
  housingYear: number,
  housingExpenses: number,
  housingRentalExpenses: number,
}

export interface PartnerDossierBankInfo {
  bankCode: string,
  bankAgencyCode: string,
  bankAccountNumber: string,
  bankAccountCheckDigit: string,
  ibanPrefix: string,
  bicCode: string,
}

export interface PartnerDossierContacts {
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

export interface PartnerAggregatedCredit {
  fiscalNumber: number,
  creditEntity: string,
  financialProduct: string,
  totalRemainingCapital: number,
  monthlyPayment: number,
  cancelCreditCard: boolean,
}

export interface PartnerDossierAggregatedCredit {
  credits: PartnerAggregatedCredit[],
  additionalAmount: number,
}

export interface PartnerDossierSimulation {
  id: string,
  amount: number,
  goodCode: string,
  typology: string,
}

export interface PartnerDossierSimulationData {
  simulations: PartnerDossierSimulation[],
  hasInsurance: boolean,
}

export interface PartnerDossierPerson {
  gender: string,
  fiscalNumber: number,
  identityType: number,
  identityCode: string,
  identityCheckDigit: number,
  identityExpireDate: Date,
  completeName: string,
  shortName: string,
  nationalityCode: string,
  countryCode: string,
  birthDate: Date,
  maritalStatus: string,
  childrenNumber: number,
  personalContacts: PartnerDossierContacts,
  contractType: string,
  contractEndDate: Date,
  companyName: string,
  companyDate: Date,
  professionalCode: string,
  hasPublicPosition: boolean,
  publicPositionDescription: string,
  birthPlaceCountryCode: string,
  hasOtherNationality: boolean,
  otherNationalityCountryCode: string,
  otherNationalityCountryCode2: string,
  activitySectorCode: string,
  housingAndBudget: PartnerDossierHousingAndBudget,
  mainActivityCountryCode: string,
}

export interface PartnerUser {
  retailerCode: number,
  id: string,
  name: string,
  group: string,
}

export interface PartnerDossierType {
  // eslint-disable-next-line id-denylist
  number: number,
  user: PartnerUser,
  loyaltyCode: string,
  holder: PartnerDossierPerson,
  coHolder?: PartnerDossierPerson,
  simulationData: PartnerDossierSimulationData,
  aggregatedCredit: PartnerDossierAggregatedCredit,
  bankInfo: PartnerDossierBankInfo,
  hasPartnerInCredit: boolean,
  hasHouseholdSingleAddress: boolean,
  homebankingPreSaleFlag: boolean,
  submissionType: 'PARTIAL' | 'FULL',
  dossierPersonsRelationship: PartnerDossierPersonsRelationship,
  marketingFlag: boolean,
}

export interface PartnerDossierRequestType {
  partnerDossier: PartnerDossierType
}

export interface PartnerDossierSimulationItem {
  simulationId: number,
  amount: number,
  term: number,
  tan: number,
  taeg: number,
  insuranceMonthlyAmount: number,
  monthlyPaymentWithoutInsurance: number,
  monthlyPaymentWithInsurance: number,
  totalImputedAmount: number,
}

export interface PartnerDossierScore {
  customerTypology: string,
  pricingScore: string,
  simulationDetails: PartnerDossierSimulationItem,
}

export interface PartnerDossierAutomaticFinancing {
  hasAutomaticFinancing: boolean,
  requireDeliveryDate: boolean,
  requireInvoiceNumber: boolean,
  RequireProvisionalCardNumber: boolean,
}

export interface PartnerDossierStatus {
  code: string,
  description: string,
  automaticFinancing: PartnerDossierAutomaticFinancing,
}

export interface PartnerDossierDocumentStatus {
  documentCode: string,
  description: string,
  codeParent: string,
  isSibling: number,
  codeSibling: number,
  orderSibling: number,
  isContractualDocument: boolean,
  irregularityCode: string,
  irregularityDescription: string,
}

export interface PartnerDossierSubmissionResult {
  // eslint-disable-next-line id-denylist
  number: number,
  documents: PartnerDossierDocumentStatus[],
  status: PartnerDossierStatus,
  score: PartnerDossierScore,
  token: string,
  crsUrlHolder: string,
  crsUrlCoHolder: string,
}

export interface ValidationMessage {
  code: string,
  message: string,
  type: string,
  label: string,
}

export interface PartnerDossierResponseType {
  validationMessages: ValidationMessage[],
  result: PartnerDossierSubmissionResult
}
