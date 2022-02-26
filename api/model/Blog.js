const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      min: [4, "title too short "],
    },
    subtitle: {
      type: String,
      required: [true, "subtitle required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    author: {
      type: String,
      required: [true, "author is requied"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);