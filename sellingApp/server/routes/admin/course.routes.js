import express from "express";
import adminAuthMiddleware from "../../middleware/adminAuth.middleware.js";

const adminCourse = express.Router();

adminCourse.use(adminAuthMiddleware);

adminCourse
  .get("/:id", (req, res) => {
    res.send("Admin get course");
  })
  .patch("/:id", (req, res) => {
    res.send("Edit the course");
  })
  .delete("/:id", (req, res) => {
    res.send("Delete the course");
  })
  .post("/", (req, res) => {
    res.send("Create the course");
  });

export default adminCourse;
