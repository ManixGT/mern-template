import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.middleware.js";
import createCourseController from "../../controller/admin/course/createCourse.controller.js";
import updateCourseController from "../../controller/admin/course/updateCourse.controller.js";
import createdCoursesController from "../../controller/admin/course/createdCourses.controller.js";
import deleteCourseController from "../../controller/admin/course/deleteCourse.controller.js";

const router = express.Router();

//! --- Middleware Order Matters ---
// 1. File upload first (fail fast before auth checks)
// 2. Then authentication
// 3. Then business logic in controllers

router.post(
  "/",
  upload.single("image"), //? Handle file first
  authMiddleware("admin"), //? Then check auth
  createCourseController //? Controller handles response
);
router.post("/:id", authMiddleware("admin"), createCourseController);

router.patch(
  "/:id",
  upload.single("image"), //! File first
  authMiddleware("admin"),
  updateCourseController
);

router.get("/:id", authMiddleware("admin"), createdCoursesController);

router.delete("/:id", authMiddleware("admin"), deleteCourseController);

export default router;
