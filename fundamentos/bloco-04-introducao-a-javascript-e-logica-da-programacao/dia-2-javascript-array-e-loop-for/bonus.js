let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Ordene o array numbers em ordem crescente e imprima seus valores;

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

console.log(numbers);

console.log("--------------");

//Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let index = 1; index < numbers.length; index += 1) {
for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
    let position = numbers[index];
    numbers[index] = numbers[secondIndex];
    numbers[secondIndex] = position;
    }
}
}

console.log(numbers);

console.log("--------------");

//Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];
let secondIndex = 1;

for (let index = 0; index < numbers.length; index +=1) {
    if(secondIndex < numbers.length) {
        let resultado = numbers[index] * numbers[secondIndex];
        novoArray.push(resultado);
    } else {
        let resultado = numbers[index] * 2;
        novoArray.push(resultado)
    }
    secondIndex += 1; 
}

console.log(novoArray);