import { Request, Response } from 'express'
import { PartnerSimulationDataRequestType } from '../types/partnerSimulationData'
import { dummySimulationData } from '../data/simulationData'
import { gzip } from 'zlib'

export const getSimulationData = (
  req: Request<PartnerSimulationDataRequestType>,
  res: Response,
) => {
  const { syncDate } = req.params
  const simulationData = dummySimulationData
  simulationData.startDate = syncDate ?? simulationData.startDate
  simulationData.endDate = syncDate ?? simulationData.endDate
  const jsonDataString = JSON.stringify(simulationData)
  gzip(jsonDataString, (err, compressedData) => {
    if (err) {
      res.send(`Erro ao compactar os dados: ${err.name} - ${err.message}`)
      return
    }

    res.send(Buffer.from(compressedData).toString('base64'))
  })
}
