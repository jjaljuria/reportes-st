import Request from '../database/models/request.js'
import Supporter from '../database/models/supporter.js'
import { getIO } from '../socket.js'

export function home(req, res) {

    res.render('solicitud')
}

export async function espera(req, res) {
    try{
        const supporters = await Supporter.findAll()

        const requests = await Request.findAll({
            where: { atendido: false},
            order: [
                ['id', 'DESC']
            ]
        })

        res.render('espera', {requests, supporters})
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
        const newRequest = await Request.create({
            oficina,
            coordinacion,
            usuario,
            solicitado,
            descripcion,
        })

        getIO().emit('newRequest', newRequest)

        res.status(201).end()
    }catch(error){
        console.error(error);
        return res.status(500).end()
    }
}

export async function solvedRequest(req, res){
    const {id, idSupporter} = req.body
    
    try{
        await Request.update({atendido: true, realizado: idSupporter}, {
            where: {
                id
            }
        })

        res.status(201).end()
    }catch(error){
        console.error(error);
        res.status(500).end()
    }
}