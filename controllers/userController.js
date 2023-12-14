const { nanoid } = require("nanoid");
const { UserModel } = require("../models/userModel");

const getAllUsers = async (req, res) => {
  const users = await UserModel.find({});
  return res.send(users);
};

const getSingleUser = async (req, res) => {
  const user = await UserModel.find({ userId: req.params.id });
  return res.send(user);
};

const createUser = async (req, res) => {
  const { name, gender, address, mobile, skills } = req.body;
  const result = await UserModel.create({
    userId: nanoid(),
    name,
    gender,
    address,
    mobile,
    skills,
  });
  console.log(result);
  return res.send("Created");
};

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
};
