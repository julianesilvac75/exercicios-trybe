// Exercício 1

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
}

// Exercício 2

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Exercício 3

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Exercício 4


function addLetters(string, index) {
  let vogals = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let check = 0;
  let letter = '';
  for (let vogal in vogals) {
    if (string[index] === vogal) {
      letter += vogals[vogal];
      check += 1;
    }
  }
  if (check === 0) {
    letter += string[index];
  }
  return letter;
}

function encode(string) {
  let finalString = '';

  for (let index = 0; index < string.length; index += 1) {
    finalString += addLetters(string, index);
  }

  return finalString;
}

function changeLetters(string, index) {
  let vogals = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let check = 0;
  let letter = '';

  for (let vogal in vogals) {
    if (string[index] === vogal) {
      letter += vogals[vogal];
      check += 1;
    }
  }

  if (check === 0) {
    letter += string[index];
  }
  return letter;
}

function decode(string) {
  let finalString = '';

  for (let index = 0; index < string.length; index += 1) {
    finalString += changeLetters(string, index);
  }

  return finalString;
}

let teste = "teste";

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, teste};
