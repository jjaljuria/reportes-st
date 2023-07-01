import express, { Router } from 'express';
import { fileURLToPath } from 'node:url'

/* guarda aquí las manejadores de archivos estaticos para que esta mas ordenado y
no todo este en app.js */

const router = Router()

// expongo los archivo de bootstrap del node_modules para que el cliente lo pueda utilizar
const pathOfBootstrapCssFiles = fileURLToPath(new URL('../../node_modules/bootstrap/dist/css', import.meta.url))

console.log(pathOfBootstrapCssFiles);
router.use('/css', express.static(pathOfBootstrapCssFiles))

export default router