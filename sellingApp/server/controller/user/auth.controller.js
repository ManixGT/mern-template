import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //! Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    //! Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};
