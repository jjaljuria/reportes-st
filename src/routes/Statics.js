import express, { Router } from 'express';
import { fileURLToPath } from 'node:url'

/* guarda aquí las manejadores de archivos estaticos para que esta mas ordenado y
no todo este en app.js */

const router = Router()

// expongo los archivo de bootstrap del node_modules para que el cliente lo pueda utilizar
const pathOfBootstrapCssFiles = fileURLToPath(new URL('../../node_modules/bootstrap/dist/css', import.meta.url))

router.use('/css', express.static(pathOfBootstrapCssFiles))

// archivos publicos como img, css o js
const pathOfPublicDir = fileURLToPath(new URL('../public', import.meta.url))
router.use(express.static(pathOfPublicDir))

// archivos de toastify 
const pathOfToastifyFiles = fileURLToPath(new URL('../../node_modules/toastify-js/src', import.meta.url))
router.use('/toastify', express.static(pathOfToastifyFiles))

export default router