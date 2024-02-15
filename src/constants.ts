import { ERRORS } from './errors'

export const validationMessageTypes = ['E', 'W', 'I'] as const
export const dossierStatusCodes = ['SUBMITTED_ACCEPTED', 'SUBMITTED_STUDY', 'SUBMITTED_REFUSED'] as const
export const prospectErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS]
export const identifyClientErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS, ERRORS.CLIENT_NOT_FOUND]
export const customerPersonalDataErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS, ERRORS.CLIENT_NOT_FOUND, ERRORS.EXPIRED_TOKEN, ERRORS.UNAUTHORIZED_TOKEN]
export const customerDossierListErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS]
export const dossiersCustomerDetailListErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS]
export const dossierNumbersErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS, ERRORS.DOSSIER_NOT_FOUND]
export const documentsErrorCodes = [ERRORS.GENERIC_ERROR, ERRORS.INVALID_INPUT_PARAMETERS, ERRORS.DOSSIER_NOT_FOUND]
export const documentsEsignErrorCodes = ['DOSS101', 'DOSS102', 'DOSS103', 'DOSS104', 'DOSS105', 'DOSS106']
