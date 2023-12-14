//const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: false,
  }
);
const UserModel = model("users", UserSchema);

module.exports = {
  UserModel,
};
