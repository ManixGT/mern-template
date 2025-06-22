import express from "express";
import purchaseController from "../../controller/user/course/purchase.controller";
import fetchCourse from "../../controller/user/course/fetchCourse.controller";
import authMiddleware from "../../middleware/auth.middleware";

const courseRouter = express.Router();

courseRouter
  .post("/", authMiddleware("user"), purchaseController)
  .get("/:id", authMiddleware("user"), fetchCourse);

export default courseRouter;
