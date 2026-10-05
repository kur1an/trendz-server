const express = require("express");
const app = express();






app.use(express.urlencoded({extended:true}));

const productRoutes = require("./routes/productRoute");
app.use("/api/v1/products",productRoutes);

const userRoutes = require("./routes/userRoute");
app.use("/api/v1/users",userRoutes);


module.exports = app;