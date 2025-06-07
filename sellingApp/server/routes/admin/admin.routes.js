import express from "express";

const adminRoutes = express.Router();

adminRoutes.post("/signIn", (req, res) => {
  res.json({
    message: "Admin Sign In",
  });
});

adminRoutes.post("/signUp", (req, res) => {
  res.json({
    message: "SignUp for Admin",
  });
});
