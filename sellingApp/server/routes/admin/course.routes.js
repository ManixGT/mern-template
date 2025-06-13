import express from "express";
import adminAuthMiddleware from "../../middleware/adminAuth.middleware.js";
import createCourseController from "../../controller/admin/createCourse.controller.js";
import upload from "../../middleware/upload.middleware.js";

const adminCourse = express.Router();

adminCourse
  .get("/:id", adminAuthMiddleware, (req, res) => {
    res.send("Admin get course");
  })
  .patch("/:id", adminAuthMiddleware)
  .delete("/:id", adminAuthMiddleware, (req, res) => {
    res.send("Delete the course");
  })
  .post(
    "/",
    adminAuthMiddleware,
    upload.single("image"),
    createCourseController,
    (req, res) => {
      res.send("Create the course");
    }
  );

export default adminCourse;
