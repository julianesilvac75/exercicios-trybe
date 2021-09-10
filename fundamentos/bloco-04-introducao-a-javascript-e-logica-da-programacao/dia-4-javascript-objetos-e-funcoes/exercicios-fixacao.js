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

//teste
console.log('Soma:', sum(8, 4)); 

//Subtração

function subtraction(a, b) {
    return a - b;
}

// teste
console.log('Subtração:', subtraction(8, 4)); 

//Multiplicação:

function multiplication(a, b) {
    return a * b;
}

//teste
console.log('Multiplicação:', multiplication(8, 4)); 

//Divisão:

function division(a, b) {
    return a / b;
}

//teste
console.log('Multiplicação:', division(8, 4)); 

//Módulo

function modulus(a, b) {
    return a % b;
}

//teste
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

//teste
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

//teste
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

//teste
console.log(trueOrFalse(50));
console.log(trueOrFalse(-32));
console.log(trueOrFalse(0));

console.log('-------------------------')

// 5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

function anglesOfTriangle(a, b, c) {
    let sum = a + b + c;
    if(a >= 0 && b >= 0 && c > 0) {
        if(sum === 180) {
            return true;
        } else {
            return false;
        }
    
    } else {
        return "Erro: insira um valor positivo";
    }
}

//teste
console.log(anglesOfTriangle(60, -80, 60));

console.log('-------------------------')

//6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chessInfo(piece) {
    switch(piece.toLowerCase()) {
        case "rei":
            return "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez."
            break;
        case "rainha":
            return "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
            break;
        case "bispo":
            return "O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
            break;
        case "cavalo":
            return "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.";
            break;
        case "torre":
            return "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
            break;
        case "peão":
            return "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";
            break;
        default:
            return "Erro: insira uma peça válida.";
    }
}

//teste
console.log(chessInfo("Peão"));
console.log(chessInfo("cavalo"));
console.log(chessInfo("cadeira"));
console.log(chessInfo("Bispo"));

console.log('-------------------------')

// 7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

function gradeConverter(grade) {

    if(grade >= 90 && grade <= 100) {
        return "Conceito A";
    } else if(grade >= 80 && grade < 90) {
        return "Conceito B";
    } else if(grade >= 70 && grade < 80) {
        return "Conceito C";
    } else if(grade >= 60 && grade < 70) {
        return "Conceito D";
    } else if(grade >= 50 && grade < 60) {
        return "Conceito E";
    } else if(grade < 50 && grade >= 0) {
        return "Conceito F";
    } else {
        return "Erro - insira uma nota válida";
    }
}

//teste

console.log(gradeConverter(85));
console.log(gradeConverter(40));
console.log(gradeConverter(65));
console.log(gradeConverter(140));
console.log(gradeConverter(-15));

console.log('-------------------------')

// 8- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

function evenChecker(a, b, c) {
    return a % 2 === 0 || b % 2 === 0 || c % 2 === 0
}

//teste
console.log(evenChecker(5, 8, 10));
console.log(evenChecker(7, 9, 11));
console.log(evenChecker(6, 9, 35));

console.log('-------------------------')

//9-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

function oddChecker(a, b, c) {
    return a % 2 != 0 || b % 2 != 0 || c % 2 != 0
}

//teste
console.log(oddChecker(5, 8, 10));
console.log(oddChecker(7, 9, 11));
console.log(oddChecker(6, 9, 35));
console.log(oddChecker(6, 8, 40));

console.log('-------------------------')

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

function calculeProfits(costValue, saleValue, unitsSold) {
    let taxes = (costValue * 20) / 100
    let totalCost = costValue + taxes

    if (costValue >= 0 && saleValue >= 0 && unitsSold >= 0) {
        let profit = (saleValue - totalCost) * unitsSold;
        return 'O lucro será de R$' + profit;
    } else {
        return 'Erro: insira um valor positivo'
    }
}

//teste
console.log(calculeProfits(100, 150, 50));

console.log('-------------------------')

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

function calculateSalaryTaxes(grossSalary) {
    let INSS = 0;

    if (grossSalary <= 1556.94) {
        INSS = (grossSalary * 8) / 100;
    } else if(grossSalary <= 2594.92) {
        INSS = (grossSalary * 9) / 100;
    } else if(grossSalary <= 5189.82) {
        INSS = (grossSalary * 11) / 100;
    } else {
        INSS = 570.88;
    }

    let baseSalary = grossSalary - INSS;

    //calculo do valor do IR
    let IR = 0;

    if(baseSalary <= 1903.98) {
        IR = 0;
    } else if(baseSalary <= 2826.65) {
        let aliquotIR = (baseSalary * 7.5) / 100;
        IR = aliquotIR - 142.80;
    } else if(baseSalary <= 3751.05) {
        let aliquotIR = (baseSalary * 15) / 100;
        IR = aliquotIR - 354.80;
    }  else if(baseSalary <= 4664.68) {
        let aliquotIR = (baseSalary * 22.5) / 100;
        IR = aliquotIR - 636.13;
    } else {
        let aliquotIR = (baseSalary * 27.5) / 100;
        IR = aliquotIR - 869.36;
    }

    let netSalary = baseSalary - IR;

    return netSalary;
}

//teste
console.log(calculateSalaryTaxes(1500));
console.log(calculateSalaryTaxes(3000));