var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use('/assets/', express.static('assets'));
//app.set('routes', './app/routes');

consign().include('./app/routes').into(app);

module.exports = app;