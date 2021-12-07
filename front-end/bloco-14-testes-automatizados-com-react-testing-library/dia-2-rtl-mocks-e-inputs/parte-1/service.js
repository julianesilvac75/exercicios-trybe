const fetch = require('node-fetch');

function randomNumber() {
  return Math.round(Math.random() * 100);
}

const upperText = (str) => {
  if (typeof str === 'string') {
    const string = str.toUpperCase();
    return string;
  }
  return 'Insira um texto';
};

const firstLetter = (str) => {
  if(typeof str === 'string') {
    return str[0];
  }
  return 'Insira um texto';
}

const joinStrings = (a, b) =>  {
  if(typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }

  return 'Insira dois textos';
}

// const firstFunction = (str) => str.toUpperCase();
// const secondFunction = (str) =>  str.charAt(0);
// const thirdFunction = (str1, str2) => str1.concat(str2);

function dogPicturesAPI() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
  response
    .json()
    .then(json =>
      response.ok ? Promise.resolve(json) : Promise.reject(json)
    )
  );
}

// module.exports = {
//   randomNumber,
//   firstFunction,
//   secondFunction,
//   thirdFunction,
//   dogPicturesAPI,
// };

module.exports = {randomNumber, upperText, firstLetter, joinStrings, dogPicturesAPI};