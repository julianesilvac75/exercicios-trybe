const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );

  return books;
};

const getById = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE id = ?';
  const [book] = await connection.execute(query, [id]);

  if(!book.length) return null;

  return book[0];
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT id, title FROM model_example.books
    WHERE author_id = ${id};`
  );

  return books;
};

module.exports = {
  getAll,
  getById,
  getByAuthorId,
};