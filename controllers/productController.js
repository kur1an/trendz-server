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


exports.updateProduct = async (req, res) => {

  try {
const {id} = req.params;

    const { productName, productDesc, productPhoto, productPrice } = req.body;

    if (!productName || !productDesc || !productPhoto || !productPrice) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

if(!id) {
return res.status(400).json({
success:false,
message:"Product ID  is missing"

});

}


    const product = await Product.findByIdAndUpdate(id,req.body);

if(!product){
return  res.status(404).json({
      success:false,
    message:"Product not found or wrog product id"

});

}


    res.status(200).json({
      success: true,
      message: "product Updated succesfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};


exports.getAllproducts = async (req, res) => {
  try {
    const products = await Product.find();
if(!products){
return res.status(404).json({
success:false,
message:"Products not found"

});

}
res.status(200).json({
 success:true,
products
});

  } catch (error) {

res.status(500).json({
success:false,
message:error.message


})
    
  }



};



exports.deleteProduct = async(req, res) => {
  try {
const {id} = req.params;
 if (!id) {
      return res.status(400).json({
        success: false,
        message: "Poductr id not found",
      });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "no product",
      });
    }




    res.status(200).json({
      success: true,
      message: "Listing users",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
