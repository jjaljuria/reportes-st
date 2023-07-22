import * as SupporterController from './SupporterController.js'
import request from 'supertest';
import app from '../app.js';

describe('SupporterController', ()=>{
    it('should have createSupporter method', ()=>{
        expect(SupporterController.createSupporter).toBeDefined()
    })

    it('should  /supporter return code 200', async ()=>{
        await request(app).post('/supporter')
        .send()
        .expect(200)
    })
})