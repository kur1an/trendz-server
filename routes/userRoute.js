const express = require("express");
const { getAllusers, createUser, deleteUser, userLogin, updateUserRole, updateUserStatus } = require("../controllers/userController");

const router = express.Router()

router.route("/signup").post(createUser)

router.route("/allusers").get(getAllusers);

router.route("/:id").delete(deleteUser);

router.route("/login").post(userLogin);


router.route("/role-updated/:id").patch(updateUserRole);


router.route("/status-updated/:id").patch(updateUserStatus);


module.exports = router;