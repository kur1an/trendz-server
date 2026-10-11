const { generateToken } = require("../middlewares/auth");
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


exports.userLogin = async (req, res) => {
  try {
    // this page things
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please enter email and password",
      });
    }

    const user = await User.findOne({email}).select("+password");

if(!user){
return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });

}


const isPasswordMatched = await user.comparePassword(password);
if(!isPasswordMatched){
return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });

}


if(!user.status){
return res.status(401).json({
success:false,
message:"User is inactive"

});

}

const token = await generateToken(user._id, user.role);





const newUser = user.toObject();

delete newUser.password;


    res.status(200).cookie("token",token,{
httpOnly:true,
maxAge:1000 * 60 * 60 * 24 * 7
}).json({
      success: true,
      message: "User Logged succesfully",
      user:newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




exports.getAllusers = async(req, res) => {
  try {
    // this page things
    const users = await User.find();

    if (!users) {
      return res.status(404).json({
        success: false,
        message: "no users",
      });
    }




    res.status(200).json({
      success: true,
      message: "Listing users",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async(req, res) => {
  try {
const {id} = req.params;
 if (!id) {
      return res.status(400).json({
        success: false,
        message: "user id not found",
      });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "no users",
      });
    }




    res.status(200).json({
      success: true,
      message: "Listing users",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.updateUserRole = async(req, res) => {
  try {
const {id} = req.params;
const {role} = req.body;


    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found orwrong user id",
      });
    }


// tranfer to mongodob
user.role = role; 
await user.save();

    res.status(200).json({
      success: true,
      message: "User role updted succesfuly",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUserStatus = async(req, res) => {
  try {
const {id} = req.params;


    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found orwrong user id",
      });
    }


// tranfer to mongodob
user.status = !user.status; 
await user.save();

    res.status(200).json({
      success: true,
      message: "User status updted succesfuly",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

