const commentModel = require('../model/commentModel');
const postModel = require('../model/postModel');
const user1Model = require('../model/user1Model');

// ====================== Add Post ====================

const allPost = async (req, res) => {
    var userId = req.params.id;
    var title = req.body.title;
    var body = req.body.body;
    var tags = req.body.tags;
    var reactions = req.body.reactions;
    var userData = await user1Model.findById(userId);
    if (userData !== null) {
        var postData = {
            title: title,
            body: body,
            userId: userData.id,
            tags: tags,
            reactions: reactions
        }
    }
    var data = await postModel.create(postData);
    res.status(200).json({
        status: "Succesfully added post data",
        data
    })
}

// ================== Get Single Post ===============

const singlePost = async (req, res) => {
    var id = req.params.id;
    var data = await postModel.findById(id);
    res.status(200).json({
        status: "Succesfully find post data",
        data
    })
}

// ============== Get All Post =======================

const getAllpost = async (req, res) => {
    var limit = 10;
    var skip = 0;
    var data = await postModel.find().skip(skip).limit(limit);
    var total = await postModel.find().count();
    res.status(200).json({
        status: "Succesfully get all post data",
        data,
        total,
        skip,
        limit
    })
}

// ================= Search Post ================

const searchPost = async (req, res) => {
    const search = req.query.search;
    const regex = new RegExp(search, 'i');
    var data = await postModel.find({ title: regex, body: regex, tags: regex });
    res.status(200).json({
        status: "Successfully find data",
        data
    });
};

// ================== Limit & Skip ==================

const limitPost = async (req, res) => {
    var limit = req.query.limit;
    var skip = req.query.skip;
    var data = await postModel.find().limit(limit).skip(skip);
    var total = await postModel.find().count();
    res.status(200).json({
        status: "Succesfully get data",
        data,
        total,
        limit, skip
    })
}

// ================== Get Post By UserId ==============

const findByUid = async (req, res) => {
    var userId = req.params.id;
    var data = await postModel.find({ userId: userId })
    res.status(200).json({
        status: "Succesfully find userId data",
        data
    })
}

// ================= Get Post Comments =============

const postComment = async (req, res) => {
    var id = req.params.id;
    var data = await commentModel.find({ postId: id })
    res.status(200).json({
        status: "Succesfully get post comment",
        data
    })
}

// ================= Update Post ==================

const updatePost = async (req, res) => {
    var update = req.body;
    var id = req.params.id;
    var data = await postModel.findByIdAndUpdate(id, update, { new: true })
    res.status(200).json({
        status: "Succesfully updated data",
        data
    })
}

// ===================== Delete Post =============

const deletePost = async (req, res) => {
    var isDeleted = false;
    var id = req.params.id;
    var data = await postModel.findByIdAndDelete(id);
    if (data) {
        isDeleted = true;
    }
    res.status(200).json({
        status: "Succesfully deleted data",
        data,
        isDeleted
    })
}
module.exports = {
    allPost, singlePost, getAllpost, searchPost, limitPost, findByUid, postComment, updatePost, deletePost
}