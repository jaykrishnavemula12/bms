const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "user already exists",
      });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "user registered successfully, please Login",
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("req receivied", req.body, user);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("token", token);
    if (!user) {
      return res.send({
        success: false,
        message: "User not found, please register",
      });
    }
    if (req.body.password != user.password) {
      return res.send({
        success: false,
        message: "Sorry Invalid password",
      });
    }
    return res.send({
      success: true,
      message: "Login Successful",
      data: token,
    });
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.body.userId).select("-password");

  res.send({
    success: true,
    message: "You are authorized to go to the protected route!",
    data: user,
  });
};

module.exports = {
  register,
  login,
  getCurrentUser,
};
