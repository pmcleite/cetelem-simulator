import { documentsErrorCodes } from '../constants'
import { ValidationMessage } from './partnerDossier'

export type DocumentsErrorCode = typeof documentsErrorCodes[number]

export interface DocumentsRequestType {
  dossierNumber: number,
  identificationNumber: string,
}

export interface CreditDetails {
  name: string,
  shortDescription: string,
  amount: number,
  term: number,
  tan: number,
  taeg: number,
  monthlyPayment: number,
  totalImputedAmount: number,
  creditStatus: string,
  creditType: string,
  hasInsurance: boolean,
  monthlyInsurance: number,
  eligibleForInsurance: boolean,
}

export interface Document {
  documentCode: string,
  description: string,
  codeParent: string,
  isSibling: boolean,
  codeSibling: number,
  orderSibling: number,
  isContractualDocument: boolean,
  irregularityCode: string,
  irregularityDescription: string,
  externalEntityName: string,
  financialProductName: string,
  aggregatedCreditAmount: number,
  irregularityId: string,
  uploadable: boolean,
}

export interface DossierSignatureSignerStatus {
  status: string,
  name: string,
  fiscalNumber: number,
  holderType: 'T1' | 'T2',
}

export interface DossierSignatureStatus {
  status: string,
  signDate: Date,
  documentUploadStatus: string,
  dossierSignatureSignerStatus: DossierSignatureSignerStatus[],
}

export interface DocumentsResponseType {
  hasDocumentUploadPermission: boolean,
  hasESignPermission: boolean,
  eSignValidationMessages: ValidationMessage[],
  hasIban: boolean,
  creditDetails: CreditDetails,
  status: string,
  documents: Document[],
  dossierSignatureStatus: DossierSignatureStatus,
  validationMessage: ValidationMessage[],
}
