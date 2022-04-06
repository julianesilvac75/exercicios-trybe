const sinon = require('sinon');
const { expect } = require('chai');

// // Como ainda não temos a implementação, vamos fixar um objeto simulando os métodos que iremos desenvolver, porém, eles não terão nenhum comportamento:
// const MoviesModel = {
//   create: () => {}
// };

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  // Implementa o stub (mock) antes de cada teste:
  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado neste teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // restaura a função `execute` original após os teste:
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});