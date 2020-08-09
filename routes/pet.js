var express = require('express');
var router = express.Router();
var petController = require('../controllers/pet')

//ROTAS GET
router.get('/', petController.listaPets);
router.get('/busca/:id', petController.listaPetId);

//ROTAS POST

router.post('/adiciona', petController.adicionaPet);


module.exports = router;