import express from "express";
import signUpController from "../../controller/user/signUp.controller.js";

const userRouter = express.Router();

userRouter.post("/signIn", (req, res) => {
  res.send("signIn route");
});

userRouter.post("/signUp", signUpController);

export default userRouter;
