import Request from '../database/models/request.js'

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
    res.end()
}
