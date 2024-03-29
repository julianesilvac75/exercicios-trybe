const fetch = require('node-fetch');

// Armazenamos o token numa váriável (num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente):
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers:
// const headers = new fetch.Headers({
//   Authorization: API_TOKEN
// });
const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  // Precisamos adicionar o header `Content-Type` e definí-lo como `application/json`:
  'Content-Type': 'application/json', 
});

// Criamos o body:
// Utilizamos o `stringify` para que possamos enviar esse body como JSON
const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r',
});

// Requisição do tipo GET:
// fetch('https://postman-echo.com/get?param1=teste', {
//   // Passamos o objeto de headers como parâmetro para o fetch:
//   headers})
//   .then((response) => {
//     // Ao receber a resposta, verificamos se correu tudo bem:
//     if (!response.ok) {
//       // Caso não, forçamos a Promise a ser rejeitada:
//       return Promise.reject(response);
//     }

//     // Caso esteja tudo OK, lemos o body como JSON:
//     return response.json();
//   })
//   .then((data) => {
//     // Por fim, escrevemos o body no console:
//     console.log(data);
//   })
//   .catch((errorOrResponse) => {
//     // Em caso de falha simples (a request completou com um status diferente de 2xx)
//     // simplesmente logamos o status no console:
//     if (errorOrResponse.status) {
//       return console.error(`Request failed with status ${errorOrResponse.status}`);
//     }

//     // Caso tenha acontecido um erro de rede (não foi possível completar a request)
//     // logamos o erro todo:
//     console.error(errorOrResponse);
//   });

// Requisição do tipo POST:
fetch('https://postman-echo.com/post?param1=teste', {
  // Passamos o objeto de headers como parâmetro para o fetch:
  headers,
  method: 'POST',
  //Adicionamos o body às opçoes da request:
  body})
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem:
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada:
      return Promise.reject(response);
    }

    // Caso esteja tudo OK, lemos o body como JSON:
    return response.json();
  })
  .then((data) => {
    // Por fim, escrevemos o body no console:
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console:
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo:
    console.error(errorOrResponse);
  });