const router = require("express").Router();
const validate = require("../util/validation");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const { genAccesToken, genRefreshToken } = require("../util/genToken");

router.get("/register", async (req, res) => {
  const { username, password } = req.body;

  // checking if username and password are valid
  const { error } = validate(req.body);
  if (error)
    return res
      .status(500)
      .json("password or username doesn't follow guidlines");

  // checking if user already made an account under the same name
  const user = await User.findOne({ username: username });

  if (user) return res.status(500).json("username already exists");

  // hashing user password
  const salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, salt);

  // creating user document
});

module.exports = router;
