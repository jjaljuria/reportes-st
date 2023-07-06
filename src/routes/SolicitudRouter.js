import { Router } from 'express'
import * as SolicitudController from '../controllers/SolicitudController.js'

const router = Router()

router.get('/solicitud', SolicitudController.home)
router.get('/espera', SolicitudController.espera)
router.post('/solicitud', SolicitudController.createRequest)

export default router
