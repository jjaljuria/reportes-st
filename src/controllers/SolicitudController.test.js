import * as SolicitudController from './SolicitudController.js'
import request from 'supertest'
import app from '../app.js'
import models from '../database/models';

const {Request} = models
console.log(Request.findAll);

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

    it('should have createRequest and route POST /solicitud', async ()=>{
        expect(SolicitudController.createRequest).toBeDefined()
        await request(app).post('/solicitud')
        .expect(200)
    })
})
