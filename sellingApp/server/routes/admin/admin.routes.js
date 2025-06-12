import express from "express";
import loginController from "../../controller/admin/login.controller";

const adminRoutes = express.Router();

adminRoutes.post("/signIn", loginController);

adminRoutes.post("/signUp");

export default adminRoutes;
