import express from "express";
import signUpController from "../../controller/user/signUp.controller.js";
import loginController from "../../controller/user/login.controller.js";

const userRouter = express.Router();

userRouter.post("/signIn", loginController);

userRouter.post("/signUp", signUpController);

export default userRouter;
