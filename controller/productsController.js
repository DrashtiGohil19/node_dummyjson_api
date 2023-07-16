var productsModel = require('../model/productsModel');

// ================== Add Products ==============

const allProducts = async (req, res) => {
    var data = await productsModel.create(req.body);
    res.status(200).json({
        status: "Succesfully added product",
        data
    })
}
// ================== Get All Products ===============

const GetProducts = async (req, res) => {
    var limit = 30;
    skip = 0;
    var total = await productsModel.find().count();
    var data = await productsModel.find().skip(skip).limit(limit);
    res.status(200).json({
        status: "Success",
        data,
        total,
        skip,
        limit
    })
}

// ================== Get Single Product ==================

const singleProduct = async (req, res) => {
    var id = req.params.id;
    var data = await productsModel.findById(id);
    res.status(200).json({
        status: "Succesfully get products",
        data
    })
}

// ================== Search Products ===================

const searchProduct = async (req, res) => {
    var title = req.query.title;
    var data = await productsModel.find({ "title": title })
    res.status(200).json({
        status: "Find product succesfully",
        data
    })
}

// ==================== Limit & Skip ==================

const LimitSkip = async (req, res) => {
    var limit = req.query.limit;
    var skip = req.query.skip;
    var total = await productsModel.find().count();
    var data = await productsModel.find().skip(skip).limit(limit);
    res.status(200).json({
        status: "Success",
        data,
        total,
        skip,
        limit
    })
}

// =================== Products Categories =====================

const categories = async (req, res) => {
    var data = await productsModel.distinct('category');
    res.status(200).json({
        status: "Get products category succesfully",
        data
    })
}

// =================== Search By Category =================

const searchCat = async (req, res) => {
    var category = req.query.category;
    var data = await productsModel.find({ "category": category })
    var total = await productsModel.find({ "category": category }).count();
    res.status(200).json({
        status: "Find product category succesfully",
        data,
        total,
    })
}

// =============== Update Single Product Data ============

const updateProduct = async (req, res) => {
    var title = req.body.title;
    var id = req.params.id;
    var data = await productsModel.findByIdAndUpdate({ id: id, title: title })
    res.status(200).json({
        status: "Updated product title succesfully",
        data
    })
}

// ================ Delete Single Product Data =========== 

const DeleteProduct = async (req, res) => {
    var id = req.params.id;
    var isDeleted = false;
    var data = await productsModel.findByIdAndDelete(id);
    if (data) {
        isDeleted = true;
    }
    res.status(200).json({
        status: "Deleted product succesfully",
        data,
        isDeleted
    })
}

module.exports = {
    updateProduct, DeleteProduct, searchCat, categories, LimitSkip, searchProduct, singleProduct, GetProducts, allProducts
}