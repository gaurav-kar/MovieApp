const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //Check Token exists
  const token = req.header("authorization");
  if (!token) return res.status(401).send("Access Denied");

  //Check Token Validity
  try {
    const isValid = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = isValid;
    next();
  } catch {
    res.status(400).send("Invalid Token");
  }
};
