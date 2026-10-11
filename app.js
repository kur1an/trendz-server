const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");





app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

const productRoutes = require("./routes/productRoute");
app.use("/api/v1/products",productRoutes);

const userRoutes = require("./routes/userRoute");
app.use("/api/v1/users",userRoutes);

app.use((err,req,res,next)=>{
res.status(500).json({
success:false,
message:err.message

})

})


module.exports = app;