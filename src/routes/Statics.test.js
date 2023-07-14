import request from 'supertest'
import app from '../app.js'

describe.only('load static files', () => {
    it('should bootstrap css files ready for client', async() => {
        const response = await request(app).get('/css/bootstrap.css').send()
        expect(response.ok).toBeTruthy()
    })

    it('should public/js files ready for client', async() => {
        await request(app).get('/js/solicitud.js')
        .expect(200)
    })

    it('should toastify-js files ready for client', async ()=>{
        await request(app).get('/toastify/toastify.css')
        .expect(200)

        await request(app).get('/toastify/toastify.js')
        .expect(200)
    })
})
