# api-cats
#Javascript #Node

## API-REST  🐈
O desafio é fazer uma API REST completa com todos os verbos: GET, POST, PATCH e
DELETE. A ideia da API é manter uma lista de gatos famosos que aparecem em
desenhos e animações, como Tom, Garfield e Felix.
Deve-se gerenciar pelo menos os erros mais básicos com os status codes adequados
(gatinhos não encontrados, corpo da requisição incompleto etc).


### `POST /`

Adiciona um gatinho. Exemplo de corpo da requisição:

```json
{
  "name": "Tom Cat",
  "colors": ["grey", "blue"]
}
```

Exemplo de resposta (status code **201**):

```json
{
  "id": 1,
  "name": "Tom Cat",
  "colors": ["grey", "blue"]
}
```

### `GET /`

Lista todos os gatinhos. Não é necessário enviar nenhum corpo na requisição.
Exemplo de resposta (status code **200**):

```json
[
  {
    "id": 1,
    "name": "Tom Cat",
    "colors": ["grey", "blue"]
  },
  {
    "id": 2,
    "name": "Garfield",
    "colors": ["orange"]
  }
]
```

### `GET /<CAT_ID>`

Lista as informações de um gatinho específico. Não é necessário enviar nenhum
corpo na requisição. Exemplo de resposta (status code **200**):

```json
{
  "id": 1,
  "name": "Tom Cat",
  "colors": ["grey", "blue"]
}
```

### `PATCH /<CAT_ID>`

Atualiza as informações de um gatinho. Exemplo de corpo da requisição:

```json
{
  "name": "Tom"
}
```

Exemplo de resposta (status code **200**):

```json
{
  "id": 1,
  "name": "Tom",
  "colors": ["grey", "blue"]
}
```

### `DELETE /<CAT_ID>`

Exclui um gatinho específico 😿 Não é necessário enviar nenhum corpo na
requisição nem na resposta (status code **204**).


## Tools

VS Code
NodeJS
Express
