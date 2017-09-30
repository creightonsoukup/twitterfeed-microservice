"use strict";
require('dotenv').config()
const path = require("path"),
    express = require("express"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    PORT = process.env.PORT || 3000,
    app = express(),
    routes = require('./routes');

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("*", routes);

app.listen(PORT);

module.exports = app;
