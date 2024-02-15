export interface PartnerFinRequestType {
  productCode?: string,
  goodCode?: string,
  amount?: number,
  term?: number,
  revolving?: number,
  simulationItemId?: number,
}

export interface PartnerFinResponseType {
  fin?: string,
}
