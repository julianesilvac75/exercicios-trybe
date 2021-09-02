//1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanNumerals(number) {
    let numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let numbers = [];

    for (let index = 0; index < number.length; index +=1) {
        for (let key in numerals) {
            if(number[index] === key) {
                numbers.push(numerals[key])
            }

        }
    }

    let numbersToSum = [];
    let numbersIndexCheck = 1;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < numbers[numbersIndexCheck]) {
            numbersToSum.push(numbers[numbersIndexCheck] - numbers[index]);
            numbers[numbersIndexCheck] = 0;
        } else {
            numbersToSum.push(numbers[index])
        } 

        numbersIndexCheck += 1; 
    }

    let sum = 0;

    for(let number of numbersToSum) {
        sum += number;
    }



    return sum;
}

//teste
console.log(romanNumerals("IV")); //esperado: 4
console.log(romanNumerals("IX")); //esperado: 9
console.log(romanNumerals("XV")); //esperado: 15
console.log(romanNumerals("XL")); //esperado: 40
console.log(romanNumerals("XC")); //esperado: 90
console.log(romanNumerals("CD")); //esperado: 400
console.log(romanNumerals("CM")); //esperado: 900
console.log(romanNumerals("MCDL")); //esperado: 1450
console.log(romanNumerals("MMXXI")); //esperado: 2021
console.log(romanNumerals("MCDXLIX")); //esperado: 1449;