import { Router } from 'express'
import * as SolicitudController from '../controllers/SolicitudController.js'

const router = Router()

router.get('/solicitud', SolicitudController.home)

export default router
