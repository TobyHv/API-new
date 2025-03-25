const express = require('express');
const morgan = require('morgan')
const config = require('./config');

const clientes = require('./modules/clientes/rutas.js');
const error = require('./red/errors.js');

const app = express();

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//CONFIGURACION
app.set('port', config.app.port)

//RUTAS
app.use('/api/clientes', clientes)
app.use(error);

module.exports = app;