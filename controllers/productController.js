const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { productName, productDesc, productPhoto, productPrice } = req.body;

    if (!productName || !productDesc || !productPhoto || !productPrice) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "product added succesfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.getAllproducts = (req, res) => {
  res.send("Listig allproducts");
};
