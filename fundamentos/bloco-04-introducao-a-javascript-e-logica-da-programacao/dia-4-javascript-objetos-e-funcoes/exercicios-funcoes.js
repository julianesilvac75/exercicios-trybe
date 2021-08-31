// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromeChecker(string) {
    let split = string.split("");
    let reverse = split.reverse();
    let join = reverse.join("");

    return string === join;
}

console.log(palindromeChecker('arara') );


console.log("----------------");

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggestNumberChecker(array) {
    let biggestNumber = array[0];
    for (let index = 0; index < array.length; index +=1) {
        if (array[index] > biggestNumber) {
            biggestNumber = array[index];
        }
    }

    return array.indexOf(biggestNumber)
}

let test1 = [40, 7, 75, 9, 132, 427]

console.log(biggestNumberChecker(test1));

console.log("----------------");

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerNumberChecker(array) {
    let lowerNumber = array[0];
    for (let index = 0; index < array.length; index +=1) {
        if (array[index] < lowerNumber) {
            lowerNumber = array[index];
        }
    }

    return array.indexOf(lowerNumber)
}

let test2 = [2, 4, 6, 7, 10, 0, -3];

console.log(lowerNumberChecker(test2));

console.log("----------------");

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggerNameChecker(array) {
    let biggerName = array[0];
    for (let index = 0; index < array.length; index +=1) {
        if (array[index].length > biggerName.length) {
            biggerName = array[index];
        }
    }

    return biggerName
}

let test3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];;

console.log(biggerNameChecker(test3));

console.log("----------------");


//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeatedNumber(array) {
    let repeatedCounter = 0;
    let numberCounter = 0;
    let indexRepeatedNumber = 0;

    for(let index in array) {
        let checkNumber = array[index];
        for(let index2 in array) {
            if(checkNumber === array[index2]) {
                numberCounter += 1;
            }
        }

        if(numberCounter > repeatedCounter) {
            repeatedCounter = numberCounter;
            indexRepeatedNumber = index;
        }

        numberCounter = 0
    }

    return array[indexRepeatedNumber];
}

//teste

console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));