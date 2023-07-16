const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    body:{type:String},
    postId:{type:String},
    user:{
        userId:{type:String},
        username:{type:String}
    }

})

const commentModel = mongoose.model('comment',CommentSchema)

module.exports = commentModel