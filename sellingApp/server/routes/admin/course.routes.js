import express from "express";
import adminAuthMiddleware from "../../middleware/adminAuth.middleware.js";
import courseController from "../../controller/admin/course.controller.js";
import upload from "../../middleware/upload.middleware.js";

const adminCourse = express.Router();

adminCourse
  .get("/:id", adminAuthMiddleware, (req, res) => {
    res.send("Admin get course");
  })
  .patch("/:id", adminAuthMiddleware, (req, res) => {
    res.send("Edit the course");
  })
  .delete("/:id", adminAuthMiddleware, (req, res) => {
    res.send("Delete the course");
  })
  .post(
    "/",
    adminAuthMiddleware,
    upload.single("image"),
    courseController,
    (req, res) => {
      res.send("Create the course");
    }
  );

export default adminCourse;
