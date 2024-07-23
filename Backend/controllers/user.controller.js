const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserModel = require("../models/user.model");
const blacklist = require("../blacklistToken");

const registerUser = (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        res.status(500).send({ message: "Error while hasing password." });
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
            { email: user.email, userName: email.userName, role: user.role },
            process.env.JWT_SECRET
          );
          res.status(200).send({ message: "User Login Successful", token });
        } else {
          res.status(200).send({ message: "Password Incorrect" });
        }
      });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong." });
    }
  } else {
    res.status(200).send({ message: "User not found. Register as new user." });
  }
};

const logoutUser = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    blacklist.push(token);
    res.status(200).send({ message: "Logout Successful." });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
