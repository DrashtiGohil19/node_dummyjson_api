const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    product_id: { type: String },
    userId: { type: String },
    title: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    total: { type: Number },
    discountPrice: { type: Number },
    discountPercentage: { type:Number },
    discountedTotal:{ type:Number }

})

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;