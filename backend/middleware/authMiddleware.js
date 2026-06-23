const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // check if token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "secretkey123");

      req.user = decoded; // attach user id to request

      next();
    } catch (error) {
      return res.status(401).json({ message: "Token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }
};

module.exports = protect;