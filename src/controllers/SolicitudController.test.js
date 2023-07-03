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

    it('should SolicitudController have method createSolicitude', async() => {
        expect(SolicitudController.createSolicitude).toBeDefined()
    })

    it('should createSolicitude return a json', async() => {
        await request(app).post('/solicitud')
        .expect('Content-Type', /application\/json/)
    })
})
