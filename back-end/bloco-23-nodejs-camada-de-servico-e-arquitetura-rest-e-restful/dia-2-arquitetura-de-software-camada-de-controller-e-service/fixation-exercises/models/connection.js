const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'juliane',
  password: 'jzmsxx39',
  database: 'model_example'
});

module.exports = connection;