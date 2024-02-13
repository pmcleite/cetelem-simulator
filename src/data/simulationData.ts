import { SimulationData } from '../types/offerType'

export const dummySimulationData: SimulationData = {
  version: '1.0.0',
  defaultPromotionalCode: 'PROMO',
  startDate: '2024-01-01T00:00:00.000Z',
  endDate: '2024-01-01T23:59:59.000Z',
  products: {
    Px: {
      code: 'Product 1',
      description: 'Default product',
      promotionalCode: 'PROMO',
      defaultSimulationGoodCode: 'G1',
      simulationGoods: {
        Gx: {
          code: 'G1',
          description: 'Good 1',
          defaultTerm: '12',
          defaultAmount: 1000,
          stepAmount: 100,
          simulationCreditOption: {
            code: 'CO1',
            description: 'Credit Option 1',
            referenceTableCode: 'RT1',
            minAmount: 1000,
            maxAmount: 10000,
            minTerm: '12',
            maxTerm: '60',
            monthlyPaymentFee: 0.5,
          },
        },
      },
    },
  },
  matrices: {
    RTx: {
      amounts: {
        2000: {
          5: ['1', '5', '0.05', '0.06', '10', '100', '110', '2000', '0', '0', '120', '110'],
        },
      },
    },
  },
}

export default dummySimulationData
