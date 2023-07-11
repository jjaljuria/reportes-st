import {jest} from '@jest/globals'
import * as SolicitudController from './SolicitudController.js'
import request from 'supertest'
import app from '../app.js'
import Request from '../database/models/request.js'

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

    it('should have route GET /espera and return 200', async() => {
        Request.findAll = jest.fn(()=> Promise.resolve([]))
        await request(app).get('/espera')
        .expect(200)
    })

    it('should GET /espera return 500 when throw error with database', async ()=>{
        Request.findAll = jest.fn()
        Request.findAll.mockRejectedValueOnce(new Error('Fail'))
        
        // para que no me tire el error en la consola
        console.error = jest.fn()
        
        await request(app).get('/espera')
        .expect(500)
    })

    it('should have createRequest and route POST /solicitud', async ()=>{
        Request.create = jest.fn()

        expect(SolicitudController.createRequest).toBeDefined()
        await request(app).post('/solicitud').expect(201)

        expect(Request.create).toHaveBeenCalled()
    })
})
