const express = require("express");
const userModel = require("../model/user.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, number, password } = req.body;
    const hashed = await bcrypt.hash(password, 5);
    const user = new userModel({
      name,
      email,
      number,
      password: hashed,
    });
    await user.save();
    res.json({ message: "User Registration Successfull" });
  } catch (error) {
    res.json({ message: "Error While Registering New User ", error });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const passChecked = await bcrypt.compare(password, user.password);
    if (!passChecked) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      { username: user.name, id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login Successfull", token });
  } catch (error) {
    res.status(500).json({ message: "Error While Logging In", error });
  }
});

module.exports = userRouter;
