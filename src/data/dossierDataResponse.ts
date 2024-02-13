import { PartnerDossierAutomaticFinancing, PartnerDossierDocumentStatus, PartnerDossierResponseType, PartnerDossierScore, PartnerDossierSimulationItem, PartnerDossierStatus, PartnerDossierSubmissionResult, ValidationMessage } from '../types/partnerDossier'

const validationMessage: ValidationMessage = {
  code: '123',
  label: 'Dossier.holder.personalContacts.addressExtension',
  message: 'message',
  type: 'I',
}

const partnerDossierDocumentStatus: PartnerDossierDocumentStatus = {
  documentCode: '123',
  description: 'description',
  codeParent: '123',
  isSibling: 1,
  codeSibling: 123,
  orderSibling: 123,
  isContractualDocument: true,
  irregularityCode: '123',
  irregularityDescription: 'description',
}

const partnerDossierAutomaticFinancing: PartnerDossierAutomaticFinancing = {
  hasAutomaticFinancing: true,
  requireDeliveryDate: true,
  requireInvoiceNumber: true,
  requireProvisionalCardNumber: true,
}

const partnerDossierStatus: PartnerDossierStatus = {
  code: '123',
  description: 'description',
  automaticFinancing: partnerDossierAutomaticFinancing,
}

const partnerDossierSimulationItem: PartnerDossierSimulationItem = {
  simulationId: 123,
  amount: 1000,
  term: 12,
  tan: 1,
  taeg: 1,
  insuranceMonthlyAmount: 1,
  monthlyPaymentWithoutInsurance: 1,
  monthlyPaymentWithInsurance: 1,
  totalImputedAmount: 1,
}

const partnerDossierScore: PartnerDossierScore = {
  customerTypology: 'customerTypology',
  pricingScore: 'pricingScore',
  simulationDetails: partnerDossierSimulationItem,
}

const partnerDossierSubmissionResult: PartnerDossierSubmissionResult = {
  // eslint-disable-next-line id-denylist
  number: 123,
  documents: [partnerDossierDocumentStatus],
  status: partnerDossierStatus,
  score: partnerDossierScore,
  token: 'token',
  crsUrlHolder: 'crsUrlHolder',
  crsUrlCoHolder: 'crsUrlCoHolder',
}

export const dummyDossierDataResponse: PartnerDossierResponseType = {
  result: partnerDossierSubmissionResult,
  validationMessages: [validationMessage],
}

export default dummyDossierDataResponse
