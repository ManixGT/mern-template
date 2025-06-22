import userModel from "../../../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginController = async (req, res) => {
  const { email, password } = req.body;

  //! 1. Find user by email
  const user = await userModel.findOne({ email }); //? findOne() Returns a user/undefined; find() returns user/empty[];
  if (!user) {
    //? hence {user:True} on [] which gives you error. In JS all objects are truthy values.
    return res
      .status(400)
      .json({ message: "Email isn't in Database, create your account first" });
  }

  //! 2. Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  //! 3. Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.user_JWT_SECRET, {
    expiresIn: "1d",
  });

  //! 4. Send response with token
  res.status(200).json({
    message: "Login successful",
    userId: user._id,
    token,
  });
};

export default loginController;
