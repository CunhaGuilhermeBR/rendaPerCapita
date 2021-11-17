## Descrição

Uma API  REST usando NodeJS e Express no back-End e handlebars no front-end, feita para calcular a renda per capita e pegar o endereço via API do ViaCep. Os dados necessários são:

* Nome(Opcional)
* CEP
* Renda
* Dependentes

## Instalação

Para poder rodar a aplicação você precisara do NodeJs e do npm , caso não o tenha instalado na sua máquina os links são esses:

* https://nodejs.org/en/download/
* https://github.com/kevva/download

Após ter instalado tudo vá até a pasta do projeto pelo terminal e digite o comando:

*  npm install

## Rodando a aplicação

Depois de ter instalado tudo basta rodar o comando:

*  npm start

Para rodar os testes basta rodar o comando: 

*  npm test

## Rotas

* Rota padrão: rota GET / 
* Calcular a renda per capita: rota POST /calculate
