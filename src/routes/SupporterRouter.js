import { Router } from 'express'
import * as SupporterController from '../controllers/SupporterController.js'

const router = Router()

router.post('/supporter', SupporterController.createSupporter)
router.get('/supporter', SupporterController.home)
router.delete('/supporter', SupporterController.deleteSupporter)

export default router