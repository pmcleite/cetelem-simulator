import { ISO8601DateString } from './date'

export interface PartnerSimulationDataRequestType {
  syncDate?: ISO8601DateString
}

export interface PartnerSimulationDataResponseType {
  simulationData: string
  syncDate: Date
  parsing: string
}
