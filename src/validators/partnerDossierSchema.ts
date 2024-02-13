import Joi, { ObjectSchema } from 'joi'
import { PartnerAggregatedCredit, PartnerDossierAggregatedCredit, PartnerDossierBankInfo, PartnerDossierContacts, PartnerDossierHousingAndBudget, PartnerDossierPerson, PartnerDossierPersonsRelationship, PartnerDossierRequestType, PartnerDossierSimulation, PartnerDossierSimulationData, PartnerDossierType, PartnerUser } from '../types/partnerDossier'

const partnerDossierPersonsRelationship: ObjectSchema<PartnerDossierPersonsRelationship> =
  Joi.object({
    code: Joi.string().required(),
  })

const partnerDossierHousingAndBudget: ObjectSchema<PartnerDossierHousingAndBudget> =
  Joi.object({
    monthlyWage: Joi.number().required().min(0).max(999999999999999),
    otherIncome: Joi.number().required().min(0).max(999999999999999),
    housingType: Joi.string().required().max(1),
    housingYear: Joi.number().required().min(1900).max(2999),
    housingExpenses: Joi.number().required().min(0).max(999999999999999),
    housingRentalExpenses: Joi.number().when('housingType', {
      is: 'L',
      then: Joi.number().required(),
      otherwise: Joi.number().optional(),
    }),
  })

const partnerDossierContacts: ObjectSchema<PartnerDossierContacts> =
  Joi.object({
    address: Joi.string().required().max(40),
    addressExtension: Joi.string().max(35).allow(''),
    zipCode: Joi.string().required().max(4),
    zipCodeExtension: Joi.string().required().max(3),
    city: Joi.string().required().max(35),
    cellNumber: Joi.string().required().max(9),
    email: Joi.string().required().max(40),
    fiscalAddress: Joi.string().required().max(40),
    fiscalAddressExtension: Joi.string().max(35).allow(''),
    fiscalZipCode: Joi.string().required().max(4),
    fiscalZipCodeExtension: Joi.string().required().max(3),
    fiscalCity: Joi.string().required().max(35),
    hasSingleAddress: Joi.boolean().required().default(true),
    hasForeignAddress: Joi.boolean().required().default(false),
    addressCountryCode: Joi.string().required().max(3).default('PRT'),
  })

const partnerDossierBankInfo: ObjectSchema<PartnerDossierBankInfo> =
  Joi.object({
    bankCode: Joi.string().required().max(4),
    bankAgencyCode: Joi.string().required().max(4),
    bankAccountNumber: Joi.string().required().max(11),
    bankAccountCheckDigit: Joi.string().required().max(2),
    ibanPrefix: Joi.string().required().max(4),
    bicCode: Joi.string().required().max(11),
  })

const partnerAggregatedCredit: ObjectSchema<PartnerAggregatedCredit> =
  Joi.object({
    fiscalNumber: Joi.number().required(), // Must be equal to one of the Holder or CoHolder's Fiscal Numbers
    creditEntity: Joi.string().required(),
    financialProduct: Joi.string().required(),
    totalRemainingCapital: Joi.number().required(),
    monthlyPayment: Joi.number().required(),
    cancelCreditCard: Joi.boolean().required(),
  })

const partnerDossierAggregatedCredit: ObjectSchema<PartnerDossierAggregatedCredit> =
  Joi.object({
    credits: Joi.array().items(partnerAggregatedCredit).required().min(1),
    additionalAmount: Joi.number().required(),
  })

const partnerDossierSimulation: ObjectSchema<PartnerDossierSimulation> =
  Joi.object({
    id: Joi.number().required(),
    amount: Joi.number().required(),
    goodCode: Joi.string().required(),
    typology: Joi.string().required(),
  })

const partnerDossierSimulationData: ObjectSchema<PartnerDossierSimulationData> =
  Joi.object({
    simulations: Joi.array().items(partnerDossierSimulation).required().min(1),
    hasInsurance: Joi.boolean().required(),
  })

const partnerDossierPerson: ObjectSchema<PartnerDossierPerson> =
  Joi.object({
    gender: Joi.string().required().max(1),
    fiscalNumber: Joi.number().required().min(100000000).max(299999999),
    identityType: Joi.number().required().min(0).max(999),
    identityCode: Joi.string().required().max(12),
    identityCheckDigit: Joi.number().required().min(0).max(9),
    identityExpireDate: Joi.date().required(),
    completeName: Joi.string().required().max(50),
    shortName: Joi.string().required().max(21),
    nationalityCode: Joi.string().required().max(1),
    countryCode: Joi.string().required().max(3),
    birthDate: Joi.date().required(),
    maritalStatus: Joi.string().required().max(1),
    childrenNumber: Joi.number().required().min(0).max(9),
    personalContacts: partnerDossierContacts,
    contractType: Joi.string().required().max(1),
    contractEndDate: Joi.date().required(),
    companyName: Joi.string().required().max(50),
    companyDate: Joi.date().required(),
    professionalCode: Joi.string().required().max(2),
    hasPublicPosition: Joi.boolean().required(),
    publicPositionDescription: Joi.string().max(50).when('hasPublicPosition', {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string().optional().allow(''),
    }),
    birthPlaceCountryCode: Joi.string().required().max(3),
    hasOtherNationality: Joi.boolean().required().default(false),
    otherNationalityCountryCode: Joi.string().max(3).when('hasOtherNationality', {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string().optional(),
    }),
    otherNationalityCountryCode2: Joi.string().max(3),
    activitySectorCode: Joi.string().required().max(3),
    housingAndBudget: partnerDossierHousingAndBudget,
    mainActivityCountryCode: Joi.string().max(3).when(Joi.object({
      contractType: Joi.number().valid(2, 4, 5, 6),
      professionalCode: Joi.number().valid(10, 15, 20, 30, 40),
    }), {
      then: Joi.string().required(),
      otherwise: Joi.string().optional(),
    }),
  })

const partnerUser: ObjectSchema<PartnerUser> =
  Joi.object({
    retailerCode: Joi.number().required(),
    id: Joi.string().required().max(25),
    name: Joi.string().required().max(25),
    group: Joi.string().required().max(200),
  })

const partnerDossierType: ObjectSchema<PartnerDossierType> =
  Joi.object({
    // eslint-disable-next-line id-denylist
    number: Joi.number().required(),
    user: partnerUser,
    loyaltyCode: Joi.string().max(13),
    holder: partnerDossierPerson,
    coHolder: Joi.when('hasPartnerInCredit', {
      is: true,
      then: partnerDossierPerson.required(),
      otherwise: partnerDossierPerson.optional(),
    }),
    simulationData: partnerDossierSimulationData,
    aggregatedCredit: partnerDossierAggregatedCredit,
    bankInfo: partnerDossierBankInfo,
    hasPartnerInCredit: Joi.boolean().required(),
    hasHouseholdSingleAddress: Joi.boolean().required().default(false),
    homebankingPreSaleFlag: Joi.boolean().required().default(true),
    submissionType: Joi.string().valid('PARTIAL', 'FULL').required(),
    dossierPersonsRelationship: partnerDossierPersonsRelationship,
    marketingFlag: Joi.boolean().required(),
  })

const partnerDossierSchema: ObjectSchema<PartnerDossierRequestType> =
  Joi.object({
    partnerDossier: partnerDossierType,
  })

export default partnerDossierSchema
