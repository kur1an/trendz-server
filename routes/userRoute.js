const express = require("express");
const { getAllusers, createUser } = require("../controllers/userController");

const router = express.Router()

router.route("/signup").post(createUser)

router.route("/allusers").get(getAllusers);



module.exports = router;