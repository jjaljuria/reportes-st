import {jest} from '@jest/globals'
import * as SupporterController from './SupporterController.js'
import request from 'supertest';
import app from '../app.js';
import Supporter from '../database/models/supporter.js';

describe('SupporterController', ()=>{
    it('should have createSupporter method', ()=>{
        expect(SupporterController.createSupporter).toBeDefined()
    })

    it('should Supporter.create have been called one time with params', async ()=>{
        Supporter.create = jest.fn()
        const params = {
            name: 'jose aljuria'
        }

        await request(app).post('/supporter')
        .send(params)
        .expect(302)

        expect(Supporter.create).toHaveBeenCalledWith(params)
    })

    it('should show page GET /supporter', async ()=>{
        Supporter.findAll = jest.fn(()=> Promise.resolve([]))
        await request(app).get('/supporter')
        .expect(200)
    })

    it('should delete dupporter with DELETE /supporter', async ()=>{
        Supporter.destroy = jest.fn(()=> Promise.resolve(true))
        Supporter.findByPk = jest.fn(()=> Promise.resolve({destroy: Supporter.destroy}))
        
        await request(app)
        .delete('/supporter')
        .expect(201)

        expect(Supporter.destroy).toHaveBeenCalled()
        expect(Supporter.findByPk).toHaveBeenCalled()
    })
})