const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserModel = require("../models/user.model");
const blacklist = require("../blacklistToken");

const registerUser = async (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists." });
    }

    bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        res.status(500).send({ message: "Error while hashing password." });
      } else {
        const user = new UserModel({ userName, email, password: hash, role });
        await user.save();
        res.status(200).send({ message: "New user registered successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user) {
    try {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).send({ message: "Error while comparing password" });
        } else if (result) {
          const token = jwt.sign(
            { email: user.email, userName: user.userName, role: user.role },
            process.env.JWT_SECRET
          );
          res.status(200).send({ message: "User Login Successful", token });
        } else {
          res.status(401).send({ message: "Password Incorrect" });
        }
      });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong." });
    }
  } else {
    res.status(404).send({ message: "User not found. Register as new user." });
  }
};

const resetPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal error" });
  }
};

const logoutUser = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    blacklist.push(token);
    res.status(200).send({ message: "Logout Successful." });
  }
};

module.exports = { registerUser, loginUser, logoutUser, resetPassword };
