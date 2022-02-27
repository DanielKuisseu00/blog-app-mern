const { bool } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username missing"],
      min: [4, "password too short"],
      max: [60, "password too long"],
    },
    password: {
      type: String,
      required: true,
      min: [4, "Password to short"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    blogs: {
      type: Array,
    },
    accessToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
