'use strict';

// =================================
// Imports
// =================================
const express = require('express');
const cors = require ('cors');
const path = require ('path');
const fs = require('fs');
const config = require('./config/config');


const app = express();
const port = config.port;

const http = require('http').Server(app);


// =================================
// Routers
// =================================

const userRouter = require('./routes/user.route');



// =================================
// Middlewares
// =================================
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + '/dist/foroLoL/'));


app.use('/api/users', userRouter);


app.get('/', function (req, res) {
    res.send('BACKEND de IOT')
  })


// =================================
// =================================
// app.listen(port, () => console.log("http://localhost:" + port));
http.listen(port, () => console.log("http://localhost:" + port));


module.exports = app;