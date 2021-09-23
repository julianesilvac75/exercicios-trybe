// Exercício 1

const fatorial = (numero) => {
    if (numero < 0) {
      return false;
    }
    return numero === 0 ? 1 : numero * fatorial(numero - 1);
  };
  
  console.log(fatorial(5));

console.log('-----------------');

// Exercício 2

const longestWord = (string) => {
    const newString = string.split(' ');
    let wordLength = 0;
    let wordIndex = 0;
    
    for(let index = 0; index < newString.length; index += 1) {
        if (newString[index].length > wordLength) {
            wordLength = newString[index].length;
            wordIndex = index;
        }
    }

    return newString[wordIndex];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'