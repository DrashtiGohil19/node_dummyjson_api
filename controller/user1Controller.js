const productsModel = require('../model/productsModel');
var user1Model = require('../model/user1Model');
var cartModel = require('../model/cartModel');
const postModel = require('../model/postModel');
const todoModel = require('../model/todoModel');

// ===================== Add Users =====================

const allUsers = async (req, res) => {
    var data = await user1Model.create(req.body);
    res.status(200).json({
        status: "Succesfully added user",
        data
    })
}

// ==================== Get All Users ===================

const getUsers = async (req, res) => {
    limit1 = 30;
    skip = 0;
    var total = await user1Model.find().count();
    var data = await user1Model.find().skip(skip).limit(limit1);
    res.status(200).json({
        status: "Succesfully get all users",
        data,
        total,
        skip,
        limit1
    })
}

// ===================== Get Single User =====================

const singleUser = async (req, res) => {
    var id = req.params.id;
    var data = await user1Model.findById(id);
    res.status(200).json({
        status: "Succesfully Get one User",
        data
    })
}

// =================== Search User By Name ==================

const searchUser = async (req, res) => {
    var firstName = req.query.firstName;
    var data = await user1Model.find({ "firstName": firstName })
    res.status(200).json({
        status: "Succesfully find user",
        data
    })
}

// ================== Filter Users ==========================

const filterUser = async (req, res) => {
    var limit = 30;
    var key = req.query.key;
    var value = req.query.value;

    const data = await user1Model.find({ [key]: value }).limit(limit);
    var total = await user1Model.find({ [key]: value }).count();

    res.status(200).json({
        status: "Succesfully find user",
        data,
        total,
        limit
    })
}

// =================== Limit & Skip ====================

const limitSkipUser = async (req, res) => {
    var limit = req.query.limit;
    var skip = req.query.skip;
    var total = await user1Model.find().count();
    var data = await user1Model.find().skip(skip).limit(limit);
    res.status(200).json({
        status: "Success",
        data,
        total,
        limit,
        skip
    })
}

// ===================== Get Cart Of Users ===================

const allCart = async (req, res) => {
    var userId = req.body.userId;
    var id = req.params.id;
    var data = await productsModel.findById(id);
    var quantity = req.body.quantity;
    var total = (quantity * data.price);
    var discountprice = Math.round(total * data.discountPercentage / 100);
    var discountedTotal = Math.round(total - discountprice);
    if (data !== null) {
        var cart_obj = {
            product_id: data.id,
            title: data.title,
            price: data.price,
            quantity: quantity,
            total: total,
            discountPercentage: data.discountPercentage,
            discountprice: discountprice,
            discountedTotal: discountedTotal,
            userId: userId
        }
    }
    var cartdata = await cartModel.create(cart_obj);
    res.status(200).json({
        status: "Success",
        cartdata,
        userId,
        total,
        discountprice,
        discountedTotal,
    })
}

// ======================== Get User's Post By UserId ===================

const userPost = async (req,res) => {
    var id = req.params.id;
    var data = await postModel.find({ userId:id })
    res.status(200).json({
        status:"Succesfully get user's post",
        data
    })
}

// ======================= Get User's Todo =================

const userTodo = async (req,res) => {
    var id = req.params.id;
    var data = await todoModel.find({ userId:id })
    res.status(200).json({
        status:"Succesfully get user's todo",
        data
    })
}

// ======================== Update User ===================

const updateUser = async (req, res) => {
    var id = req.params.id;
    var updatedData = req.body;
    var data = await user1Model.findByIdAndUpdate(id, updatedData, { new: true })
    res.status(200).json({
        status: "Updated user data succesfully",
        data
    })
}

// =================== Delete User ========================

const deleteUser = async (req, res) => {
    var id = req.params.id;
    var isDeleted = false;
    var data = await user1Model.findByIdAndDelete(id);
    if (data) {
        isDeleted = true;
    }
    res.status(200).json({  
        status: "Succesfully deleted user",
        data,
        isDeleted
    })
}

module.exports = {
    deleteUser, updateUser, userTodo, userPost, allCart, allUsers, getUsers, singleUser, searchUser, filterUser, limitSkipUser
}