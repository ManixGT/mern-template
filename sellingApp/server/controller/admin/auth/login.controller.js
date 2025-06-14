import adminModel from "../../../models/admin.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginController = async (req, res, next) => {
  //! collecting email and pass from req
  const { email, password } = req.body;

  console.log(email, "email");

  //! Trying to find a admin in db
  const admin = await adminModel.findOne({ email });
  if (!admin) {
    return res.status(400).json({
      message: "Email isn't in Db, create account first",
    });
  }

  //! Comparing Password
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    console.log(isMatch);

    return res.status(401).json({ message: "Invalid Password" });
  }

  //! Generate JWT token and storing id inside jwt token;we can access it on need as well
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
