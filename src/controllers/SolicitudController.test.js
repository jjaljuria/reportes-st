import * as SolicitudController from './SolicitudController.js'
import request from 'supertest'
import app from '../app.js'

describe('SolicitudController', () => {
    it('should SolicitudController exists', () => {
        expect(SolicitudController).toBeDefined()
    })

    it('should SolicitudController have method home', async() => {
        const response = await request(app).get('/solicitud').send()

        expect(SolicitudController.home).toBeDefined()
        expect(response.ok).toBeTruthy()
    })

    it('should SolicitudController have method espera', async() => {
        expect(SolicitudController.espera).toBeDefined()
    })

    it('should have route GET /espera', async() => {
        await request(app).get('/espera')
        .expect(200)
    })
})
