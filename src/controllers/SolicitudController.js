import models from '../database/models/index.cjs'

const {Request} = models

export function home(req, res) {
    res.render('solicitudHome')
}

export async function espera(req, res) {
    try{
        const request = await Request.findAll()
        res.render('espera', {request})
    }catch(error){

        return res.status(500).end()
    }

}

export async function createRequest(req, res){
    res.end()
}
