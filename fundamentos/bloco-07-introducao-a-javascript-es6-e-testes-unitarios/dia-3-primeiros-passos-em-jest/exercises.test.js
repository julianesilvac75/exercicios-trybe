const {
    sum,
    myRemove
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