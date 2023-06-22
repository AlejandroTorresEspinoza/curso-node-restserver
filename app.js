//Ejemplo 1
/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)*/

//Ejemplo 2
/*require('dotenv').config();
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto ',process.env.PORT)
})*/

//Ejemplo 3
require('dotenv').config();
const Server = require('./models/server');
const server = new Server();
server.listen();