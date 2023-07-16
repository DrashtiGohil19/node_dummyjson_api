const quoteModel = require('../model/quoteModel')

// ================= Add Quote ==================

const addQuote = async (req,res) => {
    var data = await quoteModel.create(req.body);
    res.status(200).json({
        status: "Successfully added quote",
        data
    })
}

// ===================== Get All Quote ====================

const getQuote = async (req,res) => {
    var limit = 10;
    var skip = 0;
    var data = await quoteModel.find();
    var total = await quoteModel.find().count();
    res.status(200).json({
        status: "Succesfullt get quote data",
        data,
        total,
        limit,
        skip
    })
}

// ===================== Get Single Quote =====================

const singleQuote = async (req,res) => {
    var id = req.params.id;
    var data = await quoteModel.findById(id);
    res.status(200).json({
        status:"Succesfully get single quote",
        data
    })
}

// ======================= Random Quote ==================

const randomQuote = async (req,res) => {
    var quoteData = await quoteModel.find();
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    const randomData = quoteData[randomIndex];
    res.status(200).json({
        status:"Succesfully get random data",
        randomData
    })
}

// ====================== Limit & Skip ================

const limitQuote = async (req,res) => {
    var limit = req.query.limit;
    var skip = req.query.skip;
    var data = await quoteModel.find().limit(limit).skip(skip);
    var total = await quoteModel.find().count();
    res.status(200).json({
        status:"Succesfully get data",
        data,
        total,
        limit,
        skip
    })
}

module.exports = {
    addQuote, getQuote, singleQuote, randomQuote, limitQuote
}