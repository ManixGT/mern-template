import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";
import userModel from "../models/user.model.js";

/**
 * Role-based authentication middleware
 * @param {'user' | 'admin'} role - Required role for access
 * @returns {Function} Express middleware
 */

const authMiddleware = (role) => {
  return async (req, res, next) => {
    //! 1. Token Extraction
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        error: "Missing or malformed authorization header",
      });
    }

    const token = authHeader.split(" ")[1];

    try {
      //! 2. Token Verification
      const secret =
        role === "admin"
          ? process.env.ADMIN_JWT_SECRET
          : process.env.USER_JWT_SECRET;

      //! jwt.verify(token, secret); is used to decode and verify a JWT token using the secret key.
      const decoded = jwt.verify(token, secret);
      //! also return you the values that you store inside the jwt token at creating time; jwt.sign({ id: admin._id },secret_token)
      console.log(decoded, "<---DECODED");

      //! 3. User/Admin Fetch
      const model = role === "admin" ? adminModel : userModel;

      const entity = await model.findById(decoded.id).select("-password -__v");
      console.log(entity, "<--ENTITY");

      if (!entity) {
        return res.status(401).json({
          success: false,
          error: `${role} not found or token invalid`,
        });
      }

      //! 4. Request Attachment
      req[role] = entity; // Consistent naming (req.admin or req.user)
      req.role = role; // Additional role context

      next();
    } catch (error) {
      //! 5. Error Handling
      let errorMessage = "Authentication failed";

      if (error.name === "TokenExpiredError") {
        errorMessage = "Token expired";
      } else if (error.name === "JsonWebTokenError") {
        errorMessage = "Invalid token";
      }

      console.error(`Auth Error (${role}):`, error.message);

      res.status(401).json({
        success: false,
        error: errorMessage,
      });
    }
  };
};

export default authMiddleware;
