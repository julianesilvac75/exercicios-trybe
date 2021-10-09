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

function encodeDecode(vogals, string) {
  const checker = Object.keys(vogals);

  const changeString = (acc, letter) => {
    const verifyVogal = checker.find(key => key === letter);
    const newString = (verifyVogal === letter) ? `${acc}${vogals[verifyVogal]}` : `${acc}${letter}`;
    
    return newString;
  }

  return string.split('').reduce(changeString, '');
}

function encode(string) {
  const vogals = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  return encodeDecode(vogals, string);
}

function decode(string) {
  const vogals = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  
  return encodeDecode(vogals, string)
}

module.exports = {
    sum,
    myRemove,
    myFizzBuzz,
    encode,
    decode
}