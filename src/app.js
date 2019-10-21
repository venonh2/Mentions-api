const express = require('express');

//app
const app = express();


// LOad routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);


module.exports = app;