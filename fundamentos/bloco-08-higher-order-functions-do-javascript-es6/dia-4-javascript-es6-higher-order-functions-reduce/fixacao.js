const numbers = [32, 15, 3, 2, -5, 56, 10];
// let biggerNumber = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > biggerNumber) {
//         biggerNumber = numbers[index];
//     }
// }

// console.log(biggerNumber);
const numbers2 = [50, 85, -30, 3, 15]

const biggerNumber = numbers2.reduce((bigger, number) => {
    if (bigger > number) {
        return bigger;
    }

    return number;
})

console.log(biggerNumber);