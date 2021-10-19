// Exercício de fixação 1 - forEach

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
// Adicione seu código aqui

emailListInData.forEach(showEmailList);

console.log('-----------------');

// Exercício de fixação 2 - find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = number => number % 3 === 0 && number % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5))

console.log('-----------------');

// Exercício de fixação 3 - find

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = name => name.length === 5;

console.log(names.find(findNameWithFiveLetters));

console.log('-----------------');

// Exercício de fixação 4 - find

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(music) {
      return music.id === '31031685';
  }

  console.log(musicas.find(findMusic));

console.log('-----------------');

// Exercício de fixação 5  - some

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(element => element === name);

console.log(hasName(names2, 'Cláudia'))

console.log('-----------------');

// Exercício de fixação 6 - every

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
  
const verifyAges = (arr, minimumAge) => arr.every(person => person.age >= minimumAge);
  
console.log(verifyAges(people, 18));

console.log('-----------------');

// Exercício de fixação 7 - sort

const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
people2.sort((el1, el2) => el1.age - el2.age)
  
console.log(people2);

console.log('-----------------');

// Exercício de fixação 8 - sort

people2.sort((el1, el2) => el2.age - el1.age);

console.log(people2);
