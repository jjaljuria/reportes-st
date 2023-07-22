import {jest} from '@jest/globals'
import * as SupporterController from './SupporterController.js'
import request from 'supertest';
import app from '../app.js';
import Supporter from '../database/models/supporter.js';

describe('SupporterController', ()=>{
    it('should have createSupporter method', ()=>{
        expect(SupporterController.createSupporter).toBeDefined()
    })

    it('should  /supporter return code 200', async ()=>{
        Supporter.create = jest.fn()

        await request(app).post('/supporter')
        .expect(200)
    })

    it('should Supporter.create have been called one time with params', async ()=>{
        Supporter.create = jest.fn()
        const params = {
            name: 'jose aljuria'
        }

        await request(app).post('/supporter')
        .send(params)
        .expect(200)

        expect(Supporter.create).toHaveBeenCalledWith(params)
    })
})