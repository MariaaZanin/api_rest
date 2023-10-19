const { Router } = require('express');

const { getProdutos, addProdutos, updateProdutos, getProdutoPorId, deleteProdutos } = require('../controllers/produtoController');

const rotasProdutos = new Router();

rotasProdutos.route('/produto')
   .get(getProdutos)
   .post(addProdutos)
   .put(updateProdutos)

rotasProdutos.route('/produto/:codigo')
   .get(getProdutoPorId)
   .delete(deleteProdutos)

module.exports = { rotasProdutos: rotasProdutos };