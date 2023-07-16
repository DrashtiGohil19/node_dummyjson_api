const todoModel = require('../model/todoModel');
const user1Model = require('../model/user1Model');

// ================== Add Todo ===================

const addTodo = async (req,res) => {
    var id = req.params.id;
    var userData = await user1Model.findById(id);
    var todo = req.body.todo;
    var completed = req.body.completed;
    var todo_obj = {
        todo:todo,
        completed:completed,
        userId:userData.id
    }
    var data = await todoModel.create(todo_obj);
    res.status(200).json({
        status:"Succesfully added todo data",
        data
    })
}

// ======================= Get All Todos =====================

const getTodo = async (req,res) => {
    var limit = 10;
    var skip = 0;
    var data = await todoModel.find();
    var total = await todoModel.find().count();
    res.status(200).json({
        status:"Succesfully get todo data",
        data,
        total,
        skip,
        limit
    })
}

// ================ Get Single Todo ====================

const singleTodo = async (req,res) => {
    var id = req.params.id;
    var data = await todoModel.findById(id);
    res.status(200).json({
        status:"Succesfully find single data",
        data
    })
}

// =================== Random Todo ======================

const randomTodo = async (req,res) => {
    const todoData = await todoModel.find();
    const randomIndex = Math.floor(Math.random() * todoData.length);
    const randomData = todoData[randomIndex];
    res.status(200).json({
        status:"Succesfully get random data",
        randomData
    })

}

//=================== Limit & Skip ====================

const limitTodo = async (req,res) => {
    var limit = req.query.limit;
    var skip = req.query.skip;
    var data = await todoModel.find().limit(limit).skip(skip);
    var total = await todoModel.find().count();
    res.status(200).json({
        status:"Succesfully get data",
        data,
        total,
        limit,
        skip
    })
}

// ========================= Get All Todo By UserId =====================

const todoUid = async (req,res) => {
    var id = req.params.id;
    var data = await todoModel.find({ userId:id })
    res.status(200).json({
        status:"Succesfully get user todo",
        data
    })
}

// ====================== Update Todo ==================

const updateTodo = async (req,res) => {
    var updateData = req.body;
    var id = req.params.id;
    var data = await todoModel.findByIdAndUpdate(id,updateData, { new:true })
    res.status(200).json({
        status:"Succesfullt updated todo data",
        data
    })
}

// ====================== Delete Todo ========================

const deleteTodo = async (req,res) => {
    var id = req.params.id;
    var data = await todoModel.findByIdAndDelete(id);
    var isDeleted = false;
    if (data) {
        isDeleted = true;
    }
    res.status(200).json({
        status:"Succesfully deleted data",
        data,
        isDeleted
    })
}


module.exports = {
    addTodo, getTodo, singleTodo, randomTodo, limitTodo, todoUid, updateTodo, deleteTodo

}