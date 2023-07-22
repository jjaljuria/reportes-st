import Supporter from '../database/models/supporter.js';

export async function createSupporter(req, res){
    const {name} = req.body
    
    try{
        await Supporter.create({
            name
        })

        res.status(200).end()
    }catch(err){
        console.error(err);
        res.status(500).end()
    }
}

export async function home(req, res){
    try{
        const supporters = await Supporter.findAll()
        res.render('supporter', {supporters})
    }catch(error){
        console.error(error);
        res.status(500).end()
    }
}

export async function deleteSupporter(req, res){
    const {id} = req.body

    try{
        const supporter = await Supporter.findByPk(id)
        await supporter.destroy()
        res.status(201).end()
    }catch(error){
        res.status(500).end()
    console.error(error)
    }
}