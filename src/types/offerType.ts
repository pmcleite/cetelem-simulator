import { ISO8601DateString } from './date';

export interface SimulationCreditOption {
  code: string,
  description: string,
  referenceTableCode: string,
  minAmount: number,
  maxAmount: number,
  minTerm: string,
  maxTerm: string,
  monthlyPaymentFee: number,
}

export interface SimulationGood {
  code: string,
  description: string,
  defaultTerm: string,
  defaultAmount: number,
  stepAmount: number,
  simulationCreditOption: SimulationCreditOption,
}

export interface SimulationProduct {
  code: string,
  description: string,
  promotionalCode: string,
  defaultSimulationGoodCode: string,
  simulationGoods: Record<string, SimulationGood>,
}

export interface SimulationMatrixItem {
  id: number,
  term: number,
  tan: number,
  taeg: number,
  insuranceMonthlyAmount: number,
  monthlyPaymentWithoutInsurance: number,
  monthlyPaymentWithInsurance: number,
  mtic: number,
  expensesAmount: number,
  taxAmount: number,
  totalCreditCostWithInsurance: number,
  totalCreditCostWithoutInsurance: number,
}

export interface SimulationMatrix {
  amounts: Record<number, Record<number, string[]>>,
}

export interface SimulationData {
  version: string,
  defaultPromotionalCode: string,
  products: Record<string, SimulationProduct>,
  matrices: Record<string, SimulationMatrix>,
  startDate: ISO8601DateString,
  endDate: ISO8601DateString,
  changedGoodProfiles?: any[], // TODO pmcleite: Check PDF
}

export const arrayToMatrixItem = (array: string[]): SimulationMatrixItem => {
  return {
    id: parseInt(array[0], 10),
    term: parseInt(array[1], 10),
    tan: parseFloat(array[2]),
    taeg: parseFloat(array[3]),
    insuranceMonthlyAmount: parseFloat(array[4]),
    monthlyPaymentWithoutInsurance: parseFloat(array[5]),
    monthlyPaymentWithInsurance: parseFloat(array[6]),
    mtic: parseFloat(array[7]),
    expensesAmount: parseFloat(array[8]),
    taxAmount: parseFloat(array[9]),
    totalCreditCostWithInsurance: parseFloat(array[10]),
    totalCreditCostWithoutInsurance: parseFloat(array[11]),
  }
}
