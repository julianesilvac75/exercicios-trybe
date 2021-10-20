// 7 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// uppercase('teste', console.log)

test('Verifica se a chamada da função uppercase tem o retorno esperado', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toMatch('TESTE');
      done();
    } catch (error) {
      done(error);
    }
  })
})