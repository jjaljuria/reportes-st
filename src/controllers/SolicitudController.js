import {Request} from '../database/models';

export function home(req, res) {
    res.render('solicitudHome')
}

export async function espera(req, res) {
    return res.render('espera')
}
