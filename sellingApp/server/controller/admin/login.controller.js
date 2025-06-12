import adminModel from "../../models/admin.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginController = async (req, res, next) => {
  //! collecting email and pass from req
  const { email, password } = req.body;

  //! Trying to find a admin in db
  const admin = adminModel.findOne({ email });
  if (!admin) {
    return res.status(400).json({
      message: "Email isn't in Db, create account first",
    });
  }

  //! Comparing Password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  //! Generate JWT token
  const token = jwt.sign({ id: admin._id }, process.env.admin_JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({
    message: "Login successfull",
    userId: admin._id,
    token,
  });
};

export default loginController;
