const express = require('express');
const mongoose = require('mongoose'); // para usar o mongoose como gerenciador
require('dotenv').config();

//app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database, configurando para conectar no atlas
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { // veja ele dando permissão para criar classes e alterar
    useNewUrlParser: true,
    //   useFindAndModify: true,
    //   useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open')
});

db.on('error', err => {
    console.log(`Mongoose default connection has ocurred \n ${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connnection is disconnected due to application termination')
    });
    process.exit(0);
});
// load models,  esta importando o mentions para que todo o programa passo usalo
const Mentions = require('./models/mentions');

// LOad routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes); // veja que esse é o index, então só é /

const mentionsRoutes = require('./routes/mentions-routes');
app.use('/mentions', mentionsRoutes);


module.exports = app;