const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

fullname:{
type:String,
minlength:[2,"user name should contain min 2 characters"],
required:[true,"Please enter User Name"]
},
email:{
type:String,
unique:[true,"Email already exists"],
minlength:[2,"user name should contain min 2 characters"],
required:[true,"Please enter  the email"]
},
password:{
type:String,
minlength:[2,"user name should contain min 2 characters"],
required:[true,"Please enter password"]
},
role:{
type:String,
enum:["admin","seller","user"],
default:"user"
},

status:{
type:Boolean,
default:true
},




});

const User = mongoose.model("User",userSchema);
module.exports = User;