const mongoose = require('mongoose');

const user1Schema = new mongoose.Schema({

    firstName:{type:String},
    lastName:{type:String},
    maidenName:{type:String},
    age:{type:Number},
    gender:{type:String},
    email:{type:String},
    phone:{type:String},
    username:{type:String},
    password:{type:String},
    birthdate:{type:String},
    image:{type:String},
    bloodgroup:{type:String},
    height:{type:Number},
    weight:{type:String},
    eyeColor:{type:String},
    hair:{type:Array},

    domain:{type:String},
    ip:{type:String},
    address:{type:Array},

    macaddress:{type:String},
    university:{type:String},
    bank:{type:Array},

    company:{type:Array},

    ein:{type:String},
    ssn:{type:String},
    userAgent:{type:String}

})

const user1Model = mongoose.model('user1',user1Schema);

module.exports = user1Model;