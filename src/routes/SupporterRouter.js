import { Router } from 'express'
import * as SupporterController from '../controllers/SupporterController'

const router = Router()

router.post('/supporter', SupporterController.createSupporter)

export default router