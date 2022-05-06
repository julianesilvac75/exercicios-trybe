const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const {SET_ENV} = process.env || 'Algo deu errado :(';

app.get('/', (req, res) => {
  res.send(`Está vivo!!! Essa é a variável do exercício 2: ${SET_ENV}`);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
