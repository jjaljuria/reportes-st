import { Router } from 'express'
import * as SolicitudController from '../controllers/SolicitudController.js'

const router = Router()

router.get('/solicitud', SolicitudController.home)
router.post('/solicitud', SolicitudController.createSolicitude)

export default router
