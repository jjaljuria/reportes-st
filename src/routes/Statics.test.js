import request from 'supertest'
import app from '../app.js'

describe.only('load static files', () => {
    it('should bootstrap css files ready for client', async() => {
        const response = await request(app).get('/css/bootstrap.css').send()
        expect(response.ok).toBeTruthy()
    })
})
