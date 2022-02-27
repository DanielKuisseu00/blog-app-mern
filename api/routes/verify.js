const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.auhtorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) return res.status(500).json("token is invalid");

      req.user = user;
      next();
    });
  } else {
    return res.status(500).json("you're not auhtorized");
  }
};

module.exports = verify;
