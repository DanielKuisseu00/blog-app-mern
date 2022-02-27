const router = require("express").Router();
const validate = require("../util/validation");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const { genAccessToken, genRefreshToken } = require("../util/genToken");
const Tokens = require("../model/Tokens");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // checking if username and password are valid
  const { error } = validate(req.body);
  if (error)
    return res
      .status(500)
      .json("password or username doesn't follow guidlines");

  // checking if user already made an account under the same name
  const foundUser = await User.findOne({ username: username });

  if (foundUser) return res.status(500).json("username already exists");

  // hashing user password
  const salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, salt);

  // creating user document
  const user = new User({
    username: username,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    const accessToken = genAccessToken(savedUser);
    const refreshToken = genRefreshToken(savedUser);

    //   saving refresh token to db
    const tokens = new Tokens({
      token: refreshToken,
    });

    const savedToken = await tokens.save();

    return res.status(200).json({ savedUser, accessToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // validating input
  const { error } = validate(req.body);

  if (error)
    return res.status(500).json("username or password not formated correctly");

  // checking db for user
  const foundUser = await User.findOne({ username: username });

  if (!foundUser)
    return res.status(500).json("user doesn't exist in system, please signup");

  // checking password

  const correctPassword = await bcrypt.compare(password, foundUser.password);

  if (!correctPassword)
    return res.status(500).json("password or username incorect");

  // creating tokens
  const accessToken = genAccessToken(foundUser);
  const refreshToken = genRefreshToken(foundUser);

  // saving refresh token to db
  const tokens = new Tokens({
    token: refreshToken,
  });

  await tokens.save();

  return res.status(200).json({ foundUser, accessToken, refreshToken });
});

router.post("/refresh", async (req, res) => {
  const refreshToken = req.body.token;

  // validating token
  if (!refreshToken) return res.status(500).json("missing token");

  const foundToken = await Tokens.findOne({ token: refreshToken });

  if (!foundToken) return res.status(500).json("token not found in db");

  jwt.verify(refreshToken, process.env.JWT_KEY, (err, user) => {
    if (err) return res.status(500).json("token not valid");

    await Tokens.deleteOne({ token: foundToken });
  });
});

module.exports = router;
