// Exercício 1

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

console.log('----------------');

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
    const sortedArray = array.sort((a, b) => a - b); // Créditos: https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958
    for (let index = 0; index < sortedArray.length; index += 1) {
        array[index] = sortedArray[index];
    }

    return array.toString();
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);