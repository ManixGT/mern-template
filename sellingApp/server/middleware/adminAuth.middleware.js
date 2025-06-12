//? to make protected middleware routes meant only for admins.
import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";

const adminAuthMiddleware = async (req, res, next) => {
  let token;

  //! 1.Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //! 2.Extracting Bearer token with [1]
      token = req.headers.authorization.split(" ")[1];

      //! 3. Verify token
      const decoded = jwt.verify(token, process.env.admin_JWT_SECRET);

      //! 4. Attach user to request object, excluding password
      req.admin = await adminModel.findById(decoded.id).select("-password");

      next(); //! 5. Proceed to controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({
      message: "Not authorized or correct admin Bearer format, no token",
    });
  }
};

export default adminAuthMiddleware;
