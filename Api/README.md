# API para consulta de dados do Usuario da TakeBlip no GITHUB

## Como rodar

- Faça o clone do projeto.
- Rode o comando. 
> npm start
- O servidor será iniciado na porta **3333**.

## Rotas
### [GET] v1/repos
Acessa as informações dos repositorios da Take.

**QUERY PARAMS**
- **sort** ( atributo que será utilizado para ordenar os resultados )
> Tipo: String 
> 
> Valores aceitáveis: created, updated, pushed, full_name.
- **qtd** ( quantidade de repositorios que serão buscados )
> Tipo: Inteiro
> 
> Valores aceitáveis: 1 <= qtd <= 20
- **language** ( a linguagem dos repositorios a serem buscados )
> Tipo: String
> 
> Valores aceitáveis: Linguagens de programação disponiveis no repositorio
- **order** ( se os resultados serão ordenados de forma crescente ( asc ) ou decrescente ( desc ) )
> Tipo: String
> 
> Valores aceitáveis: asc, desc
- **page** ( o numero da pagina dos resultados )
> Tipo Inteiro
> 
> Valores aceitáveis: 1 <= page

**Retorno**
- Retorna um JSON contendo os repositorios nomeados junto com seu Index
```json
{
  "repository1" {
    "nomeCompleto",
    "descricao",
    "language"
  },
  "repository2" {
    "nomeCompleto",
    "descricao",
    "language"
  }
}
```

**Exemplo**
- *Rota:* /v1/repos?sort=created&qtd=2&language=C%23&order=asc
- *Retorno:*
 ```json
{"repository1":{"nomeCompleto":"takenet/library.data","descricao":"Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications","language":"C#"},"repository2":{"nomeCompleto":"takenet/library.logging","descricao":"Provides a simple logging interface for applications and some basic implementations of this interface","language":"C#"}}
```
