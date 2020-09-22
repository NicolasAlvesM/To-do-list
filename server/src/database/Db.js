const mongoose = require('mongoose')
const Todos= new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:false
    }
})

module.exports = mongoose.model('Todos',Todos)