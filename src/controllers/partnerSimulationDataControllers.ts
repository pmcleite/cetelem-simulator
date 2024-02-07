import { Request, Response } from 'express'
import PartnerSimulationDataType from '../types/partnerSimulationData'

export const getSimulationData = (
  req: Request<PartnerSimulationDataType>,
  res: Response,
) => {
  const { syncDate } = req.params
  // const output = {
  //   simulationData: '',
  //   syncDate,
  //   parsing: '',
  // }
  res.send(`Sync date: ${syncDate}`)
}
