const jwt = require("jsonwebtoken");

const fetchUser = (req,res,next)=>{
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  jwt.verify(token,"Locatesy", (err, user) => {
      delete user["iat"];
      if (err) return res.Status(403).json({error : err});
      req.user = user.user;
      next();
    });
}

module.exports = fetchUser;
