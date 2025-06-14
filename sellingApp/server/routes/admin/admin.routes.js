import express from "express";
import loginController from "../../controller/admin/auth/login.controller.js";
import signupController from "../../controller/admin/auth/singup.controller.js"; // Make sure the path and filename are correct

const adminRoutes = express.Router();

adminRoutes.post("/signIn", loginController);
adminRoutes.post("/signUp", signupController);

export default adminRoutes;
