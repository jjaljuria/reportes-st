import { getIO } from '../socket.js'

export function home(req, res) {
    res.render('SolicitudHome')
}

export function createSolicitude(req, res) {
    
    res.json({msg: 'ok'})
}
