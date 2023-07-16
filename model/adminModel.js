const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    username:{ type:String },
    email:{ type:String },
    password:{ type:String },
    firstname:{ type:String },
    lastname:{ type:String },
    gender:{ type:String },

})

const userModel = mongoose.model('admin',adminSchema);

module.exports = userModel;