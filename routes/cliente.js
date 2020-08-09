var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/cliente')

//ROTAS GET
router.get('/', clienteController.listaClientes);
router.get('/busca/:id', clienteController.buscaClienteId);
router.get('/deleta/:id', clienteController.excluiCliente);


//ROTAS POST
router.post('/criar', clienteController.criaCliente);

//ROTAS PUT
router.put('/atualizar/:id', clienteController.atualizaCliente);

module.exports = router;
