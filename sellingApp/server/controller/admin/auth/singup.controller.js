import adminModel from "../../../models/admin.model.js";

const signupController = async (req, res, next) => {
  const { email, password, firstName } = req.body;

  const existingUser = await adminModel.findOne({ email });
  if (existingUser) {
    res.json({ message: "Already an Admin, Log In direclty" });
  }

  const newAdmin = new adminModel({ email, password, firstName });
  await newAdmin.save();

  res.status(201).json({ message: "Successfully Created in Admin" });
};

export default signupController;
