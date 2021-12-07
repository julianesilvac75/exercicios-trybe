let {randomNumber, upperText, firstLetter, joinStrings} = require('./service');
// const service = require('./service');
jest.mock('./service');

describe('Exercício 1', () => {
  test('Testa se a função foi chamada', () => {
    randomNumber = jest.fn();
    randomNumber();

    expect(randomNumber).toHaveBeenCalled();
  });

  test('Testa se a função foi chamada 3 vezes', () => {
    randomNumber = jest.fn();

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(2);

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(3);
  });

  test('Testa se o retorno da função é 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
  });
});

describe('Exercício 2', () => {
  test('Testa a implementação de divisão na função', () => {
    randomNumber.mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(4, 2)).toBe(2);
  });
  test('Testa se a implementação de divisão acontece apenas uma vez', () => {
    expect(randomNumber(4, 2)).not.toBe(2);
  });
});

describe('Exercício 3', () => {
  test('Testa a implementação de multiplicação', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);
    randomNumber(4, 2, 3);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber(4, 2, 3)).toBe(24);
    expect(randomNumber(2, 2, 2)).toBe(8);
  });
  test('Testa a implementação de dobro', () => {
    randomNumber.mockReset();

    randomNumber.mockImplementation((a) => a * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber(5)).toBe(10);
  });
});

// Exercício 4 --- resolver problema, está no arquivo teste.test.js

