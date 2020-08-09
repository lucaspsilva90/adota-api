const { Pet } = require('../models');

module.exports = {

    listaPets : async (req, res) => {
        try {
            let resultado = await Pet.findAll();
            return res.json(resultado); 
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    listaPetId : async (req, res) => {
        try {
            let { id } = req.params

            pet = await Pet.findOne({where:{ id }});
            if(!pet){
                return res.status(404).json({message:"Não foi encontrado pet com este id."});    
            }
            
            return res.status(200).json(pet);

        } catch (error) {
            
        }
    },

    adicionaPet : async (req,res) => {
        try {
            pet = await Pet.create(req.body);
            return res.status(201).json(pet)

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}