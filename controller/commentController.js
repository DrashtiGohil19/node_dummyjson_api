const commentModel = require('../model/commentModel');
const postModel = require('../model/postModel');
const user1Model = require('../model/user1Model');

// =============== Add Comment =====================

const addComment = async (req,res) => {
    var id = req.params.id;
    var body = req.body.body;
    var postData = await postModel.findById(id);
    var userId = postData.userId
    var userData = await user1Model.findById(userId)
    var cmt_obj = {
        body:body,
        postId:postData.id,
        user :{
            userId:postData.userId,
            username:userData.username
        }
    }
    var data = await commentModel.create(cmt_obj);
    res.status(200).json({
        status:"Succesfully added comment data",
        data
    })
}

// ===================== Get All Comments =================

const allComment = async (req,res) => {
    var limit = 10;
    var skip = 0;
    var data = await commentModel.find().skip(skip).limit(limit);
    var total = await commentModel.find().count();
    res.status(200).json({
        status:"Succesfully get comments data",
        data,
        total,
        limit,
        skip
    })
}

// ======================= Get Single Comment ===================

const singleComment = async (req,res) => {
    var id = req.params.id;
    var data = await commentModel.findById(id);
    res.status(200).json({
        status:"succesfully find comment data",
        data
    })
}

// ====================== Limit & Skip ==================

const limitComment = async (req,res) => {
    var limit = req.query.limit;
    var skip = req.query.skip;
    var data = await commentModel.find().skip(skip).limit(limit);
    var total = await commentModel.find().count();
    res.status(200).json({
        status:"Succesfully get comment data",
        data,
        total,limit,skip
    })
}

// =================== Get Comment By Post Id =============

const commentByPid = async (req,res) => {
    var id = req.params.id;
    var data = await commentModel.find({ postId:id })
    res.status(200).json({
        status:"Succesfully find data by postId",
        data
    })
}

// ================= Update Comment =================

const updateComment = async (req,res) => {
    var id = req.params.id;
    var updateData = req.body;
    var data = await commentModel.findByIdAndUpdate(id,updateData, { new:true });
    res.status(200).json({
        status:"Succesfullt updated comment data",
        data
    })
}

// ===================== Delete Comment ================

const DeleteComment = async (req,res) => {
    var id = req.params.id;
    var isDeleted = false;
    var data = await commentModel.findByIdAndDelete(id);
    if (data) {
        isDeleted = true;
    }
    res.status(200).json({
        status:"Succesfully deleted comment data",
        data,
        isDeleted
    })
}

module.exports = {
    addComment, allComment, singleComment, limitComment, commentByPid, updateComment, DeleteComment
}