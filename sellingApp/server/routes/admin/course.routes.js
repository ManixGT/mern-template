import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.middleware.js";
import createCourse from "../../controller/admin/createCourse.controller.js";
import createdCourses from "../../controller/admin/createdCourses.controller.js";
import deleteCourse from "../../controller/admin/deleteCourse.controller.js";

const adminCourse = express.Router();

adminCourse
  .get("/:id", authMiddleware, createdCourses)
  .patch("/:id", authMiddleware, createCourse)
  .delete("/:id", authMiddleware, deleteCourse)
  .post(
    "/",
    authMiddleware,
    upload.single("image"),
    createCourseController,
    (req, res) => {
      res.send("Create the course");
    }
  );

export default adminCourse;
