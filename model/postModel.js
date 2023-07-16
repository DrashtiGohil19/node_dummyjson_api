const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    title: { type: String },
    body: { type: String },
    userId: { type: String },
    tags: { type: Array },
    reactions: { type: Number }

})

const postModel = mongoose.model('post',postSchema);

module.exports = postModel  