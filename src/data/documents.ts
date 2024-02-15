import { CreditDetails, Document, DocumentsResponseType, DossierSignatureSignerStatus, DossierSignatureStatus } from '../types/documents'
import { ValidationMessage } from '../types/partnerDossier'

export const dummyCreditDetails: CreditDetails = {
  name: 'name',
  shortDescription: 'shortDescription',
  amount: 1000,
  term: 12,
  tan: 1,
  taeg: 2,
  monthlyPayment: 100,
  totalImputedAmount: 1100,
  creditStatus: 'Status of the proposal',
  creditType: 'Type of the credit',
  hasInsurance: true,
  monthlyInsurance: 10,
  eligibleForInsurance: true,
}

export const dummyDocument: Document = {
  documentCode: '123',
  description: 'description',
  codeParent: '1',
  isSibling: true,
  codeSibling: 1,
  orderSibling: 1,
  isContractualDocument: true,
  irregularityCode: '123',
  irregularityDescription: '456',
  externalEntityName: 'asd',
  financialProductName: 'zzz',
  aggregatedCreditAmount: 1000,
  irregularityId: '123',
  uploadable: true,
}

export const dummyDossierSignatureSignerStatus: DossierSignatureSignerStatus = {
  status: 'status',
  name: 'name',
  fiscalNumber: 123,
  holderType: 'T1',
}

export const dummyDossierSignatureStatus: DossierSignatureStatus = {
  status: 'status',
  signDate: new Date(),
  documentUploadStatus: 'status',
  dossierSignatureSignerStatus: [dummyDossierSignatureSignerStatus],
}

export const dummyESignValidationMessage: ValidationMessage = {
  code: '123',
  message: 'message',
  label: 'label',
  type: 'I',
}

export const dummyValidationMessage: ValidationMessage = {
  code: '123',
  message: 'message',
  label: 'label',
  type: 'I',
}

export const dummyDocuments: DocumentsResponseType = {
  hasDocumentUploadPermission: true,
  hasESignPermission: true,
  eSignValidationMessages: [dummyESignValidationMessage],
  hasIban: true,
  creditDetails: dummyCreditDetails,
  status: 'status',
  documents: [dummyDocument],
  dossierSignatureStatus: dummyDossierSignatureStatus,
  validationMessage: [dummyValidationMessage],
}
