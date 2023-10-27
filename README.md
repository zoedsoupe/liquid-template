# Liquid

Aplicação desenvolvida na SCTI 2023 da UENF.

## Descrição da API

Consiste numa API bancária onde podem ser feitas transações bancárias entre contas pertencentes ao sistema.

A implementação completa junto à documentação do restante do código pode ser vista na branch [api-implementation](https://github.com/zoedsoupe/liquid-template/tree/api-implementation).

### Regras de negócio

1. Uma transação apenas poderá ser processada caso haja aldo suficiente na conta da pessoa usuária que está enviando o montante.
2. Após uma transação ser processada, o saldo da pessoa enviante deve ser descontado pelo valor da mesma e o saldo da pessoa recebedora deve ser somado ao valor da transação.
3. Uma transação apenas pode ser estornada uma única vez
4. Uma transação será apenas processada em segundo plano de forma assíncrona, nunca em primeiro plano.
5. Caso todas as transações do histórico forem realizadas novamente a partir do estado inicial, o saldo de todas as contas devem permanecer o mesmo.

### Entidades

#### User

```graphql
type User {
  id: ID!
  first_name: String!
  last_name: String
  cpf: String!
  bank_account: BankAccount!
}
```

#### BankAccount

```graphql
type BankAccount {
  id: ID!
  identifier: String!
  balance: Int!
  user: User!
  created_at: Date!
  updated_at: Date!
}
```

#### Transaction

```graphql
enum TransactionStatus {
  PENDING
  FAILED
  SUCCESS
}

type Transaction {
  id: ID!
  status: TransactionStatus!
  amount: Int!
  identifier: String!
  sender: BankAccount!
  receiver: BankAccount!
  created_at: Date!
  processed_at: Date!
  updated_at: Date!
}
```

### Endpoints

#### Usuário/Conta

- `POST` `/api/login`: Realiza o login de uma conta no sistema, um token vai ser retornado
- `GET` `/api/me`: Retorna os dados do perfil da pessoa usuária logada no sistema, com seu saldo incluso.
- `POST` `/api/accounts`: Cadastro de uma nova conta no sistema

#### Transações

- `GET` `/api/transactions`: Dado uma data de início e fim, retornar a lista de transações realizadas pela conta logada durante o período específicado.
- `POST` `/api/transactions`: Realiza uma transação, dado um valor e dois identificadores de contas distintas.
- `DELETE` `/api/transactions/:id`: Cancela uma transação já processada e estorna os valores transacionados para as contas envolvidas.

## Descrição do App Web

Consiste numa aplicação Phoenix Live View onde será possível:

- cadastrar novas contas bancárias com validações em tempo real dos formulários;
- fazer login;
- ter um dashboard para gerenciamento do saldo;
- ver o extrato das suas transações;
- transferir quantias para outras contas;
- estornar uma transação realizada por vc;

A implementação completa junto à documentação do restante do código pode ser vista na branch [web-implementation](https://github.com/zoedsoupe/liquid-template/tree/web-implementation).

O Figma do projeto pode ser encontrato no seguinte [link](https://www.figma.com/file/bNrUnj8JrQKR03pCl8TJdA/Untitled?type=design&node-id=0%3A1&mode=design&t=lI62KJWa2VOeIRVE-1).

## Como usar

Primeiro, baixe as dependências com

```sh
$ mix do deps.get, compile
```

Para criar o banco de dados, execute:

```sh
$ mix ecto.create
```

Para executar migrations, execute:

```sh
$ mix ecto.migrate
```

Ou execute

```sh
$ mix ecto.setup
```

Para criar o banco de dados e rodar as migrations ao mesmo tempo.

Para subir o servidor da API, execute:

```sh
$ mix phx.server
```

O servidor estará disponível em http://localhost:4000.
