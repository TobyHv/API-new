const express = require('express');
const config = require('./config');

const clientes = require('./modules/clientes/rutas.js')

const app = express();

//CONFIGURACION
app.set('port', config.app.port)

//RUTAS
app.use('/api/clientes', clientes)

module.exports = app;