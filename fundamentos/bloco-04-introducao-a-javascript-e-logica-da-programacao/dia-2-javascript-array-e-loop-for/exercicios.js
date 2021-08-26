let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

console.log("-----------");

//some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
}

console.log("Soma:", soma);

console.log("-----------");

//calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = soma / numbers.length;

console.log("Média aritmética:", mediaAritmetica);

console.log("-----------");

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

console.log("-----------");

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = numbers[0];

for(let index = 0; index < numbers.length; index += 1){ 
    if(numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
}

console.log(maiorValor);

console.log("-----------");

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 > 0) {
        numerosImpares += 1;
    }
}

if(numerosImpares > 0) {
    console.log(numerosImpares);
} else {
    console.log("nenhum valor ímpar encontrado");
}

console.log("-----------");

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for(let index = 0; index < numbers.length; index += 1){ 
    if(numbers[index] < menorValor) {
        menorValor = numbers[index]
    }
}

console.log(menorValor);

console.log("-----------");

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let novaArray = [];

for (let item = 1; item <= 25; item += 1) {
    novaArray.push(item);
}

console.log(novaArray);

console.log("-----------");

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

for(let index = 0; index < novaArray.length; index += 1) {
    console.log(novaArray[index] / 2);
}