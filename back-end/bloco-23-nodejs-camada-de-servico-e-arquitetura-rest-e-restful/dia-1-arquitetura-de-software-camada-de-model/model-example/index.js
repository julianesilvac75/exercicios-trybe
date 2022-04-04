const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async(req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = await Book.getAll();

  if (!author_id || author_id === '') {
    return res.status(200).json(books);
  }

  const filteredBooks = await Book.getByAuthorId(author_id);

  res.status(200).json(filteredBooks);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});