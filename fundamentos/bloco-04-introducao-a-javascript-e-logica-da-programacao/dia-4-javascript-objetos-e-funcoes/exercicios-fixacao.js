//Exercícios: Objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

console.log('A jogadora', player.name, player.lastName, 'tem', player.age, 'anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por', player.bestInTheWorld.length, 'vezes.');

console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata.');

console.log('-------------------------');

//************************************ */

// let pizzas = {
//     sabor: 'Palmito',
//     preco: 39.90,
//     bordaCatupiry: true
// }

// for(let key in pizzas) {
//     console.log(pizzas[key]);
// }

// let pizzasDoces = ['Chocolate', 'Banana', 'Morango']

// for(let key in pizzasDoces) {
//     console.log(key, pizzasDoces[key]);
// }

//Exercícios: For/in

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

for(let name in names) {
      console.log('Olá,', names[name]);
}

console.log('-------------------------')

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(let key in car) {
      console.log(key + ": " + car[key]);
}

console.log('-------------------------')

//exercícios: Funções

//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: adição, subtração, multiplicação, divisão e módulo

//Adição:

function sum(a, b) {
    return a + b;
}

console.log('Soma:', sum(8, 4)); 

//Subtração

function subtraction(a, b) {
    return a - b;
}

console.log('Subtração:', subtraction(8, 4)); 

//Multiplicação:

function multiplication(a, b) {
    return a * b;
}

console.log('Multiplicação:', multiplication(8, 4)); 

//Divisão:

function division(a, b) {
    return a / b;
}

console.log('Multiplicação:', division(8, 4)); 

//Módulo

function modulus(a, b) {
    return a % b;
}

console.log('Módulo:', modulus(8, 4));

console.log('-------------------------')

//2 - Faça um programa que retorne o maior de dois números.

function biggerNumber(a, b) {
    if(a > b) {
        return a + ' é maior que ' + b;
    } else if(b > a) {
        return b + ' é maior que ' + a;
    } else {
        return 'Os números são iguais'
    }
};

console.log(biggerNumber(8, 4));
console.log(biggerNumber(14, 24));
console.log(biggerNumber(30, 30));

console.log('-------------------------')

// 3- Faça um programa que retorne o maior de três números.

function biggerOf3Numbers(a, b, c) {
    if (a > b && a > c) {
        return a + ' é maior que ' + b + ' e ' + c;
    } else if (b > a && b > c) {
        return b + ' é maior que ' + a + ' e ' + c;
    } else if (c > a && c > b) {
        return c + ' é maior que ' + a + ' e ' + b;
    } else {
        return 'os números são iguais'
    }
}

console.log(biggerOf3Numbers(20, 18, 9));
console.log(biggerOf3Numbers(8, 45, 19));
console.log(biggerOf3Numbers(12, 35, 70));
console.log(biggerOf3Numbers(70, 70, 80));

console.log('-------------------------')

// 4- Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function trueOrFalse(a) {
    if (a > 0) {
        return 'positivo';
    } else if (a < 0) {
        return 'negativo';
    } else {
        return 'zero';
    }
}

console.log(trueOrFalse(50));
console.log(trueOrFalse(-32));
console.log(trueOrFalse(0));

console.log('-------------------------')

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.