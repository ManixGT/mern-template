import express from "express";
import logoutController from "../../controller/user/logout.controller.js";

const logoutRouter = express.Router();

logoutRouter.get("/logout", logoutController);
