const mongoose = require('mongoose');

let productSchema=mongoose.Schema({
    productName:String,
    productPrice:Number,
    description:String,
    category:String,
    discountPercentage:Number,
    quantity:Number,
    productImg:String,
    rating:Number,
    brand:String
})

module.exports=mongoose.model('Product',productSchema)