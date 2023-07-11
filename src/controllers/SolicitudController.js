import Request from '../database/models/request.js'
import { getIO } from '../socket.js'

export function home(req, res) {

    res.render('solicitudHome')
}

export async function espera(req, res) {
    try{
        const request = await Request.findAll()
        res.render('espera', {request})
    }catch(error){
        console.error(error)
        return res.status(500).end()
    }

}

export async function createRequest(req, res){

    const {
        oficina,
        coordinacion,
        usuario,
        solicitado,
        descripcion,
    } = req.body
    
    
    try{
        await Request.create({
            oficina,
            coordinacion,
            usuario,
            solicitado,
            descripcion,
        })

        getIO().emit('newRequest', {
            oficina,
            coordinacion,
            usuario,
            solicitado,
            descripcion,
        })

        res.status(201).end()
    }catch(error){
        console.error(error);
        return res.status(500).end()
    }
}
