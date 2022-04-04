const connection = require('./connection');
const Author = require('./Author');

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

const validateTitle = (title) => {
  if (!title || title.length < 3) return false;

  return true;
};

const validateAuthorId = async (author_id) => {
  if (!author_id) return false;

  const author = await Author.findById(author_id);

  if (!author) return false;

  return true;
};

const create = async (title, author_id) => {
  await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, author_id]
  );
}

module.exports = {
  getAll,
  getById,
  getByAuthorId,
  validateTitle,
  validateAuthorId,
  create,
};