import { Router } from 'express'
import partnerSimulationDataRoutes from './partnerSimulationDataRoutes'

const router = Router()
router.use(partnerSimulationDataRoutes)

export default router
