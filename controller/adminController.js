var adminModel = require('../model/adminModel');
var jwt = require('jsonwebtoken');

const register = async (req, res) => {
    var data = await adminModel.create(req.body);
    res.status(200).json({
        status: "Success",
        data
    })
}

const login = async (req, res) => {
    var data = await adminModel.find({ "email": req.body.email });
    if (data.length > 0) {
        if (data[0].password == req.body.password) {
            var token = jwt.sign({ id:data[0].id }, "dummyjson");
            res.status(200).json({
                status: "Success",
                token
            })
        }
    }
}

module.exports = {
    register,login
}