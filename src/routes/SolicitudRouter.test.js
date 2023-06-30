import app from '../app.js'
import request from 'supertest'

describe('SolicitudRouter', () => {
    it('should return status code 200', async() => {
        const response = await request(app).get('/solicitud').send()
        expect(response.statusCode).toBe(200)
    })
})
