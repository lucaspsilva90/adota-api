const { Cliente } = require('../models');

module.exports = {

    listaClientes : async (req,res) => {

    try {
        let resultado = await Cliente.findAll();
        return res.json(resultado);
     } catch (error) {
        return res.status(500).json(error.message)
    }
},

    buscaClienteId : async (req,res) => {
        try {
            const { id } = req.params
            cliente = await Cliente.findOne({where:{ id }});
            if(!cliente){
                res.status(404).json({message:"Não foi possível encontrar um cliente com este id."})
            }
            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    },
   
    criaCliente : async (req, res) => {
        try {
            const cliente = await Cliente.create(req.body);
            return res.status(201).json(req.body);
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    },

    atualizaCliente : async (req, res) => {
        try {
            const { id } = req.params
            const {nome, cpf,email,senha,cep, numero} = req.body
            cliente = await Cliente.findOne({where:{ id }});

            if(!cliente){
                return res.status(404).json({message:"Não há clientes registrados com este id"});
            }
            await Cliente.update({nome,cpf,email,senha,cep,numero},{where:{ id }})
            return res.status(200).json({message:"usuario atualizado"});
        } catch (error) {
            return res.status(500).json(error.message)
        }
    },  

    excluiCliente : async (req,res) => {

        try {
            const { id } = req.params
            //executando a query
            cliente = await Cliente.findOne({where:{ id }});

            if(!cliente){ 
                return res.status(404).json({message:"Não há clientes registrados com este id"});
            }
            
            await Cliente.destroy({where:{ id }});
            return res.status(200).json(cliente);
            

        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }
}