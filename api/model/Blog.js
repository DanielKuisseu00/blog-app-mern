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
    content: {
      type: String,
      required: [true, "you need some content to make a blog"],
    },
    author: {
      type: String,
      required: [true, "author is requied"],
    },
    date: {
      type: String,
      default: new Date().toDateString(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
