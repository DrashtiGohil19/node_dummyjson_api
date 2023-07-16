const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    todo:{type:String},
    completed:{type:String},
    userId:{type:String}

})

const todoModel = mongoose.model('todo',todoSchema)

module.exports = todoModel