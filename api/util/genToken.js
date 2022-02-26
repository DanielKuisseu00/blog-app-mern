const jwt = require("jsonwebtoken");

const genAccessTOken = (user) => {
  return jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_KEY,
    { expiresIn: "15m" }
  );
};

const genRefreshTOken = (user) => {
  return jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_KEY,
    { expiresIn: "15m" }
  );
};

exports.genAccessTOken = genAccessTOken;
exports.genRefreshTOken = genRefreshTOken;
