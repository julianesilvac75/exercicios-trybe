const { expect } = require('@jest/globals');
let randomNumber = require('./service');

describe('Testa a função randomNumber', () => {
  test('a função foi chamada', () => {
    randomNumber = jest.fn();
    randomNumber();

    expect(randomNumber).toHaveBeenCalled();
  });

  test('a função foi chamada 3 vezes', () => {
    randomNumber = jest.fn();

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(2);

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(3);
  });

  test('o retorno da função deve ser 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(12);
  })
})