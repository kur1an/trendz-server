const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    // this page things
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const user = await User.create(req.body);

const newUser = user.toObject();

delete newUser.password;


    res.status(201).json({
      success: true,
      message: "User added succesfully",
      user:newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllusers = (req, res) => {
  res.send("Listing all Users");
};
