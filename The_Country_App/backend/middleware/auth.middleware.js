const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .send({ message: "Token is not Avaialable in the headers " });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        return res.status(401).send({ message: "Invalid Token " });
      }
      req.user = decode;
      next();
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};


module.exports = auth ;