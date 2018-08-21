const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const users = require('./routes/users');
const products = require('./routes/products');

app.use(express.static(__dirname + '/src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);
app.use('/products', products);

http.createServer(app).listen(3000);

module.exports = app;
