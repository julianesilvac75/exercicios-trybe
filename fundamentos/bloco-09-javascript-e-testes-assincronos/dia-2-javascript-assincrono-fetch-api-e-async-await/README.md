# Dia 9.2 - JavaScript Assíncrono - Fetch API e async/await

Exercícios de fixação sobre os conceitos de JavaScript Assíncrono

## Conteúdo

### Exercícios
1. Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!
- Primeiro, veja o manual da API do site icanhazdadjoke.com . Ele esclarece como fazer as requisições ao serviço de piadas.
- Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
2. Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers
- O segundo parâmetro myObject define o tipo de request: method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , como visto nas requisições via curl .
- Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

2.  Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostar as 10 primeiras.
A documentação para a API que vamos utilizar esta disponível nesse link .
Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um array com uma listagem das crypto moedas).
- Agora que temos a url vamos criar um arquivo ( api.js , por exemplo) e dentro dele uma função para pegar o array com as moedas.
- Crie também um arquivo HTML ( index.html , por exemplo) que deve conter uma tag para listar as crypto moedas.
- Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .
- Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?

### Bônus

Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?
Para este exercício vamos utilizar a Currency API . Tente descobrir qual url retorna os dados necessários para este exercício.


>Written with [StackEdit](https://stackedit.io/).