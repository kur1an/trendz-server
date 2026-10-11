const express = require("express");
const { createProduct, getAllproducts, deleteProduct, updateProduct } = require("../controllers/productController");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router()


router.route("/create").post(verifyToken, createProduct);



router.route("/all").get(getAllproducts);


router.route("/:id").delete(deleteProduct).put(updateProduct);
module.exports = router;