const cartModel = require('../model/cartModel');
const productsModel = require('../model/productsModel');

// ========================= Add To Cart ===================

const addCart = async (req, res) => {

    var id = req.params.id;
    var userId = req.body.userId
    var productData = await productsModel.findById(id);
    var title = productData.title;
    var price = productData.price;
    var quantity = req.body.quantity;
    var total = (productData.price * quantity)
    var discountPercentage = productData.discountPercentage;
    var discountPrice = Math.round(total * productData.discountPercentage / 100);
    var discountedTotal = Math.round(total - discountPrice);
    if( productData !== null ) {
        var cart_obj = {
            product_id:id,
            title:title,
            price:price,
            quantity:quantity,
            total:total,
            discountPercentage:discountPercentage,
            discountPrice:discountPrice,
            discountedTotal:discountedTotal,
            userId:userId,
        }
    }
    var data = await cartModel.create(cart_obj);
    res.status(200).json({
        status:"Succesfully added cart",
        data
    })
}

// ====================== Get All Cart By User Id ==================

const getCart = async (req, res) => {
    const userId = req.params.id;
    var data = await cartModel.find({ userId: userId });
    var total = 0;
    var discountedTotal = 0;
    var totalQuantity = 0;
    var totalProduct = data.length;
    total = data.reduce((acc, item) => acc + item.total, 0);
    discountedTotal = data.reduce((acc, item) => acc + item.discountPrice, 0); 
    totalQuantity = data.reduce((qty, item) => qty + item.quantity, 0);
    res.status(200).json({
        status: "Cart of User",
        data,
        total,
        discountedTotal,
        userId,
        totalProduct,
        totalQuantity,
    });
};


// ====================== Get Single Cart ====================

const singleCart = async (req, res) => {
    var id = req.params.id;
    var data = await cartModel.findById(id);
    res.status(200).json({
        status: "Succesfully get single cart data",
        data
    })
}

// ===================== Get Cart Of Users =================

const cartUser = async (req, res) => {
    var userId = req.params.id;
    var data = await cartModel.find({ userId: userId });
    res.status(200).json({
        status: "Successfully find user cart",
        data
    })
}

// ==================== Update Cart =======================

const updateCart = async (req, res) => {
    var id = req.params.id;
    var updateData = req.body;
    var data = await cartModel.findByIdAndUpdate(id, updateData, { new: true })
    res.status(200).json({
        status: "Succesfully UpdatedData",
        data
    })
}

// =================== Delete Cart Data =================

const deleteCart = async (req, res) => {
    var id = req.params.id;
    var data = await cartModel.findByIdAndDelete(id);
    var isDeleted = false
    if (data) {
        isDeleted = true
    }
    res.status(200).json({
        status: "success",
        data,
        isDeleted
    })
}

module.exports = {
    getCart, addCart, singleCart, updateCart, cartUser, deleteCart
}