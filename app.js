var express = require('express');
var path = require('path');
var cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

var routeController = require('./routes/router.js');

const MONGODB_URI ='mongodb://localhost:27017/srk_database';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', routeController.init());

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true , useNewUrlParser: true})
  .then(result => {
      console.log('connected To Database...!!!')
  })
  .catch(err => {
    console.log(err);
  });


module.exports = app;

