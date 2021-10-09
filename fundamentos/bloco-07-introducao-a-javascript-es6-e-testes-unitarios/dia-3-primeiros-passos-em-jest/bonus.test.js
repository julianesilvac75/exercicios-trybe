const searchEmployee = require('./bonus.js');

describe('Testa a função searchEmployee', () => {
    it('Verifica se a função existe', () => {
        expect(typeof searchEmployee).toEqual('function');
    });
    it('Verifica  se a função retorna os resultados esperados', () => {
        expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
        expect(searchEmployee('5569-4', 'lastName')).toEqual('Jobs');
        expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    });
    it('Verifica se a função lança um erro caso o ID não conste no quadro de funcionários', () => {
        expect(() => searchEmployee('456-4', 'specialities')).toThrow();
        expect(() => searchEmployee(8579-6, 'firstName')).toThrow();
    });
    it('Verifica se a mensagem de erro caso o ID não conste no quadro é "ID não identificada"', () => {
        expect(() => searchEmployee('456-4', 'specialities')).toThrowError(new Error('ID não identificada'));
    });
    it('Verifica se a função lança um erro caso a informação que se quer acessar não exista', () => {
        expect(() => searchEmployee('5569-4', 'lastname')).toThrow();
        expect(() => searchEmployee('5569-4', 'primeiroNome')).toThrow();
    });
    it('Verifica se a mensagem de erro caso a informação não exista é "Informação indisponível"', () => {
        expect(() => searchEmployee('5569-4', 'primeiroNome')).toThrowError(new Error('Informação indisponível'));
    })
})