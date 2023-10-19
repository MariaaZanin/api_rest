const { Router } = require('express');

const { rotasProdutos } = require('./rotasProdutos');

const rotas = new Router();

rotas.use(rotasProdutos);

module.exports = rotas;