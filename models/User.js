const mongoose = require("mongoose");

const bcrypt = require("bcrypt");



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
required:[true,"Please enter password"],
select:false,
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


userSchema.pre("save", async function(){

if(!this.isModified("password")) return;
this.password = await bcrypt.hash(this.password, 10);

});

userSchema.methods.comparePassword = async function(enteredPasword){

return await bcrypt.compare(enteredPasword,this.password);
}


const User = mongoose.model("User",userSchema);
module.exports = User;