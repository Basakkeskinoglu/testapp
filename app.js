const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knexfile');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/',(req, res) =>{
  const sqlq=knex('users').select('*');
  console.log(sqlq.then(data => {res.send(data)}) )});
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})