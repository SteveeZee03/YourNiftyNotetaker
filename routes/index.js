
const express = require('express');
const routerNotes = require('./notes');

const app = express();

app.use('/notes', routerNotes);



module.exports = app;