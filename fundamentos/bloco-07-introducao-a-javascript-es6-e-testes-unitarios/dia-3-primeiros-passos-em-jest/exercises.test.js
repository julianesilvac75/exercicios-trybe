const {
    sum,
    myRemove,
    myFizzBuzz,
    encode,
    decode
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

describe('Exercício 4', () => {
    it('Verifica se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });
    it('Verifica se a função encode converte as vogais a, e, i, o, u em 1, 2, 3, 4, 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
        expect(encode('uoiea')).toEqual('54321');
    });
    it('Verifica se a função decode converte os números 1, 2, 3, 4, 5 em a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toEqual('aeiou');
        expect(decode('54321')).toEqual('uoiea');
    });
    it('Verifica se as demais letras e números não são convertidas para cada caso', () => {
        expect(encode('bcdf')).toEqual('bcdf');
        expect(decode('67890')).toEqual('67890');
        expect(encode('Hello world')).toEqual('H2ll4 w4rld');
        expect(decode('H2ll4 w4rld')).toEqual('Hello world')
    })
    it('Verifica se a string retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('testando um dois').length).toBe(16);
        expect(decode('t2st1nd4 5m d43s').length).toBe(16);
        expect(encode('Hello world').length).toBe(11);
        expect(decode('H2ll4 w4rld').length).toBe(11);
    })
})