const {
    sum,
    myRemove
} = require('./exercicios.js')

describe('Exercício 1 - soma', () => {
    it('Verifica se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('Verifica se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Verifica se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
        expect( () => {sum(4, "5")}).toThrow();
    });
    it('Verifica se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect( () => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'))
    });
})

describe('Exercício 2 - remover', () => {
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array sem o número 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o mesmo array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})
