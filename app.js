const express = require('express');

const app = express();
const object = {};

const databaseRouter = require('./src/routes/databaseRoute');

app.use('/', databaseRouter);

module.exports = app;
