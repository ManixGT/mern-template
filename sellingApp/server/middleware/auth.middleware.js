import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";
import userModel from "../models/user.model.js";

/**
 * Creates an authentication middleware for the specified role.
 * @param {'user' | 'admin'} role
 * @returns Express middleware function
 */

const authMiddleware = (role) => {
  return async (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const secret =
          role === "admin"
            ? process.env.admin_JWT_SECRET
            : process.env.user_JWT_SECRET;

        const decoded = jwt.verify(token, secret);

        const model = role === "admin" ? adminModel : userModel;
        const key = role === "admin" ? "admin" : "user";

        //?  4. Attaching user/admin information to the request object / Attaching authenticated entity data to the request object ->
        //!  Here Attaching user to request object & excluding password;Makes the admin’s information available to all middleware and route handlers that come after `adminAuthMiddleware` in the request chain
        //!  Without attaching the admin to `req`, your protected routes wouldn’t know who the current admin is ,making authorization and personalization much harder and less efficient.
        req[key] = await model.findById(decoded.id).select("-password");

        if (!req[key]) {
          return res.status(401).json({ message: `No ${role} found` });
        }

        next();
      } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Not authorized, token failed" });
      }
    } else {
      res.status(401).json({
        message: "Not authorized or incorrect Bearer format, no token",
      });
    }
  };
};

export default authMiddleware;
