import userModel from "../../../models/user.model.js";

const signUpController = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;

    //! 1. Check if user already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { firstName }], //? $or - query for multiple search
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    //! 2. Create new user
    const newUser = new userModel({ firstName, email, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

export default signUpController;
