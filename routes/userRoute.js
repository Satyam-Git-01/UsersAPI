const express = require("express");
const {
  getAllUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const userRoute = express.Router();
userRoute.get("/", getAllUsers);
userRoute.post("/", createUser);
userRoute.get("/:id", getSingleUser);
userRoute.delete("/:id", deleteUser);
userRoute.patch("/:id", updateUser);

module.exports = userRoute;
