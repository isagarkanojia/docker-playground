const User = require("../models/userModel");

const bcrypt = require("bcryptjs");
const e = require("express");

exports.signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.logIn = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  try {
    if (!user) {
      res.status(400).json({
        status: "failed",
        message: "user not found",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: "incorrect username or password",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: req.body,
    });
  }
};
