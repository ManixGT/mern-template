import express from "express";
import adminAuthMiddleware from "../../middleware/adminAuth.middleware.js";
import upload from "../../middleware/upload.middleware.js";
import createCourse from "../../controller/admin/createCourse.controller.js";
import createdCourses from "../../controller/admin/createdCourses.controller.js";
import deleteCourse from "../../controller/admin/deleteCourse.controller.js";

const adminCourse = express.Router();

adminCourse
  .get("/:id", adminAuthMiddleware, createdCourses)
  .patch("/:id", adminAuthMiddleware, createCourse)
  .delete("/:id", adminAuthMiddleware, deleteCourse)
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
