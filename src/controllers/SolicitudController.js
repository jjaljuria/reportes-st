

export function home(req, res) {
    res.render('solicitudHome')
}

export async function espera(req, res) {
    return res.render('espera')
}

export async function createRequest(req, res){
    res.end()
}
