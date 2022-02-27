const jwt = require("jsonwebtoken");

const genAccessToken = (user) => {
  return jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_KEY,
    { expiresIn: "15m" }
  );
};

const genRefreshToken = (user) => {
  return jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_KEY,
    { expiresIn: "15m" }
  );
};

exports.genAccessToken = genAccessToken;
exports.genRefreshToken = genRefreshToken;
