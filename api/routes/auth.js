const router = require("express").Router();
const validate = require("../validation");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

router.get("/register", async (req, res) => {
  const { username, password } = req.body;
  // checking if username and password are valid
  const { error } = validate(req.body);
  if (error)
    return res
      .status(500)
      .json("password or username doesn't follow guidlines");

  // checking if user already made an account under the same name
  const user = await mongoose.findOne({ username: username });

  if (user) return res.status(500).json("username already exists");
});

module.exports = router;
