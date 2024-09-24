const jwt = require("jsonwebtoken");
const blacklist = require("../blacklistToken");

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(403).send({ message: "You are not authorised." });
  } else if (blacklist.includes(token)) {
    res.status(200).send({ message: "You have signed out. Please login" });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(500).send({ message: "Error while verifying token" });
      } else {
        req.body.role = decoded.role;
        req.body.user_id = decoded._id;
        next();
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong." });
  }
};

module.exports = auth;
