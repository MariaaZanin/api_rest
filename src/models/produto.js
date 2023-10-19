class Produto {
    constructor(id, nome, descricao, valor, data_cadastro){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.data_cadastro = data_cadastro;
    }
}

module.exports = Produto;