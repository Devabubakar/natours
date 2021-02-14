const express = require('express');
const morgan = require('morgan');
const path = require('path');
const pug = require('pug');

const app = express();

// middleware
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'));
}

// handles view engines
app.set('view engines', 'pug');
app.set('views', path.join(__dirname, 'views'));
// handles static files
app.use(express.static(path.join(__dirname, 'Public')));

module.exports = app;
