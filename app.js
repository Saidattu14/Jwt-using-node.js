const express = require('express')
const app = express()
const auth = require('./Routes/auth')
const mongoose = require('mongoose')
const bd = require('body-parser')
mongoose.connect('mongodb://localhost/jwt', {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true })
    .then(() => console.log("connected"))
    .catch(err => console.error(err));

app.use(bd.urlencoded({extended: false}))
app.use(bd.json())
app.use('/api/user', auth);


app.listen(5008);