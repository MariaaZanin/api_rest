const request = require('supertest');
const app = require('../src/routes/rotas');
const assert = require('assert');

describe('Testes das Rotas de Produtos', () => {
  let produtoId;

  it('Deve criar um novo produto', async () => {
    const novoProduto = {
      nome: 'Corretivo Líquido',
      valor: 30.0,
      descricao: 'Corretivo facial para cor clara',
      data_cadastro: '2023-10-01 11:00:00',
    };

    const response = await request(app)
      .post('/produto')
      .send(novoProduto)
      .set('Content-Type', 'application/json')
      .set('User-Agent', '*/*');

    assert.ok(response.body.id);
    produtoId = response.body.id;
  });

  it('Deve atualizar o produto criado anteriormente', async () => {
    const produtoAtualizado = {
      nome: 'Novo Corretivo',
      valor: 35.0,
      descricao: 'Corretivo facial para cor clara (atualizado)',
      data_cadastro: '2023-10-01 12:00:00',
    };

    const response = await request(app)
      .put(`/produto/${produtoId}`)
      .send(produtoAtualizado);

    expect(response.status).toBe(200);
  });

  it('Deve buscar o produto pelo ID', async () => {
    const response = await request(app)
      .get(`/produto/${produtoId}`);

    expect(response.status).toBe(200);
  });

  it('Deve excluir o produto criado anteriormente', async () => {
    const response = await request(app)
      .delete(`/produto/${produtoId}`);

    expect(response.status).toBe(204);
  });
});
