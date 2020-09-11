const mongoose = require('mongoose')
const Todos= new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Todos',Todos)