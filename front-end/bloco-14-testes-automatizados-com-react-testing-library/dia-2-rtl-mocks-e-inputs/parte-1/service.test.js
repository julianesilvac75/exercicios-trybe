let {randomNumber, upperText, firstLetter, joinStrings, dogPicturesAPI} = require('./service');
// const service = require('./service');
jest.mock('./service');

const RESPONSE = {
  "message": "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_14522.jpg",
  "status": "success"
};

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

describe('Exercício 5', () => {
  // referência:https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/solutions/96709d24-8962-42f8-9318-a5dac56aacc5/exercicios/9188582b-4426-4a99-a0fd-f0244162dd8f?use_case=calendar
  dogPicturesAPI = jest.fn();
  afterEach(dogPicturesAPI.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    dogPicturesAPI.mockResolvedValue("request sucess");

    dogPicturesAPI();
    expect(dogPicturesAPI).toHaveBeenCalled();
    expect(dogPicturesAPI).toHaveBeenCalledTimes(1);
    await expect(dogPicturesAPI()).resolves.toBe("request sucess");
    expect(dogPicturesAPI).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    dogPicturesAPI.mockRejectedValue("request failed");

    expect(dogPicturesAPI).toHaveBeenCalledTimes(0);
    await expect(dogPicturesAPI()).rejects.toMatch("request failed");
    expect(dogPicturesAPI).toHaveBeenCalledTimes(1);
  });
})
