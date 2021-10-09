const {
    sum,
    myRemove,
    myFizzBuzz
} = require('./exercises.js');

describe('Exercício 1', () => {
    it('Verifica se o retorno de sum(4,5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('Verifica se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Verifica se a função aceita apenas números', () => {
        expect(() => sum(4, '5')).toThrow();
    });
    it('Verifica a mensagem de erro', () => {
        expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'))
    })
})

describe('Exercício 2', () => {
    it('Verifica se a função retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})

describe('Exercício 3', () => {
    it('Verifica se a chamada da função com um número divisível por 3 e por 5 retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
        expect(myFizzBuzz(30)).toEqual('fizzbuzz');
    });
    it('Verifica se a chamada da função com um número divisível apenas por 3 retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
        expect(myFizzBuzz(18)).toEqual('fizz');
    });
    it('Verifica se a chamada da função com um número divisível apenas por 5 retorna "buzz"', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
        expect(myFizzBuzz(20)).toEqual('buzz');
    });
    it('Verifica se a chamada da função com um número não divisível por 3 e por 5 retorna o próprio número', () => {
        expect(myFizzBuzz(16)).toBe(16);
        expect(myFizzBuzz(202)).toBe(202);
    });
    it('Verifica se a função retorna false caso o parâmetro não seja um número', () => {
        expect(myFizzBuzz('teste')).toBeFalsy();
        expect(myFizzBuzz(true)).toBeFalsy();
    })
})