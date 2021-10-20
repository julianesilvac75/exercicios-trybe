// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...args) => {
    return args.reduce((acc, number) => acc + number);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));