const express = require("express");
const { createProduct, getAllproducts } = require("../controllers/productController");
const router = express.Router()


router.route("/create").post(createProduct);



router.route("/all").get(getAllproducts);
module.exports = router;