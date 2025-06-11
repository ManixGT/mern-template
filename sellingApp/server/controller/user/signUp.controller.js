const signUpController = (req, res, next) => {
  const { email, password, firstName, lastName, role } = req.body;
  res.send({ msg: "SignUp USER" });
};

export default signUpController;
