// const express = require('express');

// const app = express();

// app.get('/hello', handleHelloWorldRequest);

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World! Eu sou uma página.');
// }

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.listen(3001, () => {
  console.log(('Aplicação ouvindo na porta 3001'));
});