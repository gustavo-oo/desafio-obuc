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
- [Funcionalidades](#usage)
- [Testes](#tests)
- [Built Using](#built_using)
- [TODO](../TODO.md)
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

## 🎈 Funcionalidades <a name="usage"></a>

O sistema consiste de basicamente duas telas: uma para a criação de vagas, e outra para a visualização destas.

## 🔧 Executando os Testes <a name = "tests"></a>

Para a execução dos testes o projeto já deve estar rodando. Existem duas opções para verificá-los:
 - Sem interface:
 ```
  npx cypress run
 ```
 - Com interface:
  ```
  npx cypress open
  ```

