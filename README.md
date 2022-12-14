<p align="center">
  <img src="src/assets/logoObuc.png" alt="drawing" style="width:200px;" />
</p>
<br>

# 🤓 Proposta: Desafio Desenvolvedor Front-end Obuc <a name = "about"></a>
Dona Maria é uma confeiteira de mão cheia. Ela faz doces muito gostosos e, com isso, seu negócio só cresce. Com o tempo, ela viu a necessidade de escalar sua marca e contratar mais pessoas para ajudá-la no nesse crescimento. Para não se perder nas contratações, decidiu criar um formulário em papel onde preencheria informações pertinentes a vaga.

Com o tempo e o crescimento dos doces Dona Maria, ela decidiu melhorar o processo e passar a confecção desses formulários para um sistema, evitando ter que preencher um por um manualmente.

A ideia do desafio é atender a demanda da cliente, permitindo que ela preencha de forma facilitada o formulário de novas vagas.

> A maior parte das informações se repete por vaga. Por exemplo, quando se contrata alguém para atender o balcão, o título do cargo, salário, atividades que o cargo exerce, habilidades necessárias e experiência necessária tendem a ter os mesmos valores que a última contratação daquele cargo.

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Executando os Testes](#tests)
- [Funcionalidades](#usage)
- [Built Using](#built_using)
- [TODO](#todo)
- [Authors](#authors)

## 🏁 Getting Started <a name = "getting_started"></a>

Para ter-se uma cópia de desenvolvimento local rodando, deve-se executar os seguintes passos:
 - Clonar o repositório
 - Rodar o comando a seguir. A flag **--legacy-peer-deps** é opcional visto que existe um arquivo de configuração que já a habilita. No entanto, em caso de erro, use-a.
 ```
 npm install --legacy-peer-deps
 ```
 - Em seguida, para rodar o projeto, basta rodar o comando:
  ```
 npm start
 ```
 - Foi utilizada uma biblioteca que concorrentemente executa o site e o json server. Em caso de erro com relação a isso, execute-os separadamente (em dois terminais) com os comandos:
 ```
 npm run start_react_only
 ```
  ```
 npm run start_server_only
 ```

### Pré-requisitos
- NodeJs - Versão 18.0.0

## 🔧 Executando os Testes <a name = "tests"></a>

Verifique se você tem os [requisitos](https://docs.cypress.io/guides/getting-started/installing-cypress) para executar o cypress

Para a execução dos testes o projeto já deve estar rodando. Existem duas opções para verificá-los:
 - Sem interface:
 ```
  npx cypress run
 ```
 - Com interface:
  ```
  npx cypress open
  ```

## 🎈 Funcionalidades <a name="usage"></a>

O sistema consiste de basicamente duas telas: uma para a criação de vagas, e outra para a visualização destas.
<p float="left">
  <img src="https://i.imgur.com/8qnE5SF.png" width="500" />
  <img src="https://i.imgur.com/xlxtbjQ.png" width="500" />
</p>

<h2> Cadastro </h2>

Ao criar-se uma nova vaga o usuário é redirecionado para as vagas do sistema e esta é listada em primeiro. É também apresentada uma noticação de que o processo ocorreu com sucesso:
![Gif de criação de Vaga](https://i.imgur.com/Dzrs4Ie.gif)

Ao digitar o título de uma vaga igual a uma já cadastrada, o sistema sugere o autopreenchimento de alguns campos. Também existem validações para todos os campos:
![Gif demonstrando o autopreenchimento da vaga](https://i.imgur.com/wZeZJmw.gif)

Uma notificação de erro é apresentada em cada caso de erro de comunicação com o backend. Para todas os botões existe um ícone de loading para o caso de demora na resposta.

<h2> Listagem </h2>

Ao excluir uma vaga, esta é removida da base de dados e também é apresentada uma notificação correspondente.
Também é possível exportar uma vaga no formato PDF:
![Exportação do PDF](https://i.imgur.com/EDGVjuk.gif)

## ⛏️ Built Using <a name = "built_using"></a>

- [Json Server](https://www.npmjs.com/package/json-server) - Fake API Rest
- [ReactJS](https://reactjs.org/) - Biblioteca Javascript
- [Mui](https://mui.com/) - Biblioteca de componentes visuais
- [React Text Area Autosize](https://www.npmjs.com/package/react-textarea-autosize) - Biblioteca de Componente Text Area
- [Axios](https://www.npmjs.com/package/axios) - Biblioteca para requisições HTTTP
- [Cypress](https://www.cypress.io/) - Biblioteca de Testes
- [React PDF](https://www.npmjs.com/package/@react-pdf/renderer) - Biblioteca para geração de PDFs
- [SASS](https://sass-lang.com/) - Biblioteca de extensão de CSS
- [Concurrently](https://www.npmjs.com/package/concurrently) - Biblioteca para execução de scripts concorrentemente
- [NodeJs](https://nodejs.org/en/) - Ambiente


## 🚧 TODO <a name = "todo"></a>
- Separar o formulário de criação de vaga em um componente a parte para reutilização em uma tela de edição de vagas
- Alterar o componente de Dialog para ser um context assim como a notificação
- Alterar alguns campos do formulário para seletores com um ícone **+**
- Utilizar typescript e adicionar lint no projeto
- Adicionar mais casos de teste
- Melhorar design do PDF exportado

## ✍️ Authors <a name = "authors"></a>
- [Gustavo P. Chaves](https://github.com/gustavo-oo)
