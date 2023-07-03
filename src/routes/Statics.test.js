import request from 'supertest'
import app from '../app.js'

describe.only('load static files', () => {
    it('should bootstrap css files ready for client', async() => {
        const response = await request(app).get('/css/bootstrap.css').send()
        expect(response.ok).toBeTruthy()
    })

    it('should public/js files ready for client', async() => {
        await request(app).get('/js/SocketClient.js')
        .expect(200)
    })
})
