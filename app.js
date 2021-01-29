const express = require('express')
const app = express()
const auth = require('./Routes/auth')
const post = require('./Routes/post')
const mongoose = require('mongoose')
const bd = require('body-parser')
require('dotenv').config();

mongoose.connect('mongodb://localhost/jwt', {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true })
    .then(() => console.log("connected"))
    .catch(err => console.error(err));

app.use(bd.urlencoded({extended: false}))
app.use(bd.json())
app.use('/api/user', auth);
app.use('/api/post',post);

app.listen(8021);

module.exports = app; // for testing