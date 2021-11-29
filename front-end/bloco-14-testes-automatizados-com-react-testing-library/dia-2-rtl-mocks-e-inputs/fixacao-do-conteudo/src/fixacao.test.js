const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;


test("#divisivelPorDois 1", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
  divisivelPorDois = jest.fn();

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});

test("#divisivelPorDois 2", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);
});

test("#divisivelPorDois 3", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});