// getData.js
const fetch = require('node-fetch');

// const getSuperHero = () => {
//   const result = fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
//     .then((response) => response.json())
//     .then((hero) => console.log;(hero.name));
//   return result;
// };

// console.log(getSuperHero()); // Wonder Woman

const getSuperHero = () => {
    const result = fetch("https://www.urlalterada.com")
      .then((response) => response.json())
      .then((hero) => hero.name)
      .catch(() => 'erro');
    return result;
};

console.log(getSuperHero());

module.exports = getSuperHero;