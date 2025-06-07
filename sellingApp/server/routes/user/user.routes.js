import express from "express";

const userRouter = express.Router();

userRouter.post("/signIn", (req, res) => {
  res.send("signIn route");
});

userRouter.post("/signUp", (req, res) => {
  res.send("signUp route");
});

export default userRouter;
