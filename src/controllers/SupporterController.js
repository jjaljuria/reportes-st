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