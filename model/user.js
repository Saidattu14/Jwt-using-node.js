const mongoose = require('mongoose')

const Schema_user = new mongoose.Schema({
    name: {
        type: String,
        min :  8,
        max : 65,
        required: true,
       
    },
    email : {
        type : String,
        required: true, 
    
    },
    password : {
        type:  String,
        min : 8,
        required: true,
    },
});

module.exports =  mongoose.model('User',Schema_user);