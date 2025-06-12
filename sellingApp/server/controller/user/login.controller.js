import userModel from "../../models/user.model";

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  //! 1. Check if a newUser, then need to signUp first
  const newUser = await userModel.findOne({ email });
  if (newUser) {
    return res
      .status(400)
      .json({ message: "Email isn't in Database,Create your account first" });
  }

  //! 2. Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  //! 3. Generate JWT Token

  res.status(200).json({ message: "Login successful", userId: user._id });
};

export default loginController;
