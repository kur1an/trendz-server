const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

productName:{
type:String,
minlength:[2,"Product name should contain min 2 characters"],
required:[true,"Please enter product Name"]
},
productPrice:{
type:Number,
minlength:[2,"Product name should contain min 2 characters"],
required:[true,"Please enter product Price"]
},
productDesc:{
type:String,
minlength:[2,"Product name should contain min 2 characters"],
required:[true,"Please enter product Description"]
},
productPhoto:{
type:String,
minlength:[2,"Product name should contain min 2 characters"],
required:[true,"Please enter product Photo url"]
},



});

const Product = mongoose.model("Product",productSchema);
module.exports = Product;