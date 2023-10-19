const { getProdutosDB, addProdutoDB, 
  updateProdutoDB, deleteProdutoDB, getProdutoPorIdDB } 
  = require('../database/produtoDB')

const getProdutos = async (request, response) => {
  await getProdutosDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
          status : 'error',
          message : 'Erro ao consultar as Produtos: ' + err
        }))
}

const getProdutoPorId= async (request, response) => {
  await getProdutoPorIdDB(parseInt(request.params.codigo))
      .then(data => response.status(200).json(data))
      .catch(err => response.status(400).json({
          status: 'error',
          message: err
      }));           
}

const addProdutos = async (request, response) => {
  await addProdutoDB(request.body)
      .then(data => response.status(201).json({
          status: "success", message: "Produto adicionado",
          data: data
      }))
      .catch(err => response.status(400).json({
          status: 'error',
          message: err
      }));
}

const updateProdutos = async (request, response) => {
  await updateProdutoDB(request.body)
      .then(data => response.status(200).json({
          status: "success", message: "Produto alterado",
          data: data
      }))
      .catch(err => response.status(400).json({
          status: 'error',
          message: err
      }));
}

const deleteProdutos = async (request, response) => {
  try {
      const message = await deleteProdutoDB(parseInt(request.params.codigo));
      response.status(200).json({
          status: "success",
          message: message
      });
  } catch (err) {
      response.status(400).json({
          status: 'error',
          message: err
      });
  }
}


module.exports = {getProdutos, getProdutoPorId: getProdutoPorId, addProdutos: addProdutos, updateProdutos: updateProdutos, deleteProdutos: deleteProdutos }