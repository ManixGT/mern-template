const logoutController = (req, res, next) => {
  res.status(201).json({ message: "User Logged Out Successfully" });
};

export default logoutController;
