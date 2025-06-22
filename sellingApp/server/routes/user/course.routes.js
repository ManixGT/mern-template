import express from "express";
import purchaseController from "../../controller/user/course/purchase.controller.js";
import fetchCourse from "../../controller/user/course/fetchCourse.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const courseRouter = express.Router();

courseRouter
  .post("/", authMiddleware("user"), purchaseController)
  .get("/:id", fetchCourse);

export default courseRouter;
