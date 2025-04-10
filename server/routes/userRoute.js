const express = require("express");
const User = require("../model/userModel");
const { register, login, getCurrentUser } = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");

const userRouter = express.Router();

//register a user

userRouter.post("/register", register);

userRouter.post("/login", login); 

userRouter.get('/get-current-user', auth, getCurrentUser);

module.exports = userRouter;
