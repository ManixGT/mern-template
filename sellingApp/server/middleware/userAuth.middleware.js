import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const userAuthMiddleware = async (req, res, next) => {
  let token;

  //! Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //! 1. Extract token [0]-Bearer [1]-token
      token = req.headers.authorization.split(" ")[1];

      //! 2. Verify token
      const decoded = jwt.verify(token, process.env.user_JWT_SECRET);

      //! 3. Attach user to request object, excluding password
      req.user = await userModel.findById(decoded.id).select("-password");

      //! 4. Proceed to controller
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({
      message: "Not authorized or correct user Bearer format, no token",
    });
  }
};

export default userAuthMiddleware;
