const express = require("express");
const userRoute = express.Router();
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  getOneUser,
} = require("../Controllers/userController");

userRoute.get("/user", getUsers);
userRoute.get("/user/:id", getOneUser);
userRoute.get("/user", postUser);
userRoute.get("/user/:id", putUser);
userRoute.get("/user/:id", deleteUser);

module.exports = userRoute;
