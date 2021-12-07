let {randomNumber} = require('./service');

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
  test('', () => {
    randomNumber.mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber(4, 2)).not.toBe(2);

  })
})