# Api-Rest
Esta aplicação apresenta um sistema CRUD de produtos, oferecendo uma demonstração didática do modelo REST.

## Adiciona produto
Este serviço é responsável pela inserção de novos objetos no sistema. Utilizando um controlador dedicado, ele permite a adição de produtos ao banco de dados.

**Entrada esperada:**
> **POST** /produto

_@RequestBody_
```json
{
  "nome": "Sombra de olho", 
  "valor": 59.99,
  "descricao": "", 
  "data_cadastro": "2023-10-01 11:00:00"
}
```

**Retorno esperado:**
```json
{
  "status": "success",
  "message": "Produto adicionado",
  "data": {
    "id": 7,
    "nome": "Sombra de olho",
    "valor": "59.99",
    "data_cadastro": "2023-10-01T03:00:00.000Z"
  }
}
```

## Atualiza produto
Este serviço possibilita a modificação dos dados de produtos já existentes. Por meio de um controlador, os usuários podem atualizar atributos, como preços ou descrições de produtos, mantendo o banco de dados atualizado com informações precisas.

**Entrada esperada:**
> **PUT** /produto

_@RequestBody_
```json
{
  "id": 1,
  "nome": "Corretivo Líquida", 
  "valor": 32.0,
  "descricao": "Corretivo facial de alta qualidade", 
  "data_cadastro": "2023-10-01 11:00:00"
}
```

**Retorno esperado:**
```json
{
  "status": "success",
  "message": "Produto alterado",
  "data": {
    "id": 7,
    "nome": "Corretivo Líquida",
    "valor": "32.00",
    "data_cadastro": "2023-10-01T03:00:00.000Z"
  }
}
```

## Busca produto
Controlador responsável por buscar todos os produtos existentes no banco. Com este serviço, os usuários podem buscar e visualizar dados detalhados sobre os produtos existentes, fornecendo uma visão completa das informações do sistema.

**Entrada esperada:**
> **GET** /produto

**Retorno esperado:**
```json
[
  {
    "id": 1,
    "nome": "Sombra de olho",
    "descricao": "",
    "valor": "59.99",
    "data_cadastro": "2023-10-01T03:00:00.000Z"
  },
  {
    "id": 2,
    "nome": "Corretivo Líquida",
    "descricao": "Corretivo facial de alta qualidade",
    "valor": "32.00",
    "data_cadastro": "2023-10-01T03:00:00.000Z"
  }
]
```

## Deleta produto
O serviço de exclusão permite a remoção de produtos do sistema. Usando o controlador, os usuários podem eliminar produtos obsoletos ou indesejados.

**Entrada esperada:**
> **DELETE** /produto/id

**Retorno esperado:**
```json
{
  "status": "success",
  "message": "Produto removida com sucesso"
}
```